package org.opencv.objdetect;

import org.opencv.core.Mat;
public class FaceRecognizerSF {
    public static final int FR_COSINE = 0;
    public static final int FR_NORM_L2 = 1;
    protected final long nativeObj;

    private static native void alignCrop_0(long j, long j2, long j3, long j4);

    private static native long create_0(String str, String str2, int i, int i2);

    private static native long create_1(String str, String str2, int i);

    private static native long create_2(String str, String str2);

    private static native void delete(long j);

    private static native void feature_0(long j, long j2, long j3);

    private static native double match_0(long j, long j2, long j3, int i);

    private static native double match_1(long j, long j2, long j3);

    protected FaceRecognizerSF(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static FaceRecognizerSF __fromPtr__(long j) {
        return new FaceRecognizerSF(j);
    }

    public void alignCrop(Mat mat, Mat mat2, Mat mat3) {
        alignCrop_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void feature(Mat mat, Mat mat2) {
        feature_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public double match(Mat mat, Mat mat2, int i) {
        return match_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, i);
    }

    public double match(Mat mat, Mat mat2) {
        return match_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public static FaceRecognizerSF create(String str, String str2, int i, int i2) {
        return __fromPtr__(create_0(str, str2, i, i2));
    }

    public static FaceRecognizerSF create(String str, String str2, int i) {
        return __fromPtr__(create_1(str, str2, i));
    }

    public static FaceRecognizerSF create(String str, String str2) {
        return __fromPtr__(create_2(str, str2));
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

