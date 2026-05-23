package org.opencv.calib3d;

import org.opencv.core.Rect;
public class StereoBM extends StereoMatcher {
    public static final int PREFILTER_NORMALIZED_RESPONSE = 0;
    public static final int PREFILTER_XSOBEL = 1;

    private static native long create_0(int i, int i2);

    private static native long create_1(int i);

    private static native long create_2();

    private static native void delete(long j);

    private static native int getPreFilterCap_0(long j);

    private static native int getPreFilterSize_0(long j);

    private static native int getPreFilterType_0(long j);

    private static native double[] getROI1_0(long j);

    private static native double[] getROI2_0(long j);

    private static native int getSmallerBlockSize_0(long j);

    private static native int getTextureThreshold_0(long j);

    private static native int getUniquenessRatio_0(long j);

    private static native void setPreFilterCap_0(long j, int i);

    private static native void setPreFilterSize_0(long j, int i);

    private static native void setPreFilterType_0(long j, int i);

    private static native void setROI1_0(long j, int i, int i2, int i3, int i4);

    private static native void setROI2_0(long j, int i, int i2, int i3, int i4);

    private static native void setSmallerBlockSize_0(long j, int i);

    private static native void setTextureThreshold_0(long j, int i);

    private static native void setUniquenessRatio_0(long j, int i);

    protected StereoBM(long j) {
        super(j);
    }

    public static StereoBM __fromPtr__(long j) {
        return new StereoBM(j);
    }

    public int getPreFilterType() {
        return getPreFilterType_0(this.nativeObj);
    }

    public void setPreFilterType(int i) {
        setPreFilterType_0(this.nativeObj, i);
    }

    public int getPreFilterSize() {
        return getPreFilterSize_0(this.nativeObj);
    }

    public void setPreFilterSize(int i) {
        setPreFilterSize_0(this.nativeObj, i);
    }

    public int getPreFilterCap() {
        return getPreFilterCap_0(this.nativeObj);
    }

    public void setPreFilterCap(int i) {
        setPreFilterCap_0(this.nativeObj, i);
    }

    public int getTextureThreshold() {
        return getTextureThreshold_0(this.nativeObj);
    }

    public void setTextureThreshold(int i) {
        setTextureThreshold_0(this.nativeObj, i);
    }

    public int getUniquenessRatio() {
        return getUniquenessRatio_0(this.nativeObj);
    }

    public void setUniquenessRatio(int i) {
        setUniquenessRatio_0(this.nativeObj, i);
    }

    public int getSmallerBlockSize() {
        return getSmallerBlockSize_0(this.nativeObj);
    }

    public void setSmallerBlockSize(int i) {
        setSmallerBlockSize_0(this.nativeObj, i);
    }

    public Rect getROI1() {
        return new Rect(getROI1_0(this.nativeObj));
    }

    public void setROI1(Rect rect) {
        setROI1_0(this.nativeObj, rect.x, rect.y, rect.width, rect.height);
    }

    public Rect getROI2() {
        return new Rect(getROI2_0(this.nativeObj));
    }

    public void setROI2(Rect rect) {
        setROI2_0(this.nativeObj, rect.x, rect.y, rect.width, rect.height);
    }

    public static StereoBM create(int i, int i2) {
        return __fromPtr__(create_0(i, i2));
    }

    public static StereoBM create(int i) {
        return __fromPtr__(create_1(i));
    }

    public static StereoBM create() {
        return __fromPtr__(create_2());
    }

    @Override // org.opencv.calib3d.StereoMatcher, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

