package androidx.camera.core.internal.compat;

import android.media.ImageWriter;
import android.os.Build;
import android.util.Log;
import android.view.Surface;
import androidx.core.util.Preconditions;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
final class ImageWriterCompatApi26Impl {
    private static final String TAG = "ImageWriterCompatApi26";
    private static Method sNewInstanceMethod;

    static {
        try {
            sNewInstanceMethod = ImageWriter.class.getMethod("newInstance", Surface.class, Integer.TYPE, Integer.TYPE);
        } catch (NoSuchMethodException e) {
            Log.i(TAG, "Unable to initialize via reflection.", e);
        }
    }

    static ImageWriter newInstance(Surface surface, int i, int i2) {
        Throwable th = null;
        if (Build.VERSION.SDK_INT >= 26) {
            try {
                return (ImageWriter) Preconditions.checkNotNull(sNewInstanceMethod.invoke(null, surface, Integer.valueOf(i), Integer.valueOf(i2)));
            } catch (IllegalAccessException | InvocationTargetException e) {
                th = e;
            }
        }
        throw new RuntimeException("Unable to invoke newInstance(Surface, int, int) via reflection.", th);
    }

    private ImageWriterCompatApi26Impl() {
    }
}

