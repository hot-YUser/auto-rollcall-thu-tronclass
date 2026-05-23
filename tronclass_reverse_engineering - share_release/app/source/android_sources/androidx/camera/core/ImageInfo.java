package androidx.camera.core;

import android.graphics.Matrix;
import androidx.camera.core.impl.TagBundle;
import androidx.camera.core.impl.utils.ExifData;
public interface ImageInfo {
    int getRotationDegrees();

    TagBundle getTagBundle();

    long getTimestamp();

    void populateExifData(ExifData.Builder builder);

    default Matrix getSensorToBufferTransformMatrix() {
        return new Matrix();
    }
}

