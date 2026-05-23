package com.mesmotronic.plugins;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.Point;
import android.os.Handler;
import android.view.View;
import android.view.Window;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
public class FullScreenPlugin extends CordovaPlugin {
    public static final String ACTION_IMMERSIVE_HEIGHT = "immersiveHeight";
    public static final String ACTION_IMMERSIVE_MODE = "immersiveMode";
    public static final String ACTION_IMMERSIVE_WIDTH = "immersiveWidth";
    public static final String ACTION_IS_IMMERSIVE_MODE_SUPPORTED = "isImmersiveModeSupported";
    public static final String ACTION_IS_SUPPORTED = "isSupported";
    public static final String ACTION_LEAN_MODE = "leanMode";
    public static final String ACTION_SET_SYSTEM_UI_VISIBILITY = "setSystemUiVisibility";
    public static final String ACTION_SHOW_SYSTEM_UI = "showSystemUI";
    public static final String ACTION_SHOW_UNDER_STATUS_BAR = "showUnderStatusBar";
    public static final String ACTION_SHOW_UNDER_SYSTEM_UI = "showUnderSystemUI";
    private Activity activity;
    private CallbackContext context;
    private View decorView;
    private Window window;
    private int mLastSystemUIVisibility = 0;
    private final Handler mLeanBackHandler = new Handler();
    private final Runnable mEnterLeanback = new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.1
        @Override // java.lang.Runnable
        public void run() {
            FullScreenPlugin.this.leanMode();
        }
    };

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(final CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        super.initialize(cordovaInterface, cordovaWebView);
        this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.2
            @Override // java.lang.Runnable
            public void run() {
                cordovaInterface.getActivity().getWindow().clearFlags(2048);
                FullScreenPlugin fullScreenPlugin = FullScreenPlugin.this;
                fullScreenPlugin.setStatusBarBackgroundColor(fullScreenPlugin.preferences.getString("StatusBarBackgroundColor", "#000000"));
            }
        });
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.context = callbackContext;
        Activity activity = this.f7cordova.getActivity();
        this.activity = activity;
        Window window = activity.getWindow();
        this.window = window;
        this.decorView = window.getDecorView();
        if (ACTION_IS_SUPPORTED.equals(str)) {
            return isSupported();
        }
        if (ACTION_IS_IMMERSIVE_MODE_SUPPORTED.equals(str)) {
            return isImmersiveModeSupported();
        }
        if (ACTION_IMMERSIVE_WIDTH.equals(str)) {
            return immersiveWidth();
        }
        if (ACTION_IMMERSIVE_HEIGHT.equals(str)) {
            return immersiveHeight();
        }
        if (ACTION_LEAN_MODE.equals(str)) {
            return leanMode();
        }
        if (ACTION_SHOW_SYSTEM_UI.equals(str)) {
            return showSystemUI();
        }
        if (ACTION_SHOW_UNDER_STATUS_BAR.equals(str)) {
            return showUnderStatusBar();
        }
        if (ACTION_SHOW_UNDER_SYSTEM_UI.equals(str)) {
            return showUnderSystemUI();
        }
        if (ACTION_IMMERSIVE_MODE.equals(str)) {
            return immersiveMode();
        }
        if (ACTION_SET_SYSTEM_UI_VISIBILITY.equals(str)) {
            return setSystemUiVisibility(jSONArray.getInt(0));
        }
        return false;
    }

    protected void resetWindow() {
        this.decorView.setOnFocusChangeListener(null);
        this.decorView.setOnSystemUiVisibilityChangeListener(null);
        this.window.clearFlags(2048);
    }

    protected boolean isSupported() {
        this.context.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
        return true;
    }

    protected boolean isImmersiveModeSupported() {
        this.context.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
        return true;
    }

    protected boolean immersiveWidth() {
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.3
            @Override // java.lang.Runnable
            public void run() {
                try {
                    Point point = new Point();
                    FullScreenPlugin.this.decorView.getDisplay().getRealSize(point);
                    FullScreenPlugin.this.context.sendPluginResult(new PluginResult(PluginResult.Status.OK, point.x));
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean immersiveHeight() {
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.4
            @Override // java.lang.Runnable
            public void run() {
                try {
                    Point point = new Point();
                    FullScreenPlugin.this.decorView.getDisplay().getRealSize(point);
                    FullScreenPlugin.this.context.sendPluginResult(new PluginResult(PluginResult.Status.OK, point.y));
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean leanMode() {
        if (!isSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.5
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.mLastSystemUIVisibility = 1798;
                    FullScreenPlugin.this.decorView.setOnSystemUiVisibilityChangeListener(new View.OnSystemUiVisibilityChangeListener() { // from class: com.mesmotronic.plugins.FullScreenPlugin.5.1
                        @Override // android.view.View.OnSystemUiVisibilityChangeListener
                        public void onSystemUiVisibilityChange(int i) {
                            if ((FullScreenPlugin.this.mLastSystemUIVisibility & 2) != 0 && (i & 2) == 0) {
                                FullScreenPlugin.this.resetHideTimer();
                            }
                            FullScreenPlugin.this.mLastSystemUIVisibility = i;
                        }
                    });
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(1798);
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }
    public void resetHideTimer() {
        this.mLeanBackHandler.removeCallbacks(this.mEnterLeanback);
        this.mLeanBackHandler.postDelayed(this.mEnterLeanback, 3000L);
    }

    protected boolean showSystemUI() {
        if (!isSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.6
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.window.clearFlags(201327616);
                    FullScreenPlugin.this.decorView.setOnSystemUiVisibilityChangeListener(null);
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(0);
                    FullScreenPlugin.this.context.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean showUnderStatusBar() {
        if (!isImmersiveModeSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.7
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.window.setFlags(67108864, 67108864);
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(1280);
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean showUnderSystemUI() {
        if (!isImmersiveModeSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.8
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.window.setFlags(134217728, 134217728);
                    FullScreenPlugin.this.window.setFlags(67108864, 67108864);
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(768);
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean immersiveMode() {
        if (!isImmersiveModeSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.9
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.window.addFlags(1024);
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(5894);
                    FullScreenPlugin.this.decorView.setOnFocusChangeListener(new View.OnFocusChangeListener() { // from class: com.mesmotronic.plugins.FullScreenPlugin.9.1
                        @Override // android.view.View.OnFocusChangeListener
                        public void onFocusChange(View view, boolean z) {
                            if (z) {
                                FullScreenPlugin.this.decorView.setSystemUiVisibility(5894);
                            }
                        }
                    });
                    FullScreenPlugin.this.decorView.setOnSystemUiVisibilityChangeListener(new View.OnSystemUiVisibilityChangeListener() { // from class: com.mesmotronic.plugins.FullScreenPlugin.9.2
                        @Override // android.view.View.OnSystemUiVisibilityChangeListener
                        public void onSystemUiVisibilityChange(int i) {
                            FullScreenPlugin.this.decorView.setSystemUiVisibility(5894);
                        }
                    });
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }

    protected boolean setSystemUiVisibility(final int i) {
        if (!isSupported()) {
            this.context.error("Not supported");
            return false;
        }
        this.activity.runOnUiThread(new Runnable() { // from class: com.mesmotronic.plugins.FullScreenPlugin.10
            @Override // java.lang.Runnable
            public void run() {
                try {
                    FullScreenPlugin.this.resetWindow();
                    FullScreenPlugin.this.decorView.setSystemUiVisibility(i);
                    FullScreenPlugin.this.context.success();
                } catch (Exception e) {
                    FullScreenPlugin.this.context.error(e.getMessage());
                }
            }
        });
        return true;
    }
    public void setStatusBarBackgroundColor(String str) {
        if (str == null || str.isEmpty()) {
            return;
        }
        Window window = this.f7cordova.getActivity().getWindow();
        window.clearFlags(67108864);
        window.addFlags(Integer.MIN_VALUE);
        try {
            window.getClass().getDeclaredMethod("setStatusBarColor", Integer.TYPE).invoke(window, Integer.valueOf(Color.parseColor(str)));
        } catch (IllegalArgumentException | Exception unused) {
        }
    }
}

