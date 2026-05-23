package org.apache.cordova.mediacapture;

import android.content.ActivityNotFoundException;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.BitmapFactory;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import com.onesignal.OneSignalDbContract;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginManager;
import org.apache.cordova.file.FileUtils;
import org.apache.cordova.file.LocalFilesystemURL;
import org.apache.cordova.globalization.Globalization;
import org.apache.cordova.mediacapture.PendingRequests;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class Capture extends CordovaPlugin {
    private static final String AUDIO_3GPP = "audio/3gpp";
    private static final String[] AUDIO_TYPES = {AUDIO_3GPP, "audio/aac", "audio/amr", "audio/wav"};
    private static final int CAPTURE_AUDIO = 0;
    private static final int CAPTURE_IMAGE = 1;
    private static final int CAPTURE_INTERNAL_ERR = 0;
    private static final int CAPTURE_NOT_SUPPORTED = 20;
    private static final int CAPTURE_NO_MEDIA_FILES = 3;
    private static final int CAPTURE_PERMISSION_DENIED = 4;
    private static final int CAPTURE_VIDEO = 2;
    private static final String IMAGE_JPEG = "image/jpeg";
    private static final String LOG_TAG = "Capture";
    private static final String VIDEO_3GPP = "video/3gpp";
    private static final String VIDEO_MP4 = "video/mp4";
    private boolean cameraPermissionInManifest;
    private Uri imageUri;
    private int numPics;
    private final PendingRequests pendingRequests = new PendingRequests();

    @Override // org.apache.cordova.CordovaPlugin
    protected void pluginInitialize() {
        super.pluginInitialize();
        this.cameraPermissionInManifest = false;
        try {
            String[] strArr = this.f7cordova.getActivity().getPackageManager().getPackageInfo(this.f7cordova.getActivity().getPackageName(), 4096).requestedPermissions;
            if (strArr != null) {
                for (String str : strArr) {
                    if (str.equals("android.permission.CAMERA")) {
                        this.cameraPermissionInManifest = true;
                        return;
                    }
                }
            }
        } catch (PackageManager.NameNotFoundException e) {
            LOG.e(LOG_TAG, "Failed checking for CAMERA permission in manifest", e);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equals("getFormatData")) {
            callbackContext.success(getFormatData(jSONArray.getString(0), jSONArray.getString(1)));
            return true;
        }
        JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(0);
        if (str.equals("captureAudio")) {
            captureAudio(this.pendingRequests.createRequest(0, jSONObjectOptJSONObject, callbackContext));
        } else if (str.equals("captureImage")) {
            captureImage(this.pendingRequests.createRequest(1, jSONObjectOptJSONObject, callbackContext));
        } else {
            if (!str.equals("captureVideo")) {
                return false;
            }
            captureVideo(this.pendingRequests.createRequest(2, jSONObjectOptJSONObject, callbackContext));
        }
        return true;
    }

    private JSONObject getFormatData(String str, String str2) throws JSONException {
        Uri uriFromFile = str.startsWith("file:") ? Uri.parse(str) : Uri.fromFile(new File(str));
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("height", 0);
        jSONObject.put("width", 0);
        jSONObject.put("bitrate", 0);
        jSONObject.put("duration", 0);
        jSONObject.put("codecs", "");
        if (str2 == null || str2.equals("") || "null".equals(str2)) {
            str2 = FileHelper.getMimeType(uriFromFile, this.f7cordova);
        }
        LOG.d(LOG_TAG, "Mime type = " + str2);
        if (str2.equals(IMAGE_JPEG) || str.endsWith(".jpg")) {
            return getImageData(uriFromFile, jSONObject);
        }
        if (Arrays.asList(AUDIO_TYPES).contains(str2)) {
            return getAudioVideoData(str, jSONObject, false);
        }
        return (str2.equals(VIDEO_3GPP) || str2.equals(VIDEO_MP4)) ? getAudioVideoData(str, jSONObject, true) : jSONObject;
    }

    private JSONObject getImageData(Uri uri, JSONObject jSONObject) throws JSONException {
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(uri.getPath(), options);
        jSONObject.put("height", options.outHeight);
        jSONObject.put("width", options.outWidth);
        return jSONObject;
    }

    private JSONObject getAudioVideoData(String str, JSONObject jSONObject, boolean z) throws JSONException {
        MediaPlayer mediaPlayer = new MediaPlayer();
        try {
            mediaPlayer.setDataSource(str);
            mediaPlayer.prepare();
            jSONObject.put("duration", mediaPlayer.getDuration() / 1000);
            if (z) {
                jSONObject.put("height", mediaPlayer.getVideoHeight());
                jSONObject.put("width", mediaPlayer.getVideoWidth());
            }
        } catch (IOException unused) {
            LOG.d(LOG_TAG, "Error: loading video file");
        }
        return jSONObject;
    }

    private void captureAudio(PendingRequests.Request request) {
        if (!PermissionHelper.hasPermission(this, PhotoViewer.READ)) {
            PermissionHelper.requestPermission(this, request.requestCode, PhotoViewer.READ);
            return;
        }
        try {
            this.f7cordova.startActivityForResult(this, new Intent("android.provider.MediaStore.RECORD_SOUND"), request.requestCode);
        } catch (ActivityNotFoundException unused) {
            this.pendingRequests.resolveWithFailure(request, createErrorObject(20, "No Activity found to handle Audio Capture."));
        }
    }

    private String getTempDirectoryPath() {
        File cacheDir = this.f7cordova.getActivity().getCacheDir();
        cacheDir.mkdirs();
        return cacheDir.getAbsolutePath();
    }

    private void captureImage(PendingRequests.Request request) {
        boolean zHasPermission = PermissionHelper.hasPermission(this, PhotoViewer.WRITE);
        boolean z = this.cameraPermissionInManifest && !PermissionHelper.hasPermission(this, "android.permission.CAMERA");
        if (!zHasPermission || z) {
            if (!zHasPermission && z) {
                PermissionHelper.requestPermissions(this, request.requestCode, new String[]{PhotoViewer.WRITE, "android.permission.CAMERA"});
                return;
            } else if (!zHasPermission) {
                PermissionHelper.requestPermission(this, request.requestCode, PhotoViewer.WRITE);
                return;
            } else {
                PermissionHelper.requestPermission(this, request.requestCode, "android.permission.CAMERA");
                return;
            }
        }
        this.numPics = queryImgDB(whichContentStore()).getCount();
        Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
        ContentResolver contentResolver = this.f7cordova.getActivity().getContentResolver();
        ContentValues contentValues = new ContentValues();
        contentValues.put("mime_type", IMAGE_JPEG);
        this.imageUri = contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues);
        LOG.d(LOG_TAG, "Taking a picture and saving to: " + this.imageUri.toString());
        intent.putExtra("output", this.imageUri);
        this.f7cordova.startActivityForResult(this, intent, request.requestCode);
    }

    private static void createWritableFile(File file) throws IOException {
        file.createNewFile();
        file.setWritable(true, false);
    }

    private void captureVideo(PendingRequests.Request request) {
        if (this.cameraPermissionInManifest && !PermissionHelper.hasPermission(this, "android.permission.CAMERA")) {
            PermissionHelper.requestPermission(this, request.requestCode, "android.permission.CAMERA");
            return;
        }
        Intent intent = new Intent("android.media.action.VIDEO_CAPTURE");
        intent.putExtra("android.intent.extra.durationLimit", request.duration);
        intent.putExtra("android.intent.extra.videoQuality", request.quality);
        this.f7cordova.startActivityForResult(this, intent, request.requestCode);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, final Intent intent) {
        final PendingRequests.Request request = this.pendingRequests.get(i);
        if (i2 == -1) {
            this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.mediacapture.Capture.1
                @Override // java.lang.Runnable
                public void run() {
                    int i3 = request.action;
                    if (i3 == 0) {
                        Capture.this.onAudioActivityResult(request, intent);
                    } else if (i3 == 1) {
                        Capture.this.onImageActivityResult(request);
                    } else {
                        if (i3 != 2) {
                            return;
                        }
                        Capture.this.onVideoActivityResult(request, intent);
                    }
                }
            });
        } else {
            if (i2 == 0) {
                if (request.results.length() > 0) {
                    this.pendingRequests.resolveWithSuccess(request);
                    return;
                } else {
                    this.pendingRequests.resolveWithFailure(request, createErrorObject(3, "Canceled."));
                    return;
                }
            }
            if (request.results.length() > 0) {
                this.pendingRequests.resolveWithSuccess(request);
            } else {
                this.pendingRequests.resolveWithFailure(request, createErrorObject(3, "Did not complete!"));
            }
        }
    }

    public void onAudioActivityResult(PendingRequests.Request request, Intent intent) {
        request.results.put(createMediaFile(intent.getData()));
        if (request.results.length() >= request.limit) {
            this.pendingRequests.resolveWithSuccess(request);
        } else {
            captureAudio(request);
        }
    }

    public void onImageActivityResult(PendingRequests.Request request) {
        request.results.put(createMediaFile(this.imageUri));
        checkForDuplicateImage();
        if (request.results.length() >= request.limit) {
            this.pendingRequests.resolveWithSuccess(request);
        } else {
            captureImage(request);
        }
    }

    public void onVideoActivityResult(PendingRequests.Request request, Intent intent) {
        Uri data = intent != null ? intent.getData() : null;
        if (data == null) {
            data = Uri.fromFile(new File(getTempDirectoryPath(), "Capture.avi"));
        }
        if (data == null) {
            this.pendingRequests.resolveWithFailure(request, createErrorObject(3, "Error: data is null"));
            return;
        }
        request.results.put(createMediaFile(data));
        if (request.results.length() >= request.limit) {
            this.pendingRequests.resolveWithSuccess(request);
        } else {
            captureVideo(request);
        }
    }

    private JSONObject createMediaFile(Uri uri) {
        PluginManager pluginManager;
        File fileMapUriToFile = this.webView.getResourceApi().mapUriToFile(uri);
        JSONObject jSONObject = new JSONObject();
        Class<?> cls = this.webView.getClass();
        try {
            pluginManager = (PluginManager) cls.getMethod("getPluginManager", new Class[0]).invoke(this.webView, new Object[0]);
        } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused) {
            pluginManager = null;
        }
        if (pluginManager == null) {
            try {
                pluginManager = (PluginManager) cls.getField("pluginManager").get(this.webView);
            } catch (IllegalAccessException | NoSuchFieldException unused2) {
            }
        }
        LocalFilesystemURL localFilesystemURLFilesystemURLforLocalPath = ((FileUtils) pluginManager.getPlugin("File")).filesystemURLforLocalPath(fileMapUriToFile.getAbsolutePath());
        try {
            jSONObject.put("name", fileMapUriToFile.getName());
            jSONObject.put("fullPath", Uri.fromFile(fileMapUriToFile));
            if (localFilesystemURLFilesystemURLforLocalPath != null) {
                jSONObject.put("localURL", localFilesystemURLFilesystemURLforLocalPath.toString());
            }
            if (fileMapUriToFile.getAbsoluteFile().toString().endsWith(".3gp") || fileMapUriToFile.getAbsoluteFile().toString().endsWith(".3gpp")) {
                if (uri.toString().contains("/audio/")) {
                    jSONObject.put(Globalization.TYPE, AUDIO_3GPP);
                } else {
                    jSONObject.put(Globalization.TYPE, VIDEO_3GPP);
                }
            } else {
                jSONObject.put(Globalization.TYPE, FileHelper.getMimeType(Uri.fromFile(fileMapUriToFile), this.f7cordova));
            }
            jSONObject.put("lastModifiedDate", fileMapUriToFile.lastModified());
            jSONObject.put("size", fileMapUriToFile.length());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    private JSONObject createErrorObject(int i, String str) {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("code", i);
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, str);
        } catch (JSONException unused) {
        }
        return jSONObject;
    }

    private Cursor queryImgDB(Uri uri) {
        return this.f7cordova.getActivity().getContentResolver().query(uri, new String[]{"_id"}, null, null, null);
    }

    private void checkForDuplicateImage() {
        Uri uriWhichContentStore = whichContentStore();
        Cursor cursorQueryImgDB = queryImgDB(uriWhichContentStore);
        if (cursorQueryImgDB.getCount() - this.numPics == 2) {
            cursorQueryImgDB.moveToLast();
            this.f7cordova.getActivity().getContentResolver().delete(Uri.parse(uriWhichContentStore + "/" + (Integer.valueOf(cursorQueryImgDB.getString(cursorQueryImgDB.getColumnIndex("_id"))).intValue() - 1)), null, null);
        }
    }

    private Uri whichContentStore() {
        if (Environment.getExternalStorageState().equals("mounted")) {
            return MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        }
        return MediaStore.Images.Media.INTERNAL_CONTENT_URI;
    }

    private void executeRequest(PendingRequests.Request request) {
        int i = request.action;
        if (i == 0) {
            captureAudio(request);
        } else if (i == 1) {
            captureImage(request);
        } else {
            if (i != 2) {
                return;
            }
            captureVideo(request);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        PendingRequests.Request request = this.pendingRequests.get(i);
        if (request != null) {
            for (int i2 : iArr) {
                if (i2 == -1) {
                    this.pendingRequests.resolveWithFailure(request, createErrorObject(4, "Permission denied."));
                    return;
                }
            }
            executeRequest(request);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Bundle onSaveInstanceState() {
        return this.pendingRequests.toBundle();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRestoreStateForActivityResult(Bundle bundle, CallbackContext callbackContext) {
        this.pendingRequests.setLastSavedState(bundle, callbackContext);
    }
}

