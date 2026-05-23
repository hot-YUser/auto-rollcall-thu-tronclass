package org.opencv.dnn;
public class TextDetectionModel_EAST extends TextDetectionModel {
    private static native long TextDetectionModel_EAST_0(long j);

    private static native long TextDetectionModel_EAST_1(String str, String str2);

    private static native long TextDetectionModel_EAST_2(String str);

    private static native void delete(long j);

    private static native float getConfidenceThreshold_0(long j);

    private static native float getNMSThreshold_0(long j);

    private static native long setConfidenceThreshold_0(long j, float f);

    private static native long setNMSThreshold_0(long j, float f);

    protected TextDetectionModel_EAST(long j) {
        super(j);
    }

    public static TextDetectionModel_EAST __fromPtr__(long j) {
        return new TextDetectionModel_EAST(j);
    }

    public TextDetectionModel_EAST(Net net2) {
        super(TextDetectionModel_EAST_0(net2.nativeObj));
    }

    public TextDetectionModel_EAST(String str, String str2) {
        super(TextDetectionModel_EAST_1(str, str2));
    }

    public TextDetectionModel_EAST(String str) {
        super(TextDetectionModel_EAST_2(str));
    }

    public TextDetectionModel_EAST setConfidenceThreshold(float f) {
        return new TextDetectionModel_EAST(setConfidenceThreshold_0(this.nativeObj, f));
    }

    public float getConfidenceThreshold() {
        return getConfidenceThreshold_0(this.nativeObj);
    }

    public TextDetectionModel_EAST setNMSThreshold(float f) {
        return new TextDetectionModel_EAST(setNMSThreshold_0(this.nativeObj, f));
    }

    public float getNMSThreshold() {
        return getNMSThreshold_0(this.nativeObj);
    }

    @Override // org.opencv.dnn.TextDetectionModel, org.opencv.dnn.Model
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

