package org.opencv.android;

import android.graphics.SurfaceTexture;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.Log;
import android.util.Size;
import android.view.Surface;
import java.util.Arrays;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
public class Camera2Renderer extends CameraGLRendererBase {
    protected final String LOGTAG;
    private Handler mBackgroundHandler;
    private HandlerThread mBackgroundThread;
    private CameraDevice mCameraDevice;
    private String mCameraID;
    private Semaphore mCameraOpenCloseLock;
    private CameraCaptureSession mCaptureSession;
    private CaptureRequest.Builder mPreviewRequestBuilder;
    private Size mPreviewSize;
    private final CameraDevice.StateCallback mStateCallback;

    Camera2Renderer(CameraGLSurfaceView cameraGLSurfaceView) {
        super(cameraGLSurfaceView);
        this.LOGTAG = "Camera2Renderer";
        this.mPreviewSize = new Size(-1, -1);
        this.mCameraOpenCloseLock = new Semaphore(1);
        this.mStateCallback = new CameraDevice.StateCallback() { // from class: org.opencv.android.Camera2Renderer.1
            @Override // android.hardware.camera2.CameraDevice.StateCallback
            public void onOpened(CameraDevice cameraDevice) {
                Camera2Renderer.this.mCameraDevice = cameraDevice;
                Camera2Renderer.this.mCameraOpenCloseLock.release();
                Camera2Renderer.this.createCameraPreviewSession();
            }

            @Override // android.hardware.camera2.CameraDevice.StateCallback
            public void onDisconnected(CameraDevice cameraDevice) {
                cameraDevice.close();
                Camera2Renderer.this.mCameraDevice = null;
                Camera2Renderer.this.mCameraOpenCloseLock.release();
            }

            @Override // android.hardware.camera2.CameraDevice.StateCallback
            public void onError(CameraDevice cameraDevice, int i) {
                cameraDevice.close();
                Camera2Renderer.this.mCameraDevice = null;
                Camera2Renderer.this.mCameraOpenCloseLock.release();
            }
        };
    }

    @Override // org.opencv.android.CameraGLRendererBase
    protected void doStart() {
        Log.d("Camera2Renderer", "doStart");
        startBackgroundThread();
        super.doStart();
    }

    @Override // org.opencv.android.CameraGLRendererBase
    protected void doStop() {
        Log.d("Camera2Renderer", "doStop");
        super.doStop();
        stopBackgroundThread();
    }

    boolean cacPreviewSize(int i, int i2) {
        Log.i("Camera2Renderer", "cacPreviewSize: " + i + "x" + i2);
        if (this.mCameraID == null) {
            Log.e("Camera2Renderer", "Camera isn't initialized!");
            return false;
        }
        try {
            float f = i / i2;
            int i3 = 0;
            int i4 = 0;
            for (Size size : ((StreamConfigurationMap) ((CameraManager) this.mView.getContext().getSystemService("camera")).getCameraCharacteristics(this.mCameraID).get(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP)).getOutputSizes(SurfaceTexture.class)) {
                int width = size.getWidth();
                int height = size.getHeight();
                Log.d("Camera2Renderer", "trying size: " + width + "x" + height);
                if (i >= width && i2 >= height && i3 <= width && i4 <= height && Math.abs(f - (width / height)) < 0.2d) {
                    i4 = height;
                    i3 = width;
                }
            }
            Log.i("Camera2Renderer", "best size: " + i3 + "x" + i4);
            if (i3 != 0 && i4 != 0 && (this.mPreviewSize.getWidth() != i3 || this.mPreviewSize.getHeight() != i4)) {
                this.mPreviewSize = new Size(i3, i4);
                return true;
            }
            return false;
        } catch (CameraAccessException unused) {
            Log.e("Camera2Renderer", "cacPreviewSize - Camera Access Exception");
            return false;
        } catch (IllegalArgumentException unused2) {
            Log.e("Camera2Renderer", "cacPreviewSize - Illegal Argument Exception");
            return false;
        } catch (SecurityException unused3) {
            Log.e("Camera2Renderer", "cacPreviewSize - Security Exception");
            return false;
        }
    }

    @Override // org.opencv.android.CameraGLRendererBase
    protected void openCamera(int i) {
        Log.i("Camera2Renderer", "openCamera");
        CameraManager cameraManager = (CameraManager) this.mView.getContext().getSystemService("camera");
        try {
            String[] cameraIdList = cameraManager.getCameraIdList();
            if (cameraIdList.length == 0) {
                Log.e("Camera2Renderer", "Error: camera isn't detected.");
                return;
            }
            if (i == -1) {
                this.mCameraID = cameraIdList[0];
            } else {
                for (String str : cameraIdList) {
                    CameraCharacteristics cameraCharacteristics = cameraManager.getCameraCharacteristics(str);
                    if ((i == 99 && ((Integer) cameraCharacteristics.get(CameraCharacteristics.LENS_FACING)).intValue() == 1) || (i == 98 && ((Integer) cameraCharacteristics.get(CameraCharacteristics.LENS_FACING)).intValue() == 0)) {
                        this.mCameraID = str;
                        break;
                    }
                }
            }
            if (this.mCameraID != null) {
                if (!this.mCameraOpenCloseLock.tryAcquire(2500L, TimeUnit.MILLISECONDS)) {
                    throw new RuntimeException("Time out waiting to lock camera opening.");
                }
                Log.i("Camera2Renderer", "Opening camera: " + this.mCameraID);
                cameraManager.openCamera(this.mCameraID, this.mStateCallback, this.mBackgroundHandler);
            }
        } catch (CameraAccessException unused) {
            Log.e("Camera2Renderer", "OpenCamera - Camera Access Exception");
        } catch (IllegalArgumentException unused2) {
            Log.e("Camera2Renderer", "OpenCamera - Illegal Argument Exception");
        } catch (InterruptedException unused3) {
            Log.e("Camera2Renderer", "OpenCamera - Interrupted Exception");
        } catch (SecurityException unused4) {
            Log.e("Camera2Renderer", "OpenCamera - Security Exception");
        }
    }

    @Override // org.opencv.android.CameraGLRendererBase
    protected void closeCamera() {
        Log.i("Camera2Renderer", "closeCamera");
        try {
            try {
                this.mCameraOpenCloseLock.acquire();
                CameraCaptureSession cameraCaptureSession = this.mCaptureSession;
                if (cameraCaptureSession != null) {
                    cameraCaptureSession.close();
                    this.mCaptureSession = null;
                }
                CameraDevice cameraDevice = this.mCameraDevice;
                if (cameraDevice != null) {
                    cameraDevice.close();
                    this.mCameraDevice = null;
                }
            } catch (InterruptedException e) {
                throw new RuntimeException("Interrupted while trying to lock camera closing.", e);
            }
        } finally {
            this.mCameraOpenCloseLock.release();
        }
    }
    public void createCameraPreviewSession() {
        int width = this.mPreviewSize.getWidth();
        int height = this.mPreviewSize.getHeight();
        Log.i("Camera2Renderer", "createCameraPreviewSession(" + width + "x" + height + ")");
        if (width < 0 || height < 0) {
            return;
        }
        try {
            this.mCameraOpenCloseLock.acquire();
            if (this.mCameraDevice == null) {
                this.mCameraOpenCloseLock.release();
                Log.e("Camera2Renderer", "createCameraPreviewSession: camera isn't opened");
                return;
            }
            if (this.mCaptureSession != null) {
                this.mCameraOpenCloseLock.release();
                Log.e("Camera2Renderer", "createCameraPreviewSession: mCaptureSession is already started");
            } else {
                if (this.mSTexture == null) {
                    this.mCameraOpenCloseLock.release();
                    Log.e("Camera2Renderer", "createCameraPreviewSession: preview SurfaceTexture is null");
                    return;
                }
                this.mSTexture.setDefaultBufferSize(width, height);
                Surface surface = new Surface(this.mSTexture);
                CaptureRequest.Builder builderCreateCaptureRequest = this.mCameraDevice.createCaptureRequest(1);
                this.mPreviewRequestBuilder = builderCreateCaptureRequest;
                builderCreateCaptureRequest.addTarget(surface);
                this.mCameraDevice.createCaptureSession(Arrays.asList(surface), new CameraCaptureSession.StateCallback() { // from class: org.opencv.android.Camera2Renderer.2
                    @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
                    public void onConfigured(CameraCaptureSession cameraCaptureSession) {
                        Camera2Renderer.this.mCaptureSession = cameraCaptureSession;
                        try {
                            Camera2Renderer.this.mPreviewRequestBuilder.set(CaptureRequest.CONTROL_AF_MODE, 4);
                            Camera2Renderer.this.mPreviewRequestBuilder.set(CaptureRequest.CONTROL_AE_MODE, 2);
                            Camera2Renderer.this.mCaptureSession.setRepeatingRequest(Camera2Renderer.this.mPreviewRequestBuilder.build(), null, Camera2Renderer.this.mBackgroundHandler);
                            Log.i("Camera2Renderer", "CameraPreviewSession has been started");
                        } catch (CameraAccessException unused) {
                            Log.e("Camera2Renderer", "createCaptureSession failed");
                        }
                        Camera2Renderer.this.mCameraOpenCloseLock.release();
                    }

                    @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
                    public void onConfigureFailed(CameraCaptureSession cameraCaptureSession) {
                        Log.e("Camera2Renderer", "createCameraPreviewSession failed");
                        Camera2Renderer.this.mCameraOpenCloseLock.release();
                    }
                }, this.mBackgroundHandler);
            }
        } catch (CameraAccessException unused) {
            Log.e("Camera2Renderer", "createCameraPreviewSession");
        } catch (InterruptedException e) {
            throw new RuntimeException("Interrupted while createCameraPreviewSession", e);
        }
    }

    private void startBackgroundThread() {
        Log.i("Camera2Renderer", "startBackgroundThread");
        stopBackgroundThread();
        HandlerThread handlerThread = new HandlerThread("CameraBackground");
        this.mBackgroundThread = handlerThread;
        handlerThread.start();
        this.mBackgroundHandler = new Handler(this.mBackgroundThread.getLooper());
    }

    private void stopBackgroundThread() {
        Log.i("Camera2Renderer", "stopBackgroundThread");
        HandlerThread handlerThread = this.mBackgroundThread;
        if (handlerThread == null) {
            return;
        }
        handlerThread.quitSafely();
        try {
            this.mBackgroundThread.join();
            this.mBackgroundThread = null;
            this.mBackgroundHandler = null;
        } catch (InterruptedException unused) {
            Log.e("Camera2Renderer", "stopBackgroundThread");
        }
    }

    @Override // org.opencv.android.CameraGLRendererBase
    protected void setCameraPreviewSize(int i, int i2) {
        Log.i("Camera2Renderer", "setCameraPreviewSize(" + i + "x" + i2 + ")");
        if (this.mMaxCameraWidth > 0 && this.mMaxCameraWidth < i) {
            i = this.mMaxCameraWidth;
        }
        if (this.mMaxCameraHeight > 0 && this.mMaxCameraHeight < i2) {
            i2 = this.mMaxCameraHeight;
        }
        try {
            this.mCameraOpenCloseLock.acquire();
            boolean zCacPreviewSize = cacPreviewSize(i, i2);
            this.mCameraWidth = this.mPreviewSize.getWidth();
            this.mCameraHeight = this.mPreviewSize.getHeight();
            if (!zCacPreviewSize) {
                this.mCameraOpenCloseLock.release();
                return;
            }
            if (this.mCaptureSession != null) {
                Log.d("Camera2Renderer", "closing existing previewSession");
                this.mCaptureSession.close();
                this.mCaptureSession = null;
            }
            this.mCameraOpenCloseLock.release();
            createCameraPreviewSession();
        } catch (InterruptedException e) {
            this.mCameraOpenCloseLock.release();
            throw new RuntimeException("Interrupted while setCameraPreviewSize.", e);
        }
    }
}

