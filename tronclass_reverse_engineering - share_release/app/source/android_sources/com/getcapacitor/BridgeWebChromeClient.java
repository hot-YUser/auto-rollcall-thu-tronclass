package com.getcapacitor;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.GeolocationPermissions;
import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.MimeTypeMap;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import com.getcapacitor.Dialogs;
import com.getcapacitor.plugin.camera.CameraUtils;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
public class BridgeWebChromeClient extends WebChromeClient {
    static final int FILE_CHOOSER = 9007;
    static final int FILE_CHOOSER_CAMERA_PERMISSION = 9010;
    static final int FILE_CHOOSER_IMAGE_CAPTURE = 9008;
    static final int FILE_CHOOSER_VIDEO_CAPTURE = 9009;
    static final int GET_USER_MEDIA_PERMISSIONS = 9011;
    private Bridge bridge;

    public BridgeWebChromeClient(Bridge bridge) {
        this.bridge = bridge;
    }

    @Override // android.webkit.WebChromeClient
    public void onShowCustomView(View view, WebChromeClient.CustomViewCallback customViewCallback) {
        customViewCallback.onCustomViewHidden();
        super.onShowCustomView(view, customViewCallback);
    }

    @Override // android.webkit.WebChromeClient
    public void onHideCustomView() {
        super.onHideCustomView();
    }

    @Override // android.webkit.WebChromeClient
    public void onPermissionRequest(final PermissionRequest permissionRequest) {
        ArrayList arrayList = new ArrayList();
        if (Arrays.asList(permissionRequest.getResources()).contains("android.webkit.resource.VIDEO_CAPTURE")) {
            arrayList.add("android.permission.CAMERA");
        }
        if (Arrays.asList(permissionRequest.getResources()).contains("android.webkit.resource.AUDIO_CAPTURE")) {
            arrayList.add("android.permission.MODIFY_AUDIO_SETTINGS");
            arrayList.add("android.permission.RECORD_AUDIO");
        }
        if (!arrayList.isEmpty()) {
            this.bridge.cordovaInterface.requestPermissions(new CordovaPlugin() { // from class: com.getcapacitor.BridgeWebChromeClient.1
                @Override // org.apache.cordova.CordovaPlugin
                public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
                    if (9011 == i) {
                        for (int i2 : iArr) {
                            if (i2 == -1) {
                                permissionRequest.deny();
                                return;
                            }
                        }
                        PermissionRequest permissionRequest2 = permissionRequest;
                        permissionRequest2.grant(permissionRequest2.getResources());
                    }
                }
            }, 9011, (String[]) arrayList.toArray(new String[0]));
        } else {
            permissionRequest.grant(permissionRequest.getResources());
        }
    }

    @Override // android.webkit.WebChromeClient
    public boolean onJsAlert(WebView webView, String str, String str2, final JsResult jsResult) {
        if (this.bridge.getActivity().isFinishing()) {
            return true;
        }
        Dialogs.alert(webView.getContext(), str2, new Dialogs.OnResultListener() { // from class: com.getcapacitor.BridgeWebChromeClient.2
            @Override // com.getcapacitor.Dialogs.OnResultListener
            public void onResult(boolean z, boolean z2, String str3) {
                if (z) {
                    jsResult.confirm();
                } else {
                    jsResult.cancel();
                }
            }
        });
        return true;
    }

    @Override // android.webkit.WebChromeClient
    public boolean onJsConfirm(WebView webView, String str, String str2, final JsResult jsResult) {
        if (this.bridge.getActivity().isFinishing()) {
            return true;
        }
        Dialogs.confirm(webView.getContext(), str2, new Dialogs.OnResultListener() { // from class: com.getcapacitor.BridgeWebChromeClient.3
            @Override // com.getcapacitor.Dialogs.OnResultListener
            public void onResult(boolean z, boolean z2, String str3) {
                if (z) {
                    jsResult.confirm();
                } else {
                    jsResult.cancel();
                }
            }
        });
        return true;
    }

    @Override // android.webkit.WebChromeClient
    public boolean onJsPrompt(WebView webView, String str, String str2, String str3, final JsPromptResult jsPromptResult) {
        if (this.bridge.getActivity().isFinishing()) {
            return true;
        }
        Dialogs.prompt(webView.getContext(), str2, new Dialogs.OnResultListener() { // from class: com.getcapacitor.BridgeWebChromeClient.4
            @Override // com.getcapacitor.Dialogs.OnResultListener
            public void onResult(boolean z, boolean z2, String str4) {
                if (z) {
                    jsPromptResult.confirm(str4);
                } else {
                    jsPromptResult.cancel();
                }
            }
        });
        return true;
    }

    @Override // android.webkit.WebChromeClient
    public void onGeolocationPermissionsShowPrompt(String str, GeolocationPermissions.Callback callback) {
        super.onGeolocationPermissionsShowPrompt(str, callback);
        Logger.debug("onGeolocationPermissionsShowPrompt: DOING IT HERE FOR ORIGIN: " + str);
        callback.invoke(str, true, false);
        Plugin pluginHandle = this.bridge.getPlugin("Geolocation").getInstance();
        if (!pluginHandle.hasRequiredPermissions()) {
            pluginHandle.pluginRequestAllPermissions();
        } else {
            Logger.debug("onGeolocationPermissionsShowPrompt: has required permis");
        }
    }

    @Override // android.webkit.WebChromeClient
    public boolean onShowFileChooser(WebView webView, final ValueCallback<Uri[]> valueCallback, final WebChromeClient.FileChooserParams fileChooserParams) {
        List listAsList = Arrays.asList(fileChooserParams.getAcceptTypes());
        boolean zIsCaptureEnabled = fileChooserParams.isCaptureEnabled();
        final boolean z = false;
        boolean z2 = zIsCaptureEnabled && listAsList.contains("image/*");
        if (zIsCaptureEnabled && listAsList.contains("video/*")) {
            z = true;
        }
        if (z2 || z) {
            if (isMediaCaptureSupported()) {
                showMediaCaptureOrFilePicker(valueCallback, fileChooserParams, z);
            } else {
                this.bridge.cordovaInterface.requestPermission(new CordovaPlugin() { // from class: com.getcapacitor.BridgeWebChromeClient.5
                    @Override // org.apache.cordova.CordovaPlugin
                    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
                        if (9010 == i) {
                            if (iArr[0] == 0) {
                                BridgeWebChromeClient.this.showMediaCaptureOrFilePicker(valueCallback, fileChooserParams, z);
                            } else {
                                Logger.warn(Logger.tags("FileChooser"), "Camera permission not granted");
                                valueCallback.onReceiveValue(null);
                            }
                        }
                    }
                }, 9010, "android.permission.CAMERA");
            }
        } else {
            showFilePicker(valueCallback, fileChooserParams);
        }
        return true;
    }

    private boolean isMediaCaptureSupported() {
        Plugin pluginHandle = this.bridge.getPlugin("Camera").getInstance();
        return pluginHandle.hasPermission("android.permission.CAMERA") || !pluginHandle.hasDefinedPermission("android.permission.CAMERA");
    }
    public void showMediaCaptureOrFilePicker(ValueCallback<Uri[]> valueCallback, WebChromeClient.FileChooserParams fileChooserParams, boolean z) {
        boolean zShowImageCapturePicker;
        if (z) {
            zShowImageCapturePicker = showVideoCapturePicker(valueCallback);
        } else {
            zShowImageCapturePicker = showImageCapturePicker(valueCallback);
        }
        if (zShowImageCapturePicker) {
            return;
        }
        Logger.warn(Logger.tags("FileChooser"), "Media capture intent could not be launched. Falling back to default file picker.");
        showFilePicker(valueCallback, fileChooserParams);
    }

    private boolean showImageCapturePicker(final ValueCallback<Uri[]> valueCallback) {
        Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
        if (intent.resolveActivity(this.bridge.getActivity().getPackageManager()) == null) {
            return false;
        }
        try {
            final Uri uriCreateImageFileUri = CameraUtils.createImageFileUri(this.bridge.getActivity(), this.bridge.getContext().getPackageName());
            intent.putExtra("output", uriCreateImageFileUri);
            this.bridge.cordovaInterface.startActivityForResult(new CordovaPlugin() { // from class: com.getcapacitor.BridgeWebChromeClient.6
                @Override // org.apache.cordova.CordovaPlugin
                public void onActivityResult(int i, int i2, Intent intent2) {
                    valueCallback.onReceiveValue(i2 == -1 ? new Uri[]{uriCreateImageFileUri} : null);
                }
            }, intent, 9008);
            return true;
        } catch (Exception e) {
            Logger.error("Unable to create temporary media capture file: " + e.getMessage());
            return false;
        }
    }

    private boolean showVideoCapturePicker(final ValueCallback<Uri[]> valueCallback) {
        Intent intent = new Intent("android.media.action.VIDEO_CAPTURE");
        if (intent.resolveActivity(this.bridge.getActivity().getPackageManager()) == null) {
            return false;
        }
        this.bridge.cordovaInterface.startActivityForResult(new CordovaPlugin() { // from class: com.getcapacitor.BridgeWebChromeClient.7
            @Override // org.apache.cordova.CordovaPlugin
            public void onActivityResult(int i, int i2, Intent intent2) {
                valueCallback.onReceiveValue(i2 == -1 ? new Uri[]{intent2.getData()} : null);
            }
        }, intent, 9009);
        return true;
    }

    private void showFilePicker(final ValueCallback<Uri[]> valueCallback, WebChromeClient.FileChooserParams fileChooserParams) {
        Intent intentCreateIntent = fileChooserParams.createIntent();
        if (fileChooserParams.getMode() == 1) {
            intentCreateIntent.putExtra("android.intent.extra.ALLOW_MULTIPLE", true);
        }
        if (fileChooserParams.getAcceptTypes().length > 1) {
            intentCreateIntent.putExtra("android.intent.extra.MIME_TYPES", getValidTypes(fileChooserParams.getAcceptTypes()));
        }
        try {
            this.bridge.cordovaInterface.startActivityForResult(new CordovaPlugin() { // from class: com.getcapacitor.BridgeWebChromeClient.8
                @Override // org.apache.cordova.CordovaPlugin
                public void onActivityResult(int i, int i2, Intent intent) {
                    Uri[] result;
                    if (i2 == -1 && intent.getClipData() != null && intent.getClipData().getItemCount() > 1) {
                        int itemCount = intent.getClipData().getItemCount();
                        result = new Uri[itemCount];
                        for (int i3 = 0; i3 < itemCount; i3++) {
                            result[i3] = intent.getClipData().getItemAt(i3).getUri();
                        }
                    } else {
                        result = WebChromeClient.FileChooserParams.parseResult(i2, intent);
                    }
                    valueCallback.onReceiveValue(result);
                }
            }, intentCreateIntent, 9007);
        } catch (ActivityNotFoundException unused) {
            valueCallback.onReceiveValue(null);
        }
    }

    private String[] getValidTypes(String[] strArr) {
        ArrayList arrayList = new ArrayList();
        MimeTypeMap singleton = MimeTypeMap.getSingleton();
        for (String str : strArr) {
            if (str.startsWith(".")) {
                String mimeTypeFromExtension = singleton.getMimeTypeFromExtension(str.substring(1));
                if (mimeTypeFromExtension != null && !arrayList.contains(mimeTypeFromExtension)) {
                    arrayList.add(mimeTypeFromExtension);
                }
            } else if (!arrayList.contains(str)) {
                arrayList.add(str);
            }
        }
        Object[] array = arrayList.toArray();
        return (String[]) Arrays.copyOf(array, array.length, String[].class);
    }

    @Override // android.webkit.WebChromeClient
    public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
        String strTags = Logger.tags("Console");
        if (consoleMessage.message() != null && isValidMsg(consoleMessage.message())) {
            String str = String.format("File: %s - Line %d - Msg: %s", consoleMessage.sourceId(), Integer.valueOf(consoleMessage.lineNumber()), consoleMessage.message());
            String strName = consoleMessage.messageLevel().name();
            if ("ERROR".equalsIgnoreCase(strName)) {
                Logger.error(strTags, str, null);
            } else if ("WARNING".equalsIgnoreCase(strName)) {
                Logger.warn(strTags, str);
            } else if ("TIP".equalsIgnoreCase(strName)) {
                Logger.debug(strTags, str);
            } else {
                Logger.info(strTags, str);
            }
        }
        return true;
    }

    public boolean isValidMsg(String str) {
        return (str.contains("%cresult %c") || str.contains("%cnative %c") || str.equalsIgnoreCase("[object Object]") || str.equalsIgnoreCase("console.groupEnd")) ? false : true;
    }
}

