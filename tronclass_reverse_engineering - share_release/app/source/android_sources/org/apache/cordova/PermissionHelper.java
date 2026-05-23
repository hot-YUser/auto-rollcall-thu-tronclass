package org.apache.cordova;

import java.util.Arrays;
import org.json.JSONException;
public class PermissionHelper {
    private static final String LOG_TAG = "CordovaPermissionHelper";

    public static void requestPermission(CordovaPlugin cordovaPlugin, int i, String str) {
        requestPermissions(cordovaPlugin, i, new String[]{str});
    }

    public static void requestPermissions(CordovaPlugin cordovaPlugin, int i, String[] strArr) {
        cordovaPlugin.f7cordova.requestPermissions(cordovaPlugin, i, strArr);
    }

    public static boolean hasPermission(CordovaPlugin cordovaPlugin, String str) {
        return cordovaPlugin.f7cordova.hasPermission(str);
    }

    private static void deliverPermissionResult(CordovaPlugin cordovaPlugin, int i, String[] strArr) {
        int[] iArr = new int[strArr.length];
        Arrays.fill(iArr, 0);
        try {
            cordovaPlugin.onRequestPermissionResult(i, strArr, iArr);
        } catch (JSONException e) {
            LOG.e(LOG_TAG, "JSONException when delivering permissions results", e);
        }
    }
}

