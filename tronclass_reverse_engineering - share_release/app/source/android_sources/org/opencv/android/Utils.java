package org.opencv.android;

import android.content.Context;
import android.graphics.Bitmap;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import org.opencv.core.CvException;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
public class Utils {
    private static native void nBitmapToMat2(Bitmap bitmap, long j, boolean z);

    private static native void nMatToBitmap2(long j, Bitmap bitmap, boolean z);

    public static String exportResource(Context context, int i) {
        return exportResource(context, i, "OpenCV_data");
    }

    public static String exportResource(Context context, int i, String str) {
        String string = context.getResources().getString(i);
        String strSubstring = string.substring(string.lastIndexOf("/") + 1);
        try {
            InputStream inputStreamOpenRawResource = context.getResources().openRawResource(i);
            File file = new File(context.getDir(str, 0), strSubstring);
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            byte[] bArr = new byte[4096];
            while (true) {
                int i2 = inputStreamOpenRawResource.read(bArr);
                if (i2 != -1) {
                    fileOutputStream.write(bArr, 0, i2);
                } else {
                    inputStreamOpenRawResource.close();
                    fileOutputStream.close();
                    return file.getAbsolutePath();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
            throw new CvException("Failed to export resource " + strSubstring + ". Exception thrown: " + e);
        }
    }

    public static Mat loadResource(Context context, int i) throws IOException {
        return loadResource(context, i, -1);
    }

    public static Mat loadResource(Context context, int i, int i2) throws IOException {
        InputStream inputStreamOpenRawResource = context.getResources().openRawResource(i);
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(inputStreamOpenRawResource.available());
        byte[] bArr = new byte[4096];
        while (true) {
            int i3 = inputStreamOpenRawResource.read(bArr);
            if (i3 != -1) {
                byteArrayOutputStream.write(bArr, 0, i3);
            } else {
                inputStreamOpenRawResource.close();
                Mat mat = new Mat(1, byteArrayOutputStream.size(), 0);
                mat.put(0, 0, byteArrayOutputStream.toByteArray());
                byteArrayOutputStream.close();
                Mat matImdecode = Imgcodecs.imdecode(mat, i2);
                mat.release();
                return matImdecode;
            }
        }
    }

    public static void bitmapToMat(Bitmap bitmap, Mat mat, boolean z) {
        if (bitmap == null) {
            throw new IllegalArgumentException("bmp == null");
        }
        if (mat == null) {
            throw new IllegalArgumentException("mat == null");
        }
        nBitmapToMat2(bitmap, mat.nativeObj, z);
    }

    public static void bitmapToMat(Bitmap bitmap, Mat mat) {
        bitmapToMat(bitmap, mat, false);
    }

    public static void matToBitmap(Mat mat, Bitmap bitmap, boolean z) {
        if (mat == null) {
            throw new IllegalArgumentException("mat == null");
        }
        if (bitmap == null) {
            throw new IllegalArgumentException("bmp == null");
        }
        nMatToBitmap2(mat.nativeObj, bitmap, z);
    }

    public static void matToBitmap(Mat mat, Bitmap bitmap) {
        matToBitmap(mat, bitmap, false);
    }
}

