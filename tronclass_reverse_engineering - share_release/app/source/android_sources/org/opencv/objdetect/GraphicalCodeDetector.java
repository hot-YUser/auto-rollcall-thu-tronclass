package org.opencv.objdetect;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class GraphicalCodeDetector {
    protected final long nativeObj;

    private static native boolean decodeMulti_0(long j, long j2, long j3, List<String> list, long j4);

    private static native boolean decodeMulti_1(long j, long j2, long j3, List<String> list);

    private static native String decode_0(long j, long j2, long j3, long j4);

    private static native String decode_1(long j, long j2, long j3);

    private static native void delete(long j);

    private static native boolean detectAndDecodeMulti_0(long j, long j2, List<String> list, long j3, long j4);

    private static native boolean detectAndDecodeMulti_1(long j, long j2, List<String> list, long j3);

    private static native boolean detectAndDecodeMulti_2(long j, long j2, List<String> list);

    private static native String detectAndDecode_0(long j, long j2, long j3, long j4);

    private static native String detectAndDecode_1(long j, long j2, long j3);

    private static native String detectAndDecode_2(long j, long j2);

    private static native boolean detectMulti_0(long j, long j2, long j3);

    private static native boolean detect_0(long j, long j2, long j3);

    protected GraphicalCodeDetector(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static GraphicalCodeDetector __fromPtr__(long j) {
        return new GraphicalCodeDetector(j);
    }

    public boolean detect(Mat mat, Mat mat2) {
        return detect_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public String decode(Mat mat, Mat mat2, Mat mat3) {
        return decode_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public String decode(Mat mat, Mat mat2) {
        return decode_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public String detectAndDecode(Mat mat, Mat mat2, Mat mat3) {
        return detectAndDecode_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public String detectAndDecode(Mat mat, Mat mat2) {
        return detectAndDecode_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public String detectAndDecode(Mat mat) {
        return detectAndDecode_2(this.nativeObj, mat.nativeObj);
    }

    public boolean detectMulti(Mat mat, Mat mat2) {
        return detectMulti_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public boolean decodeMulti(Mat mat, Mat mat2, List<String> list, List<Mat> list2) {
        Mat mat3 = new Mat();
        boolean zDecodeMulti_0 = decodeMulti_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, list, mat3.nativeObj);
        Converters.Mat_to_vector_Mat(mat3, list2);
        mat3.release();
        return zDecodeMulti_0;
    }

    public boolean decodeMulti(Mat mat, Mat mat2, List<String> list) {
        return decodeMulti_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, list);
    }

    public boolean detectAndDecodeMulti(Mat mat, List<String> list, Mat mat2, List<Mat> list2) {
        Mat mat3 = new Mat();
        boolean zDetectAndDecodeMulti_0 = detectAndDecodeMulti_0(this.nativeObj, mat.nativeObj, list, mat2.nativeObj, mat3.nativeObj);
        Converters.Mat_to_vector_Mat(mat3, list2);
        mat3.release();
        return zDetectAndDecodeMulti_0;
    }

    public boolean detectAndDecodeMulti(Mat mat, List<String> list, Mat mat2) {
        return detectAndDecodeMulti_1(this.nativeObj, mat.nativeObj, list, mat2.nativeObj);
    }

    public boolean detectAndDecodeMulti(Mat mat, List<String> list) {
        return detectAndDecodeMulti_2(this.nativeObj, mat.nativeObj, list);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

