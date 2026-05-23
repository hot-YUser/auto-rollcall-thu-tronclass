package com.king.camera.scan.util;

import android.content.ContentResolver;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.ExifInterface;
import android.media.Image;
import android.net.Uri;
import android.provider.MediaStore;
import androidx.camera.core.ImageProxy;
import com.king.camera.scan.FrameMetadata;
import com.king.logx.LogX;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
public class BitmapUtils {
    private BitmapUtils() {
        throw new AssertionError();
    }

    public static Bitmap getBitmap(byte[] bArr, FrameMetadata frameMetadata) {
        return getBitmap(ByteBuffer.wrap(bArr), frameMetadata.getWidth(), frameMetadata.getHeight(), frameMetadata.getRotation());
    }

    public static Bitmap getBitmap(ByteBuffer byteBuffer, int i, int i2, int i3) {
        byteBuffer.rewind();
        int iLimit = byteBuffer.limit();
        byte[] bArr = new byte[iLimit];
        byteBuffer.get(bArr, 0, iLimit);
        try {
            YuvImage yuvImage = new YuvImage(bArr, 17, i, i2, null);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            yuvImage.compressToJpeg(new Rect(0, 0, i, i2), 80, byteArrayOutputStream);
            Bitmap bitmapDecodeByteArray = BitmapFactory.decodeByteArray(byteArrayOutputStream.toByteArray(), 0, byteArrayOutputStream.size());
            byteArrayOutputStream.close();
            return rotateBitmap(bitmapDecodeByteArray, i3, false, false);
        } catch (Exception e) {
            LogX.e(e);
            return null;
        }
    }

    public static Bitmap getBitmap(ImageProxy imageProxy) {
        return getBitmap(ByteBuffer.wrap(yuv420ThreePlanesToNV21(imageProxy.getImage().getPlanes(), imageProxy.getWidth(), imageProxy.getHeight())), imageProxy.getWidth(), imageProxy.getHeight(), imageProxy.getImageInfo().getRotationDegrees());
    }

    private static Bitmap rotateBitmap(Bitmap bitmap, int i, boolean z, boolean z2) {
        Matrix matrix = new Matrix();
        matrix.postRotate(i);
        matrix.postScale(z ? -1.0f : 1.0f, z2 ? -1.0f : 1.0f);
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
        if (bitmapCreateBitmap != bitmap) {
            bitmap.recycle();
        }
        return bitmapCreateBitmap;
    }

    /* high-level source view WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* high-level source view WARN: Multi-variable type inference failed */
    public static Bitmap getBitmapFromContentUri(ContentResolver contentResolver, Uri uri) throws IOException {
        Bitmap bitmap = MediaStore.Images.Media.getBitmap(contentResolver, uri);
        if (bitmap == null) {
            return null;
        }
        int exifOrientationTag = getExifOrientationTag(contentResolver, uri);
        int i = -90;
        boolean z = false;
        boolean z2 = 1;
        switch (exifOrientationTag) {
            case 2:
                i = 0;
                z = true;
                z2 = i;
                break;
            case 3:
                i = 180;
                z2 = 0;
                break;
            case 4:
                i = 0;
                break;
            case 5:
                i = 90;
                z2 = 0;
                z = true;
                break;
            case 6:
                i = 90;
                z2 = 0;
                break;
            case 7:
                z2 = 0;
                z = true;
                break;
            case 8:
                z2 = 0;
                break;
            default:
                i = 0;
                z2 = i;
                break;
        }
        return rotateBitmap(bitmap, i, z, z2);
    }

    private static int getExifOrientationTag(ContentResolver contentResolver, Uri uri) {
        if (!"content".equals(uri.getScheme()) && !"file".equals(uri.getScheme())) {
            return 0;
        }
        try {
            InputStream inputStreamOpenInputStream = contentResolver.openInputStream(uri);
            if (inputStreamOpenInputStream == null) {
                if (inputStreamOpenInputStream != null) {
                    inputStreamOpenInputStream.close();
                }
                return 0;
            }
            try {
                ExifInterface exifInterface = new ExifInterface(inputStreamOpenInputStream);
                if (inputStreamOpenInputStream != null) {
                    inputStreamOpenInputStream.close();
                }
                return exifInterface.getAttributeInt(androidx.exifinterface.media.ExifInterface.TAG_ORIENTATION, 1);
            } finally {
            }
        } catch (IOException e) {
            LogX.e(e, "failed to open file to read rotation meta data: " + uri, new Object[0]);
            return 0;
        }
    }

    public static byte[] yuv420ThreePlanesToNV21(Image.Plane[] planeArr, int i, int i2) {
        int i3 = i * i2;
        byte[] bArr = new byte[((i3 / 4) * 2) + i3];
        if (areUVPlanesNV21(planeArr, i, i2)) {
            planeArr[0].getBuffer().get(bArr, 0, i3);
            ByteBuffer buffer = planeArr[1].getBuffer();
            planeArr[2].getBuffer().get(bArr, i3, 1);
            buffer.get(bArr, i3 + 1, ((i3 * 2) / 4) - 1);
        } else {
            unpackPlane(planeArr[0], i, i2, bArr, 0, 1);
            unpackPlane(planeArr[1], i, i2, bArr, i3 + 1, 2);
            unpackPlane(planeArr[2], i, i2, bArr, i3, 2);
        }
        return bArr;
    }

    private static boolean areUVPlanesNV21(Image.Plane[] planeArr, int i, int i2) {
        int i3 = i * i2;
        ByteBuffer buffer = planeArr[1].getBuffer();
        ByteBuffer buffer2 = planeArr[2].getBuffer();
        int iPosition = buffer2.position();
        int iLimit = buffer.limit();
        buffer2.position(iPosition + 1);
        buffer.limit(iLimit - 1);
        boolean z = buffer2.remaining() == ((i3 * 2) / 4) - 2 && buffer2.compareTo(buffer) == 0;
        buffer2.position(iPosition);
        buffer.limit(iLimit);
        return z;
    }

    private static void unpackPlane(Image.Plane plane, int i, int i2, byte[] bArr, int i3, int i4) {
        ByteBuffer buffer = plane.getBuffer();
        buffer.rewind();
        int iLimit = ((buffer.limit() + plane.getRowStride()) - 1) / plane.getRowStride();
        if (iLimit == 0) {
            return;
        }
        int i5 = i / (i2 / iLimit);
        int rowStride = 0;
        for (int i6 = 0; i6 < iLimit; i6++) {
            int pixelStride = rowStride;
            for (int i7 = 0; i7 < i5; i7++) {
                bArr[i3] = buffer.get(pixelStride);
                i3 += i4;
                pixelStride += plane.getPixelStride();
            }
            rowStride += plane.getRowStride();
        }
    }
}

