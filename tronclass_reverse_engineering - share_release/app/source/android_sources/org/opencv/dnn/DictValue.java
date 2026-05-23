package org.opencv.dnn;
public class DictValue {
    protected final long nativeObj;

    private static native long DictValue_0(int i);

    private static native long DictValue_1(double d);

    private static native long DictValue_2(String str);

    private static native void delete(long j);

    private static native int getIntValue_0(long j, int i);

    private static native int getIntValue_1(long j);

    private static native double getRealValue_0(long j, int i);

    private static native double getRealValue_1(long j);

    private static native String getStringValue_0(long j, int i);

    private static native String getStringValue_1(long j);

    private static native boolean isInt_0(long j);

    private static native boolean isReal_0(long j);

    private static native boolean isString_0(long j);

    protected DictValue(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static DictValue __fromPtr__(long j) {
        return new DictValue(j);
    }

    public DictValue(int i) {
        this.nativeObj = DictValue_0(i);
    }

    public DictValue(double d) {
        this.nativeObj = DictValue_1(d);
    }

    public DictValue(String str) {
        this.nativeObj = DictValue_2(str);
    }

    public boolean isInt() {
        return isInt_0(this.nativeObj);
    }

    public boolean isString() {
        return isString_0(this.nativeObj);
    }

    public boolean isReal() {
        return isReal_0(this.nativeObj);
    }

    public int getIntValue(int i) {
        return getIntValue_0(this.nativeObj, i);
    }

    public int getIntValue() {
        return getIntValue_1(this.nativeObj);
    }

    public double getRealValue(int i) {
        return getRealValue_0(this.nativeObj, i);
    }

    public double getRealValue() {
        return getRealValue_1(this.nativeObj);
    }

    public String getStringValue(int i) {
        return getStringValue_0(this.nativeObj, i);
    }

    public String getStringValue() {
        return getStringValue_1(this.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

