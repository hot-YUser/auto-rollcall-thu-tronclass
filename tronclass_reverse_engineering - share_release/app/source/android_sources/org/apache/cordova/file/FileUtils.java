package org.apache.cordova.file;

import android.app.Activity;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;
import android.util.Base64;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import org.apache.commons.io.IOUtils;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.apache.cordova.file.Filesystem;
import org.apache.cordova.file.PendingRequests;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class FileUtils extends CordovaPlugin {
    public static int ABORT_ERR = 3;
    public static final int ACTION_GET_DIRECTORY = 2;
    public static final int ACTION_GET_FILE = 0;
    public static final int ACTION_WRITE = 1;
    public static int ENCODING_ERR = 5;
    public static int INVALID_MODIFICATION_ERR = 9;
    public static int INVALID_STATE_ERR = 7;
    private static final String LOG_TAG = "FileUtils";
    public static int NOT_FOUND_ERR = 1;
    public static int NOT_READABLE_ERR = 4;
    public static int NO_MODIFICATION_ALLOWED_ERR = 6;
    public static int PATH_EXISTS_ERR = 12;
    public static int QUOTA_EXCEEDED_ERR = 10;
    public static final int READ = 4;
    public static int SECURITY_ERR = 2;
    public static int SYNTAX_ERR = 8;
    public static int TYPE_MISMATCH_ERR = 11;
    public static int UNKNOWN_ERR = 1000;
    public static final int WRITE = 3;
    private static FileUtils filePlugin;
    private ArrayList<Filesystem> filesystems;
    private PendingRequests pendingRequests;
    private boolean configured = false;
    private String[] permissions = {PhotoViewer.READ, PhotoViewer.WRITE};

    private interface FileOp {
        void run(JSONArray jSONArray) throws Exception;
    }

    public void registerFilesystem(Filesystem filesystem) {
        if (filesystem == null || filesystemForName(filesystem.name) != null) {
            return;
        }
        this.filesystems.add(filesystem);
    }

    private Filesystem filesystemForName(String str) {
        for (Filesystem filesystem : this.filesystems) {
            if (filesystem != null && filesystem.name != null && filesystem.name.equals(str)) {
                return filesystem;
            }
        }
        return null;
    }

    protected String[] getExtraFileSystemsPreference(Activity activity) {
        return this.preferences.getString("androidextrafilesystems", "files,files-external,documents,sdcard,cache,cache-external,assets,root").split(",");
    }

    protected void registerExtraFileSystems(String[] strArr, HashMap<String, String> map) {
        HashSet hashSet = new HashSet();
        for (String str : strArr) {
            if (!hashSet.contains(str)) {
                String str2 = map.get(str);
                if (str2 == null) {
                    LOG.d(LOG_TAG, "Unrecognized extra filesystem identifier: " + str);
                } else {
                    File file = new File(str2);
                    if (!file.mkdirs() && !file.isDirectory()) {
                        LOG.d(LOG_TAG, "Unable to create root dir for filesystem \"" + str + "\", skipping");
                    } else {
                        registerFilesystem(new LocalFilesystem(str, this.webView.getContext(), this.webView.getResourceApi(), file));
                        hashSet.add(str);
                    }
                }
            }
        }
    }

    protected HashMap<String, String> getAvailableFileSystems(Activity activity) {
        Context applicationContext = activity.getApplicationContext();
        HashMap<String, String> map = new HashMap<>();
        map.put("files", applicationContext.getFilesDir().getAbsolutePath());
        map.put("documents", new File(applicationContext.getFilesDir(), "Documents").getAbsolutePath());
        map.put("cache", applicationContext.getCacheDir().getAbsolutePath());
        map.put("root", "/");
        if (Environment.getExternalStorageState().equals("mounted")) {
            try {
                map.put("files-external", applicationContext.getExternalFilesDir(null).getAbsolutePath());
                map.put("sdcard", Environment.getExternalStorageDirectory().getAbsolutePath());
                map.put("cache-external", applicationContext.getExternalCacheDir().getAbsolutePath());
            } catch (NullPointerException unused) {
                LOG.d(LOG_TAG, "External storage unavailable, check to see if USB Mass Storage Mode is on");
            }
        }
        return map;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        String str;
        super.initialize(cordovaInterface, cordovaWebView);
        this.filesystems = new ArrayList<>();
        this.pendingRequests = new PendingRequests();
        Activity activity = cordovaInterface.getActivity();
        String packageName = activity.getPackageName();
        String string = this.preferences.getString("androidpersistentfilelocation", "internal");
        String absolutePath = activity.getCacheDir().getAbsolutePath();
        if ("internal".equalsIgnoreCase(string)) {
            str = activity.getFilesDir().getAbsolutePath() + "/files/";
            this.configured = true;
        } else if ("compatibility".equalsIgnoreCase(string)) {
            if (Environment.getExternalStorageState().equals("mounted")) {
                String absolutePath2 = Environment.getExternalStorageDirectory().getAbsolutePath();
                absolutePath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/Android/data/" + packageName + "/cache/";
                str = absolutePath2;
            } else {
                str = "/data/data/" + packageName;
            }
            this.configured = true;
        } else {
            str = null;
        }
        if (this.configured) {
            File file = new File(absolutePath);
            File file2 = new File(str);
            file.mkdirs();
            file2.mkdirs();
            registerFilesystem(new LocalFilesystem("temporary", cordovaWebView.getContext(), cordovaWebView.getResourceApi(), file));
            registerFilesystem(new LocalFilesystem("persistent", cordovaWebView.getContext(), cordovaWebView.getResourceApi(), file2));
            registerFilesystem(new ContentFilesystem(cordovaWebView.getContext(), cordovaWebView.getResourceApi()));
            registerFilesystem(new AssetFilesystem(cordovaWebView.getContext().getAssets(), cordovaWebView.getResourceApi()));
            registerExtraFileSystems(getExtraFileSystemsPreference(activity), getAvailableFileSystems(activity));
            if (filePlugin == null) {
                filePlugin = this;
                return;
            }
            return;
        }
        LOG.e(LOG_TAG, "File plugin configuration error: Please set AndroidPersistentFileLocation in config.xml to one of \"internal\" (for new applications) or \"compatibility\" (for compatibility with previous versions)");
        activity.finish();
    }

    public static FileUtils getFilePlugin() {
        return filePlugin;
    }

    private Filesystem filesystemForURL(LocalFilesystemURL localFilesystemURL) {
        if (localFilesystemURL == null) {
            return null;
        }
        return filesystemForName(localFilesystemURL.fsName);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Uri remapUri(Uri uri) {
        if (!LocalFilesystemURL.FILESYSTEM_PROTOCOL.equals(uri.getScheme())) {
            return null;
        }
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(uri);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL != null && filesystemFilesystemForURL.filesystemPathForURL(localFilesystemURL) != null) {
                return Uri.parse("file://" + filesystemFilesystemForURL.filesystemPathForURL(localFilesystemURL));
            }
        } catch (IllegalArgumentException unused) {
        }
        return null;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, final String str2, final CallbackContext callbackContext) {
        if (!this.configured) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "File plugin is not configured. Please see the README.md file for details on how to update config.xml"));
            return true;
        }
        if (str.equals("testSaveLocationExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.1
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testSaveLocationExists()));
                }
            }, str2, callbackContext);
        } else if (str.equals("getFreeDiskSpace")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.2
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.getFreeExternalStorageSpace()));
                }
            }, str2, callbackContext);
        } else if (str.equals("testFileExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.3
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testFileExists(jSONArray.getString(0))));
                }
            }, str2, callbackContext);
        } else if (str.equals("testDirectoryExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.4
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testFileExists(jSONArray.getString(0))));
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsText")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.5
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    String string = jSONArray.getString(1);
                    int i = jSONArray.getInt(2);
                    int i2 = jSONArray.getInt(3);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, string, 1);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsDataURL")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.6
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, -1);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsArrayBuffer")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.7
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, 6);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsBinaryString")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.8
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, 7);
                }
            }, str2, callbackContext);
        } else if (str.equals("write")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.9
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, IOException {
                    String string = FileUtils.this.resolveLocalFileSystemURI(jSONArray.getString(0)).getString("nativeURL");
                    String string2 = jSONArray.getString(1);
                    int i = jSONArray.getInt(2);
                    Boolean boolValueOf = Boolean.valueOf(jSONArray.getBoolean(3));
                    if (FileUtils.this.needPermission(string, 3)) {
                        FileUtils.this.getWritePermission(str2, 1, callbackContext);
                    } else {
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, FileUtils.this.write(r0, string2, i, boolValueOf.booleanValue())));
                    }
                }
            }, str2, callbackContext);
        } else if (str.equals("truncate")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.10
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, IOException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, FileUtils.this.truncateFile(jSONArray.getString(0), jSONArray.getInt(1))));
                }
            }, str2, callbackContext);
        } else if (str.equals("requestAllFileSystems")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.11
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, IOException {
                    callbackContext.success(FileUtils.this.requestAllFileSystems());
                }
            }, str2, callbackContext);
        } else if (str.equals("requestAllPaths")) {
            this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.file.FileUtils.12
                @Override // java.lang.Runnable
                public void run() {
                    try {
                        callbackContext.success(FileUtils.this.requestAllPaths());
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
        } else if (str.equals("requestFileSystem")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.13
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    FileUtils.this.requestFileSystem(jSONArray.getInt(0), jSONArray.optLong(1), callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("resolveLocalFileSystemURI")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.14
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, IOException {
                    callbackContext.success(FileUtils.this.resolveLocalFileSystemURI(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getFileMetadata")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.15
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException, FileNotFoundException {
                    callbackContext.success(FileUtils.this.getFileMetadata(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getParent")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.16
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, IOException {
                    callbackContext.success(FileUtils.this.getParent(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getDirectory")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.17
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException {
                    String string = jSONArray.getString(0);
                    String string2 = jSONArray.getString(1);
                    String string3 = FileUtils.this.resolveLocalFileSystemURI(string).getString("nativeURL");
                    boolean zOptBoolean = jSONArray.isNull(2) ? false : jSONArray.getJSONObject(2).optBoolean("create", false);
                    if (!zOptBoolean || !FileUtils.this.needPermission(string3, 3)) {
                        if (!zOptBoolean && FileUtils.this.needPermission(string3, 4)) {
                            FileUtils.this.getReadPermission(str2, 2, callbackContext);
                            return;
                        } else {
                            callbackContext.success(FileUtils.this.getFile(string, string2, jSONArray.optJSONObject(2), true));
                            return;
                        }
                    }
                    FileUtils.this.getWritePermission(str2, 2, callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("getFile")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.18
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException {
                    String string = jSONArray.getString(0);
                    String string2 = jSONArray.getString(1);
                    String string3 = FileUtils.this.resolveLocalFileSystemURI(string).getString("nativeURL");
                    boolean zOptBoolean = jSONArray.isNull(2) ? false : jSONArray.getJSONObject(2).optBoolean("create", false);
                    if (!zOptBoolean || !FileUtils.this.needPermission(string3, 3)) {
                        if (!zOptBoolean && FileUtils.this.needPermission(string3, 4)) {
                            FileUtils.this.getReadPermission(str2, 0, callbackContext);
                            return;
                        } else {
                            callbackContext.success(FileUtils.this.getFile(string, string2, jSONArray.optJSONObject(2), false));
                            return;
                        }
                    }
                    FileUtils.this.getWritePermission(str2, 0, callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("remove")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.19
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, InvalidModificationException, MalformedURLException, NoModificationAllowedException {
                    if (FileUtils.this.remove(jSONArray.getString(0))) {
                        callbackContext.success();
                    } else {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                    }
                }
            }, str2, callbackContext);
        } else if (str.equals("removeRecursively")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.20
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileExistsException, MalformedURLException, NoModificationAllowedException {
                    if (FileUtils.this.removeRecursively(jSONArray.getString(0))) {
                        callbackContext.success();
                    } else {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                    }
                }
            }, str2, callbackContext);
        } else if (str.equals("moveTo")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.21
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, InvalidModificationException, FileExistsException, EncodingException, NoModificationAllowedException, IOException {
                    callbackContext.success(FileUtils.this.transferTo(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getString(2), true));
                }
            }, str2, callbackContext);
        } else if (str.equals("copyTo")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.22
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, InvalidModificationException, FileExistsException, EncodingException, NoModificationAllowedException, IOException {
                    callbackContext.success(FileUtils.this.transferTo(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getString(2), false));
                }
            }, str2, callbackContext);
        } else if (str.equals("readEntries")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.23
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException, FileNotFoundException {
                    callbackContext.success(FileUtils.this.readEntries(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else {
            if (!str.equals("_getLocalFilesystemPath")) {
                return false;
            }
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.24
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException, FileNotFoundException {
                    callbackContext.success(FileUtils.this.filesystemPathForURL(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        }
        return true;
    }
    public void getReadPermission(String str, int i, CallbackContext callbackContext) {
        PermissionHelper.requestPermission(this, this.pendingRequests.createRequest(str, i, callbackContext), PhotoViewer.READ);
    }
    public void getWritePermission(String str, int i, CallbackContext callbackContext) {
        PermissionHelper.requestPermission(this, this.pendingRequests.createRequest(str, i, callbackContext), PhotoViewer.WRITE);
    }

    private boolean hasReadPermission() {
        return PermissionHelper.hasPermission(this, PhotoViewer.READ);
    }

    private boolean hasWritePermission() {
        return PermissionHelper.hasPermission(this, PhotoViewer.WRITE);
    }
    public boolean needPermission(String str, int i) throws JSONException {
        JSONObject jSONObjectRequestAllPaths = requestAllPaths();
        ArrayList arrayList = new ArrayList();
        arrayList.add(jSONObjectRequestAllPaths.getString("applicationDirectory"));
        arrayList.add(jSONObjectRequestAllPaths.getString("applicationStorageDirectory"));
        if (jSONObjectRequestAllPaths.has("externalApplicationStorageDirectory")) {
            arrayList.add(jSONObjectRequestAllPaths.getString("externalApplicationStorageDirectory"));
        }
        if (i == 4 && hasReadPermission()) {
            return false;
        }
        if (i == 3 && hasWritePermission()) {
            return false;
        }
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            if (str.startsWith((String) it.next())) {
                return false;
            }
        }
        return true;
    }

    public LocalFilesystemURL resolveNativeUri(Uri uri) {
        Iterator<Filesystem> it = this.filesystems.iterator();
        LocalFilesystemURL localFilesystemURL = null;
        while (it.hasNext()) {
            LocalFilesystemURL localUri = it.next().toLocalUri(uri);
            if (localUri != null && (localFilesystemURL == null || localUri.uri.toString().length() < localFilesystemURL.toString().length())) {
                localFilesystemURL = localUri;
            }
        }
        return localFilesystemURL;
    }

    public String filesystemPathForURL(String str) throws MalformedURLException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.filesystemPathForURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public LocalFilesystemURL filesystemURLforLocalPath(String str) {
        Iterator<Filesystem> it = this.filesystems.iterator();
        LocalFilesystemURL localFilesystemURL = null;
        int length = 0;
        while (it.hasNext()) {
            LocalFilesystemURL localFilesystemURLURLforFilesystemPath = it.next().URLforFilesystemPath(str);
            if (localFilesystemURLURLforFilesystemPath != null && (localFilesystemURL == null || localFilesystemURLURLforFilesystemPath.path.length() < length)) {
                length = localFilesystemURLURLforFilesystemPath.path.length();
                localFilesystemURL = localFilesystemURLURLforFilesystemPath;
            }
        }
        return localFilesystemURL;
    }

    private void threadhelper(final FileOp fileOp, final String str, final CallbackContext callbackContext) {
        this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.file.FileUtils.25
            @Override // java.lang.Runnable
            public void run() {
                try {
                    fileOp.run(new JSONArray(str));
                } catch (Exception e) {
                    boolean z = e instanceof EncodingException;
                    if (z) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                        return;
                    }
                    if (e instanceof FileNotFoundException) {
                        callbackContext.error(FileUtils.NOT_FOUND_ERR);
                        return;
                    }
                    if (e instanceof FileExistsException) {
                        callbackContext.error(FileUtils.PATH_EXISTS_ERR);
                        return;
                    }
                    if (e instanceof NoModificationAllowedException) {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                        return;
                    }
                    if (e instanceof InvalidModificationException) {
                        callbackContext.error(FileUtils.INVALID_MODIFICATION_ERR);
                        return;
                    }
                    if (e instanceof MalformedURLException) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                        return;
                    }
                    if (e instanceof IOException) {
                        callbackContext.error(FileUtils.INVALID_MODIFICATION_ERR);
                        return;
                    }
                    if (z) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                        return;
                    }
                    if (e instanceof TypeMismatchException) {
                        callbackContext.error(FileUtils.TYPE_MISMATCH_ERR);
                        return;
                    }
                    if (e instanceof JSONException) {
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
                    } else if (e instanceof SecurityException) {
                        callbackContext.error(FileUtils.SECURITY_ERR);
                    } else {
                        e.printStackTrace();
                        callbackContext.error(FileUtils.UNKNOWN_ERR);
                    }
                }
            }
        });
    }
    public JSONObject resolveLocalFileSystemURI(String str) throws JSONException, IOException {
        boolean z;
        if (str == null) {
            throw new MalformedURLException("Unrecognized filesystem URL");
        }
        Uri uri = Uri.parse(str);
        LocalFilesystemURL localUri = LocalFilesystemURL.parse(uri);
        if (localUri == null) {
            localUri = resolveNativeUri(uri);
            z = true;
        } else {
            z = false;
        }
        try {
            Filesystem filesystemFilesystemForURL = filesystemForURL(localUri);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            if (filesystemFilesystemForURL.exists(localUri)) {
                if (!z) {
                    localUri = filesystemFilesystemForURL.toLocalUri(filesystemFilesystemForURL.toNativeUri(localUri));
                }
                return filesystemFilesystemForURL.getEntryForLocalURL(localUri);
            }
            throw new FileNotFoundException();
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public JSONArray readEntries(String str) throws JSONException, MalformedURLException, FileNotFoundException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.readEntriesAtLocalURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public JSONObject transferTo(String str, String str2, String str3, boolean z) throws JSONException, InvalidModificationException, FileExistsException, EncodingException, NoModificationAllowedException, IOException {
        if (str == null || str2 == null) {
            throw new FileNotFoundException();
        }
        LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
        LocalFilesystemURL localFilesystemURL2 = LocalFilesystemURL.parse(str2);
        Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
        Filesystem filesystemFilesystemForURL2 = filesystemForURL(localFilesystemURL2);
        if (str3 != null && str3.contains(":")) {
            throw new EncodingException("Bad file name");
        }
        return filesystemFilesystemForURL2.copyFileToURL(localFilesystemURL2, str3, filesystemFilesystemForURL, localFilesystemURL, z);
    }
    public boolean removeRecursively(String str) throws MalformedURLException, FileExistsException, NoModificationAllowedException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            if ("".equals(localFilesystemURL.path) || "/".equals(localFilesystemURL.path)) {
                throw new NoModificationAllowedException("You can't delete the root directory");
            }
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.recursiveRemoveFileAtLocalURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public boolean remove(String str) throws InvalidModificationException, MalformedURLException, NoModificationAllowedException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            if ("".equals(localFilesystemURL.path) || "/".equals(localFilesystemURL.path)) {
                throw new NoModificationAllowedException("You can't delete the root directory");
            }
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.removeFileAtLocalURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public JSONObject getFile(String str, String str2, JSONObject jSONObject, boolean z) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.getFileForLocalURL(localFilesystemURL, str2, jSONObject, z);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public JSONObject getParent(String str) throws JSONException, IOException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.getParentForLocalURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public JSONObject getFileMetadata(String str) throws JSONException, MalformedURLException, FileNotFoundException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.getFileMetadataForLocalURL(localFilesystemURL);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public void requestFileSystem(int i, long j, CallbackContext callbackContext) throws JSONException {
        Filesystem filesystem;
        try {
            filesystem = this.filesystems.get(i);
        } catch (ArrayIndexOutOfBoundsException unused) {
            filesystem = null;
        }
        if (filesystem == null) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_FOUND_ERR));
            return;
        }
        if ((j > 0 ? filesystem.getFreeSpaceInBytes() : 0L) < j) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, QUOTA_EXCEEDED_ERR));
            return;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("name", filesystem.name);
        jSONObject.put("root", filesystem.getRootEntry());
        callbackContext.success(jSONObject);
    }
    public JSONArray requestAllFileSystems() throws JSONException, IOException {
        JSONArray jSONArray = new JSONArray();
        Iterator<Filesystem> it = this.filesystems.iterator();
        while (it.hasNext()) {
            jSONArray.put(it.next().getRootEntry());
        }
        return jSONArray;
    }

    private static String toDirUrl(File file) {
        return Uri.fromFile(file).toString() + IOUtils.DIR_SEPARATOR_UNIX;
    }
    public JSONObject requestAllPaths() throws JSONException {
        Activity activity = this.f7cordova.getActivity();
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("applicationDirectory", "file:///android_asset/");
        jSONObject.put("applicationStorageDirectory", toDirUrl(activity.getFilesDir().getParentFile()));
        jSONObject.put("dataDirectory", toDirUrl(activity.getFilesDir()));
        jSONObject.put("cacheDirectory", toDirUrl(activity.getCacheDir()));
        if (Environment.getExternalStorageState().equals("mounted")) {
            try {
                jSONObject.put("externalApplicationStorageDirectory", toDirUrl(activity.getExternalFilesDir(null).getParentFile()));
                jSONObject.put("externalDataDirectory", toDirUrl(activity.getExternalFilesDir(null)));
                jSONObject.put("externalCacheDirectory", toDirUrl(activity.getExternalCacheDir()));
                jSONObject.put("externalRootDirectory", toDirUrl(Environment.getExternalStorageDirectory()));
            } catch (NullPointerException unused) {
                LOG.d(LOG_TAG, "Unable to access these paths, most liklely due to USB storage");
            }
        }
        return jSONObject;
    }

    public JSONObject getEntryForFile(File file) throws JSONException {
        Iterator<Filesystem> it = this.filesystems.iterator();
        while (it.hasNext()) {
            JSONObject jSONObjectMakeEntryForFile = it.next().makeEntryForFile(file);
            if (jSONObjectMakeEntryForFile != null) {
                return jSONObjectMakeEntryForFile;
            }
        }
        return null;
    }

    @Deprecated
    public static JSONObject getEntry(File file) throws JSONException {
        if (getFilePlugin() != null) {
            return getFilePlugin().getEntryForFile(file);
        }
        return null;
    }

    public void readFileAs(String str, int i, int i2, final CallbackContext callbackContext, final String str2, final int i3) throws MalformedURLException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            filesystemFilesystemForURL.readFileAtURL(localFilesystemURL, i, i2, new Filesystem.ReadFileCallback() { // from class: org.apache.cordova.file.FileUtils.26
                @Override // org.apache.cordova.file.Filesystem.ReadFileCallback
                public void handleData(InputStream inputStream, String str3) {
                    PluginResult pluginResult;
                    try {
                        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                        byte[] bArr = new byte[8192];
                        while (true) {
                            int i4 = inputStream.read(bArr, 0, 8192);
                            if (i4 <= 0) {
                                break;
                            } else {
                                byteArrayOutputStream.write(bArr, 0, i4);
                            }
                        }
                        int i5 = i3;
                        if (i5 == 1) {
                            pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toString(str2));
                        } else if (i5 == 6) {
                            pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toByteArray());
                        } else if (i5 == 7) {
                            pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toByteArray(), true);
                        } else {
                            pluginResult = new PluginResult(PluginResult.Status.OK, "data:" + str3 + ";base64," + new String(Base64.encode(byteArrayOutputStream.toByteArray(), 2), "US-ASCII"));
                        }
                        callbackContext.sendPluginResult(pluginResult);
                    } catch (IOException e) {
                        LOG.d(FileUtils.LOG_TAG, e.getLocalizedMessage());
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, FileUtils.NOT_READABLE_ERR));
                    }
                }
            });
        } catch (FileNotFoundException unused) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, NOT_FOUND_ERR));
        } catch (IOException e) {
            LOG.d(LOG_TAG, e.getLocalizedMessage());
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, NOT_READABLE_ERR));
        } catch (IllegalArgumentException e2) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e2);
            throw malformedURLException;
        }
    }

    public long write(String str, String str2, int i, boolean z) throws NoModificationAllowedException, IOException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            long jWriteToFileAtURL = filesystemFilesystemForURL.writeToFileAtURL(localFilesystemURL, str2, i, z);
            LOG.d("TEST", str + ": " + jWriteToFileAtURL);
            return jWriteToFileAtURL;
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }
    public long truncateFile(String str, long j) throws NoModificationAllowedException, IOException {
        try {
            LocalFilesystemURL localFilesystemURL = LocalFilesystemURL.parse(str);
            Filesystem filesystemFilesystemForURL = filesystemForURL(localFilesystemURL);
            if (filesystemFilesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemFilesystemForURL.truncateFileAtURL(localFilesystemURL, j);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        final PendingRequests.Request andRemove = this.pendingRequests.getAndRemove(i);
        if (andRemove != null) {
            for (int i2 : iArr) {
                if (i2 == -1) {
                    andRemove.getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.ERROR, SECURITY_ERR));
                    return;
                }
            }
            int action = andRemove.getAction();
            if (action == 0) {
                threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.27
                    @Override // org.apache.cordova.file.FileUtils.FileOp
                    public void run(JSONArray jSONArray) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException {
                        andRemove.getCallbackContext().success(FileUtils.this.getFile(jSONArray.getString(0), jSONArray.getString(1), jSONArray.optJSONObject(2), false));
                    }
                }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                return;
            } else {
                if (action != 1) {
                    if (action != 2) {
                        return;
                    }
                    threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.28
                        @Override // org.apache.cordova.file.FileUtils.FileOp
                        public void run(JSONArray jSONArray) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException {
                            andRemove.getCallbackContext().success(FileUtils.this.getFile(jSONArray.getString(0), jSONArray.getString(1), jSONArray.optJSONObject(2), true));
                        }
                    }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                    return;
                }
                threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.29
                    @Override // org.apache.cordova.file.FileUtils.FileOp
                    public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, IOException {
                        andRemove.getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.OK, FileUtils.this.write(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getInt(2), Boolean.valueOf(jSONArray.getBoolean(3)).booleanValue())));
                    }
                }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                return;
            }
        }
        LOG.d(LOG_TAG, "Received permission callback for unknown request code");
    }
}

