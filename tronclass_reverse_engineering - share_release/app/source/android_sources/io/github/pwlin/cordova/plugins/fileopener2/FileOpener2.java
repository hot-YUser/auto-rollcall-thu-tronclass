package io.github.pwlin.cordova.plugins.fileopener2;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import androidx.core.app.NotificationCompat;
import com.onesignal.OneSignalDbContract;
import java.io.File;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class FileOpener2 extends CordovaPlugin {
    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equals("open")) {
            String string = jSONArray.getString(0);
            String string2 = jSONArray.getString(1);
            boolean zValueOf = true;
            if (jSONArray.length() > 2) {
                zValueOf = Boolean.valueOf(jSONArray.getBoolean(2));
            }
            _open(string, string2, zValueOf, callbackContext);
        } else if (str.equals("uninstall")) {
            _uninstall(jSONArray.getString(0), callbackContext);
        } else if (str.equals("appIsInstalled")) {
            JSONObject jSONObject = new JSONObject();
            if (_appIsInstalled(jSONArray.getString(0))) {
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.OK.ordinal());
                jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Installed");
            } else {
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
                jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Not installed");
            }
            callbackContext.success(jSONObject);
        } else {
            JSONObject jSONObject2 = new JSONObject();
            jSONObject2.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.INVALID_ACTION.ordinal());
            jSONObject2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Invalid action");
            callbackContext.error(jSONObject2);
        }
        return true;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:8:0x002f A[Catch: ActivityNotFoundException -> 0x00d1, TryCatch #1 {ActivityNotFoundException -> 0x00d1, blocks: (B:6:0x0023, B:9:0x0033, B:12:0x003d, B:14:0x00ae, B:16:0x00b4, B:18:0x00cd, B:17:0x00be, B:13:0x0077, B:8:0x002f), top: B:27:0x0023 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void _open(String str, String str2, Boolean bool, CallbackContext callbackContext) throws JSONException {
        Intent intent;
        try {
            str = this.webView.getResourceApi().remapUri(Uri.parse(str)).getPath();
        } catch (Exception unused) {
        }
        File file = new File(str);
        if (file.exists()) {
            if (str2 != null) {
                try {
                    if (str2.trim().equals("")) {
                        str2 = _getMimeType(str);
                    }
                } catch (ActivityNotFoundException e) {
                    JSONObject jSONObject = new JSONObject();
                    jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
                    jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Activity not found: " + e.getMessage());
                    callbackContext.error(jSONObject);
                    return;
                }
            }
            if (str2.equals("application/vnd.android.package-archive")) {
                intent = new Intent("android.intent.action.INSTALL_PACKAGE");
                intent.setDataAndType(FileProvider.getUriForFile(this.f7cordova.getActivity().getApplicationContext(), this.f7cordova.getActivity().getPackageName() + ".provider", file), str2);
                intent.setFlags(268435457);
            } else {
                intent = new Intent("android.intent.action.VIEW");
                intent.setDataAndType(FileProvider.getUriForFile(this.f7cordova.getActivity().getApplicationContext(), this.f7cordova.getActivity().getPackageName() + ".provider", file), str2);
                intent.setFlags(3);
            }
            if (bool.booleanValue()) {
                this.f7cordova.getActivity().startActivity(intent);
            } else {
                this.f7cordova.getActivity().startActivity(Intent.createChooser(intent, "Open File in..."));
            }
            callbackContext.success();
            return;
        }
        JSONObject jSONObject2 = new JSONObject();
        jSONObject2.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
        jSONObject2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "File not found");
        callbackContext.error(jSONObject2);
    }

    private String _getMimeType(String str) {
        String mimeTypeFromExtension;
        int iLastIndexOf = str.lastIndexOf(46);
        return (iLastIndexOf <= 0 || (mimeTypeFromExtension = MimeTypeMap.getSingleton().getMimeTypeFromExtension(str.substring(iLastIndexOf + 1))) == null) ? "*/*" : mimeTypeFromExtension;
    }

    private void _uninstall(String str, CallbackContext callbackContext) throws JSONException {
        if (_appIsInstalled(str)) {
            Intent intent = new Intent("android.intent.action.UNINSTALL_PACKAGE");
            intent.setData(Uri.parse("package:" + str));
            this.f7cordova.getActivity().startActivity(intent);
            callbackContext.success();
            return;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
        jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "This package is not installed");
        callbackContext.error(jSONObject);
    }

    private boolean _appIsInstalled(String str) {
        try {
            this.f7cordova.getActivity().getPackageManager().getPackageInfo(str, 1);
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return false;
        }
    }
}

