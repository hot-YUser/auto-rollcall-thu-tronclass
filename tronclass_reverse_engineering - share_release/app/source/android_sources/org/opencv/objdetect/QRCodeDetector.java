package org.opencv.objdetect;

import org.opencv.core.Mat;
public class QRCodeDetector extends GraphicalCodeDetector {
    private static native long QRCodeDetector_0();

    private static native String decodeCurved_0(long j, long j2, long j3, long j4);

    private static native String decodeCurved_1(long j, long j2, long j3);

    private static native void delete(long j);

    private static native String detectAndDecodeCurved_0(long j, long j2, long j3, long j4);

    private static native String detectAndDecodeCurved_1(long j, long j2, long j3);

    private static native String detectAndDecodeCurved_2(long j, long j2);

    private static native long setEpsX_0(long j, double d);

    private static native long setEpsY_0(long j, double d);

    private static native long setUseAlignmentMarkers_0(long j, boolean z);

    protected QRCodeDetector(long j) {
        super(j);
    }

    public static QRCodeDetector __fromPtr__(long j) {
        return new QRCodeDetector(j);
    }

    public QRCodeDetector() {
        super(QRCodeDetector_0());
    }

    public QRCodeDetector setEpsX(double d) {
        return new QRCodeDetector(setEpsX_0(this.nativeObj, d));
    }

    public QRCodeDetector setEpsY(double d) {
        return new QRCodeDetector(setEpsY_0(this.nativeObj, d));
    }

    public QRCodeDetector setUseAlignmentMarkers(boolean z) {
        return new QRCodeDetector(setUseAlignmentMarkers_0(this.nativeObj, z));
    }

    public String decodeCurved(Mat mat, Mat mat2, Mat mat3) {
        return decodeCurved_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public String decodeCurved(Mat mat, Mat mat2) {
        return decodeCurved_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public String detectAndDecodeCurved(Mat mat, Mat mat2, Mat mat3) {
        return detectAndDecodeCurved_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public String detectAndDecodeCurved(Mat mat, Mat mat2) {
        return detectAndDecodeCurved_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public String detectAndDecodeCurved(Mat mat) {
        return detectAndDecodeCurved_2(this.nativeObj, mat.nativeObj);
    }

    @Override // org.opencv.objdetect.GraphicalCodeDetector
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

