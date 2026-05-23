package com.bkon.capacitor.DarkMode;

import android.content.Context;
import android.util.Log;
import com.bkon.capacitor.DarkMode.capacitordarkmode.R;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import org.json.JSONException;
@NativePlugin
public class DarkMode extends Plugin {
    private static final String EVENT_DARK_MODE_CHANGE = "darkModeStateChanged";
    private boolean isDarkModeOn = false;

    @Override // com.getcapacitor.Plugin
    protected void handleOnRestart() {
        super.handleOnRestart();
        Log.i("capacitor", "restarted");
        notifyWeb();
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnResume() {
        super.handleOnResume();
        Log.i("capacitor", "resumed");
        notifyWeb();
    }

    public void notifyWeb() {
        JSObject jSObjectCheckMode = checkMode();
        try {
            if (jSObjectCheckMode.getBoolean("isDarkModeOn")) {
                getBridge().getActivity().getWindow().setNavigationBarColor(getBridge().getActivity().getResources().getColor(R.color.black));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        Log.i("capacitor", jSObjectCheckMode.getString("isDarkModeOn"));
        notifyListeners(EVENT_DARK_MODE_CHANGE, jSObjectCheckMode, true);
    }

    @PluginMethod
    public void isDarkModeOn(PluginCall pluginCall) {
        pluginCall.success(checkMode());
    }

    public JSObject checkMode() {
        Context context = getContext();
        JSObject jSObject = new JSObject();
        int i = context.getResources().getConfiguration().uiMode & 48;
        if (i == 0) {
            this.isDarkModeOn = false;
            JSObject jSObject2 = new JSObject();
            jSObject2.put("isDarkModeOn", this.isDarkModeOn);
            return jSObject2;
        }
        if (i == 16) {
            this.isDarkModeOn = false;
            JSObject jSObject3 = new JSObject();
            jSObject3.put("isDarkModeOn", this.isDarkModeOn);
            return jSObject3;
        }
        if (i != 32) {
            return jSObject;
        }
        this.isDarkModeOn = true;
        jSObject.put("isDarkModeOn", true);
        return jSObject;
    }
}

