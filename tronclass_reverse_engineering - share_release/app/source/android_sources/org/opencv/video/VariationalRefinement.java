package org.opencv.video;

import org.opencv.core.Mat;
public class VariationalRefinement extends DenseOpticalFlow {
    private static native void calcUV_0(long j, long j2, long j3, long j4, long j5);

    private static native long create_0();

    private static native void delete(long j);

    private static native float getAlpha_0(long j);

    private static native float getDelta_0(long j);

    private static native int getFixedPointIterations_0(long j);

    private static native float getGamma_0(long j);

    private static native float getOmega_0(long j);

    private static native int getSorIterations_0(long j);

    private static native void setAlpha_0(long j, float f);

    private static native void setDelta_0(long j, float f);

    private static native void setFixedPointIterations_0(long j, int i);

    private static native void setGamma_0(long j, float f);

    private static native void setOmega_0(long j, float f);

    private static native void setSorIterations_0(long j, int i);

    protected VariationalRefinement(long j) {
        super(j);
    }

    public static VariationalRefinement __fromPtr__(long j) {
        return new VariationalRefinement(j);
    }

    public void calcUV(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        calcUV_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public int getFixedPointIterations() {
        return getFixedPointIterations_0(this.nativeObj);
    }

    public void setFixedPointIterations(int i) {
        setFixedPointIterations_0(this.nativeObj, i);
    }

    public int getSorIterations() {
        return getSorIterations_0(this.nativeObj);
    }

    public void setSorIterations(int i) {
        setSorIterations_0(this.nativeObj, i);
    }

    public float getOmega() {
        return getOmega_0(this.nativeObj);
    }

    public void setOmega(float f) {
        setOmega_0(this.nativeObj, f);
    }

    public float getAlpha() {
        return getAlpha_0(this.nativeObj);
    }

    public void setAlpha(float f) {
        setAlpha_0(this.nativeObj, f);
    }

    public float getDelta() {
        return getDelta_0(this.nativeObj);
    }

    public void setDelta(float f) {
        setDelta_0(this.nativeObj, f);
    }

    public float getGamma() {
        return getGamma_0(this.nativeObj);
    }

    public void setGamma(float f) {
        setGamma_0(this.nativeObj, f);
    }

    public static VariationalRefinement create() {
        return __fromPtr__(create_0());
    }

    @Override // org.opencv.video.DenseOpticalFlow, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

