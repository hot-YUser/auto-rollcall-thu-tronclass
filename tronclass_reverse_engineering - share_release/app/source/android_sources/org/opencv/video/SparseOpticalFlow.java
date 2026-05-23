package org.opencv.video;

import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
public class SparseOpticalFlow extends Algorithm {
    private static native void calc_0(long j, long j2, long j3, long j4, long j5, long j6, long j7);

    private static native void calc_1(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void delete(long j);

    protected SparseOpticalFlow(long j) {
        super(j);
    }

    public static SparseOpticalFlow __fromPtr__(long j) {
        return new SparseOpticalFlow(j);
    }

    public void calc(Mat mat, Mat mat2, Mat mat3, Mat mat4, Mat mat5, Mat mat6) {
        calc_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, mat5.nativeObj, mat6.nativeObj);
    }

    public void calc(Mat mat, Mat mat2, Mat mat3, Mat mat4, Mat mat5) {
        calc_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, mat5.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

