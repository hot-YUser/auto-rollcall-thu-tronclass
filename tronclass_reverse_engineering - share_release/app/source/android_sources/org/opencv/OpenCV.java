package org.opencv;

import android.content.Context;
import org.opencv.android.OpenCVLoader;
public final class OpenCV {
    private OpenCV() {
        throw new AssertionError();
    }

    public static boolean initOpenCV() {
        return OpenCVLoader.initLocal();
    }

    @Deprecated
    public static void initAsync(Context context) {
        initOpenCV();
    }
}

