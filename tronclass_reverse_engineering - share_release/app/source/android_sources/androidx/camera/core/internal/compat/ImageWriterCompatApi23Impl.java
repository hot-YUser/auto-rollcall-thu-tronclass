package androidx.camera.core.internal.compat;

import android.media.Image;
import android.media.ImageWriter;
import android.view.Surface;
final class ImageWriterCompatApi23Impl {
    static ImageWriter newInstance(Surface surface, int i) {
        return ImageWriter.newInstance(surface, i);
    }

    static Image dequeueInputImage(ImageWriter imageWriter) {
        return imageWriter.dequeueInputImage();
    }

    static void queueInputImage(ImageWriter imageWriter, Image image) {
        imageWriter.queueInputImage(image);
    }

    static void close(ImageWriter imageWriter) {
        imageWriter.close();
    }

    private ImageWriterCompatApi23Impl() {
    }
}

