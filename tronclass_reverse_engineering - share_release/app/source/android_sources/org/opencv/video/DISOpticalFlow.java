package org.opencv.video;
public class DISOpticalFlow extends DenseOpticalFlow {
    public static final int PRESET_FAST = 1;
    public static final int PRESET_MEDIUM = 2;
    public static final int PRESET_ULTRAFAST = 0;

    private static native long create_0(int i);

    private static native long create_1();

    private static native void delete(long j);

    private static native int getFinestScale_0(long j);

    private static native int getGradientDescentIterations_0(long j);

    private static native int getPatchSize_0(long j);

    private static native int getPatchStride_0(long j);

    private static native boolean getUseMeanNormalization_0(long j);

    private static native boolean getUseSpatialPropagation_0(long j);

    private static native float getVariationalRefinementAlpha_0(long j);

    private static native float getVariationalRefinementDelta_0(long j);

    private static native float getVariationalRefinementGamma_0(long j);

    private static native int getVariationalRefinementIterations_0(long j);

    private static native void setFinestScale_0(long j, int i);

    private static native void setGradientDescentIterations_0(long j, int i);

    private static native void setPatchSize_0(long j, int i);

    private static native void setPatchStride_0(long j, int i);

    private static native void setUseMeanNormalization_0(long j, boolean z);

    private static native void setUseSpatialPropagation_0(long j, boolean z);

    private static native void setVariationalRefinementAlpha_0(long j, float f);

    private static native void setVariationalRefinementDelta_0(long j, float f);

    private static native void setVariationalRefinementGamma_0(long j, float f);

    private static native void setVariationalRefinementIterations_0(long j, int i);

    protected DISOpticalFlow(long j) {
        super(j);
    }

    public static DISOpticalFlow __fromPtr__(long j) {
        return new DISOpticalFlow(j);
    }

    public int getFinestScale() {
        return getFinestScale_0(this.nativeObj);
    }

    public void setFinestScale(int i) {
        setFinestScale_0(this.nativeObj, i);
    }

    public int getPatchSize() {
        return getPatchSize_0(this.nativeObj);
    }

    public void setPatchSize(int i) {
        setPatchSize_0(this.nativeObj, i);
    }

    public int getPatchStride() {
        return getPatchStride_0(this.nativeObj);
    }

    public void setPatchStride(int i) {
        setPatchStride_0(this.nativeObj, i);
    }

    public int getGradientDescentIterations() {
        return getGradientDescentIterations_0(this.nativeObj);
    }

    public void setGradientDescentIterations(int i) {
        setGradientDescentIterations_0(this.nativeObj, i);
    }

    public int getVariationalRefinementIterations() {
        return getVariationalRefinementIterations_0(this.nativeObj);
    }

    public void setVariationalRefinementIterations(int i) {
        setVariationalRefinementIterations_0(this.nativeObj, i);
    }

    public float getVariationalRefinementAlpha() {
        return getVariationalRefinementAlpha_0(this.nativeObj);
    }

    public void setVariationalRefinementAlpha(float f) {
        setVariationalRefinementAlpha_0(this.nativeObj, f);
    }

    public float getVariationalRefinementDelta() {
        return getVariationalRefinementDelta_0(this.nativeObj);
    }

    public void setVariationalRefinementDelta(float f) {
        setVariationalRefinementDelta_0(this.nativeObj, f);
    }

    public float getVariationalRefinementGamma() {
        return getVariationalRefinementGamma_0(this.nativeObj);
    }

    public void setVariationalRefinementGamma(float f) {
        setVariationalRefinementGamma_0(this.nativeObj, f);
    }

    public boolean getUseMeanNormalization() {
        return getUseMeanNormalization_0(this.nativeObj);
    }

    public void setUseMeanNormalization(boolean z) {
        setUseMeanNormalization_0(this.nativeObj, z);
    }

    public boolean getUseSpatialPropagation() {
        return getUseSpatialPropagation_0(this.nativeObj);
    }

    public void setUseSpatialPropagation(boolean z) {
        setUseSpatialPropagation_0(this.nativeObj, z);
    }

    public static DISOpticalFlow create(int i) {
        return __fromPtr__(create_0(i));
    }

    public static DISOpticalFlow create() {
        return __fromPtr__(create_1());
    }

    @Override // org.opencv.video.DenseOpticalFlow, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

