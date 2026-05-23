package com.getcapacitor.plugin;

import android.content.Intent;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import androidx.core.content.FileProvider;
import com.getcapacitor.Bridge;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.onesignal.OneSignalDbContract;
import java.io.File;
@NativePlugin
public class Share extends Plugin {
    @PluginMethod
    public void share(PluginCall pluginCall) {
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, "");
        String string2 = pluginCall.getString("text");
        String string3 = pluginCall.getString("url");
        String string4 = pluginCall.getString("dialogTitle", "Share");
        if (string2 == null && string3 == null) {
            pluginCall.error("Must provide a URL or Message");
            return;
        }
        if (string3 != null && !isFileUrl(string3) && !isHttpUrl(string3)) {
            pluginCall.error("Unsupported url");
            return;
        }
        Intent intent = new Intent("android.intent.action.SEND");
        if (string2 != null) {
            if (string3 != null && isHttpUrl(string3)) {
                string2 = string2 + " " + string3;
            }
            intent.putExtra("android.intent.extra.TEXT", string2);
            intent.setTypeAndNormalize("text/plain");
        }
        if (string3 != null && isHttpUrl(string3) && string2 == null) {
            intent.putExtra("android.intent.extra.TEXT", string3);
            intent.setTypeAndNormalize("text/plain");
        } else if (string3 != null && isFileUrl(string3)) {
            intent.setType(getMimeType(string3));
            intent.putExtra("android.intent.extra.STREAM", FileProvider.getUriForFile(getActivity(), getContext().getPackageName() + ".fileprovider", new File(Uri.parse(string3).getPath())));
        }
        if (string != null) {
            intent.putExtra("android.intent.extra.SUBJECT", string);
        }
        Intent intentCreateChooser = Intent.createChooser(intent, string4);
        intentCreateChooser.addCategory("android.intent.category.DEFAULT");
        getActivity().startActivity(intentCreateChooser);
        pluginCall.success();
    }

    private String getMimeType(String str) {
        String fileExtensionFromUrl = MimeTypeMap.getFileExtensionFromUrl(str);
        if (fileExtensionFromUrl != null) {
            return MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtensionFromUrl);
        }
        return null;
    }

    private boolean isFileUrl(String str) {
        return str.startsWith("file:");
    }

    private boolean isHttpUrl(String str) {
        return str.startsWith(Bridge.CAPACITOR_HTTP_SCHEME);
    }
}

