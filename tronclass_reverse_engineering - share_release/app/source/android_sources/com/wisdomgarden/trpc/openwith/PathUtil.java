package com.wisdomgarden.trpc.openwith;

import android.content.ContentUris;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
class PathUtil {
    PathUtil() {
    }

    public static PathData getPath(Context context, Uri uri, File file) throws Exception {
        String str;
        String[] strArr;
        Cursor cursor = null;
        if (!DocumentsContract.isDocumentUri(context, uri)) {
            str = null;
            strArr = null;
        } else {
            if (isExternalStorageDocument(uri)) {
                return new PathData(Environment.getExternalStorageDirectory() + "/" + DocumentsContract.getDocumentId(uri).split(":")[1]);
            }
            if (isDownloadsDocument(uri)) {
                uri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), Long.valueOf(DocumentsContract.getDocumentId(uri)).longValue());
            } else if (isMediaDocument(uri)) {
                String[] strArrSplit = DocumentsContract.getDocumentId(uri).split(":");
                String str2 = strArrSplit[0];
                if ("image".equals(str2)) {
                    uri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                } else if ("video".equals(str2)) {
                    uri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                } else if ("audio".equals(str2)) {
                    uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                }
                str = "_id=?";
                strArr = new String[]{strArrSplit[1]};
            }
            str = null;
            strArr = null;
        }
        if ("content".equalsIgnoreCase(uri.getScheme())) {
            try {
                Cursor cursorQuery = context.getContentResolver().query(uri, new String[]{"_data", "_display_name"}, str, strArr, null);
                try {
                    int columnIndex = cursorQuery.getColumnIndex("_data");
                    int columnIndex2 = cursorQuery.getColumnIndex("_display_name");
                    cursorQuery.moveToFirst();
                    if (columnIndex >= 0) {
                        PathData pathData = new PathData(cursorQuery.getString(columnIndex));
                        if (cursorQuery != null) {
                            cursorQuery.close();
                        }
                        return pathData;
                    }
                    if (columnIndex2 >= 0) {
                        String string = cursorQuery.getString(columnIndex2);
                        PathData pathData2 = new PathData(getFilePathFromContent(context, uri, string, file), string, true);
                        if (cursorQuery != null) {
                            cursorQuery.close();
                        }
                        return pathData2;
                    }
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                } catch (Throwable th) {
                    th = th;
                    cursor = cursorQuery;
                    if (cursor != null) {
                        cursor.close();
                    }
                    throw th;
                }
            } catch (Throwable th2) {
                th = th2;
            }
        } else if ("file".equalsIgnoreCase(uri.getScheme())) {
            return new PathData(uri.getPath());
        }
        return null;
    }

    private static String getFilePathFromContent(Context context, Uri uri, String str, File file) throws Exception {
        InputStream inputStreamOpenInputStream = context.getContentResolver().openInputStream(uri);
        File file2 = new File(file, str);
        file2.deleteOnExit();
        file2.createNewFile();
        FileOutputStream fileOutputStream = new FileOutputStream(file2, false);
        byte[] bArr = new byte[102400];
        while (true) {
            int i = inputStreamOpenInputStream.read(bArr);
            if (i != -1) {
                fileOutputStream.write(bArr, 0, i);
            } else {
                inputStreamOpenInputStream.close();
                fileOutputStream.close();
                return file2.getAbsolutePath();
            }
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
}

