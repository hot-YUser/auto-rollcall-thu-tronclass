package com.bkon.capacitor.screenorientation;

import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class ScreenOrientation extends Plugin {
    @PluginMethod
    public void getScreenOrientation(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("orientation", fetchScreenOrientation());
        pluginCall.success(jSObject);
    }

    private String fetchScreenOrientation() {
        int rotation = getBridge().getActivity().getWindowManager().getDefaultDisplay().getRotation();
        if (rotation == 0) {
            return "PORTRAIT_PRIMARY";
        }
        if (rotation == 1) {
            return "LANDSCAPE_PRIMARY";
        }
        if (rotation == 2) {
            return "PORTRAIT_SECONDARY";
        }
        if (rotation == 3) {
            return "LANDSCAPE_SECONDARY";
        }
        return "UNSPECIFIED";
    }

    @PluginMethod
    public void lockScreenOrientation(PluginCall pluginCall) {
        String string = pluginCall.getString("orientation");
        string.hashCode();
        switch (string) {
            case "LANDSCAPE_PRIMARY":
                getBridge().getActivity().setRequestedOrientation(0);
                break;
            case "LANDSCAPE_SECONDARY":
                getBridge().getActivity().setRequestedOrientation(8);
                break;
            case "LANDSCAPE":
                getBridge().getActivity().setRequestedOrientation(6);
                break;
            case "PORTRAIT_PRIMARY":
                getBridge().getActivity().setRequestedOrientation(1);
                break;
            case "PORTRAIT_SECONDARY":
                getBridge().getActivity().setRequestedOrientation(9);
                break;
            case "PORTRAIT":
                getBridge().getActivity().setRequestedOrientation(7);
                break;
            case "CURRENT":
                getBridge().getActivity().setRequestedOrientation(14);
                break;
        }
    }

    @PluginMethod
    public void unlockScreenOrientation(PluginCall pluginCall) {
        getBridge().getActivity().setRequestedOrientation(-1);
    }

    @PluginMethod
    public void rotateTo(PluginCall pluginCall) {
        Log.i("capacitor", "rotateTo is not supported on Android");
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnStart() {
        JSObject jSObject = new JSObject();
        jSObject.put("orientation", fetchScreenOrientation());
        notifyListeners("orientation_changed", jSObject, true);
    }
}

