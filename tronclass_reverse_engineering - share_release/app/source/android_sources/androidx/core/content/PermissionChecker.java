package androidx.core.content;

import android.content.Context;
import android.os.Binder;
import android.os.Process;
import androidx.core.app.AppOpsManagerCompat;
import androidx.core.util.ObjectsCompat;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class PermissionChecker {
    public static final int PERMISSION_DENIED = -1;
    public static final int PERMISSION_DENIED_APP_OP = -2;
    public static final int PERMISSION_GRANTED = 0;

    @Retention(RetentionPolicy.SOURCE)
    public @interface PermissionResult {
    }

    private PermissionChecker() {
    }

    public static int checkPermission(Context context, String str, int i, int i2, String str2) {
        int iNoteProxyOpNoThrow;
        if (context.checkPermission(str, i, i2) == -1) {
            return -1;
        }
        String strPermissionToOp = AppOpsManagerCompat.permissionToOp(str);
        if (strPermissionToOp == null) {
            return 0;
        }
        if (str2 == null) {
            String[] packagesForUid = context.getPackageManager().getPackagesForUid(i2);
            if (packagesForUid == null || packagesForUid.length <= 0) {
                return -1;
            }
            str2 = packagesForUid[0];
        }
        int iMyUid = Process.myUid();
        String packageName = context.getPackageName();
        if (iMyUid == i2 && ObjectsCompat.equals(packageName, str2)) {
            iNoteProxyOpNoThrow = AppOpsManagerCompat.checkOrNoteProxyOp(context, i2, strPermissionToOp, str2);
        } else {
            iNoteProxyOpNoThrow = AppOpsManagerCompat.noteProxyOpNoThrow(context, strPermissionToOp, str2);
        }
        return iNoteProxyOpNoThrow == 0 ? 0 : -2;
    }

    public static int checkSelfPermission(Context context, String str) {
        return checkPermission(context, str, Process.myPid(), Process.myUid(), context.getPackageName());
    }

    public static int checkCallingPermission(Context context, String str, String str2) {
        if (Binder.getCallingPid() == Process.myPid()) {
            return -1;
        }
        return checkPermission(context, str, Binder.getCallingPid(), Binder.getCallingUid(), str2);
    }

    public static int checkCallingOrSelfPermission(Context context, String str) {
        return checkPermission(context, str, Binder.getCallingPid(), Binder.getCallingUid(), Binder.getCallingPid() == Process.myPid() ? context.getPackageName() : null);
    }
}

