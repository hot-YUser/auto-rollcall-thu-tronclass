package com.wisdomgarden.trpc.utils;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
public class FilePathUtil {
    public static String getRealPathFromURI(Context context, Uri uri) {
        try {
            Cursor cursorQuery = context.getContentResolver().query(uri, null, null, null, null);
            if (cursorQuery == null) {
                return uri.getPath();
            }
            cursorQuery.moveToFirst();
            String string = cursorQuery.getString(cursorQuery.getColumnIndex("_data"));
            cursorQuery.close();
            return string;
        } catch (Throwable unused) {
            return null;
        }
    }
}

