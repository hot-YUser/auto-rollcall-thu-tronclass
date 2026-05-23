package org.opencv.objdetect;

import org.opencv.core.Mat;
public class Dictionary {
    protected final long nativeObj;

    private static native long Dictionary_0();

    private static native long Dictionary_1(long j, int i, int i2);

    private static native long Dictionary_2(long j, int i);

    private static native void delete(long j);

    private static native void generateImageMarker_0(long j, int i, int i2, long j2, int i3);

    private static native void generateImageMarker_1(long j, int i, int i2, long j2);

    private static native long getBitsFromByteList_0(long j, int i);

    private static native long getByteListFromBits_0(long j);

    private static native int getDistanceToId_0(long j, long j2, int i, boolean z);

    private static native int getDistanceToId_1(long j, long j2, int i);

    private static native long get_bytesList_0(long j);

    private static native int get_markerSize_0(long j);

    private static native int get_maxCorrectionBits_0(long j);

    private static native boolean identify_0(long j, long j2, double[] dArr, double[] dArr2, double d);

    private static native void set_bytesList_0(long j, long j2);

    private static native void set_markerSize_0(long j, int i);

    private static native void set_maxCorrectionBits_0(long j, int i);

    protected Dictionary(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Dictionary __fromPtr__(long j) {
        return new Dictionary(j);
    }

    public Dictionary() {
        this.nativeObj = Dictionary_0();
    }

    public Dictionary(Mat mat, int i, int i2) {
        this.nativeObj = Dictionary_1(mat.nativeObj, i, i2);
    }

    public Dictionary(Mat mat, int i) {
        this.nativeObj = Dictionary_2(mat.nativeObj, i);
    }

    public boolean identify(Mat mat, int[] iArr, int[] iArr2, double d) {
        double[] dArr = new double[1];
        double[] dArr2 = new double[1];
        boolean zIdentify_0 = identify_0(this.nativeObj, mat.nativeObj, dArr, dArr2, d);
        if (iArr != null) {
            iArr[0] = (int) dArr[0];
        }
        if (iArr2 != null) {
            iArr2[0] = (int) dArr2[0];
        }
        return zIdentify_0;
    }

    public int getDistanceToId(Mat mat, int i, boolean z) {
        return getDistanceToId_0(this.nativeObj, mat.nativeObj, i, z);
    }

    public int getDistanceToId(Mat mat, int i) {
        return getDistanceToId_1(this.nativeObj, mat.nativeObj, i);
    }

    public void generateImageMarker(int i, int i2, Mat mat, int i3) {
        generateImageMarker_0(this.nativeObj, i, i2, mat.nativeObj, i3);
    }

    public void generateImageMarker(int i, int i2, Mat mat) {
        generateImageMarker_1(this.nativeObj, i, i2, mat.nativeObj);
    }

    public static Mat getByteListFromBits(Mat mat) {
        return new Mat(getByteListFromBits_0(mat.nativeObj));
    }

    public static Mat getBitsFromByteList(Mat mat, int i) {
        return new Mat(getBitsFromByteList_0(mat.nativeObj, i));
    }

    public Mat get_bytesList() {
        return new Mat(get_bytesList_0(this.nativeObj));
    }

    public void set_bytesList(Mat mat) {
        set_bytesList_0(this.nativeObj, mat.nativeObj);
    }

    public int get_markerSize() {
        return get_markerSize_0(this.nativeObj);
    }

    public void set_markerSize(int i) {
        set_markerSize_0(this.nativeObj, i);
    }

    public int get_maxCorrectionBits() {
        return get_maxCorrectionBits_0(this.nativeObj);
    }

    public void set_maxCorrectionBits(int i) {
        set_maxCorrectionBits_0(this.nativeObj, i);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

