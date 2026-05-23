package com.onesignal;

import android.app.Activity;
import android.content.Context;
import android.os.Process;
import android.util.Log;
class AndroidSupportV4Compat {

    interface RequestPermissionsRequestCodeValidator {
        void validateRequestPermissionsRequestCode(int i);
    }

    AndroidSupportV4Compat() {
    }

    static class ContextCompat {
        ContextCompat() {
        }

        static int checkSelfPermission(Context context, String str) {
            try {
                return context.checkPermission(str, Process.myPid(), Process.myUid());
            } catch (Throwable unused) {
                Log.e("OneSignal", "checkSelfPermission failed, returning PERMISSION_DENIED");
                return -1;
            }
        }

        static int getColor(Context context, int i) {
            return context.getColor(i);
        }
    }

    static class ActivityCompat {
        ActivityCompat() {
        }

        static void requestPermissions(Activity activity, String[] strArr, int i) {
            ActivityCompatApi23.requestPermissions(activity, strArr, i);
        }

        static boolean shouldShowRequestPermissionRationale(Activity activity, String str) {
            return ActivityCompatApi23.shouldShowRequestPermissionRationale(activity, str);
        }
    }

    static class ActivityCompatApi23 {
        ActivityCompatApi23() {
        }

        /* high-level source view WARN: Multi-variable type inference failed */
        static void requestPermissions(Activity activity, String[] strArr, int i) {
            if (activity instanceof RequestPermissionsRequestCodeValidator) {
                ((RequestPermissionsRequestCodeValidator) activity).validateRequestPermissionsRequestCode(i);
            }
            activity.requestPermissions(strArr, i);
        }

        static boolean shouldShowRequestPermissionRationale(Activity activity, String str) {
            return androidx.core.app.ActivityCompat.shouldShowRequestPermissionRationale(activity, str);
        }
    }
}

