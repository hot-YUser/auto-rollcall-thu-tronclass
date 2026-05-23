package org.opencv.android;

import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;
import android.util.Log;
import androidx.work.Data;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import org.opencv.android.CameraGLSurfaceView;
public abstract class CameraGLRendererBase implements GLSurfaceView.Renderer, SurfaceTexture.OnFrameAvailableListener {
    protected SurfaceTexture mSTexture;
    protected CameraGLSurfaceView mView;
    private FloatBuffer tex2D;
    private final float[] texCoord2D;
    private final float[] texCoordOES;
    private FloatBuffer texOES;
    private int vPos2D;
    private int vPosOES;
    private int vTC2D;
    private int vTCOES;
    private FloatBuffer vert;
    private final float[] vertices;
    protected final String LOGTAG = "CameraGLRendererBase";
    private final String vss = "attribute vec2 vPosition;\nattribute vec2 vTexCoord;\nvarying vec2 texCoord;\nvoid main() {\n  texCoord = vTexCoord;\n  gl_Position = vec4 ( vPosition.x, vPosition.y, 0.0, 1.0 );\n}";
    private final String fssOES = "#extension GL_OES_EGL_image_external : require\nprecision mediump float;\nuniform samplerExternalOES sTexture;\nvarying vec2 texCoord;\nvoid main() {\n  gl_FragColor = texture2D(sTexture,texCoord);\n}";
    private final String fss2D = "precision mediump float;\nuniform sampler2D sTexture;\nvarying vec2 texCoord;\nvoid main() {\n  gl_FragColor = texture2D(sTexture,texCoord);\n}";
    private int[] texCamera = {0};
    private int[] texFBO = {0};
    private int[] texDraw = {0};
    private int[] FBO = {0};
    private int progOES = -1;
    private int prog2D = -1;
    protected int mCameraWidth = -1;
    protected int mCameraHeight = -1;
    protected int mFBOWidth = -1;
    protected int mFBOHeight = -1;
    protected int mMaxCameraWidth = -1;
    protected int mMaxCameraHeight = -1;
    protected int mCameraIndex = -1;
    protected boolean mHaveSurface = false;
    protected boolean mHaveFBO = false;
    protected boolean mUpdateST = false;
    protected boolean mEnabled = true;
    protected boolean mIsStarted = false;

    protected abstract void closeCamera();

    protected abstract void openCamera(int i);

    protected abstract void setCameraPreviewSize(int i, int i2);

    public CameraGLRendererBase(CameraGLSurfaceView cameraGLSurfaceView) {
        float[] fArr = {-1.0f, -1.0f, -1.0f, 1.0f, 1.0f, -1.0f, 1.0f, 1.0f};
        this.vertices = fArr;
        float[] fArr2 = {0.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f};
        this.texCoordOES = fArr2;
        float[] fArr3 = {0.0f, 0.0f, 0.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.texCoord2D = fArr3;
        this.mView = cameraGLSurfaceView;
        int length = (fArr.length * 32) / 8;
        this.vert = ByteBuffer.allocateDirect(length).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.texOES = ByteBuffer.allocateDirect(length).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.tex2D = ByteBuffer.allocateDirect(length).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.vert.put(fArr).position(0);
        this.texOES.put(fArr2).position(0);
        this.tex2D.put(fArr3).position(0);
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public synchronized void onFrameAvailable(SurfaceTexture surfaceTexture) {
        this.mUpdateST = true;
        this.mView.requestRender();
    }

    @Override // android.opengl.GLSurfaceView.Renderer
    public void onDrawFrame(GL10 gl10) {
        if (this.mHaveFBO) {
            synchronized (this) {
                if (this.mUpdateST) {
                    this.mSTexture.updateTexImage();
                    this.mUpdateST = false;
                }
                GLES20.glClear(16384);
                CameraGLSurfaceView.CameraTextureListener cameraTextureListener = this.mView.getCameraTextureListener();
                if (cameraTextureListener != null) {
                    drawTex(this.texCamera[0], true, this.FBO[0]);
                    if (cameraTextureListener.onCameraTexture(this.texFBO[0], this.texDraw[0], this.mCameraWidth, this.mCameraHeight)) {
                        drawTex(this.texDraw[0], false, 0);
                    } else {
                        drawTex(this.texFBO[0], false, 0);
                    }
                } else {
                    Log.d("CameraGLRendererBase", "texCamera(OES) -> screen");
                    drawTex(this.texCamera[0], true, 0);
                }
            }
        }
    }

    @Override // android.opengl.GLSurfaceView.Renderer
    public void onSurfaceChanged(GL10 gl10, int i, int i2) {
        Log.i("CameraGLRendererBase", "onSurfaceChanged(" + i + "x" + i2 + ")");
        this.mHaveSurface = true;
        updateState();
        setPreviewSize(i, i2);
    }

    @Override // android.opengl.GLSurfaceView.Renderer
    public void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
        Log.i("CameraGLRendererBase", "onSurfaceCreated");
        initShaders();
    }

    private void initShaders() {
        String strGlGetString = GLES20.glGetString(7938);
        if (strGlGetString != null) {
            Log.i("CameraGLRendererBase", "OpenGL ES version: " + strGlGetString);
        }
        GLES20.glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
        int iLoadShader = loadShader("attribute vec2 vPosition;\nattribute vec2 vTexCoord;\nvarying vec2 texCoord;\nvoid main() {\n  texCoord = vTexCoord;\n  gl_Position = vec4 ( vPosition.x, vPosition.y, 0.0, 1.0 );\n}", "#extension GL_OES_EGL_image_external : require\nprecision mediump float;\nuniform samplerExternalOES sTexture;\nvarying vec2 texCoord;\nvoid main() {\n  gl_FragColor = texture2D(sTexture,texCoord);\n}");
        this.progOES = iLoadShader;
        this.vPosOES = GLES20.glGetAttribLocation(iLoadShader, "vPosition");
        this.vTCOES = GLES20.glGetAttribLocation(this.progOES, "vTexCoord");
        GLES20.glEnableVertexAttribArray(this.vPosOES);
        GLES20.glEnableVertexAttribArray(this.vTCOES);
        int iLoadShader2 = loadShader("attribute vec2 vPosition;\nattribute vec2 vTexCoord;\nvarying vec2 texCoord;\nvoid main() {\n  texCoord = vTexCoord;\n  gl_Position = vec4 ( vPosition.x, vPosition.y, 0.0, 1.0 );\n}", "precision mediump float;\nuniform sampler2D sTexture;\nvarying vec2 texCoord;\nvoid main() {\n  gl_FragColor = texture2D(sTexture,texCoord);\n}");
        this.prog2D = iLoadShader2;
        this.vPos2D = GLES20.glGetAttribLocation(iLoadShader2, "vPosition");
        this.vTC2D = GLES20.glGetAttribLocation(this.prog2D, "vTexCoord");
        GLES20.glEnableVertexAttribArray(this.vPos2D);
        GLES20.glEnableVertexAttribArray(this.vTC2D);
    }

    private void initSurfaceTexture() {
        Log.d("CameraGLRendererBase", "initSurfaceTexture");
        deleteSurfaceTexture();
        initTexOES(this.texCamera);
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.texCamera[0]);
        this.mSTexture = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(this);
    }

    private void deleteSurfaceTexture() {
        Log.d("CameraGLRendererBase", "deleteSurfaceTexture");
        SurfaceTexture surfaceTexture = this.mSTexture;
        if (surfaceTexture != null) {
            surfaceTexture.release();
            this.mSTexture = null;
            deleteTex(this.texCamera);
        }
    }

    private void initTexOES(int[] iArr) {
        if (iArr.length == 1) {
            GLES20.glGenTextures(1, iArr, 0);
            GLES20.glBindTexture(36197, iArr[0]);
            GLES20.glTexParameteri(36197, 10242, 33071);
            GLES20.glTexParameteri(36197, 10243, 33071);
            GLES20.glTexParameteri(36197, 10241, 9728);
            GLES20.glTexParameteri(36197, Data.MAX_DATA_BYTES, 9728);
        }
    }

    private static void deleteTex(int[] iArr) {
        if (iArr.length == 1) {
            GLES20.glDeleteTextures(1, iArr, 0);
        }
    }

    private static int loadShader(String str, String str2) {
        Log.d("CameraGLRendererBase", "loadShader");
        int iGlCreateShader = GLES20.glCreateShader(35633);
        GLES20.glShaderSource(iGlCreateShader, str);
        GLES20.glCompileShader(iGlCreateShader);
        int[] iArr = new int[1];
        GLES20.glGetShaderiv(iGlCreateShader, 35713, iArr, 0);
        if (iArr[0] == 0) {
            Log.e("CameraGLRendererBase", "Could not compile vertex shader: " + GLES20.glGetShaderInfoLog(iGlCreateShader));
            GLES20.glDeleteShader(iGlCreateShader);
            return 0;
        }
        int iGlCreateShader2 = GLES20.glCreateShader(35632);
        GLES20.glShaderSource(iGlCreateShader2, str2);
        GLES20.glCompileShader(iGlCreateShader2);
        GLES20.glGetShaderiv(iGlCreateShader2, 35713, iArr, 0);
        if (iArr[0] == 0) {
            Log.e("CameraGLRendererBase", "Could not compile fragment shader:" + GLES20.glGetShaderInfoLog(iGlCreateShader2));
            GLES20.glDeleteShader(iGlCreateShader);
            GLES20.glDeleteShader(iGlCreateShader2);
            return 0;
        }
        int iGlCreateProgram = GLES20.glCreateProgram();
        GLES20.glAttachShader(iGlCreateProgram, iGlCreateShader);
        GLES20.glAttachShader(iGlCreateProgram, iGlCreateShader2);
        GLES20.glLinkProgram(iGlCreateProgram);
        GLES20.glDeleteShader(iGlCreateShader);
        GLES20.glDeleteShader(iGlCreateShader2);
        GLES20.glGetProgramiv(iGlCreateProgram, 35714, iArr, 0);
        if (iArr[0] == 0) {
            Log.e("CameraGLRendererBase", "Could not link shader program: " + GLES20.glGetProgramInfoLog(iGlCreateProgram));
            return 0;
        }
        GLES20.glValidateProgram(iGlCreateProgram);
        GLES20.glGetProgramiv(iGlCreateProgram, 35715, iArr, 0);
        if (iArr[0] == 0) {
            Log.e("CameraGLRendererBase", "Shader program validation error: " + GLES20.glGetProgramInfoLog(iGlCreateProgram));
            GLES20.glDeleteProgram(iGlCreateProgram);
            return 0;
        }
        Log.d("CameraGLRendererBase", "Shader program is built OK");
        return iGlCreateProgram;
    }

    private void deleteFBO() {
        Log.d("CameraGLRendererBase", "deleteFBO(" + this.mFBOWidth + "x" + this.mFBOHeight + ")");
        GLES20.glBindFramebuffer(36160, 0);
        GLES20.glDeleteFramebuffers(1, this.FBO, 0);
        deleteTex(this.texFBO);
        deleteTex(this.texDraw);
        this.mFBOHeight = 0;
        this.mFBOWidth = 0;
    }

    private void initFBO(int i, int i2) {
        Log.d("CameraGLRendererBase", "initFBO(" + i + "x" + i2 + ")");
        deleteFBO();
        GLES20.glGenTextures(1, this.texDraw, 0);
        GLES20.glBindTexture(3553, this.texDraw[0]);
        GLES20.glTexImage2D(3553, 0, 6408, i, i2, 0, 6408, 5121, null);
        GLES20.glTexParameteri(3553, 10242, 33071);
        GLES20.glTexParameteri(3553, 10243, 33071);
        GLES20.glTexParameteri(3553, 10241, 9728);
        GLES20.glTexParameteri(3553, Data.MAX_DATA_BYTES, 9728);
        GLES20.glGenTextures(1, this.texFBO, 0);
        GLES20.glBindTexture(3553, this.texFBO[0]);
        GLES20.glTexImage2D(3553, 0, 6408, i, i2, 0, 6408, 5121, null);
        GLES20.glTexParameteri(3553, 10242, 33071);
        GLES20.glTexParameteri(3553, 10243, 33071);
        GLES20.glTexParameteri(3553, 10241, 9728);
        GLES20.glTexParameteri(3553, Data.MAX_DATA_BYTES, 9728);
        GLES20.glGenFramebuffers(1, this.FBO, 0);
        GLES20.glBindFramebuffer(36160, this.FBO[0]);
        GLES20.glFramebufferTexture2D(36160, 36064, 3553, this.texFBO[0], 0);
        Log.d("CameraGLRendererBase", "initFBO error status: " + GLES20.glGetError());
        int iGlCheckFramebufferStatus = GLES20.glCheckFramebufferStatus(36160);
        if (iGlCheckFramebufferStatus != 36053) {
            Log.e("CameraGLRendererBase", "initFBO failed, status: " + iGlCheckFramebufferStatus);
        }
        this.mFBOWidth = i;
        this.mFBOHeight = i2;
    }

    private void drawTex(int i, boolean z, int i2) {
        GLES20.glBindFramebuffer(36160, i2);
        if (i2 == 0) {
            GLES20.glViewport(0, 0, this.mView.getWidth(), this.mView.getHeight());
        } else {
            GLES20.glViewport(0, 0, this.mFBOWidth, this.mFBOHeight);
        }
        GLES20.glClear(16384);
        if (z) {
            GLES20.glUseProgram(this.progOES);
            GLES20.glVertexAttribPointer(this.vPosOES, 2, 5126, false, 8, (Buffer) this.vert);
            GLES20.glVertexAttribPointer(this.vTCOES, 2, 5126, false, 8, (Buffer) this.texOES);
        } else {
            GLES20.glUseProgram(this.prog2D);
            GLES20.glVertexAttribPointer(this.vPos2D, 2, 5126, false, 8, (Buffer) this.vert);
            GLES20.glVertexAttribPointer(this.vTC2D, 2, 5126, false, 8, (Buffer) this.tex2D);
        }
        GLES20.glActiveTexture(33984);
        if (z) {
            GLES20.glBindTexture(36197, i);
            GLES20.glUniform1i(GLES20.glGetUniformLocation(this.progOES, "sTexture"), 0);
        } else {
            GLES20.glBindTexture(3553, i);
            GLES20.glUniform1i(GLES20.glGetUniformLocation(this.prog2D, "sTexture"), 0);
        }
        GLES20.glDrawArrays(5, 0, 4);
        GLES20.glFlush();
    }

    public synchronized void enableView() {
        Log.d("CameraGLRendererBase", "enableView");
        this.mEnabled = true;
        updateState();
    }

    public synchronized void disableView() {
        Log.d("CameraGLRendererBase", "disableView");
        this.mEnabled = false;
        updateState();
    }

    protected void updateState() {
        Log.d("CameraGLRendererBase", "updateState");
        Log.d("CameraGLRendererBase", "mEnabled=" + this.mEnabled + ", mHaveSurface=" + this.mHaveSurface);
        boolean z = this.mEnabled && this.mHaveSurface && this.mView.getVisibility() == 0;
        if (z == this.mIsStarted) {
            Log.d("CameraGLRendererBase", "keeping State unchanged");
        } else if (z) {
            doStart();
        } else {
            doStop();
        }
        Log.d("CameraGLRendererBase", "updateState end");
    }

    protected synchronized void doStart() {
        int i;
        Log.d("CameraGLRendererBase", "doStart");
        initSurfaceTexture();
        openCamera(this.mCameraIndex);
        this.mIsStarted = true;
        int i2 = this.mCameraWidth;
        if (i2 > 0 && (i = this.mCameraHeight) > 0) {
            setPreviewSize(i2, i);
        }
    }

    protected void doStop() {
        Log.d("CameraGLRendererBase", "doStop");
        synchronized (this) {
            this.mUpdateST = false;
            this.mIsStarted = false;
            this.mHaveFBO = false;
            closeCamera();
            deleteSurfaceTexture();
        }
        CameraGLSurfaceView.CameraTextureListener cameraTextureListener = this.mView.getCameraTextureListener();
        if (cameraTextureListener != null) {
            cameraTextureListener.onCameraViewStopped();
        }
    }

    protected void setPreviewSize(int i, int i2) {
        synchronized (this) {
            this.mHaveFBO = false;
            this.mCameraWidth = i;
            this.mCameraHeight = i2;
            setCameraPreviewSize(i, i2);
            initFBO(this.mCameraWidth, this.mCameraHeight);
            this.mHaveFBO = true;
        }
        CameraGLSurfaceView.CameraTextureListener cameraTextureListener = this.mView.getCameraTextureListener();
        if (cameraTextureListener != null) {
            cameraTextureListener.onCameraViewStarted(this.mCameraWidth, this.mCameraHeight);
        }
    }

    public void setCameraIndex(int i) {
        disableView();
        this.mCameraIndex = i;
        enableView();
    }

    public void setMaxCameraPreviewSize(int i, int i2) {
        disableView();
        this.mMaxCameraWidth = i;
        this.mMaxCameraHeight = i2;
        enableView();
    }

    public void onResume() {
        Log.i("CameraGLRendererBase", "onResume");
    }

    public void onPause() {
        Log.i("CameraGLRendererBase", "onPause");
        this.mHaveSurface = false;
        updateState();
        this.mCameraHeight = -1;
        this.mCameraWidth = -1;
    }
}

