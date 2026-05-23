package org.apache.cordova.inappbrowser;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;
import androidx.core.view.PointerIconCompat;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
public class WBH5FaceVerifySDK {
    private static final String NETWORK_2G = "NETWORK_2G";
    private static final String NETWORK_3G = "NETWORK_3G";
    private static final String NETWORK_4G = "NETWORK_4G";
    private static final String NETWORK_MOBILE = "NETWORK_MOBILE";
    private static final String NETWORK_NONE = "NETWORK_NONE";
    private static final String NETWORK_WIFI = "NETWORK_WIFI";
    private static final int VIDEO_REQUEST = 17;
    private static WBH5FaceVerifySDK instance;
    private final Activity activity;
    private final Context context;
    private final CordovaInterface f13cordova;
    private ValueCallback<Uri[]> mUploadCallbackAboveL;
    private ValueCallback<Uri> mUploadMessage;
    private final CordovaPlugin plugin;
    private final int VIDEO_WITH_CAMERA = 1001;
    private final int REQUEST_CODE_CAMERA = PointerIconCompat.TYPE_HELP;
    private final int REQUEST_CODE_WRITE_EXTERNAL_STORAGE = PointerIconCompat.TYPE_WAIT;

    private static String getNetWorkState(Context context) {
        NetworkInfo activeNetworkInfo;
        NetworkInfo.State state;
        ConnectivityManager connectivityManager = (ConnectivityManager) context.getSystemService("connectivity");
        if (connectivityManager != null && (activeNetworkInfo = connectivityManager.getActiveNetworkInfo()) != null && activeNetworkInfo.isAvailable()) {
            NetworkInfo networkInfo = connectivityManager.getNetworkInfo(1);
            if (networkInfo != null && (state = networkInfo.getState()) != null && (state == NetworkInfo.State.CONNECTED || state == NetworkInfo.State.CONNECTING)) {
                return NETWORK_WIFI;
            }
            NetworkInfo networkInfo2 = connectivityManager.getNetworkInfo(0);
            if (networkInfo2 != null) {
                NetworkInfo.State state2 = networkInfo2.getState();
                String subtypeName = networkInfo2.getSubtypeName();
                if (state2 != null && (state2 == NetworkInfo.State.CONNECTED || state2 == NetworkInfo.State.CONNECTING)) {
                    switch (activeNetworkInfo.getSubtype()) {
                        case 1:
                        case 2:
                        case 4:
                        case 7:
                        case 11:
                            return NETWORK_2G;
                        case 3:
                        case 5:
                        case 6:
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 14:
                        case 15:
                            return NETWORK_3G;
                        case 13:
                            return NETWORK_4G;
                        default:
                            return (subtypeName.equalsIgnoreCase("TD-SCDMA") || subtypeName.equalsIgnoreCase("WCDMA") || subtypeName.equalsIgnoreCase("CDMA2000")) ? NETWORK_3G : NETWORK_MOBILE;
                    }
                }
            }
        }
        return NETWORK_NONE;
    }

    public static synchronized WBH5FaceVerifySDK getInstance(CordovaInterface cordovaInterface, InAppBrowser inAppBrowser) {
        if (instance == null) {
            instance = new WBH5FaceVerifySDK(cordovaInterface, inAppBrowser);
        }
        return instance;
    }

    private WBH5FaceVerifySDK(CordovaInterface cordovaInterface, InAppBrowser inAppBrowser) {
        this.context = cordovaInterface.getActivity().getApplicationContext();
        this.activity = cordovaInterface.getActivity();
        this.f13cordova = cordovaInterface;
        this.plugin = inAppBrowser;
    }

    public void setWebViewSettings(WebView webView, Context context) {
        if (webView == null) {
            return;
        }
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setTextZoom(100);
        settings.setAllowFileAccess(true);
        settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
        settings.setSupportZoom(true);
        settings.setBuiltInZoomControls(true);
        settings.setUseWideViewPort(true);
        settings.setSupportMultipleWindows(false);
        settings.setLoadWithOverviewMode(true);
        settings.setDatabaseEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setGeolocationEnabled(true);
        settings.setCacheMode(-1);
        settings.setDatabasePath(context.getDir("databases", 0).getPath());
        settings.setGeolocationDatabasePath(context.getDir("geolocation", 0).getPath());
        settings.setPluginState(WebSettings.PluginState.ON_DEMAND);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        settings.setAllowUniversalAccessFromFileURLs(true);
        webView.removeJavascriptInterface("searchBoxJavaBridge_");
        String userAgentString = settings.getUserAgentString();
        try {
            settings.setUserAgentString(userAgentString + ";webank/h5face;webank/1.0;netType:" + getNetWorkState(context) + ";appVersion:" + context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode + ";packageName:" + context.getPackageName());
        } catch (PackageManager.NameNotFoundException e) {
            settings.setUserAgentString(userAgentString + ";webank/h5face;webank/1.0");
            e.printStackTrace();
        }
    }

    public boolean receiveH5FaceVerifyResult(int i, int i2, Intent intent) {
        if (i != 17) {
            return false;
        }
        if (this.mUploadMessage == null && this.mUploadCallbackAboveL == null) {
            return true;
        }
        Uri data = (intent == null || i2 != -1) ? null : intent.getData();
        Uri[] uriArr = data == null ? null : new Uri[]{data};
        ValueCallback<Uri[]> valueCallback = this.mUploadCallbackAboveL;
        if (valueCallback != null) {
            valueCallback.onReceiveValue(uriArr);
            setmUploadCallbackAboveL(null);
        } else {
            this.mUploadMessage.onReceiveValue(data);
            setmUploadMessage(null);
        }
        return true;
    }

    public boolean recordVideoForApiBelow21(ValueCallback<Uri> valueCallback, String str, Activity activity) {
        if (!"video/webank".equals(str)) {
            return false;
        }
        setmUploadMessage(valueCallback);
        recordVideo();
        return true;
    }

    public boolean recordVideoForApi21(WebView webView, ValueCallback<Uri[]> valueCallback, Activity activity, WebChromeClient.FileChooserParams fileChooserParams) {
        Log.d("faceVerify", "accept is " + fileChooserParams.getAcceptTypes()[0] + "---url---" + webView.getUrl());
        if (!"video/webank".equals(fileChooserParams.getAcceptTypes()[0]) && !webView.getUrl().startsWith("https://ida.webank.com/")) {
            return false;
        }
        setmUploadCallbackAboveL(valueCallback);
        recordVideo();
        return true;
    }

    private void recordVideo() {
        requestPermission();
    }

    private void recordVideoPersmission() {
        try {
            Intent intent = new Intent("android.media.action.VIDEO_CAPTURE");
            intent.putExtra("android.intent.extra.videoQuality", 1);
            intent.addFlags(1);
            intent.putExtra("android.intent.extras.CAMERA_FACING", 1);
            this.activity.startActivityForResult(intent, 17);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setmUploadMessage(ValueCallback<Uri> valueCallback) {
        this.mUploadMessage = valueCallback;
    }

    private void setmUploadCallbackAboveL(ValueCallback<Uri[]> valueCallback) {
        this.mUploadCallbackAboveL = valueCallback;
    }

    private boolean hasWriteExternalStoragePermission() {
        if (Build.VERSION.SDK_INT >= 33) {
            return true;
        }
        return this.f13cordova.hasPermission(PhotoViewer.WRITE);
    }

    private String[] getWriteExternalStoragePermissions() {
        return new String[]{PhotoViewer.WRITE};
    }

    private String[] getRequestPermissions() {
        String[] writeExternalStoragePermissions = getWriteExternalStoragePermissions();
        String[] strArr = new String[writeExternalStoragePermissions.length + 1];
        System.arraycopy(writeExternalStoragePermissions, 0, strArr, 0, writeExternalStoragePermissions.length);
        System.arraycopy(new String[]{"android.permission.CAMERA"}, 0, strArr, writeExternalStoragePermissions.length, 1);
        return strArr;
    }

    public void requestPermission() {
        if (hasWriteExternalStoragePermission() && this.f13cordova.hasPermission("android.permission.CAMERA")) {
            recordVideoPersmission();
        } else {
            this.f13cordova.requestPermissions(this.plugin, PointerIconCompat.TYPE_HELP, getRequestPermissions());
        }
    }

    public void onRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        if (i == 1003 || i == 1004) {
            for (int i2 = 0; i2 < strArr.length; i2++) {
                if (iArr[i2] == 0) {
                    recordVideoPersmission();
                } else {
                    Log.e("InAppBrowser", "Permission failed:" + strArr[i2]);
                    Toast.makeText(this.activity, "权限申请失败", 0).show();
                }
            }
        }
    }

    public static WBH5FaceVerifySDK getInstanceWithoutCreate() {
        return instance;
    }
}

