package org.apache.cordova;

import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.apache.cordova.CordovaResourceApi;
import org.json.JSONArray;
import org.json.JSONException;
public class CordovaPlugin {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    public CordovaInterface f7cordova;
    protected CordovaPreferences preferences;
    private String serviceName;
    public CordovaWebView webView;

    public boolean execute(String str, CordovaArgs cordovaArgs, CallbackContext callbackContext) throws JSONException {
        return false;
    }

    public boolean hasPermisssion() {
        return true;
    }

    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
    }

    public void onActivityResult(int i, int i2, Intent intent) {
    }

    public void onConfigurationChanged(Configuration configuration) {
    }

    public void onDestroy() {
    }

    public Object onMessage(String str, Object obj) {
        return null;
    }

    public void onNewIntent(Intent intent) {
    }

    public boolean onOverrideUrlLoading(String str) {
        return false;
    }

    public void onPause(boolean z) {
    }

    public boolean onReceivedClientCertRequest(CordovaWebView cordovaWebView, ICordovaClientCertRequest iCordovaClientCertRequest) {
        return false;
    }

    public boolean onReceivedHttpAuthRequest(CordovaWebView cordovaWebView, ICordovaHttpAuthHandler iCordovaHttpAuthHandler, String str, String str2) {
        return false;
    }

    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
    }

    public void onReset() {
    }

    public void onRestoreStateForActivityResult(Bundle bundle, CallbackContext callbackContext) {
    }

    public void onResume(boolean z) {
    }

    public Bundle onSaveInstanceState() {
        return null;
    }

    public void onStart() {
    }

    public void onStop() {
    }

    protected void pluginInitialize() {
    }

    public Uri remapUri(Uri uri) {
        return null;
    }

    public void requestPermissions(int i) {
    }

    public Boolean shouldAllowNavigation(String str) {
        return null;
    }

    public Boolean shouldAllowRequest(String str) {
        return null;
    }

    public Boolean shouldOpenExternalUrl(String str) {
        return null;
    }

    public final void privateInitialize(String str, CordovaInterface cordovaInterface, CordovaWebView cordovaWebView, CordovaPreferences cordovaPreferences) {
        this.serviceName = str;
        this.f7cordova = cordovaInterface;
        this.webView = cordovaWebView;
        this.preferences = cordovaPreferences;
        initialize(cordovaInterface, cordovaWebView);
        pluginInitialize();
    }

    public String getServiceName() {
        return this.serviceName;
    }

    public boolean execute(String str, String str2, CallbackContext callbackContext) throws JSONException {
        return execute(str, new JSONArray(str2), callbackContext);
    }

    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        return execute(str, new CordovaArgs(jSONArray), callbackContext);
    }

    public Boolean shouldAllowBridgeAccess(String str) {
        return shouldAllowNavigation(str);
    }

    public CordovaResourceApi.OpenForReadResult handleOpenForRead(Uri uri) throws IOException {
        throw new FileNotFoundException("Plugin can't handle uri: " + uri);
    }

    protected Uri toPluginUri(Uri uri) {
        return new Uri.Builder().scheme(CordovaResourceApi.PLUGIN_URI_SCHEME).authority(this.serviceName).appendQueryParameter("origUri", uri.toString()).build();
    }

    protected Uri fromPluginUri(Uri uri) {
        return Uri.parse(uri.getQueryParameter("origUri"));
    }
}

