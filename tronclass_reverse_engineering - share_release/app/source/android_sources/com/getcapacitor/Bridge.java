package com.getcapacitor;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.plugin.Accessibility;
import com.getcapacitor.plugin.App;
import com.getcapacitor.plugin.Browser;
import com.getcapacitor.plugin.Camera;
import com.getcapacitor.plugin.Clipboard;
import com.getcapacitor.plugin.Device;
import com.getcapacitor.plugin.Filesystem;
import com.getcapacitor.plugin.Geolocation;
import com.getcapacitor.plugin.Haptics;
import com.getcapacitor.plugin.Keyboard;
import com.getcapacitor.plugin.LocalNotifications;
import com.getcapacitor.plugin.Modals;
import com.getcapacitor.plugin.Network;
import com.getcapacitor.plugin.Permissions;
import com.getcapacitor.plugin.Photos;
import com.getcapacitor.plugin.PushNotifications;
import com.getcapacitor.plugin.Share;
import com.getcapacitor.plugin.SplashScreen;
import com.getcapacitor.plugin.StatusBar;
import com.getcapacitor.plugin.Storage;
import com.getcapacitor.plugin.Toast;
import com.getcapacitor.plugin.background.BackgroundTask;
import com.getcapacitor.util.HostMask;
import java.io.File;
import java.net.SocketTimeoutException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.cordova.CordovaInterfaceImpl;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.PluginManager;
import org.json.JSONException;
import org.json.JSONObject;
public class Bridge {
    private static final String BUNDLE_LAST_PLUGIN_CALL_METHOD_NAME_KEY = "capacitorLastActivityPluginMethod";
    private static final String BUNDLE_LAST_PLUGIN_ID_KEY = "capacitorLastActivityPluginId";
    private static final String BUNDLE_PLUGIN_CALL_BUNDLE_KEY = "capacitorLastPluginCallBundle";
    private static final String BUNDLE_PLUGIN_CALL_OPTIONS_SAVED_KEY = "capacitorLastPluginCallOptions";
    public static final String CAPACITOR_CONTENT_START = "/_capacitor_content_";
    public static final String CAPACITOR_FILE_START = "/_capacitor_file_";
    public static final String CAPACITOR_HTTPS_SCHEME = "https";
    public static final String CAPACITOR_HTTP_SCHEME = "http";
    public static final String DEFAULT_WEB_ASSET_DIR = "public";
    private static final String LAST_BINARY_VERSION_CODE = "lastBinaryVersionCode";
    private static final String LAST_BINARY_VERSION_NAME = "lastBinaryVersionName";
    private static final String PREFS_NAME = "CapacitorSettings";
    private HostMask appAllowNavigationMask;
    private String appUrl;
    private String appUrlConfig;
    private CapConfig config;
    private final Activity context;
    public final CordovaInterfaceImpl cordovaInterface;
    private final HandlerThread handlerThread;
    private final List<Class<? extends Plugin>> initialPlugins;
    private Uri intentUri;
    private WebViewLocalServer localServer;
    private String localUrl;
    private final MessageHandler msgHandler;
    private PluginCall pluginCallForLastActivity;
    private Map<String, PluginHandle> plugins;
    private CordovaPreferences preferences;
    private Map<String, PluginCall> savedCalls;
    private Handler taskHandler;
    private final WebView webView;
    private BridgeWebViewClient webViewClient;

    public Bridge(Activity activity, WebView webView, List<Class<? extends Plugin>> list, CordovaInterfaceImpl cordovaInterfaceImpl, PluginManager pluginManager, CordovaPreferences cordovaPreferences, JSONObject jSONObject) throws Throwable {
        HandlerThread handlerThread = new HandlerThread("CapacitorPlugins");
        this.handlerThread = handlerThread;
        this.taskHandler = null;
        this.plugins = new HashMap();
        this.savedCalls = new HashMap();
        this.context = activity;
        this.webView = webView;
        this.webViewClient = new BridgeWebViewClient(this);
        this.initialPlugins = list;
        this.cordovaInterface = cordovaInterfaceImpl;
        this.preferences = cordovaPreferences;
        handlerThread.start();
        this.taskHandler = new Handler(handlerThread.getLooper());
        Config.load(getActivity());
        CapConfig capConfig = new CapConfig(getActivity().getAssets(), jSONObject);
        this.config = capConfig;
        Logger.init(capConfig);
        if (activity instanceof BridgeActivity) {
            Splash.showOnLaunch((BridgeActivity) activity, this.config);
        }
        initWebView();
        this.msgHandler = new MessageHandler(this, webView, pluginManager);
        this.intentUri = activity.getIntent().getData();
        registerAllPlugins();
        loadWebView();
    }

    private void loadWebView() {
        String string;
        this.appUrlConfig = this.config.getString("server.url");
        String[] array = this.config.getArray("server.allowNavigation");
        ArrayList arrayList = new ArrayList();
        if (array != null) {
            arrayList.addAll(Arrays.asList(array));
        }
        this.appAllowNavigationMask = HostMask.Parser.parse(array);
        String string2 = this.config.getString("server.hostname", "localhost");
        arrayList.add(string2);
        String scheme = getScheme();
        String str = scheme + "://" + string2;
        this.localUrl = str;
        if (this.appUrlConfig != null) {
            try {
                arrayList.add(new URL(this.appUrlConfig).getAuthority());
            } catch (Exception unused) {
            }
            String str2 = this.appUrlConfig;
            this.localUrl = str2;
            this.appUrl = str2;
        } else {
            this.appUrl = str;
            if (!scheme.equals(CAPACITOR_HTTP_SCHEME) && !scheme.equals(CAPACITOR_HTTPS_SCHEME)) {
                this.appUrl += "/";
            }
        }
        WebViewLocalServer webViewLocalServer = new WebViewLocalServer(this.context, this, getJSInjector(), arrayList, this.config.getBoolean("server.html5mode", true));
        this.localServer = webViewLocalServer;
        webViewLocalServer.hostAssets(DEFAULT_WEB_ASSET_DIR);
        Logger.debug("Loading app at " + this.appUrl);
        this.webView.setWebChromeClient(new BridgeWebChromeClient(this));
        this.webView.setWebViewClient(this.webViewClient);
        if (!isDeployDisabled() && !isNewBinary() && (string = getContext().getSharedPreferences(com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME, 0).getString(com.getcapacitor.plugin.WebView.CAP_SERVER_PATH, null)) != null && !string.isEmpty() && new File(string).exists()) {
            setServerBasePath(string);
        }
        this.webView.loadUrl(this.appUrl);
    }

    public boolean launchIntent(Uri uri) {
        Boolean boolShouldOverrideLoad;
        Iterator<Map.Entry<String, PluginHandle>> it = this.plugins.entrySet().iterator();
        while (it.hasNext()) {
            Plugin pluginHandle = it.next().getValue().getInstance();
            if (pluginHandle != null && (boolShouldOverrideLoad = pluginHandle.shouldOverrideLoad(uri)) != null) {
                return boolShouldOverrideLoad.booleanValue();
            }
        }
        if (uri.toString().contains(this.appUrl) || this.appAllowNavigationMask.matches(uri.getHost())) {
            return false;
        }
        try {
            getContext().startActivity(new Intent("android.intent.action.VIEW", uri));
            return true;
        } catch (ActivityNotFoundException unused) {
            return true;
        }
    }

    private boolean isNewBinary() {
        String string;
        String str;
        PackageInfo packageInfo;
        SharedPreferences sharedPreferences = getContext().getSharedPreferences(com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME, 0);
        String string2 = sharedPreferences.getString(LAST_BINARY_VERSION_CODE, null);
        String string3 = sharedPreferences.getString(LAST_BINARY_VERSION_NAME, null);
        try {
            packageInfo = getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0);
            string = Integer.toString(packageInfo.versionCode);
        } catch (Exception e) {
            e = e;
            string = "";
        }
        try {
            str = packageInfo.versionName;
        } catch (Exception e2) {
            e = e2;
            Logger.error("Unable to get package info", e);
            str = "";
        }
        if (string.equals(string2) && str.equals(string3)) {
            return false;
        }
        SharedPreferences.Editor editorEdit = sharedPreferences.edit();
        editorEdit.putString(LAST_BINARY_VERSION_CODE, string);
        editorEdit.putString(LAST_BINARY_VERSION_NAME, str);
        editorEdit.putString(com.getcapacitor.plugin.WebView.CAP_SERVER_PATH, "");
        editorEdit.apply();
        return true;
    }

    public boolean isDeployDisabled() {
        return this.preferences.getBoolean("DisableDeploy", false);
    }

    public void handleAppUrlLoadError(Exception exc) {
        if (exc instanceof SocketTimeoutException) {
            Logger.error("Unable to load app. Ensure the server is running at " + this.appUrl + ", or modify the appUrl setting in capacitor.config.json (make sure to npx cap copy after to commit changes).", exc);
        }
    }

    public boolean isDevMode() {
        return (getActivity().getApplicationInfo().flags & 2) != 0;
    }

    public Context getContext() {
        return this.context;
    }

    public Activity getActivity() {
        return this.context;
    }

    public WebView getWebView() {
        return this.webView;
    }

    public Uri getIntentUri() {
        return this.intentUri;
    }

    public String getScheme() {
        return this.config.getString("server.androidScheme", CAPACITOR_HTTP_SCHEME);
    }

    public CapConfig getConfig() {
        return this.config;
    }

    public void reset() {
        this.savedCalls = new HashMap();
    }

    private void initWebView() {
        WebSettings settings = this.webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setGeolocationEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setCacheMode(-1);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        if (this.config.getBoolean("android.allowMixedContent", false)) {
            settings.setMixedContentMode(0);
        }
        CapConfig capConfig = this.config;
        String string = capConfig.getString("android.appendUserAgent", capConfig.getString("appendUserAgent", null));
        if (string != null) {
            settings.setUserAgentString(settings.getUserAgentString() + " " + string);
        }
        CapConfig capConfig2 = this.config;
        String string2 = capConfig2.getString("android.overrideUserAgent", capConfig2.getString("overrideUserAgent", null));
        if (string2 != null) {
            settings.setUserAgentString(string2);
        }
        CapConfig capConfig3 = this.config;
        String string3 = capConfig3.getString("android.backgroundColor", capConfig3.getString("backgroundColor", null));
        if (string3 != null) {
            try {
                this.webView.setBackgroundColor(Color.parseColor(string3));
            } catch (IllegalArgumentException unused) {
                Logger.debug("WebView background color not applied");
            }
        }
        boolean zIsDevMode = isDevMode();
        this.webView.requestFocusFromTouch();
        WebView.setWebContentsDebuggingEnabled(this.config.getBoolean("android.webContentsDebuggingEnabled", zIsDevMode));
    }

    private void registerAllPlugins() {
        registerPlugin(App.class);
        registerPlugin(Accessibility.class);
        registerPlugin(BackgroundTask.class);
        registerPlugin(Browser.class);
        registerPlugin(Camera.class);
        registerPlugin(Clipboard.class);
        registerPlugin(Device.class);
        registerPlugin(LocalNotifications.class);
        registerPlugin(Filesystem.class);
        registerPlugin(Geolocation.class);
        registerPlugin(Haptics.class);
        registerPlugin(Keyboard.class);
        registerPlugin(Modals.class);
        registerPlugin(Network.class);
        registerPlugin(Permissions.class);
        registerPlugin(Photos.class);
        registerPlugin(PushNotifications.class);
        registerPlugin(Share.class);
        registerPlugin(SplashScreen.class);
        registerPlugin(StatusBar.class);
        registerPlugin(Storage.class);
        registerPlugin(Toast.class);
        registerPlugin(com.getcapacitor.plugin.WebView.class);
        Iterator<Class<? extends Plugin>> it = this.initialPlugins.iterator();
        while (it.hasNext()) {
            registerPlugin(it.next());
        }
    }

    public void registerPlugins(Class<? extends Plugin>[] clsArr) {
        for (Class<? extends Plugin> cls : clsArr) {
            registerPlugin(cls);
        }
    }

    public void registerPlugin(Class<? extends Plugin> cls) {
        NativePlugin nativePlugin = (NativePlugin) cls.getAnnotation(NativePlugin.class);
        if (nativePlugin == null) {
            Logger.error("NativePlugin doesn't have the @NativePlugin annotation. Please add it");
            return;
        }
        String simpleName = cls.getSimpleName();
        if (!nativePlugin.name().equals("")) {
            simpleName = nativePlugin.name();
        }
        Logger.debug("Registering plugin: " + simpleName);
        try {
            this.plugins.put(simpleName, new PluginHandle(this, cls));
        } catch (InvalidPluginException unused) {
            Logger.error("NativePlugin " + cls.getName() + " is invalid. Ensure the @NativePlugin annotation exists on the plugin class and the class extends Plugin");
        } catch (PluginLoadException e) {
            Logger.error("NativePlugin " + cls.getName() + " failed to load", e);
        }
    }

    public PluginHandle getPlugin(String str) {
        return this.plugins.get(str);
    }

    public PluginHandle getPluginWithRequestCode(int i) {
        for (PluginHandle pluginHandle : this.plugins.values()) {
            NativePlugin pluginAnnotation = pluginHandle.getPluginAnnotation();
            if (pluginAnnotation != null) {
                for (int i2 : pluginAnnotation.requestCodes()) {
                    if (i2 == i) {
                        return pluginHandle;
                    }
                }
                if (pluginAnnotation.permissionRequestCode() == i) {
                    return pluginHandle;
                }
            }
        }
        return null;
    }

    public void callPluginMethod(String str, final String str2, final PluginCall pluginCall) {
        try {
            final PluginHandle plugin = getPlugin(str);
            if (plugin == null) {
                Logger.error("unable to find plugin : " + str);
                pluginCall.errorCallback("unable to find plugin : " + str);
            } else {
                Logger.verbose("callback: " + pluginCall.getCallbackId() + ", pluginId: " + plugin.getId() + ", methodName: " + str2 + ", methodData: " + pluginCall.getData().toString());
                this.taskHandler.post(new Runnable() { // from class: com.getcapacitor.Bridge.1
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            plugin.invoke(str2, pluginCall);
                            if (pluginCall.isSaved()) {
                                Bridge.this.saveCall(pluginCall);
                            }
                        } catch (InvalidPluginMethodException e) {
                            e = e;
                            Logger.error("Unable to execute plugin method", e);
                        } catch (PluginLoadException e2) {
                            e = e2;
                            Logger.error("Unable to execute plugin method", e);
                        } catch (Exception e3) {
                            Logger.error("Serious error executing plugin", e3);
                            throw new RuntimeException(e3);
                        }
                    }
                });
            }
        } catch (Exception e) {
            Logger.error(Logger.tags("callPluginMethod"), "error : " + e, null);
            pluginCall.errorCallback(e.toString());
        }
    }

    public void eval(final String str, final ValueCallback<String> valueCallback) {
        new Handler(this.context.getMainLooper()).post(new Runnable() { // from class: com.getcapacitor.Bridge.2
            @Override // java.lang.Runnable
            public void run() {
                Bridge.this.webView.evaluateJavascript(str, valueCallback);
            }
        });
    }

    public void logToJs(String str, String str2) {
        eval("window.Capacitor.logJs(\"" + str + "\", \"" + str2 + "\")", null);
    }

    public void logToJs(String str) {
        logToJs(str, "log");
    }

    public void triggerJSEvent(String str, String str2) {
        eval("window.Capacitor.triggerEvent(\"" + str + "\", \"" + str2 + "\")", new ValueCallback<String>() { // from class: com.getcapacitor.Bridge.3
            @Override // android.webkit.ValueCallback
            public void onReceiveValue(String str3) {
            }
        });
    }

    public void triggerJSEvent(String str, String str2, String str3) {
        eval("window.Capacitor.triggerEvent(\"" + str + "\", \"" + str2 + "\", " + str3 + ")", new ValueCallback<String>() { // from class: com.getcapacitor.Bridge.4
            @Override // android.webkit.ValueCallback
            public void onReceiveValue(String str4) {
            }
        });
    }

    public void triggerWindowJSEvent(String str) {
        triggerJSEvent(str, "window");
    }

    public void triggerWindowJSEvent(String str, String str2) {
        triggerJSEvent(str, "window", str2);
    }

    public void triggerDocumentJSEvent(String str) {
        triggerJSEvent(str, "document");
    }

    public void triggerDocumentJSEvent(String str, String str2) {
        triggerJSEvent(str, "document", str2);
    }

    public void execute(Runnable runnable) {
        this.taskHandler.post(runnable);
    }

    public void executeOnMainThread(Runnable runnable) {
        new Handler(this.context.getMainLooper()).post(runnable);
    }

    public void saveCall(PluginCall pluginCall) {
        this.savedCalls.put(pluginCall.getCallbackId(), pluginCall);
    }

    public PluginCall getSavedCall(String str) {
        return this.savedCalls.get(str);
    }

    public void releaseCall(PluginCall pluginCall) {
        this.savedCalls.remove(pluginCall.getCallbackId());
    }

    private JSInjector getJSInjector() {
        try {
            return new JSInjector(JSExport.getGlobalJS(this.context, isDevMode()), JSExport.getCoreJS(this.context), JSExport.getPluginJS(this.plugins.values()), JSExport.getCordovaJS(this.context), JSExport.getCordovaPluginJS(this.context), JSExport.getCordovaPluginsFileJS(this.context), "window.WEBVIEW_SERVER_URL = '" + this.localUrl + "';");
        } catch (JSExportException e) {
            Logger.error("Unable to export Capacitor JS. App will not function!", e);
            return null;
        }
    }

    protected void storeDanglingPluginResult(PluginCall pluginCall, PluginResult pluginResult) {
        ((App) getPlugin("App").getInstance()).fireRestoredResult(pluginResult);
    }

    public void restoreInstanceState(Bundle bundle) {
        String string = bundle.getString(BUNDLE_LAST_PLUGIN_ID_KEY);
        String string2 = bundle.getString(BUNDLE_LAST_PLUGIN_CALL_METHOD_NAME_KEY);
        String string3 = bundle.getString(BUNDLE_PLUGIN_CALL_OPTIONS_SAVED_KEY);
        if (string != null) {
            if (string3 != null) {
                try {
                    this.pluginCallForLastActivity = new PluginCall(this.msgHandler, string, PluginCall.CALLBACK_ID_DANGLING, string2, new JSObject(string3));
                } catch (JSONException e) {
                    Logger.error("Unable to restore plugin call, unable to parse persisted JSON object", e);
                }
            }
            Bundle bundle2 = bundle.getBundle(BUNDLE_PLUGIN_CALL_BUNDLE_KEY);
            PluginHandle plugin = getPlugin(string);
            if (plugin != null) {
                plugin.getInstance().restoreState(bundle2);
            }
        }
    }

    public void saveInstanceState(Bundle bundle) {
        PluginHandle plugin;
        Logger.debug("Saving instance state!");
        PluginCall pluginCall = this.pluginCallForLastActivity;
        if (pluginCall == null || (plugin = getPlugin(pluginCall.getPluginId())) == null) {
            return;
        }
        bundle.putString(BUNDLE_LAST_PLUGIN_ID_KEY, pluginCall.getPluginId());
        bundle.putString(BUNDLE_LAST_PLUGIN_CALL_METHOD_NAME_KEY, pluginCall.getMethodName());
        bundle.putString(BUNDLE_PLUGIN_CALL_OPTIONS_SAVED_KEY, pluginCall.getData().toString());
        bundle.putBundle(BUNDLE_PLUGIN_CALL_BUNDLE_KEY, plugin.getInstance().saveInstanceState());
    }

    public void startActivityForPluginWithResult(PluginCall pluginCall, Intent intent, int i) {
        Logger.debug("Starting activity for result");
        this.pluginCallForLastActivity = pluginCall;
        getActivity().startActivityForResult(intent, i);
    }

    public void onRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        PluginHandle pluginWithRequestCode = getPluginWithRequestCode(i);
        if (pluginWithRequestCode == null) {
            Logger.debug("Unable to find a Capacitor plugin to handle permission requestCode, trying Cordova plugins " + i);
            try {
                this.cordovaInterface.onRequestPermissionResult(i, strArr, iArr);
                return;
            } catch (JSONException e) {
                Logger.debug("Error on Cordova plugin permissions request " + e.getMessage());
                return;
            }
        }
        pluginWithRequestCode.getInstance().handleRequestPermissionsResult(i, strArr, iArr);
    }

    public void onActivityResult(int i, int i2, Intent intent) {
        PluginHandle pluginWithRequestCode = getPluginWithRequestCode(i);
        if (pluginWithRequestCode == null || pluginWithRequestCode.getInstance() == null) {
            Logger.debug("Unable to find a Capacitor plugin to handle requestCode, trying Cordova plugins " + i);
            this.cordovaInterface.onActivityResult(i, i2, intent);
            return;
        }
        if (pluginWithRequestCode.getInstance().getSavedCall() == null && this.pluginCallForLastActivity != null) {
            pluginWithRequestCode.getInstance().saveCall(this.pluginCallForLastActivity);
        }
        pluginWithRequestCode.getInstance().handleOnActivityResult(i, i2, intent);
        this.pluginCallForLastActivity = null;
    }

    public void onNewIntent(Intent intent) {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnNewIntent(intent);
        }
    }

    public void onRestart() {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnRestart();
        }
    }

    public void onStart() {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnStart();
        }
    }

    public void onResume() {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnResume();
        }
    }

    public void onPause() {
        Splash.onPause();
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnPause();
        }
    }

    public void onStop() {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnStop();
        }
    }

    public void onDestroy() {
        Iterator<PluginHandle> it = this.plugins.values().iterator();
        while (it.hasNext()) {
            it.next().getInstance().handleOnDestroy();
        }
    }

    public void onBackPressed() {
        PluginHandle plugin = getPlugin("App");
        if (plugin != null) {
            App app = (App) plugin.getInstance();
            if (app.hasBackButtonListeners()) {
                app.fireBackButton();
            } else if (this.webView.canGoBack()) {
                this.webView.goBack();
            }
        }
    }

    public String getServerBasePath() {
        return this.localServer.getBasePath();
    }

    public void setServerBasePath(String str) {
        this.localServer.hostFiles(str);
        this.webView.post(new Runnable() { // from class: com.getcapacitor.Bridge.5
            @Override // java.lang.Runnable
            public void run() {
                Bridge.this.webView.loadUrl(Bridge.this.appUrl);
            }
        });
    }

    public void setServerAssetPath(String str) {
        this.localServer.hostAssets(str);
        this.webView.post(new Runnable() { // from class: com.getcapacitor.Bridge.6
            @Override // java.lang.Runnable
            public void run() {
                Bridge.this.webView.loadUrl(Bridge.this.appUrl);
            }
        });
    }

    public String getLocalUrl() {
        return this.localUrl;
    }

    public WebViewLocalServer getLocalServer() {
        return this.localServer;
    }

    public HostMask getAppAllowNavigationMask() {
        return this.appAllowNavigationMask;
    }

    public BridgeWebViewClient getWebViewClient() {
        return this.webViewClient;
    }

    public void setWebViewClient(BridgeWebViewClient bridgeWebViewClient) {
        this.webViewClient = bridgeWebViewClient;
    }
}

