package org.opencv.features2d;
public class ORB extends Feature2D {
    public static final int FAST_SCORE = 1;
    public static final int HARRIS_SCORE = 0;

    private static native long create_0(int i, float f, int i2, int i3, int i4, int i5, int i6, int i7, int i8);

    private static native long create_1(int i, float f, int i2, int i3, int i4, int i5, int i6, int i7);

    private static native long create_2(int i, float f, int i2, int i3, int i4, int i5, int i6);

    private static native long create_3(int i, float f, int i2, int i3, int i4, int i5);

    private static native long create_4(int i, float f, int i2, int i3, int i4);

    private static native long create_5(int i, float f, int i2, int i3);

    private static native long create_6(int i, float f, int i2);

    private static native long create_7(int i, float f);

    private static native long create_8(int i);

    private static native long create_9();

    private static native void delete(long j);

    private static native String getDefaultName_0(long j);

    private static native int getEdgeThreshold_0(long j);

    private static native int getFastThreshold_0(long j);

    private static native int getFirstLevel_0(long j);

    private static native int getMaxFeatures_0(long j);

    private static native int getNLevels_0(long j);

    private static native int getPatchSize_0(long j);

    private static native double getScaleFactor_0(long j);

    private static native int getScoreType_0(long j);

    private static native int getWTA_K_0(long j);

    private static native void setEdgeThreshold_0(long j, int i);

    private static native void setFastThreshold_0(long j, int i);

    private static native void setFirstLevel_0(long j, int i);

    private static native void setMaxFeatures_0(long j, int i);

    private static native void setNLevels_0(long j, int i);

    private static native void setPatchSize_0(long j, int i);

    private static native void setScaleFactor_0(long j, double d);

    private static native void setScoreType_0(long j, int i);

    private static native void setWTA_K_0(long j, int i);

    protected ORB(long j) {
        super(j);
    }

    public static ORB __fromPtr__(long j) {
        return new ORB(j);
    }

    public static ORB create(int i, float f, int i2, int i3, int i4, int i5, int i6, int i7, int i8) {
        return __fromPtr__(create_0(i, f, i2, i3, i4, i5, i6, i7, i8));
    }

    public static ORB create(int i, float f, int i2, int i3, int i4, int i5, int i6, int i7) {
        return __fromPtr__(create_1(i, f, i2, i3, i4, i5, i6, i7));
    }

    public static ORB create(int i, float f, int i2, int i3, int i4, int i5, int i6) {
        return __fromPtr__(create_2(i, f, i2, i3, i4, i5, i6));
    }

    public static ORB create(int i, float f, int i2, int i3, int i4, int i5) {
        return __fromPtr__(create_3(i, f, i2, i3, i4, i5));
    }

    public static ORB create(int i, float f, int i2, int i3, int i4) {
        return __fromPtr__(create_4(i, f, i2, i3, i4));
    }

    public static ORB create(int i, float f, int i2, int i3) {
        return __fromPtr__(create_5(i, f, i2, i3));
    }

    public static ORB create(int i, float f, int i2) {
        return __fromPtr__(create_6(i, f, i2));
    }

    public static ORB create(int i, float f) {
        return __fromPtr__(create_7(i, f));
    }

    public static ORB create(int i) {
        return __fromPtr__(create_8(i));
    }

    public static ORB create() {
        return __fromPtr__(create_9());
    }

    public void setMaxFeatures(int i) {
        setMaxFeatures_0(this.nativeObj, i);
    }

    public int getMaxFeatures() {
        return getMaxFeatures_0(this.nativeObj);
    }

    public void setScaleFactor(double d) {
        setScaleFactor_0(this.nativeObj, d);
    }

    public double getScaleFactor() {
        return getScaleFactor_0(this.nativeObj);
    }

    public void setNLevels(int i) {
        setNLevels_0(this.nativeObj, i);
    }

    public int getNLevels() {
        return getNLevels_0(this.nativeObj);
    }

    public void setEdgeThreshold(int i) {
        setEdgeThreshold_0(this.nativeObj, i);
    }

    public int getEdgeThreshold() {
        return getEdgeThreshold_0(this.nativeObj);
    }

    public void setFirstLevel(int i) {
        setFirstLevel_0(this.nativeObj, i);
    }

    public int getFirstLevel() {
        return getFirstLevel_0(this.nativeObj);
    }

    public void setWTA_K(int i) {
        setWTA_K_0(this.nativeObj, i);
    }

    public int getWTA_K() {
        return getWTA_K_0(this.nativeObj);
    }

    public void setScoreType(int i) {
        setScoreType_0(this.nativeObj, i);
    }

    public int getScoreType() {
        return getScoreType_0(this.nativeObj);
    }

    public void setPatchSize(int i) {
        setPatchSize_0(this.nativeObj, i);
    }

    public int getPatchSize() {
        return getPatchSize_0(this.nativeObj);
    }

    public void setFastThreshold(int i) {
        setFastThreshold_0(this.nativeObj, i);
    }

    public int getFastThreshold() {
        return getFastThreshold_0(this.nativeObj);
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

