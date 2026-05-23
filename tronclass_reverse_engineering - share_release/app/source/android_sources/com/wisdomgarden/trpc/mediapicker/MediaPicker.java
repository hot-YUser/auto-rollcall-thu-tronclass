package com.wisdomgarden.trpc.mediapicker;

import android.content.Intent;
import android.os.Build;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.ArrayList;
import java.util.Collection;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
@NativePlugin(requestCodes = {MediaPicker.REQUEST_MEDIA_PICKER})
public class MediaPicker extends Plugin {
    private static final int ANDROID_VERSION_TIRAMISU = 33;
    private static final String LOG_TAG = "MediaPicker";
    protected static final int REQUEST_MEDIA_PICKER = 7788;

    @PluginMethod
    public void checkAvailability(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("isAvailable", Build.VERSION.SDK_INT >= 33);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void pickMedias(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString(Globalization.TYPE);
        int iIntValue = pluginCall.getInt("maximum", 1).intValue();
        Intent intent = new Intent(getActivity(), (Class<?>) MediaPickerActivity.class);
        intent.putExtra("maximum", iIntValue);
        intent.putExtra(Globalization.TYPE, string);
        startActivityForResult(pluginCall, intent, REQUEST_MEDIA_PICKER);
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnActivityResult(int i, int i2, Intent intent) {
        super.handleOnActivityResult(i, i2, intent);
        PluginCall savedCall = getSavedCall();
        if (savedCall != null && i == REQUEST_MEDIA_PICKER) {
            JSObject jSObject = new JSObject();
            if (i2 == 10) {
                String stringExtra = intent.getStringExtra("uri");
                if (stringExtra != null) {
                    JSArray jSArray = new JSArray();
                    jSArray.put(stringExtra);
                    jSObject.put("uris", (Object) jSArray);
                }
                savedCall.resolve(jSObject);
                return;
            }
            if (i2 == 20) {
                ArrayList<String> stringArrayListExtra = intent.getStringArrayListExtra("uris");
                if (stringArrayListExtra != null) {
                    jSObject.put("uris", (Object) new JSONArray((Collection) stringArrayListExtra));
                }
                savedCall.resolve(jSObject);
            }
        }
    }
}

