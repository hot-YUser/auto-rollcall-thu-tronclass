package androidx.camera.core;

import android.os.Build;
import android.util.Log;
public final class Logger {
    static final int DEFAULT_MIN_LOG_LEVEL = 3;
    private static final int MAX_TAG_LENGTH = 23;
    private static int sMinLogLevel = 3;

    private Logger() {
    }

    private static boolean isLogLevelEnabled(String str, int i) {
        return sMinLogLevel <= i || Log.isLoggable(str, i);
    }

    static void setMinLogLevel(int i) {
        sMinLogLevel = i;
    }

    static int getMinLogLevel() {
        return sMinLogLevel;
    }

    static void resetMinLogLevel() {
        sMinLogLevel = 3;
    }

    public static boolean isDebugEnabled(String str) {
        return isLogLevelEnabled(truncateTag(str), 3);
    }

    public static boolean isInfoEnabled(String str) {
        return isLogLevelEnabled(truncateTag(str), 4);
    }

    public static boolean isWarnEnabled(String str) {
        return isLogLevelEnabled(truncateTag(str), 5);
    }

    public static boolean isErrorEnabled(String str) {
        return isLogLevelEnabled(truncateTag(str), 6);
    }

    public static void d(String str, String str2) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 3)) {
            Log.d(strTruncateTag, str2);
        }
    }

    public static void d(String str, String str2, Throwable th) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 3)) {
            Log.d(strTruncateTag, str2, th);
        }
    }

    public static void i(String str, String str2) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 4)) {
            Log.i(strTruncateTag, str2);
        }
    }

    public static void i(String str, String str2, Throwable th) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 4)) {
            Log.i(strTruncateTag, str2, th);
        }
    }

    public static void w(String str, String str2) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 5)) {
            Log.w(strTruncateTag, str2);
        }
    }

    public static void w(String str, String str2, Throwable th) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 5)) {
            Log.w(strTruncateTag, str2, th);
        }
    }

    public static void e(String str, String str2) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 6)) {
            Log.e(strTruncateTag, str2);
        }
    }

    public static void e(String str, String str2, Throwable th) {
        String strTruncateTag = truncateTag(str);
        if (isLogLevelEnabled(strTruncateTag, 6)) {
            Log.e(strTruncateTag, str2, th);
        }
    }

    private static String truncateTag(String str) {
        return (Build.VERSION.SDK_INT > 25 || 23 >= str.length()) ? str : str.substring(0, 23);
    }
}

