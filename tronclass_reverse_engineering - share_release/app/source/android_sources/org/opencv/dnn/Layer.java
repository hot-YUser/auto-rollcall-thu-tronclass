package org.opencv.dnn;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class Layer extends Algorithm {
    private static native void delete(long j);

    private static native void finalize_0(long j, long j2, long j3);

    private static native long get_blobs_0(long j);

    private static native String get_name_0(long j);

    private static native int get_preferableTarget_0(long j);

    private static native String get_type_0(long j);

    private static native int outputNameToIndex_0(long j, String str);

    private static native void run_0(long j, long j2, long j3, long j4);

    private static native void set_blobs_0(long j, long j2);

    protected Layer(long j) {
        super(j);
    }

    public static Layer __fromPtr__(long j) {
        return new Layer(j);
    }

    public void finalize(List<Mat> list, List<Mat> list2) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        Mat mat = new Mat();
        finalize_0(this.nativeObj, matVector_Mat_to_Mat.nativeObj, mat.nativeObj);
        Converters.Mat_to_vector_Mat(mat, list2);
        mat.release();
    }

    @Deprecated
    public void run(List<Mat> list, List<Mat> list2, List<Mat> list3) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        Mat mat = new Mat();
        Mat matVector_Mat_to_Mat2 = Converters.vector_Mat_to_Mat(list3);
        run_0(this.nativeObj, matVector_Mat_to_Mat.nativeObj, mat.nativeObj, matVector_Mat_to_Mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat, list2);
        mat.release();
        Converters.Mat_to_vector_Mat(matVector_Mat_to_Mat2, list3);
        matVector_Mat_to_Mat2.release();
    }

    public int outputNameToIndex(String str) {
        return outputNameToIndex_0(this.nativeObj, str);
    }

    public List<Mat> get_blobs() {
        ArrayList arrayList = new ArrayList();
        Converters.Mat_to_vector_Mat(new Mat(get_blobs_0(this.nativeObj)), arrayList);
        return arrayList;
    }

    public void set_blobs(List<Mat> list) {
        set_blobs_0(this.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public String get_name() {
        return get_name_0(this.nativeObj);
    }

    public String get_type() {
        return get_type_0(this.nativeObj);
    }

    public int get_preferableTarget() {
        return get_preferableTarget_0(this.nativeObj);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

