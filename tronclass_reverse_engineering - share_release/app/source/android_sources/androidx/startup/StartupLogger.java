package androidx.startup;

import android.util.Log;
public final class StartupLogger {
    static final boolean DEBUG = false;
    private static final String TAG = "StartupLogger";

    private StartupLogger() {
    }

    public static void i(String str) {
        Log.i(TAG, str);
    }

    public static void w(String str) {
        Log.w(TAG, str);
    }

    public static void e(String str, Throwable th) {
        Log.e(TAG, str, th);
    }
}

