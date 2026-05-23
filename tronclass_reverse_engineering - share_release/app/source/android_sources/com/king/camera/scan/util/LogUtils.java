package com.king.camera.scan.util;

import android.util.Log;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Locale;
@Deprecated
public class LogUtils {
    private static final String ARROW = " ➔ ";
    public static final int ASSERT = 7;
    private static final String BOTTOM_BORDER = "└──────────────────────────────────────────────────────────────────────────────";
    private static final char BOTTOM_LEFT_CORNER = 9492;
    public static final int DEBUG = 3;
    private static final String DOUBLE_DIVIDER = "───────────────────────────────────────";
    public static final int ERROR = 6;
    private static final char HORIZONTAL_LINE = 9474;
    public static final int INFO = 4;
    private static final String LINE_FEED = "\n";
    private static final int LOG_STACK_OFFSET = 6;
    private static final String MIDDLE_BORDER = "├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄";
    private static final char MIDDLE_CORNER = 9500;
    private static final int MIN_STACK_OFFSET = 5;
    public static final int PRINTLN = 1;
    private static final String SINGLE_DIVIDER = "┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄";
    private static final String SPACE = " ";
    public static final String STACK_TRACE_FORMAT = "%s.%s(%s:%d)";
    public static final String TAG = "CameraScan";
    private static final String TOP_BORDER = "┌──────────────────────────────────────────────────────────────────────────────";
    private static final char TOP_LEFT_CORNER = 9484;
    public static final int VERBOSE = 2;
    public static final int WARN = 5;
    private static boolean isShowLog = true;
    private static int priority = 1;

    private LogUtils() {
        throw new AssertionError();
    }

    public static void setShowLog(boolean z) {
        isShowLog = z;
    }

    public static boolean isShowLog() {
        return isShowLog;
    }

    public static int getPriority() {
        return priority;
    }

    public static void setPriority(int i) {
        priority = i;
    }

    private static String getStackTraceMessage(Object obj, int i) {
        StackTraceElement stackTraceElement = getStackTraceElement(i);
        String className = stackTraceElement.getClassName();
        return "┌──────────────────────────────────────────────────────────────────────────────\n Thread: " + Thread.currentThread().getName() + ARROW + String.format(Locale.getDefault(), STACK_TRACE_FORMAT, className.substring(className.lastIndexOf(".") + 1), stackTraceElement.getMethodName(), stackTraceElement.getFileName(), Integer.valueOf(stackTraceElement.getLineNumber())) + "\n├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n " + obj + "\n└──────────────────────────────────────────────────────────────────────────────";
    }

    private static StackTraceElement getStackTraceElement(int i) {
        return Thread.currentThread().getStackTrace()[i];
    }

    private static String getStackTraceString(Throwable th) {
        if (th != null) {
            StringWriter stringWriter = new StringWriter(256);
            PrintWriter printWriter = new PrintWriter((Writer) stringWriter, false);
            th.printStackTrace(printWriter);
            printWriter.flush();
            return stringWriter.toString();
        }
        return "";
    }

    public static void v(String str) {
        if (!isShowLog || priority > 2) {
            return;
        }
        log(2, str);
    }

    public static void v(Throwable th) {
        if (!isShowLog || priority > 2) {
            return;
        }
        log(2, th);
    }

    public static void v(String str, Throwable th) {
        if (!isShowLog || priority > 2) {
            return;
        }
        log(2, str, th);
    }

    public static void d(String str) {
        if (!isShowLog || priority > 3) {
            return;
        }
        log(3, str);
    }

    public static void d(Throwable th) {
        if (!isShowLog || priority > 3) {
            return;
        }
        log(3, th);
    }

    public static void d(String str, Throwable th) {
        if (!isShowLog || priority > 3) {
            return;
        }
        log(3, str, th);
    }

    public static void i(String str) {
        if (!isShowLog || priority > 4) {
            return;
        }
        log(4, str);
    }

    public static void i(Throwable th) {
        if (!isShowLog || priority > 4) {
            return;
        }
        log(4, th);
    }

    public static void i(String str, Throwable th) {
        if (!isShowLog || priority > 4) {
            return;
        }
        log(4, str, th);
    }

    public static void w(String str) {
        if (!isShowLog || priority > 5) {
            return;
        }
        log(5, str);
    }

    public static void w(Throwable th) {
        if (!isShowLog || priority > 5) {
            return;
        }
        log(5, th);
    }

    public static void w(String str, Throwable th) {
        if (!isShowLog || priority > 5) {
            return;
        }
        log(5, str, th);
    }

    public static void e(String str) {
        if (!isShowLog || priority > 6) {
            return;
        }
        log(6, str);
    }

    public static void e(Throwable th) {
        if (!isShowLog || priority > 6) {
            return;
        }
        log(6, th);
    }

    public static void e(String str, Throwable th) {
        if (!isShowLog || priority > 6) {
            return;
        }
        log(6, str, th);
    }

    public static void wtf(String str) {
        if (!isShowLog || priority > 7) {
            return;
        }
        log(7, str);
    }

    public static void wtf(Throwable th) {
        if (!isShowLog || priority > 7) {
            return;
        }
        log(7, th);
    }

    public static void wtf(String str, Throwable th) {
        if (!isShowLog || priority > 7) {
            return;
        }
        log(7, str, th);
    }

    private static void log(int i, String str) {
        Log.println(i, TAG, getStackTraceMessage(str, 6));
    }

    private static void log(int i, Throwable th) {
        Log.println(i, TAG, getStackTraceMessage(getStackTraceString(th), 6));
    }

    private static void log(int i, String str, Throwable th) {
        Log.println(i, TAG, getStackTraceMessage(str + '\n' + getStackTraceString(th), 6));
    }

    public static void println(String str) {
        if (!isShowLog || priority > 1) {
            return;
        }
        System.out.println(getStackTraceMessage(str, 5));
    }

    public static void println(Object obj) {
        if (!isShowLog || priority > 1) {
            return;
        }
        System.out.println(getStackTraceMessage(obj, 5));
    }
}

