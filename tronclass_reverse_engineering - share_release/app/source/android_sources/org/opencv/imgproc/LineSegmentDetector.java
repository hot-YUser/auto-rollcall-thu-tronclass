package org.opencv.imgproc;

import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.core.Size;
public class LineSegmentDetector extends Algorithm {
    private static native int compareSegments_0(long j, double d, double d2, long j2, long j3, long j4);

    private static native int compareSegments_1(long j, double d, double d2, long j2, long j3);

    private static native void delete(long j);

    private static native void detect_0(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void detect_1(long j, long j2, long j3, long j4, long j5);

    private static native void detect_2(long j, long j2, long j3, long j4);

    private static native void detect_3(long j, long j2, long j3);

    private static native void drawSegments_0(long j, long j2, long j3);

    protected LineSegmentDetector(long j) {
        super(j);
    }

    public static LineSegmentDetector __fromPtr__(long j) {
        return new LineSegmentDetector(j);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3, Mat mat4, Mat mat5) {
        detect_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, mat5.nativeObj);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        detect_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3) {
        detect_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void detect(Mat mat, Mat mat2) {
        detect_3(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public void drawSegments(Mat mat, Mat mat2) {
        drawSegments_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public int compareSegments(Size size, Mat mat, Mat mat2, Mat mat3) {
        return compareSegments_0(this.nativeObj, size.width, size.height, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public int compareSegments(Size size, Mat mat, Mat mat2) {
        return compareSegments_1(this.nativeObj, size.width, size.height, mat.nativeObj, mat2.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

