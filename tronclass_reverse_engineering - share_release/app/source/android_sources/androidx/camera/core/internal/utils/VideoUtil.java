package androidx.camera.core.internal.utils;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import androidx.camera.core.Logger;
import androidx.core.util.Preconditions;
public final class VideoUtil {
    private static final String TAG = "VideoUtil";

    private VideoUtil() {
    }

    public static String getAbsolutePathFromUri(ContentResolver contentResolver, Uri uri) throws Throwable {
        Cursor cursor;
        Cursor cursorQuery = null;
        try {
            try {
                cursorQuery = contentResolver.query(uri, new String[]{"_data"}, null, null, null);
                cursor = (Cursor) Preconditions.checkNotNull(cursorQuery);
            } catch (RuntimeException e) {
                e = e;
            }
        } catch (Throwable th) {
            th = th;
        }
        try {
            int columnIndexOrThrow = cursor.getColumnIndexOrThrow("_data");
            cursor.moveToFirst();
            String string = cursor.getString(columnIndexOrThrow);
            if (cursor != null) {
                cursor.close();
            }
            return string;
        } catch (RuntimeException e2) {
            e = e2;
            cursorQuery = cursor;
            Logger.e(TAG, String.format("Failed in getting absolute path for Uri %s with Exception %s", uri.toString(), e.toString()));
            if (cursorQuery != null) {
                cursorQuery.close();
            }
            return "";
        } catch (Throwable th2) {
            th = th2;
            cursorQuery = cursor;
            if (cursorQuery != null) {
                cursorQuery.close();
            }
            throw th;
        }
    }
}

