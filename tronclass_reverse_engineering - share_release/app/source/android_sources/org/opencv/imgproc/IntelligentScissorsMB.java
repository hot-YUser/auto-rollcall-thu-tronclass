package org.opencv.imgproc;

import org.opencv.core.Mat;
import org.opencv.core.Point;
public class IntelligentScissorsMB {
    protected final long nativeObj;

    private static native long IntelligentScissorsMB_0();

    private static native long applyImageFeatures_0(long j, long j2, long j3, long j4, long j5);

    private static native long applyImageFeatures_1(long j, long j2, long j3, long j4);

    private static native long applyImage_0(long j, long j2);

    private static native void buildMap_0(long j, double d, double d2);

    private static native void delete(long j);

    private static native void getContour_0(long j, double d, double d2, long j2, boolean z);

    private static native void getContour_1(long j, double d, double d2, long j2);

    private static native long setEdgeFeatureCannyParameters_0(long j, double d, double d2, int i, boolean z);

    private static native long setEdgeFeatureCannyParameters_1(long j, double d, double d2, int i);

    private static native long setEdgeFeatureCannyParameters_2(long j, double d, double d2);

    private static native long setEdgeFeatureZeroCrossingParameters_0(long j, float f);

    private static native long setEdgeFeatureZeroCrossingParameters_1(long j);

    private static native long setGradientMagnitudeMaxLimit_0(long j, float f);

    private static native long setGradientMagnitudeMaxLimit_1(long j);

    private static native long setWeights_0(long j, float f, float f2, float f3);

    protected IntelligentScissorsMB(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static IntelligentScissorsMB __fromPtr__(long j) {
        return new IntelligentScissorsMB(j);
    }

    public IntelligentScissorsMB() {
        this.nativeObj = IntelligentScissorsMB_0();
    }

    public IntelligentScissorsMB setWeights(float f, float f2, float f3) {
        return new IntelligentScissorsMB(setWeights_0(this.nativeObj, f, f2, f3));
    }

    public IntelligentScissorsMB setGradientMagnitudeMaxLimit(float f) {
        return new IntelligentScissorsMB(setGradientMagnitudeMaxLimit_0(this.nativeObj, f));
    }

    public IntelligentScissorsMB setGradientMagnitudeMaxLimit() {
        return new IntelligentScissorsMB(setGradientMagnitudeMaxLimit_1(this.nativeObj));
    }

    public IntelligentScissorsMB setEdgeFeatureZeroCrossingParameters(float f) {
        return new IntelligentScissorsMB(setEdgeFeatureZeroCrossingParameters_0(this.nativeObj, f));
    }

    public IntelligentScissorsMB setEdgeFeatureZeroCrossingParameters() {
        return new IntelligentScissorsMB(setEdgeFeatureZeroCrossingParameters_1(this.nativeObj));
    }

    public IntelligentScissorsMB setEdgeFeatureCannyParameters(double d, double d2, int i, boolean z) {
        return new IntelligentScissorsMB(setEdgeFeatureCannyParameters_0(this.nativeObj, d, d2, i, z));
    }

    public IntelligentScissorsMB setEdgeFeatureCannyParameters(double d, double d2, int i) {
        return new IntelligentScissorsMB(setEdgeFeatureCannyParameters_1(this.nativeObj, d, d2, i));
    }

    public IntelligentScissorsMB setEdgeFeatureCannyParameters(double d, double d2) {
        return new IntelligentScissorsMB(setEdgeFeatureCannyParameters_2(this.nativeObj, d, d2));
    }

    public IntelligentScissorsMB applyImage(Mat mat) {
        return new IntelligentScissorsMB(applyImage_0(this.nativeObj, mat.nativeObj));
    }

    public IntelligentScissorsMB applyImageFeatures(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        return new IntelligentScissorsMB(applyImageFeatures_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj));
    }

    public IntelligentScissorsMB applyImageFeatures(Mat mat, Mat mat2, Mat mat3) {
        return new IntelligentScissorsMB(applyImageFeatures_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj));
    }

    public void buildMap(Point point) {
        buildMap_0(this.nativeObj, point.x, point.y);
    }

    public void getContour(Point point, Mat mat, boolean z) {
        getContour_0(this.nativeObj, point.x, point.y, mat.nativeObj, z);
    }

    public void getContour(Point point, Mat mat) {
        getContour_1(this.nativeObj, point.x, point.y, mat.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

