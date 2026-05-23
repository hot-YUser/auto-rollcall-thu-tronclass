package org.opencv.features2d;
public class SIFT extends Feature2D {
    private static native long create_0(int i, int i2, double d, double d2, double d3, boolean z);

    private static native long create_1(int i, int i2, double d, double d2, double d3);

    private static native long create_2(int i, int i2, double d, double d2);

    private static native long create_3(int i, int i2, double d);

    private static native long create_4(int i, int i2);

    private static native long create_5(int i);

    private static native long create_6();

    private static native long create_7(int i, int i2, double d, double d2, double d3, int i3, boolean z);

    private static native long create_8(int i, int i2, double d, double d2, double d3, int i3);

    private static native void delete(long j);

    private static native double getContrastThreshold_0(long j);

    private static native String getDefaultName_0(long j);

    private static native double getEdgeThreshold_0(long j);

    private static native int getNFeatures_0(long j);

    private static native int getNOctaveLayers_0(long j);

    private static native double getSigma_0(long j);

    private static native void setContrastThreshold_0(long j, double d);

    private static native void setEdgeThreshold_0(long j, double d);

    private static native void setNFeatures_0(long j, int i);

    private static native void setNOctaveLayers_0(long j, int i);

    private static native void setSigma_0(long j, double d);

    protected SIFT(long j) {
        super(j);
    }

    public static SIFT __fromPtr__(long j) {
        return new SIFT(j);
    }

    public static SIFT create(int i, int i2, double d, double d2, double d3, boolean z) {
        return __fromPtr__(create_0(i, i2, d, d2, d3, z));
    }

    public static SIFT create(int i, int i2, double d, double d2, double d3) {
        return __fromPtr__(create_1(i, i2, d, d2, d3));
    }

    public static SIFT create(int i, int i2, double d, double d2) {
        return __fromPtr__(create_2(i, i2, d, d2));
    }

    public static SIFT create(int i, int i2, double d) {
        return __fromPtr__(create_3(i, i2, d));
    }

    public static SIFT create(int i, int i2) {
        return __fromPtr__(create_4(i, i2));
    }

    public static SIFT create(int i) {
        return __fromPtr__(create_5(i));
    }

    public static SIFT create() {
        return __fromPtr__(create_6());
    }

    public static SIFT create(int i, int i2, double d, double d2, double d3, int i3, boolean z) {
        return __fromPtr__(create_7(i, i2, d, d2, d3, i3, z));
    }

    public static SIFT create(int i, int i2, double d, double d2, double d3, int i3) {
        return __fromPtr__(create_8(i, i2, d, d2, d3, i3));
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    public String getDefaultName() {
        return getDefaultName_0(this.nativeObj);
    }

    public void setNFeatures(int i) {
        setNFeatures_0(this.nativeObj, i);
    }

    public int getNFeatures() {
        return getNFeatures_0(this.nativeObj);
    }

    public void setNOctaveLayers(int i) {
        setNOctaveLayers_0(this.nativeObj, i);
    }

    public int getNOctaveLayers() {
        return getNOctaveLayers_0(this.nativeObj);
    }

    public void setContrastThreshold(double d) {
        setContrastThreshold_0(this.nativeObj, d);
    }

    public double getContrastThreshold() {
        return getContrastThreshold_0(this.nativeObj);
    }

    public void setEdgeThreshold(double d) {
        setEdgeThreshold_0(this.nativeObj, d);
    }

    public double getEdgeThreshold() {
        return getEdgeThreshold_0(this.nativeObj);
    }

    public void setSigma(double d) {
        setSigma_0(this.nativeObj, d);
    }

    public double getSigma() {
        return getSigma_0(this.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

