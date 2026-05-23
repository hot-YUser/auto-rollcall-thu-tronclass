package org.opencv.objdetect;

import java.util.List;
import org.opencv.core.Mat;
public class BarcodeDetector extends GraphicalCodeDetector {
    private static native long BarcodeDetector_0();

    private static native long BarcodeDetector_1(String str, String str2);

    private static native boolean decodeWithType_0(long j, long j2, long j3, List<String> list, List<String> list2);

    private static native void delete(long j);

    private static native boolean detectAndDecodeWithType_0(long j, long j2, List<String> list, List<String> list2, long j3);

    private static native boolean detectAndDecodeWithType_1(long j, long j2, List<String> list, List<String> list2);

    protected BarcodeDetector(long j) {
        super(j);
    }

    public static BarcodeDetector __fromPtr__(long j) {
        return new BarcodeDetector(j);
    }

    public BarcodeDetector() {
        super(BarcodeDetector_0());
    }

    public BarcodeDetector(String str, String str2) {
        super(BarcodeDetector_1(str, str2));
    }

    public boolean decodeWithType(Mat mat, Mat mat2, List<String> list, List<String> list2) {
        return decodeWithType_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, list, list2);
    }

    public boolean detectAndDecodeWithType(Mat mat, List<String> list, List<String> list2, Mat mat2) {
        return detectAndDecodeWithType_0(this.nativeObj, mat.nativeObj, list, list2, mat2.nativeObj);
    }

    public boolean detectAndDecodeWithType(Mat mat, List<String> list, List<String> list2) {
        return detectAndDecodeWithType_1(this.nativeObj, mat.nativeObj, list, list2);
    }

    @Override // org.opencv.objdetect.GraphicalCodeDetector
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

