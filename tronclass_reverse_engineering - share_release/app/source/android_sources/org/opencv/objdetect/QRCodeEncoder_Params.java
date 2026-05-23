package org.opencv.objdetect;
public class QRCodeEncoder_Params {
    protected final long nativeObj;

    private static native long QRCodeEncoder_Params_0();

    private static native void delete(long j);

    private static native int get_structure_number_0(long j);

    private static native int get_version_0(long j);

    private static native void set_structure_number_0(long j, int i);

    private static native void set_version_0(long j, int i);

    protected QRCodeEncoder_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static QRCodeEncoder_Params __fromPtr__(long j) {
        return new QRCodeEncoder_Params(j);
    }

    public QRCodeEncoder_Params() {
        this.nativeObj = QRCodeEncoder_Params_0();
    }

    public int get_version() {
        return get_version_0(this.nativeObj);
    }

    public void set_version(int i) {
        set_version_0(this.nativeObj, i);
    }

    public int get_structure_number() {
        return get_structure_number_0(this.nativeObj);
    }

    public void set_structure_number(int i) {
        set_structure_number_0(this.nativeObj, i);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

