package org.apache.cordova;

import android.util.Log;
public class LOG {
    public static final int DEBUG = 3;
    public static final int ERROR = 6;
    public static final int INFO = 4;
    public static int LOGLEVEL = 6;
    public static final int VERBOSE = 2;
    public static final int WARN = 5;

    public static void setLogLevel(int i) {
        LOGLEVEL = i;
        Log.i("CordovaLog", "Changing log level to " + i);
    }

    public static void setLogLevel(String str) {
        if ("VERBOSE".equals(str)) {
            LOGLEVEL = 2;
        } else if ("DEBUG".equals(str)) {
            LOGLEVEL = 3;
        } else if ("INFO".equals(str)) {
            LOGLEVEL = 4;
        } else if ("WARN".equals(str)) {
            LOGLEVEL = 5;
        } else if ("ERROR".equals(str)) {
            LOGLEVEL = 6;
        }
        Log.i("CordovaLog", "Changing log level to " + str + "(" + LOGLEVEL + ")");
    }

    public static boolean isLoggable(int i) {
        return i >= LOGLEVEL;
    }

    public static void v(String str, String str2) {
        if (2 >= LOGLEVEL) {
            Log.v(str, str2);
        }
    }

    public static void d(String str, String str2) {
        if (3 >= LOGLEVEL) {
            Log.d(str, str2);
        }
    }

    public static void i(String str, String str2) {
        if (4 >= LOGLEVEL) {
            Log.i(str, str2);
        }
    }

    public static void w(String str, String str2) {
        if (5 >= LOGLEVEL) {
            Log.w(str, str2);
        }
    }

    public static void e(String str, String str2) {
        if (6 >= LOGLEVEL) {
            Log.e(str, str2);
        }
    }

    public static void v(String str, String str2, Throwable th) {
        if (2 >= LOGLEVEL) {
            Log.v(str, str2, th);
        }
    }

    public static void d(String str, String str2, Throwable th) {
        if (3 >= LOGLEVEL) {
            Log.d(str, str2, th);
        }
    }

    public static void i(String str, String str2, Throwable th) {
        if (4 >= LOGLEVEL) {
            Log.i(str, str2, th);
        }
    }

    public static void w(String str, Throwable th) {
        if (5 >= LOGLEVEL) {
            Log.w(str, th);
        }
    }

    public static void w(String str, String str2, Throwable th) {
        if (5 >= LOGLEVEL) {
            Log.w(str, str2, th);
        }
    }

    public static void e(String str, String str2, Throwable th) {
        if (6 >= LOGLEVEL) {
            Log.e(str, str2, th);
        }
    }

    public static void v(String str, String str2, Object... objArr) {
        if (2 >= LOGLEVEL) {
            Log.v(str, String.format(str2, objArr));
        }
    }

    public static void d(String str, String str2, Object... objArr) {
        if (3 >= LOGLEVEL) {
            Log.d(str, String.format(str2, objArr));
        }
    }

    public static void i(String str, String str2, Object... objArr) {
        if (4 >= LOGLEVEL) {
            Log.i(str, String.format(str2, objArr));
        }
    }

    public static void w(String str, String str2, Object... objArr) {
        if (5 >= LOGLEVEL) {
            Log.w(str, String.format(str2, objArr));
        }
    }

    public static void e(String str, String str2, Object... objArr) {
        if (6 >= LOGLEVEL) {
            Log.e(str, String.format(str2, objArr));
        }
    }
}

