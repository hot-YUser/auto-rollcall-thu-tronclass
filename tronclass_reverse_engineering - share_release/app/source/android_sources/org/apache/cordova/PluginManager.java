package org.apache.cordova;

import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.os.Debug;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
public class PluginManager {
    private static final int SLOW_EXEC_WARNING_THRESHOLD;
    private static String TAG = "PluginManager";
    private final CordovaWebView app;
    private final CordovaInterface ctx;
    private boolean isInitialized;
    private CordovaPlugin permissionRequester;
    private final LinkedHashMap<String, CordovaPlugin> pluginMap = new LinkedHashMap<>();
    private final LinkedHashMap<String, PluginEntry> entryMap = new LinkedHashMap<>();

    static {
        SLOW_EXEC_WARNING_THRESHOLD = Debug.isDebuggerConnected() ? 60 : 16;
    }

    public PluginManager(CordovaWebView cordovaWebView, CordovaInterface cordovaInterface, Collection<PluginEntry> collection) {
        this.ctx = cordovaInterface;
        this.app = cordovaWebView;
        setPluginEntries(collection);
    }

    public Collection<PluginEntry> getPluginEntries() {
        return this.entryMap.values();
    }

    public void setPluginEntries(Collection<PluginEntry> collection) {
        if (this.isInitialized) {
            onPause(false);
            onDestroy();
            this.pluginMap.clear();
            this.entryMap.clear();
        }
        Iterator<PluginEntry> it = collection.iterator();
        while (it.hasNext()) {
            addService(it.next());
        }
        if (this.isInitialized) {
            startupPlugins();
        }
    }

    public void init() {
        LOG.d(TAG, "init()");
        this.isInitialized = true;
        onPause(false);
        onDestroy();
        this.pluginMap.clear();
        startupPlugins();
    }

    private void startupPlugins() {
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            if (pluginEntry.onload) {
                getPlugin(pluginEntry.service);
            } else {
                this.pluginMap.put(pluginEntry.service, null);
            }
        }
    }

    public void exec(String str, String str2, String str3, String str4) {
        CordovaPlugin plugin = getPlugin(str);
        if (plugin == null) {
            LOG.d(TAG, "exec() call to unknown plugin: " + str);
            this.app.sendPluginResult(new PluginResult(PluginResult.Status.CLASS_NOT_FOUND_EXCEPTION), str3);
            return;
        }
        CallbackContext callbackContext = new CallbackContext(str3, this.app);
        try {
            long jCurrentTimeMillis = System.currentTimeMillis();
            boolean zExecute = plugin.execute(str2, str4, callbackContext);
            long jCurrentTimeMillis2 = System.currentTimeMillis() - jCurrentTimeMillis;
            if (jCurrentTimeMillis2 > SLOW_EXEC_WARNING_THRESHOLD) {
                LOG.w(TAG, "THREAD WARNING: exec() call to " + str + "." + str2 + " blocked the main thread for " + jCurrentTimeMillis2 + "ms. Plugin should use CordovaInterface.getThreadPool().");
            }
            if (zExecute) {
                return;
            }
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
        } catch (JSONException unused) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        } catch (Exception e) {
            LOG.e(TAG, "Uncaught exception from plugin", e);
            callbackContext.error(e.getMessage());
        }
    }

    public CordovaPlugin getPlugin(String str) {
        CordovaPlugin cordovaPluginInstantiatePlugin = this.pluginMap.get(str);
        if (cordovaPluginInstantiatePlugin == null) {
            PluginEntry pluginEntry = this.entryMap.get(str);
            if (pluginEntry == null) {
                return null;
            }
            if (pluginEntry.plugin != null) {
                cordovaPluginInstantiatePlugin = pluginEntry.plugin;
            } else {
                cordovaPluginInstantiatePlugin = instantiatePlugin(pluginEntry.pluginClass);
            }
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            cordovaPluginInstantiatePlugin.privateInitialize(str, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(str, cordovaPluginInstantiatePlugin);
        }
        return cordovaPluginInstantiatePlugin;
    }

    public void addService(String str, String str2) {
        addService(new PluginEntry(str, str2, false));
    }

    public void addService(PluginEntry pluginEntry) {
        this.entryMap.put(pluginEntry.service, pluginEntry);
        if (pluginEntry.plugin != null) {
            CordovaPlugin cordovaPlugin = pluginEntry.plugin;
            String str = pluginEntry.service;
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            cordovaPlugin.privateInitialize(str, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(pluginEntry.service, pluginEntry.plugin);
        }
    }

    public void onPause(boolean z) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onPause(z);
            }
        }
    }

    public boolean onReceivedHttpAuthRequest(CordovaWebView cordovaWebView, ICordovaHttpAuthHandler iCordovaHttpAuthHandler, String str, String str2) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && cordovaPlugin.onReceivedHttpAuthRequest(this.app, iCordovaHttpAuthHandler, str, str2)) {
                return true;
            }
        }
        return false;
    }

    public boolean onReceivedClientCertRequest(CordovaWebView cordovaWebView, ICordovaClientCertRequest iCordovaClientCertRequest) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && cordovaPlugin.onReceivedClientCertRequest(this.app, iCordovaClientCertRequest)) {
                return true;
            }
        }
        return false;
    }

    public void onResume(boolean z) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onResume(z);
            }
        }
    }

    public void onStart() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onStart();
            }
        }
    }

    public void onStop() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onStop();
            }
        }
    }

    public void onDestroy() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onDestroy();
            }
        }
    }

    public Object postMessage(String str, Object obj) {
        Object objOnMessage;
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (objOnMessage = cordovaPlugin.onMessage(str, obj)) != null) {
                return objOnMessage;
            }
        }
        return this.ctx.onMessage(str, obj);
    }

    public void onNewIntent(Intent intent) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onNewIntent(intent);
            }
        }
    }

    public boolean shouldAllowRequest(String str) {
        Boolean boolShouldAllowRequest;
        Iterator<PluginEntry> it = this.entryMap.values().iterator();
        while (it.hasNext()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(it.next().service);
            if (cordovaPlugin != null && (boolShouldAllowRequest = cordovaPlugin.shouldAllowRequest(str)) != null) {
                return boolShouldAllowRequest.booleanValue();
            }
        }
        if (str.startsWith("blob:") || str.startsWith("data:") || str.startsWith("about:blank") || str.startsWith("https://ssl.gstatic.com/accessibility/javascript/android/")) {
            return true;
        }
        if (str.startsWith("file://")) {
            return !str.contains("/app_webview/");
        }
        return false;
    }

    public boolean shouldAllowNavigation(String str) {
        Boolean boolShouldAllowNavigation;
        Iterator<PluginEntry> it = this.entryMap.values().iterator();
        while (it.hasNext()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(it.next().service);
            if (cordovaPlugin != null && (boolShouldAllowNavigation = cordovaPlugin.shouldAllowNavigation(str)) != null) {
                return boolShouldAllowNavigation.booleanValue();
            }
        }
        return str.startsWith("file://") || str.startsWith("about:blank");
    }

    public boolean shouldAllowBridgeAccess(String str) {
        Boolean boolShouldAllowBridgeAccess;
        Iterator<PluginEntry> it = this.entryMap.values().iterator();
        while (it.hasNext()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(it.next().service);
            if (cordovaPlugin != null && (boolShouldAllowBridgeAccess = cordovaPlugin.shouldAllowBridgeAccess(str)) != null) {
                return boolShouldAllowBridgeAccess.booleanValue();
            }
        }
        return str.startsWith("file://");
    }

    public Boolean shouldOpenExternalUrl(String str) {
        Boolean boolShouldOpenExternalUrl;
        Iterator<PluginEntry> it = this.entryMap.values().iterator();
        while (it.hasNext()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(it.next().service);
            if (cordovaPlugin != null && (boolShouldOpenExternalUrl = cordovaPlugin.shouldOpenExternalUrl(str)) != null) {
                return boolShouldOpenExternalUrl;
            }
        }
        return false;
    }

    public boolean onOverrideUrlLoading(String str) {
        Iterator<PluginEntry> it = this.entryMap.values().iterator();
        while (it.hasNext()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(it.next().service);
            if (cordovaPlugin != null && cordovaPlugin.onOverrideUrlLoading(str)) {
                return true;
            }
        }
        return false;
    }

    public void onReset() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onReset();
            }
        }
    }

    Uri remapUri(Uri uri) {
        Uri uriRemapUri;
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (uriRemapUri = cordovaPlugin.remapUri(uri)) != null) {
                return uriRemapUri;
            }
        }
        return null;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:9:0x0012  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private CordovaPlugin instantiatePlugin(String str) {
        Class<?> cls;
        if (str != null) {
            try {
                cls = !"".equals(str) ? Class.forName(str) : null;
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("Error adding plugin " + str + ".");
                return null;
            }
        }
        if ((cls != null) && CordovaPlugin.class.isAssignableFrom(cls)) {
            return (CordovaPlugin) cls.newInstance();
        }
        return null;
    }

    public void onConfigurationChanged(Configuration configuration) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onConfigurationChanged(configuration);
            }
        }
    }

    public Bundle onSaveInstanceState() {
        Bundle bundleOnSaveInstanceState;
        Bundle bundle = new Bundle();
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (bundleOnSaveInstanceState = cordovaPlugin.onSaveInstanceState()) != null) {
                bundle.putBundle(cordovaPlugin.getServiceName(), bundleOnSaveInstanceState);
            }
        }
        return bundle;
    }
}

