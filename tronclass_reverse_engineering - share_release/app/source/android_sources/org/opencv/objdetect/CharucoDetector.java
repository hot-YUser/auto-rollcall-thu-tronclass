package org.opencv.objdetect;

import java.util.List;
import org.opencv.core.Algorithm;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class CharucoDetector extends Algorithm {
    private static native long CharucoDetector_0(long j, long j2, long j3, long j4);

    private static native long CharucoDetector_1(long j, long j2, long j3);

    private static native long CharucoDetector_2(long j, long j2);

    private static native long CharucoDetector_3(long j);

    private static native void delete(long j);

    private static native void detectBoard_0(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void detectBoard_1(long j, long j2, long j3, long j4, long j5);

    private static native void detectBoard_2(long j, long j2, long j3, long j4);

    private static native void detectDiamonds_0(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void detectDiamonds_1(long j, long j2, long j3, long j4, long j5);

    private static native void detectDiamonds_2(long j, long j2, long j3, long j4);

    private static native long getBoard_0(long j);

    private static native long getCharucoParameters_0(long j);

    private static native long getDetectorParameters_0(long j);

    private static native long getRefineParameters_0(long j);

    private static native void setBoard_0(long j, long j2);

    private static native void setCharucoParameters_0(long j, long j2);

    private static native void setDetectorParameters_0(long j, long j2);

    private static native void setRefineParameters_0(long j, long j2);

    protected CharucoDetector(long j) {
        super(j);
    }

    public static CharucoDetector __fromPtr__(long j) {
        return new CharucoDetector(j);
    }

    public CharucoDetector(CharucoBoard charucoBoard, CharucoParameters charucoParameters, DetectorParameters detectorParameters, RefineParameters refineParameters) {
        super(CharucoDetector_0(charucoBoard.nativeObj, charucoParameters.nativeObj, detectorParameters.nativeObj, refineParameters.nativeObj));
    }

    public CharucoDetector(CharucoBoard charucoBoard, CharucoParameters charucoParameters, DetectorParameters detectorParameters) {
        super(CharucoDetector_1(charucoBoard.nativeObj, charucoParameters.nativeObj, detectorParameters.nativeObj));
    }

    public CharucoDetector(CharucoBoard charucoBoard, CharucoParameters charucoParameters) {
        super(CharucoDetector_2(charucoBoard.nativeObj, charucoParameters.nativeObj));
    }

    public CharucoDetector(CharucoBoard charucoBoard) {
        super(CharucoDetector_3(charucoBoard.nativeObj));
    }

    public CharucoBoard getBoard() {
        return new CharucoBoard(getBoard_0(this.nativeObj));
    }

    public void setBoard(CharucoBoard charucoBoard) {
        setBoard_0(this.nativeObj, charucoBoard.nativeObj);
    }

    public CharucoParameters getCharucoParameters() {
        return new CharucoParameters(getCharucoParameters_0(this.nativeObj));
    }

    public void setCharucoParameters(CharucoParameters charucoParameters) {
        setCharucoParameters_0(this.nativeObj, charucoParameters.nativeObj);
    }

    public DetectorParameters getDetectorParameters() {
        return new DetectorParameters(getDetectorParameters_0(this.nativeObj));
    }

    public void setDetectorParameters(DetectorParameters detectorParameters) {
        setDetectorParameters_0(this.nativeObj, detectorParameters.nativeObj);
    }

    public RefineParameters getRefineParameters() {
        return new RefineParameters(getRefineParameters_0(this.nativeObj));
    }

    public void setRefineParameters(RefineParameters refineParameters) {
        setRefineParameters_0(this.nativeObj, refineParameters.nativeObj);
    }

    public void detectBoard(Mat mat, Mat mat2, Mat mat3, List<Mat> list, Mat mat4) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        detectBoard_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, matVector_Mat_to_Mat.nativeObj, mat4.nativeObj);
        Converters.Mat_to_vector_Mat(matVector_Mat_to_Mat, list);
        matVector_Mat_to_Mat.release();
    }

    public void detectBoard(Mat mat, Mat mat2, Mat mat3, List<Mat> list) {
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list);
        detectBoard_1(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj, matVector_Mat_to_Mat.nativeObj);
        Converters.Mat_to_vector_Mat(matVector_Mat_to_Mat, list);
        matVector_Mat_to_Mat.release();
    }

    public void detectBoard(Mat mat, Mat mat2, Mat mat3) {
        detectBoard_2(this.nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void detectDiamonds(Mat mat, List<Mat> list, Mat mat2, List<Mat> list2, Mat mat3) {
        Mat mat4 = new Mat();
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list2);
        detectDiamonds_0(this.nativeObj, mat.nativeObj, mat4.nativeObj, mat2.nativeObj, matVector_Mat_to_Mat.nativeObj, mat3.nativeObj);
        Converters.Mat_to_vector_Mat(mat4, list);
        mat4.release();
        Converters.Mat_to_vector_Mat(matVector_Mat_to_Mat, list2);
        matVector_Mat_to_Mat.release();
    }

    public void detectDiamonds(Mat mat, List<Mat> list, Mat mat2, List<Mat> list2) {
        Mat mat3 = new Mat();
        Mat matVector_Mat_to_Mat = Converters.vector_Mat_to_Mat(list2);
        detectDiamonds_1(this.nativeObj, mat.nativeObj, mat3.nativeObj, mat2.nativeObj, matVector_Mat_to_Mat.nativeObj);
        Converters.Mat_to_vector_Mat(mat3, list);
        mat3.release();
        Converters.Mat_to_vector_Mat(matVector_Mat_to_Mat, list2);
        matVector_Mat_to_Mat.release();
    }

    public void detectDiamonds(Mat mat, List<Mat> list, Mat mat2) {
        Mat mat3 = new Mat();
        detectDiamonds_2(this.nativeObj, mat.nativeObj, mat3.nativeObj, mat2.nativeObj);
        Converters.Mat_to_vector_Mat(mat3, list);
        mat3.release();
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

