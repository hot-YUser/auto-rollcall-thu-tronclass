package com.terikon.cordova.photolibrary;

import android.content.Context;
import android.net.Uri;
import android.util.Base64;
import com.terikon.cordova.photolibrary.PhotoLibraryService;
import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class PhotoLibrary extends CordovaPlugin {
    public static final String ACTION_GET_ALBUMS = "getAlbums";
    public static final String ACTION_GET_LIBRARY = "getLibrary";
    public static final String ACTION_GET_PHOTO = "getPhoto";
    public static final String ACTION_GET_THUMBNAIL = "getThumbnail";
    public static final String ACTION_REQUEST_AUTHORIZATION = "requestAuthorization";
    public static final String ACTION_SAVE_IMAGE = "saveImage";
    public static final String ACTION_SAVE_VIDEO = "saveVideo";
    public static final String ACTION_STOP_CACHING = "stopCaching";
    public static final int DEFAULT_HEIGHT = 384;
    public static final double DEFAULT_QUALITY = 0.5d;
    public static final int DEFAULT_WIDTH = 512;
    public static final String PHOTO_LIBRARY_PROTOCOL = "cdvphotolibrary";
    private static final String READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE";
    private static final int REQUEST_AUTHORIZATION_REQ_CODE = 0;
    private static final String WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE";
    public CallbackContext callbackContext;
    private PhotoLibraryService service;

    @Override // org.apache.cordova.CordovaPlugin
    protected void pluginInitialize() {
        super.pluginInitialize();
        this.service = PhotoLibraryService.getInstance();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, final JSONArray jSONArray, final CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        try {
            if (ACTION_GET_LIBRARY.equals(str)) {
                this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.1
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(0);
                            int i = jSONObjectOptJSONObject.getInt("itemsInChunk");
                            double d = jSONObjectOptJSONObject.getDouble("chunkTimeSec");
                            boolean z = jSONObjectOptJSONObject.getBoolean("includeAlbumData");
                            if (!PhotoLibrary.this.f7cordova.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) {
                                CallbackContext callbackContext2 = callbackContext;
                                PhotoLibraryService unused = PhotoLibrary.this.service;
                                callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                            } else {
                                PhotoLibrary.this.service.getLibrary(PhotoLibrary.this.getContext(), new PhotoLibraryGetLibraryOptions(i, d, z), new PhotoLibraryService.ChunkResultRunnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.1.1
                                    @Override // com.terikon.cordova.photolibrary.PhotoLibraryService.ChunkResultRunnable
                                    public void run(ArrayList<JSONObject> arrayList, int i2, boolean z2) {
                                        try {
                                            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, PhotoLibrary.createGetLibraryResult(arrayList, i2, z2));
                                            pluginResult.setKeepCallback(!z2);
                                            callbackContext.sendPluginResult(pluginResult);
                                        } catch (Exception e) {
                                            e.printStackTrace();
                                            callbackContext.error(e.getMessage());
                                        }
                                    }
                                });
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                            callbackContext.error(e.getMessage());
                        }
                    }
                });
                return true;
            }
            if (ACTION_GET_ALBUMS.equals(str)) {
                this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.2
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            if (PhotoLibrary.this.f7cordova.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) {
                                callbackContext.success(PhotoLibrary.createGetAlbumsResult(PhotoLibrary.this.service.getAlbums(PhotoLibrary.this.getContext())));
                            } else {
                                CallbackContext callbackContext2 = callbackContext;
                                PhotoLibraryService unused = PhotoLibrary.this.service;
                                callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                            callbackContext.error(e.getMessage());
                        }
                    }
                });
                return true;
            }
            if (ACTION_GET_THUMBNAIL.equals(str)) {
                this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.3
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            String string = jSONArray.getString(0);
                            JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(1);
                            int i = jSONObjectOptJSONObject.getInt("thumbnailWidth");
                            int i2 = jSONObjectOptJSONObject.getInt("thumbnailHeight");
                            double d = jSONObjectOptJSONObject.getDouble("quality");
                            if (PhotoLibrary.this.f7cordova.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) {
                                callbackContext.sendPluginResult(PhotoLibrary.this.createMultipartPluginResult(PluginResult.Status.OK, PhotoLibrary.this.service.getThumbnail(PhotoLibrary.this.getContext(), string, i, i2, d)));
                            } else {
                                CallbackContext callbackContext2 = callbackContext;
                                PhotoLibraryService unused = PhotoLibrary.this.service;
                                callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                            callbackContext.error(e.getMessage());
                        }
                    }
                });
                return true;
            }
            if (ACTION_GET_PHOTO.equals(str)) {
                this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.4
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            String string = jSONArray.getString(0);
                            if (PhotoLibrary.this.f7cordova.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) {
                                callbackContext.sendPluginResult(PhotoLibrary.this.createMultipartPluginResult(PluginResult.Status.OK, PhotoLibrary.this.service.getPhoto(PhotoLibrary.this.getContext(), string)));
                            } else {
                                CallbackContext callbackContext2 = callbackContext;
                                PhotoLibraryService unused = PhotoLibrary.this.service;
                                callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                            callbackContext.error(e.getMessage());
                        }
                    }
                });
                return true;
            }
            if (ACTION_STOP_CACHING.equals(str)) {
                callbackContext.success();
                return true;
            }
            if (ACTION_REQUEST_AUTHORIZATION.equals(str)) {
                try {
                    JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(0);
                    boolean z = jSONObjectOptJSONObject.getBoolean("read");
                    boolean z2 = jSONObjectOptJSONObject.getBoolean("write");
                    if ((z && !this.f7cordova.hasPermission("android.permission.READ_EXTERNAL_STORAGE")) || (z2 && !this.f7cordova.hasPermission("android.permission.WRITE_EXTERNAL_STORAGE"))) {
                        requestAuthorization(z, z2);
                    } else {
                        callbackContext.success();
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callbackContext.error(e.getMessage());
                }
                return true;
            }
            if (ACTION_SAVE_IMAGE.equals(str)) {
                this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.5
                    @Override // java.lang.Runnable
                    public void run() {
                        try {
                            String string = jSONArray.getString(0);
                            String string2 = jSONArray.getString(1);
                            if (PhotoLibrary.this.f7cordova.hasPermission("android.permission.WRITE_EXTERNAL_STORAGE")) {
                                PhotoLibrary.this.service.saveImage(PhotoLibrary.this.getContext(), PhotoLibrary.this.f7cordova, string, string2, new PhotoLibraryService.JSONObjectRunnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.5.1
                                    @Override // com.terikon.cordova.photolibrary.PhotoLibraryService.JSONObjectRunnable
                                    public void run(JSONObject jSONObject) {
                                        callbackContext.success(jSONObject);
                                    }
                                });
                                return;
                            }
                            CallbackContext callbackContext2 = callbackContext;
                            PhotoLibraryService unused = PhotoLibrary.this.service;
                            callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                        } catch (Exception e2) {
                            e2.printStackTrace();
                            callbackContext.error(e2.getMessage());
                        }
                    }
                });
                return true;
            }
            if (!ACTION_SAVE_VIDEO.equals(str)) {
                return false;
            }
            this.f7cordova.getThreadPool().execute(new Runnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibrary.6
                @Override // java.lang.Runnable
                public void run() {
                    try {
                        String string = jSONArray.getString(0);
                        String string2 = jSONArray.getString(1);
                        if (PhotoLibrary.this.f7cordova.hasPermission("android.permission.WRITE_EXTERNAL_STORAGE")) {
                            PhotoLibrary.this.service.saveVideo(PhotoLibrary.this.getContext(), PhotoLibrary.this.f7cordova, string, string2);
                            callbackContext.success();
                        } else {
                            CallbackContext callbackContext2 = callbackContext;
                            PhotoLibraryService unused = PhotoLibrary.this.service;
                            callbackContext2.error(PhotoLibraryService.PERMISSION_ERROR);
                        }
                    } catch (Exception e2) {
                        e2.printStackTrace();
                        callbackContext.error(e2.getMessage());
                    }
                }
            });
            return true;
        } catch (Exception e2) {
            e2.printStackTrace();
            callbackContext.error(e2.getMessage());
            return false;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Uri remapUri(Uri uri) {
        if (PHOTO_LIBRARY_PROTOCOL.equals(uri.getScheme())) {
            return toPluginUri(uri);
        }
        return null;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public CordovaResourceApi.OpenForReadResult handleOpenForRead(Uri uri) throws IOException {
        int i;
        int i2;
        double d;
        Uri uriFromPluginUri = fromPluginUri(uri);
        boolean z = uriFromPluginUri.getHost().toLowerCase().equals("thumbnail") && uriFromPluginUri.getPath().isEmpty();
        boolean z2 = uriFromPluginUri.getHost().toLowerCase().equals("photo") && uriFromPluginUri.getPath().isEmpty();
        if (!z && !z2) {
            throw new FileNotFoundException("URI not supported by PhotoLibrary");
        }
        String queryParameter = uriFromPluginUri.getQueryParameter("photoId");
        if (queryParameter == null || queryParameter.isEmpty()) {
            throw new FileNotFoundException("Missing 'photoId' query parameter");
        }
        if (z) {
            String queryParameter2 = uriFromPluginUri.getQueryParameter("width");
            if (queryParameter2 != null) {
                try {
                    i = queryParameter2.isEmpty() ? 512 : Integer.parseInt(queryParameter2);
                } catch (NumberFormatException unused) {
                    throw new FileNotFoundException("Incorrect 'width' query parameter");
                }
            }
            int i3 = i;
            String queryParameter3 = uriFromPluginUri.getQueryParameter("height");
            if (queryParameter3 != null) {
                try {
                    i2 = queryParameter3.isEmpty() ? DEFAULT_HEIGHT : Integer.parseInt(queryParameter3);
                } catch (NumberFormatException unused2) {
                    throw new FileNotFoundException("Incorrect 'height' query parameter");
                }
            }
            int i4 = i2;
            String queryParameter4 = uriFromPluginUri.getQueryParameter("quality");
            if (queryParameter4 != null) {
                try {
                    d = queryParameter4.isEmpty() ? 0.5d : Double.parseDouble(queryParameter4);
                } catch (NumberFormatException unused3) {
                    throw new FileNotFoundException("Incorrect 'quality' query parameter");
                }
            }
            PhotoLibraryService.PictureData thumbnail = this.service.getThumbnail(getContext(), queryParameter, i3, i4, d);
            if (thumbnail == null) {
                throw new FileNotFoundException("Could not create thumbnail");
            }
            return new CordovaResourceApi.OpenForReadResult(uri, new ByteArrayInputStream(thumbnail.bytes), thumbnail.mimeType, r3.available(), null);
        }
        PhotoLibraryService.PictureAsStream photoAsStream = this.service.getPhotoAsStream(getContext(), queryParameter);
        return new CordovaResourceApi.OpenForReadResult(uri, photoAsStream.getStream(), photoAsStream.getMimeType(), r3.available(), null);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        super.onRequestPermissionResult(i, strArr, iArr);
        for (int i2 : iArr) {
            if (i2 == -1) {
                this.callbackContext.error(PhotoLibraryService.PERMISSION_ERROR);
                return;
            }
        }
        this.callbackContext.success();
    }
    public Context getContext() {
        return this.f7cordova.getActivity().getApplicationContext();
    }
    public PluginResult createMultipartPluginResult(PluginResult.Status status, PhotoLibraryService.PictureData pictureData) throws JSONException {
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("data", Base64.encodeToString(pictureData.bytes, 2));
        jSONObject.put("mimeType", pictureData.mimeType);
        return new PluginResult(status, jSONObject);
    }

    private void requestAuthorization(boolean z, boolean z2) {
        ArrayList arrayList = new ArrayList();
        if (z) {
            arrayList.add("android.permission.READ_EXTERNAL_STORAGE");
        }
        if (z2) {
            arrayList.add("android.permission.WRITE_EXTERNAL_STORAGE");
        }
        this.f7cordova.requestPermissions(this, 0, (String[]) arrayList.toArray(new String[0]));
    }
    public static JSONArray createGetAlbumsResult(ArrayList<JSONObject> arrayList) throws JSONException {
        return new JSONArray((Collection) arrayList);
    }
    public static JSONObject createGetLibraryResult(ArrayList<JSONObject> arrayList, int i, boolean z) throws JSONException {
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("chunkNum", i);
        jSONObject.put("isLastChunk", z);
        jSONObject.put("library", new JSONArray((Collection) arrayList));
        return jSONObject;
    }
}

