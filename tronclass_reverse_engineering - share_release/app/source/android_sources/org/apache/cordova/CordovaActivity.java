package org.apache.cordova;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.FrameLayout;
import androidx.core.view.ViewCompat;
import java.util.ArrayList;
import java.util.Locale;
import org.json.JSONException;
import org.json.JSONObject;
public class CordovaActivity extends Activity {
    private static int ACTIVITY_EXITING = 2;
    private static int ACTIVITY_RUNNING = 1;
    private static int ACTIVITY_STARTING = 0;
    public static String TAG = "CordovaActivity";
    protected CordovaWebView appView;
    protected CordovaInterfaceImpl cordovaInterface;
    protected boolean immersiveMode;
    protected boolean keepRunning = true;
    protected String launchUrl;
    protected ArrayList<PluginEntry> pluginEntries;
    protected CordovaPreferences preferences;

    @Override // android.app.Activity
    public void onCreate(Bundle bundle) {
        loadConfig();
        LOG.setLogLevel(this.preferences.getString("loglevel", "ERROR"));
        LOG.i(TAG, "Apache Cordova native platform version 7.0.0 is starting");
        LOG.d(TAG, "CordovaActivity.onCreate()");
        if (!this.preferences.getBoolean("ShowTitle", false)) {
            getWindow().requestFeature(1);
        }
        if (this.preferences.getBoolean("SetFullscreen", false)) {
            LOG.d(TAG, "The SetFullscreen configuration is deprecated in favor of Fullscreen, and will be removed in a future version.");
            this.preferences.set("Fullscreen", true);
        }
        if (this.preferences.getBoolean("Fullscreen", false)) {
            if (!this.preferences.getBoolean("FullscreenNotImmersive", false)) {
                this.immersiveMode = true;
            } else {
                getWindow().setFlags(1024, 1024);
            }
        } else {
            getWindow().setFlags(2048, 2048);
        }
        super.onCreate(bundle);
        CordovaInterfaceImpl cordovaInterfaceImplMakeCordovaInterface = makeCordovaInterface();
        this.cordovaInterface = cordovaInterfaceImplMakeCordovaInterface;
        if (bundle != null) {
            cordovaInterfaceImplMakeCordovaInterface.restoreInstanceState(bundle);
        }
    }

    protected void init() {
        this.appView = makeWebView();
        createViews();
        if (!this.appView.isInitialized()) {
            this.appView.init(this.cordovaInterface, this.pluginEntries, this.preferences);
        }
        this.cordovaInterface.onCordovaInit(this.appView.getPluginManager());
        if ("media".equals(this.preferences.getString("DefaultVolumeStream", "").toLowerCase(Locale.ENGLISH))) {
            setVolumeControlStream(3);
        }
    }

    protected void loadConfig() {
        ConfigXmlParser configXmlParser = new ConfigXmlParser();
        configXmlParser.parse(this);
        CordovaPreferences preferences = configXmlParser.getPreferences();
        this.preferences = preferences;
        preferences.setPreferencesBundle(getIntent().getExtras());
        this.launchUrl = configXmlParser.getLaunchUrl();
        this.pluginEntries = configXmlParser.getPluginEntries();
        Config.parser = configXmlParser;
    }

    protected void createViews() {
        this.appView.getView().setId(100);
        this.appView.getView().setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        setContentView(this.appView.getView());
        if (this.preferences.contains("BackgroundColor")) {
            try {
                this.appView.getView().setBackgroundColor(this.preferences.getInteger("BackgroundColor", ViewCompat.MEASURED_STATE_MASK));
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }
        this.appView.getView().requestFocusFromTouch();
    }

    protected CordovaWebView makeWebView() {
        return new CordovaWebViewImpl(makeWebViewEngine());
    }

    protected CordovaWebViewEngine makeWebViewEngine() {
        return CordovaWebViewImpl.createEngine(this, this.preferences);
    }

    protected CordovaInterfaceImpl makeCordovaInterface() {
        return new CordovaInterfaceImpl(this) { // from class: org.apache.cordova.CordovaActivity.1
            @Override // org.apache.cordova.CordovaInterfaceImpl, org.apache.cordova.CordovaInterface
            public Object onMessage(String str, Object obj) {
                return CordovaActivity.this.onMessage(str, obj);
            }
        };
    }

    public void loadUrl(String str) {
        if (this.appView == null) {
            init();
        }
        this.keepRunning = this.preferences.getBoolean("KeepRunning", true);
        this.appView.loadUrlIntoView(str, true);
    }

    @Override // android.app.Activity
    protected void onPause() {
        super.onPause();
        LOG.d(TAG, "Paused the activity.");
        if (this.appView != null) {
            this.appView.handlePause(this.keepRunning || this.cordovaInterface.activityResultCallback != null);
        }
    }

    @Override // android.app.Activity
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView != null) {
            cordovaWebView.onNewIntent(intent);
        }
    }

    @Override // android.app.Activity
    protected void onResume() {
        super.onResume();
        LOG.d(TAG, "Resumed the activity.");
        if (this.appView == null) {
            return;
        }
        getWindow().getDecorView().requestFocus();
        this.appView.handleResume(this.keepRunning);
    }

    @Override // android.app.Activity
    protected void onStop() {
        super.onStop();
        LOG.d(TAG, "Stopped the activity.");
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView == null) {
            return;
        }
        cordovaWebView.handleStop();
    }

    @Override // android.app.Activity
    protected void onStart() {
        super.onStart();
        LOG.d(TAG, "Started the activity.");
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView == null) {
            return;
        }
        cordovaWebView.handleStart();
    }

    @Override // android.app.Activity
    public void onDestroy() {
        LOG.d(TAG, "CordovaActivity.onDestroy()");
        super.onDestroy();
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView != null) {
            cordovaWebView.handleDestroy();
        }
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public void onWindowFocusChanged(boolean z) {
        super.onWindowFocusChanged(z);
        if (z && this.immersiveMode) {
            getWindow().getDecorView().setSystemUiVisibility(5894);
        }
    }

    @Override // android.app.Activity
    public void startActivityForResult(Intent intent, int i, Bundle bundle) {
        this.cordovaInterface.setActivityResultRequestCode(i);
        super.startActivityForResult(intent, i, bundle);
    }

    @Override // android.app.Activity
    protected void onActivityResult(int i, int i2, Intent intent) {
        LOG.d(TAG, "Incoming Result. Request code = " + i);
        super.onActivityResult(i, i2, intent);
        this.cordovaInterface.onActivityResult(i, i2, intent);
    }

    public void onReceivedError(int i, final String str, final String str2) {
        final String string = this.preferences.getString("errorUrl", null);
        if (string != null && !str2.equals(string) && this.appView != null) {
            runOnUiThread(new Runnable() { // from class: org.apache.cordova.CordovaActivity.2
                @Override // java.lang.Runnable
                public void run() {
                    this.appView.showWebPage(string, false, true, null);
                }
            });
        } else {
            final boolean z = i != -2;
            runOnUiThread(new Runnable() { // from class: org.apache.cordova.CordovaActivity.3
                @Override // java.lang.Runnable
                public void run() {
                    if (z) {
                        this.appView.getView().setVisibility(8);
                        this.displayError("Application Error", str + " (" + str2 + ")", "OK", z);
                    }
                }
            });
        }
    }

    public void displayError(final String str, final String str2, final String str3, final boolean z) {
        runOnUiThread(new Runnable() { // from class: org.apache.cordova.CordovaActivity.4
            @Override // java.lang.Runnable
            public void run() {
                try {
                    AlertDialog.Builder builder = new AlertDialog.Builder(this);
                    builder.setMessage(str2);
                    builder.setTitle(str);
                    builder.setCancelable(false);
                    builder.setPositiveButton(str3, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaActivity.4.1
                        @Override // android.content.DialogInterface.OnClickListener
                        public void onClick(DialogInterface dialogInterface, int i) {
                            dialogInterface.dismiss();
                            if (z) {
                                CordovaActivity.this.finish();
                            }
                        }
                    });
                    builder.create();
                    builder.show();
                } catch (Exception unused) {
                    CordovaActivity.this.finish();
                }
            }
        });
    }

    @Override // android.app.Activity
    public boolean onCreateOptionsMenu(Menu menu) {
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView != null) {
            cordovaWebView.getPluginManager().postMessage("onCreateOptionsMenu", menu);
        }
        return super.onCreateOptionsMenu(menu);
    }

    @Override // android.app.Activity
    public boolean onPrepareOptionsMenu(Menu menu) {
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView == null) {
            return true;
        }
        cordovaWebView.getPluginManager().postMessage("onPrepareOptionsMenu", menu);
        return true;
    }

    @Override // android.app.Activity
    public boolean onOptionsItemSelected(MenuItem menuItem) {
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView == null) {
            return true;
        }
        cordovaWebView.getPluginManager().postMessage("onOptionsItemSelected", menuItem);
        return true;
    }

    public Object onMessage(String str, Object obj) {
        if ("onReceivedError".equals(str)) {
            JSONObject jSONObject = (JSONObject) obj;
            try {
                onReceivedError(jSONObject.getInt("errorCode"), jSONObject.getString("description"), jSONObject.getString("url"));
                return null;
            } catch (JSONException e) {
                e.printStackTrace();
                return null;
            }
        }
        if (!"exit".equals(str)) {
            return null;
        }
        finish();
        return null;
    }

    @Override // android.app.Activity
    protected void onSaveInstanceState(Bundle bundle) {
        this.cordovaInterface.onSaveInstanceState(bundle);
        super.onSaveInstanceState(bundle);
    }

    @Override // android.app.Activity, android.content.ComponentCallbacks
    public void onConfigurationChanged(Configuration configuration) {
        PluginManager pluginManager;
        super.onConfigurationChanged(configuration);
        CordovaWebView cordovaWebView = this.appView;
        if (cordovaWebView == null || (pluginManager = cordovaWebView.getPluginManager()) == null) {
            return;
        }
        pluginManager.onConfigurationChanged(configuration);
    }

    @Override // android.app.Activity
    public void onRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        try {
            this.cordovaInterface.onRequestPermissionResult(i, strArr, iArr);
        } catch (JSONException e) {
            LOG.d(TAG, "JSONException: Parameters fed into the method are not valid");
            e.printStackTrace();
        }
    }
}

