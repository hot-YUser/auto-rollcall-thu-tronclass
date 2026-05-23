package com.king.camera.scan.config;

import android.content.Context;
import androidx.camera.core.CameraSelector;
public final class CameraConfigFactory {
    private CameraConfigFactory() {
        throw new AssertionError();
    }

    public static CameraConfig createDefaultCameraConfig(Context context, final int i) {
        return new AdaptiveCameraConfig(context) { // from class: com.king.camera.scan.config.CameraConfigFactory.1
            @Override // com.king.camera.scan.config.AdaptiveCameraConfig, com.king.camera.scan.config.CameraConfig
            public CameraSelector options(CameraSelector.Builder builder) {
                int i2 = i;
                if (i2 != -1) {
                    builder.requireLensFacing(i2);
                }
                return super.options(builder);
            }
        };
    }
}

