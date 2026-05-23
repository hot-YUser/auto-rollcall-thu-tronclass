package com.king.camera.scan.config;

import androidx.camera.core.CameraSelector;
import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.Preview;
public class CameraConfig {
    public CameraSelector options(CameraSelector.Builder builder) {
        return builder.build();
    }

    public Preview options(Preview.Builder builder) {
        return builder.build();
    }

    public ImageAnalysis options(ImageAnalysis.Builder builder) {
        return builder.build();
    }
}

