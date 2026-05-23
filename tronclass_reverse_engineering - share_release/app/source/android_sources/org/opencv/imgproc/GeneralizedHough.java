package org.opencv.imgproc;

import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.core.Point;
public class GeneralizedHough extends Algorithm {
    private static native void delete(long j);

    private static native void detect_0(long j, long j2, long j3, long j4);

    private static native void detect_1(long j, long j2, long j3);

    private static native void detect_2(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void detect_3(long j, long j2, long j3, long j4, long j5);

    private static native int getCannyHighThresh_0(long j);

    private static native int getCannyLowThresh_0(long j);

    private static native double getDp_0(long j);

    private static native int getMaxBufferSize_0(long j);

    private static native double getMinDist_0(long j);

    private static native void setCannyHighThresh_0(long j, int i);

    private static native void setCannyLowThresh_0(long j, int i);

    private static native void setDp_0(long j, double d);

    private static native void setMaxBufferSize_0(long j, int i);

    private static native void setMinDist_0(long j, double d);

    private static native void setTemplate_0(long j, long j2, double d, double d2);

    private static native void setTemplate_1(long j, long j2);

    private static native void setTemplate_2(long j, long j2, long j3, long j4, double d, double d2);

    private static native void setTemplate_3(long j, long j2, long j3, long j4);

    protected GeneralizedHough(long j) {
        super(j);
    }

    public static GeneralizedHough __fromPtr__(long j) {
        return new GeneralizedHough(j);
    }

    public void setTemplate(Mat mat, Point point) {
        setTemplate_0(this.nativeObj, mat.nativeObj, point.x, point.y);
    }

    public void setTemplate(Mat mat) {
        setTemplate_1(this.nativeObj, mat.nativeObj);
    }

    public void setTemplate(Mat mat, Mat mat2, Mat mat3, Point point) {
        setTemplate_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y);
    }

    public void setTemplate(Mat mat, Mat mat2, Mat mat3) {
        setTemplate_3(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3) {
        detect_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void detect(Mat mat, Mat mat2) {
        detect_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3, Mat mat4, Mat mat5) {
        detect_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, mat5.nativeObj);
    }

    public void detect(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        detect_3(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public void setCannyLowThresh(int i) {
        setCannyLowThresh_0(this.nativeObj, i);
    }

    public int getCannyLowThresh() {
        return getCannyLowThresh_0(this.nativeObj);
    }

    public void setCannyHighThresh(int i) {
        setCannyHighThresh_0(this.nativeObj, i);
    }

    public int getCannyHighThresh() {
        return getCannyHighThresh_0(this.nativeObj);
    }

    public void setMinDist(double d) {
        setMinDist_0(this.nativeObj, d);
    }

    public double getMinDist() {
        return getMinDist_0(this.nativeObj);
    }

    public void setDp(double d) {
        setDp_0(this.nativeObj, d);
    }

    public double getDp() {
        return getDp_0(this.nativeObj);
    }

    public void setMaxBufferSize(int i) {
        setMaxBufferSize_0(this.nativeObj, i);
    }

    public int getMaxBufferSize() {
        return getMaxBufferSize_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

