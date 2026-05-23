package org.opencv.objdetect;

import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.core.Size;
public class FaceDetectorYN {
    protected final long nativeObj;

    private static native long create_0(String str, String str2, double d, double d2, float f, float f2, int i, int i2, int i3);

    private static native long create_1(String str, String str2, double d, double d2, float f, float f2, int i, int i2);

    private static native long create_10(String str, long j, long j2, double d, double d2, float f);

    private static native long create_11(String str, long j, long j2, double d, double d2);

    private static native long create_2(String str, String str2, double d, double d2, float f, float f2, int i);

    private static native long create_3(String str, String str2, double d, double d2, float f, float f2);

    private static native long create_4(String str, String str2, double d, double d2, float f);

    private static native long create_5(String str, String str2, double d, double d2);

    private static native long create_6(String str, long j, long j2, double d, double d2, float f, float f2, int i, int i2, int i3);

    private static native long create_7(String str, long j, long j2, double d, double d2, float f, float f2, int i, int i2);

    private static native long create_8(String str, long j, long j2, double d, double d2, float f, float f2, int i);

    private static native long create_9(String str, long j, long j2, double d, double d2, float f, float f2);

    private static native void delete(long j);

    private static native int detect_0(long j, long j2, long j3);

    private static native double[] getInputSize_0(long j);

    private static native float getNMSThreshold_0(long j);

    private static native float getScoreThreshold_0(long j);

    private static native int getTopK_0(long j);

    private static native void setInputSize_0(long j, double d, double d2);

    private static native void setNMSThreshold_0(long j, float f);

    private static native void setScoreThreshold_0(long j, float f);

    private static native void setTopK_0(long j, int i);

    protected FaceDetectorYN(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static FaceDetectorYN __fromPtr__(long j) {
        return new FaceDetectorYN(j);
    }

    public void setInputSize(Size size) {
        setInputSize_0(this.nativeObj, size.width, size.height);
    }

    public Size getInputSize() {
        return new Size(getInputSize_0(this.nativeObj));
    }

    public void setScoreThreshold(float f) {
        setScoreThreshold_0(this.nativeObj, f);
    }

    public float getScoreThreshold() {
        return getScoreThreshold_0(this.nativeObj);
    }

    public void setNMSThreshold(float f) {
        setNMSThreshold_0(this.nativeObj, f);
    }

    public float getNMSThreshold() {
        return getNMSThreshold_0(this.nativeObj);
    }

    public void setTopK(int i) {
        setTopK_0(this.nativeObj, i);
    }

    public int getTopK() {
        return getTopK_0(this.nativeObj);
    }

    public int detect(Mat mat, Mat mat2) {
        return detect_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public static FaceDetectorYN create(String str, String str2, Size size, float f, float f2, int i, int i2, int i3) {
        return __fromPtr__(create_0(str, str2, size.width, size.height, f, f2, i, i2, i3));
    }

    public static FaceDetectorYN create(String str, String str2, Size size, float f, float f2, int i, int i2) {
        return __fromPtr__(create_1(str, str2, size.width, size.height, f, f2, i, i2));
    }

    public static FaceDetectorYN create(String str, String str2, Size size, float f, float f2, int i) {
        return __fromPtr__(create_2(str, str2, size.width, size.height, f, f2, i));
    }

    public static FaceDetectorYN create(String str, String str2, Size size, float f, float f2) {
        return __fromPtr__(create_3(str, str2, size.width, size.height, f, f2));
    }

    public static FaceDetectorYN create(String str, String str2, Size size, float f) {
        return __fromPtr__(create_4(str, str2, size.width, size.height, f));
    }

    public static FaceDetectorYN create(String str, String str2, Size size) {
        return __fromPtr__(create_5(str, str2, size.width, size.height));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size, float f, float f2, int i, int i2, int i3) {
        return __fromPtr__(create_6(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height, f, f2, i, i2, i3));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size, float f, float f2, int i, int i2) {
        return __fromPtr__(create_7(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height, f, f2, i, i2));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size, float f, float f2, int i) {
        return __fromPtr__(create_8(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height, f, f2, i));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size, float f, float f2) {
        return __fromPtr__(create_9(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height, f, f2));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size, float f) {
        return __fromPtr__(create_10(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height, f));
    }

    public static FaceDetectorYN create(String str, MatOfByte matOfByte, MatOfByte matOfByte2, Size size) {
        return __fromPtr__(create_11(str, matOfByte.nativeObj, matOfByte2.nativeObj, size.width, size.height));
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

