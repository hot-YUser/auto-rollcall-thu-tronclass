package androidx.camera.core.internal.compat;

import android.media.ImageWriter;
import android.view.Surface;
final class ImageWriterCompatApi29Impl {
    static ImageWriter newInstance(Surface surface, int i, int i2) {
        return ImageWriter.newInstance(surface, i, i2);
    }

    private ImageWriterCompatApi29Impl() {
    }
}

