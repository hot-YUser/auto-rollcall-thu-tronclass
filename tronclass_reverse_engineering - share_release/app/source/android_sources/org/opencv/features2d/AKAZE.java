package org.opencv.features2d;
public class AKAZE extends Feature2D {
    public static final int DESCRIPTOR_KAZE = 3;
    public static final int DESCRIPTOR_KAZE_UPRIGHT = 2;
    public static final int DESCRIPTOR_MLDB = 5;
    public static final int DESCRIPTOR_MLDB_UPRIGHT = 4;

    private static native long create_0(int i, int i2, int i3, float f, int i4, int i5, int i6, int i7);

    private static native long create_1(int i, int i2, int i3, float f, int i4, int i5, int i6);

    private static native long create_2(int i, int i2, int i3, float f, int i4, int i5);

    private static native long create_3(int i, int i2, int i3, float f, int i4);

    private static native long create_4(int i, int i2, int i3, float f);

    private static native long create_5(int i, int i2, int i3);

    private static native long create_6(int i, int i2);

    private static native long create_7(int i);

    private static native long create_8();

    private static native void delete(long j);

    private static native String getDefaultName_0(long j);

    private static native int getDescriptorChannels_0(long j);

    private static native int getDescriptorSize_0(long j);

    private static native int getDescriptorType_0(long j);

    private static native int getDiffusivity_0(long j);

    private static native int getMaxPoints_0(long j);

    private static native int getNOctaveLayers_0(long j);

    private static native int getNOctaves_0(long j);

    private static native double getThreshold_0(long j);

    private static native void setDescriptorChannels_0(long j, int i);

    private static native void setDescriptorSize_0(long j, int i);

    private static native void setDescriptorType_0(long j, int i);

    private static native void setDiffusivity_0(long j, int i);

    private static native void setMaxPoints_0(long j, int i);

    private static native void setNOctaveLayers_0(long j, int i);

    private static native void setNOctaves_0(long j, int i);

    private static native void setThreshold_0(long j, double d);

    protected AKAZE(long j) {
        super(j);
    }

    public static AKAZE __fromPtr__(long j) {
        return new AKAZE(j);
    }

    public static AKAZE create(int i, int i2, int i3, float f, int i4, int i5, int i6, int i7) {
        return __fromPtr__(create_0(i, i2, i3, f, i4, i5, i6, i7));
    }

    public static AKAZE create(int i, int i2, int i3, float f, int i4, int i5, int i6) {
        return __fromPtr__(create_1(i, i2, i3, f, i4, i5, i6));
    }

    public static AKAZE create(int i, int i2, int i3, float f, int i4, int i5) {
        return __fromPtr__(create_2(i, i2, i3, f, i4, i5));
    }

    public static AKAZE create(int i, int i2, int i3, float f, int i4) {
        return __fromPtr__(create_3(i, i2, i3, f, i4));
    }

    public static AKAZE create(int i, int i2, int i3, float f) {
        return __fromPtr__(create_4(i, i2, i3, f));
    }

    public static AKAZE create(int i, int i2, int i3) {
        return __fromPtr__(create_5(i, i2, i3));
    }

    public static AKAZE create(int i, int i2) {
        return __fromPtr__(create_6(i, i2));
    }

    public static AKAZE create(int i) {
        return __fromPtr__(create_7(i));
    }

    public static AKAZE create() {
        return __fromPtr__(create_8());
    }

    public void setDescriptorType(int i) {
        setDescriptorType_0(this.nativeObj, i);
    }

    public int getDescriptorType() {
        return getDescriptorType_0(this.nativeObj);
    }

    public void setDescriptorSize(int i) {
        setDescriptorSize_0(this.nativeObj, i);
    }

    public int getDescriptorSize() {
        return getDescriptorSize_0(this.nativeObj);
    }

    public void setDescriptorChannels(int i) {
        setDescriptorChannels_0(this.nativeObj, i);
    }

    public int getDescriptorChannels() {
        return getDescriptorChannels_0(this.nativeObj);
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

    public void setMaxPoints(int i) {
        setMaxPoints_0(this.nativeObj, i);
    }

    public int getMaxPoints() {
        return getMaxPoints_0(this.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

