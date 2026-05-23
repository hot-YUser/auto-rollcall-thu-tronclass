package org.opencv.features2d;
public class SimpleBlobDetector_Params {
    protected final long nativeObj;

    private static native long SimpleBlobDetector_Params_0();

    private static native void delete(long j);

    private static native boolean get_collectContours_0(long j);

    private static native boolean get_filterByArea_0(long j);

    private static native boolean get_filterByCircularity_0(long j);

    private static native boolean get_filterByColor_0(long j);

    private static native boolean get_filterByConvexity_0(long j);

    private static native boolean get_filterByInertia_0(long j);

    private static native float get_maxArea_0(long j);

    private static native float get_maxCircularity_0(long j);

    private static native float get_maxConvexity_0(long j);

    private static native float get_maxInertiaRatio_0(long j);

    private static native float get_maxThreshold_0(long j);

    private static native float get_minArea_0(long j);

    private static native float get_minCircularity_0(long j);

    private static native float get_minConvexity_0(long j);

    private static native float get_minDistBetweenBlobs_0(long j);

    private static native float get_minInertiaRatio_0(long j);

    private static native long get_minRepeatability_0(long j);

    private static native float get_minThreshold_0(long j);

    private static native float get_thresholdStep_0(long j);

    private static native void set_collectContours_0(long j, boolean z);

    private static native void set_filterByArea_0(long j, boolean z);

    private static native void set_filterByCircularity_0(long j, boolean z);

    private static native void set_filterByColor_0(long j, boolean z);

    private static native void set_filterByConvexity_0(long j, boolean z);

    private static native void set_filterByInertia_0(long j, boolean z);

    private static native void set_maxArea_0(long j, float f);

    private static native void set_maxCircularity_0(long j, float f);

    private static native void set_maxConvexity_0(long j, float f);

    private static native void set_maxInertiaRatio_0(long j, float f);

    private static native void set_maxThreshold_0(long j, float f);

    private static native void set_minArea_0(long j, float f);

    private static native void set_minCircularity_0(long j, float f);

    private static native void set_minConvexity_0(long j, float f);

    private static native void set_minDistBetweenBlobs_0(long j, float f);

    private static native void set_minInertiaRatio_0(long j, float f);

    private static native void set_minRepeatability_0(long j, long j2);

    private static native void set_minThreshold_0(long j, float f);

    private static native void set_thresholdStep_0(long j, float f);

    protected SimpleBlobDetector_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static SimpleBlobDetector_Params __fromPtr__(long j) {
        return new SimpleBlobDetector_Params(j);
    }

    public SimpleBlobDetector_Params() {
        this.nativeObj = SimpleBlobDetector_Params_0();
    }

    public float get_thresholdStep() {
        return get_thresholdStep_0(this.nativeObj);
    }

    public void set_thresholdStep(float f) {
        set_thresholdStep_0(this.nativeObj, f);
    }

    public float get_minThreshold() {
        return get_minThreshold_0(this.nativeObj);
    }

    public void set_minThreshold(float f) {
        set_minThreshold_0(this.nativeObj, f);
    }

    public float get_maxThreshold() {
        return get_maxThreshold_0(this.nativeObj);
    }

    public void set_maxThreshold(float f) {
        set_maxThreshold_0(this.nativeObj, f);
    }

    public long get_minRepeatability() {
        return get_minRepeatability_0(this.nativeObj);
    }

    public void set_minRepeatability(long j) {
        set_minRepeatability_0(this.nativeObj, j);
    }

    public float get_minDistBetweenBlobs() {
        return get_minDistBetweenBlobs_0(this.nativeObj);
    }

    public void set_minDistBetweenBlobs(float f) {
        set_minDistBetweenBlobs_0(this.nativeObj, f);
    }

    public boolean get_filterByColor() {
        return get_filterByColor_0(this.nativeObj);
    }

    public void set_filterByColor(boolean z) {
        set_filterByColor_0(this.nativeObj, z);
    }

    public boolean get_filterByArea() {
        return get_filterByArea_0(this.nativeObj);
    }

    public void set_filterByArea(boolean z) {
        set_filterByArea_0(this.nativeObj, z);
    }

    public float get_minArea() {
        return get_minArea_0(this.nativeObj);
    }

    public void set_minArea(float f) {
        set_minArea_0(this.nativeObj, f);
    }

    public float get_maxArea() {
        return get_maxArea_0(this.nativeObj);
    }

    public void set_maxArea(float f) {
        set_maxArea_0(this.nativeObj, f);
    }

    public boolean get_filterByCircularity() {
        return get_filterByCircularity_0(this.nativeObj);
    }

    public void set_filterByCircularity(boolean z) {
        set_filterByCircularity_0(this.nativeObj, z);
    }

    public float get_minCircularity() {
        return get_minCircularity_0(this.nativeObj);
    }

    public void set_minCircularity(float f) {
        set_minCircularity_0(this.nativeObj, f);
    }

    public float get_maxCircularity() {
        return get_maxCircularity_0(this.nativeObj);
    }

    public void set_maxCircularity(float f) {
        set_maxCircularity_0(this.nativeObj, f);
    }

    public boolean get_filterByInertia() {
        return get_filterByInertia_0(this.nativeObj);
    }

    public void set_filterByInertia(boolean z) {
        set_filterByInertia_0(this.nativeObj, z);
    }

    public float get_minInertiaRatio() {
        return get_minInertiaRatio_0(this.nativeObj);
    }

    public void set_minInertiaRatio(float f) {
        set_minInertiaRatio_0(this.nativeObj, f);
    }

    public float get_maxInertiaRatio() {
        return get_maxInertiaRatio_0(this.nativeObj);
    }

    public void set_maxInertiaRatio(float f) {
        set_maxInertiaRatio_0(this.nativeObj, f);
    }

    public boolean get_filterByConvexity() {
        return get_filterByConvexity_0(this.nativeObj);
    }

    public void set_filterByConvexity(boolean z) {
        set_filterByConvexity_0(this.nativeObj, z);
    }

    public float get_minConvexity() {
        return get_minConvexity_0(this.nativeObj);
    }

    public void set_minConvexity(float f) {
        set_minConvexity_0(this.nativeObj, f);
    }

    public float get_maxConvexity() {
        return get_maxConvexity_0(this.nativeObj);
    }

    public void set_maxConvexity(float f) {
        set_maxConvexity_0(this.nativeObj, f);
    }

    public boolean get_collectContours() {
        return get_collectContours_0(this.nativeObj);
    }

    public void set_collectContours(boolean z) {
        set_collectContours_0(this.nativeObj, z);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

