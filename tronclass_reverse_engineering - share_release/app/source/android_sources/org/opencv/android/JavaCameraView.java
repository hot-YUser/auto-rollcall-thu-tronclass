package org.opencv.android;

import android.content.Context;
import android.graphics.ImageFormat;
import android.graphics.SurfaceTexture;
import android.hardware.Camera;
import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import java.util.List;
import org.opencv.android.CameraBridgeViewBase;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;
public class JavaCameraView extends CameraBridgeViewBase implements Camera.PreviewCallback {
    private static final int MAGIC_TEXTURE_ID = 10;
    private static final String TAG = "JavaCameraView";
    private byte[] mBuffer;
    protected Camera mCamera;
    protected JavaCameraFrame[] mCameraFrame;
    private boolean mCameraFrameReady;
    private int mChainIdx;
    private Mat[] mFrameChain;
    private int mPreviewFormat;
    private boolean mStopThread;
    private SurfaceTexture mSurfaceTexture;
    private Thread mThread;

    public static class JavaCameraSizeAccessor implements CameraBridgeViewBase.ListItemAccessor {
        @Override // org.opencv.android.CameraBridgeViewBase.ListItemAccessor
        public int getWidth(Object obj) {
            return ((Camera.Size) obj).width;
        }

        @Override // org.opencv.android.CameraBridgeViewBase.ListItemAccessor
        public int getHeight(Object obj) {
            return ((Camera.Size) obj).height;
        }
    }

    public JavaCameraView(Context context, int i) {
        super(context, i);
        this.mChainIdx = 0;
        this.mPreviewFormat = 17;
        this.mCameraFrameReady = false;
    }

    public JavaCameraView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.mChainIdx = 0;
        this.mPreviewFormat = 17;
        this.mCameraFrameReady = false;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:107:0x0152 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:44:0x00ea A[Catch: all -> 0x030e, TryCatch #4 {, blocks: (B:5:0x000b, B:7:0x0014, B:8:0x001b, B:12:0x0039, B:15:0x003f, B:17:0x0045, B:18:0x0067, B:24:0x009a, B:21:0x0070, B:52:0x014c, B:54:0x0150, B:56:0x0152, B:58:0x0163, B:60:0x0176, B:62:0x0180, B:64:0x018a, B:66:0x0194, B:68:0x019e, B:70:0x01a8, B:72:0x01b2, B:74:0x01bc, B:77:0x01c7, B:79:0x01d3, B:81:0x021c, B:82:0x021f, B:84:0x0225, B:86:0x022d, B:87:0x0232, B:89:0x0255, B:91:0x025d, B:93:0x0271, B:95:0x0275, B:96:0x027e, B:92:0x026e, B:78:0x01cd, B:100:0x030c, B:99:0x0309, B:11:0x0023, B:25:0x009d, B:27:0x00a7, B:28:0x00b4, B:30:0x00ba, B:33:0x00c2, B:44:0x00ea, B:46:0x00f4, B:47:0x00fc, B:48:0x011e, B:51:0x0126, B:34:0x00c5, B:36:0x00c9, B:37:0x00d6, B:39:0x00dc, B:42:0x00e5), top: B:113:0x000b, inners: #0, #1, #2, #3 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:45:0x00f2  */
    /* high-level source view WARN: Removed duplicated region for block: B:54:0x0150 A[Catch: all -> 0x030e, DONT_GENERATE, TRY_LEAVE, TryCatch #4 {, blocks: (B:5:0x000b, B:7:0x0014, B:8:0x001b, B:12:0x0039, B:15:0x003f, B:17:0x0045, B:18:0x0067, B:24:0x009a, B:21:0x0070, B:52:0x014c, B:54:0x0150, B:56:0x0152, B:58:0x0163, B:60:0x0176, B:62:0x0180, B:64:0x018a, B:66:0x0194, B:68:0x019e, B:70:0x01a8, B:72:0x01b2, B:74:0x01bc, B:77:0x01c7, B:79:0x01d3, B:81:0x021c, B:82:0x021f, B:84:0x0225, B:86:0x022d, B:87:0x0232, B:89:0x0255, B:91:0x025d, B:93:0x0271, B:95:0x0275, B:96:0x027e, B:92:0x026e, B:78:0x01cd, B:100:0x030c, B:99:0x0309, B:11:0x0023, B:25:0x009d, B:27:0x00a7, B:28:0x00b4, B:30:0x00ba, B:33:0x00c2, B:44:0x00ea, B:46:0x00f4, B:47:0x00fc, B:48:0x011e, B:51:0x0126, B:34:0x00c5, B:36:0x00c9, B:37:0x00d6, B:39:0x00dc, B:42:0x00e5), top: B:113:0x000b, inners: #0, #1, #2, #3 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    protected boolean initializeCamera(int i, int i2) {
        int i3;
        Camera camera;
        Log.d(TAG, "Initialize java camera");
        synchronized (this) {
            this.mCamera = null;
            boolean z = false;
            if (this.mCameraIndex == -1) {
                Log.d(TAG, "Trying to open camera with old open()");
                try {
                    this.mCamera = Camera.open();
                } catch (Exception e) {
                    Log.e(TAG, "Camera is not available (in use or does not exist): " + e.getLocalizedMessage());
                }
                if (this.mCamera == null) {
                    boolean z2 = false;
                    for (int i4 = 0; i4 < Camera.getNumberOfCameras(); i4++) {
                        Log.d(TAG, "Trying to open camera with new open(" + Integer.valueOf(i4) + ")");
                        try {
                            this.mCamera = Camera.open(i4);
                            z2 = true;
                        } catch (RuntimeException e2) {
                            Log.e(TAG, "Camera #" + i4 + "failed to open: " + e2.getLocalizedMessage());
                        }
                        if (z2) {
                            break;
                        }
                    }
                    camera = this.mCamera;
                    if (camera != null) {
                        return false;
                    }
                    try {
                        Camera.Parameters parameters = camera.getParameters();
                        Log.d(TAG, "getSupportedPreviewSizes()");
                        List<Camera.Size> supportedPreviewSizes = parameters.getSupportedPreviewSizes();
                        if (supportedPreviewSizes != null) {
                            Size sizeCalculateCameraFrameSize = calculateCameraFrameSize(supportedPreviewSizes, new JavaCameraSizeAccessor(), i, i2);
                            if (Build.FINGERPRINT.startsWith("generic") || Build.FINGERPRINT.startsWith("unknown") || Build.MODEL.contains("google_sdk") || Build.MODEL.contains("Emulator") || Build.MODEL.contains("Android SDK built for x86") || Build.MANUFACTURER.contains("Genymotion") || ((Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic")) || "google_sdk".equals(Build.PRODUCT))) {
                                parameters.setPreviewFormat(842094169);
                            } else {
                                parameters.setPreviewFormat(17);
                            }
                            this.mPreviewFormat = parameters.getPreviewFormat();
                            Log.d(TAG, "Set preview size to " + Integer.valueOf((int) sizeCalculateCameraFrameSize.width) + "x" + Integer.valueOf((int) sizeCalculateCameraFrameSize.height));
                            parameters.setPreviewSize((int) sizeCalculateCameraFrameSize.width, (int) sizeCalculateCameraFrameSize.height);
                            if (!Build.MODEL.equals("GT-I9100")) {
                                parameters.setRecordingHint(true);
                            }
                            List<String> supportedFocusModes = parameters.getSupportedFocusModes();
                            if (supportedFocusModes != null && supportedFocusModes.contains("continuous-video")) {
                                parameters.setFocusMode("continuous-video");
                            }
                            this.mCamera.setParameters(parameters);
                            Camera.Parameters parameters2 = this.mCamera.getParameters();
                            this.mFrameWidth = parameters2.getPreviewSize().width;
                            this.mFrameHeight = parameters2.getPreviewSize().height;
                            if (getLayoutParams().width == -1 && getLayoutParams().height == -1) {
                                this.mScale = Math.min(i2 / this.mFrameHeight, i / this.mFrameWidth);
                            } else {
                                this.mScale = 0.0f;
                            }
                            if (this.mFpsMeter != null) {
                                this.mFpsMeter.setResolution(this.mFrameWidth, this.mFrameHeight);
                            }
                            byte[] bArr = new byte[((this.mFrameWidth * this.mFrameHeight) * ImageFormat.getBitsPerPixel(parameters2.getPreviewFormat())) / 8];
                            this.mBuffer = bArr;
                            this.mCamera.addCallbackBuffer(bArr);
                            this.mCamera.setPreviewCallbackWithBuffer(this);
                            Mat[] matArr = new Mat[2];
                            this.mFrameChain = matArr;
                            matArr[0] = new Mat(this.mFrameHeight + (this.mFrameHeight / 2), this.mFrameWidth, CvType.CV_8UC1);
                            this.mFrameChain[1] = new Mat(this.mFrameHeight + (this.mFrameHeight / 2), this.mFrameWidth, CvType.CV_8UC1);
                            AllocateCache();
                            JavaCameraFrame[] javaCameraFrameArr = new JavaCameraFrame[2];
                            this.mCameraFrame = javaCameraFrameArr;
                            javaCameraFrameArr[0] = new JavaCameraFrame(this.mFrameChain[0], this.mFrameWidth, this.mFrameHeight);
                            this.mCameraFrame[1] = new JavaCameraFrame(this.mFrameChain[1], this.mFrameWidth, this.mFrameHeight);
                            SurfaceTexture surfaceTexture = new SurfaceTexture(10);
                            this.mSurfaceTexture = surfaceTexture;
                            this.mCamera.setPreviewTexture(surfaceTexture);
                            Log.d(TAG, "startPreview");
                            this.mCamera.startPreview();
                            z = true;
                        }
                    } catch (Exception e3) {
                        e3.printStackTrace();
                    }
                    return z;
                }
                camera = this.mCamera;
                if (camera != null) {
                }
            } else {
                int i5 = this.mCameraIndex;
                if (this.mCameraIndex == 99) {
                    Log.i(TAG, "Trying to open back camera");
                    Camera.CameraInfo cameraInfo = new Camera.CameraInfo();
                    i3 = 0;
                    while (i3 < Camera.getNumberOfCameras()) {
                        Camera.getCameraInfo(i3, cameraInfo);
                        if (cameraInfo.facing == 0) {
                            i5 = i3;
                            break;
                        }
                        i3++;
                    }
                    if (i5 != 99) {
                        Log.e(TAG, "Back camera not found!");
                    } else if (i5 == 98) {
                        Log.e(TAG, "Front camera not found!");
                    } else {
                        Log.d(TAG, "Trying to open camera with new open(" + Integer.valueOf(i5) + ")");
                        try {
                            this.mCamera = Camera.open(i5);
                        } catch (RuntimeException e4) {
                            Log.e(TAG, "Camera #" + i5 + "failed to open: " + e4.getLocalizedMessage());
                        }
                    }
                    camera = this.mCamera;
                    if (camera != null) {
                    }
                } else {
                    if (this.mCameraIndex == 98) {
                        Log.i(TAG, "Trying to open front camera");
                        Camera.CameraInfo cameraInfo2 = new Camera.CameraInfo();
                        i3 = 0;
                        while (i3 < Camera.getNumberOfCameras()) {
                            Camera.getCameraInfo(i3, cameraInfo2);
                            if (cameraInfo2.facing == 1) {
                                i5 = i3;
                                break;
                            }
                            i3++;
                        }
                    }
                    if (i5 != 99) {
                    }
                    camera = this.mCamera;
                    if (camera != null) {
                    }
                }
            }
        }
    }

    protected void releaseCamera() {
        synchronized (this) {
            Camera camera = this.mCamera;
            if (camera != null) {
                camera.stopPreview();
                this.mCamera.setPreviewCallback(null);
                this.mCamera.release();
            }
            this.mCamera = null;
            Mat[] matArr = this.mFrameChain;
            if (matArr != null) {
                matArr[0].release();
                this.mFrameChain[1].release();
            }
            JavaCameraFrame[] javaCameraFrameArr = this.mCameraFrame;
            if (javaCameraFrameArr != null) {
                javaCameraFrameArr[0].release();
                this.mCameraFrame[1].release();
            }
        }
    }

    @Override // org.opencv.android.CameraBridgeViewBase
    protected boolean connectCamera(int i, int i2) {
        Log.d(TAG, "Connecting to camera");
        if (!initializeCamera(i, i2)) {
            return false;
        }
        this.mCameraFrameReady = false;
        Log.d(TAG, "Starting processing thread");
        this.mStopThread = false;
        Thread thread = new Thread(new CameraWorker());
        this.mThread = thread;
        thread.start();
        return true;
    }

    @Override // org.opencv.android.CameraBridgeViewBase
    protected void disconnectCamera() {
        Log.d(TAG, "Disconnecting from camera");
        try {
            try {
                this.mStopThread = true;
                Log.d(TAG, "Notify thread");
                synchronized (this) {
                    notify();
                }
                Log.d(TAG, "Waiting for thread");
                Thread thread = this.mThread;
                if (thread != null) {
                    thread.join();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            this.mThread = null;
            releaseCamera();
            this.mCameraFrameReady = false;
        } catch (Throwable th) {
            this.mThread = null;
            throw th;
        }
    }

    @Override // android.hardware.Camera.PreviewCallback
    public void onPreviewFrame(byte[] bArr, Camera camera) {
        synchronized (this) {
            this.mFrameChain[this.mChainIdx].put(0, 0, bArr);
            this.mCameraFrameReady = true;
            notify();
        }
        Camera camera2 = this.mCamera;
        if (camera2 != null) {
            camera2.addCallbackBuffer(this.mBuffer);
        }
    }

    private class JavaCameraFrame implements CameraBridgeViewBase.CvCameraViewFrame {
        private int mHeight;
        private Mat mRgba = new Mat();
        private int mWidth;
        private Mat mYuvFrameData;

        @Override // org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame
        public Mat gray() {
            return this.mYuvFrameData.submat(0, this.mHeight, 0, this.mWidth);
        }

        @Override // org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame
        public Mat rgba() {
            if (JavaCameraView.this.mPreviewFormat != 17) {
                if (JavaCameraView.this.mPreviewFormat == 842094169) {
                    Imgproc.cvtColor(this.mYuvFrameData, this.mRgba, 100, 4);
                } else {
                    throw new IllegalArgumentException("Preview Format can be NV21 or YV12");
                }
            } else {
                Imgproc.cvtColor(this.mYuvFrameData, this.mRgba, 96, 4);
            }
            return this.mRgba;
        }

        public JavaCameraFrame(Mat mat, int i, int i2) {
            this.mWidth = i;
            this.mHeight = i2;
            this.mYuvFrameData = mat;
        }

        public void release() {
            this.mRgba.release();
        }
    }

    private class CameraWorker implements Runnable {
        private CameraWorker() {
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z;
            do {
                synchronized (JavaCameraView.this) {
                    while (!JavaCameraView.this.mCameraFrameReady && !JavaCameraView.this.mStopThread) {
                        try {
                            JavaCameraView.this.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    z = false;
                    if (JavaCameraView.this.mCameraFrameReady) {
                        JavaCameraView javaCameraView = JavaCameraView.this;
                        javaCameraView.mChainIdx = 1 - javaCameraView.mChainIdx;
                        JavaCameraView.this.mCameraFrameReady = false;
                        z = true;
                    }
                }
                if (!JavaCameraView.this.mStopThread && z && !JavaCameraView.this.mFrameChain[1 - JavaCameraView.this.mChainIdx].empty()) {
                    JavaCameraView javaCameraView2 = JavaCameraView.this;
                    javaCameraView2.deliverAndDrawFrame(javaCameraView2.mCameraFrame[1 - JavaCameraView.this.mChainIdx]);
                }
            } while (!JavaCameraView.this.mStopThread);
            Log.d(JavaCameraView.TAG, "Finish processing thread");
        }
    }
}

