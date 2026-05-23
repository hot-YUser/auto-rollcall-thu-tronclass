package com.getcapacitor.plugin.camera;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.net.Uri;
import androidx.exifinterface.media.ExifInterface;
import com.getcapacitor.FileUtils;
import com.getcapacitor.Logger;
import java.io.IOException;
import java.io.InputStream;
public class ImageUtils {
    public static Bitmap resize(Bitmap bitmap, int i, int i2) {
        return resize(bitmap, i, i2, false);
    }

    public static Bitmap resize(Bitmap bitmap, int i, int i2, boolean z) {
        if (z) {
            return resizePreservingAspectRatio(bitmap, i, i2);
        }
        return resizeImageWithoutPreservingAspectRatio(bitmap, i, i2);
    }

    private static Bitmap resizeImageWithoutPreservingAspectRatio(Bitmap bitmap, int i, int i2) {
        float width = bitmap.getWidth() / bitmap.getHeight();
        if (i > 0 && i2 > 0) {
            return Bitmap.createScaledBitmap(bitmap, i, i2, false);
        }
        if (i > 0) {
            return Bitmap.createScaledBitmap(bitmap, i, (int) (i / width), false);
        }
        return i2 > 0 ? Bitmap.createScaledBitmap(bitmap, (int) (i2 * width), i2, false) : bitmap;
    }

    private static Bitmap resizePreservingAspectRatio(Bitmap bitmap, int i, int i2) {
        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        if (i2 == 0) {
            i2 = height;
        }
        if (i == 0) {
            i = width;
        }
        float fMin = Math.min(width, i);
        float f = (height * fMin) / width;
        float f2 = i2;
        if (f > f2) {
            fMin = (width * i2) / height;
            f = f2;
        }
        return Bitmap.createScaledBitmap(bitmap, Math.round(fMin), Math.round(f), false);
    }

    private static Bitmap transform(Bitmap bitmap, Matrix matrix) {
        return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
    }

    public static Bitmap correctOrientation(Context context, Bitmap bitmap, Uri uri) throws IOException {
        int orientation = getOrientation(context, uri);
        if (orientation == 0) {
            return bitmap;
        }
        Matrix matrix = new Matrix();
        matrix.postRotate(orientation);
        return transform(bitmap, matrix);
    }

    private static Bitmap correctOrientationOlder(Context context, Bitmap bitmap, Uri uri) {
        String[] strArr = {"_data", "orientation"};
        Cursor cursorQuery = context.getContentResolver().query(uri, strArr, null, null, null);
        int i = (cursorQuery == null || !cursorQuery.moveToFirst()) ? -1 : cursorQuery.getInt(cursorQuery.getColumnIndex(strArr[0]));
        Matrix matrix = new Matrix();
        if (i != -1) {
            matrix.postRotate(i);
        }
        return transform(bitmap, matrix);
    }

    private static int getOrientation(Context context, Uri uri) throws IOException {
        InputStream inputStreamOpenInputStream = null;
        try {
            inputStreamOpenInputStream = context.getContentResolver().openInputStream(uri);
            int attributeInt = new ExifInterface(inputStreamOpenInputStream).getAttributeInt(ExifInterface.TAG_ORIENTATION, 1);
            return attributeInt == 6 ? 90 : attributeInt == 3 ? 180 : attributeInt == 8 ? 270 : 0;
        } finally {
            if (inputStreamOpenInputStream != null) {
                inputStreamOpenInputStream.close();
            }
        }
    }

    public static ExifWrapper getExifData(Context context, Bitmap bitmap, Uri uri) {
        try {
            return new ExifWrapper(new ExifInterface(FileUtils.getFileUrlForUri(context, uri)));
        } catch (IOException e) {
            Logger.error("Error loading exif data from image", e);
            return new ExifWrapper(null);
        }
    }
}

