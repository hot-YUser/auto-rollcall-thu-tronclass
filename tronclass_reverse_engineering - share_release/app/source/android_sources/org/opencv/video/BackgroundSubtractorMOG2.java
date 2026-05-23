package org.opencv.video;

import org.opencv.core.Mat;
public class BackgroundSubtractorMOG2 extends BackgroundSubtractor {
    private static native void apply_0(long j, long j2, long j3, double d);

    private static native void apply_1(long j, long j2, long j3);

    private static native void delete(long j);

    private static native double getBackgroundRatio_0(long j);

    private static native double getComplexityReductionThreshold_0(long j);

    private static native boolean getDetectShadows_0(long j);

    private static native int getHistory_0(long j);

    private static native int getNMixtures_0(long j);

    private static native double getShadowThreshold_0(long j);

    private static native int getShadowValue_0(long j);

    private static native double getVarInit_0(long j);

    private static native double getVarMax_0(long j);

    private static native double getVarMin_0(long j);

    private static native double getVarThresholdGen_0(long j);

    private static native double getVarThreshold_0(long j);

    private static native void setBackgroundRatio_0(long j, double d);

    private static native void setComplexityReductionThreshold_0(long j, double d);

    private static native void setDetectShadows_0(long j, boolean z);

    private static native void setHistory_0(long j, int i);

    private static native void setNMixtures_0(long j, int i);

    private static native void setShadowThreshold_0(long j, double d);

    private static native void setShadowValue_0(long j, int i);

    private static native void setVarInit_0(long j, double d);

    private static native void setVarMax_0(long j, double d);

    private static native void setVarMin_0(long j, double d);

    private static native void setVarThresholdGen_0(long j, double d);

    private static native void setVarThreshold_0(long j, double d);

    protected BackgroundSubtractorMOG2(long j) {
        super(j);
    }

    public static BackgroundSubtractorMOG2 __fromPtr__(long j) {
        return new BackgroundSubtractorMOG2(j);
    }

    public int getHistory() {
        return getHistory_0(this.nativeObj);
    }

    public void setHistory(int i) {
        setHistory_0(this.nativeObj, i);
    }

    public int getNMixtures() {
        return getNMixtures_0(this.nativeObj);
    }

    public void setNMixtures(int i) {
        setNMixtures_0(this.nativeObj, i);
    }

    public double getBackgroundRatio() {
        return getBackgroundRatio_0(this.nativeObj);
    }

    public void setBackgroundRatio(double d) {
        setBackgroundRatio_0(this.nativeObj, d);
    }

    public double getVarThreshold() {
        return getVarThreshold_0(this.nativeObj);
    }

    public void setVarThreshold(double d) {
        setVarThreshold_0(this.nativeObj, d);
    }

    public double getVarThresholdGen() {
        return getVarThresholdGen_0(this.nativeObj);
    }

    public void setVarThresholdGen(double d) {
        setVarThresholdGen_0(this.nativeObj, d);
    }

    public double getVarInit() {
        return getVarInit_0(this.nativeObj);
    }

    public void setVarInit(double d) {
        setVarInit_0(this.nativeObj, d);
    }

    public double getVarMin() {
        return getVarMin_0(this.nativeObj);
    }

    public void setVarMin(double d) {
        setVarMin_0(this.nativeObj, d);
    }

    public double getVarMax() {
        return getVarMax_0(this.nativeObj);
    }

    public void setVarMax(double d) {
        setVarMax_0(this.nativeObj, d);
    }

    public double getComplexityReductionThreshold() {
        return getComplexityReductionThreshold_0(this.nativeObj);
    }

    public void setComplexityReductionThreshold(double d) {
        setComplexityReductionThreshold_0(this.nativeObj, d);
    }

    public boolean getDetectShadows() {
        return getDetectShadows_0(this.nativeObj);
    }

    public void setDetectShadows(boolean z) {
        setDetectShadows_0(this.nativeObj, z);
    }

    public int getShadowValue() {
        return getShadowValue_0(this.nativeObj);
    }

    public void setShadowValue(int i) {
        setShadowValue_0(this.nativeObj, i);
    }

    public double getShadowThreshold() {
        return getShadowThreshold_0(this.nativeObj);
    }

    public void setShadowThreshold(double d) {
        setShadowThreshold_0(this.nativeObj, d);
    }

    @Override // org.opencv.video.BackgroundSubtractor
    public void apply(Mat mat, Mat mat2, double d) {
        apply_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, d);
    }

    @Override // org.opencv.video.BackgroundSubtractor
    public void apply(Mat mat, Mat mat2) {
        apply_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    @Override // org.opencv.video.BackgroundSubtractor, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

