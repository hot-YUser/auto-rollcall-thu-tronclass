package com.getcapacitor.plugin;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.Splash;
@NativePlugin
public class SplashScreen extends Plugin {
    @PluginMethod
    public void show(final PluginCall pluginCall) {
        Splash.show(getActivity(), pluginCall.getInt("showDuration", 3000).intValue(), pluginCall.getInt("fadeInDuration", 200).intValue(), pluginCall.getInt("fadeOutDuration", 200).intValue(), pluginCall.getBoolean("autoHide", true).booleanValue(), new Splash.SplashListener() { // from class: com.getcapacitor.plugin.SplashScreen.1
            @Override // com.getcapacitor.Splash.SplashListener
            public void completed() {
                pluginCall.success();
            }

            @Override // com.getcapacitor.Splash.SplashListener
            public void error() {
                pluginCall.error("An error occurred while showing splash");
            }
        }, this.bridge.getConfig());
    }

    @PluginMethod
    public void hide(PluginCall pluginCall) {
        Splash.hide(getContext(), pluginCall.getInt("fadeOutDuration", 200).intValue());
        pluginCall.success();
    }
}

