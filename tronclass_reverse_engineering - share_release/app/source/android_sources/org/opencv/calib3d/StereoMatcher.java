package org.opencv.calib3d;

import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
public class StereoMatcher extends Algorithm {
    public static final int DISP_SCALE = 16;
    public static final int DISP_SHIFT = 4;

    private static native void compute_0(long j, long j2, long j3, long j4);

    private static native void delete(long j);

    private static native int getBlockSize_0(long j);

    private static native int getDisp12MaxDiff_0(long j);

    private static native int getMinDisparity_0(long j);

    private static native int getNumDisparities_0(long j);

    private static native int getSpeckleRange_0(long j);

    private static native int getSpeckleWindowSize_0(long j);

    private static native void setBlockSize_0(long j, int i);

    private static native void setDisp12MaxDiff_0(long j, int i);

    private static native void setMinDisparity_0(long j, int i);

    private static native void setNumDisparities_0(long j, int i);

    private static native void setSpeckleRange_0(long j, int i);

    private static native void setSpeckleWindowSize_0(long j, int i);

    protected StereoMatcher(long j) {
        super(j);
    }

    public static StereoMatcher __fromPtr__(long j) {
        return new StereoMatcher(j);
    }

    public void compute(Mat mat, Mat mat2, Mat mat3) {
        compute_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public int getMinDisparity() {
        return getMinDisparity_0(this.nativeObj);
    }

    public void setMinDisparity(int i) {
        setMinDisparity_0(this.nativeObj, i);
    }

    public int getNumDisparities() {
        return getNumDisparities_0(this.nativeObj);
    }

    public void setNumDisparities(int i) {
        setNumDisparities_0(this.nativeObj, i);
    }

    public int getBlockSize() {
        return getBlockSize_0(this.nativeObj);
    }

    public void setBlockSize(int i) {
        setBlockSize_0(this.nativeObj, i);
    }

    public int getSpeckleWindowSize() {
        return getSpeckleWindowSize_0(this.nativeObj);
    }

    public void setSpeckleWindowSize(int i) {
        setSpeckleWindowSize_0(this.nativeObj, i);
    }

    public int getSpeckleRange() {
        return getSpeckleRange_0(this.nativeObj);
    }

    public void setSpeckleRange(int i) {
        setSpeckleRange_0(this.nativeObj, i);
    }

    public int getDisp12MaxDiff() {
        return getDisp12MaxDiff_0(this.nativeObj);
    }

    public void setDisp12MaxDiff(int i) {
        setDisp12MaxDiff_0(this.nativeObj, i);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

