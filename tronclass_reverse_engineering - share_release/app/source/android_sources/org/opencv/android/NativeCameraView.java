package org.opencv.android;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import org.opencv.android.CameraBridgeViewBase;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;
import org.opencv.videoio.VideoCapture;
import org.opencv.videoio.VideoWriter;
public class NativeCameraView extends CameraBridgeViewBase {
    public static final String TAG = "NativeCameraView";
    protected VideoCapture mCamera;
    protected NativeCameraFrame mFrame;
    private boolean mStopThread;
    private Thread mThread;

    public NativeCameraView(Context context, int i) {
        super(context, i);
    }

    public NativeCameraView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    @Override // org.opencv.android.CameraBridgeViewBase
    protected boolean connectCamera(int i, int i2) {
        if (!initializeCamera(i, i2)) {
            return false;
        }
        Thread thread = new Thread(new CameraWorker());
        this.mThread = thread;
        thread.start();
        return true;
    }

    @Override // org.opencv.android.CameraBridgeViewBase
    protected void disconnectCamera() {
        Thread thread = this.mThread;
        if (thread != null) {
            try {
                try {
                    this.mStopThread = true;
                    thread.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } finally {
                this.mThread = null;
                this.mStopThread = false;
            }
        }
        releaseCamera();
    }

    public static class OpenCvSizeAccessor implements CameraBridgeViewBase.ListItemAccessor {
        @Override // org.opencv.android.CameraBridgeViewBase.ListItemAccessor
        public int getWidth(Object obj) {
            return (int) ((Size) obj).width;
        }

        @Override // org.opencv.android.CameraBridgeViewBase.ListItemAccessor
        public int getHeight(Object obj) {
            return (int) ((Size) obj).height;
        }
    }

    private boolean initializeCamera(int i, int i2) {
        synchronized (this) {
            if (this.mCameraIndex == -1) {
                Log.d(TAG, "Try to open default camera");
                this.mCamera = new VideoCapture(0, 1000);
            } else {
                Log.d(TAG, "Try to open camera with index " + this.mCameraIndex);
                this.mCamera = new VideoCapture(this.mCameraIndex, 1000);
            }
            VideoCapture videoCapture = this.mCamera;
            if (videoCapture == null) {
                return false;
            }
            if (!videoCapture.isOpened()) {
                return false;
            }
            this.mFrame = new NativeCameraFrame(this.mCamera);
            this.mCamera.set(3, i);
            this.mCamera.set(4, i2);
            this.mFrameWidth = (int) this.mCamera.get(3);
            this.mFrameHeight = (int) this.mCamera.get(4);
            if (getLayoutParams().width == -1 && getLayoutParams().height == -1) {
                this.mScale = Math.min(i2 / this.mFrameHeight, i / this.mFrameWidth);
            } else {
                this.mScale = 0.0f;
            }
            if (this.mFpsMeter != null) {
                this.mFpsMeter.setResolution(this.mFrameWidth, this.mFrameHeight);
            }
            AllocateCache();
            Log.i(TAG, "Selected camera frame size = (" + this.mFrameWidth + ", " + this.mFrameHeight + ")");
            return true;
        }
    }

    private void releaseCamera() {
        synchronized (this) {
            NativeCameraFrame nativeCameraFrame = this.mFrame;
            if (nativeCameraFrame != null) {
                nativeCameraFrame.release();
            }
            VideoCapture videoCapture = this.mCamera;
            if (videoCapture != null) {
                videoCapture.release();
            }
        }
    }

    private static class NativeCameraFrame implements CameraBridgeViewBase.CvCameraViewFrame {
        private VideoCapture mCapture;
        private Mat mGray = new Mat();
        private Mat mRgba = new Mat();
        private Mat mBgr = new Mat();

        @Override // org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame
        public Mat rgba() {
            this.mCapture.set(6, VideoWriter.fourcc('R', 'G', 'B', '3'));
            this.mCapture.retrieve(this.mBgr);
            Log.d(NativeCameraView.TAG, "Retrived frame with size " + this.mBgr.cols() + "x" + this.mBgr.rows() + " and channels: " + this.mBgr.channels());
            Imgproc.cvtColor(this.mBgr, this.mRgba, 0);
            return this.mRgba;
        }

        @Override // org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame
        public Mat gray() {
            this.mCapture.set(6, VideoWriter.fourcc('G', 'R', 'E', 'Y'));
            this.mCapture.retrieve(this.mGray);
            Log.d(NativeCameraView.TAG, "Retrived frame with size " + this.mGray.cols() + "x" + this.mGray.rows() + " and channels: " + this.mGray.channels());
            return this.mGray;
        }

        public NativeCameraFrame(VideoCapture videoCapture) {
            this.mCapture = videoCapture;
        }

        public void release() {
            Mat mat = this.mGray;
            if (mat != null) {
                mat.release();
            }
            Mat mat2 = this.mRgba;
            if (mat2 != null) {
                mat2.release();
            }
            Mat mat3 = this.mBgr;
            if (mat3 != null) {
                mat3.release();
            }
        }
    }

    private class CameraWorker implements Runnable {
        private CameraWorker() {
        }

        @Override // java.lang.Runnable
        public void run() {
            while (NativeCameraView.this.mCamera.grab()) {
                NativeCameraView nativeCameraView = NativeCameraView.this;
                nativeCameraView.deliverAndDrawFrame(nativeCameraView.mFrame);
                if (NativeCameraView.this.mStopThread) {
                    return;
                }
            }
            Log.e(NativeCameraView.TAG, "Camera frame grab failed");
        }
    }
}

