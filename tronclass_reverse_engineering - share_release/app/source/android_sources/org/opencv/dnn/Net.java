package org.opencv.dnn;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.core.MatOfDouble;
import org.opencv.core.MatOfFloat;
import org.opencv.core.MatOfInt;
import org.opencv.core.Scalar;
import org.opencv.utils.Converters;
public class Net {
    protected final long nativeObj;

    private static native long Net_0();

    private static native void connect_0(long j, String str, String str2);

    private static native void delete(long j);

    private static native void dumpToFile_0(long j, String str);

    private static native String dump_0(long j);

    private static native boolean empty_0(long j);

    private static native void enableFusion_0(long j, boolean z);

    private static native void enableWinograd_0(long j, boolean z);

    private static native long forward_0(long j, String str);

    private static native long forward_1(long j);

    private static native void forward_2(long j, long j2, String str);

    private static native void forward_3(long j, long j2);

    private static native void forward_4(long j, long j2, List<String> list);

    private static native long getFLOPS_0(long j, List<MatOfInt> list);

    private static native long getFLOPS_1(long j, long j2);

    private static native long getFLOPS_2(long j, int i, List<MatOfInt> list);

    private static native long getFLOPS_3(long j, int i, long j2);

    private static native void getInputDetails_0(long j, long j2, long j3);

    private static native int getLayerId_0(long j, String str);

    private static native List<String> getLayerNames_0(long j);

    private static native void getLayerTypes_0(long j, List<String> list);

    private static native long getLayer_0(long j, int i);

    private static native long getLayer_1(long j, String str);

    private static native long getLayer_2(long j, long j2);

    private static native int getLayersCount_0(long j, String str);

    private static native void getMemoryConsumption_0(long j, long j2, double[] dArr, double[] dArr2);

    private static native void getMemoryConsumption_1(long j, int i, List<MatOfInt> list, double[] dArr, double[] dArr2);

    private static native void getMemoryConsumption_2(long j, int i, long j2, double[] dArr, double[] dArr2);

    private static native void getOutputDetails_0(long j, long j2, long j3);

    private static native long getParam_0(long j, int i, int i2);

    private static native long getParam_1(long j, int i);

    private static native long getParam_2(long j, String str, int i);

    private static native long getParam_3(long j, String str);

    private static native long getPerfProfile_0(long j, long j2);

    private static native List<String> getUnconnectedOutLayersNames_0(long j);

    private static native long getUnconnectedOutLayers_0(long j);

    private static native long quantize_0(long j, long j2, int i, int i2, boolean z);

    private static native long quantize_1(long j, long j2, int i, int i2);

    private static native long readFromModelOptimizer_0(String str, String str2);

    private static native long readFromModelOptimizer_1(long j, long j2);

    private static native void setHalideScheduler_0(long j, String str);

    private static native void setInputShape_0(long j, String str, long j2);

    private static native void setInput_0(long j, long j2, String str, double d, double d2, double d3, double d4, double d5);

    private static native void setInput_1(long j, long j2, String str, double d);

    private static native void setInput_2(long j, long j2, String str);

    private static native void setInput_3(long j, long j2);

    private static native void setInputsNames_0(long j, List<String> list);

    private static native void setParam_0(long j, int i, int i2, long j2);

    private static native void setParam_1(long j, String str, int i, long j2);

    private static native void setPreferableBackend_0(long j, int i);

    private static native void setPreferableTarget_0(long j, int i);

    protected Net(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Net __fromPtr__(long j) {
        return new Net(j);
    }

    public Net() {
        this.nativeObj = Net_0();
    }

    public static Net readFromModelOptimizer(String str, String str2) {
        return new Net(readFromModelOptimizer_0(str, str2));
    }

    public static Net readFromModelOptimizer(MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readFromModelOptimizer_1(matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public boolean empty() {
        return empty_0(this.nativeObj);
    }

    public String dump() {
        return dump_0(this.nativeObj);
    }

    public void dumpToFile(String str) {
        dumpToFile_0(this.nativeObj, str);
    }

    public int getLayerId(String str) {
        return getLayerId_0(this.nativeObj, str);
    }

    public List<String> getLayerNames() {
        return getLayerNames_0(this.nativeObj);
    }

    public Layer getLayer(int i) {
        return Layer.__fromPtr__(getLayer_0(this.nativeObj, i));
    }

    @Deprecated
    public Layer getLayer(String str) {
        return Layer.__fromPtr__(getLayer_1(this.nativeObj, str));
    }

    @Deprecated
    public Layer getLayer(DictValue dictValue) {
        return Layer.__fromPtr__(getLayer_2(this.nativeObj, dictValue.getNativeObjAddr()));
    }

    public void connect(String str, String str2) {
        connect_0(this.nativeObj, str, str2);
    }

    public void setInputsNames(List<String> list) {
        setInputsNames_0(this.nativeObj, list);
    }

    public void setInputShape(String str, MatOfInt matOfInt) {
        setInputShape_0(this.nativeObj, str, matOfInt.nativeObj);
    }

    public Mat forward(String str) {
        return new Mat(forward_0(this.nativeObj, str));
    }

    public Mat forward() {
        return new Mat(forward_1(this.nativeObj));
    }

    public void forward(List<Mat> list, String str) {
        Mat mat = new Mat();
        forward_2(this.nativeObj, mat.nativeObj, str);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
    }

    public void forward(List<Mat> list) {
        Mat mat = new Mat();
        forward_3(this.nativeObj, mat.nativeObj);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
    }

    public void forward(List<Mat> list, List<String> list2) {
        Mat mat = new Mat();
        forward_4(this.nativeObj, mat.nativeObj, list2);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
    }

    public Net quantize(List<Mat> list, int i, int i2, boolean z) {
        return new Net(quantize_0(this.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, i, i2, z));
    }

    public Net quantize(List<Mat> list, int i, int i2) {
        return new Net(quantize_1(this.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, i, i2));
    }

    public void getInputDetails(MatOfFloat matOfFloat, MatOfInt matOfInt) {
        getInputDetails_0(this.nativeObj, matOfFloat.nativeObj, matOfInt.nativeObj);
    }

    public void getOutputDetails(MatOfFloat matOfFloat, MatOfInt matOfInt) {
        getOutputDetails_0(this.nativeObj, matOfFloat.nativeObj, matOfInt.nativeObj);
    }

    public void setHalideScheduler(String str) {
        setHalideScheduler_0(this.nativeObj, str);
    }

    public void setPreferableBackend(int i) {
        setPreferableBackend_0(this.nativeObj, i);
    }

    public void setPreferableTarget(int i) {
        setPreferableTarget_0(this.nativeObj, i);
    }

    public void setInput(Mat mat, String str, double d, Scalar scalar) {
        setInput_0(this.nativeObj, mat.nativeObj, str, d, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public void setInput(Mat mat, String str, double d) {
        setInput_1(this.nativeObj, mat.nativeObj, str, d);
    }

    public void setInput(Mat mat, String str) {
        setInput_2(this.nativeObj, mat.nativeObj, str);
    }

    public void setInput(Mat mat) {
        setInput_3(this.nativeObj, mat.nativeObj);
    }

    public void setParam(int i, int i2, Mat mat) {
        setParam_0(this.nativeObj, i, i2, mat.nativeObj);
    }

    public void setParam(String str, int i, Mat mat) {
        setParam_1(this.nativeObj, str, i, mat.nativeObj);
    }

    public Mat getParam(int i, int i2) {
        return new Mat(getParam_0(this.nativeObj, i, i2));
    }

    public Mat getParam(int i) {
        return new Mat(getParam_1(this.nativeObj, i));
    }

    public Mat getParam(String str, int i) {
        return new Mat(getParam_2(this.nativeObj, str, i));
    }

    public Mat getParam(String str) {
        return new Mat(getParam_3(this.nativeObj, str));
    }

    public MatOfInt getUnconnectedOutLayers() {
        return MatOfInt.fromNativeAddr(getUnconnectedOutLayers_0(this.nativeObj));
    }

    public List<String> getUnconnectedOutLayersNames() {
        return getUnconnectedOutLayersNames_0(this.nativeObj);
    }

    public long getFLOPS(List<MatOfInt> list) {
        return getFLOPS_0(this.nativeObj, list);
    }

    public long getFLOPS(MatOfInt matOfInt) {
        return getFLOPS_1(this.nativeObj, matOfInt.nativeObj);
    }

    public long getFLOPS(int i, List<MatOfInt> list) {
        return getFLOPS_2(this.nativeObj, i, list);
    }

    public long getFLOPS(int i, MatOfInt matOfInt) {
        return getFLOPS_3(this.nativeObj, i, matOfInt.nativeObj);
    }

    public void getLayerTypes(List<String> list) {
        getLayerTypes_0(this.nativeObj, list);
    }

    public int getLayersCount(String str) {
        return getLayersCount_0(this.nativeObj, str);
    }

    public void getMemoryConsumption(MatOfInt matOfInt, long[] jArr, long[] jArr2) {
        double[] dArr = new double[1];
        double[] dArr2 = new double[1];
        getMemoryConsumption_0(this.nativeObj, matOfInt.nativeObj, dArr, dArr2);
        if (jArr != null) {
            jArr[0] = (long) dArr[0];
        }
        if (jArr2 != null) {
            jArr2[0] = (long) dArr2[0];
        }
    }

    public void getMemoryConsumption(int i, List<MatOfInt> list, long[] jArr, long[] jArr2) {
        double[] dArr = new double[1];
        double[] dArr2 = new double[1];
        getMemoryConsumption_1(this.nativeObj, i, list, dArr, dArr2);
        if (jArr != null) {
            jArr[0] = (long) dArr[0];
        }
        if (jArr2 != null) {
            jArr2[0] = (long) dArr2[0];
        }
    }

    public void getMemoryConsumption(int i, MatOfInt matOfInt, long[] jArr, long[] jArr2) {
        double[] dArr = new double[1];
        double[] dArr2 = new double[1];
        getMemoryConsumption_2(this.nativeObj, i, matOfInt.nativeObj, dArr, dArr2);
        if (jArr != null) {
            jArr[0] = (long) dArr[0];
        }
        if (jArr2 != null) {
            jArr2[0] = (long) dArr2[0];
        }
    }

    public void enableFusion(boolean z) {
        enableFusion_0(this.nativeObj, z);
    }

    public void enableWinograd(boolean z) {
        enableWinograd_0(this.nativeObj, z);
    }

    public long getPerfProfile(MatOfDouble matOfDouble) {
        return getPerfProfile_0(this.nativeObj, matOfDouble.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

