package com.hiddentao.cordova.filepath;

import android.content.ContentUris;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import com.onesignal.OneSignalDbContract;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Objects;
import org.apache.commons.io.IOUtils;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PermissionHelper;
import org.json.JSONArray;
import org.json.JSONObject;
public class FilePath extends CordovaPlugin {
    private static final int GET_CLOUD_PATH_ERROR_CODE = 1;
    private static final String GET_CLOUD_PATH_ERROR_ID = "cloud";
    private static final int GET_PATH_ERROR_CODE = 0;
    private static final String GET_PATH_ERROR_ID = null;
    private static final int INVALID_ACTION_ERROR_CODE = -1;
    private static final String READ_PERMISSION_NAME = "android.permission.READ_EXTERNAL_STORAGE";
    public static final int READ_REQ_CODE = 0;
    private static final String TAG = "[FilePath plugin]";
    private static CallbackContext callback;
    private static String uriStr;

    protected void getReadPermission() {
        PermissionHelper.requestPermission(this, 0, "android.permission.READ_EXTERNAL_STORAGE");
    }

    private Boolean checkReadPermission() {
        if (Build.VERSION.SDK_INT >= 33) {
            return true;
        }
        return Boolean.valueOf(PermissionHelper.hasPermission(this, "android.permission.READ_EXTERNAL_STORAGE"));
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws Throwable {
        callback = callbackContext;
        uriStr = jSONArray.getString(0);
        if (str.equals("resolveNativePath")) {
            if (checkReadPermission().booleanValue()) {
                resolveNativePath();
                return true;
            }
            getReadPermission();
            return true;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("code", -1);
        jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Invalid action.");
        callbackContext.error(jSONObject);
        return false;
    }

    public void resolveNativePath() throws Throwable {
        String filePathFromURI;
        JSONObject jSONObject = new JSONObject();
        Uri uri = Uri.parse(uriStr);
        Log.d(TAG, "URI: " + uriStr);
        Context applicationContext = this.f7cordova.getActivity().getApplicationContext();
        if (Build.VERSION.SDK_INT >= 29) {
            filePathFromURI = getDriveFilePath(uri, applicationContext);
        } else {
            filePathFromURI = getFilePathFromURI(applicationContext, uri);
        }
        if (Objects.equals(filePathFromURI, GET_PATH_ERROR_ID)) {
            jSONObject.put("code", 0);
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Unable to resolve filesystem path.");
            callback.error(jSONObject);
        } else if (filePathFromURI.equals(GET_CLOUD_PATH_ERROR_ID)) {
            jSONObject.put("code", 1);
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Files from cloud cannot be resolved to filesystem, download is required.");
            callback.error(jSONObject);
        } else {
            Log.d(TAG, "Filepath: " + filePathFromURI);
            callback.success("file://" + filePathFromURI);
        }
    }

    public static String getFilePathFromURI(Context context, Uri uri) throws Throwable {
        String fileName = getFileName(context, uri);
        if (TextUtils.isEmpty(fileName)) {
            return null;
        }
        String str = Environment.getExternalStorageDirectory().getPath() + File.separator + getApplicationName(context);
        File file = new File(str);
        if (!file.exists() ? file.mkdirs() : true) {
            try {
                File fileCreateTempFile = File.createTempFile("temp", fileName.substring(fileName.lastIndexOf(".")));
                File file2 = new File(str + File.separator + fileName);
                copy(context, uri, fileCreateTempFile);
                copyFileUsingStream(fileCreateTempFile, file2);
                return file2.getAbsolutePath();
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            } catch (Exception unused) {
                return getPath(context, uri);
            }
        }
        return getPath(context, uri);
    }

    public static void copy(Context context, Uri uri, File file) {
        try {
            InputStream inputStreamOpenInputStream = context.getContentResolver().openInputStream(uri);
            if (inputStreamOpenInputStream == null) {
                return;
            }
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            IOUtils.copy(inputStreamOpenInputStream, fileOutputStream);
            inputStreamOpenInputStream.close();
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void copyFileUsingStream(File file, File file2) throws Throwable {
        FileOutputStream fileOutputStream;
        FileInputStream fileInputStream = null;
        try {
            FileInputStream fileInputStream2 = new FileInputStream(file);
            try {
                fileOutputStream = new FileOutputStream(file2);
                try {
                    byte[] bArr = new byte[1024];
                    while (true) {
                        int i = fileInputStream2.read(bArr);
                        if (i > 0) {
                            fileOutputStream.write(bArr, 0, i);
                        } else {
                            fileInputStream2.close();
                            fileOutputStream.close();
                            return;
                        }
                    }
                } catch (Throwable th) {
                    th = th;
                    fileInputStream = fileInputStream2;
                    if (fileInputStream != null) {
                        fileInputStream.close();
                    }
                    if (fileOutputStream != null) {
                        fileOutputStream.close();
                    }
                    throw th;
                }
            } catch (Throwable th2) {
                th = th2;
                fileOutputStream = null;
            }
        } catch (Throwable th3) {
            th = th3;
            fileOutputStream = null;
        }
    }

    public static String getFileName(Context context, Uri uri) {
        String string = null;
        if (Objects.equals(uri.getScheme(), "content")) {
            Cursor cursorQuery = context.getContentResolver().query(uri, null, null, null, null);
            if (cursorQuery != null) {
                try {
                    if (cursorQuery.moveToFirst()) {
                        string = cursorQuery.getString(cursorQuery.getColumnIndex("_display_name"));
                    }
                } finally {
                    cursorQuery.close();
                }
            }
        }
        if (string != null) {
            return string;
        }
        String path = uri.getPath();
        int iLastIndexOf = path.lastIndexOf(47);
        return iLastIndexOf != -1 ? path.substring(iLastIndexOf + 1) : path;
    }

    public static String getApplicationName(Context context) {
        ApplicationInfo applicationInfo = context.getApplicationInfo();
        int i = applicationInfo.labelRes;
        return i == 0 ? applicationInfo.nonLocalizedLabel.toString() : context.getString(i);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws Throwable {
        for (int i2 : iArr) {
            if (i2 == -1) {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("code", 3);
                jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "Filesystem permission was denied.");
                callback.error(jSONObject);
                return;
            }
        }
        if (i == 0) {
            resolveNativePath();
        }
    }

    private static boolean isExternalStorageDocument(Uri uri) {
        return "com.android.externalstorage.documents".equals(uri.getAuthority());
    }

    private static boolean isDownloadsDocument(Uri uri) {
        return "com.android.providers.downloads.documents".equals(uri.getAuthority());
    }

    private static boolean isMediaDocument(Uri uri) {
        return "com.android.providers.media.documents".equals(uri.getAuthority());
    }

    private static boolean isGooglePhotosUri(Uri uri) {
        return "com.google.android.apps.photos.content".equals(uri.getAuthority()) || "com.google.android.apps.photos.contentprovider".equals(uri.getAuthority());
    }

    private static boolean isGoogleDriveUri(Uri uri) {
        return "com.google.android.apps.docs.storage".equals(uri.getAuthority()) || "com.google.android.apps.docs.storage.legacy".equals(uri.getAuthority());
    }

    private static boolean isOneDriveUri(Uri uri) {
        return "com.microsoft.skydrive.content.external".equals(uri.getAuthority());
    }

    /* high-level source view WARN: Removed duplicated region for block: B:21:0x0039 A[PHI: r8
  0x0039: PHI (r8v4 android.database.Cursor) = (r8v3 android.database.Cursor), (r8v5 android.database.Cursor) binds: [B:20:0x0037, B:13:0x002d] A[DONT_GENERATE, DONT_INLINE]] */
    /* high-level source view WARN: Removed duplicated region for block: B:26:0x0041  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static String getDataColumn(Context context, Uri uri, String str, String[] strArr) throws Throwable {
        Cursor cursorQuery;
        Cursor cursor = null;
        try {
            cursorQuery = context.getContentResolver().query(uri, new String[]{"_data"}, str, strArr, null);
            if (cursorQuery != null) {
                try {
                    try {
                        if (cursorQuery.moveToFirst()) {
                            String string = cursorQuery.getString(cursorQuery.getColumnIndexOrThrow("_data"));
                            if (cursorQuery != null) {
                                cursorQuery.close();
                            }
                            return string;
                        }
                    } catch (Exception e) {
                        e = e;
                        e.printStackTrace();
                        if (cursorQuery != null) {
                        }
                    }
                } catch (Throwable th) {
                    th = th;
                    cursor = cursorQuery;
                    if (cursor != null) {
                        cursor.close();
                    }
                    throw th;
                }
            }
        } catch (Exception e2) {
            e = e2;
            cursorQuery = null;
        } catch (Throwable th2) {
            th = th2;
            if (cursor != null) {
            }
            throw th;
        }
        if (cursorQuery != null) {
            cursorQuery.close();
        }
        return null;
    }

    private static String getContentFromSegments(List<String> list) {
        for (String str : list) {
            if (str.startsWith("content://")) {
                return str;
            }
        }
        return "";
    }

    private static boolean fileExists(String str) {
        return new File(str).exists();
    }

    private static String getPathFromExtSD(String[] strArr) {
        String str = strArr[0];
        String str2 = "/" + strArr[1];
        if ("primary".equalsIgnoreCase(str)) {
            String str3 = Environment.getExternalStorageDirectory() + str2;
            if (fileExists(str3)) {
                return str3;
            }
        }
        String str4 = "/storage/" + str + "/" + str2;
        if (fileExists(str4)) {
            return str4;
        }
        String str5 = System.getenv("SECONDARY_STORAGE") + str2;
        if (fileExists(str5)) {
            return str5;
        }
        String str6 = System.getenv("EXTERNAL_STORAGE") + str2;
        return fileExists(str6) ? str6 : "";
    }

    private static void copyFileStream(File file, Uri uri, Context context) throws Throwable {
        FileOutputStream fileOutputStream;
        InputStream inputStream = null;
        try {
            try {
                InputStream inputStreamOpenInputStream = context.getContentResolver().openInputStream(uri);
                try {
                    fileOutputStream = new FileOutputStream(file);
                    try {
                        byte[] bArr = new byte[1024];
                        while (true) {
                            int i = inputStreamOpenInputStream.read(bArr);
                            if (i <= 0) {
                                break;
                            } else {
                                fileOutputStream.write(bArr, 0, i);
                            }
                        }
                        inputStreamOpenInputStream.close();
                        fileOutputStream.close();
                    } catch (Exception e) {
                        e = e;
                        inputStream = inputStreamOpenInputStream;
                        try {
                            e.printStackTrace();
                            inputStream.close();
                            fileOutputStream.close();
                        } catch (Throwable th) {
                            th = th;
                            try {
                                inputStream.close();
                                fileOutputStream.close();
                            } catch (IOException e2) {
                                e2.printStackTrace();
                            }
                            throw th;
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        inputStream = inputStreamOpenInputStream;
                        inputStream.close();
                        fileOutputStream.close();
                        throw th;
                    }
                } catch (Exception e3) {
                    e = e3;
                    fileOutputStream = null;
                } catch (Throwable th3) {
                    th = th3;
                    fileOutputStream = null;
                }
            } catch (IOException e4) {
                e4.printStackTrace();
            }
        } catch (Exception e5) {
            e = e5;
            fileOutputStream = null;
        } catch (Throwable th4) {
            th = th4;
            fileOutputStream = null;
        }
    }

    private static String getPath(Context context, Uri uri) throws Throwable {
        String dataColumn;
        Uri contentUri;
        Log.d(TAG, "File - Authority: " + uri.getAuthority() + ", Fragment: " + uri.getFragment() + ", Port: " + uri.getPort() + ", Query: " + uri.getQuery() + ", Scheme: " + uri.getScheme() + ", Host: " + uri.getHost() + ", Segments: " + uri.getPathSegments().toString());
        Cursor cursor = null;
        if (DocumentsContract.isDocumentUri(context, uri)) {
            if (isExternalStorageDocument(uri)) {
                String[] strArrSplit = DocumentsContract.getDocumentId(uri).split(":");
                String str = strArrSplit[0];
                String pathFromExtSD = getPathFromExtSD(strArrSplit);
                if (pathFromExtSD != "") {
                    return pathFromExtSD;
                }
                return null;
            }
            if (isDownloadsDocument(uri)) {
                try {
                    Cursor cursorQuery = context.getContentResolver().query(uri, new String[]{"_display_name"}, null, null, null);
                    if (cursorQuery != null) {
                        try {
                            if (cursorQuery.moveToFirst()) {
                                String str2 = Environment.getExternalStorageDirectory().toString() + "/Download/" + cursorQuery.getString(0);
                                if (fileExists(str2)) {
                                    if (cursorQuery != null) {
                                        cursorQuery.close();
                                    }
                                    return str2;
                                }
                            }
                        } catch (Throwable th) {
                            th = th;
                            cursor = cursorQuery;
                            if (cursor != null) {
                                cursor.close();
                            }
                            throw th;
                        }
                    }
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                    String documentId = DocumentsContract.getDocumentId(uri);
                    String[] strArr = {"content://downloads/public_downloads", "content://downloads/my_downloads"};
                    for (int i = 0; i < 2; i++) {
                        try {
                            dataColumn = getDataColumn(context, ContentUris.withAppendedId(Uri.parse(strArr[i]), Long.valueOf(documentId).longValue()), null, null);
                        } catch (Exception unused) {
                        }
                        if (dataColumn != null) {
                            return dataColumn;
                        }
                    }
                    try {
                        return getDriveFilePath(uri, context);
                    } catch (Exception unused2) {
                        return uri.getPath();
                    }
                } catch (Throwable th2) {
                    th = th2;
                }
            } else {
                if (isMediaDocument(uri)) {
                    String[] strArrSplit2 = DocumentsContract.getDocumentId(uri).split(":");
                    String str3 = strArrSplit2[0];
                    if ("image".equals(str3)) {
                        contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                    } else if ("video".equals(str3)) {
                        contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                    } else if ("audio".equals(str3)) {
                        contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                    } else {
                        if ("document".equals(str3)) {
                            Cursor cursorQuery2 = context.getContentResolver().query(uri, null, null, null, null);
                            int columnIndex = cursorQuery2.getColumnIndex("_display_name");
                            int columnIndex2 = cursorQuery2.getColumnIndex("_size");
                            cursorQuery2.moveToFirst();
                            String string = cursorQuery2.getString(columnIndex);
                            Long.toString(cursorQuery2.getLong(columnIndex2));
                            context.getExternalFilesDir(null);
                            File file = new File(context.getExternalFilesDir(null).toString() + "/" + string);
                            try {
                                copyFileStream(file, uri, context);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                            return file.getAbsolutePath();
                        }
                        contentUri = MediaStore.Files.getContentUri("external");
                    }
                    return getDataColumn(context, contentUri, "_id=?", new String[]{strArrSplit2[1]});
                }
                if (isGoogleDriveUri(uri)) {
                    return getDriveFilePath(uri, context);
                }
            }
        } else {
            if ("content".equalsIgnoreCase(uri.getScheme())) {
                if (isGooglePhotosUri(uri)) {
                    if (uri.toString().contains("mediakey")) {
                        return getDriveFilePath(uri, context);
                    }
                    String contentFromSegments = getContentFromSegments(uri.getPathSegments());
                    if (Objects.equals(contentFromSegments, "")) {
                        return null;
                    }
                    return getPath(context, Uri.parse(contentFromSegments));
                }
                if (isGoogleDriveUri(uri) || isOneDriveUri(uri)) {
                    return getDriveFilePath(uri, context);
                }
                return getDataColumn(context, uri, null, null);
            }
            if ("file".equalsIgnoreCase(uri.getScheme())) {
                return uri.getPath();
            }
        }
        return null;
    }

    private static String getDriveFilePath(Uri uri, Context context) {
        InputStream inputStreamOpenInputStream;
        FileOutputStream fileOutputStream;
        byte[] bArr;
        Log.i(TAG, "[getDriveFilePath]start");
        Cursor cursorQuery = context.getContentResolver().query(uri, null, null, null, null);
        int columnIndex = cursorQuery.getColumnIndex("_display_name");
        int columnIndex2 = cursorQuery.getColumnIndex("_size");
        cursorQuery.moveToFirst();
        String string = cursorQuery.getString(columnIndex);
        Long.toString(cursorQuery.getLong(columnIndex2));
        File file = new File(context.getCacheDir(), string);
        try {
            inputStreamOpenInputStream = context.getContentResolver().openInputStream(uri);
            fileOutputStream = new FileOutputStream(file);
            int i = 1048576;
            int iMin = Math.min(inputStreamOpenInputStream.available(), 1048576);
            if (iMin != 0) {
                i = iMin;
            }
            bArr = new byte[i];
        } catch (Exception e) {
            Log.i(TAG, "[getDriveFilePath]Exception" + e.getMessage());
        }
        while (true) {
            int i2 = inputStreamOpenInputStream.read(bArr);
            if (i2 == -1) {
                break;
            }
            fileOutputStream.write(bArr, 0, i2);
            return file.getPath();
        }
        Log.i(TAG, "[getDriveFilePath]File Size " + file.length());
        inputStreamOpenInputStream.close();
        fileOutputStream.close();
        Log.i(TAG, "[getDriveFilePath]File Path" + file.getPath());
        return file.getPath();
    }
}

