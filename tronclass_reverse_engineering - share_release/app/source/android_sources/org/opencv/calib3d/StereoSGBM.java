package org.opencv.calib3d;
public class StereoSGBM extends StereoMatcher {
    public static final int MODE_HH = 1;
    public static final int MODE_HH4 = 3;
    public static final int MODE_SGBM = 0;
    public static final int MODE_SGBM_3WAY = 2;

    private static native long create_0(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10, int i11);

    private static native long create_1(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10);

    private static native long create_10(int i);

    private static native long create_11();

    private static native long create_2(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9);

    private static native long create_3(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8);

    private static native long create_4(int i, int i2, int i3, int i4, int i5, int i6, int i7);

    private static native long create_5(int i, int i2, int i3, int i4, int i5, int i6);

    private static native long create_6(int i, int i2, int i3, int i4, int i5);

    private static native long create_7(int i, int i2, int i3, int i4);

    private static native long create_8(int i, int i2, int i3);

    private static native long create_9(int i, int i2);

    private static native void delete(long j);

    private static native int getMode_0(long j);

    private static native int getP1_0(long j);

    private static native int getP2_0(long j);

    private static native int getPreFilterCap_0(long j);

    private static native int getUniquenessRatio_0(long j);

    private static native void setMode_0(long j, int i);

    private static native void setP1_0(long j, int i);

    private static native void setP2_0(long j, int i);

    private static native void setPreFilterCap_0(long j, int i);

    private static native void setUniquenessRatio_0(long j, int i);

    protected StereoSGBM(long j) {
        super(j);
    }

    public static StereoSGBM __fromPtr__(long j) {
        return new StereoSGBM(j);
    }

    public int getPreFilterCap() {
        return getPreFilterCap_0(this.nativeObj);
    }

    public void setPreFilterCap(int i) {
        setPreFilterCap_0(this.nativeObj, i);
    }

    public int getUniquenessRatio() {
        return getUniquenessRatio_0(this.nativeObj);
    }

    public void setUniquenessRatio(int i) {
        setUniquenessRatio_0(this.nativeObj, i);
    }

    public int getP1() {
        return getP1_0(this.nativeObj);
    }

    public void setP1(int i) {
        setP1_0(this.nativeObj, i);
    }

    public int getP2() {
        return getP2_0(this.nativeObj);
    }

    public void setP2(int i) {
        setP2_0(this.nativeObj, i);
    }

    public int getMode() {
        return getMode_0(this.nativeObj);
    }

    public void setMode(int i) {
        setMode_0(this.nativeObj, i);
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10, int i11) {
        return __fromPtr__(create_0(i, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10) {
        return __fromPtr__(create_1(i, i2, i3, i4, i5, i6, i7, i8, i9, i10));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9) {
        return __fromPtr__(create_2(i, i2, i3, i4, i5, i6, i7, i8, i9));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8) {
        return __fromPtr__(create_3(i, i2, i3, i4, i5, i6, i7, i8));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6, int i7) {
        return __fromPtr__(create_4(i, i2, i3, i4, i5, i6, i7));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5, int i6) {
        return __fromPtr__(create_5(i, i2, i3, i4, i5, i6));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4, int i5) {
        return __fromPtr__(create_6(i, i2, i3, i4, i5));
    }

    public static StereoSGBM create(int i, int i2, int i3, int i4) {
        return __fromPtr__(create_7(i, i2, i3, i4));
    }

    public static StereoSGBM create(int i, int i2, int i3) {
        return __fromPtr__(create_8(i, i2, i3));
    }

    public static StereoSGBM create(int i, int i2) {
        return __fromPtr__(create_9(i, i2));
    }

    public static StereoSGBM create(int i) {
        return __fromPtr__(create_10(i));
    }

    public static StereoSGBM create() {
        return __fromPtr__(create_11());
    }

    @Override // org.opencv.calib3d.StereoMatcher, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

