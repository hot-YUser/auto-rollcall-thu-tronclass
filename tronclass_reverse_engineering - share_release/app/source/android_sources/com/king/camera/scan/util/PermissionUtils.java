package com.king.camera.scan.util;

import android.app.Activity;
import android.content.Context;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import com.king.logx.LogX;
import java.util.Arrays;
public class PermissionUtils {
    private PermissionUtils() {
        throw new AssertionError();
    }

    public static boolean checkPermission(Context context, String str) {
        return ActivityCompat.checkSelfPermission(context, str) == 0;
    }

    public static void requestPermission(Activity activity, String str, int i) {
        requestPermissions(activity, new String[]{str}, i);
    }

    public static void requestPermission(Fragment fragment, String str, int i) {
        requestPermissions(fragment, new String[]{str}, i);
    }

    public static void requestPermissions(Activity activity, String[] strArr, int i) {
        LogX.d("requestPermissions: %s", Arrays.toString(strArr));
        ActivityCompat.requestPermissions(activity, strArr, i);
    }

    public static void requestPermissions(Fragment fragment, String[] strArr, int i) {
        LogX.d("requestPermissions: %s", Arrays.toString(strArr));
        fragment.requestPermissions(strArr, i);
    }

    public static boolean requestPermissionsResult(String str, String[] strArr, int[] iArr) {
        int length = strArr.length;
        for (int i = 0; i < length; i++) {
            if (str.equals(strArr[i]) && iArr[i] == 0) {
                return true;
            }
        }
        return false;
    }

    public static boolean requestPermissionsResult(String[] strArr, String[] strArr2, int[] iArr) {
        int length = strArr2.length;
        for (int i = 0; i < length; i++) {
            for (String str : strArr) {
                if (str.equals(strArr2[i]) && iArr[i] != 0) {
                    return false;
                }
            }
        }
        return true;
    }
}

