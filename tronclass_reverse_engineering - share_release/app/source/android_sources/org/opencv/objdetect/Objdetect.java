package org.opencv.objdetect;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfInt;
import org.opencv.core.MatOfRect;
import org.opencv.core.Scalar;
import org.opencv.utils.Converters;
public class Objdetect {
    public static final int CASCADE_DO_CANNY_PRUNING = 1;
    public static final int CASCADE_DO_ROUGH_SEARCH = 8;
    public static final int CASCADE_FIND_BIGGEST_OBJECT = 4;
    public static final int CASCADE_SCALE_IMAGE = 2;
    public static final int CORNER_REFINE_APRILTAG = 3;
    public static final int CORNER_REFINE_CONTOUR = 2;
    public static final int CORNER_REFINE_NONE = 0;
    public static final int CORNER_REFINE_SUBPIX = 1;
    public static final int DICT_4X4_100 = 1;
    public static final int DICT_4X4_1000 = 3;
    public static final int DICT_4X4_250 = 2;
    public static final int DICT_4X4_50 = 0;
    public static final int DICT_5X5_100 = 5;
    public static final int DICT_5X5_1000 = 7;
    public static final int DICT_5X5_250 = 6;
    public static final int DICT_5X5_50 = 4;
    public static final int DICT_6X6_100 = 9;
    public static final int DICT_6X6_1000 = 11;
    public static final int DICT_6X6_250 = 10;
    public static final int DICT_6X6_50 = 8;
    public static final int DICT_7X7_100 = 13;
    public static final int DICT_7X7_1000 = 15;
    public static final int DICT_7X7_250 = 14;
    public static final int DICT_7X7_50 = 12;
    public static final int DICT_APRILTAG_16h5 = 17;
    public static final int DICT_APRILTAG_25h9 = 18;
    public static final int DICT_APRILTAG_36h10 = 19;
    public static final int DICT_APRILTAG_36h11 = 20;
    public static final int DICT_ARUCO_MIP_36h12 = 21;
    public static final int DICT_ARUCO_ORIGINAL = 16;
    public static final int DetectionBasedTracker_DETECTED = 1;
    public static final int DetectionBasedTracker_DETECTED_NOT_SHOWN_YET = 0;
    public static final int DetectionBasedTracker_DETECTED_TEMPORARY_LOST = 2;
    public static final int DetectionBasedTracker_WRONG_OBJECT = 3;

    private static native void drawDetectedCornersCharuco_0(long j, long j2, long j3, double d, double d2, double d3, double d4);

    private static native void drawDetectedCornersCharuco_1(long j, long j2, long j3);

    private static native void drawDetectedCornersCharuco_2(long j, long j2);

    private static native void drawDetectedDiamonds_0(long j, long j2, long j3, double d, double d2, double d3, double d4);

    private static native void drawDetectedDiamonds_1(long j, long j2, long j3);

    private static native void drawDetectedDiamonds_2(long j, long j2);

    private static native void drawDetectedMarkers_0(long j, long j2, long j3, double d, double d2, double d3, double d4);

    private static native void drawDetectedMarkers_1(long j, long j2, long j3);

    private static native void drawDetectedMarkers_2(long j, long j2);

    private static native long extendDictionary_0(int i, int i2, long j, int i3);

    private static native long extendDictionary_1(int i, int i2, long j);

    private static native long extendDictionary_2(int i, int i2);

    private static native void generateImageMarker_0(long j, int i, int i2, long j2, int i3);

    private static native void generateImageMarker_1(long j, int i, int i2, long j2);

    private static native long getPredefinedDictionary_0(int i);

    private static native void groupRectangles_0(long j, long j2, int i, double d);

    private static native void groupRectangles_1(long j, long j2, int i);

    public static void groupRectangles(MatOfRect matOfRect, MatOfInt matOfInt, int i, double d) {
        groupRectangles_0(matOfRect.nativeObj, matOfInt.nativeObj, i, d);
    }

    public static void groupRectangles(MatOfRect matOfRect, MatOfInt matOfInt, int i) {
        groupRectangles_1(matOfRect.nativeObj, matOfInt.nativeObj, i);
    }

    public static Dictionary getPredefinedDictionary(int i) {
        return new Dictionary(getPredefinedDictionary_0(i));
    }

    public static Dictionary extendDictionary(int i, int i2, Dictionary dictionary, int i3) {
        return new Dictionary(extendDictionary_0(i, i2, dictionary.nativeObj, i3));
    }

    public static Dictionary extendDictionary(int i, int i2, Dictionary dictionary) {
        return new Dictionary(extendDictionary_1(i, i2, dictionary.nativeObj));
    }

    public static Dictionary extendDictionary(int i, int i2) {
        return new Dictionary(extendDictionary_2(i, i2));
    }

    public static void drawDetectedCornersCharuco(Mat mat, Mat mat2, Mat mat3, Scalar scalar) {
        drawDetectedCornersCharuco_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void drawDetectedCornersCharuco(Mat mat, Mat mat2, Mat mat3) {
        drawDetectedCornersCharuco_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void drawDetectedCornersCharuco(Mat mat, Mat mat2) {
        drawDetectedCornersCharuco_2(mat.nativeObj, mat2.nativeObj);
    }

    public static void drawDetectedDiamonds(Mat mat, List<Mat> list, Mat mat2, Scalar scalar) {
        drawDetectedDiamonds_0(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, mat2.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void drawDetectedDiamonds(Mat mat, List<Mat> list, Mat mat2) {
        drawDetectedDiamonds_1(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, mat2.nativeObj);
    }

    public static void drawDetectedDiamonds(Mat mat, List<Mat> list) {
        drawDetectedDiamonds_2(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public static void drawDetectedMarkers(Mat mat, List<Mat> list, Mat mat2, Scalar scalar) {
        drawDetectedMarkers_0(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, mat2.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void drawDetectedMarkers(Mat mat, List<Mat> list, Mat mat2) {
        drawDetectedMarkers_1(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, mat2.nativeObj);
    }

    public static void drawDetectedMarkers(Mat mat, List<Mat> list) {
        drawDetectedMarkers_2(mat.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj);
    }

    public static void generateImageMarker(Dictionary dictionary, int i, int i2, Mat mat, int i3) {
        generateImageMarker_0(dictionary.nativeObj, i, i2, mat.nativeObj, i3);
    }

    public static void generateImageMarker(Dictionary dictionary, int i, int i2, Mat mat) {
        generateImageMarker_1(dictionary.nativeObj, i, i2, mat.nativeObj);
    }
}

