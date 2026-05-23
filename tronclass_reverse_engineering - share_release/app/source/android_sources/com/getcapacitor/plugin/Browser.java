package com.getcapacitor.plugin;

import android.content.ComponentName;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import androidx.browser.customtabs.CustomTabsCallback;
import androidx.browser.customtabs.CustomTabsClient;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.browser.customtabs.CustomTabsServiceConnection;
import androidx.browser.customtabs.CustomTabsSession;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.Iterator;
import org.json.JSONException;
@NativePlugin(requestCodes = {9001})
public class Browser extends Plugin {
    public static final String CUSTOM_TAB_PACKAGE_NAME = "com.android.chrome";
    private CustomTabsSession currentSession;
    private CustomTabsClient customTabsClient;
    private boolean fireFinished = false;
    CustomTabsServiceConnection connection = new CustomTabsServiceConnection() { // from class: com.getcapacitor.plugin.Browser.1
        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
        }

        @Override // androidx.browser.customtabs.CustomTabsServiceConnection
        public void onCustomTabsServiceConnected(ComponentName componentName, CustomTabsClient customTabsClient) {
            Browser.this.customTabsClient = customTabsClient;
            customTabsClient.warmup(0L);
        }
    };

    @Override // com.getcapacitor.Plugin
    public void load() {
    }

    @PluginMethod
    public void open(PluginCall pluginCall) {
        String string = pluginCall.getString("url");
        String string2 = pluginCall.getString("toolbarColor");
        if (string == null) {
            pluginCall.error("Must provide a URL to open");
            return;
        }
        if (string.isEmpty()) {
            pluginCall.error("URL must not be empty");
            return;
        }
        CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder(getCustomTabsSession());
        builder.addDefaultShareMenuItem();
        if (string2 != null) {
            try {
                builder.setToolbarColor(Color.parseColor(string2));
            } catch (IllegalArgumentException unused) {
                Logger.error(getLogTag(), "Invalid color provided for toolbarColor. Using default", null);
            }
        }
        CustomTabsIntent customTabsIntentBuild = builder.build();
        customTabsIntentBuild.intent.putExtra("android.intent.extra.REFERRER", Uri.parse("2//" + getContext().getPackageName()));
        try {
            customTabsIntentBuild.launchUrl(getContext(), Uri.parse(string));
            pluginCall.success();
        } catch (Exception e) {
            pluginCall.error(e.getLocalizedMessage());
        }
    }

    @PluginMethod
    public void close(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }

    @PluginMethod
    public void prefetch(PluginCall pluginCall) {
        JSArray array = pluginCall.getArray("urls");
        if (array == null || array.length() == 0) {
            pluginCall.error("Must provide an array of URLs to prefetch");
            return;
        }
        CustomTabsSession customTabsSession = getCustomTabsSession();
        if (customTabsSession == null) {
            pluginCall.error("Browser session isn't ready yet");
            return;
        }
        try {
            Iterator it = array.toList().iterator();
            while (it.hasNext()) {
                customTabsSession.mayLaunchUrl(Uri.parse((String) it.next()), null, null);
            }
        } catch (JSONException e) {
            pluginCall.error("Unable to process provided urls list. Ensure each item is a string and valid URL", e);
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnResume() {
        if (this.fireFinished) {
            notifyListeners("browserFinished", new JSObject());
        }
        if (CustomTabsClient.bindCustomTabsService(getContext(), CUSTOM_TAB_PACKAGE_NAME, this.connection)) {
            return;
        }
        Logger.error(getLogTag(), "Error binding to custom tabs service", null);
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnPause() {
        getContext().unbindService(this.connection);
    }

    public CustomTabsSession getCustomTabsSession() {
        CustomTabsClient customTabsClient = this.customTabsClient;
        if (customTabsClient == null) {
            return null;
        }
        if (this.currentSession == null) {
            this.currentSession = customTabsClient.newSession(new CustomTabsCallback() { // from class: com.getcapacitor.plugin.Browser.2
                @Override // androidx.browser.customtabs.CustomTabsCallback
                public void onNavigationEvent(int i, Bundle bundle) {
                    if (i == 2) {
                        Browser.this.notifyListeners("browserPageLoaded", new JSObject());
                    } else if (i == 5) {
                        Browser.this.fireFinished = false;
                    } else {
                        if (i != 6) {
                            return;
                        }
                        Browser.this.fireFinished = true;
                    }
                }
            });
        }
        return this.currentSession;
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnActivityResult(int i, int i2, Intent intent) {
        super.handleOnActivityResult(i, i2, intent);
    }
}

