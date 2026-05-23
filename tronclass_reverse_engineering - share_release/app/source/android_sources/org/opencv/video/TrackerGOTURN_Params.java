package org.opencv.video;
public class TrackerGOTURN_Params {
    protected final long nativeObj;

    private static native long TrackerGOTURN_Params_0();

    private static native void delete(long j);

    private static native String get_modelBin_0(long j);

    private static native String get_modelTxt_0(long j);

    private static native void set_modelBin_0(long j, String str);

    private static native void set_modelTxt_0(long j, String str);

    protected TrackerGOTURN_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static TrackerGOTURN_Params __fromPtr__(long j) {
        return new TrackerGOTURN_Params(j);
    }

    public TrackerGOTURN_Params() {
        this.nativeObj = TrackerGOTURN_Params_0();
    }

    public String get_modelTxt() {
        return get_modelTxt_0(this.nativeObj);
    }

    public void set_modelTxt(String str) {
        set_modelTxt_0(this.nativeObj, str);
    }

    public String get_modelBin() {
        return get_modelBin_0(this.nativeObj);
    }

    public void set_modelBin(String str) {
        set_modelBin_0(this.nativeObj, str);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

