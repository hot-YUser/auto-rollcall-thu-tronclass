package org.opencv.android;

import android.util.Log;
import org.opencv.core.Core;
class StaticHelper {
    private static final String TAG = "OpenCV/StaticHelper";

    private static native String getLibraryList();

    StaticHelper() {
    }

    public static boolean initOpenCV(boolean z) {
        if (z) {
            Log.w(TAG, "CUDA support was removed!");
        }
        Log.d(TAG, "First attempt to load libs");
        if (loadLibrary("opencv_java4")) {
            Log.d(TAG, "First attempt to load libs is OK");
            for (String str : Core.getBuildInformation().split(System.getProperty("line.separator"))) {
                Log.i(TAG, str);
            }
            return true;
        }
        Log.d(TAG, "First attempt to load libs fails");
        return false;
    }

    private static boolean loadLibrary(String str) {
        Log.d(TAG, "Trying to load library " + str);
        try {
            System.loadLibrary(str);
            Log.d(TAG, "Library " + str + " loaded");
            return true;
        } catch (UnsatisfiedLinkError e) {
            Log.d(TAG, "Cannot load library \"" + str + "\"");
            e.printStackTrace();
            return false;
        }
    }
}

