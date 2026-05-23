package org.opencv.features2d;
public class KAZE extends Feature2D {
    public static final int DIFF_CHARBONNIER = 3;
    public static final int DIFF_PM_G1 = 0;
    public static final int DIFF_PM_G2 = 1;
    public static final int DIFF_WEICKERT = 2;

    private static native long create_0(boolean z, boolean z2, float f, int i, int i2, int i3);

    private static native long create_1(boolean z, boolean z2, float f, int i, int i2);

    private static native long create_2(boolean z, boolean z2, float f, int i);

    private static native long create_3(boolean z, boolean z2, float f);

    private static native long create_4(boolean z, boolean z2);

    private static native long create_5(boolean z);

    private static native long create_6();

    private static native void delete(long j);

    private static native String getDefaultName_0(long j);

    private static native int getDiffusivity_0(long j);

    private static native boolean getExtended_0(long j);

    private static native int getNOctaveLayers_0(long j);

    private static native int getNOctaves_0(long j);

    private static native double getThreshold_0(long j);

    private static native boolean getUpright_0(long j);

    private static native void setDiffusivity_0(long j, int i);

    private static native void setExtended_0(long j, boolean z);

    private static native void setNOctaveLayers_0(long j, int i);

    private static native void setNOctaves_0(long j, int i);

    private static native void setThreshold_0(long j, double d);

    private static native void setUpright_0(long j, boolean z);

    protected KAZE(long j) {
        super(j);
    }

    public static KAZE __fromPtr__(long j) {
        return new KAZE(j);
    }

    public static KAZE create(boolean z, boolean z2, float f, int i, int i2, int i3) {
        return __fromPtr__(create_0(z, z2, f, i, i2, i3));
    }

    public static KAZE create(boolean z, boolean z2, float f, int i, int i2) {
        return __fromPtr__(create_1(z, z2, f, i, i2));
    }

    public static KAZE create(boolean z, boolean z2, float f, int i) {
        return __fromPtr__(create_2(z, z2, f, i));
    }

    public static KAZE create(boolean z, boolean z2, float f) {
        return __fromPtr__(create_3(z, z2, f));
    }

    public static KAZE create(boolean z, boolean z2) {
        return __fromPtr__(create_4(z, z2));
    }

    public static KAZE create(boolean z) {
        return __fromPtr__(create_5(z));
    }

    public static KAZE create() {
        return __fromPtr__(create_6());
    }

    public void setExtended(boolean z) {
        setExtended_0(this.nativeObj, z);
    }

    public boolean getExtended() {
        return getExtended_0(this.nativeObj);
    }

    public void setUpright(boolean z) {
        setUpright_0(this.nativeObj, z);
    }

    public boolean getUpright() {
        return getUpright_0(this.nativeObj);
    }

    public void setThreshold(double d) {
        setThreshold_0(this.nativeObj, d);
    }

    public double getThreshold() {
        return getThreshold_0(this.nativeObj);
    }

    public void setNOctaves(int i) {
        setNOctaves_0(this.nativeObj, i);
    }

    public int getNOctaves() {
        return getNOctaves_0(this.nativeObj);
    }

    public void setNOctaveLayers(int i) {
        setNOctaveLayers_0(this.nativeObj, i);
    }

    public int getNOctaveLayers() {
        return getNOctaveLayers_0(this.nativeObj);
    }

    public void setDiffusivity(int i) {
        setDiffusivity_0(this.nativeObj, i);
    }

    public int getDiffusivity() {
        return getDiffusivity_0(this.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    public String getDefaultName() {
        return getDefaultName_0(this.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

