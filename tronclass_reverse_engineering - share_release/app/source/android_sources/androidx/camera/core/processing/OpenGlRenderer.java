package androidx.camera.core.processing;

import android.graphics.Bitmap;
import android.opengl.EGL14;
import android.opengl.EGLConfig;
import android.opengl.EGLContext;
import android.opengl.EGLDisplay;
import android.opengl.EGLExt;
import android.opengl.EGLSurface;
import android.opengl.GLES20;
import android.util.Log;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.ImageProcessingUtil;
import androidx.camera.core.Logger;
import androidx.core.util.Preconditions;
import androidx.work.Data;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;
public final class OpenGlRenderer {
    private static final int PIXEL_STRIDE = 4;
    private static final int SIZEOF_FLOAT = 4;
    private static final String TAG = "OpenGlRenderer";
    private static final FloatBuffer TEX_BUF;
    private static final float[] TEX_COORDS;
    private static final FloatBuffer VERTEX_BUF;
    private static final float[] VERTEX_COORDS;
    private Surface mCurrentSurface;
    private EGLConfig mEglConfig;
    private Thread mGlThread;
    private static final String VAR_TEXTURE_COORD = "vTextureCoord";
    private static final String DEFAULT_VERTEX_SHADER = String.format(Locale.US, "uniform mat4 uTexMatrix;\nattribute vec4 aPosition;\nattribute vec4 aTextureCoord;\nvarying vec2 %s;\nvoid main() {\n    gl_Position = aPosition;\n    %s = (uTexMatrix * aTextureCoord).xy;\n}\n", VAR_TEXTURE_COORD, VAR_TEXTURE_COORD);
    private static final String HDR_VERTEX_SHADER = String.format(Locale.US, "#version 300 es\nin vec4 aPosition;\nin vec4 aTextureCoord;\nuniform mat4 uTexMatrix;\nout vec2 %s;\nvoid main() {\n  gl_Position = aPosition;\n  %s = (uTexMatrix * aTextureCoord).xy;\n}\n", VAR_TEXTURE_COORD, VAR_TEXTURE_COORD);
    private static final String VAR_TEXTURE = "sTexture";
    private static final String DEFAULT_FRAGMENT_SHADER = String.format(Locale.US, "#extension GL_OES_EGL_image_external : require\nprecision mediump float;\nvarying vec2 %s;\nuniform samplerExternalOES %s;\nvoid main() {\n    gl_FragColor = texture2D(%s, %s);\n}\n", VAR_TEXTURE_COORD, VAR_TEXTURE, VAR_TEXTURE, VAR_TEXTURE_COORD);
    private static final String HDR_FRAGMENT_SHADER = String.format(Locale.US, "#version 300 es\n#extension GL_OES_EGL_image_external : require\n#extension GL_EXT_YUV_target : require\nprecision mediump float;\nuniform __samplerExternal2DY2YEXT %s;\nin vec2 %s;\nout vec4 outColor;\n\nvec3 yuvToRgb(vec3 yuv) {\n  const vec3 yuvOffset = vec3(0.0625, 0.5, 0.5);\n  const mat3 yuvToRgbColorTransform = mat3(\n    1.1689f, 1.1689f, 1.1689f,\n    0.0000f, -0.1881f, 2.1502f,\n    1.6853f, -0.6530f, 0.0000f\n  );\n  return clamp(yuvToRgbColorTransform * (yuv - yuvOffset), 0.0, 1.0);\n}\n\nvoid main() {\n  vec3 srcYuv = texture(%s, %s).xyz;\n  outColor = vec4(yuvToRgb(srcYuv), 1.0);\n}", VAR_TEXTURE, VAR_TEXTURE_COORD, VAR_TEXTURE, VAR_TEXTURE_COORD);
    private static final OutputSurface NO_OUTPUT_SURFACE = OutputSurface.of(EGL14.EGL_NO_SURFACE, 0, 0);
    private final AtomicBoolean mInitialized = new AtomicBoolean(false);
    final Map<Surface, OutputSurface> mOutputSurfaceMap = new HashMap();
    private EGLDisplay mEglDisplay = EGL14.EGL_NO_DISPLAY;
    private EGLContext mEglContext = EGL14.EGL_NO_CONTEXT;
    private EGLSurface mTempSurface = EGL14.EGL_NO_SURFACE;
    private int mExternalTextureId = -1;
    private int mProgramHandle = -1;
    private int mTexMatrixLoc = -1;
    private int mPositionLoc = -1;
    private int mTexCoordLoc = -1;

    static {
        float[] fArr = {-1.0f, -1.0f, 1.0f, -1.0f, -1.0f, 1.0f, 1.0f, 1.0f};
        VERTEX_COORDS = fArr;
        VERTEX_BUF = createFloatBuffer(fArr);
        float[] fArr2 = {0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f};
        TEX_COORDS = fArr2;
        TEX_BUF = createFloatBuffer(fArr2);
    }

    public void init(DynamicRange dynamicRange, ShaderProvider shaderProvider) {
        checkInitializedOrThrow(false);
        try {
            if (dynamicRange.is10BitHdr() && !getGlExtensionsBeforeInitialized(dynamicRange).contains("GL_EXT_YUV_target")) {
                Log.w(TAG, "Device does not support GL_EXT_YUV_target. Fallback to SDR.");
                dynamicRange = DynamicRange.SDR;
            }
            createEglContext(dynamicRange);
            createTempSurface();
            makeCurrent(this.mTempSurface);
            createProgram(dynamicRange, shaderProvider);
            loadLocations();
            createTexture();
            useAndConfigureProgram();
            this.mGlThread = Thread.currentThread();
            this.mInitialized.set(true);
        } catch (IllegalArgumentException | IllegalStateException e) {
            releaseInternal();
            throw e;
        }
    }

    public void release() {
        if (this.mInitialized.getAndSet(false)) {
            checkGlThreadOrThrow();
            releaseInternal();
        }
    }

    public void registerOutputSurface(Surface surface) {
        checkInitializedOrThrow(true);
        checkGlThreadOrThrow();
        if (this.mOutputSurfaceMap.containsKey(surface)) {
            return;
        }
        this.mOutputSurfaceMap.put(surface, NO_OUTPUT_SURFACE);
    }

    public void unregisterOutputSurface(Surface surface) {
        checkInitializedOrThrow(true);
        checkGlThreadOrThrow();
        removeOutputSurfaceInternal(surface, true);
    }

    public int getTextureName() {
        checkInitializedOrThrow(true);
        checkGlThreadOrThrow();
        return this.mExternalTextureId;
    }

    public void render(long j, float[] fArr, Surface surface) {
        checkInitializedOrThrow(true);
        checkGlThreadOrThrow();
        OutputSurface outSurfaceOrThrow = getOutSurfaceOrThrow(surface);
        if (outSurfaceOrThrow == NO_OUTPUT_SURFACE) {
            outSurfaceOrThrow = createOutputSurfaceInternal(surface);
            if (outSurfaceOrThrow == null) {
                return;
            } else {
                this.mOutputSurfaceMap.put(surface, outSurfaceOrThrow);
            }
        }
        if (surface != this.mCurrentSurface) {
            makeCurrent(outSurfaceOrThrow.getEglSurface());
            this.mCurrentSurface = surface;
            GLES20.glViewport(0, 0, outSurfaceOrThrow.getWidth(), outSurfaceOrThrow.getHeight());
            GLES20.glScissor(0, 0, outSurfaceOrThrow.getWidth(), outSurfaceOrThrow.getHeight());
        }
        GLES20.glUniformMatrix4fv(this.mTexMatrixLoc, 1, false, fArr, 0);
        checkGlErrorOrThrow("glUniformMatrix4fv");
        GLES20.glDrawArrays(5, 0, 4);
        checkGlErrorOrThrow("glDrawArrays");
        EGLExt.eglPresentationTimeANDROID(this.mEglDisplay, outSurfaceOrThrow.getEglSurface(), j);
        if (EGL14.eglSwapBuffers(this.mEglDisplay, outSurfaceOrThrow.getEglSurface())) {
            return;
        }
        Logger.w(TAG, "Failed to swap buffers with EGL error: 0x" + Integer.toHexString(EGL14.eglGetError()));
        removeOutputSurfaceInternal(surface, false);
    }

    public Bitmap snapshot(Size size, float[] fArr) {
        ByteBuffer byteBufferAllocateDirect = ByteBuffer.allocateDirect(size.getWidth() * size.getHeight() * 4);
        snapshot(byteBufferAllocateDirect, size, fArr);
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(size.getWidth(), size.getHeight(), Bitmap.Config.ARGB_8888);
        byteBufferAllocateDirect.rewind();
        ImageProcessingUtil.copyByteBufferToBitmap(bitmapCreateBitmap, byteBufferAllocateDirect, size.getWidth() * 4);
        return bitmapCreateBitmap;
    }

    private void snapshot(ByteBuffer byteBuffer, Size size, float[] fArr) {
        Preconditions.checkArgument(byteBuffer.capacity() == (size.getWidth() * size.getHeight()) * 4, "ByteBuffer capacity is not equal to width * height * 4.");
        Preconditions.checkArgument(byteBuffer.isDirect(), "ByteBuffer is not direct.");
        int iGenerateTexture = generateTexture();
        GLES20.glActiveTexture(33985);
        checkGlErrorOrThrow("glActiveTexture");
        GLES20.glBindTexture(3553, iGenerateTexture);
        checkGlErrorOrThrow("glBindTexture");
        GLES20.glTexImage2D(3553, 0, 6407, size.getWidth(), size.getHeight(), 0, 6407, 5121, null);
        checkGlErrorOrThrow("glTexImage2D");
        GLES20.glTexParameteri(3553, Data.MAX_DATA_BYTES, 9729);
        GLES20.glTexParameteri(3553, 10241, 9729);
        int iGenerateFbo = generateFbo();
        GLES20.glBindFramebuffer(36160, iGenerateFbo);
        checkGlErrorOrThrow("glBindFramebuffer");
        GLES20.glFramebufferTexture2D(36160, 36064, 3553, iGenerateTexture, 0);
        checkGlErrorOrThrow("glFramebufferTexture2D");
        GLES20.glActiveTexture(33984);
        checkGlErrorOrThrow("glActiveTexture");
        GLES20.glBindTexture(36197, this.mExternalTextureId);
        checkGlErrorOrThrow("glBindTexture");
        this.mCurrentSurface = null;
        GLES20.glViewport(0, 0, size.getWidth(), size.getHeight());
        GLES20.glScissor(0, 0, size.getWidth(), size.getHeight());
        GLES20.glUniformMatrix4fv(this.mTexMatrixLoc, 1, false, fArr, 0);
        checkGlErrorOrThrow("glUniformMatrix4fv");
        GLES20.glDrawArrays(5, 0, 4);
        checkGlErrorOrThrow("glDrawArrays");
        GLES20.glReadPixels(0, 0, size.getWidth(), size.getHeight(), 6408, 5121, byteBuffer);
        checkGlErrorOrThrow("glReadPixels");
        GLES20.glBindFramebuffer(36160, 0);
        deleteTexture(iGenerateTexture);
        deleteFbo(iGenerateFbo);
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.mExternalTextureId);
    }

    private String getGlExtensionsBeforeInitialized(DynamicRange dynamicRange) {
        checkInitializedOrThrow(false);
        try {
            createEglContext(dynamicRange);
            createTempSurface();
            makeCurrent(this.mTempSurface);
            String strGlGetString = GLES20.glGetString(7939);
            return strGlGetString != null ? strGlGetString : "";
        } catch (IllegalStateException e) {
            Logger.w(TAG, "Failed to get GL extensions: " + e.getMessage(), e);
            return "";
        } finally {
            releaseInternal();
        }
    }

    private static int generateFbo() {
        int[] iArr = new int[1];
        GLES20.glGenFramebuffers(1, iArr, 0);
        checkGlErrorOrThrow("glGenFramebuffers");
        return iArr[0];
    }

    private static int generateTexture() {
        int[] iArr = new int[1];
        GLES20.glGenTextures(1, iArr, 0);
        checkGlErrorOrThrow("glGenTextures");
        return iArr[0];
    }

    private static void deleteTexture(int i) {
        GLES20.glDeleteTextures(1, new int[]{i}, 0);
        checkGlErrorOrThrow("glDeleteTextures");
    }

    private static void deleteFbo(int i) {
        GLES20.glDeleteFramebuffers(1, new int[]{i}, 0);
        checkGlErrorOrThrow("glDeleteFramebuffers");
    }

    private void createEglContext(DynamicRange dynamicRange) {
        EGLDisplay eGLDisplayEglGetDisplay = EGL14.eglGetDisplay(0);
        this.mEglDisplay = eGLDisplayEglGetDisplay;
        if (Objects.equals(eGLDisplayEglGetDisplay, EGL14.EGL_NO_DISPLAY)) {
            throw new IllegalStateException("Unable to get EGL14 display");
        }
        int[] iArr = new int[2];
        if (!EGL14.eglInitialize(this.mEglDisplay, iArr, 0, iArr, 1)) {
            this.mEglDisplay = EGL14.EGL_NO_DISPLAY;
            throw new IllegalStateException("Unable to initialize EGL14");
        }
        int i = dynamicRange.is10BitHdr() ? 10 : 8;
        EGLConfig[] eGLConfigArr = new EGLConfig[1];
        if (!EGL14.eglChooseConfig(this.mEglDisplay, new int[]{12324, i, 12323, i, 12322, i, 12321, dynamicRange.is10BitHdr() ? 2 : 8, 12325, 0, 12326, 0, 12352, dynamicRange.is10BitHdr() ? 64 : 4, 12610, !dynamicRange.is10BitHdr() ? 1 : 0, 12339, 5, 12344}, 0, eGLConfigArr, 0, 1, new int[1], 0)) {
            throw new IllegalStateException("Unable to find a suitable EGLConfig");
        }
        EGLConfig eGLConfig = eGLConfigArr[0];
        EGLContext eGLContextEglCreateContext = EGL14.eglCreateContext(this.mEglDisplay, eGLConfig, EGL14.EGL_NO_CONTEXT, new int[]{12440, dynamicRange.is10BitHdr() ? 3 : 2, 12344}, 0);
        checkEglErrorOrThrow("eglCreateContext");
        this.mEglConfig = eGLConfig;
        this.mEglContext = eGLContextEglCreateContext;
        int[] iArr2 = new int[1];
        EGL14.eglQueryContext(this.mEglDisplay, eGLContextEglCreateContext, 12440, iArr2, 0);
        Log.d(TAG, "EGLContext created, client version " + iArr2[0]);
    }

    private void createTempSurface() {
        this.mTempSurface = createPBufferSurface(this.mEglDisplay, (EGLConfig) Objects.requireNonNull(this.mEglConfig), 1, 1);
    }

    private void makeCurrent(EGLSurface eGLSurface) {
        Preconditions.checkNotNull(this.mEglDisplay);
        Preconditions.checkNotNull(this.mEglContext);
        if (!EGL14.eglMakeCurrent(this.mEglDisplay, eGLSurface, eGLSurface, this.mEglContext)) {
            throw new IllegalStateException("eglMakeCurrent failed");
        }
    }

    private void createProgram(DynamicRange dynamicRange, ShaderProvider shaderProvider) throws Throwable {
        int i;
        int i2;
        int iLoadShader;
        int iGlCreateProgram;
        try {
            iLoadShader = loadShader(35633, dynamicRange.is10BitHdr() ? HDR_VERTEX_SHADER : DEFAULT_VERTEX_SHADER);
            try {
                int iLoadFragmentShader = loadFragmentShader(dynamicRange, shaderProvider);
                try {
                    iGlCreateProgram = GLES20.glCreateProgram();
                } catch (IllegalArgumentException | IllegalStateException e) {
                    i2 = -1;
                    i = iLoadFragmentShader;
                    e = e;
                }
                try {
                    checkGlErrorOrThrow("glCreateProgram");
                    GLES20.glAttachShader(iGlCreateProgram, iLoadShader);
                    checkGlErrorOrThrow("glAttachShader");
                    GLES20.glAttachShader(iGlCreateProgram, iLoadFragmentShader);
                    checkGlErrorOrThrow("glAttachShader");
                    GLES20.glLinkProgram(iGlCreateProgram);
                    int[] iArr = new int[1];
                    GLES20.glGetProgramiv(iGlCreateProgram, 35714, iArr, 0);
                    if (iArr[0] != 1) {
                        throw new IllegalStateException("Could not link program: " + GLES20.glGetProgramInfoLog(iGlCreateProgram));
                    }
                    this.mProgramHandle = iGlCreateProgram;
                } catch (IllegalArgumentException | IllegalStateException e2) {
                    i = iLoadFragmentShader;
                    e = e2;
                    i2 = iGlCreateProgram;
                    if (iLoadShader != -1) {
                        GLES20.glDeleteShader(iLoadShader);
                    }
                    if (i != -1) {
                        GLES20.glDeleteShader(i);
                    }
                    if (i2 != -1) {
                        GLES20.glDeleteProgram(i2);
                    }
                    throw e;
                }
            } catch (IllegalArgumentException | IllegalStateException e3) {
                e = e3;
                i = -1;
                i2 = -1;
            }
        } catch (IllegalArgumentException | IllegalStateException e4) {
            e = e4;
            i = -1;
            i2 = -1;
            iLoadShader = -1;
        }
    }

    private void useAndConfigureProgram() {
        GLES20.glUseProgram(this.mProgramHandle);
        checkGlErrorOrThrow("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.mExternalTextureId);
        GLES20.glEnableVertexAttribArray(this.mPositionLoc);
        checkGlErrorOrThrow("glEnableVertexAttribArray");
        GLES20.glVertexAttribPointer(this.mPositionLoc, 2, 5126, false, 0, (Buffer) VERTEX_BUF);
        checkGlErrorOrThrow("glVertexAttribPointer");
        GLES20.glEnableVertexAttribArray(this.mTexCoordLoc);
        checkGlErrorOrThrow("glEnableVertexAttribArray");
        GLES20.glVertexAttribPointer(this.mTexCoordLoc, 2, 5126, false, 0, (Buffer) TEX_BUF);
        checkGlErrorOrThrow("glVertexAttribPointer");
    }

    private void loadLocations() {
        int iGlGetAttribLocation = GLES20.glGetAttribLocation(this.mProgramHandle, "aPosition");
        this.mPositionLoc = iGlGetAttribLocation;
        checkLocationOrThrow(iGlGetAttribLocation, "aPosition");
        int iGlGetAttribLocation2 = GLES20.glGetAttribLocation(this.mProgramHandle, "aTextureCoord");
        this.mTexCoordLoc = iGlGetAttribLocation2;
        checkLocationOrThrow(iGlGetAttribLocation2, "aTextureCoord");
        int iGlGetUniformLocation = GLES20.glGetUniformLocation(this.mProgramHandle, "uTexMatrix");
        this.mTexMatrixLoc = iGlGetUniformLocation;
        checkLocationOrThrow(iGlGetUniformLocation, "uTexMatrix");
    }

    private void createTexture() {
        int[] iArr = new int[1];
        GLES20.glGenTextures(1, iArr, 0);
        checkGlErrorOrThrow("glGenTextures");
        int i = iArr[0];
        GLES20.glBindTexture(36197, i);
        checkGlErrorOrThrow("glBindTexture " + i);
        GLES20.glTexParameterf(36197, 10241, 9728.0f);
        GLES20.glTexParameterf(36197, Data.MAX_DATA_BYTES, 9729.0f);
        GLES20.glTexParameteri(36197, 10242, 33071);
        GLES20.glTexParameteri(36197, 10243, 33071);
        checkGlErrorOrThrow("glTexParameter");
        this.mExternalTextureId = i;
    }

    private int loadFragmentShader(DynamicRange dynamicRange, ShaderProvider shaderProvider) {
        if (shaderProvider == ShaderProvider.DEFAULT) {
            return loadShader(35632, dynamicRange.is10BitHdr() ? HDR_FRAGMENT_SHADER : DEFAULT_FRAGMENT_SHADER);
        }
        try {
            String strCreateFragmentShader = shaderProvider.createFragmentShader(VAR_TEXTURE, VAR_TEXTURE_COORD);
            if (strCreateFragmentShader == null || !strCreateFragmentShader.contains(VAR_TEXTURE_COORD) || !strCreateFragmentShader.contains(VAR_TEXTURE)) {
                throw new IllegalArgumentException("Invalid fragment shader");
            }
            return loadShader(35632, strCreateFragmentShader);
        } catch (Throwable th) {
            if (th instanceof IllegalArgumentException) {
                throw th;
            }
            throw new IllegalArgumentException("Unable to compile fragment shader", th);
        }
    }

    private Size getSurfaceSize(EGLSurface eGLSurface) {
        return new Size(querySurface(this.mEglDisplay, eGLSurface, 12375), querySurface(this.mEglDisplay, eGLSurface, 12374));
    }

    private void releaseInternal() {
        int i = this.mProgramHandle;
        if (i != -1) {
            GLES20.glDeleteProgram(i);
            this.mProgramHandle = -1;
        }
        if (!Objects.equals(this.mEglDisplay, EGL14.EGL_NO_DISPLAY)) {
            EGL14.eglMakeCurrent(this.mEglDisplay, EGL14.EGL_NO_SURFACE, EGL14.EGL_NO_SURFACE, EGL14.EGL_NO_CONTEXT);
            for (OutputSurface outputSurface : this.mOutputSurfaceMap.values()) {
                if (!Objects.equals(outputSurface.getEglSurface(), EGL14.EGL_NO_SURFACE) && !EGL14.eglDestroySurface(this.mEglDisplay, outputSurface.getEglSurface())) {
                    checkEglErrorOrLog("eglDestroySurface");
                }
            }
            this.mOutputSurfaceMap.clear();
            if (!Objects.equals(this.mTempSurface, EGL14.EGL_NO_SURFACE)) {
                EGL14.eglDestroySurface(this.mEglDisplay, this.mTempSurface);
                this.mTempSurface = EGL14.EGL_NO_SURFACE;
            }
            if (!Objects.equals(this.mEglContext, EGL14.EGL_NO_CONTEXT)) {
                EGL14.eglDestroyContext(this.mEglDisplay, this.mEglContext);
                this.mEglContext = EGL14.EGL_NO_CONTEXT;
            }
            EGL14.eglReleaseThread();
            EGL14.eglTerminate(this.mEglDisplay);
            this.mEglDisplay = EGL14.EGL_NO_DISPLAY;
        }
        this.mEglConfig = null;
        this.mProgramHandle = -1;
        this.mTexMatrixLoc = -1;
        this.mPositionLoc = -1;
        this.mTexCoordLoc = -1;
        this.mExternalTextureId = -1;
        this.mCurrentSurface = null;
        this.mGlThread = null;
    }

    private void checkInitializedOrThrow(boolean z) {
        String str;
        boolean z2 = z == this.mInitialized.get();
        if (z) {
            str = "OpenGlRenderer is not initialized";
        } else {
            str = "OpenGlRenderer is already initialized";
        }
        Preconditions.checkState(z2, str);
    }

    private void checkGlThreadOrThrow() {
        Preconditions.checkState(this.mGlThread == Thread.currentThread(), "Method call must be called on the GL thread.");
    }

    private OutputSurface getOutSurfaceOrThrow(Surface surface) {
        Preconditions.checkState(this.mOutputSurfaceMap.containsKey(surface), "The surface is not registered.");
        return (OutputSurface) Objects.requireNonNull(this.mOutputSurfaceMap.get(surface));
    }

    private static EGLSurface createPBufferSurface(EGLDisplay eGLDisplay, EGLConfig eGLConfig, int i, int i2) {
        EGLSurface eGLSurfaceEglCreatePbufferSurface = EGL14.eglCreatePbufferSurface(eGLDisplay, eGLConfig, new int[]{12375, i, 12374, i2, 12344}, 0);
        checkEglErrorOrThrow("eglCreatePbufferSurface");
        if (eGLSurfaceEglCreatePbufferSurface != null) {
            return eGLSurfaceEglCreatePbufferSurface;
        }
        throw new IllegalStateException("surface was null");
    }

    private OutputSurface createOutputSurfaceInternal(Surface surface) {
        try {
            EGLSurface eGLSurfaceCreateWindowSurface = createWindowSurface(this.mEglDisplay, (EGLConfig) Objects.requireNonNull(this.mEglConfig), surface);
            Size surfaceSize = getSurfaceSize(eGLSurfaceCreateWindowSurface);
            return OutputSurface.of(eGLSurfaceCreateWindowSurface, surfaceSize.getWidth(), surfaceSize.getHeight());
        } catch (IllegalArgumentException | IllegalStateException e) {
            Logger.w(TAG, "Failed to create EGL surface: " + e.getMessage(), e);
            return null;
        }
    }

    private void removeOutputSurfaceInternal(Surface surface, boolean z) {
        OutputSurface outputSurfacePut;
        if (this.mCurrentSurface == surface) {
            this.mCurrentSurface = null;
            makeCurrent(this.mTempSurface);
        }
        if (z) {
            outputSurfacePut = this.mOutputSurfaceMap.remove(surface);
        } else {
            outputSurfacePut = this.mOutputSurfaceMap.put(surface, NO_OUTPUT_SURFACE);
        }
        if (outputSurfacePut == null || outputSurfacePut == NO_OUTPUT_SURFACE) {
            return;
        }
        try {
            EGL14.eglDestroySurface(this.mEglDisplay, outputSurfacePut.getEglSurface());
        } catch (RuntimeException e) {
            Logger.w(TAG, "Failed to destroy EGL surface: " + e.getMessage(), e);
        }
    }

    private static EGLSurface createWindowSurface(EGLDisplay eGLDisplay, EGLConfig eGLConfig, Surface surface) {
        EGLSurface eGLSurfaceEglCreateWindowSurface = EGL14.eglCreateWindowSurface(eGLDisplay, eGLConfig, surface, new int[]{12344}, 0);
        checkEglErrorOrThrow("eglCreateWindowSurface");
        if (eGLSurfaceEglCreateWindowSurface != null) {
            return eGLSurfaceEglCreateWindowSurface;
        }
        throw new IllegalStateException("surface was null");
    }

    private static int loadShader(int i, String str) {
        int iGlCreateShader = GLES20.glCreateShader(i);
        checkGlErrorOrThrow("glCreateShader type=" + i);
        GLES20.glShaderSource(iGlCreateShader, str);
        GLES20.glCompileShader(iGlCreateShader);
        int[] iArr = new int[1];
        GLES20.glGetShaderiv(iGlCreateShader, 35713, iArr, 0);
        if (iArr[0] != 0) {
            return iGlCreateShader;
        }
        Logger.w(TAG, "Could not compile shader: " + str);
        GLES20.glDeleteShader(iGlCreateShader);
        throw new IllegalStateException("Could not compile shader type " + i + ":" + GLES20.glGetShaderInfoLog(iGlCreateShader));
    }

    private static int querySurface(EGLDisplay eGLDisplay, EGLSurface eGLSurface, int i) {
        int[] iArr = new int[1];
        EGL14.eglQuerySurface(eGLDisplay, eGLSurface, i, iArr, 0);
        return iArr[0];
    }

    public static FloatBuffer createFloatBuffer(float[] fArr) {
        ByteBuffer byteBufferAllocateDirect = ByteBuffer.allocateDirect(fArr.length * 4);
        byteBufferAllocateDirect.order(ByteOrder.nativeOrder());
        FloatBuffer floatBufferAsFloatBuffer = byteBufferAllocateDirect.asFloatBuffer();
        floatBufferAsFloatBuffer.put(fArr);
        floatBufferAsFloatBuffer.position(0);
        return floatBufferAsFloatBuffer;
    }

    private static void checkLocationOrThrow(int i, String str) {
        if (i < 0) {
            throw new IllegalStateException("Unable to locate '" + str + "' in program");
        }
    }

    private static void checkEglErrorOrThrow(String str) {
        int iEglGetError = EGL14.eglGetError();
        if (iEglGetError != 12288) {
            throw new IllegalStateException(str + ": EGL error: 0x" + Integer.toHexString(iEglGetError));
        }
    }

    private static void checkEglErrorOrLog(String str) {
        try {
            checkEglErrorOrThrow(str);
        } catch (IllegalStateException e) {
            Logger.e(TAG, e.toString(), e);
        }
    }

    private static void checkGlErrorOrThrow(String str) {
        int iGlGetError = GLES20.glGetError();
        if (iGlGetError != 0) {
            throw new IllegalStateException(str + ": GL error 0x" + Integer.toHexString(iGlGetError));
        }
    }

    static abstract class OutputSurface {
        abstract EGLSurface getEglSurface();

        abstract int getHeight();

        abstract int getWidth();

        OutputSurface() {
        }

        static OutputSurface of(EGLSurface eGLSurface, int i, int i2) {
            return new AutoValue_OpenGlRenderer_OutputSurface(eGLSurface, i, i2);
        }
    }
}

