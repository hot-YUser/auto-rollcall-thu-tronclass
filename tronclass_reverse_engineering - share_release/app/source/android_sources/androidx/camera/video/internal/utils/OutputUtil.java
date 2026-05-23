package androidx.camera.video.internal.utils;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import androidx.camera.core.Logger;
import java.io.File;
public final class OutputUtil {
    private static final String TAG = "OutputUtil";

    private OutputUtil() {
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:25:0x0050  */
    /* high-level source view WARN: Type inference failed for: r1v0 */
    /* high-level source view WARN: Type inference failed for: r1v1, types: [android.database.Cursor] */
    /* high-level source view WARN: Type inference failed for: r1v2 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static String getAbsolutePathFromUri(ContentResolver contentResolver, Uri uri, String str) throws Throwable {
        Cursor cursorQuery;
        ?? r1 = 0;
        try {
            try {
                cursorQuery = contentResolver.query(uri, new String[]{str}, null, null, null);
                if (cursorQuery == null) {
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                    return null;
                }
                try {
                    int columnIndexOrThrow = cursorQuery.getColumnIndexOrThrow(str);
                    cursorQuery.moveToFirst();
                    String string = cursorQuery.getString(columnIndexOrThrow);
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                    return string;
                } catch (RuntimeException e) {
                    e = e;
                    Logger.e(TAG, String.format("Failed in getting absolute path for Uri %s with Exception %s", uri.toString(), e.toString()));
                    if (cursorQuery != null) {
                        cursorQuery.close();
                    }
                    return null;
                }
            } catch (Throwable th) {
                th = th;
                r1 = contentResolver;
                if (r1 != 0) {
                    r1.close();
                }
                throw th;
            }
        } catch (RuntimeException e2) {
            e = e2;
            cursorQuery = null;
        } catch (Throwable th2) {
            th = th2;
            if (r1 != 0) {
            }
            throw th;
        }
    }

    public static boolean createParentFolder(File file) {
        File parentFile = file.getParentFile();
        if (parentFile == null) {
            return false;
        }
        return parentFile.exists() ? parentFile.isDirectory() : parentFile.mkdirs();
    }
}

