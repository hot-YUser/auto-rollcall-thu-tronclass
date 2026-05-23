package org.opencv.features2d;
public class FastFeatureDetector extends Feature2D {
    public static final int FAST_N = 10002;
    public static final int NONMAX_SUPPRESSION = 10001;
    public static final int THRESHOLD = 10000;
    public static final int TYPE_5_8 = 0;
    public static final int TYPE_7_12 = 1;
    public static final int TYPE_9_16 = 2;

    private static native long create_0(int i, boolean z, int i2);

    private static native long create_1(int i, boolean z);

    private static native long create_2(int i);

    private static native long create_3();

    private static native void delete(long j);

    private static native String getDefaultName_0(long j);

    private static native boolean getNonmaxSuppression_0(long j);

    private static native int getThreshold_0(long j);

    private static native int getType_0(long j);

    private static native void setNonmaxSuppression_0(long j, boolean z);

    private static native void setThreshold_0(long j, int i);

    private static native void setType_0(long j, int i);

    protected FastFeatureDetector(long j) {
        super(j);
    }

    public static FastFeatureDetector __fromPtr__(long j) {
        return new FastFeatureDetector(j);
    }

    public static FastFeatureDetector create(int i, boolean z, int i2) {
        return __fromPtr__(create_0(i, z, i2));
    }

    public static FastFeatureDetector create(int i, boolean z) {
        return __fromPtr__(create_1(i, z));
    }

    public static FastFeatureDetector create(int i) {
        return __fromPtr__(create_2(i));
    }

    public static FastFeatureDetector create() {
        return __fromPtr__(create_3());
    }

    public void setThreshold(int i) {
        setThreshold_0(this.nativeObj, i);
    }

    public int getThreshold() {
        return getThreshold_0(this.nativeObj);
    }

    public void setNonmaxSuppression(boolean z) {
        setNonmaxSuppression_0(this.nativeObj, z);
    }

    public boolean getNonmaxSuppression() {
        return getNonmaxSuppression_0(this.nativeObj);
    }

    public void setType(int i) {
        setType_0(this.nativeObj, i);
    }

    public int getType() {
        return getType_0(this.nativeObj);
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

