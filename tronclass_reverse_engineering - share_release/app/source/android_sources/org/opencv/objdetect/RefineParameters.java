package org.opencv.objdetect;
public class RefineParameters {
    protected final long nativeObj;

    private static native long RefineParameters_0(float f, float f2, boolean z);

    private static native long RefineParameters_1(float f, float f2);

    private static native long RefineParameters_2(float f);

    private static native long RefineParameters_3();

    private static native void delete(long j);

    private static native boolean get_checkAllOrders_0(long j);

    private static native float get_errorCorrectionRate_0(long j);

    private static native float get_minRepDistance_0(long j);

    private static native void set_checkAllOrders_0(long j, boolean z);

    private static native void set_errorCorrectionRate_0(long j, float f);

    private static native void set_minRepDistance_0(long j, float f);

    protected RefineParameters(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static RefineParameters __fromPtr__(long j) {
        return new RefineParameters(j);
    }

    public RefineParameters(float f, float f2, boolean z) {
        this.nativeObj = RefineParameters_0(f, f2, z);
    }

    public RefineParameters(float f, float f2) {
        this.nativeObj = RefineParameters_1(f, f2);
    }

    public RefineParameters(float f) {
        this.nativeObj = RefineParameters_2(f);
    }

    public RefineParameters() {
        this.nativeObj = RefineParameters_3();
    }

    public float get_minRepDistance() {
        return get_minRepDistance_0(this.nativeObj);
    }

    public void set_minRepDistance(float f) {
        set_minRepDistance_0(this.nativeObj, f);
    }

    public float get_errorCorrectionRate() {
        return get_errorCorrectionRate_0(this.nativeObj);
    }

    public void set_errorCorrectionRate(float f) {
        set_errorCorrectionRate_0(this.nativeObj, f);
    }

    public boolean get_checkAllOrders() {
        return get_checkAllOrders_0(this.nativeObj);
    }

    public void set_checkAllOrders(boolean z) {
        set_checkAllOrders_0(this.nativeObj, z);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

