package com.wisdomgarden.mobile;

import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin(requestCodes = {WriteFilePermission.FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS})
public class WriteFilePermission extends Plugin {
    private static final String ANDROID_PERMISSION_NAME = "android.permission.WRITE_EXTERNAL_STORAGE";
    private static final int ANDROID_VERSION_R = 30;
    private static final int ANDROID_VERSION_TIRAMISU = 33;
    public static final int FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS = 9527;
    private static final String PERMISSION_DENIED_ERROR = "Unable to do this operation, user denied permission request";
    private boolean useManagerExternalStorage = false;

    @Override // com.getcapacitor.Plugin
    public void load() {
        super.load();
        determineExternalStorageManagerUsage();
    }

    private void determineExternalStorageManagerUsage() {
        if (AndroidVersionUtils.isBetween(30, 33, true)) {
            this.useManagerExternalStorage = hasDefinedPermission("android.permission.MANAGE_EXTERNAL_STORAGE");
        }
    }

    private boolean checkPermission() {
        if (AndroidVersionUtils.isGreaterThanOrEqualTo(33)) {
            return true;
        }
        if (this.useManagerExternalStorage) {
            return Environment.isExternalStorageManager();
        }
        return hasPermission("android.permission.WRITE_EXTERNAL_STORAGE");
    }

    @PluginMethod
    public void check(PluginCall pluginCall) {
        if (checkPermission()) {
            onGranted(pluginCall);
        } else {
            onDenied(pluginCall);
        }
    }

    @PluginMethod
    public void request(PluginCall pluginCall) {
        if (checkPermission()) {
            onGranted(pluginCall);
            return;
        }
        saveCall(pluginCall);
        if (this.useManagerExternalStorage) {
            pluginRequestPermissions(new String[]{"android.permission.WRITE_EXTERNAL_STORAGE", "android.permission.MANAGE_EXTERNAL_STORAGE"}, FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS);
        } else {
            pluginRequestPermission("android.permission.WRITE_EXTERNAL_STORAGE", FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS);
        }
    }

    @PluginMethod
    public void requestPostNotificationPermission(PluginCall pluginCall) {
        if (AndroidVersionUtils.isGreaterThanOrEqualTo(33)) {
            saveCall(pluginCall);
            pluginRequestPermission("android.permission.POST_NOTIFICATIONS", FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS);
        } else {
            onDenied(pluginCall);
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        super.handleRequestPermissionsResult(i, strArr, iArr);
        Logger.debug(getLogTag(), "handling request perms result");
        if (getSavedCall() == null) {
            Logger.debug(getLogTag(), "No stored plugin call for permissions request result");
            return;
        }
        PluginCall savedCall = getSavedCall();
        for (int i2 = 0; i2 < iArr.length; i2++) {
            int i3 = iArr[i2];
            String str = strArr[i2];
            if (i3 == -1) {
                Logger.debug(getLogTag(), "User denied permission: " + str);
                savedCall.reject(PERMISSION_DENIED_ERROR);
                freeSavedCall();
                if (this.useManagerExternalStorage && str.equals("android.permission.MANAGE_EXTERNAL_STORAGE")) {
                    try {
                        getContext().startActivity(new Intent("android.settings.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION", Uri.parse("package:" + getContext().getPackageName())));
                        return;
                    } catch (Exception unused) {
                        Intent intent = new Intent();
                        intent.setAction("android.settings.MANAGE_ALL_FILES_ACCESS_PERMISSION");
                        getContext().startActivity(intent);
                        return;
                    }
                }
                return;
            }
        }
        if (i == 9527) {
            onGranted(savedCall);
        }
        freeSavedCall();
    }

    private void onGranted(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("result", true);
        pluginCall.resolve(jSObject);
    }

    private void onDenied(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("result", false);
        pluginCall.resolve(jSObject);
    }
}

