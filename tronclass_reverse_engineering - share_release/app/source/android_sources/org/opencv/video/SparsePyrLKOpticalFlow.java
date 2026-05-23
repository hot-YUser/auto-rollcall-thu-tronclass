package org.opencv.video;

import org.opencv.core.Size;
import org.opencv.core.TermCriteria;
public class SparsePyrLKOpticalFlow extends SparseOpticalFlow {
    private static native long create_0(double d, double d2, int i, int i2, int i3, double d3, int i4, double d4);

    private static native long create_1(double d, double d2, int i, int i2, int i3, double d3, int i4);

    private static native long create_2(double d, double d2, int i, int i2, int i3, double d3);

    private static native long create_3(double d, double d2, int i);

    private static native long create_4(double d, double d2);

    private static native long create_5();

    private static native void delete(long j);

    private static native int getFlags_0(long j);

    private static native int getMaxLevel_0(long j);

    private static native double getMinEigThreshold_0(long j);

    private static native double[] getTermCriteria_0(long j);

    private static native double[] getWinSize_0(long j);

    private static native void setFlags_0(long j, int i);

    private static native void setMaxLevel_0(long j, int i);

    private static native void setMinEigThreshold_0(long j, double d);

    private static native void setTermCriteria_0(long j, int i, int i2, double d);

    private static native void setWinSize_0(long j, double d, double d2);

    protected SparsePyrLKOpticalFlow(long j) {
        super(j);
    }

    public static SparsePyrLKOpticalFlow __fromPtr__(long j) {
        return new SparsePyrLKOpticalFlow(j);
    }

    public Size getWinSize() {
        return new Size(getWinSize_0(this.nativeObj));
    }

    public void setWinSize(Size size) {
        setWinSize_0(this.nativeObj, size.width, size.height);
    }

    public int getMaxLevel() {
        return getMaxLevel_0(this.nativeObj);
    }

    public void setMaxLevel(int i) {
        setMaxLevel_0(this.nativeObj, i);
    }

    public TermCriteria getTermCriteria() {
        return new TermCriteria(getTermCriteria_0(this.nativeObj));
    }

    public void setTermCriteria(TermCriteria termCriteria) {
        setTermCriteria_0(this.nativeObj, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon);
    }

    public int getFlags() {
        return getFlags_0(this.nativeObj);
    }

    public void setFlags(int i) {
        setFlags_0(this.nativeObj, i);
    }

    public double getMinEigThreshold() {
        return getMinEigThreshold_0(this.nativeObj);
    }

    public void setMinEigThreshold(double d) {
        setMinEigThreshold_0(this.nativeObj, d);
    }

    public static SparsePyrLKOpticalFlow create(Size size, int i, TermCriteria termCriteria, int i2, double d) {
        return __fromPtr__(create_0(size.width, size.height, i, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon, i2, d));
    }

    public static SparsePyrLKOpticalFlow create(Size size, int i, TermCriteria termCriteria, int i2) {
        return __fromPtr__(create_1(size.width, size.height, i, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon, i2));
    }

    public static SparsePyrLKOpticalFlow create(Size size, int i, TermCriteria termCriteria) {
        return __fromPtr__(create_2(size.width, size.height, i, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon));
    }

    public static SparsePyrLKOpticalFlow create(Size size, int i) {
        return __fromPtr__(create_3(size.width, size.height, i));
    }

    public static SparsePyrLKOpticalFlow create(Size size) {
        return __fromPtr__(create_4(size.width, size.height));
    }

    public static SparsePyrLKOpticalFlow create() {
        return __fromPtr__(create_5());
    }

    @Override // org.opencv.video.SparseOpticalFlow, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

