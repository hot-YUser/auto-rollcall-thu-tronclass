package org.opencv.dnn;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.utils.Converters;
public class Model {
    protected final long nativeObj;

    private static native long Model_0(String str, String str2);

    private static native long Model_1(String str);

    private static native long Model_2(long j);

    private static native void delete(long j);

    private static native long enableWinograd_0(long j, boolean z);

    private static native void predict_0(long j, long j2, long j3);

    private static native long setInputCrop_0(long j, boolean z);

    private static native long setInputMean_0(long j, double d, double d2, double d3, double d4);

    private static native void setInputParams_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z, boolean z2);

    private static native void setInputParams_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z);

    private static native void setInputParams_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7);

    private static native void setInputParams_3(long j, double d, double d2, double d3);

    private static native void setInputParams_4(long j, double d);

    private static native void setInputParams_5(long j);

    private static native long setInputScale_0(long j, double d, double d2, double d3, double d4);

    private static native long setInputSize_0(long j, double d, double d2);

    private static native long setInputSize_1(long j, int i, int i2);

    private static native long setInputSwapRB_0(long j, boolean z);

    private static native long setPreferableBackend_0(long j, int i);

    private static native long setPreferableTarget_0(long j, int i);

    protected Model(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Model __fromPtr__(long j) {
        return new Model(j);
    }

    public Model(String str, String str2) {
        this.nativeObj = Model_0(str, str2);
    }

    public Model(String str) {
        this.nativeObj = Model_1(str);
    }

    public Model(Net net2) {
        this.nativeObj = Model_2(net2.nativeObj);
    }

    public Model setInputSize(Size size) {
        return new Model(setInputSize_0(this.nativeObj, size.width, size.height));
    }

    public Model setInputSize(int i, int i2) {
        return new Model(setInputSize_1(this.nativeObj, i, i2));
    }

    public Model setInputMean(Scalar scalar) {
        return new Model(setInputMean_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]));
    }

    public Model setInputScale(Scalar scalar) {
        return new Model(setInputScale_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]));
    }

    public Model setInputCrop(boolean z) {
        return new Model(setInputCrop_0(this.nativeObj, z));
    }

    public Model setInputSwapRB(boolean z) {
        return new Model(setInputSwapRB_0(this.nativeObj, z));
    }

    public void setInputParams(double d, Size size, Scalar scalar, boolean z, boolean z2) {
        setInputParams_0(this.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z, z2);
    }

    public void setInputParams(double d, Size size, Scalar scalar, boolean z) {
        setInputParams_1(this.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z);
    }

    public void setInputParams(double d, Size size, Scalar scalar) {
        setInputParams_2(this.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public void setInputParams(double d, Size size) {
        setInputParams_3(this.nativeObj, d, size.width, size.height);
    }

    public void setInputParams(double d) {
        setInputParams_4(this.nativeObj, d);
    }

    public void setInputParams() {
        setInputParams_5(this.nativeObj);
    }

    public void predict(Mat mat, List<Mat> list) {
        Mat mat2 = new Mat();
        predict_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat2, list);
        mat2.release();
    }

    public Model setPreferableBackend(int i) {
        return new Model(setPreferableBackend_0(this.nativeObj, i));
    }

    public Model setPreferableTarget(int i) {
        return new Model(setPreferableTarget_0(this.nativeObj, i));
    }

    public Model enableWinograd(boolean z) {
        return new Model(enableWinograd_0(this.nativeObj, z));
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

