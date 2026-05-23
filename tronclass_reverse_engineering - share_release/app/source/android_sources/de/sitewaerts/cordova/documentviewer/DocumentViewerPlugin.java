package de.sitewaerts.cordova.documentviewer;

import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import com.onesignal.OneSignalDbContract;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public final class DocumentViewerPlugin extends CordovaPlugin {
    private static final String ANDROID_OPTIONS = "android";
    private static final String ASSETS = "file:///android_asset/";
    private static final String BOOKMARKS_OPTIONS = "bookmarks";
    private static final String DOCUMENTVIEW_OPTIONS = "documentView";
    private static final String EMAIL_OPTIONS = "email";
    private static final String NAVIGATIONVIEW_OPTIONS = "navigationView";
    private static final String OPENWITH_OPTIONS = "openWith";
    public static final String PDF = "application/pdf";
    private static final String PRINT_OPTIONS = "print";
    private static final int REQUEST_CODE_INSTALL = 1001;
    private static final int REQUEST_CODE_OPEN = 1000;
    private static final String SEARCH_OPTIONS = "search";
    private static final String TAG = "DocumentViewerPlugin";
    private static final String TITLE_OPTIONS = "title";
    private CallbackContext callbackContext;
    private Current current;
    private int tempCounter = 0;

    public static final class Actions {
        static final String APP_PAUSED = "appPaused";
        static final String APP_RESUMED = "appResumed";
        static final String CAN_VIEW = "canViewDocument";
        static final String CLOSE = "close";
        static final String GET_SUPPORT_INFO = "getSupportInfo";
        static final String INSTALL_VIEWER_APP = "install";
        static final String VIEW_DOCUMENT = "viewDocument";
    }

    public static final class Args {
        static final String CONTENT_TYPE = "contentType";
        static final String OPTIONS = "options";
        public static final String URL = "url";
    }

    public static final class AutoCloseOptions {
        static final String NAME = "autoClose";
        static final String OPTION_ON_PAUSE = "onPause";
    }

    public static final class Options {
        static final String CLOSE_LABEL = "closeLabel";
        static final String ENABLED = "enabled";
        static final String VIEWER_APP_ACTIVITY = "viewerAppActivity";
        static final String VIEWER_APP_PACKAGE_ID = "viewerAppPackage";
    }

    public static final class Result {
        static final String DETAILS = "details";
        static final String MESSAGE = "message";
        static final String MISSING_APP_ID = "missingAppId";
        static final String STATUS = "status";
        static final String SUPPORTED = "supported";
    }

    private boolean newApi() {
        return true;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        super.initialize(cordovaInterface, cordovaWebView);
        clearTempFiles();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        clearTempFiles();
        super.onDestroy();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onReset() {
        clearTempFiles();
        super.onReset();
    }

    private final class Current {
        private final String activity;
        private final String packageId;
        private final String url;

        public Current(String str, String str2, String str3) {
            this.packageId = str;
            this.activity = str2;
            this.url = str3;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(final String str, final JSONArray jSONArray, final CallbackContext callbackContext) {
        this.f7cordova.getThreadPool().execute(new Runnable() { // from class: de.sitewaerts.cordova.documentviewer.DocumentViewerPlugin.1
            @Override // java.lang.Runnable
            public void run() {
                try {
                    DocumentViewerPlugin.this.doExecute(str, jSONArray, callbackContext);
                } catch (Exception e) {
                    DocumentViewerPlugin.this.handleException(e, str, jSONArray, callbackContext);
                }
            }
        });
        return true;
    }
    public void handleException(Exception exc, String str, JSONArray jSONArray, CallbackContext callbackContext) {
        exc.printStackTrace();
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, exc.getMessage());
            jSONObject.put("details", getStackTrace(exc));
            callbackContext.error(jSONObject);
        } catch (JSONException e) {
            e.printStackTrace();
            callbackContext.error(exc.getMessage());
        }
    }

    private String getStackTrace(Throwable th) {
        if (th == null) {
            return "";
        }
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        th.printStackTrace(printWriter);
        try {
            printWriter.close();
            stringWriter.flush();
            stringWriter.close();
        } catch (Exception unused) {
        }
        return stringWriter.toString();
    }
    public void doExecute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        JSONObject jSONObject;
        JSONObject jSONObject2;
        if (jSONArray.length() > 0) {
            jSONObject = jSONArray.getJSONObject(0);
            jSONObject2 = jSONObject.getJSONObject(Globalization.OPTIONS);
        } else {
            jSONObject = new JSONObject();
            jSONObject2 = new JSONObject();
        }
        if (str.equals("viewDocument")) {
            String string = jSONObject.getString("url");
            String string2 = jSONObject.getString("contentType");
            JSONObject jSONObject3 = jSONObject2.getJSONObject(ANDROID_OPTIONS);
            String string3 = jSONObject3.getString("viewerAppPackage");
            String string4 = jSONObject3.getString("viewerAppActivity");
            Bundle bundle = new Bundle();
            bundle.putString("documentView.closeLabel", jSONObject2.getJSONObject(DOCUMENTVIEW_OPTIONS).getString("closeLabel"));
            bundle.putString("navigationView.closeLabel", jSONObject2.getJSONObject(NAVIGATIONVIEW_OPTIONS).getString("closeLabel"));
            bundle.putBoolean("email.enabled", jSONObject2.getJSONObject("email").optBoolean("enabled", false));
            bundle.putBoolean("print.enabled", jSONObject2.getJSONObject(PRINT_OPTIONS).optBoolean("enabled", false));
            bundle.putBoolean("openWith.enabled", jSONObject2.getJSONObject(OPENWITH_OPTIONS).optBoolean("enabled", false));
            bundle.putBoolean("bookmarks.enabled", jSONObject2.getJSONObject(BOOKMARKS_OPTIONS).optBoolean("enabled", false));
            bundle.putBoolean("search.enabled", jSONObject2.getJSONObject(SEARCH_OPTIONS).optBoolean("enabled", false));
            bundle.putBoolean("autoClose.onPause", jSONObject2.getJSONObject("autoClose").optBoolean("onPause", false));
            bundle.putString("title", jSONObject2.getString("title"));
            _open(string, string2, string3, string4, callbackContext, bundle);
            return;
        }
        if (str.equals("close")) {
            _close(callbackContext);
            return;
        }
        if (str.equals("appPaused")) {
            _ignore(callbackContext);
            return;
        }
        if (str.equals("appResumed")) {
            _ignore(callbackContext);
            return;
        }
        if (str.equals("install")) {
            _install(jSONObject2.getJSONObject(ANDROID_OPTIONS).getString("viewerAppPackage"), callbackContext);
            return;
        }
        if (str.equals("canViewDocument")) {
            String string5 = jSONObject.getString("url");
            String string6 = jSONObject.getString("contentType");
            String string7 = jSONObject2.getJSONObject(ANDROID_OPTIONS).getString("viewerAppPackage");
            JSONObject jSONObject4 = new JSONObject();
            if (PDF.equals(string6)) {
                if (canGetFile(string5)) {
                    if (!_appIsInstalled(string7)) {
                        jSONObject4.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
                        jSONObject4.put("missingAppId", string7);
                    } else {
                        jSONObject4.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.OK.ordinal());
                    }
                } else {
                    String str2 = "File '" + string5 + "' is not available (cannot access file)";
                    Log.d(TAG, str2);
                    jSONObject4.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
                    jSONObject4.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, str2);
                }
            } else {
                String str3 = "Content type '" + string6 + "' is not supported";
                Log.d(TAG, str3);
                jSONObject4.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
                jSONObject4.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, str3);
            }
            callbackContext.success(jSONObject4);
            return;
        }
        if (str.equals("getSupportInfo")) {
            JSONObject jSONObject5 = new JSONObject();
            JSONArray jSONArray2 = new JSONArray();
            jSONArray2.put(PDF);
            jSONObject5.put("supported", jSONArray2);
            callbackContext.success(jSONObject5);
            return;
        }
        JSONObject jSONObject6 = new JSONObject();
        jSONObject6.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.INVALID_ACTION.ordinal());
        jSONObject6.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Invalid action '" + str + "'");
        callbackContext.error(jSONObject6);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, Intent intent) {
        CallbackContext callbackContext = this.callbackContext;
        if (callbackContext == null) {
            return;
        }
        if (i != 1000) {
            if (i == 1001) {
                this.current = null;
                callbackContext.success();
                this.callbackContext = null;
                return;
            }
            return;
        }
        this.current = null;
        clearTempFiles();
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
            this.callbackContext.success(jSONObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        this.callbackContext = null;
    }

    private void _ignore(CallbackContext callbackContext) {
        callbackContext.success();
    }

    private void _close(CallbackContext callbackContext) {
        if (this.current == null) {
            callbackContext.success();
            return;
        }
        try {
            this.f7cordova.getActivity().finishActivity(1000);
        } catch (Exception unused) {
        }
        this.current = null;
        callbackContext.success();
    }

    private void _open(String str, String str2, String str3, String str4, CallbackContext callbackContext, Bundle bundle) throws JSONException {
        clearTempFiles();
        File accessibleFile = getAccessibleFile(str);
        if (accessibleFile != null && accessibleFile.exists() && accessibleFile.isFile()) {
            try {
                Intent intent = new Intent("android.intent.action.VIEW");
                intent.addCategory("android.intent.category.EMBED");
                if (newApi()) {
                    intent.addFlags(1);
                    intent.setDataAndType(androidx.core.content.FileProvider.getUriForFile(this.webView.getContext(), this.f7cordova.getActivity().getPackageName() + ".DocumentViewerPlugin.fileprovider", accessibleFile), str2);
                } else {
                    intent.setDataAndType(Uri.fromFile(accessibleFile), str2);
                }
                intent.addFlags(67108864);
                intent.putExtra(getClass().getName(), bundle);
                intent.setComponent(new ComponentName(str3, str3 + "." + str4));
                this.callbackContext = callbackContext;
                this.f7cordova.startActivityForResult(this, intent, 1000);
                this.current = new Current(str3, str4, str);
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.OK.ordinal());
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jSONObject);
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
                return;
            } catch (ActivityNotFoundException e) {
                this.current = null;
                JSONObject jSONObject2 = new JSONObject();
                jSONObject2.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
                jSONObject2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Activity not found: " + e.getMessage());
                callbackContext.error(jSONObject2);
                return;
            }
        }
        this.current = null;
        JSONObject jSONObject3 = new JSONObject();
        jSONObject3.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
        jSONObject3.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "File '" + str + "' is not available (Cannot create accessible file).");
        callbackContext.error(jSONObject3);
    }

    private void copyFile(File file, File file2) throws Throwable {
        copyFile(new FileInputStream(file), file2);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:45:0x0087 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:49:0x0082 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:63:? A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void copyFile(InputStream inputStream, File file) throws Throwable {
        FileOutputStream fileOutputStream;
        IOException e;
        if (!file.getParentFile().exists() && !file.getParentFile().mkdirs()) {
            throw new IOException("Cannot create path " + file.getParentFile().getAbsolutePath());
        }
        FileOutputStream fileOutputStream2 = null;
        try {
            fileOutputStream = new FileOutputStream(file);
            try {
                try {
                    byte[] bArr = new byte[1024];
                    while (true) {
                        int i = inputStream.read(bArr);
                        if (i == -1) {
                            break;
                        } else {
                            fileOutputStream.write(bArr, 0, i);
                        }
                    }
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (IOException unused) {
                        }
                    }
                } catch (IOException e2) {
                    e = e2;
                    Log.e(TAG, "Failed to copy stream to " + file.getAbsolutePath(), e);
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (IOException unused2) {
                        }
                    }
                    if (fileOutputStream == null) {
                        return;
                    }
                }
            } catch (Throwable th) {
                th = th;
                fileOutputStream2 = fileOutputStream;
                if (inputStream != null) {
                    try {
                        inputStream.close();
                    } catch (IOException unused3) {
                    }
                }
                if (fileOutputStream2 == null) {
                    try {
                        fileOutputStream2.close();
                        throw th;
                    } catch (IOException unused4) {
                        throw th;
                    }
                }
                throw th;
            }
        } catch (IOException e3) {
            fileOutputStream = null;
            e = e3;
        } catch (Throwable th2) {
            th = th2;
            if (inputStream != null) {
            }
            if (fileOutputStream2 == null) {
            }
        }
        try {
            fileOutputStream.close();
        } catch (IOException unused5) {
        }
    }

    private File getSharedTempFile(String str) {
        File sharedTempDir = getSharedTempDir();
        StringBuilder sb = new StringBuilder();
        int i = this.tempCounter;
        this.tempCounter = i + 1;
        return new File(sharedTempDir, sb.append(i).append(".").append(str).toString());
    }

    private File getSharedTempDir() {
        if (newApi()) {
            return new File(new File(this.f7cordova.getActivity().getCacheDir(), "tmp"), TAG);
        }
        return new File(new File(this.f7cordova.getActivity().getExternalFilesDir(null), "tmp"), TAG);
    }

    private void clearTempFiles() {
        File sharedTempDir = getSharedTempDir();
        if (sharedTempDir.exists()) {
            deleteRecursive(sharedTempDir, false);
        }
    }

    private void deleteRecursive(File file, boolean z) {
        if (file.exists()) {
            if (file.isDirectory()) {
                for (File file2 : file.listFiles()) {
                    deleteRecursive(file2, true);
                }
            }
            if (!z || file.delete()) {
                return;
            }
            Log.e(TAG, "Failed to delete file " + file.getAbsoluteFile());
        }
    }

    private boolean canGetFile(String str) {
        if (str.startsWith(ASSETS)) {
            return true;
        }
        File file = getFile(str);
        return file != null && file.exists();
    }

    private File getAccessibleFile(String str) throws JSONException {
        if (newApi()) {
            return getAccessibleFileNew(str);
        }
        return getAccessibleFileOld(str);
    }

    private void close(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private File getAccessibleFileNew(String str) throws Throwable {
        FileOutputStream fileOutputStream;
        File sharedTempFile;
        CordovaResourceApi resourceApi = this.webView.getResourceApi();
        Uri uri = Uri.parse(str);
        Closeable closeable = null;
        try {
            try {
                sharedTempFile = getSharedTempFile(new File(uri.getPath()).getName());
                if (!sharedTempFile.getParentFile().exists() && !sharedTempFile.getParentFile().mkdirs()) {
                    throw new IOException("mkdirs " + sharedTempFile.getParentFile().getAbsolutePath() + " failed.");
                }
                fileOutputStream = new FileOutputStream(sharedTempFile);
            } catch (Throwable th) {
                th = th;
            }
        } catch (FileNotFoundException unused) {
            fileOutputStream = null;
        } catch (Exception e) {
            e = e;
        }
        try {
            resourceApi.copyResource(uri, fileOutputStream);
            sharedTempFile.deleteOnExit();
            close(fileOutputStream);
            return sharedTempFile;
        } catch (FileNotFoundException unused2) {
            close(fileOutputStream);
            return null;
        } catch (Exception e2) {
            e = e2;
            Log.e(TAG, "Failed to copy file: " + str, e);
            JSONException jSONException = new JSONException(e.getMessage());
            jSONException.initCause(e);
            throw jSONException;
        } catch (Throwable th2) {
            th = th2;
            closeable = fileOutputStream;
            close(closeable);
            throw th;
        }
    }

    private File getAccessibleFileOld(String str) throws Throwable {
        if (str.startsWith(ASSETS)) {
            String strSubstring = str.substring(ASSETS.length());
            try {
                File sharedTempFile = getSharedTempFile(strSubstring.substring(strSubstring.lastIndexOf(File.pathSeparator) + 1));
                try {
                    InputStream inputStreamOpen = this.f7cordova.getActivity().getAssets().open(strSubstring);
                    if (inputStreamOpen == null) {
                        return null;
                    }
                    copyFile(inputStreamOpen, sharedTempFile);
                    sharedTempFile.deleteOnExit();
                    return sharedTempFile;
                } catch (IOException unused) {
                    return null;
                }
            } catch (IOException e) {
                Log.e(TAG, "Failed to copy file: " + strSubstring, e);
                JSONException jSONException = new JSONException(e.getMessage());
                jSONException.initCause(e);
                throw jSONException;
            }
        }
        File file = getFile(str);
        if (file == null || !file.exists() || !file.isFile()) {
            return null;
        }
        if (!file.getAbsolutePath().contains(this.f7cordova.getActivity().getFilesDir().getAbsolutePath())) {
            return file;
        }
        try {
            File sharedTempFile2 = getSharedTempFile(file.getName());
            copyFile(file, sharedTempFile2);
            sharedTempFile2.deleteOnExit();
            return sharedTempFile2;
        } catch (IOException e2) {
            Log.e(TAG, "Failed to copy file: " + file.getName(), e2);
            JSONException jSONException2 = new JSONException(e2.getMessage());
            jSONException2.initCause(e2);
            throw jSONException2;
        }
    }

    private File getFile(String str) {
        if (newApi()) {
            return getFileNew(str);
        }
        return getFileOld(str);
    }

    private File getFileNew(String str) {
        return this.webView.getResourceApi().mapUriToFile(Uri.parse(str));
    }

    private File getFileOld(String str) {
        try {
            str = stripFileProtocol(this.webView.getResourceApi().remapUri(Uri.parse(str)).toString());
        } catch (Exception unused) {
        }
        return new File(str);
    }

    private void _install(String str, CallbackContext callbackContext) throws JSONException {
        if (_appIsInstalled(str)) {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Package " + str + " already installed");
            callbackContext.error(jSONObject);
            return;
        }
        this.callbackContext = callbackContext;
        try {
            this.f7cordova.startActivityForResult(this, new Intent("android.intent.action.VIEW", Uri.parse("market://details?id=" + str)), 1001);
        } catch (ActivityNotFoundException unused) {
            this.f7cordova.startActivityForResult(this, new Intent("android.intent.action.VIEW", Uri.parse("https://play.google.com/store/apps/details?id=" + str)), 1001);
        }
    }

    private boolean _appIsInstalled(String str) {
        try {
            this.f7cordova.getActivity().getPackageManager().getPackageInfo(str, 1);
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return false;
        }
    }

    private String stripFileProtocol(String str) {
        return str.startsWith("file://") ? str.substring(7) : str;
    }
}

