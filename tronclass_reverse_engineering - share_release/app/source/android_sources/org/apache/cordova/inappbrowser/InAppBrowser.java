package org.apache.cordova.inappbrowser;

import android.R;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.webkit.CookieManager;
import android.webkit.HttpAuthHandler;
import android.webkit.JavascriptInterface;
import android.webkit.SslErrorHandler;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.core.net.MailTo;
import com.getcapacitor.Bridge;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.Config;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaHttpAuthHandler;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginManager;
import org.apache.cordova.PluginResult;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class InAppBrowser extends CordovaPlugin {
    private static final String BEFORELOAD = "beforeload";
    private static final String CLEAR_ALL_CACHE = "clearcache";
    private static final String CLEAR_SESSION_CACHE = "clearsessioncache";
    private static final String EXIT_EVENT = "exit";
    private static final int FILECHOOSER_REQUESTCODE = 1;
    private static final int FILECHOOSER_REQUESTCODE_LOLLIPOP = 2;
    private static final String FOOTER = "footer";
    private static final String FULLSCREEN = "fullscreen";
    private static final String HARDWARE_BACK_BUTTON = "hardwareback";
    private static final String HIDDEN = "hidden";
    private static final String HIDE_NAVIGATION = "hidenavigationbuttons";
    private static final String HIDE_URL = "hideurlbar";
    private static final String LEFT_TO_RIGHT = "lefttoright";
    private static final String LOAD_ERROR_EVENT = "loaderror";
    private static final String LOAD_START_EVENT = "loadstart";
    private static final String LOAD_STOP_EVENT = "loadstop";
    private static final String LOCATION = "location";
    protected static final String LOG_TAG = "InAppBrowser";
    private static final String MEDIA_PLAYBACK_REQUIRES_USER_ACTION = "mediaPlaybackRequiresUserAction";
    private static final String MESSAGE_EVENT = "message";
    private static final String NULL = "null";
    private static final String SELF = "_self";
    private static final String SESSION = "session";
    private static final String SHOULD_PAUSE = "shouldPauseOnSuspend";
    private static final String SYSTEM = "_system";
    private static final String USER_WIDE_VIEW_PORT = "useWideViewPort";
    private static final String ZOOM = "zoom";
    private String[] allowedSchemes;
    private CallbackContext callbackContext;
    private InAppBrowserClient currentClient;
    private InAppBrowserDialog dialog;
    private EditText edittext;
    private Map<String, String> extraHeaders;
    private WebView inAppWebView;
    private ValueCallback<Uri> mUploadCallback;
    private ValueCallback<Uri[]> mUploadCallbackLollipop;
    private static final Boolean DEFAULT_HARDWARE_BACK = true;
    private static final String CLOSE_BUTTON_CAPTION = "closebuttoncaption";
    private static final String TOOLBAR_COLOR = "toolbarcolor";
    private static final String NAVIGATION_COLOR = "navigationbuttoncolor";
    private static final String CLOSE_BUTTON_COLOR = "closebuttoncolor";
    private static final String FOOTER_COLOR = "footercolor";
    private static final String AVOID_GOOGLE_AUTH_DISALLOWED_USER_AGENT = "avoidGoogleAuthDisallowedUserAgent";
    private static final List customizableOptions = Arrays.asList(CLOSE_BUTTON_CAPTION, TOOLBAR_COLOR, NAVIGATION_COLOR, CLOSE_BUTTON_COLOR, FOOTER_COLOR, "session", AVOID_GOOGLE_AUTH_DISALLOWED_USER_AGENT);
    private boolean showLocationBar = true;
    private boolean showZoomControls = true;
    private boolean openWindowHidden = false;
    private boolean clearAllCache = false;
    private boolean clearSessionCache = false;
    private boolean hadwareBackButton = true;
    private boolean mediaPlaybackRequiresUserGesture = false;
    private boolean avoidGoogleAuthDisallowedUserAgent = false;
    private boolean shouldPauseInAppBrowser = false;
    private boolean useWideViewPort = true;
    private String closeButtonCaption = "";
    private String closeButtonColor = "";
    private boolean leftToRight = false;
    private int toolbarColor = -3355444;
    private boolean hideNavigationButtons = false;
    private String navigationButtonColor = "";
    private boolean hideUrlBar = false;
    private boolean showFooter = false;
    private String footerColor = "";
    private String beforeload = "";
    private boolean fullscreen = true;
    private String session = "";
    public InAppBrowser getInAppBrowser() {
        return this;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, CordovaArgs cordovaArgs, final CallbackContext callbackContext) throws JSONException {
        String str2;
        String str3;
        String str4;
        if (str.equals("open")) {
            this.callbackContext = callbackContext;
            final String string = cordovaArgs.getString(0);
            String strOptString = cordovaArgs.optString(1);
            if (strOptString == null || strOptString.equals("") || strOptString.equals(NULL)) {
                strOptString = SELF;
            }
            final String str5 = strOptString;
            final HashMap<String, String> feature = parseFeature(cordovaArgs.optString(2));
            this.session = feature.get("session");
            HashMap map = new HashMap();
            this.extraHeaders = map;
            map.put("Cookie", "session=".concat(this.session));
            LOG.d(LOG_TAG, "target = " + str5);
            this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.1
                @Override // java.lang.Runnable
                public void run() {
                    String strShowWebPage;
                    if (InAppBrowser.SELF.equals(str5)) {
                        LOG.d(InAppBrowser.LOG_TAG, "in self");
                        Boolean bool = string.startsWith("javascript:") ? true : null;
                        if (bool == null) {
                            try {
                                bool = (Boolean) Config.class.getMethod("isUrlWhiteListed", String.class).invoke(null, string);
                            } catch (IllegalAccessException e) {
                                LOG.d(InAppBrowser.LOG_TAG, e.getLocalizedMessage());
                            } catch (NoSuchMethodException e2) {
                                LOG.d(InAppBrowser.LOG_TAG, e2.getLocalizedMessage());
                            } catch (InvocationTargetException e3) {
                                LOG.d(InAppBrowser.LOG_TAG, e3.getLocalizedMessage());
                            }
                        }
                        if (bool == null) {
                            try {
                                PluginManager pluginManager = (PluginManager) InAppBrowser.this.webView.getClass().getMethod("getPluginManager", new Class[0]).invoke(InAppBrowser.this.webView, new Object[0]);
                                bool = (Boolean) pluginManager.getClass().getMethod("shouldAllowNavigation", String.class).invoke(pluginManager, string);
                            } catch (IllegalAccessException e4) {
                                LOG.d(InAppBrowser.LOG_TAG, e4.getLocalizedMessage());
                            } catch (NoSuchMethodException e5) {
                                LOG.d(InAppBrowser.LOG_TAG, e5.getLocalizedMessage());
                            } catch (InvocationTargetException e6) {
                                LOG.d(InAppBrowser.LOG_TAG, e6.getLocalizedMessage());
                            }
                        }
                        if (Boolean.TRUE.equals(bool)) {
                            LOG.d(InAppBrowser.LOG_TAG, "loading in webview");
                            InAppBrowser.this.webView.loadUrl(string);
                        } else if (string.startsWith("tel:")) {
                            try {
                                LOG.d(InAppBrowser.LOG_TAG, "loading in dialer");
                                Intent intent = new Intent("android.intent.action.DIAL");
                                intent.setData(Uri.parse(string));
                                InAppBrowser.this.f7cordova.getActivity().startActivity(intent);
                            } catch (ActivityNotFoundException e7) {
                                LOG.e(InAppBrowser.LOG_TAG, "Error dialing " + string + ": " + e7.toString());
                            }
                        } else {
                            LOG.d(InAppBrowser.LOG_TAG, "loading in InAppBrowser");
                            strShowWebPage = InAppBrowser.this.showWebPage(string, feature);
                        }
                        strShowWebPage = "";
                    } else if (InAppBrowser.SYSTEM.equals(str5)) {
                        LOG.d(InAppBrowser.LOG_TAG, "in system");
                        strShowWebPage = InAppBrowser.this.openExternal(string);
                    } else {
                        LOG.d(InAppBrowser.LOG_TAG, "in blank");
                        strShowWebPage = InAppBrowser.this.showWebPage(string, feature);
                    }
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, strShowWebPage);
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                }
            });
        } else if (str.equals("close")) {
            closeDialog();
        } else if (str.equals("loadAfterBeforeload")) {
            if (this.beforeload == null) {
                LOG.e(LOG_TAG, "unexpected loadAfterBeforeload called without feature beforeload=yes");
            }
            final String string2 = cordovaArgs.getString(0);
            this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.2
                @Override // java.lang.Runnable
                public void run() {
                    if (Build.VERSION.SDK_INT < 26) {
                        InAppBrowser.this.currentClient.waitForBeforeload = false;
                        InAppBrowser.this.inAppWebView.setWebViewClient(InAppBrowser.this.currentClient);
                    } else {
                        ((InAppBrowserClient) InAppBrowser.this.inAppWebView.getWebViewClient()).waitForBeforeload = false;
                    }
                    InAppBrowser.this.inAppWebView.loadUrl(string2);
                }
            });
        } else if (str.equals("injectScriptCode")) {
            injectDeferredObject(cordovaArgs.getString(0), cordovaArgs.getBoolean(1) ? String.format("(function(){prompt(JSON.stringify([eval(%%s)]), 'gap-iab://%s')})()", callbackContext.getCallbackId()) : null);
        } else if (str.equals("injectScriptFile")) {
            if (cordovaArgs.getBoolean(1)) {
                str4 = String.format("(function(d) { var c = d.createElement('script'); c.src = %%s; c.onload = function() { prompt('', 'gap-iab://%s'); }; d.body.appendChild(c); })(document)", callbackContext.getCallbackId());
            } else {
                str4 = "(function(d) { var c = d.createElement('script'); c.src = %s; d.body.appendChild(c); })(document)";
            }
            injectDeferredObject(cordovaArgs.getString(0), str4);
        } else if (str.equals("injectStyleCode")) {
            if (cordovaArgs.getBoolean(1)) {
                str3 = String.format("(function(d) { var c = d.createElement('style'); c.innerHTML = %%s; d.body.appendChild(c); prompt('', 'gap-iab://%s');})(document)", callbackContext.getCallbackId());
            } else {
                str3 = "(function(d) { var c = d.createElement('style'); c.innerHTML = %s; d.body.appendChild(c); })(document)";
            }
            injectDeferredObject(cordovaArgs.getString(0), str3);
        } else if (str.equals("injectStyleFile")) {
            if (cordovaArgs.getBoolean(1)) {
                str2 = String.format("(function(d) { var c = d.createElement('link'); c.rel='stylesheet'; c.type='text/css'; c.href = %%s; d.head.appendChild(c); prompt('', 'gap-iab://%s');})(document)", callbackContext.getCallbackId());
            } else {
                str2 = "(function(d) { var c = d.createElement('link'); c.rel='stylesheet'; c.type='text/css'; c.href = %s; d.head.appendChild(c); })(document)";
            }
            injectDeferredObject(cordovaArgs.getString(0), str2);
        } else if (str.equals("show")) {
            this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.3
                @Override // java.lang.Runnable
                public void run() {
                    if (InAppBrowser.this.dialog == null || InAppBrowser.this.f7cordova.getActivity().isFinishing()) {
                        return;
                    }
                    InAppBrowser.this.dialog.show();
                }
            });
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            pluginResult.setKeepCallback(true);
            this.callbackContext.sendPluginResult(pluginResult);
        } else {
            if (!str.equals("hide")) {
                return false;
            }
            this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.4
                @Override // java.lang.Runnable
                public void run() {
                    if (InAppBrowser.this.dialog == null || InAppBrowser.this.f7cordova.getActivity().isFinishing()) {
                        return;
                    }
                    InAppBrowser.this.dialog.hide();
                }
            });
            PluginResult pluginResult2 = new PluginResult(PluginResult.Status.OK);
            pluginResult2.setKeepCallback(true);
            this.callbackContext.sendPluginResult(pluginResult2);
        }
        return true;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onReset() {
        closeDialog();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onPause(boolean z) {
        if (this.shouldPauseInAppBrowser) {
            this.inAppWebView.onPause();
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onResume(boolean z) {
        if (this.shouldPauseInAppBrowser) {
            this.inAppWebView.onResume();
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        closeDialog();
    }
    public void injectDeferredObject(final String str, String str2) {
        if (this.inAppWebView != null) {
            if (str2 != null) {
                JSONArray jSONArray = new JSONArray();
                jSONArray.put(str);
                String string = jSONArray.toString();
                str = String.format(str2, string.substring(1, string.length() - 1));
            }
            this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.5
                @Override // java.lang.Runnable
                public void run() {
                    InAppBrowser.this.inAppWebView.evaluateJavascript(str, null);
                }
            });
            return;
        }
        LOG.d(LOG_TAG, "Can't inject code into the system browser");
    }

    private HashMap<String, String> parseFeature(String str) {
        if (str.equals(NULL)) {
            return null;
        }
        HashMap<String, String> map = new HashMap<>();
        StringTokenizer stringTokenizer = new StringTokenizer(str, ",");
        while (stringTokenizer.hasMoreElements()) {
            StringTokenizer stringTokenizer2 = new StringTokenizer(stringTokenizer.nextToken(), "=");
            if (stringTokenizer2.hasMoreElements()) {
                String strNextToken = stringTokenizer2.nextToken();
                String strNextToken2 = stringTokenizer2.nextToken();
                if (!customizableOptions.contains(strNextToken) && !strNextToken2.equals("yes") && !strNextToken2.equals("no")) {
                    strNextToken2 = "yes";
                }
                map.put(strNextToken, strNextToken2);
            }
        }
        return map;
    }

    public String openExternal(String str) {
        try {
            Intent intent = new Intent("android.intent.action.VIEW");
            Uri uri = Uri.parse(str);
            if ("file".equals(uri.getScheme())) {
                intent.setDataAndType(uri, this.webView.getResourceApi().getMimeType(uri));
            } else {
                intent.setData(uri);
            }
            intent.putExtra("com.android.browser.application_id", this.f7cordova.getActivity().getPackageName());
            openExternalExcludeCurrentApp(intent);
            return "";
        } catch (RuntimeException e) {
            LOG.d(LOG_TAG, "InAppBrowser: Error loading url " + str + ":" + e.toString());
            return e.toString();
        }
    }

    private void openExternalExcludeCurrentApp(Intent intent) {
        String packageName = this.f7cordova.getActivity().getPackageName();
        List<ResolveInfo> listQueryIntentActivities = this.f7cordova.getActivity().getPackageManager().queryIntentActivities(intent, 0);
        ArrayList arrayList = new ArrayList();
        boolean z = false;
        for (ResolveInfo resolveInfo : listQueryIntentActivities) {
            if (packageName.equals(resolveInfo.activityInfo.packageName)) {
                z = true;
            } else {
                Intent intent2 = (Intent) intent.clone();
                intent2.setPackage(resolveInfo.activityInfo.packageName);
                arrayList.add(intent2);
            }
        }
        if (!z || arrayList.size() == 0) {
            this.f7cordova.getActivity().startActivity(intent);
            return;
        }
        if (arrayList.size() == 1) {
            this.f7cordova.getActivity().startActivity((Intent) arrayList.get(0));
        } else if (arrayList.size() > 0) {
            Intent intentCreateChooser = Intent.createChooser((Intent) arrayList.remove(arrayList.size() - 1), null);
            intentCreateChooser.putExtra("android.intent.extra.INITIAL_INTENTS", (Parcelable[]) arrayList.toArray(new Parcelable[0]));
            this.f7cordova.getActivity().startActivity(intentCreateChooser);
        }
    }

    public void closeDialog() {
        this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.6
            @Override // java.lang.Runnable
            public void run() {
                WebView webView = InAppBrowser.this.inAppWebView;
                if (webView == null) {
                    return;
                }
                webView.setWebViewClient(new WebViewClient() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.6.1
                    @Override // android.webkit.WebViewClient
                    public void onPageFinished(WebView webView2, String str) {
                        if (InAppBrowser.this.dialog == null || InAppBrowser.this.f7cordova.getActivity().isFinishing()) {
                            return;
                        }
                        InAppBrowser.this.dialog.dismiss();
                        InAppBrowser.this.dialog = null;
                    }
                });
                webView.loadUrl("about:blank");
                try {
                    JSONObject jSONObject = new JSONObject();
                    jSONObject.put(Globalization.TYPE, InAppBrowser.EXIT_EVENT);
                    InAppBrowser.this.sendUpdate(jSONObject, false);
                } catch (JSONException unused) {
                    LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
                }
            }
        });
    }

    public void goBack() {
        if (this.inAppWebView.canGoBack()) {
            this.inAppWebView.goBack();
        }
    }

    public boolean canGoBack() {
        return this.inAppWebView.canGoBack();
    }

    public boolean hardwareBack() {
        return this.hadwareBackButton;
    }
    public void goForward() {
        if (this.inAppWebView.canGoForward()) {
            this.inAppWebView.goForward();
        }
    }
    public void navigate(String str) {
        ((InputMethodManager) this.f7cordova.getActivity().getSystemService("input_method")).hideSoftInputFromWindow(this.edittext.getWindowToken(), 0);
        if (!str.startsWith(Bridge.CAPACITOR_HTTP_SCHEME) && !str.startsWith("file:")) {
            this.inAppWebView.loadUrl("http://" + str, this.extraHeaders);
        } else {
            this.inAppWebView.loadUrl(str, this.extraHeaders);
        }
        this.inAppWebView.requestFocus();
    }
    public boolean getShowLocationBar() {
        return this.showLocationBar;
    }
    public static JSONObject loadCapacitorConfig(Context context) {
        try {
            InputStream inputStreamOpen = context.getAssets().open("capacitor.config.json");
            byte[] bArr = new byte[inputStreamOpen.available()];
            inputStreamOpen.read(bArr);
            inputStreamOpen.close();
            return new JSONObject(new String(bArr, StandardCharsets.UTF_8));
        } catch (Exception unused) {
            return null;
        }
    }

    public String showWebPage(final String str, HashMap<String, String> map) {
        this.showLocationBar = true;
        this.showZoomControls = true;
        this.openWindowHidden = false;
        this.mediaPlaybackRequiresUserGesture = false;
        this.avoidGoogleAuthDisallowedUserAgent = false;
        if (map != null) {
            String str2 = map.get(LOCATION);
            if (str2 != null) {
                this.showLocationBar = str2.equals("yes");
            }
            if (this.showLocationBar) {
                String str3 = map.get(HIDE_NAVIGATION);
                String str4 = map.get(HIDE_URL);
                if (str3 != null) {
                    this.hideNavigationButtons = str3.equals("yes");
                }
                if (str4 != null) {
                    this.hideUrlBar = str4.equals("yes");
                }
            }
            String str5 = map.get(ZOOM);
            if (str5 != null) {
                this.showZoomControls = str5.equals("yes");
            }
            String str6 = map.get(HIDDEN);
            if (str6 != null) {
                this.openWindowHidden = str6.equals("yes");
            }
            String str7 = map.get(HARDWARE_BACK_BUTTON);
            if (str7 != null) {
                this.hadwareBackButton = str7.equals("yes");
            } else {
                this.hadwareBackButton = DEFAULT_HARDWARE_BACK.booleanValue();
            }
            String str8 = map.get(MEDIA_PLAYBACK_REQUIRES_USER_ACTION);
            if (str8 != null) {
                this.mediaPlaybackRequiresUserGesture = str8.equals("yes");
            }
            String str9 = map.get(CLEAR_ALL_CACHE);
            if (str9 != null) {
                this.clearAllCache = str9.equals("yes");
            } else {
                String str10 = map.get(CLEAR_SESSION_CACHE);
                if (str10 != null) {
                    this.clearSessionCache = str10.equals("yes");
                }
            }
            String str11 = map.get(SHOULD_PAUSE);
            if (str11 != null) {
                this.shouldPauseInAppBrowser = str11.equals("yes");
            }
            String str12 = map.get(USER_WIDE_VIEW_PORT);
            if (str12 != null) {
                this.useWideViewPort = str12.equals("yes");
            }
            String str13 = map.get(CLOSE_BUTTON_CAPTION);
            if (str13 != null) {
                this.closeButtonCaption = str13;
            }
            String str14 = map.get(CLOSE_BUTTON_COLOR);
            if (str14 != null) {
                this.closeButtonColor = str14;
            }
            String str15 = map.get(LEFT_TO_RIGHT);
            this.leftToRight = str15 != null && str15.equals("yes");
            String str16 = map.get(TOOLBAR_COLOR);
            if (str16 != null) {
                this.toolbarColor = Color.parseColor(str16);
            }
            String str17 = map.get(NAVIGATION_COLOR);
            if (str17 != null) {
                this.navigationButtonColor = str17;
            }
            String str18 = map.get(FOOTER);
            if (str18 != null) {
                this.showFooter = str18.equals("yes");
            }
            String str19 = map.get(FOOTER_COLOR);
            if (str19 != null) {
                this.footerColor = str19;
            }
            if (map.get(BEFORELOAD) != null) {
                this.beforeload = map.get(BEFORELOAD);
            }
            String str20 = map.get(FULLSCREEN);
            if (str20 != null) {
                this.fullscreen = str20.equals("yes");
            }
            String str21 = map.get(AVOID_GOOGLE_AUTH_DISALLOWED_USER_AGENT);
            if (str21 != null) {
                this.avoidGoogleAuthDisallowedUserAgent = str21.equals("yes");
            }
        }
        final CordovaWebView cordovaWebView = this.webView;
        this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7
            private int dpToPixels(int i) {
                return (int) TypedValue.applyDimension(1, i, InAppBrowser.this.f7cordova.getActivity().getResources().getDisplayMetrics());
            }

            private View createCloseButton(int i) {
                View view;
                Resources resources = InAppBrowser.this.f7cordova.getActivity().getResources();
                if (InAppBrowser.this.closeButtonCaption != "") {
                    TextView textView = new TextView(InAppBrowser.this.f7cordova.getActivity());
                    textView.setText(InAppBrowser.this.closeButtonCaption);
                    textView.setTextSize(20.0f);
                    if (InAppBrowser.this.closeButtonColor != "") {
                        textView.setTextColor(Color.parseColor(InAppBrowser.this.closeButtonColor));
                    }
                    textView.setGravity(16);
                    textView.setPadding(dpToPixels(10), 0, dpToPixels(10), 0);
                    view = textView;
                } else {
                    ImageButton imageButton = new ImageButton(InAppBrowser.this.f7cordova.getActivity());
                    Drawable drawable = resources.getDrawable(resources.getIdentifier("ic_action_remove", "drawable", InAppBrowser.this.f7cordova.getActivity().getPackageName()));
                    if (InAppBrowser.this.closeButtonColor != "") {
                        imageButton.setColorFilter(Color.parseColor(InAppBrowser.this.closeButtonColor));
                    }
                    imageButton.setImageDrawable(drawable);
                    imageButton.setScaleType(ImageView.ScaleType.FIT_CENTER);
                    imageButton.getAdjustViewBounds();
                    view = imageButton;
                }
                RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-2, -1);
                if (InAppBrowser.this.leftToRight) {
                    layoutParams.addRule(9);
                } else {
                    layoutParams.addRule(11);
                }
                view.setLayoutParams(layoutParams);
                view.setBackground(null);
                view.setContentDescription("Close Button");
                view.setId(Integer.valueOf(i).intValue());
                view.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.1
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view2) {
                        InAppBrowser.this.closeDialog();
                    }
                });
                return view;
            }

            @Override // java.lang.Runnable
            public void run() {
                if (InAppBrowser.this.dialog != null) {
                    InAppBrowser.this.dialog.dismiss();
                }
                InAppBrowser.this.dialog = new InAppBrowserDialog(InAppBrowser.this.f7cordova.getActivity(), R.style.Theme.NoTitleBar);
                InAppBrowser.this.dialog.getWindow().getAttributes().windowAnimations = R.style.Animation.Dialog;
                InAppBrowser.this.dialog.requestWindowFeature(1);
                if (InAppBrowser.this.fullscreen) {
                    InAppBrowser.this.dialog.getWindow().setFlags(1024, 1024);
                }
                InAppBrowser.this.dialog.setCancelable(true);
                InAppBrowser.this.dialog.setInAppBroswer(InAppBrowser.this.getInAppBrowser());
                LinearLayout linearLayout = new LinearLayout(InAppBrowser.this.f7cordova.getActivity());
                linearLayout.setOrientation(1);
                RelativeLayout relativeLayout = new RelativeLayout(InAppBrowser.this.f7cordova.getActivity());
                relativeLayout.setBackgroundColor(InAppBrowser.this.toolbarColor);
                relativeLayout.setLayoutParams(new RelativeLayout.LayoutParams(-1, dpToPixels(44)));
                relativeLayout.setPadding(dpToPixels(2), dpToPixels(2), dpToPixels(2), dpToPixels(2));
                if (InAppBrowser.this.leftToRight) {
                    relativeLayout.setHorizontalGravity(3);
                } else {
                    relativeLayout.setHorizontalGravity(5);
                }
                relativeLayout.setVerticalGravity(48);
                RelativeLayout relativeLayout2 = new RelativeLayout(InAppBrowser.this.f7cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-2, -2);
                if (InAppBrowser.this.leftToRight) {
                    layoutParams.addRule(11);
                } else {
                    layoutParams.addRule(9);
                }
                relativeLayout2.setLayoutParams(layoutParams);
                relativeLayout2.setHorizontalGravity(3);
                relativeLayout2.setVerticalGravity(16);
                relativeLayout2.setId((InAppBrowser.this.leftToRight ? 5 : 1).intValue());
                ImageButton imageButton = new ImageButton(InAppBrowser.this.f7cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams2 = new RelativeLayout.LayoutParams(-2, -1);
                layoutParams2.addRule(5);
                imageButton.setLayoutParams(layoutParams2);
                imageButton.setContentDescription("Back Button");
                Integer num = 2;
                imageButton.setId(num.intValue());
                Resources resources = InAppBrowser.this.f7cordova.getActivity().getResources();
                Drawable drawable = resources.getDrawable(resources.getIdentifier("ic_action_previous_item", "drawable", InAppBrowser.this.f7cordova.getActivity().getPackageName()));
                if (InAppBrowser.this.navigationButtonColor != "") {
                    imageButton.setColorFilter(Color.parseColor(InAppBrowser.this.navigationButtonColor));
                }
                imageButton.setBackground(null);
                imageButton.setImageDrawable(drawable);
                imageButton.setScaleType(ImageView.ScaleType.FIT_CENTER);
                imageButton.setPadding(0, dpToPixels(10), 0, dpToPixels(10));
                imageButton.getAdjustViewBounds();
                imageButton.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.2
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        InAppBrowser.this.goBack();
                    }
                });
                ImageButton imageButton2 = new ImageButton(InAppBrowser.this.f7cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams3 = new RelativeLayout.LayoutParams(-2, -1);
                layoutParams3.addRule(1, 2);
                imageButton2.setLayoutParams(layoutParams3);
                imageButton2.setContentDescription("Forward Button");
                Integer num2 = 3;
                imageButton2.setId(num2.intValue());
                Drawable drawable2 = resources.getDrawable(resources.getIdentifier("ic_action_next_item", "drawable", InAppBrowser.this.f7cordova.getActivity().getPackageName()));
                if (InAppBrowser.this.navigationButtonColor != "") {
                    imageButton2.setColorFilter(Color.parseColor(InAppBrowser.this.navigationButtonColor));
                }
                imageButton2.setBackground(null);
                imageButton2.setImageDrawable(drawable2);
                imageButton2.setScaleType(ImageView.ScaleType.FIT_CENTER);
                imageButton2.setPadding(0, dpToPixels(10), 0, dpToPixels(10));
                imageButton2.getAdjustViewBounds();
                imageButton2.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.3
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        InAppBrowser.this.goForward();
                    }
                });
                InAppBrowser.this.edittext = new EditText(InAppBrowser.this.f7cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams4 = new RelativeLayout.LayoutParams(-1, -1);
                layoutParams4.addRule(1, 1);
                layoutParams4.addRule(0, 5);
                InAppBrowser.this.edittext.setLayoutParams(layoutParams4);
                Integer num3 = 4;
                InAppBrowser.this.edittext.setId(num3.intValue());
                InAppBrowser.this.edittext.setSingleLine(true);
                InAppBrowser.this.edittext.setText(str);
                InAppBrowser.this.edittext.setInputType(16);
                InAppBrowser.this.edittext.setImeOptions(2);
                InAppBrowser.this.edittext.setInputType(0);
                InAppBrowser.this.edittext.setOnKeyListener(new View.OnKeyListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.4
                    @Override // android.view.View.OnKeyListener
                    public boolean onKey(View view, int i, KeyEvent keyEvent) {
                        if (keyEvent.getAction() != 0 || i != 66) {
                            return false;
                        }
                        InAppBrowser.this.navigate(InAppBrowser.this.edittext.getText().toString());
                        return true;
                    }
                });
                relativeLayout.addView(createCloseButton(InAppBrowser.this.leftToRight ? 1 : 5));
                RelativeLayout relativeLayout3 = new RelativeLayout(InAppBrowser.this.f7cordova.getActivity());
                relativeLayout3.setBackgroundColor(InAppBrowser.this.footerColor != "" ? Color.parseColor(InAppBrowser.this.footerColor) : -3355444);
                RelativeLayout.LayoutParams layoutParams5 = new RelativeLayout.LayoutParams(-1, dpToPixels(44));
                layoutParams5.addRule(12, -1);
                relativeLayout3.setLayoutParams(layoutParams5);
                if (InAppBrowser.this.closeButtonCaption != "") {
                    relativeLayout3.setPadding(dpToPixels(8), dpToPixels(8), dpToPixels(8), dpToPixels(8));
                }
                relativeLayout3.setHorizontalGravity(3);
                relativeLayout3.setVerticalGravity(80);
                relativeLayout3.addView(createCloseButton(7));
                InAppBrowser.this.inAppWebView = new WebView(InAppBrowser.this.f7cordova.getActivity());
                InAppBrowser.this.inAppWebView.setLayoutParams(new LinearLayout.LayoutParams(-1, -1));
                Integer num4 = 6;
                InAppBrowser.this.inAppWebView.setId(num4.intValue());
                InAppBrowser.this.inAppWebView.setWebChromeClient(new InAppChromeClient(cordovaWebView) { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.5
                    @Override // android.webkit.WebChromeClient
                    public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> valueCallback, WebChromeClient.FileChooserParams fileChooserParams) {
                        if (WBH5FaceVerifySDK.getInstance(InAppBrowser.this.f7cordova, this).recordVideoForApi21(webView, valueCallback, InAppBrowser.this.f7cordova.getActivity(), fileChooserParams)) {
                            return true;
                        }
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 5.0+");
                        if (InAppBrowser.this.mUploadCallbackLollipop != null) {
                            InAppBrowser.this.mUploadCallbackLollipop.onReceiveValue(null);
                        }
                        InAppBrowser.this.mUploadCallbackLollipop = valueCallback;
                        Intent intent = new Intent("android.intent.action.GET_CONTENT");
                        intent.addCategory("android.intent.category.OPENABLE");
                        intent.setType("*/*");
                        InAppBrowser.this.f7cordova.startActivityForResult(InAppBrowser.this, Intent.createChooser(intent, "Select File"), 2);
                        return true;
                    }

                    public void openFileChooser(ValueCallback<Uri> valueCallback, String str22, String str23) {
                        if (WBH5FaceVerifySDK.getInstance(InAppBrowser.this.f7cordova, this).recordVideoForApiBelow21(valueCallback, str22, InAppBrowser.this.f7cordova.getActivity())) {
                            return;
                        }
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 4.1+");
                        openFileChooser(valueCallback, str22);
                    }

                    public void openFileChooser(ValueCallback<Uri> valueCallback, String str22) {
                        if (WBH5FaceVerifySDK.getInstance(InAppBrowser.this.f7cordova, this).recordVideoForApiBelow21(valueCallback, str22, InAppBrowser.this.f7cordova.getActivity())) {
                            return;
                        }
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 3.0+");
                        InAppBrowser.this.mUploadCallback = valueCallback;
                        Intent intent = new Intent("android.intent.action.GET_CONTENT");
                        intent.addCategory("android.intent.category.OPENABLE");
                        InAppBrowser.this.f7cordova.startActivityForResult(InAppBrowser.this, Intent.createChooser(intent, "Select File"), 1);
                    }
                });
                InAppBrowser inAppBrowser = InAppBrowser.this;
                InAppBrowser inAppBrowser2 = InAppBrowser.this;
                inAppBrowser.currentClient = inAppBrowser2.new InAppBrowserClient(cordovaWebView, inAppBrowser2.edittext, InAppBrowser.this.beforeload);
                InAppBrowser.this.inAppWebView.setWebViewClient(InAppBrowser.this.currentClient);
                WebSettings settings = InAppBrowser.this.inAppWebView.getSettings();
                try {
                    settings.setMixedContentMode(0);
                    CookieManager.getInstance().setAcceptThirdPartyCookies(InAppBrowser.this.inAppWebView, true);
                } catch (NoSuchMethodError unused) {
                }
                settings.setJavaScriptEnabled(true);
                settings.setJavaScriptCanOpenWindowsAutomatically(true);
                settings.setBuiltInZoomControls(InAppBrowser.this.showZoomControls);
                settings.setPluginState(WebSettings.PluginState.ON);
                settings.setMediaPlaybackRequiresUserGesture(InAppBrowser.this.mediaPlaybackRequiresUserGesture);
                InAppBrowser.this.inAppWebView.addJavascriptInterface(new Object() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.1JsObject
                    @JavascriptInterface
                    public void postMessage(String str22) {
                        try {
                            JSONObject jSONObject = new JSONObject();
                            jSONObject.put(Globalization.TYPE, "message");
                            jSONObject.put("data", new JSONObject(str22));
                            InAppBrowser.this.sendUpdate(jSONObject, true);
                        } catch (JSONException unused2) {
                            LOG.e(InAppBrowser.LOG_TAG, "data object passed to postMessage has caused a JSON error.");
                        }
                    }
                }, "cordova_iab");
                String string = InAppBrowser.this.preferences.getString("OverrideUserAgent", null);
                String string2 = InAppBrowser.this.preferences.getString("AppendUserAgent", null);
                JSONObject jSONObjectLoadCapacitorConfig = InAppBrowser.loadCapacitorConfig(InAppBrowser.this.f7cordova.getActivity().getApplicationContext());
                if (jSONObjectLoadCapacitorConfig != null) {
                    if (string == null) {
                        string = jSONObjectLoadCapacitorConfig.optString("overrideUserAgent", null);
                    }
                    if (string2 == null) {
                        string2 = jSONObjectLoadCapacitorConfig.optString("appendUserAgent", null);
                    }
                }
                if (string != null) {
                    settings.setUserAgentString(string);
                }
                if (string2 != null) {
                    settings.setUserAgentString(settings.getUserAgentString() + string2);
                }
                if (InAppBrowser.this.avoidGoogleAuthDisallowedUserAgent) {
                    settings.setUserAgentString(settings.getUserAgentString().replaceAll("(?<!\\w)wv(?!\\w)", "").replaceAll("Chrome/[\\d.]+", "Chrome/92.0.4515.105"));
                }
                Bundle extras = InAppBrowser.this.f7cordova.getActivity().getIntent().getExtras();
                if (extras == null ? true : extras.getBoolean("InAppBrowserStorageEnabled", true)) {
                    settings.setDatabasePath(InAppBrowser.this.f7cordova.getActivity().getApplicationContext().getDir("inAppBrowserDB", 0).getPath());
                    settings.setDatabaseEnabled(true);
                }
                settings.setDomStorageEnabled(true);
                if (!InAppBrowser.this.clearAllCache) {
                    if (InAppBrowser.this.clearSessionCache) {
                        CookieManager.getInstance().removeSessionCookie();
                    }
                } else {
                    CookieManager.getInstance().removeAllCookie();
                }
                CookieManager.getInstance().setAcceptThirdPartyCookies(InAppBrowser.this.inAppWebView, true);
                WBH5FaceVerifySDK.getInstance(InAppBrowser.this.f7cordova, this).setWebViewSettings(InAppBrowser.this.inAppWebView, InAppBrowser.this.inAppWebView.getContext());
                InAppBrowser.this.inAppWebView.loadUrl(str, InAppBrowser.this.extraHeaders);
                Integer num5 = 6;
                InAppBrowser.this.inAppWebView.setId(num5.intValue());
                InAppBrowser.this.inAppWebView.getSettings().setLoadWithOverviewMode(true);
                InAppBrowser.this.inAppWebView.getSettings().setUseWideViewPort(InAppBrowser.this.useWideViewPort);
                InAppBrowser.this.inAppWebView.getSettings().setSupportMultipleWindows(true);
                InAppBrowser.this.inAppWebView.requestFocus();
                InAppBrowser.this.inAppWebView.requestFocusFromTouch();
                relativeLayout2.addView(imageButton);
                relativeLayout2.addView(imageButton2);
                if (!InAppBrowser.this.hideNavigationButtons) {
                    relativeLayout.addView(relativeLayout2);
                }
                if (!InAppBrowser.this.hideUrlBar) {
                    relativeLayout.addView(InAppBrowser.this.edittext);
                }
                if (InAppBrowser.this.getShowLocationBar()) {
                    linearLayout.addView(relativeLayout);
                }
                RelativeLayout relativeLayout4 = new RelativeLayout(InAppBrowser.this.f7cordova.getActivity());
                relativeLayout4.addView(InAppBrowser.this.inAppWebView);
                linearLayout.addView(relativeLayout4);
                if (InAppBrowser.this.showFooter) {
                    relativeLayout4.addView(relativeLayout3);
                }
                WindowManager.LayoutParams layoutParams6 = new WindowManager.LayoutParams();
                layoutParams6.copyFrom(InAppBrowser.this.dialog.getWindow().getAttributes());
                layoutParams6.width = -1;
                layoutParams6.height = -1;
                if (InAppBrowser.this.dialog != null) {
                    InAppBrowser.this.dialog.setContentView(linearLayout);
                    InAppBrowser.this.dialog.show();
                    InAppBrowser.this.dialog.getWindow().setAttributes(layoutParams6);
                }
                if (!InAppBrowser.this.openWindowHidden || InAppBrowser.this.dialog == null) {
                    return;
                }
                InAppBrowser.this.dialog.hide();
            }
        });
        return "";
    }
    public void sendUpdate(JSONObject jSONObject, boolean z) {
        sendUpdate(jSONObject, z, PluginResult.Status.OK);
    }
    public void sendUpdate(JSONObject jSONObject, boolean z, PluginResult.Status status) {
        if (this.callbackContext != null) {
            PluginResult pluginResult = new PluginResult(status, jSONObject);
            pluginResult.setKeepCallback(z);
            this.callbackContext.sendPluginResult(pluginResult);
            if (z) {
                return;
            }
            this.callbackContext = null;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, Intent intent) {
        ValueCallback<Uri[]> valueCallback;
        LOG.d(LOG_TAG, "onActivityResult (For Android >= 5.0)");
        if (i != 2 || (valueCallback = this.mUploadCallbackLollipop) == null) {
            super.onActivityResult(i, i2, intent);
        } else {
            valueCallback.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(i2, intent));
            this.mUploadCallbackLollipop = null;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) {
        WBH5FaceVerifySDK.getInstance(this.f7cordova, this).onRequestPermissionsResult(i, strArr, iArr);
    }

    public class InAppBrowserClient extends WebViewClient {
        String beforeload;
        EditText edittext;
        boolean waitForBeforeload;
        CordovaWebView webView;

        public WebResourceResponse shouldInterceptRequest(String str, WebResourceResponse webResourceResponse, String str2) {
            return webResourceResponse;
        }

        public InAppBrowserClient(CordovaWebView cordovaWebView, EditText editText, String str) {
            this.webView = cordovaWebView;
            this.edittext = editText;
            this.beforeload = str;
            this.waitForBeforeload = str != null;
        }

        @Override // android.webkit.WebViewClient
        public boolean shouldOverrideUrlLoading(WebView webView, String str) {
            return shouldOverrideUrlLoading(str, (String) null);
        }

        @Override // android.webkit.WebViewClient
        public boolean shouldOverrideUrlLoading(WebView webView, WebResourceRequest webResourceRequest) {
            return shouldOverrideUrlLoading(webResourceRequest.getUrl().toString(), webResourceRequest.getMethod());
        }

        /* high-level source view WARN: Removed duplicated region for block: B:102:0x006a A[EXC_TOP_SPLITTER, SYNTHETIC] */
        /* high-level source view WARN: Removed duplicated region for block: B:108:0x00b3 A[EXC_TOP_SPLITTER, SYNTHETIC] */
        /* high-level source view WARN: Removed duplicated region for block: B:43:0x00f0  */
        /* high-level source view WARN: Removed duplicated region for block: B:98:0x0261  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
        */
        public boolean shouldOverrideUrlLoading(String str, String str2) {
            boolean z;
            String str3;
            boolean z2;
            String strSubstring;
            String string;
            boolean z3 = false;
            z3 = false;
            z3 = false;
            z3 = false;
            z3 = false;
            z3 = false;
            z3 = false;
            if ((this.beforeload.equals("yes") && str2 == null) || ((this.beforeload.equals("yes") && !str2.equals("POST")) || (this.beforeload.equals("get") && (str2 == null || str2.equals("GET"))))) {
                z = true;
            } else {
                if (this.beforeload.equals("post") && (str2 == null || str2.equals("POST"))) {
                    str3 = "beforeload doesn't yet support POST requests";
                    z2 = false;
                    if (!z2 && this.waitForBeforeload && sendBeforeLoad(str, str2)) {
                        return true;
                    }
                    if (str3 != null) {
                        try {
                            LOG.e(InAppBrowser.LOG_TAG, str3);
                            JSONObject jSONObject = new JSONObject();
                            jSONObject.put(Globalization.TYPE, InAppBrowser.LOAD_ERROR_EVENT);
                            jSONObject.put("url", str);
                            jSONObject.put("code", -1);
                            jSONObject.put("message", str3);
                            InAppBrowser.this.sendUpdate(jSONObject, true, PluginResult.Status.ERROR);
                        } catch (Exception e) {
                            LOG.e(InAppBrowser.LOG_TAG, "Error sending loaderror for " + str + ": " + e.toString());
                        }
                    }
                    if (!str.startsWith("tel:")) {
                        try {
                            Intent intent = new Intent("android.intent.action.DIAL");
                            intent.setData(Uri.parse(str));
                            InAppBrowser.this.f7cordova.getActivity().startActivity(intent);
                            z3 = true;
                        } catch (ActivityNotFoundException e2) {
                            LOG.e(InAppBrowser.LOG_TAG, "Error dialing " + str + ": " + e2.toString());
                        }
                    } else if (str.startsWith("geo:") || str.startsWith(MailTo.MAILTO_SCHEME) || str.startsWith("market:") || str.startsWith("intent:")) {
                        try {
                            if (str.startsWith("intent:") && str.indexOf("connectpro") > -1) {
                                StringBuilder sb = new StringBuilder(str);
                                sb.replace(0, 6, "connectpro");
                                str = sb.toString();
                            }
                            Intent intent2 = new Intent("android.intent.action.VIEW");
                            intent2.setData(Uri.parse(str));
                            InAppBrowser.this.f7cordova.getActivity().startActivity(intent2);
                            z3 = true;
                        } catch (ActivityNotFoundException e3) {
                            LOG.e(InAppBrowser.LOG_TAG, "Error with " + str + ": " + e3.toString());
                        }
                    } else if (str.startsWith("sms:")) {
                        try {
                            Intent intent3 = new Intent("android.intent.action.VIEW");
                            int iIndexOf = str.indexOf(63);
                            if (iIndexOf == -1) {
                                strSubstring = str.substring(4);
                            } else {
                                strSubstring = str.substring(4, iIndexOf);
                                String query = Uri.parse(str).getQuery();
                                if (query != null && query.startsWith("body=")) {
                                    intent3.putExtra("sms_body", query.substring(5));
                                }
                            }
                            intent3.setData(Uri.parse("sms:" + strSubstring));
                            intent3.putExtra("address", strSubstring);
                            intent3.setType("vnd.android-dir/mms-sms");
                            InAppBrowser.this.f7cordova.getActivity().startActivity(intent3);
                            z3 = true;
                        } catch (ActivityNotFoundException e4) {
                            LOG.e(InAppBrowser.LOG_TAG, "Error sending sms " + str + ":" + e4.toString());
                        }
                    } else if (!str.startsWith("http:") && !str.startsWith("https:") && str.matches("^[A-Za-z0-9+.-]*://.*?$")) {
                        if (InAppBrowser.this.allowedSchemes == null && (string = InAppBrowser.this.preferences.getString("AllowedSchemes", null)) != null) {
                            InAppBrowser.this.allowedSchemes = string.split(",");
                        }
                        if (InAppBrowser.this.allowedSchemes != null) {
                            boolean z4 = false;
                            for (String str4 : InAppBrowser.this.allowedSchemes) {
                                if (str.startsWith(str4)) {
                                    try {
                                        JSONObject jSONObject2 = new JSONObject();
                                        jSONObject2.put(Globalization.TYPE, "customscheme");
                                        jSONObject2.put("url", str);
                                        InAppBrowser.this.sendUpdate(jSONObject2, true);
                                        z4 = true;
                                    } catch (JSONException unused) {
                                        LOG.e(InAppBrowser.LOG_TAG, "Custom Scheme URI passed in has caused a JSON error.");
                                    }
                                }
                            }
                            z3 = z4;
                        }
                    }
                    if (z2) {
                        this.waitForBeforeload = true;
                    }
                    return z3;
                }
                z = false;
            }
            str3 = null;
            z2 = z;
            if (!z2) {
            }
            if (str3 != null) {
            }
            if (!str.startsWith("tel:")) {
            }
            if (z2) {
            }
            return z3;
        }

        private boolean sendBeforeLoad(String str, String str2) {
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, InAppBrowser.BEFORELOAD);
                jSONObject.put("url", str);
                if (str2 != null) {
                    jSONObject.put("method", str2);
                }
                InAppBrowser.this.sendUpdate(jSONObject, true);
                return true;
            } catch (JSONException unused) {
                LOG.e(InAppBrowser.LOG_TAG, "URI passed in has caused a JSON error.");
                return false;
            }
        }

        @Override // android.webkit.WebViewClient
        public WebResourceResponse shouldInterceptRequest(WebView webView, String str) {
            return shouldInterceptRequest(str, super.shouldInterceptRequest(webView, str), null);
        }

        @Override // android.webkit.WebViewClient
        public WebResourceResponse shouldInterceptRequest(WebView webView, WebResourceRequest webResourceRequest) {
            return shouldInterceptRequest(webResourceRequest.getUrl().toString(), super.shouldInterceptRequest(webView, webResourceRequest), webResourceRequest.getMethod());
        }

        @Override // android.webkit.WebViewClient
        public void onPageStarted(WebView webView, String str, Bitmap bitmap) {
            super.onPageStarted(webView, str, bitmap);
            if (!str.startsWith("http:") && !str.startsWith("https:") && !str.startsWith("file:")) {
                LOG.e(InAppBrowser.LOG_TAG, "Possible Uncaught/Unknown URI");
                str = "http://" + str;
            }
            if (!str.equals(this.edittext.getText().toString())) {
                this.edittext.setText(str);
            }
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, InAppBrowser.LOAD_START_EVENT);
                jSONObject.put("url", str);
                InAppBrowser.this.sendUpdate(jSONObject, true);
            } catch (JSONException unused) {
                LOG.e(InAppBrowser.LOG_TAG, "URI passed in has caused a JSON error.");
            }
        }

        @Override // android.webkit.WebViewClient
        public void onPageFinished(WebView webView, String str) {
            super.onPageFinished(webView, str);
            InAppBrowser.this.injectDeferredObject("window.webkit={messageHandlers:{cordova_iab:cordova_iab}}", null);
            CookieManager.getInstance().flush();
            webView.clearFocus();
            webView.requestFocus();
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, InAppBrowser.LOAD_STOP_EVENT);
                jSONObject.put("url", str);
                InAppBrowser.this.sendUpdate(jSONObject, true);
            } catch (JSONException unused) {
                LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
            }
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedError(WebView webView, int i, String str, String str2) {
            super.onReceivedError(webView, i, str, str2);
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, InAppBrowser.LOAD_ERROR_EVENT);
                jSONObject.put("url", str2);
                jSONObject.put("code", i);
                jSONObject.put("message", str);
                InAppBrowser.this.sendUpdate(jSONObject, true, PluginResult.Status.ERROR);
            } catch (JSONException unused) {
                LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
            }
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedSslError(WebView webView, SslErrorHandler sslErrorHandler, SslError sslError) {
            String str;
            super.onReceivedSslError(webView, sslErrorHandler, sslError);
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, InAppBrowser.LOAD_ERROR_EVENT);
                jSONObject.put("url", sslError.getUrl());
                jSONObject.put("code", 0);
                jSONObject.put("sslerror", sslError.getPrimaryError());
                int primaryError = sslError.getPrimaryError();
                if (primaryError == 0) {
                    str = "The certificate is not yet valid";
                } else if (primaryError == 1) {
                    str = "The certificate has expired";
                } else if (primaryError == 2) {
                    str = "Hostname mismatch";
                } else if (primaryError == 3) {
                    str = "The certificate authority is not trusted";
                } else if (primaryError == 4) {
                    str = "The date of the certificate is invalid";
                } else {
                    str = "A generic error occurred";
                }
                jSONObject.put("message", str);
                InAppBrowser.this.sendUpdate(jSONObject, true, PluginResult.Status.ERROR);
            } catch (JSONException unused) {
                LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
            }
            sslErrorHandler.cancel();
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedHttpAuthRequest(WebView webView, HttpAuthHandler httpAuthHandler, String str, String str2) {
            PluginManager pluginManager;
            try {
                pluginManager = (PluginManager) this.webView.getClass().getMethod("getPluginManager", new Class[0]).invoke(this.webView, new Object[0]);
            } catch (IllegalAccessException e) {
                LOG.d(InAppBrowser.LOG_TAG, e.getLocalizedMessage());
                pluginManager = null;
            } catch (NoSuchMethodException e2) {
                LOG.d(InAppBrowser.LOG_TAG, e2.getLocalizedMessage());
                pluginManager = null;
            } catch (InvocationTargetException e3) {
                LOG.d(InAppBrowser.LOG_TAG, e3.getLocalizedMessage());
                pluginManager = null;
            }
            if (pluginManager == null) {
                try {
                    pluginManager = (PluginManager) this.webView.getClass().getField("pluginManager").get(this.webView);
                } catch (IllegalAccessException e4) {
                    LOG.d(InAppBrowser.LOG_TAG, e4.getLocalizedMessage());
                } catch (NoSuchFieldException e5) {
                    LOG.d(InAppBrowser.LOG_TAG, e5.getLocalizedMessage());
                }
            }
            if (pluginManager == null || !pluginManager.onReceivedHttpAuthRequest(this.webView, new CordovaHttpAuthHandler(httpAuthHandler), str, str2)) {
                super.onReceivedHttpAuthRequest(webView, httpAuthHandler, str, str2);
            }
        }
    }
}

