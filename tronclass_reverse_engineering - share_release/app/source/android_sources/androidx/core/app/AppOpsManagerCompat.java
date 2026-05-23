package androidx.core.app;

import android.app.AppOpsManager;
import android.content.Context;
import android.os.Binder;
import android.os.Build;
public final class AppOpsManagerCompat {
    public static final int MODE_ALLOWED = 0;
    public static final int MODE_DEFAULT = 3;
    public static final int MODE_ERRORED = 2;
    public static final int MODE_IGNORED = 1;

    private AppOpsManagerCompat() {
    }

    public static String permissionToOp(String str) {
        return Api23Impl.permissionToOp(str);
    }

    public static int noteOp(Context context, String str, int i, String str2) {
        return Api19Impl.noteOp((AppOpsManager) context.getSystemService("appops"), str, i, str2);
    }

    public static int noteOpNoThrow(Context context, String str, int i, String str2) {
        return Api19Impl.noteOpNoThrow((AppOpsManager) context.getSystemService("appops"), str, i, str2);
    }

    public static int noteProxyOp(Context context, String str, String str2) {
        return Api23Impl.noteProxyOp((AppOpsManager) Api23Impl.getSystemService(context, AppOpsManager.class), str, str2);
    }

    public static int noteProxyOpNoThrow(Context context, String str, String str2) {
        return Api23Impl.noteProxyOpNoThrow((AppOpsManager) Api23Impl.getSystemService(context, AppOpsManager.class), str, str2);
    }

    public static int checkOrNoteProxyOp(Context context, int i, String str, String str2) {
        if (Build.VERSION.SDK_INT >= 29) {
            AppOpsManager systemService = Api29Impl.getSystemService(context);
            int iCheckOpNoThrow = Api29Impl.checkOpNoThrow(systemService, str, Binder.getCallingUid(), str2);
            return iCheckOpNoThrow != 0 ? iCheckOpNoThrow : Api29Impl.checkOpNoThrow(systemService, str, i, Api29Impl.getOpPackageName(context));
        }
        return noteProxyOpNoThrow(context, str, str2);
    }

    static class Api29Impl {
        private Api29Impl() {
        }

        static AppOpsManager getSystemService(Context context) {
            return (AppOpsManager) context.getSystemService(AppOpsManager.class);
        }

        static int checkOpNoThrow(AppOpsManager appOpsManager, String str, int i, String str2) {
            if (appOpsManager == null) {
                return 1;
            }
            return appOpsManager.checkOpNoThrow(str, i, str2);
        }

        static String getOpPackageName(Context context) {
            return context.getOpPackageName();
        }
    }

    static class Api23Impl {
        private Api23Impl() {
        }

        static String permissionToOp(String str) {
            return AppOpsManager.permissionToOp(str);
        }

        static <T> T getSystemService(Context context, Class<T> cls) {
            return (T) context.getSystemService(cls);
        }

        static int noteProxyOp(AppOpsManager appOpsManager, String str, String str2) {
            return appOpsManager.noteProxyOp(str, str2);
        }

        static int noteProxyOpNoThrow(AppOpsManager appOpsManager, String str, String str2) {
            return appOpsManager.noteProxyOpNoThrow(str, str2);
        }
    }

    static class Api19Impl {
        private Api19Impl() {
        }

        static int noteOpNoThrow(AppOpsManager appOpsManager, String str, int i, String str2) {
            return appOpsManager.noteOpNoThrow(str, i, str2);
        }

        static int noteOp(AppOpsManager appOpsManager, String str, int i, String str2) {
            return appOpsManager.noteOp(str, i, str2);
        }
    }
}

