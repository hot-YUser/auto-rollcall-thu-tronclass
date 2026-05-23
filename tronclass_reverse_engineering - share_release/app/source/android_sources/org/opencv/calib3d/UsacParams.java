package org.opencv.calib3d;
public class UsacParams {
    protected final long nativeObj;

    private static native long UsacParams_0();

    private static native void delete(long j);

    private static native double get_confidence_0(long j);

    private static native int get_final_polisher_0(long j);

    private static native int get_final_polisher_iterations_0(long j);

    private static native boolean get_isParallel_0(long j);

    private static native int get_loIterations_0(long j);

    private static native int get_loMethod_0(long j);

    private static native int get_loSampleSize_0(long j);

    private static native int get_maxIterations_0(long j);

    private static native int get_neighborsSearch_0(long j);

    private static native int get_randomGeneratorState_0(long j);

    private static native int get_sampler_0(long j);

    private static native int get_score_0(long j);

    private static native double get_threshold_0(long j);

    private static native void set_confidence_0(long j, double d);

    private static native void set_final_polisher_0(long j, int i);

    private static native void set_final_polisher_iterations_0(long j, int i);

    private static native void set_isParallel_0(long j, boolean z);

    private static native void set_loIterations_0(long j, int i);

    private static native void set_loMethod_0(long j, int i);

    private static native void set_loSampleSize_0(long j, int i);

    private static native void set_maxIterations_0(long j, int i);

    private static native void set_neighborsSearch_0(long j, int i);

    private static native void set_randomGeneratorState_0(long j, int i);

    private static native void set_sampler_0(long j, int i);

    private static native void set_score_0(long j, int i);

    private static native void set_threshold_0(long j, double d);

    protected UsacParams(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static UsacParams __fromPtr__(long j) {
        return new UsacParams(j);
    }

    public UsacParams() {
        this.nativeObj = UsacParams_0();
    }

    public double get_confidence() {
        return get_confidence_0(this.nativeObj);
    }

    public void set_confidence(double d) {
        set_confidence_0(this.nativeObj, d);
    }

    public boolean get_isParallel() {
        return get_isParallel_0(this.nativeObj);
    }

    public void set_isParallel(boolean z) {
        set_isParallel_0(this.nativeObj, z);
    }

    public int get_loIterations() {
        return get_loIterations_0(this.nativeObj);
    }

    public void set_loIterations(int i) {
        set_loIterations_0(this.nativeObj, i);
    }

    public int get_loMethod() {
        return get_loMethod_0(this.nativeObj);
    }

    public void set_loMethod(int i) {
        set_loMethod_0(this.nativeObj, i);
    }

    public int get_loSampleSize() {
        return get_loSampleSize_0(this.nativeObj);
    }

    public void set_loSampleSize(int i) {
        set_loSampleSize_0(this.nativeObj, i);
    }

    public int get_maxIterations() {
        return get_maxIterations_0(this.nativeObj);
    }

    public void set_maxIterations(int i) {
        set_maxIterations_0(this.nativeObj, i);
    }

    public int get_neighborsSearch() {
        return get_neighborsSearch_0(this.nativeObj);
    }

    public void set_neighborsSearch(int i) {
        set_neighborsSearch_0(this.nativeObj, i);
    }

    public int get_randomGeneratorState() {
        return get_randomGeneratorState_0(this.nativeObj);
    }

    public void set_randomGeneratorState(int i) {
        set_randomGeneratorState_0(this.nativeObj, i);
    }

    public int get_sampler() {
        return get_sampler_0(this.nativeObj);
    }

    public void set_sampler(int i) {
        set_sampler_0(this.nativeObj, i);
    }

    public int get_score() {
        return get_score_0(this.nativeObj);
    }

    public void set_score(int i) {
        set_score_0(this.nativeObj, i);
    }

    public double get_threshold() {
        return get_threshold_0(this.nativeObj);
    }

    public void set_threshold(double d) {
        set_threshold_0(this.nativeObj, d);
    }

    public int get_final_polisher() {
        return get_final_polisher_0(this.nativeObj);
    }

    public void set_final_polisher(int i) {
        set_final_polisher_0(this.nativeObj, i);
    }

    public int get_final_polisher_iterations() {
        return get_final_polisher_iterations_0(this.nativeObj);
    }

    public void set_final_polisher_iterations(int i) {
        set_final_polisher_iterations_0(this.nativeObj, i);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

