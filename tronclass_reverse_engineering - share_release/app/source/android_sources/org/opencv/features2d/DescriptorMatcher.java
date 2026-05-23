package org.opencv.features2d;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.core.MatOfDMatch;
import org.opencv.utils.Converters;
public class DescriptorMatcher extends Algorithm {
    public static final int BRUTEFORCE = 2;
    public static final int BRUTEFORCE_HAMMING = 4;
    public static final int BRUTEFORCE_HAMMINGLUT = 5;
    public static final int BRUTEFORCE_L1 = 3;
    public static final int BRUTEFORCE_SL2 = 6;
    public static final int FLANNBASED = 1;

    private static native void add_0(long j, long j2);

    private static native void clear_0(long j);

    private static native long clone_0(long j, boolean z);

    private static native long clone_1(long j);

    private static native long create_0(String str);

    private static native long create_1(int i);

    private static native void delete(long j);

    private static native boolean empty_0(long j);

    private static native long getTrainDescriptors_0(long j);

    private static native boolean isMaskSupported_0(long j);

    private static native void knnMatch_0(long j, long j2, long j3, long j4, int i, long j5, boolean z);

    private static native void knnMatch_1(long j, long j2, long j3, long j4, int i, long j5);

    private static native void knnMatch_2(long j, long j2, long j3, long j4, int i);

    private static native void knnMatch_3(long j, long j2, long j3, int i, long j4, boolean z);

    private static native void knnMatch_4(long j, long j2, long j3, int i, long j4);

    private static native void knnMatch_5(long j, long j2, long j3, int i);

    private static native void match_0(long j, long j2, long j3, long j4, long j5);

    private static native void match_1(long j, long j2, long j3, long j4);

    private static native void match_2(long j, long j2, long j3, long j4);

    private static native void match_3(long j, long j2, long j3);

    private static native void radiusMatch_0(long j, long j2, long j3, long j4, float f, long j5, boolean z);

    private static native void radiusMatch_1(long j, long j2, long j3, long j4, float f, long j5);

    private static native void radiusMatch_2(long j, long j2, long j3, long j4, float f);

    private static native void radiusMatch_3(long j, long j2, long j3, float f, long j4, boolean z);

    private static native void radiusMatch_4(long j, long j2, long j3, float f, long j4);

    private static native void radiusMatch_5(long j, long j2, long j3, float f);

    private static native void read_0(long j, String str);

    private static native void train_0(long j);

    private static native void write_0(long j, String str);

    protected DescriptorMatcher(long j) {
        super(j);
    }

    public static DescriptorMatcher __fromPtr__(long j) {
        return new DescriptorMatcher(j);
    }

    public void add(List<Mat> list) {
        add_0(this.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public List<Mat> getTrainDescriptors() {
        ArrayList arrayList = new ArrayList();
        Converters.Mat_to_vector_Mat(new Mat(getTrainDescriptors_0(this.nativeObj)), arrayList);
        return arrayList;
    }

    @Override // org.opencv.core.Algorithm
    public void clear() {
        clear_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    public boolean empty() {
        return empty_0(this.nativeObj);
    }

    public boolean isMaskSupported() {
        return isMaskSupported_0(this.nativeObj);
    }

    public void train() {
        train_0(this.nativeObj);
    }

    public void match(Mat mat, Mat mat2, MatOfDMatch matOfDMatch, Mat mat3) {
        match_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, matOfDMatch.nativeObj, mat3.nativeObj);
    }

    public void match(Mat mat, Mat mat2, MatOfDMatch matOfDMatch) {
        match_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, matOfDMatch.nativeObj);
    }

    public void knnMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, int i, Mat mat3, boolean z) {
        Mat mat4 = new Mat();
        knnMatch_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat4.nativeObj, i, mat3.nativeObj, z);
        Converters.Mat_to_vector_vector_DMatch(mat4, list);
        mat4.release();
    }

    public void knnMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, int i, Mat mat3) {
        Mat mat4 = new Mat();
        knnMatch_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat4.nativeObj, i, mat3.nativeObj);
        Converters.Mat_to_vector_vector_DMatch(mat4, list);
        mat4.release();
    }

    public void knnMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, int i) {
        Mat mat3 = new Mat();
        knnMatch_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
        Converters.Mat_to_vector_vector_DMatch(mat3, list);
        mat3.release();
    }

    public void radiusMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, float f, Mat mat3, boolean z) {
        Mat mat4 = new Mat();
        radiusMatch_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat4.nativeObj, f, mat3.nativeObj, z);
        Converters.Mat_to_vector_vector_DMatch(mat4, list);
        mat4.release();
    }

    public void radiusMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, float f, Mat mat3) {
        Mat mat4 = new Mat();
        radiusMatch_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat4.nativeObj, f, mat3.nativeObj);
        Converters.Mat_to_vector_vector_DMatch(mat4, list);
        mat4.release();
    }

    public void radiusMatch(Mat mat, Mat mat2, List<MatOfDMatch> list, float f) {
        Mat mat3 = new Mat();
        radiusMatch_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, f);
        Converters.Mat_to_vector_vector_DMatch(mat3, list);
        mat3.release();
    }

    public void match(Mat mat, MatOfDMatch matOfDMatch, List<Mat> list) {
        match_2(this.nativeObj, mat.nativeObj, matOfDMatch.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public void match(Mat mat, MatOfDMatch matOfDMatch) {
        match_3(this.nativeObj, mat.nativeObj, matOfDMatch.nativeObj);
    }

    public void knnMatch(Mat mat, List<MatOfDMatch> list, int i, List<Mat> list2, boolean z) {
        Mat mat2 = new Mat();
        knnMatch_3(this.nativeObj, mat.nativeObj, mat2.nativeObj, i, Converters.vector_Mat_to_Mat(list2).nativeObj, z);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void knnMatch(Mat mat, List<MatOfDMatch> list, int i, List<Mat> list2) {
        Mat mat2 = new Mat();
        knnMatch_4(this.nativeObj, mat.nativeObj, mat2.nativeObj, i, Converters.vector_Mat_to_Mat(list2).nativeObj);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void knnMatch(Mat mat, List<MatOfDMatch> list, int i) {
        Mat mat2 = new Mat();
        knnMatch_5(this.nativeObj, mat.nativeObj, mat2.nativeObj, i);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void radiusMatch(Mat mat, List<MatOfDMatch> list, float f, List<Mat> list2, boolean z) {
        Mat mat2 = new Mat();
        radiusMatch_3(this.nativeObj, mat.nativeObj, mat2.nativeObj, f, Converters.vector_Mat_to_Mat(list2).nativeObj, z);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void radiusMatch(Mat mat, List<MatOfDMatch> list, float f, List<Mat> list2) {
        Mat mat2 = new Mat();
        radiusMatch_4(this.nativeObj, mat.nativeObj, mat2.nativeObj, f, Converters.vector_Mat_to_Mat(list2).nativeObj);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void radiusMatch(Mat mat, List<MatOfDMatch> list, float f) {
        Mat mat2 = new Mat();
        radiusMatch_5(this.nativeObj, mat.nativeObj, mat2.nativeObj, f);
        Converters.Mat_to_vector_vector_DMatch(mat2, list);
        mat2.release();
    }

    public void write(String str) {
        write_0(this.nativeObj, str);
    }

    public void read(String str) {
        read_0(this.nativeObj, str);
    }

    public DescriptorMatcher clone(boolean z) {
        return __fromPtr__(clone_0(this.nativeObj, z));
    }

    public DescriptorMatcher clone() {
        return __fromPtr__(clone_1(this.nativeObj));
    }

    public static DescriptorMatcher create(String str) {
        return __fromPtr__(create_0(str));
    }

    public static DescriptorMatcher create(int i) {
        return __fromPtr__(create_1(i));
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

