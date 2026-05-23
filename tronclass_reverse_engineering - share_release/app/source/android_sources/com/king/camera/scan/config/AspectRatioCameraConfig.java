package com.king.camera.scan.config;

import android.content.Context;
import android.util.DisplayMetrics;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.Preview;
import com.king.logx.LogX;
@Deprecated
public class AspectRatioCameraConfig extends CameraConfig {
    private int mAspectRatio;

    public AspectRatioCameraConfig(Context context) {
        initTargetAspectRatio(context);
    }

    private void initTargetAspectRatio(Context context) {
        DisplayMetrics displayMetrics = context.getResources().getDisplayMetrics();
        LogX.d("displayMetrics: %dx%d", Integer.valueOf(displayMetrics.widthPixels), Integer.valueOf(displayMetrics.heightPixels));
        float fMax = Math.max(r0, r4) / Math.min(r0, r4);
        if (Math.abs(fMax - 1.3333334f) < Math.abs(fMax - 1.7777778f)) {
            this.mAspectRatio = 0;
        } else {
            this.mAspectRatio = 1;
        }
        LogX.d("aspectRatio: %d", Integer.valueOf(this.mAspectRatio));
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
        builder.setTargetAspectRatio(this.mAspectRatio);
        return super.options(builder);
    }
}

