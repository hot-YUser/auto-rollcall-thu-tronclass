package org.opencv.video;
public class TrackerDaSiamRPN_Params {
    protected final long nativeObj;

    private static native long TrackerDaSiamRPN_Params_0();

    private static native void delete(long j);

    private static native int get_backend_0(long j);

    private static native String get_kernel_cls1_0(long j);

    private static native String get_kernel_r1_0(long j);

    private static native String get_model_0(long j);

    private static native int get_target_0(long j);

    private static native void set_backend_0(long j, int i);

    private static native void set_kernel_cls1_0(long j, String str);

    private static native void set_kernel_r1_0(long j, String str);

    private static native void set_model_0(long j, String str);

    private static native void set_target_0(long j, int i);

    protected TrackerDaSiamRPN_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static TrackerDaSiamRPN_Params __fromPtr__(long j) {
        return new TrackerDaSiamRPN_Params(j);
    }

    public TrackerDaSiamRPN_Params() {
        this.nativeObj = TrackerDaSiamRPN_Params_0();
    }

    public String get_model() {
        return get_model_0(this.nativeObj);
    }

    public void set_model(String str) {
        set_model_0(this.nativeObj, str);
    }

    public String get_kernel_cls1() {
        return get_kernel_cls1_0(this.nativeObj);
    }

    public void set_kernel_cls1(String str) {
        set_kernel_cls1_0(this.nativeObj, str);
    }

    public String get_kernel_r1() {
        return get_kernel_r1_0(this.nativeObj);
    }

    public void set_kernel_r1(String str) {
        set_kernel_r1_0(this.nativeObj, str);
    }

    public int get_backend() {
        return get_backend_0(this.nativeObj);
    }

    public void set_backend(int i) {
        set_backend_0(this.nativeObj, i);
    }

    public int get_target() {
        return get_target_0(this.nativeObj);
    }

    public void set_target(int i) {
        set_target_0(this.nativeObj, i);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

