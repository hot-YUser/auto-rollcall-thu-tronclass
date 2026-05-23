package androidx.camera.core.impl;

import androidx.camera.core.ImageInfo;
public interface ImageInfoProcessor {
    CaptureStage getCaptureStage();

    boolean process(ImageInfo imageInfo);
}

