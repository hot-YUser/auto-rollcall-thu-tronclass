package com.getcapacitor.plugin;

import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.Dialogs;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.ui.ModalsBottomSheetDialogFragment;
import com.onesignal.OneSignalDbContract;
import org.apache.cordova.globalization.Globalization;
@NativePlugin
public class Modals extends Plugin {
    @PluginMethod
    public void alert(final PluginCall pluginCall) {
        AppCompatActivity activity = getActivity();
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE);
        String string2 = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE);
        String string3 = pluginCall.getString("buttonTitle", "OK");
        if (string == null || string2 == null) {
            pluginCall.error("Please provide a title or message for the alert");
        } else if (activity.isFinishing()) {
            pluginCall.error("App is finishing");
        } else {
            Dialogs.alert(activity, string2, string, string3, new Dialogs.OnResultListener() { // from class: com.getcapacitor.plugin.Modals.1
                @Override // com.getcapacitor.Dialogs.OnResultListener
                public void onResult(boolean z, boolean z2, String str) {
                    pluginCall.success();
                }
            });
        }
    }

    @PluginMethod
    public void confirm(final PluginCall pluginCall) {
        AppCompatActivity activity = getActivity();
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE);
        String string2 = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE);
        String string3 = pluginCall.getString("okButtonTitle", "OK");
        String string4 = pluginCall.getString("cancelButtonTitle", "Cancel");
        if (string == null || string2 == null) {
            pluginCall.error("Please provide a title or message for the alert");
        } else if (activity.isFinishing()) {
            pluginCall.error("App is finishing");
        } else {
            Dialogs.confirm(activity, string2, string, string3, string4, new Dialogs.OnResultListener() { // from class: com.getcapacitor.plugin.Modals.2
                @Override // com.getcapacitor.Dialogs.OnResultListener
                public void onResult(boolean z, boolean z2, String str) {
                    JSObject jSObject = new JSObject();
                    jSObject.put("value", z);
                    pluginCall.success(jSObject);
                }
            });
        }
    }

    @PluginMethod
    public void prompt(final PluginCall pluginCall) {
        AppCompatActivity activity = getActivity();
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE);
        String string2 = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE);
        String string3 = pluginCall.getString("okButtonTitle", "OK");
        String string4 = pluginCall.getString("cancelButtonTitle", "Cancel");
        String string5 = pluginCall.getString("inputPlaceholder", "");
        String string6 = pluginCall.getString("inputText", "");
        if (string == null || string2 == null) {
            pluginCall.error("Please provide a title or message for the alert");
        } else if (activity.isFinishing()) {
            pluginCall.error("App is finishing");
        } else {
            Dialogs.prompt(activity, string2, string, string3, string4, string5, string6, new Dialogs.OnResultListener() { // from class: com.getcapacitor.plugin.Modals.3
                @Override // com.getcapacitor.Dialogs.OnResultListener
                public void onResult(boolean z, boolean z2, String str) {
                    JSObject jSObject = new JSObject();
                    jSObject.put("cancelled", z2);
                    if (str == null) {
                        str = "";
                    }
                    jSObject.put("value", str);
                    pluginCall.success(jSObject);
                }
            });
        }
    }

    @PluginMethod
    public void showActions(final PluginCall pluginCall) {
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE);
        pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "");
        JSArray array = pluginCall.getArray(Globalization.OPTIONS);
        if (string == null) {
            pluginCall.error("Must supply a title");
            return;
        }
        if (array == null) {
            pluginCall.error("Must supply options");
            return;
        }
        if (getActivity().isFinishing()) {
            pluginCall.error("App is finishing");
            return;
        }
        final ModalsBottomSheetDialogFragment modalsBottomSheetDialogFragment = new ModalsBottomSheetDialogFragment();
        modalsBottomSheetDialogFragment.setTitle(string);
        modalsBottomSheetDialogFragment.setOptions(array);
        modalsBottomSheetDialogFragment.setCancelable(false);
        modalsBottomSheetDialogFragment.setOnSelectedListener(new ModalsBottomSheetDialogFragment.OnSelectedListener() { // from class: com.getcapacitor.plugin.Modals.4
            @Override // com.getcapacitor.ui.ModalsBottomSheetDialogFragment.OnSelectedListener
            public void onSelected(int i) {
                JSObject jSObject = new JSObject();
                jSObject.put("index", i);
                pluginCall.success(jSObject);
                modalsBottomSheetDialogFragment.dismiss();
            }
        });
        modalsBottomSheetDialogFragment.show(getActivity().getSupportFragmentManager(), "capacitorModalsActionSheet");
    }
}

