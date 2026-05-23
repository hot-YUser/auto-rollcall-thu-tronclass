package org.opencv.features2d;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.core.MatOfKeyPoint;
import org.opencv.utils.Converters;
public class Feature2D extends Algorithm {
    private static native void compute_0(long j, long j2, long j3, long j4);

    private static native void compute_1(long j, long j2, long j3, long j4);

    private static native int defaultNorm_0(long j);

    private static native void delete(long j);

    private static native int descriptorSize_0(long j);

    private static native int descriptorType_0(long j);

    private static native void detectAndCompute_0(long j, long j2, long j3, long j4, long j5, boolean z);

    private static native void detectAndCompute_1(long j, long j2, long j3, long j4, long j5);

    private static native void detect_0(long j, long j2, long j3, long j4);

    private static native void detect_1(long j, long j2, long j3);

    private static native void detect_2(long j, long j2, long j3, long j4);

    private static native void detect_3(long j, long j2, long j3);

    private static native boolean empty_0(long j);

    private static native String getDefaultName_0(long j);

    private static native void read_0(long j, String str);

    private static native void write_0(long j, String str);

    protected Feature2D(long j) {
        super(j);
    }

    public static Feature2D __fromPtr__(long j) {
        return new Feature2D(j);
    }

    public void detect(Mat mat, MatOfKeyPoint matOfKeyPoint, Mat mat2) {
        detect_0(this.nativeObj, mat.nativeObj, matOfKeyPoint.nativeObj, mat2.nativeObj);
    }

    public void detect(Mat mat, MatOfKeyPoint matOfKeyPoint) {
        detect_1(this.nativeObj, mat.nativeObj, matOfKeyPoint.nativeObj);
    }

    public void detect(List<Mat> list, List<MatOfKeyPoint> list2, List<Mat> list3) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        Mat mat = new Mat();
        detect_2(this.nativeObj, matVector_Mat_to_Mat.nativeObj, mat.nativeObj, Converters.vector_Mat_to_Mat(list3).nativeObj);
        Converters.Mat_to_vector_vector_KeyPoint(mat, list2);
        mat.release();
    }

    public void detect(List<Mat> list, List<MatOfKeyPoint> list2) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        Mat mat = new Mat();
        detect_3(this.nativeObj, matVector_Mat_to_Mat.nativeObj, mat.nativeObj);
        Converters.Mat_to_vector_vector_KeyPoint(mat, list2);
        mat.release();
    }

    public void compute(Mat mat, MatOfKeyPoint matOfKeyPoint, Mat mat2) {
        compute_0(this.nativeObj, mat.nativeObj, matOfKeyPoint.nativeObj, mat2.nativeObj);
    }

    public void compute(List<Mat> list, List<MatOfKeyPoint> list2, List<Mat> list3) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        Mat matVector_vector_KeyPoint_to_Mat = Converters.vector_vector_KeyPoint_to_Mat(list2, new ArrayList(list2 != null ? list2.size() : 0));
        Mat mat = new Mat();
        compute_1(this.nativeObj, matVector_Mat_to_Mat.nativeObj, matVector_vector_KeyPoint_to_Mat.nativeObj, mat.nativeObj);
        Converters.Mat_to_vector_vector_KeyPoint(matVector_vector_KeyPoint_to_Mat, list2);
        matVector_vector_KeyPoint_to_Mat.release();
        Converters.Mat_to_vector_Mat(mat, list3);
        mat.release();
    }

    public void detectAndCompute(Mat mat, Mat mat2, MatOfKeyPoint matOfKeyPoint, Mat mat3, boolean z) {
        detectAndCompute_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, matOfKeyPoint.nativeObj, mat3.nativeObj, z);
    }

    public void detectAndCompute(Mat mat, Mat mat2, MatOfKeyPoint matOfKeyPoint, Mat mat3) {
        detectAndCompute_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, matOfKeyPoint.nativeObj, mat3.nativeObj);
    }

    public int descriptorSize() {
        return descriptorSize_0(this.nativeObj);
    }

    public int descriptorType() {
        return descriptorType_0(this.nativeObj);
    }

    public int defaultNorm() {
        return defaultNorm_0(this.nativeObj);
    }

    public void write(String str) {
        write_0(this.nativeObj, str);
    }

    public void read(String str) {
        read_0(this.nativeObj, str);
    }

    @Override // org.opencv.core.Algorithm
    public boolean empty() {
        return empty_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    public String getDefaultName() {
        return getDefaultName_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

