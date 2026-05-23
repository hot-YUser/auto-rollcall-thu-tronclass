package com.king.camera.scan.config;

import android.content.Context;
import android.util.DisplayMetrics;
import android.util.Size;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.Preview;
import com.king.logx.LogX;
@Deprecated
public class ResolutionCameraConfig extends CameraConfig {
    public static final int IMAGE_QUALITY_1080P = 1080;
    public static final int IMAGE_QUALITY_720P = 720;
    private Size mTargetSize;

    public ResolutionCameraConfig(Context context) {
        this(context, IMAGE_QUALITY_1080P);
    }

    public ResolutionCameraConfig(Context context, int i) {
        initTargetResolutionSize(context, i);
    }

    private void initTargetResolutionSize(Context context, int i) {
        DisplayMetrics displayMetrics = context.getResources().getDisplayMetrics();
        int i2 = displayMetrics.widthPixels;
        int i3 = displayMetrics.heightPixels;
        LogX.d("displayMetrics: %dx%d", Integer.valueOf(i2), Integer.valueOf(i3));
        if (i2 < i3) {
            float f = i3 / i2;
            int iMin = Math.min(i2, i);
            if (Math.abs(f - 1.3333334f) < Math.abs(f - 1.7777778f)) {
                this.mTargetSize = new Size(iMin, Math.round(iMin * 1.3333334f));
            } else {
                this.mTargetSize = new Size(iMin, Math.round(iMin * 1.7777778f));
            }
        } else {
            int iMin2 = Math.min(i3, i);
            float f2 = i2 / i3;
            if (Math.abs(f2 - 1.3333334f) < Math.abs(f2 - 1.7777778f)) {
                this.mTargetSize = new Size(Math.round(iMin2 * 1.3333334f), iMin2);
            } else {
                this.mTargetSize = new Size(Math.round(iMin2 * 1.7777778f), iMin2);
            }
        }
        LogX.d("targetSize: " + this.mTargetSize, new Object[0]);
    }

    @Override // com.king.camera.scan.config.CameraConfig
    public CameraSelector options(CameraSelector.Builder builder) {
        return super.options(builder);
    }

    @Override // com.king.camera.scan.config.CameraConfig
    public Preview options(Preview.Builder builder) {
        return super.options(builder);
    }

    @Override // com.king.camera.scan.config.CameraConfig
    public ImageAnalysis options(ImageAnalysis.Builder builder) {
        builder.setTargetResolution(this.mTargetSize);
        return super.options(builder);
    }
}

