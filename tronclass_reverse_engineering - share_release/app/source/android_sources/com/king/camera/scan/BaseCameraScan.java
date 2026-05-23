package com.king.camera.scan;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import android.view.View;
import androidx.camera.core.Camera;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.FocusMeteringAction;
import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.Preview;
import androidx.camera.core.ResolutionInfo;
import androidx.camera.core.ZoomState;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.camera.view.PreviewView;
import androidx.core.app.ComponentActivity;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.Observer;
import com.google.common.util.concurrent.ListenableFuture;
import com.king.camera.scan.CameraScan;
import com.king.camera.scan.analyze.Analyzer;
import com.king.camera.scan.config.CameraConfig;
import com.king.camera.scan.config.CameraConfigFactory;
import com.king.camera.scan.manager.AmbientLightManager;
import com.king.camera.scan.manager.BeepManager;
import com.king.logx.LogX;
import java.util.concurrent.Executors;
public class BaseCameraScan<T> extends CameraScan<T> {
    private static final int HOVER_TAP_SLOP = 20;
    private static final int HOVER_TAP_TIMEOUT = 150;
    private static final float ZOOM_STEP_SIZE = 0.1f;
    private View flashlightView;
    private volatile boolean isAnalyze;
    private volatile boolean isAnalyzeResult;
    private volatile boolean isAutoStopAnalyze;
    private boolean isClickTap;
    private AmbientLightManager mAmbientLightManager;
    private Analyzer<T> mAnalyzer;
    private BeepManager mBeepManager;
    private Camera mCamera;
    private CameraConfig mCameraConfig;
    private ListenableFuture<ProcessCameraProvider> mCameraProviderFuture;
    private final Context mContext;
    private float mDownX;
    private float mDownY;
    private long mLastHoveTapTime;
    private final LifecycleOwner mLifecycleOwner;
    private Analyzer.OnAnalyzeListener<T> mOnAnalyzeListener;
    private final ScaleGestureDetector.OnScaleGestureListener mOnScaleGestureListener;
    private CameraScan.OnScanResultCallback<T> mOnScanResultCallback;
    private final PreviewView mPreviewView;
    private MutableLiveData<AnalyzeResult<T>> mResultLiveData;

    public BaseCameraScan(ComponentActivity componentActivity, PreviewView previewView) {
        this(componentActivity, componentActivity, previewView);
    }

    public BaseCameraScan(Fragment fragment, PreviewView previewView) {
        this(fragment.requireContext(), fragment.getViewLifecycleOwner(), previewView);
    }

    public BaseCameraScan(Context context, LifecycleOwner lifecycleOwner, PreviewView previewView) {
        this.isAnalyze = true;
        this.isAutoStopAnalyze = true;
        this.mOnScaleGestureListener = new ScaleGestureDetector.SimpleOnScaleGestureListener() { // from class: com.king.camera.scan.BaseCameraScan.1
            @Override // android.view.ScaleGestureDetector.SimpleOnScaleGestureListener, android.view.ScaleGestureDetector.OnScaleGestureListener
            public boolean onScale(ScaleGestureDetector scaleGestureDetector) {
                float scaleFactor = scaleGestureDetector.getScaleFactor();
                ZoomState zoomState = BaseCameraScan.this.getZoomState();
                if (zoomState == null) {
                    return false;
                }
                BaseCameraScan.this.zoomTo(zoomState.getZoomRatio() * scaleFactor);
                return true;
            }
        };
        this.mContext = context;
        this.mLifecycleOwner = lifecycleOwner;
        this.mPreviewView = previewView;
        initData();
    }

    private void initData() {
        MutableLiveData<AnalyzeResult<T>> mutableLiveData = new MutableLiveData<>();
        this.mResultLiveData = mutableLiveData;
        mutableLiveData.observe(this.mLifecycleOwner, new Observer() { // from class: com.king.camera.scan.BaseCameraScan$$ExternalSyntheticLambda2
            @Override // androidx.lifecycle.Observer
            public final void onChanged(Object obj) {
                this.f$0.m308lambda$initData$0$comkingcamerascanBaseCameraScan((AnalyzeResult) obj);
            }
        });
        this.mOnAnalyzeListener = new Analyzer.OnAnalyzeListener<T>() { // from class: com.king.camera.scan.BaseCameraScan.2
            @Override // com.king.camera.scan.analyze.Analyzer.OnAnalyzeListener
            public void onSuccess(AnalyzeResult<T> analyzeResult) {
                BaseCameraScan.this.mResultLiveData.postValue(analyzeResult);
            }

            @Override // com.king.camera.scan.analyze.Analyzer.OnAnalyzeListener
            public void onFailure(Exception exc) {
                BaseCameraScan.this.mResultLiveData.postValue(null);
            }
        };
        final ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(this.mContext, this.mOnScaleGestureListener);
        this.mPreviewView.setOnTouchListener(new View.OnTouchListener() { // from class: com.king.camera.scan.BaseCameraScan$$ExternalSyntheticLambda3
            @Override // android.view.View.OnTouchListener
            public final boolean onTouch(View view, MotionEvent motionEvent) {
                return this.f$0.m309lambda$initData$1$comkingcamerascanBaseCameraScan(scaleGestureDetector, view, motionEvent);
            }
        });
        this.mBeepManager = new BeepManager(this.mContext.getApplicationContext());
        AmbientLightManager ambientLightManager = new AmbientLightManager(this.mContext.getApplicationContext());
        this.mAmbientLightManager = ambientLightManager;
        ambientLightManager.register();
        this.mAmbientLightManager.setOnLightSensorEventListener(new AmbientLightManager.OnLightSensorEventListener() { // from class: com.king.camera.scan.BaseCameraScan$$ExternalSyntheticLambda4
            @Override // com.king.camera.scan.manager.AmbientLightManager.OnLightSensorEventListener
            public final void onSensorChanged(boolean z, float f) {
                this.f$0.m310lambda$initData$2$comkingcamerascanBaseCameraScan(z, f);
            }
        });
    }
    /* synthetic */ void m308lambda$initData$0$comkingcamerascanBaseCameraScan(AnalyzeResult analyzeResult) {
        if (analyzeResult != null) {
            handleAnalyzeResult(analyzeResult);
            return;
        }
        CameraScan.OnScanResultCallback<T> onScanResultCallback = this.mOnScanResultCallback;
        if (onScanResultCallback != null) {
            onScanResultCallback.onScanResultFailure();
        }
    }
    /* synthetic */ boolean m309lambda$initData$1$comkingcamerascanBaseCameraScan(ScaleGestureDetector scaleGestureDetector, View view, MotionEvent motionEvent) {
        handlePreviewViewClickTap(motionEvent);
        if (isNeedTouchZoom()) {
            return scaleGestureDetector.onTouchEvent(motionEvent);
        }
        return false;
    }
    /* synthetic */ void m310lambda$initData$2$comkingcamerascanBaseCameraScan(boolean z, float f) {
        View view = this.flashlightView;
        if (view != null) {
            if (z) {
                if (view.getVisibility() != 0) {
                    this.flashlightView.setVisibility(0);
                    this.flashlightView.setSelected(isTorchEnabled());
                    return;
                }
                return;
            }
            if (view.getVisibility() != 0 || isTorchEnabled()) {
                return;
            }
            this.flashlightView.setVisibility(4);
            this.flashlightView.setSelected(false);
        }
    }

    private void handlePreviewViewClickTap(MotionEvent motionEvent) {
        if (motionEvent.getPointerCount() == 1) {
            int action = motionEvent.getAction();
            if (action == 0) {
                this.isClickTap = true;
                this.mDownX = motionEvent.getX();
                this.mDownY = motionEvent.getY();
                this.mLastHoveTapTime = System.currentTimeMillis();
                return;
            }
            if (action != 1) {
                if (action != 2) {
                    return;
                }
                this.isClickTap = distance(this.mDownX, this.mDownY, motionEvent.getX(), motionEvent.getY()) < 20.0f;
            } else {
                if (!this.isClickTap || this.mLastHoveTapTime + 150 <= System.currentTimeMillis()) {
                    return;
                }
                startFocusAndMetering(motionEvent.getX(), motionEvent.getY());
            }
        }
    }

    private float distance(float f, float f2, float f3, float f4) {
        float f5 = f - f3;
        float f6 = f2 - f4;
        return (float) Math.sqrt((f5 * f5) + (f6 * f6));
    }

    private void startFocusAndMetering(float f, float f2) {
        if (this.mCamera != null) {
            FocusMeteringAction focusMeteringActionBuild = new FocusMeteringAction.Builder(this.mPreviewView.getMeteringPointFactory().createPoint(f, f2)).build();
            if (this.mCamera.getCameraInfo().isFocusMeteringSupported(focusMeteringActionBuild)) {
                this.mCamera.getCameraControl().startFocusAndMetering(focusMeteringActionBuild);
                LogX.d("startFocusAndMetering: %f, %f", Float.valueOf(f), Float.valueOf(f2));
            }
        }
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setCameraConfig(CameraConfig cameraConfig) {
        if (cameraConfig != null) {
            this.mCameraConfig = cameraConfig;
        }
        return this;
    }

    @Override // com.king.camera.scan.ICamera
    public void startCamera() {
        if (this.mCameraConfig == null) {
            this.mCameraConfig = CameraConfigFactory.createDefaultCameraConfig(this.mContext, -1);
        }
        ListenableFuture<ProcessCameraProvider> processCameraProvider = ProcessCameraProvider.getInstance(this.mContext);
        this.mCameraProviderFuture = processCameraProvider;
        processCameraProvider.addListener(new Runnable() { // from class: com.king.camera.scan.BaseCameraScan$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m312lambda$startCamera$4$comkingcamerascanBaseCameraScan();
            }
        }, ContextCompat.getMainExecutor(this.mContext));
    }
    /* synthetic */ void m312lambda$startCamera$4$comkingcamerascanBaseCameraScan() {
        try {
            CameraSelector cameraSelectorOptions = this.mCameraConfig.options(new CameraSelector.Builder());
            Preview previewOptions = this.mCameraConfig.options(new Preview.Builder());
            previewOptions.setSurfaceProvider(this.mPreviewView.getSurfaceProvider());
            ImageAnalysis imageAnalysisOptions = this.mCameraConfig.options(new ImageAnalysis.Builder().setOutputImageFormat(1).setBackpressureStrategy(0));
            imageAnalysisOptions.setAnalyzer(Executors.newSingleThreadExecutor(), new ImageAnalysis.Analyzer() { // from class: com.king.camera.scan.BaseCameraScan$$ExternalSyntheticLambda1
                @Override // androidx.camera.core.ImageAnalysis.Analyzer
                public final void analyze(ImageProxy imageProxy) {
                    this.f$0.m311lambda$startCamera$3$comkingcamerascanBaseCameraScan(imageProxy);
                }
            });
            if (this.mCamera != null) {
                this.mCameraProviderFuture.get().unbindAll();
            }
            this.mCamera = this.mCameraProviderFuture.get().bindToLifecycle(this.mLifecycleOwner, cameraSelectorOptions, previewOptions, imageAnalysisOptions);
            ResolutionInfo resolutionInfo = previewOptions.getResolutionInfo();
            if (resolutionInfo != null) {
                LogX.d("Preview resolution: " + resolutionInfo.getResolution(), new Object[0]);
            }
            ResolutionInfo resolutionInfo2 = imageAnalysisOptions.getResolutionInfo();
            if (resolutionInfo2 != null) {
                LogX.d("ImageAnalysis resolution: " + resolutionInfo2.getResolution(), new Object[0]);
            }
        } catch (Exception e) {
            LogX.e(e);
        }
    }
    /* synthetic */ void m311lambda$startCamera$3$comkingcamerascanBaseCameraScan(ImageProxy imageProxy) {
        Analyzer<T> analyzer;
        if (this.isAnalyze && !this.isAnalyzeResult && (analyzer = this.mAnalyzer) != null) {
            analyzer.analyze(imageProxy, this.mOnAnalyzeListener);
        }
        imageProxy.close();
    }

    private synchronized void handleAnalyzeResult(AnalyzeResult<T> analyzeResult) {
        if (!this.isAnalyzeResult && this.isAnalyze) {
            this.isAnalyzeResult = true;
            if (this.isAutoStopAnalyze) {
                this.isAnalyze = false;
            }
            BeepManager beepManager = this.mBeepManager;
            if (beepManager != null) {
                beepManager.playBeepSoundAndVibrate();
            }
            CameraScan.OnScanResultCallback<T> onScanResultCallback = this.mOnScanResultCallback;
            if (onScanResultCallback != null) {
                onScanResultCallback.onScanResultCallback(analyzeResult);
            }
            this.isAnalyzeResult = false;
        }
    }

    @Override // com.king.camera.scan.ICamera
    public void stopCamera() {
        ListenableFuture<ProcessCameraProvider> listenableFuture = this.mCameraProviderFuture;
        if (listenableFuture != null) {
            try {
                listenableFuture.get().unbindAll();
            } catch (Exception e) {
                LogX.e(e);
            }
        }
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setAnalyzeImage(boolean z) {
        this.isAnalyze = z;
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setAutoStopAnalyze(boolean z) {
        this.isAutoStopAnalyze = z;
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setAnalyzer(Analyzer<T> analyzer) {
        this.mAnalyzer = analyzer;
        return this;
    }

    @Override // com.king.camera.scan.ICameraControl
    public void zoomIn() {
        ZoomState zoomState = getZoomState();
        if (zoomState != null) {
            float zoomRatio = zoomState.getZoomRatio() + ZOOM_STEP_SIZE;
            if (zoomRatio <= zoomState.getMaxZoomRatio()) {
                this.mCamera.getCameraControl().setZoomRatio(zoomRatio);
            }
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void zoomOut() {
        ZoomState zoomState = getZoomState();
        if (zoomState != null) {
            float zoomRatio = zoomState.getZoomRatio() - ZOOM_STEP_SIZE;
            if (zoomRatio >= zoomState.getMinZoomRatio()) {
                this.mCamera.getCameraControl().setZoomRatio(zoomRatio);
            }
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void zoomTo(float f) {
        ZoomState zoomState = getZoomState();
        if (zoomState != null) {
            float maxZoomRatio = zoomState.getMaxZoomRatio();
            this.mCamera.getCameraControl().setZoomRatio(Math.max(Math.min(f, maxZoomRatio), zoomState.getMinZoomRatio()));
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void lineZoomIn() {
        ZoomState zoomState = getZoomState();
        if (zoomState != null) {
            float linearZoom = zoomState.getLinearZoom() + ZOOM_STEP_SIZE;
            if (linearZoom <= 1.0f) {
                this.mCamera.getCameraControl().setLinearZoom(linearZoom);
            }
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void lineZoomOut() {
        ZoomState zoomState = getZoomState();
        if (zoomState != null) {
            float linearZoom = zoomState.getLinearZoom() - ZOOM_STEP_SIZE;
            if (linearZoom >= 0.0f) {
                this.mCamera.getCameraControl().setLinearZoom(linearZoom);
            }
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void lineZoomTo(float f) {
        Camera camera = this.mCamera;
        if (camera != null) {
            camera.getCameraControl().setLinearZoom(f);
        }
    }

    @Override // com.king.camera.scan.ICameraControl
    public void enableTorch(boolean z) {
        if (this.mCamera == null || !hasFlashUnit()) {
            return;
        }
        this.mCamera.getCameraControl().enableTorch(z);
    }

    @Override // com.king.camera.scan.ICameraControl
    public boolean isTorchEnabled() {
        Integer value;
        Camera camera = this.mCamera;
        return (camera == null || (value = camera.getCameraInfo().getTorchState().getValue()) == null || value.intValue() != 1) ? false : true;
    }

    @Override // com.king.camera.scan.ICameraControl
    public boolean hasFlashUnit() {
        Camera camera = this.mCamera;
        if (camera != null) {
            return camera.getCameraInfo().hasFlashUnit();
        }
        return this.mContext.getPackageManager().hasSystemFeature("android.hardware.camera.flash");
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setVibrate(boolean z) {
        BeepManager beepManager = this.mBeepManager;
        if (beepManager != null) {
            beepManager.setVibrate(z);
        }
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setPlayBeep(boolean z) {
        BeepManager beepManager = this.mBeepManager;
        if (beepManager != null) {
            beepManager.setPlayBeep(z);
        }
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setOnScanResultCallback(CameraScan.OnScanResultCallback<T> onScanResultCallback) {
        this.mOnScanResultCallback = onScanResultCallback;
        return this;
    }

    @Override // com.king.camera.scan.ICamera
    public Camera getCamera() {
        return this.mCamera;
    }
    public ZoomState getZoomState() {
        Camera camera = this.mCamera;
        if (camera != null) {
            return camera.getCameraInfo().getZoomState().getValue();
        }
        return null;
    }

    @Override // com.king.camera.scan.ICamera
    public void release() {
        this.isAnalyze = false;
        this.flashlightView = null;
        AmbientLightManager ambientLightManager = this.mAmbientLightManager;
        if (ambientLightManager != null) {
            ambientLightManager.unregister();
        }
        BeepManager beepManager = this.mBeepManager;
        if (beepManager != null) {
            beepManager.close();
        }
        stopCamera();
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> bindFlashlightView(View view) {
        this.flashlightView = view;
        AmbientLightManager ambientLightManager = this.mAmbientLightManager;
        if (ambientLightManager != null) {
            ambientLightManager.setLightSensorEnabled(view != null);
        }
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setDarkLightLux(float f) {
        AmbientLightManager ambientLightManager = this.mAmbientLightManager;
        if (ambientLightManager != null) {
            ambientLightManager.setDarkLightLux(f);
        }
        return this;
    }

    @Override // com.king.camera.scan.CameraScan
    public CameraScan<T> setBrightLightLux(float f) {
        AmbientLightManager ambientLightManager = this.mAmbientLightManager;
        if (ambientLightManager != null) {
            ambientLightManager.setBrightLightLux(f);
        }
        return this;
    }
}

