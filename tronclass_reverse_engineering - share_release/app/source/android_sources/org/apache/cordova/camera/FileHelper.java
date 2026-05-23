package org.apache.cordova.camera;

import android.content.ContentUris;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.webkit.MimeTypeMap;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;
import org.apache.cordova.CordovaInterface;
public class FileHelper {
    private static final String LOG_TAG = "FileUtils";
    private static final String _DATA = "_data";

    public static String getRealPath(Uri uri, CordovaInterface cordovaInterface) {
        return getRealPathFromURI(cordovaInterface.getActivity(), uri);
    }

    public static String getRealPath(String str, CordovaInterface cordovaInterface) {
        return getRealPath(Uri.parse(str), cordovaInterface);
    }

    public static String getRealPathFromURI(Context context, Uri uri) {
        Uri uri2 = null;
        if (DocumentsContract.isDocumentUri(context, uri)) {
            if (isExternalStorageDocument(uri)) {
                String[] strArrSplit = DocumentsContract.getDocumentId(uri).split(":");
                if ("primary".equalsIgnoreCase(strArrSplit[0])) {
                    return Environment.getExternalStorageDirectory() + "/" + strArrSplit[1];
                }
            } else {
                if (isDownloadsDocument(uri)) {
                    String documentId = DocumentsContract.getDocumentId(uri);
                    if (documentId != null && documentId.length() > 0) {
                        if (documentId.startsWith("raw:")) {
                            return documentId.replaceFirst("raw:", "");
                        }
                        try {
                            return getDataColumn(context, ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), Long.valueOf(documentId).longValue()), null, null);
                        } catch (NumberFormatException unused) {
                        }
                    }
                    return null;
                }
                if (isMediaDocument(uri)) {
                    String[] strArrSplit2 = DocumentsContract.getDocumentId(uri).split(":");
                    String str = strArrSplit2[0];
                    if ("image".equals(str)) {
                        uri2 = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                    } else if ("video".equals(str)) {
                        uri2 = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                    } else if ("audio".equals(str)) {
                        uri2 = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                    }
                    return getDataColumn(context, uri2, "_id=?", new String[]{strArrSplit2[1]});
                }
            }
        } else {
            if ("content".equalsIgnoreCase(uri.getScheme())) {
                if (isGooglePhotosUri(uri)) {
                    return uri.getLastPathSegment();
                }
                if (isFileProviderUri(context, uri)) {
                    return getFileProviderPath(context, uri);
                }
                return getDataColumn(context, uri, null, null);
            }
            if ("file".equalsIgnoreCase(uri.getScheme())) {
                return uri.getPath();
            }
        }
        return null;
    }

    public static InputStream getInputStreamFromUriString(String str, CordovaInterface cordovaInterface) throws IOException {
        InputStream fileInputStream;
        if (str.startsWith("content")) {
            return cordovaInterface.getActivity().getContentResolver().openInputStream(Uri.parse(str));
        }
        if (str.startsWith("file://")) {
            int iIndexOf = str.indexOf("?");
            if (iIndexOf > -1) {
                str = str.substring(0, iIndexOf);
            }
            if (str.startsWith("file:///android_asset/")) {
                return cordovaInterface.getActivity().getAssets().open(Uri.parse(str).getPath().substring(15));
            }
            try {
                fileInputStream = cordovaInterface.getActivity().getContentResolver().openInputStream(Uri.parse(str));
            } catch (Exception unused) {
                fileInputStream = null;
            }
            if (fileInputStream == null) {
                fileInputStream = new FileInputStream(getRealPath(str, cordovaInterface));
            }
            return fileInputStream;
        }
        return new FileInputStream(str);
    }

    public static String stripFileProtocol(String str) {
        return str.startsWith("file://") ? str.substring(7) : str;
    }

    public static String getMimeTypeForExtension(String str) {
        int iLastIndexOf = str.lastIndexOf(46);
        if (iLastIndexOf != -1) {
            str = str.substring(iLastIndexOf + 1);
        }
        String lowerCase = str.toLowerCase(Locale.getDefault());
        if (lowerCase.equals("3ga")) {
            return "audio/3gpp";
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(lowerCase);
    }

    public static String getMimeType(String str, CordovaInterface cordovaInterface) {
        Uri uri = Uri.parse(str);
        if (str.startsWith("content://")) {
            return cordovaInterface.getActivity().getContentResolver().getType(uri);
        }
        return getMimeTypeForExtension(uri.getPath());
    }

    public static String getDataColumn(Context context, Uri uri, String str, String[] strArr) throws Throwable {
        Cursor cursorQuery;
        Cursor cursor = null;
        try {
            cursorQuery = context.getContentResolver().query(uri, new String[]{_DATA}, str, strArr, null);
            if (cursorQuery != null) {
                try {
                    if (cursorQuery.moveToFirst()) {
                        String string = cursorQuery.getString(cursorQuery.getColumnIndexOrThrow(_DATA));
                        if (cursorQuery != null) {
                            cursorQuery.close();
                        }
                        return string;
                    }
                } catch (Exception unused) {
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                    return null;
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
            return null;
        } catch (Exception unused2) {
            cursorQuery = null;
        } catch (Throwable th2) {
            th = th2;
        }
    }

    public static boolean isExternalStorageDocument(Uri uri) {
        return "com.android.externalstorage.documents".equals(uri.getAuthority());
    }

    public static boolean isDownloadsDocument(Uri uri) {
        return "com.android.providers.downloads.documents".equals(uri.getAuthority());
    }

    public static boolean isMediaDocument(Uri uri) {
        return "com.android.providers.media.documents".equals(uri.getAuthority());
    }

    public static boolean isGooglePhotosUri(Uri uri) {
        return "com.google.android.apps.photos.content".equals(uri.getAuthority());
    }

    public static boolean isFileProviderUri(Context context, Uri uri) {
        return (context.getPackageName() + ".provider").equals(uri.getAuthority());
    }

    public static String getFileProviderPath(Context context, Uri uri) {
        File file = new File(context.getExternalFilesDir(Environment.DIRECTORY_PICTURES), uri.getLastPathSegment());
        if (file.exists()) {
            return file.toString();
        }
        return null;
    }
}

