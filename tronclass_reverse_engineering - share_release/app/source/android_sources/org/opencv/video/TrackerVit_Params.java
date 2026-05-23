package org.opencv.video;

import org.opencv.core.Scalar;
public class TrackerVit_Params {
    protected final long nativeObj;

    private static native long TrackerVit_Params_0();

    private static native void delete(long j);

    private static native int get_backend_0(long j);

    private static native double[] get_meanvalue_0(long j);

    private static native String get_net_0(long j);

    private static native double[] get_stdvalue_0(long j);

    private static native int get_target_0(long j);

    private static native void set_backend_0(long j, int i);

    private static native void set_meanvalue_0(long j, double d, double d2, double d3, double d4);

    private static native void set_net_0(long j, String str);

    private static native void set_stdvalue_0(long j, double d, double d2, double d3, double d4);

    private static native void set_target_0(long j, int i);

    protected TrackerVit_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static TrackerVit_Params __fromPtr__(long j) {
        return new TrackerVit_Params(j);
    }

    public TrackerVit_Params() {
        this.nativeObj = TrackerVit_Params_0();
    }

    public String get_net() {
        return get_net_0(this.nativeObj);
    }

    public void set_net(String str) {
        set_net_0(this.nativeObj, str);
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

    public Scalar get_meanvalue() {
        return new Scalar(get_meanvalue_0(this.nativeObj));
    }

    public void set_meanvalue(Scalar scalar) {
        set_meanvalue_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Scalar get_stdvalue() {
        return new Scalar(get_stdvalue_0(this.nativeObj));
    }

    public void set_stdvalue(Scalar scalar) {
        set_stdvalue_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

