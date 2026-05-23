package org.opencv.video;

import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
public class DenseOpticalFlow extends Algorithm {
    private static native void calc_0(long j, long j2, long j3, long j4);

    private static native void collectGarbage_0(long j);

    private static native void delete(long j);

    protected DenseOpticalFlow(long j) {
        super(j);
    }

    public static DenseOpticalFlow __fromPtr__(long j) {
        return new DenseOpticalFlow(j);
    }

    public void calc(Mat mat, Mat mat2, Mat mat3) {
        calc_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void collectGarbage() {
        collectGarbage_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

