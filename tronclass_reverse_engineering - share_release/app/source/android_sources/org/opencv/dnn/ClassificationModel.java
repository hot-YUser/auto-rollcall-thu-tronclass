package org.opencv.dnn;

import org.opencv.core.Mat;
public class ClassificationModel extends Model {
    private static native long ClassificationModel_0(String str, String str2);

    private static native long ClassificationModel_1(String str);

    private static native long ClassificationModel_2(long j);

    private static native void classify_0(long j, long j2, double[] dArr, double[] dArr2);

    private static native void delete(long j);

    private static native boolean getEnableSoftmaxPostProcessing_0(long j);

    private static native long setEnableSoftmaxPostProcessing_0(long j, boolean z);

    protected ClassificationModel(long j) {
        super(j);
    }

    public static ClassificationModel __fromPtr__(long j) {
        return new ClassificationModel(j);
    }

    public ClassificationModel(String str, String str2) {
        super(ClassificationModel_0(str, str2));
    }

    public ClassificationModel(String str) {
        super(ClassificationModel_1(str));
    }

    public ClassificationModel(Net net2) {
        super(ClassificationModel_2(net2.nativeObj));
    }

    public ClassificationModel setEnableSoftmaxPostProcessing(boolean z) {
        return new ClassificationModel(setEnableSoftmaxPostProcessing_0(this.nativeObj, z));
    }

    public boolean getEnableSoftmaxPostProcessing() {
        return getEnableSoftmaxPostProcessing_0(this.nativeObj);
    }

    public void classify(Mat mat, int[] iArr, float[] fArr) {
        double[] dArr = new double[1];
        double[] dArr2 = new double[1];
        classify_0(this.nativeObj, mat.nativeObj, dArr, dArr2);
        if (iArr != null) {
            iArr[0] = (int) dArr[0];
        }
        if (fArr != null) {
            fArr[0] = (float) dArr2[0];
        }
    }

    @Override // org.opencv.dnn.Model
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

