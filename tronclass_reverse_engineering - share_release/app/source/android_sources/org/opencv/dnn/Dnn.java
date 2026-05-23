package org.opencv.dnn;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.core.MatOfFloat;
import org.opencv.core.MatOfInt;
import org.opencv.core.MatOfRect;
import org.opencv.core.MatOfRect2d;
import org.opencv.core.MatOfRotatedRect;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.utils.Converters;
public class Dnn {
    public static final int DNN_BACKEND_CANN = 8;
    public static final int DNN_BACKEND_CUDA = 5;
    public static final int DNN_BACKEND_DEFAULT = 0;
    public static final int DNN_BACKEND_HALIDE = 1;
    public static final int DNN_BACKEND_INFERENCE_ENGINE = 2;
    public static final int DNN_BACKEND_OPENCV = 3;
    public static final int DNN_BACKEND_TIMVX = 7;
    public static final int DNN_BACKEND_VKCOM = 4;
    public static final int DNN_BACKEND_WEBNN = 6;
    public static final int DNN_LAYOUT_NCDHW = 3;
    public static final int DNN_LAYOUT_NCHW = 2;
    public static final int DNN_LAYOUT_ND = 1;
    public static final int DNN_LAYOUT_NDHWC = 5;
    public static final int DNN_LAYOUT_NHWC = 4;
    public static final int DNN_LAYOUT_PLANAR = 6;
    public static final int DNN_LAYOUT_UNKNOWN = 0;
    public static final int DNN_PMODE_CROP_CENTER = 1;
    public static final int DNN_PMODE_LETTERBOX = 2;
    public static final int DNN_PMODE_NULL = 0;
    public static final int DNN_TARGET_CPU = 0;
    public static final int DNN_TARGET_CPU_FP16 = 10;
    public static final int DNN_TARGET_CUDA = 6;
    public static final int DNN_TARGET_CUDA_FP16 = 7;
    public static final int DNN_TARGET_FPGA = 5;
    public static final int DNN_TARGET_HDDL = 8;
    public static final int DNN_TARGET_MYRIAD = 3;
    public static final int DNN_TARGET_NPU = 9;
    public static final int DNN_TARGET_OPENCL = 1;
    public static final int DNN_TARGET_OPENCL_FP16 = 2;
    public static final int DNN_TARGET_VULKAN = 4;
    public static final int SoftNMSMethod_SOFTNMS_GAUSSIAN = 2;
    public static final int SoftNMSMethod_SOFTNMS_LINEAR = 1;

    private static native void NMSBoxesBatched_0(long j, long j2, long j3, float f, float f2, long j4, float f3, int i);

    private static native void NMSBoxesBatched_1(long j, long j2, long j3, float f, float f2, long j4, float f3);

    private static native void NMSBoxesBatched_2(long j, long j2, long j3, float f, float f2, long j4);

    private static native void NMSBoxesRotated_0(long j, long j2, float f, float f2, long j3, float f3, int i);

    private static native void NMSBoxesRotated_1(long j, long j2, float f, float f2, long j3, float f3);

    private static native void NMSBoxesRotated_2(long j, long j2, float f, float f2, long j3);

    private static native void NMSBoxes_0(long j, long j2, float f, float f2, long j3, float f3, int i);

    private static native void NMSBoxes_1(long j, long j2, float f, float f2, long j3, float f3);

    private static native void NMSBoxes_2(long j, long j2, float f, float f2, long j3);

    private static native long blobFromImageWithParams_0(long j, long j2);

    private static native long blobFromImageWithParams_1(long j);

    private static native void blobFromImageWithParams_2(long j, long j2, long j3);

    private static native void blobFromImageWithParams_3(long j, long j2);

    private static native long blobFromImage_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z, boolean z2, int i);

    private static native long blobFromImage_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z, boolean z2);

    private static native long blobFromImage_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z);

    private static native long blobFromImage_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7);

    private static native long blobFromImage_4(long j, double d, double d2, double d3);

    private static native long blobFromImage_5(long j, double d);

    private static native long blobFromImage_6(long j);

    private static native long blobFromImagesWithParams_0(long j, long j2);

    private static native long blobFromImagesWithParams_1(long j);

    private static native void blobFromImagesWithParams_2(long j, long j2, long j3);

    private static native void blobFromImagesWithParams_3(long j, long j2);

    private static native long blobFromImages_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z, boolean z2, int i);

    private static native long blobFromImages_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z, boolean z2);

    private static native long blobFromImages_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, boolean z);

    private static native long blobFromImages_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7);

    private static native long blobFromImages_4(long j, double d, double d2, double d3);

    private static native long blobFromImages_5(long j, double d);

    private static native long blobFromImages_6(long j);

    private static native List<Integer> getAvailableTargets_0(int i);

    private static native String getInferenceEngineBackendType_0();

    private static native String getInferenceEngineCPUType_0();

    private static native String getInferenceEngineVPUType_0();

    private static native void imagesFromBlob_0(long j, long j2);

    private static native long readNetFromCaffe_0(String str, String str2);

    private static native long readNetFromCaffe_1(String str);

    private static native long readNetFromCaffe_2(long j, long j2);

    private static native long readNetFromCaffe_3(long j);

    private static native long readNetFromDarknet_0(String str, String str2);

    private static native long readNetFromDarknet_1(String str);

    private static native long readNetFromDarknet_2(long j, long j2);

    private static native long readNetFromDarknet_3(long j);

    private static native long readNetFromModelOptimizer_0(String str, String str2);

    private static native long readNetFromModelOptimizer_1(String str);

    private static native long readNetFromModelOptimizer_2(long j, long j2);

    private static native long readNetFromONNX_0(String str);

    private static native long readNetFromONNX_1(long j);

    private static native long readNetFromTFLite_0(String str);

    private static native long readNetFromTFLite_1(long j);

    private static native long readNetFromTensorflow_0(String str, String str2);

    private static native long readNetFromTensorflow_1(String str);

    private static native long readNetFromTensorflow_2(long j, long j2);

    private static native long readNetFromTensorflow_3(long j);

    private static native long readNetFromTorch_0(String str, boolean z, boolean z2);

    private static native long readNetFromTorch_1(String str, boolean z);

    private static native long readNetFromTorch_2(String str);

    private static native long readNet_0(String str, String str2, String str3);

    private static native long readNet_1(String str, String str2);

    private static native long readNet_2(String str);

    private static native long readNet_3(String str, long j, long j2);

    private static native long readNet_4(String str, long j);

    private static native long readTensorFromONNX_0(String str);

    private static native long readTorchBlob_0(String str, boolean z);

    private static native long readTorchBlob_1(String str);

    private static native void releaseHDDLPlugin_0();

    private static native void resetMyriadDevice_0();

    private static native String setInferenceEngineBackendType_0(String str);

    private static native void shrinkCaffeModel_0(String str, String str2, List<String> list);

    private static native void shrinkCaffeModel_1(String str, String str2);

    private static native void softNMSBoxes_0(long j, long j2, long j3, float f, float f2, long j4, long j5, float f3);

    private static native void softNMSBoxes_2(long j, long j2, long j3, float f, float f2, long j4, long j5);

    private static native void softNMSBoxes_3(long j, long j2, long j3, float f, float f2, long j4);

    private static native void writeTextGraph_0(String str, String str2);

    public static List<Integer> getAvailableTargets(int i) {
        return getAvailableTargets_0(i);
    }

    public static Net readNetFromDarknet(String str, String str2) {
        return new Net(readNetFromDarknet_0(str, str2));
    }

    public static Net readNetFromDarknet(String str) {
        return new Net(readNetFromDarknet_1(str));
    }

    public static Net readNetFromDarknet(MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readNetFromDarknet_2(matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public static Net readNetFromDarknet(MatOfByte matOfByte) {
        return new Net(readNetFromDarknet_3(matOfByte.nativeObj));
    }

    public static Net readNetFromCaffe(String str, String str2) {
        return new Net(readNetFromCaffe_0(str, str2));
    }

    public static Net readNetFromCaffe(String str) {
        return new Net(readNetFromCaffe_1(str));
    }

    public static Net readNetFromCaffe(MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readNetFromCaffe_2(matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public static Net readNetFromCaffe(MatOfByte matOfByte) {
        return new Net(readNetFromCaffe_3(matOfByte.nativeObj));
    }

    public static Net readNetFromTensorflow(String str, String str2) {
        return new Net(readNetFromTensorflow_0(str, str2));
    }

    public static Net readNetFromTensorflow(String str) {
        return new Net(readNetFromTensorflow_1(str));
    }

    public static Net readNetFromTensorflow(MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readNetFromTensorflow_2(matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public static Net readNetFromTensorflow(MatOfByte matOfByte) {
        return new Net(readNetFromTensorflow_3(matOfByte.nativeObj));
    }

    public static Net readNetFromTFLite(String str) {
        return new Net(readNetFromTFLite_0(str));
    }

    public static Net readNetFromTFLite(MatOfByte matOfByte) {
        return new Net(readNetFromTFLite_1(matOfByte.nativeObj));
    }

    public static Net readNetFromTorch(String str, boolean z, boolean z2) {
        return new Net(readNetFromTorch_0(str, z, z2));
    }

    public static Net readNetFromTorch(String str, boolean z) {
        return new Net(readNetFromTorch_1(str, z));
    }

    public static Net readNetFromTorch(String str) {
        return new Net(readNetFromTorch_2(str));
    }

    public static Net readNet(String str, String str2, String str3) {
        return new Net(readNet_0(str, str2, str3));
    }

    public static Net readNet(String str, String str2) {
        return new Net(readNet_1(str, str2));
    }

    public static Net readNet(String str) {
        return new Net(readNet_2(str));
    }

    public static Net readNet(String str, MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readNet_3(str, matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public static Net readNet(String str, MatOfByte matOfByte) {
        return new Net(readNet_4(str, matOfByte.nativeObj));
    }

    public static Mat readTorchBlob(String str, boolean z) {
        return new Mat(readTorchBlob_0(str, z));
    }

    public static Mat readTorchBlob(String str) {
        return new Mat(readTorchBlob_1(str));
    }

    public static Net readNetFromModelOptimizer(String str, String str2) {
        return new Net(readNetFromModelOptimizer_0(str, str2));
    }

    public static Net readNetFromModelOptimizer(String str) {
        return new Net(readNetFromModelOptimizer_1(str));
    }

    public static Net readNetFromModelOptimizer(MatOfByte matOfByte, MatOfByte matOfByte2) {
        return new Net(readNetFromModelOptimizer_2(matOfByte.nativeObj, matOfByte2.nativeObj));
    }

    public static Net readNetFromONNX(String str) {
        return new Net(readNetFromONNX_0(str));
    }

    public static Net readNetFromONNX(MatOfByte matOfByte) {
        return new Net(readNetFromONNX_1(matOfByte.nativeObj));
    }

    public static Mat readTensorFromONNX(String str) {
        return new Mat(readTensorFromONNX_0(str));
    }

    public static Mat blobFromImage(Mat mat, double d, Size size, Scalar scalar, boolean z, boolean z2, int i) {
        return new Mat(blobFromImage_0(mat.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z, z2, i));
    }

    public static Mat blobFromImage(Mat mat, double d, Size size, Scalar scalar, boolean z, boolean z2) {
        return new Mat(blobFromImage_1(mat.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z, z2));
    }

    public static Mat blobFromImage(Mat mat, double d, Size size, Scalar scalar, boolean z) {
        return new Mat(blobFromImage_2(mat.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z));
    }

    public static Mat blobFromImage(Mat mat, double d, Size size, Scalar scalar) {
        return new Mat(blobFromImage_3(mat.nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]));
    }

    public static Mat blobFromImage(Mat mat, double d, Size size) {
        return new Mat(blobFromImage_4(mat.nativeObj, d, size.width, size.height));
    }

    public static Mat blobFromImage(Mat mat, double d) {
        return new Mat(blobFromImage_5(mat.nativeObj, d));
    }

    public static Mat blobFromImage(Mat mat) {
        return new Mat(blobFromImage_6(mat.nativeObj));
    }

    public static Mat blobFromImages(List<Mat> list, double d, Size size, Scalar scalar, boolean z, boolean z2, int i) {
        return new Mat(blobFromImages_0(Converters.vector_Mat_to_Mat(list).nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z, z2, i));
    }

    public static Mat blobFromImages(List<Mat> list, double d, Size size, Scalar scalar, boolean z, boolean z2) {
        return new Mat(blobFromImages_1(Converters.vector_Mat_to_Mat(list).nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z, z2));
    }

    public static Mat blobFromImages(List<Mat> list, double d, Size size, Scalar scalar, boolean z) {
        return new Mat(blobFromImages_2(Converters.vector_Mat_to_Mat(list).nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], z));
    }

    public static Mat blobFromImages(List<Mat> list, double d, Size size, Scalar scalar) {
        return new Mat(blobFromImages_3(Converters.vector_Mat_to_Mat(list).nativeObj, d, size.width, size.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]));
    }

    public static Mat blobFromImages(List<Mat> list, double d, Size size) {
        return new Mat(blobFromImages_4(Converters.vector_Mat_to_Mat(list).nativeObj, d, size.width, size.height));
    }

    public static Mat blobFromImages(List<Mat> list, double d) {
        return new Mat(blobFromImages_5(Converters.vector_Mat_to_Mat(list).nativeObj, d));
    }

    public static Mat blobFromImages(List<Mat> list) {
        return new Mat(blobFromImages_6(Converters.vector_Mat_to_Mat(list).nativeObj));
    }

    public static Mat blobFromImageWithParams(Mat mat, Image2BlobParams image2BlobParams) {
        return new Mat(blobFromImageWithParams_0(mat.nativeObj, image2BlobParams.nativeObj));
    }

    public static Mat blobFromImageWithParams(Mat mat) {
        return new Mat(blobFromImageWithParams_1(mat.nativeObj));
    }

    public static void blobFromImageWithParams(Mat mat, Mat mat2, Image2BlobParams image2BlobParams) {
        blobFromImageWithParams_2(mat.nativeObj, mat2.nativeObj, image2BlobParams.nativeObj);
    }

    public static void blobFromImageWithParams(Mat mat, Mat mat2) {
        blobFromImageWithParams_3(mat.nativeObj, mat2.nativeObj);
    }

    public static Mat blobFromImagesWithParams(List<Mat> list, Image2BlobParams image2BlobParams) {
        return new Mat(blobFromImagesWithParams_0(Converters.vector_Mat_to_Mat(list).nativeObj, image2BlobParams.nativeObj));
    }

    public static Mat blobFromImagesWithParams(List<Mat> list) {
        return new Mat(blobFromImagesWithParams_1(Converters.vector_Mat_to_Mat(list).nativeObj));
    }

    public static void blobFromImagesWithParams(List<Mat> list, Mat mat, Image2BlobParams image2BlobParams) {
        blobFromImagesWithParams_2(Converters.vector_Mat_to_Mat(list).nativeObj, mat.nativeObj, image2BlobParams.nativeObj);
    }

    public static void blobFromImagesWithParams(List<Mat> list, Mat mat) {
        blobFromImagesWithParams_3(Converters.vector_Mat_to_Mat(list).nativeObj, mat.nativeObj);
    }

    public static void imagesFromBlob(Mat mat, List<Mat> list) {
        Mat mat2 = new Mat();
        imagesFromBlob_0(mat.nativeObj, mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat2, list);
        mat2.release();
    }

    public static void shrinkCaffeModel(String str, String str2, List<String> list) {
        shrinkCaffeModel_0(str, str2, list);
    }

    public static void shrinkCaffeModel(String str, String str2) {
        shrinkCaffeModel_1(str, str2);
    }

    public static void writeTextGraph(String str, String str2) {
        writeTextGraph_0(str, str2);
    }

    public static void NMSBoxes(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt, float f3, int i) {
        NMSBoxes_0(matOfRect2d.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj, f3, i);
    }

    public static void NMSBoxes(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt, float f3) {
        NMSBoxes_1(matOfRect2d.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj, f3);
    }

    public static void NMSBoxes(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt) {
        NMSBoxes_2(matOfRect2d.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj);
    }

    public static void NMSBoxesRotated(MatOfRotatedRect matOfRotatedRect, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt, float f3, int i) {
        NMSBoxesRotated_0(matOfRotatedRect.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj, f3, i);
    }

    public static void NMSBoxesRotated(MatOfRotatedRect matOfRotatedRect, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt, float f3) {
        NMSBoxesRotated_1(matOfRotatedRect.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj, f3);
    }

    public static void NMSBoxesRotated(MatOfRotatedRect matOfRotatedRect, MatOfFloat matOfFloat, float f, float f2, MatOfInt matOfInt) {
        NMSBoxesRotated_2(matOfRotatedRect.nativeObj, matOfFloat.nativeObj, f, f2, matOfInt.nativeObj);
    }

    public static void NMSBoxesBatched(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, MatOfInt matOfInt, float f, float f2, MatOfInt matOfInt2, float f3, int i) {
        NMSBoxesBatched_0(matOfRect2d.nativeObj, matOfFloat.nativeObj, matOfInt.nativeObj, f, f2, matOfInt2.nativeObj, f3, i);
    }

    public static void NMSBoxesBatched(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, MatOfInt matOfInt, float f, float f2, MatOfInt matOfInt2, float f3) {
        NMSBoxesBatched_1(matOfRect2d.nativeObj, matOfFloat.nativeObj, matOfInt.nativeObj, f, f2, matOfInt2.nativeObj, f3);
    }

    public static void NMSBoxesBatched(MatOfRect2d matOfRect2d, MatOfFloat matOfFloat, MatOfInt matOfInt, float f, float f2, MatOfInt matOfInt2) {
        NMSBoxesBatched_2(matOfRect2d.nativeObj, matOfFloat.nativeObj, matOfInt.nativeObj, f, f2, matOfInt2.nativeObj);
    }

    public static void softNMSBoxes(MatOfRect matOfRect, MatOfFloat matOfFloat, MatOfFloat matOfFloat2, float f, float f2, MatOfInt matOfInt, long j, float f3) {
        softNMSBoxes_0(matOfRect.nativeObj, matOfFloat.nativeObj, matOfFloat2.nativeObj, f, f2, matOfInt.nativeObj, j, f3);
    }

    public static void softNMSBoxes(MatOfRect matOfRect, MatOfFloat matOfFloat, MatOfFloat matOfFloat2, float f, float f2, MatOfInt matOfInt, long j) {
        softNMSBoxes_2(matOfRect.nativeObj, matOfFloat.nativeObj, matOfFloat2.nativeObj, f, f2, matOfInt.nativeObj, j);
    }

    public static void softNMSBoxes(MatOfRect matOfRect, MatOfFloat matOfFloat, MatOfFloat matOfFloat2, float f, float f2, MatOfInt matOfInt) {
        softNMSBoxes_3(matOfRect.nativeObj, matOfFloat.nativeObj, matOfFloat2.nativeObj, f, f2, matOfInt.nativeObj);
    }

    @Deprecated
    public static String getInferenceEngineBackendType() {
        return getInferenceEngineBackendType_0();
    }

    @Deprecated
    public static String setInferenceEngineBackendType(String str) {
        return setInferenceEngineBackendType_0(str);
    }

    public static void resetMyriadDevice() {
        resetMyriadDevice_0();
    }

    public static String getInferenceEngineVPUType() {
        return getInferenceEngineVPUType_0();
    }

    public static String getInferenceEngineCPUType() {
        return getInferenceEngineCPUType_0();
    }

    public static void releaseHDDLPlugin() {
        releaseHDDLPlugin_0();
    }
}

