package com.king.camera.scan;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import com.king.camera.scan.analyze.Analyzer;
import com.king.camera.scan.config.CameraConfig;
public abstract class CameraScan<T> implements ICamera, ICameraControl {
    public static final float ASPECT_RATIO_16_9 = 1.7777778f;
    public static final float ASPECT_RATIO_4_3 = 1.3333334f;
    public static int LENS_FACING_BACK = 1;
    public static int LENS_FACING_FRONT = 0;
    public static String SCAN_RESULT = "SCAN_RESULT";
    private boolean isNeedTouchZoom = true;
    protected Bundle mExtras;

    public interface OnScanResultCallback<T> {
        void onScanResultCallback(AnalyzeResult<T> analyzeResult);

        default void onScanResultFailure() {
        }
    }

    public abstract CameraScan<T> bindFlashlightView(View view);

    public abstract CameraScan<T> setAnalyzeImage(boolean z);

    public abstract CameraScan<T> setAnalyzer(Analyzer<T> analyzer);

    public abstract CameraScan<T> setAutoStopAnalyze(boolean z);

    public abstract CameraScan<T> setBrightLightLux(float f);

    public abstract CameraScan<T> setCameraConfig(CameraConfig cameraConfig);

    public abstract CameraScan<T> setDarkLightLux(float f);

    public abstract CameraScan<T> setOnScanResultCallback(OnScanResultCallback<T> onScanResultCallback);

    public abstract CameraScan<T> setPlayBeep(boolean z);

    public abstract CameraScan<T> setVibrate(boolean z);

    protected boolean isNeedTouchZoom() {
        return this.isNeedTouchZoom;
    }

    public CameraScan<T> setNeedTouchZoom(boolean z) {
        this.isNeedTouchZoom = z;
        return this;
    }

    public Bundle getExtras() {
        if (this.mExtras == null) {
            this.mExtras = new Bundle();
        }
        return this.mExtras;
    }

    public static String parseScanResult(Intent intent) {
        if (intent != null) {
            return intent.getStringExtra(SCAN_RESULT);
        }
        return null;
    }
}

