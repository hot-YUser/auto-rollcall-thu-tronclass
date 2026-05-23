package org.opencv.wechat_qrcode;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class WeChatQRCode {
    protected final long nativeObj;

    private static native long WeChatQRCode_0(String str, String str2, String str3, String str4);

    private static native long WeChatQRCode_1(String str, String str2, String str3);

    private static native long WeChatQRCode_2(String str, String str2);

    private static native long WeChatQRCode_3(String str);

    private static native long WeChatQRCode_4();

    private static native void delete(long j);

    private static native List<String> detectAndDecode_0(long j, long j2, long j3);

    private static native List<String> detectAndDecode_1(long j, long j2);

    private static native float getScaleFactor_0(long j);

    private static native void setScaleFactor_0(long j, float f);

    protected WeChatQRCode(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static WeChatQRCode __fromPtr__(long j) {
        return new WeChatQRCode(j);
    }

    public WeChatQRCode(String str, String str2, String str3, String str4) {
        this.nativeObj = WeChatQRCode_0(str, str2, str3, str4);
    }

    public WeChatQRCode(String str, String str2, String str3) {
        this.nativeObj = WeChatQRCode_1(str, str2, str3);
    }

    public WeChatQRCode(String str, String str2) {
        this.nativeObj = WeChatQRCode_2(str, str2);
    }

    public WeChatQRCode(String str) {
        this.nativeObj = WeChatQRCode_3(str);
    }

    public WeChatQRCode() {
        this.nativeObj = WeChatQRCode_4();
    }

    public List<String> detectAndDecode(Mat mat, List<Mat> list) {
        Mat mat2 = new Mat();
        List<String> listDetectAndDecode_0 = detectAndDecode_0(this.nativeObj, mat.nativeObj, mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat2, list);
        mat2.release();
        return listDetectAndDecode_0;
    }

    public List<String> detectAndDecode(Mat mat) {
        return detectAndDecode_1(this.nativeObj, mat.nativeObj);
    }

    public void setScaleFactor(float f) {
        setScaleFactor_0(this.nativeObj, f);
    }

    public float getScaleFactor() {
        return getScaleFactor_0(this.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

