package org.opencv.objdetect;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class QRCodeEncoder {
    public static final int CORRECT_LEVEL_H = 3;
    public static final int CORRECT_LEVEL_L = 0;
    public static final int CORRECT_LEVEL_M = 1;
    public static final int CORRECT_LEVEL_Q = 2;
    public static final int ECI_UTF8 = 26;
    public static final int MODE_ALPHANUMERIC = 2;
    public static final int MODE_AUTO = -1;
    public static final int MODE_BYTE = 4;
    public static final int MODE_ECI = 7;
    public static final int MODE_KANJI = 8;
    public static final int MODE_NUMERIC = 1;
    public static final int MODE_STRUCTURED_APPEND = 3;
    protected final long nativeObj;

    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    private static native void encodeStructuredAppend_0(long j, String str, long j2);

    private static native void encode_0(long j, String str, long j2);

    protected QRCodeEncoder(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static QRCodeEncoder __fromPtr__(long j) {
        return new QRCodeEncoder(j);
    }

    public static QRCodeEncoder create(QRCodeEncoder_Params qRCodeEncoder_Params) {
        return __fromPtr__(create_0(qRCodeEncoder_Params.nativeObj));
    }

    public static QRCodeEncoder create() {
        return __fromPtr__(create_1());
    }

    public void encode(String str, Mat mat) {
        encode_0(this.nativeObj, str, mat.nativeObj);
    }

    public void encodeStructuredAppend(String str, List<Mat> list) {
        Mat mat = new Mat();
        encodeStructuredAppend_0(this.nativeObj, str, mat.nativeObj);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

