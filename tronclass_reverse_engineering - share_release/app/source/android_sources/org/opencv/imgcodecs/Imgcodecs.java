package org.opencv.imgcodecs;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.core.MatOfInt;
import org.opencv.core.Range;
import org.opencv.utils.Converters;
public class Imgcodecs {
    public static final int IMREAD_ANYCOLOR = 4;
    public static final int IMREAD_ANYDEPTH = 2;
    public static final int IMREAD_COLOR = 1;
    public static final int IMREAD_GRAYSCALE = 0;
    public static final int IMREAD_IGNORE_ORIENTATION = 128;
    public static final int IMREAD_LOAD_GDAL = 8;
    public static final int IMREAD_REDUCED_COLOR_2 = 17;
    public static final int IMREAD_REDUCED_COLOR_4 = 33;
    public static final int IMREAD_REDUCED_COLOR_8 = 65;
    public static final int IMREAD_REDUCED_GRAYSCALE_2 = 16;
    public static final int IMREAD_REDUCED_GRAYSCALE_4 = 32;
    public static final int IMREAD_REDUCED_GRAYSCALE_8 = 64;
    public static final int IMREAD_UNCHANGED = -1;
    public static final int IMWRITE_AVIF_DEPTH = 513;
    public static final int IMWRITE_AVIF_QUALITY = 512;
    public static final int IMWRITE_AVIF_SPEED = 514;
    public static final int IMWRITE_EXR_COMPRESSION = 49;
    public static final int IMWRITE_EXR_COMPRESSION_B44 = 6;
    public static final int IMWRITE_EXR_COMPRESSION_B44A = 7;
    public static final int IMWRITE_EXR_COMPRESSION_DWAA = 8;
    public static final int IMWRITE_EXR_COMPRESSION_DWAB = 9;
    public static final int IMWRITE_EXR_COMPRESSION_NO = 0;
    public static final int IMWRITE_EXR_COMPRESSION_PIZ = 4;
    public static final int IMWRITE_EXR_COMPRESSION_PXR24 = 5;
    public static final int IMWRITE_EXR_COMPRESSION_RLE = 1;
    public static final int IMWRITE_EXR_COMPRESSION_ZIP = 3;
    public static final int IMWRITE_EXR_COMPRESSION_ZIPS = 2;
    public static final int IMWRITE_EXR_DWA_COMPRESSION_LEVEL = 50;
    public static final int IMWRITE_EXR_TYPE = 48;
    public static final int IMWRITE_EXR_TYPE_FLOAT = 2;
    public static final int IMWRITE_EXR_TYPE_HALF = 1;
    public static final int IMWRITE_HDR_COMPRESSION = 80;
    public static final int IMWRITE_HDR_COMPRESSION_NONE = 0;
    public static final int IMWRITE_HDR_COMPRESSION_RLE = 1;
    public static final int IMWRITE_JPEG2000_COMPRESSION_X1000 = 272;
    public static final int IMWRITE_JPEG_CHROMA_QUALITY = 6;
    public static final int IMWRITE_JPEG_LUMA_QUALITY = 5;
    public static final int IMWRITE_JPEG_OPTIMIZE = 3;
    public static final int IMWRITE_JPEG_PROGRESSIVE = 2;
    public static final int IMWRITE_JPEG_QUALITY = 1;
    public static final int IMWRITE_JPEG_RST_INTERVAL = 4;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR = 7;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR_411 = 4264209;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR_420 = 2232593;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR_422 = 2167057;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR_440 = 1184017;
    public static final int IMWRITE_JPEG_SAMPLING_FACTOR_444 = 1118481;
    public static final int IMWRITE_PAM_FORMAT_BLACKANDWHITE = 1;
    public static final int IMWRITE_PAM_FORMAT_GRAYSCALE = 2;
    public static final int IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA = 3;
    public static final int IMWRITE_PAM_FORMAT_NULL = 0;
    public static final int IMWRITE_PAM_FORMAT_RGB = 4;
    public static final int IMWRITE_PAM_FORMAT_RGB_ALPHA = 5;
    public static final int IMWRITE_PAM_TUPLETYPE = 128;
    public static final int IMWRITE_PNG_BILEVEL = 18;
    public static final int IMWRITE_PNG_COMPRESSION = 16;
    public static final int IMWRITE_PNG_STRATEGY = 17;
    public static final int IMWRITE_PNG_STRATEGY_DEFAULT = 0;
    public static final int IMWRITE_PNG_STRATEGY_FILTERED = 1;
    public static final int IMWRITE_PNG_STRATEGY_FIXED = 4;
    public static final int IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY = 2;
    public static final int IMWRITE_PNG_STRATEGY_RLE = 3;
    public static final int IMWRITE_PXM_BINARY = 32;
    public static final int IMWRITE_TIFF_COMPRESSION = 259;
    public static final int IMWRITE_TIFF_RESUNIT = 256;
    public static final int IMWRITE_TIFF_XDPI = 257;
    public static final int IMWRITE_TIFF_YDPI = 258;
    public static final int IMWRITE_WEBP_QUALITY = 64;

    private static native boolean haveImageReader_0(String str);

    private static native boolean haveImageWriter_0(String str);

    private static native long imcount_0(String str, int i);

    private static native long imcount_1(String str);

    private static native long imdecode_0(long j, int i);

    private static native boolean imdecodemulti_0(long j, int i, long j2, int i2, int i3);

    private static native boolean imdecodemulti_1(long j, int i, long j2);

    private static native boolean imencode_0(String str, long j, long j2, long j3);

    private static native boolean imencode_1(String str, long j, long j2);

    private static native long imread_0(String str, int i);

    private static native long imread_1(String str);

    private static native boolean imreadmulti_0(String str, long j, int i);

    private static native boolean imreadmulti_1(String str, long j);

    private static native boolean imreadmulti_2(String str, long j, int i, int i2, int i3);

    private static native boolean imreadmulti_3(String str, long j, int i, int i2);

    private static native boolean imwrite_0(String str, long j, long j2);

    private static native boolean imwrite_1(String str, long j);

    private static native boolean imwritemulti_0(String str, long j, long j2);

    private static native boolean imwritemulti_1(String str, long j);

    public static Mat imread(String str, int i) {
        return new Mat(imread_0(str, i));
    }

    public static Mat imread(String str) {
        return new Mat(imread_1(str));
    }

    public static boolean imreadmulti(String str, List<Mat> list, int i) {
        Mat mat = new Mat();
        boolean zImreadmulti_0 = imreadmulti_0(str, mat.nativeObj, i);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
        return zImreadmulti_0;
    }

    public static boolean imreadmulti(String str, List<Mat> list) {
        Mat mat = new Mat();
        boolean zImreadmulti_1 = imreadmulti_1(str, mat.nativeObj);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
        return zImreadmulti_1;
    }

    public static boolean imreadmulti(String str, List<Mat> list, int i, int i2, int i3) {
        Mat mat = new Mat();
        boolean zImreadmulti_2 = imreadmulti_2(str, mat.nativeObj, i, i2, i3);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
        return zImreadmulti_2;
    }

    public static boolean imreadmulti(String str, List<Mat> list, int i, int i2) {
        Mat mat = new Mat();
        boolean zImreadmulti_3 = imreadmulti_3(str, mat.nativeObj, i, i2);
        Converters.Mat_to_vector_Mat(mat, list);
        mat.release();
        return zImreadmulti_3;
    }

    public static long imcount(String str, int i) {
        return imcount_0(str, i);
    }

    public static long imcount(String str) {
        return imcount_1(str);
    }

    public static boolean imwrite(String str, Mat mat, MatOfInt matOfInt) {
        return imwrite_0(str, mat.nativeObj, matOfInt.nativeObj);
    }

    public static boolean imwrite(String str, Mat mat) {
        return imwrite_1(str, mat.nativeObj);
    }

    public static boolean imwritemulti(String str, List<Mat> list, MatOfInt matOfInt) {
        return imwritemulti_0(str, Converters.vector_Mat_to_Mat(list).nativeObj, matOfInt.nativeObj);
    }

    public static boolean imwritemulti(String str, List<Mat> list) {
        return imwritemulti_1(str, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public static Mat imdecode(Mat mat, int i) {
        return new Mat(imdecode_0(mat.nativeObj, i));
    }

    public static boolean imdecodemulti(Mat mat, int i, List<Mat> list, Range range) {
        Mat mat2 = new Mat();
        boolean zImdecodemulti_0 = imdecodemulti_0(mat.nativeObj, i, mat2.nativeObj, range.start, range.end);
        Converters.Mat_to_vector_Mat(mat2, list);
        mat2.release();
        return zImdecodemulti_0;
    }

    public static boolean imdecodemulti(Mat mat, int i, List<Mat> list) {
        Mat mat2 = new Mat();
        boolean zImdecodemulti_1 = imdecodemulti_1(mat.nativeObj, i, mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat2, list);
        mat2.release();
        return zImdecodemulti_1;
    }

    public static boolean imencode(String str, Mat mat, MatOfByte matOfByte, MatOfInt matOfInt) {
        return imencode_0(str, mat.nativeObj, matOfByte.nativeObj, matOfInt.nativeObj);
    }

    public static boolean imencode(String str, Mat mat, MatOfByte matOfByte) {
        return imencode_1(str, mat.nativeObj, matOfByte.nativeObj);
    }

    public static boolean haveImageReader(String str) {
        return haveImageReader_0(str);
    }

    public static boolean haveImageWriter(String str) {
        return haveImageWriter_0(str);
    }
}

