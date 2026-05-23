package com.getcapacitor;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.android.R;
import com.getcapacitor.cordova.MockCordovaInterfaceImpl;
import com.getcapacitor.cordova.MockCordovaWebViewImpl;
import com.getcapacitor.plugin.App;
import java.util.ArrayList;
import java.util.List;
import org.apache.cordova.ConfigXmlParser;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.PluginEntry;
import org.apache.cordova.PluginManager;
import org.json.JSONObject;
public class BridgeActivity extends AppCompatActivity {
    protected Bridge bridge;
    private JSONObject config;
    protected MockCordovaInterfaceImpl cordovaInterface;
    private String lastActivityPlugin;
    private MockCordovaWebViewImpl mockWebView;
    private ArrayList<PluginEntry> pluginEntries;
    private PluginManager pluginManager;
    private CordovaPreferences preferences;
    private WebView webView;
    protected boolean keepRunning = true;
    private int activityDepth = 0;
    private List<Class<? extends Plugin>> initialPlugins = new ArrayList();

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
    }

    protected void init(Bundle bundle, List<Class<? extends Plugin>> list) {
        init(bundle, list, null);
    }

    protected void init(Bundle bundle, List<Class<? extends Plugin>> list, JSONObject jSONObject) {
        this.initialPlugins = list;
        this.config = jSONObject;
        loadConfig(getApplicationContext(), this);
        getApplication().setTheme(getResources().getIdentifier("AppTheme_NoActionBar", "style", getPackageName()));
        setTheme(getResources().getIdentifier("AppTheme_NoActionBar", "style", getPackageName()));
        setTheme(R.style.AppTheme_NoActionBar);
        setContentView(R.layout.bridge_layout_main);
        load(bundle);
    }

    protected void load(Bundle bundle) {
        Logger.debug("Starting BridgeActivity");
        this.webView = (WebView) findViewById(R.id.webview);
        MockCordovaInterfaceImpl mockCordovaInterfaceImpl = new MockCordovaInterfaceImpl(this);
        this.cordovaInterface = mockCordovaInterfaceImpl;
        if (bundle != null) {
            mockCordovaInterfaceImpl.restoreInstanceState(bundle);
        }
        MockCordovaWebViewImpl mockCordovaWebViewImpl = new MockCordovaWebViewImpl(getApplicationContext());
        this.mockWebView = mockCordovaWebViewImpl;
        mockCordovaWebViewImpl.init(this.cordovaInterface, this.pluginEntries, this.preferences, this.webView);
        PluginManager pluginManager = this.mockWebView.getPluginManager();
        this.pluginManager = pluginManager;
        this.cordovaInterface.onCordovaInit(pluginManager);
        Bridge bridge = new Bridge(this, this.webView, this.initialPlugins, this.cordovaInterface, this.pluginManager, this.preferences, this.config);
        this.bridge = bridge;
        if (bundle != null) {
            bridge.restoreInstanceState(bundle);
        }
        this.keepRunning = this.preferences.getBoolean("KeepRunning", true);
        onNewIntent(getIntent());
    }

    public Bridge getBridge() {
        return this.bridge;
    }

    private void fireAppStateChanged(boolean z) {
        App app;
        PluginHandle plugin = this.bridge.getPlugin("App");
        if (plugin == null || (app = (App) plugin.getInstance()) == null) {
            return;
        }
        app.fireChange(z);
    }

    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        this.bridge.saveInstanceState(bundle);
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onStart() {
        super.onStart();
        this.activityDepth++;
        this.bridge.onStart();
        this.mockWebView.handleStart();
        Logger.debug("App started");
    }

    @Override // android.app.Activity
    public void onRestart() {
        super.onRestart();
        this.bridge.onRestart();
        Logger.debug("App restarted");
    }

    @Override // androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onResume() {
        super.onResume();
        fireAppStateChanged(true);
        this.bridge.onResume();
        this.mockWebView.handleResume(this.keepRunning);
        Logger.debug("App resumed");
    }

    @Override // androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onPause() {
        super.onPause();
        this.bridge.onPause();
        if (this.mockWebView != null) {
            this.mockWebView.handlePause(this.keepRunning || this.cordovaInterface.getActivityResultCallback() != null);
        }
        Logger.debug("App paused");
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onStop() {
        super.onStop();
        int iMax = Math.max(0, this.activityDepth - 1);
        this.activityDepth = iMax;
        if (iMax == 0) {
            fireAppStateChanged(false);
        }
        this.bridge.onStop();
        MockCordovaWebViewImpl mockCordovaWebViewImpl = this.mockWebView;
        if (mockCordovaWebViewImpl != null) {
            mockCordovaWebViewImpl.handleStop();
        }
        Logger.debug("App stopped");
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onDestroy() {
        super.onDestroy();
        this.bridge.onDestroy();
        MockCordovaWebViewImpl mockCordovaWebViewImpl = this.mockWebView;
        if (mockCordovaWebViewImpl != null) {
            mockCordovaWebViewImpl.handleDestroy();
        }
        Logger.debug("App destroyed");
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        WebView webView = this.webView;
        if (webView != null) {
            webView.removeAllViews();
            this.webView.destroy();
        }
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    public void onRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        Bridge bridge = this.bridge;
        if (bridge == null) {
            return;
        }
        bridge.onRequestPermissionsResult(i, strArr, iArr);
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    protected void onActivityResult(int i, int i2, Intent intent) {
        Bridge bridge = this.bridge;
        if (bridge == null) {
            return;
        }
        bridge.onActivityResult(i, i2, intent);
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    protected void onNewIntent(Intent intent) {
        Bridge bridge = this.bridge;
        if (bridge == null || intent == null) {
            return;
        }
        bridge.onNewIntent(intent);
        this.mockWebView.onNewIntent(intent);
    }

    @Override // androidx.activity.ComponentActivity, android.app.Activity
    public void onBackPressed() {
        Bridge bridge = this.bridge;
        if (bridge == null) {
            return;
        }
        bridge.onBackPressed();
    }

    public void loadConfig(Context context, Activity activity) {
        ConfigXmlParser configXmlParser = new ConfigXmlParser();
        configXmlParser.parse(context);
        CordovaPreferences preferences = configXmlParser.getPreferences();
        this.preferences = preferences;
        preferences.setPreferencesBundle(activity.getIntent().getExtras());
        this.pluginEntries = configXmlParser.getPluginEntries();
    }
}

