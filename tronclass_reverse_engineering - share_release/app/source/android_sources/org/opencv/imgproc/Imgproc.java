package org.opencv.imgproc;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfFloat;
import org.opencv.core.MatOfInt;
import org.opencv.core.MatOfInt4;
import org.opencv.core.MatOfPoint;
import org.opencv.core.MatOfPoint2f;
import org.opencv.core.Point;
import org.opencv.core.Rect;
import org.opencv.core.RotatedRect;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.core.TermCriteria;
import org.opencv.utils.Converters;
public class Imgproc {
    public static final int ADAPTIVE_THRESH_GAUSSIAN_C = 1;
    public static final int ADAPTIVE_THRESH_MEAN_C = 0;
    public static final int CCL_BBDT = 4;
    public static final int CCL_BOLELLI = 2;
    public static final int CCL_DEFAULT = -1;
    public static final int CCL_GRANA = 1;
    public static final int CCL_SAUF = 3;
    public static final int CCL_SPAGHETTI = 5;
    public static final int CCL_WU = 0;
    public static final int CC_STAT_AREA = 4;
    public static final int CC_STAT_HEIGHT = 3;
    public static final int CC_STAT_LEFT = 0;
    public static final int CC_STAT_MAX = 5;
    public static final int CC_STAT_TOP = 1;
    public static final int CC_STAT_WIDTH = 2;
    public static final int CHAIN_APPROX_NONE = 1;
    public static final int CHAIN_APPROX_SIMPLE = 2;
    public static final int CHAIN_APPROX_TC89_KCOS = 4;
    public static final int CHAIN_APPROX_TC89_L1 = 3;
    public static final int COLORMAP_AUTUMN = 0;
    public static final int COLORMAP_BONE = 1;
    public static final int COLORMAP_CIVIDIS = 17;
    public static final int COLORMAP_COOL = 8;
    public static final int COLORMAP_DEEPGREEN = 21;
    public static final int COLORMAP_HOT = 11;
    public static final int COLORMAP_HSV = 9;
    public static final int COLORMAP_INFERNO = 14;
    public static final int COLORMAP_JET = 2;
    public static final int COLORMAP_MAGMA = 13;
    public static final int COLORMAP_OCEAN = 5;
    public static final int COLORMAP_PARULA = 12;
    public static final int COLORMAP_PINK = 10;
    public static final int COLORMAP_PLASMA = 15;
    public static final int COLORMAP_RAINBOW = 4;
    public static final int COLORMAP_SPRING = 7;
    public static final int COLORMAP_SUMMER = 6;
    public static final int COLORMAP_TURBO = 20;
    public static final int COLORMAP_TWILIGHT = 18;
    public static final int COLORMAP_TWILIGHT_SHIFTED = 19;
    public static final int COLORMAP_VIRIDIS = 16;
    public static final int COLORMAP_WINTER = 3;
    public static final int COLOR_BGR2BGR555 = 22;
    public static final int COLOR_BGR2BGR565 = 12;
    public static final int COLOR_BGR2BGRA = 0;
    public static final int COLOR_BGR2GRAY = 6;
    public static final int COLOR_BGR2HLS = 52;
    public static final int COLOR_BGR2HLS_FULL = 68;
    public static final int COLOR_BGR2HSV = 40;
    public static final int COLOR_BGR2HSV_FULL = 66;
    public static final int COLOR_BGR2Lab = 44;
    public static final int COLOR_BGR2Luv = 50;
    public static final int COLOR_BGR2RGB = 4;
    public static final int COLOR_BGR2RGBA = 2;
    public static final int COLOR_BGR2XYZ = 32;
    public static final int COLOR_BGR2YCrCb = 36;
    public static final int COLOR_BGR2YUV = 82;
    public static final int COLOR_BGR2YUV_I420 = 128;
    public static final int COLOR_BGR2YUV_IYUV = 128;
    public static final int COLOR_BGR2YUV_UYNV = 144;
    public static final int COLOR_BGR2YUV_UYVY = 144;
    public static final int COLOR_BGR2YUV_Y422 = 144;
    public static final int COLOR_BGR2YUV_YUNV = 148;
    public static final int COLOR_BGR2YUV_YUY2 = 148;
    public static final int COLOR_BGR2YUV_YUYV = 148;
    public static final int COLOR_BGR2YUV_YV12 = 132;
    public static final int COLOR_BGR2YUV_YVYU = 150;
    public static final int COLOR_BGR5552BGR = 24;
    public static final int COLOR_BGR5552BGRA = 28;
    public static final int COLOR_BGR5552GRAY = 31;
    public static final int COLOR_BGR5552RGB = 25;
    public static final int COLOR_BGR5552RGBA = 29;
    public static final int COLOR_BGR5652BGR = 14;
    public static final int COLOR_BGR5652BGRA = 18;
    public static final int COLOR_BGR5652GRAY = 21;
    public static final int COLOR_BGR5652RGB = 15;
    public static final int COLOR_BGR5652RGBA = 19;
    public static final int COLOR_BGRA2BGR = 1;
    public static final int COLOR_BGRA2BGR555 = 26;
    public static final int COLOR_BGRA2BGR565 = 16;
    public static final int COLOR_BGRA2GRAY = 10;
    public static final int COLOR_BGRA2RGB = 3;
    public static final int COLOR_BGRA2RGBA = 5;
    public static final int COLOR_BGRA2YUV_I420 = 130;
    public static final int COLOR_BGRA2YUV_IYUV = 130;
    public static final int COLOR_BGRA2YUV_UYNV = 146;
    public static final int COLOR_BGRA2YUV_UYVY = 146;
    public static final int COLOR_BGRA2YUV_Y422 = 146;
    public static final int COLOR_BGRA2YUV_YUNV = 152;
    public static final int COLOR_BGRA2YUV_YUY2 = 152;
    public static final int COLOR_BGRA2YUV_YUYV = 152;
    public static final int COLOR_BGRA2YUV_YV12 = 134;
    public static final int COLOR_BGRA2YUV_YVYU = 154;
    public static final int COLOR_BayerBG2BGR = 46;
    public static final int COLOR_BayerBG2BGRA = 139;
    public static final int COLOR_BayerBG2BGR_EA = 135;
    public static final int COLOR_BayerBG2BGR_VNG = 62;
    public static final int COLOR_BayerBG2GRAY = 86;
    public static final int COLOR_BayerBG2RGB = 48;
    public static final int COLOR_BayerBG2RGBA = 141;
    public static final int COLOR_BayerBG2RGB_EA = 137;
    public static final int COLOR_BayerBG2RGB_VNG = 64;
    public static final int COLOR_BayerBGGR2BGR = 48;
    public static final int COLOR_BayerBGGR2BGRA = 141;
    public static final int COLOR_BayerBGGR2BGR_EA = 137;
    public static final int COLOR_BayerBGGR2BGR_VNG = 64;
    public static final int COLOR_BayerBGGR2GRAY = 88;
    public static final int COLOR_BayerBGGR2RGB = 46;
    public static final int COLOR_BayerBGGR2RGBA = 139;
    public static final int COLOR_BayerBGGR2RGB_EA = 135;
    public static final int COLOR_BayerBGGR2RGB_VNG = 62;
    public static final int COLOR_BayerGB2BGR = 47;
    public static final int COLOR_BayerGB2BGRA = 140;
    public static final int COLOR_BayerGB2BGR_EA = 136;
    public static final int COLOR_BayerGB2BGR_VNG = 63;
    public static final int COLOR_BayerGB2GRAY = 87;
    public static final int COLOR_BayerGB2RGB = 49;
    public static final int COLOR_BayerGB2RGBA = 142;
    public static final int COLOR_BayerGB2RGB_EA = 138;
    public static final int COLOR_BayerGB2RGB_VNG = 65;
    public static final int COLOR_BayerGBRG2BGR = 49;
    public static final int COLOR_BayerGBRG2BGRA = 142;
    public static final int COLOR_BayerGBRG2BGR_EA = 138;
    public static final int COLOR_BayerGBRG2BGR_VNG = 65;
    public static final int COLOR_BayerGBRG2GRAY = 89;
    public static final int COLOR_BayerGBRG2RGB = 47;
    public static final int COLOR_BayerGBRG2RGBA = 140;
    public static final int COLOR_BayerGBRG2RGB_EA = 136;
    public static final int COLOR_BayerGBRG2RGB_VNG = 63;
    public static final int COLOR_BayerGR2BGR = 49;
    public static final int COLOR_BayerGR2BGRA = 142;
    public static final int COLOR_BayerGR2BGR_EA = 138;
    public static final int COLOR_BayerGR2BGR_VNG = 65;
    public static final int COLOR_BayerGR2GRAY = 89;
    public static final int COLOR_BayerGR2RGB = 47;
    public static final int COLOR_BayerGR2RGBA = 140;
    public static final int COLOR_BayerGR2RGB_EA = 136;
    public static final int COLOR_BayerGR2RGB_VNG = 63;
    public static final int COLOR_BayerGRBG2BGR = 47;
    public static final int COLOR_BayerGRBG2BGRA = 140;
    public static final int COLOR_BayerGRBG2BGR_EA = 136;
    public static final int COLOR_BayerGRBG2BGR_VNG = 63;
    public static final int COLOR_BayerGRBG2GRAY = 87;
    public static final int COLOR_BayerGRBG2RGB = 49;
    public static final int COLOR_BayerGRBG2RGBA = 142;
    public static final int COLOR_BayerGRBG2RGB_EA = 138;
    public static final int COLOR_BayerGRBG2RGB_VNG = 65;
    public static final int COLOR_BayerRG2BGR = 48;
    public static final int COLOR_BayerRG2BGRA = 141;
    public static final int COLOR_BayerRG2BGR_EA = 137;
    public static final int COLOR_BayerRG2BGR_VNG = 64;
    public static final int COLOR_BayerRG2GRAY = 88;
    public static final int COLOR_BayerRG2RGB = 46;
    public static final int COLOR_BayerRG2RGBA = 139;
    public static final int COLOR_BayerRG2RGB_EA = 135;
    public static final int COLOR_BayerRG2RGB_VNG = 62;
    public static final int COLOR_BayerRGGB2BGR = 46;
    public static final int COLOR_BayerRGGB2BGRA = 139;
    public static final int COLOR_BayerRGGB2BGR_EA = 135;
    public static final int COLOR_BayerRGGB2BGR_VNG = 62;
    public static final int COLOR_BayerRGGB2GRAY = 86;
    public static final int COLOR_BayerRGGB2RGB = 48;
    public static final int COLOR_BayerRGGB2RGBA = 141;
    public static final int COLOR_BayerRGGB2RGB_EA = 137;
    public static final int COLOR_BayerRGGB2RGB_VNG = 64;
    public static final int COLOR_COLORCVT_MAX = 155;
    public static final int COLOR_GRAY2BGR = 8;
    public static final int COLOR_GRAY2BGR555 = 30;
    public static final int COLOR_GRAY2BGR565 = 20;
    public static final int COLOR_GRAY2BGRA = 9;
    public static final int COLOR_GRAY2RGB = 8;
    public static final int COLOR_GRAY2RGBA = 9;
    public static final int COLOR_HLS2BGR = 60;
    public static final int COLOR_HLS2BGR_FULL = 72;
    public static final int COLOR_HLS2RGB = 61;
    public static final int COLOR_HLS2RGB_FULL = 73;
    public static final int COLOR_HSV2BGR = 54;
    public static final int COLOR_HSV2BGR_FULL = 70;
    public static final int COLOR_HSV2RGB = 55;
    public static final int COLOR_HSV2RGB_FULL = 71;
    public static final int COLOR_LBGR2Lab = 74;
    public static final int COLOR_LBGR2Luv = 76;
    public static final int COLOR_LRGB2Lab = 75;
    public static final int COLOR_LRGB2Luv = 77;
    public static final int COLOR_Lab2BGR = 56;
    public static final int COLOR_Lab2LBGR = 78;
    public static final int COLOR_Lab2LRGB = 79;
    public static final int COLOR_Lab2RGB = 57;
    public static final int COLOR_Luv2BGR = 58;
    public static final int COLOR_Luv2LBGR = 80;
    public static final int COLOR_Luv2LRGB = 81;
    public static final int COLOR_Luv2RGB = 59;
    public static final int COLOR_RGB2BGR = 4;
    public static final int COLOR_RGB2BGR555 = 23;
    public static final int COLOR_RGB2BGR565 = 13;
    public static final int COLOR_RGB2BGRA = 2;
    public static final int COLOR_RGB2GRAY = 7;
    public static final int COLOR_RGB2HLS = 53;
    public static final int COLOR_RGB2HLS_FULL = 69;
    public static final int COLOR_RGB2HSV = 41;
    public static final int COLOR_RGB2HSV_FULL = 67;
    public static final int COLOR_RGB2Lab = 45;
    public static final int COLOR_RGB2Luv = 51;
    public static final int COLOR_RGB2RGBA = 0;
    public static final int COLOR_RGB2XYZ = 33;
    public static final int COLOR_RGB2YCrCb = 37;
    public static final int COLOR_RGB2YUV = 83;
    public static final int COLOR_RGB2YUV_I420 = 127;
    public static final int COLOR_RGB2YUV_IYUV = 127;
    public static final int COLOR_RGB2YUV_UYNV = 143;
    public static final int COLOR_RGB2YUV_UYVY = 143;
    public static final int COLOR_RGB2YUV_Y422 = 143;
    public static final int COLOR_RGB2YUV_YUNV = 147;
    public static final int COLOR_RGB2YUV_YUY2 = 147;
    public static final int COLOR_RGB2YUV_YUYV = 147;
    public static final int COLOR_RGB2YUV_YV12 = 131;
    public static final int COLOR_RGB2YUV_YVYU = 149;
    public static final int COLOR_RGBA2BGR = 3;
    public static final int COLOR_RGBA2BGR555 = 27;
    public static final int COLOR_RGBA2BGR565 = 17;
    public static final int COLOR_RGBA2BGRA = 5;
    public static final int COLOR_RGBA2GRAY = 11;
    public static final int COLOR_RGBA2RGB = 1;
    public static final int COLOR_RGBA2YUV_I420 = 129;
    public static final int COLOR_RGBA2YUV_IYUV = 129;
    public static final int COLOR_RGBA2YUV_UYNV = 145;
    public static final int COLOR_RGBA2YUV_UYVY = 145;
    public static final int COLOR_RGBA2YUV_Y422 = 145;
    public static final int COLOR_RGBA2YUV_YUNV = 151;
    public static final int COLOR_RGBA2YUV_YUY2 = 151;
    public static final int COLOR_RGBA2YUV_YUYV = 151;
    public static final int COLOR_RGBA2YUV_YV12 = 133;
    public static final int COLOR_RGBA2YUV_YVYU = 153;
    public static final int COLOR_RGBA2mRGBA = 125;
    public static final int COLOR_XYZ2BGR = 34;
    public static final int COLOR_XYZ2RGB = 35;
    public static final int COLOR_YCrCb2BGR = 38;
    public static final int COLOR_YCrCb2RGB = 39;
    public static final int COLOR_YUV2BGR = 84;
    public static final int COLOR_YUV2BGRA_I420 = 105;
    public static final int COLOR_YUV2BGRA_IYUV = 105;
    public static final int COLOR_YUV2BGRA_NV12 = 95;
    public static final int COLOR_YUV2BGRA_NV21 = 97;
    public static final int COLOR_YUV2BGRA_UYNV = 112;
    public static final int COLOR_YUV2BGRA_UYVY = 112;
    public static final int COLOR_YUV2BGRA_Y422 = 112;
    public static final int COLOR_YUV2BGRA_YUNV = 120;
    public static final int COLOR_YUV2BGRA_YUY2 = 120;
    public static final int COLOR_YUV2BGRA_YUYV = 120;
    public static final int COLOR_YUV2BGRA_YV12 = 103;
    public static final int COLOR_YUV2BGRA_YVYU = 122;
    public static final int COLOR_YUV2BGR_I420 = 101;
    public static final int COLOR_YUV2BGR_IYUV = 101;
    public static final int COLOR_YUV2BGR_NV12 = 91;
    public static final int COLOR_YUV2BGR_NV21 = 93;
    public static final int COLOR_YUV2BGR_UYNV = 108;
    public static final int COLOR_YUV2BGR_UYVY = 108;
    public static final int COLOR_YUV2BGR_Y422 = 108;
    public static final int COLOR_YUV2BGR_YUNV = 116;
    public static final int COLOR_YUV2BGR_YUY2 = 116;
    public static final int COLOR_YUV2BGR_YUYV = 116;
    public static final int COLOR_YUV2BGR_YV12 = 99;
    public static final int COLOR_YUV2BGR_YVYU = 118;
    public static final int COLOR_YUV2GRAY_420 = 106;
    public static final int COLOR_YUV2GRAY_I420 = 106;
    public static final int COLOR_YUV2GRAY_IYUV = 106;
    public static final int COLOR_YUV2GRAY_NV12 = 106;
    public static final int COLOR_YUV2GRAY_NV21 = 106;
    public static final int COLOR_YUV2GRAY_UYNV = 123;
    public static final int COLOR_YUV2GRAY_UYVY = 123;
    public static final int COLOR_YUV2GRAY_Y422 = 123;
    public static final int COLOR_YUV2GRAY_YUNV = 124;
    public static final int COLOR_YUV2GRAY_YUY2 = 124;
    public static final int COLOR_YUV2GRAY_YUYV = 124;
    public static final int COLOR_YUV2GRAY_YV12 = 106;
    public static final int COLOR_YUV2GRAY_YVYU = 124;
    public static final int COLOR_YUV2RGB = 85;
    public static final int COLOR_YUV2RGBA_I420 = 104;
    public static final int COLOR_YUV2RGBA_IYUV = 104;
    public static final int COLOR_YUV2RGBA_NV12 = 94;
    public static final int COLOR_YUV2RGBA_NV21 = 96;
    public static final int COLOR_YUV2RGBA_UYNV = 111;
    public static final int COLOR_YUV2RGBA_UYVY = 111;
    public static final int COLOR_YUV2RGBA_Y422 = 111;
    public static final int COLOR_YUV2RGBA_YUNV = 119;
    public static final int COLOR_YUV2RGBA_YUY2 = 119;
    public static final int COLOR_YUV2RGBA_YUYV = 119;
    public static final int COLOR_YUV2RGBA_YV12 = 102;
    public static final int COLOR_YUV2RGBA_YVYU = 121;
    public static final int COLOR_YUV2RGB_I420 = 100;
    public static final int COLOR_YUV2RGB_IYUV = 100;
    public static final int COLOR_YUV2RGB_NV12 = 90;
    public static final int COLOR_YUV2RGB_NV21 = 92;
    public static final int COLOR_YUV2RGB_UYNV = 107;
    public static final int COLOR_YUV2RGB_UYVY = 107;
    public static final int COLOR_YUV2RGB_Y422 = 107;
    public static final int COLOR_YUV2RGB_YUNV = 115;
    public static final int COLOR_YUV2RGB_YUY2 = 115;
    public static final int COLOR_YUV2RGB_YUYV = 115;
    public static final int COLOR_YUV2RGB_YV12 = 98;
    public static final int COLOR_YUV2RGB_YVYU = 117;
    public static final int COLOR_YUV420p2BGR = 99;
    public static final int COLOR_YUV420p2BGRA = 103;
    public static final int COLOR_YUV420p2GRAY = 106;
    public static final int COLOR_YUV420p2RGB = 98;
    public static final int COLOR_YUV420p2RGBA = 102;
    public static final int COLOR_YUV420sp2BGR = 93;
    public static final int COLOR_YUV420sp2BGRA = 97;
    public static final int COLOR_YUV420sp2GRAY = 106;
    public static final int COLOR_YUV420sp2RGB = 92;
    public static final int COLOR_YUV420sp2RGBA = 96;
    public static final int COLOR_mRGBA2RGBA = 126;
    public static final int CONTOURS_MATCH_I1 = 1;
    public static final int CONTOURS_MATCH_I2 = 2;
    public static final int CONTOURS_MATCH_I3 = 3;
    public static final int CV_BILATERAL = 4;
    public static final int CV_BLUR = 1;
    public static final int CV_BLUR_NO_SCALE = 0;
    public static final int CV_CANNY_L2_GRADIENT = Integer.MIN_VALUE;
    private static final int CV_CHAIN_APPROX_NONE = 1;
    private static final int CV_CHAIN_APPROX_SIMPLE = 2;
    private static final int CV_CHAIN_APPROX_TC89_KCOS = 4;
    private static final int CV_CHAIN_APPROX_TC89_L1 = 3;
    public static final int CV_CHAIN_CODE = 0;
    public static final int CV_CLOCKWISE = 1;
    public static final int CV_COMP_BHATTACHARYYA = 3;
    public static final int CV_COMP_CHISQR = 1;
    public static final int CV_COMP_CHISQR_ALT = 4;
    public static final int CV_COMP_CORREL = 0;
    public static final int CV_COMP_HELLINGER = 3;
    public static final int CV_COMP_INTERSECT = 2;
    public static final int CV_COMP_KL_DIV = 5;
    public static final int CV_CONTOURS_MATCH_I1 = 1;
    public static final int CV_CONTOURS_MATCH_I2 = 2;
    public static final int CV_CONTOURS_MATCH_I3 = 3;
    public static final int CV_COUNTER_CLOCKWISE = 2;
    public static final int CV_DIST_C = 3;
    public static final int CV_DIST_FAIR = 5;
    public static final int CV_DIST_HUBER = 7;
    public static final int CV_DIST_L1 = 1;
    public static final int CV_DIST_L12 = 4;
    public static final int CV_DIST_L2 = 2;
    public static final int CV_DIST_LABEL_CCOMP = 0;
    public static final int CV_DIST_LABEL_PIXEL = 1;
    public static final int CV_DIST_MASK_3 = 3;
    public static final int CV_DIST_MASK_5 = 5;
    public static final int CV_DIST_MASK_PRECISE = 0;
    public static final int CV_DIST_USER = -1;
    public static final int CV_DIST_WELSCH = 6;
    public static final int CV_GAUSSIAN = 2;
    public static final int CV_GAUSSIAN_5x5 = 7;
    public static final int CV_HOUGH_GRADIENT = 3;
    public static final int CV_HOUGH_MULTI_SCALE = 2;
    public static final int CV_HOUGH_PROBABILISTIC = 1;
    public static final int CV_HOUGH_STANDARD = 0;
    private static final int CV_INTER_AREA = 3;
    private static final int CV_INTER_CUBIC = 2;
    private static final int CV_INTER_LANCZOS4 = 4;
    private static final int CV_INTER_LINEAR = 1;
    private static final int CV_INTER_NN = 0;
    public static final int CV_LINK_RUNS = 5;
    public static final int CV_MAX_SOBEL_KSIZE = 7;
    public static final int CV_MEDIAN = 3;
    private static final int CV_MOP_BLACKHAT = 6;
    private static final int CV_MOP_CLOSE = 3;
    private static final int CV_MOP_DILATE = 1;
    private static final int CV_MOP_ERODE = 0;
    private static final int CV_MOP_GRADIENT = 4;
    private static final int CV_MOP_OPEN = 2;
    private static final int CV_MOP_TOPHAT = 5;
    public static final int CV_POLY_APPROX_DP = 0;
    private static final int CV_RETR_CCOMP = 2;
    private static final int CV_RETR_EXTERNAL = 0;
    private static final int CV_RETR_FLOODFILL = 4;
    private static final int CV_RETR_LIST = 1;
    private static final int CV_RETR_TREE = 3;
    public static final int CV_RGBA2mRGBA = 125;
    public static final int CV_SCHARR = -1;
    public static final int CV_SHAPE_CROSS = 1;
    public static final int CV_SHAPE_CUSTOM = 100;
    public static final int CV_SHAPE_ELLIPSE = 2;
    public static final int CV_SHAPE_RECT = 0;
    private static final int CV_THRESH_BINARY = 0;
    private static final int CV_THRESH_BINARY_INV = 1;
    private static final int CV_THRESH_MASK = 7;
    private static final int CV_THRESH_OTSU = 8;
    private static final int CV_THRESH_TOZERO = 3;
    private static final int CV_THRESH_TOZERO_INV = 4;
    private static final int CV_THRESH_TRIANGLE = 16;
    private static final int CV_THRESH_TRUNC = 2;
    public static final int CV_WARP_FILL_OUTLIERS = 8;
    public static final int CV_WARP_INVERSE_MAP = 16;
    public static final int CV_mRGBA2RGBA = 126;
    public static final int DIST_C = 3;
    public static final int DIST_FAIR = 5;
    public static final int DIST_HUBER = 7;
    public static final int DIST_L1 = 1;
    public static final int DIST_L12 = 4;
    public static final int DIST_L2 = 2;
    public static final int DIST_LABEL_CCOMP = 0;
    public static final int DIST_LABEL_PIXEL = 1;
    public static final int DIST_MASK_3 = 3;
    public static final int DIST_MASK_5 = 5;
    public static final int DIST_MASK_PRECISE = 0;
    public static final int DIST_USER = -1;
    public static final int DIST_WELSCH = 6;
    public static final int FILLED = -1;
    public static final int FILTER_SCHARR = -1;
    public static final int FLOODFILL_FIXED_RANGE = 65536;
    public static final int FLOODFILL_MASK_ONLY = 131072;
    public static final int FONT_HERSHEY_COMPLEX = 3;
    public static final int FONT_HERSHEY_COMPLEX_SMALL = 5;
    public static final int FONT_HERSHEY_DUPLEX = 2;
    public static final int FONT_HERSHEY_PLAIN = 1;
    public static final int FONT_HERSHEY_SCRIPT_COMPLEX = 7;
    public static final int FONT_HERSHEY_SCRIPT_SIMPLEX = 6;
    public static final int FONT_HERSHEY_SIMPLEX = 0;
    public static final int FONT_HERSHEY_TRIPLEX = 4;
    public static final int FONT_ITALIC = 16;
    public static final int GC_BGD = 0;
    public static final int GC_EVAL = 2;
    public static final int GC_EVAL_FREEZE_MODEL = 3;
    public static final int GC_FGD = 1;
    public static final int GC_INIT_WITH_MASK = 1;
    public static final int GC_INIT_WITH_RECT = 0;
    public static final int GC_PR_BGD = 2;
    public static final int GC_PR_FGD = 3;
    public static final int HISTCMP_BHATTACHARYYA = 3;
    public static final int HISTCMP_CHISQR = 1;
    public static final int HISTCMP_CHISQR_ALT = 4;
    public static final int HISTCMP_CORREL = 0;
    public static final int HISTCMP_HELLINGER = 3;
    public static final int HISTCMP_INTERSECT = 2;
    public static final int HISTCMP_KL_DIV = 5;
    public static final int HOUGH_GRADIENT = 3;
    public static final int HOUGH_GRADIENT_ALT = 4;
    public static final int HOUGH_MULTI_SCALE = 2;
    public static final int HOUGH_PROBABILISTIC = 1;
    public static final int HOUGH_STANDARD = 0;
    public static final int INTERSECT_FULL = 2;
    public static final int INTERSECT_NONE = 0;
    public static final int INTERSECT_PARTIAL = 1;
    public static final int INTER_AREA = 3;
    public static final int INTER_BITS = 5;
    public static final int INTER_BITS2 = 10;
    public static final int INTER_CUBIC = 2;
    public static final int INTER_LANCZOS4 = 4;
    public static final int INTER_LINEAR = 1;
    public static final int INTER_LINEAR_EXACT = 5;
    public static final int INTER_MAX = 7;
    public static final int INTER_NEAREST = 0;
    public static final int INTER_NEAREST_EXACT = 6;
    public static final int INTER_TAB_SIZE = 32;
    public static final int INTER_TAB_SIZE2 = 1024;
    private static final int IPL_BORDER_CONSTANT = 0;
    private static final int IPL_BORDER_REFLECT = 2;
    private static final int IPL_BORDER_REFLECT_101 = 4;
    private static final int IPL_BORDER_REPLICATE = 1;
    private static final int IPL_BORDER_TRANSPARENT = 5;
    private static final int IPL_BORDER_WRAP = 3;
    public static final int LINE_4 = 4;
    public static final int LINE_8 = 8;
    public static final int LINE_AA = 16;
    public static final int LSD_REFINE_ADV = 2;
    public static final int LSD_REFINE_NONE = 0;
    public static final int LSD_REFINE_STD = 1;
    public static final int MARKER_CROSS = 0;
    public static final int MARKER_DIAMOND = 3;
    public static final int MARKER_SQUARE = 4;
    public static final int MARKER_STAR = 2;
    public static final int MARKER_TILTED_CROSS = 1;
    public static final int MARKER_TRIANGLE_DOWN = 6;
    public static final int MARKER_TRIANGLE_UP = 5;
    public static final int MORPH_BLACKHAT = 6;
    public static final int MORPH_CLOSE = 3;
    public static final int MORPH_CROSS = 1;
    public static final int MORPH_DILATE = 1;
    public static final int MORPH_ELLIPSE = 2;
    public static final int MORPH_ERODE = 0;
    public static final int MORPH_GRADIENT = 4;
    public static final int MORPH_HITMISS = 7;
    public static final int MORPH_OPEN = 2;
    public static final int MORPH_RECT = 0;
    public static final int MORPH_TOPHAT = 5;
    public static final int RETR_CCOMP = 2;
    public static final int RETR_EXTERNAL = 0;
    public static final int RETR_FLOODFILL = 4;
    public static final int RETR_LIST = 1;
    public static final int RETR_TREE = 3;
    public static final int THRESH_BINARY = 0;
    public static final int THRESH_BINARY_INV = 1;
    public static final int THRESH_MASK = 7;
    public static final int THRESH_OTSU = 8;
    public static final int THRESH_TOZERO = 3;
    public static final int THRESH_TOZERO_INV = 4;
    public static final int THRESH_TRIANGLE = 16;
    public static final int THRESH_TRUNC = 2;
    public static final int TM_CCOEFF = 4;
    public static final int TM_CCOEFF_NORMED = 5;
    public static final int TM_CCORR = 2;
    public static final int TM_CCORR_NORMED = 3;
    public static final int TM_SQDIFF = 0;
    public static final int TM_SQDIFF_NORMED = 1;
    public static final int WARP_FILL_OUTLIERS = 8;
    public static final int WARP_INVERSE_MAP = 16;
    public static final int WARP_POLAR_LINEAR = 0;
    public static final int WARP_POLAR_LOG = 256;

    private static native void Canny_0(long j, long j2, double d, double d2, int i, boolean z);

    private static native void Canny_1(long j, long j2, double d, double d2, int i);

    private static native void Canny_2(long j, long j2, double d, double d2);

    private static native void Canny_3(long j, long j2, long j3, double d, double d2, boolean z);

    private static native void Canny_4(long j, long j2, long j3, double d, double d2);

    private static native float EMD_0(long j, long j2, int i, long j3, long j4);

    private static native float EMD_1(long j, long j2, int i, long j3);

    private static native float EMD_3(long j, long j2, int i);

    private static native void GaussianBlur_0(long j, long j2, double d, double d2, double d3, double d4, int i);

    private static native void GaussianBlur_1(long j, long j2, double d, double d2, double d3, double d4);

    private static native void GaussianBlur_2(long j, long j2, double d, double d2, double d3);

    private static native void HoughCircles_0(long j, long j2, int i, double d, double d2, double d3, double d4, int i2, int i3);

    private static native void HoughCircles_1(long j, long j2, int i, double d, double d2, double d3, double d4, int i2);

    private static native void HoughCircles_2(long j, long j2, int i, double d, double d2, double d3, double d4);

    private static native void HoughCircles_3(long j, long j2, int i, double d, double d2, double d3);

    private static native void HoughCircles_4(long j, long j2, int i, double d, double d2);

    private static native void HoughLinesP_0(long j, long j2, double d, double d2, int i, double d3, double d4);

    private static native void HoughLinesP_1(long j, long j2, double d, double d2, int i, double d3);

    private static native void HoughLinesP_2(long j, long j2, double d, double d2, int i);

    private static native void HoughLinesPointSet_0(long j, long j2, int i, int i2, double d, double d2, double d3, double d4, double d5, double d6);

    private static native void HoughLinesWithAccumulator_0(long j, long j2, double d, double d2, int i, double d3, double d4, double d5, double d6);

    private static native void HoughLinesWithAccumulator_1(long j, long j2, double d, double d2, int i, double d3, double d4, double d5);

    private static native void HoughLinesWithAccumulator_2(long j, long j2, double d, double d2, int i, double d3, double d4);

    private static native void HoughLinesWithAccumulator_3(long j, long j2, double d, double d2, int i, double d3);

    private static native void HoughLinesWithAccumulator_4(long j, long j2, double d, double d2, int i);

    private static native void HoughLines_0(long j, long j2, double d, double d2, int i, double d3, double d4, double d5, double d6);

    private static native void HoughLines_1(long j, long j2, double d, double d2, int i, double d3, double d4, double d5);

    private static native void HoughLines_2(long j, long j2, double d, double d2, int i, double d3, double d4);

    private static native void HoughLines_3(long j, long j2, double d, double d2, int i, double d3);

    private static native void HoughLines_4(long j, long j2, double d, double d2, int i);

    private static native void HuMoments_0(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, long j);

    private static native void Laplacian_0(long j, long j2, int i, int i2, double d, double d2, int i3);

    private static native void Laplacian_1(long j, long j2, int i, int i2, double d, double d2);

    private static native void Laplacian_2(long j, long j2, int i, int i2, double d);

    private static native void Laplacian_3(long j, long j2, int i, int i2);

    private static native void Laplacian_4(long j, long j2, int i);

    private static native void Scharr_0(long j, long j2, int i, int i2, int i3, double d, double d2, int i4);

    private static native void Scharr_1(long j, long j2, int i, int i2, int i3, double d, double d2);

    private static native void Scharr_2(long j, long j2, int i, int i2, int i3, double d);

    private static native void Scharr_3(long j, long j2, int i, int i2, int i3);

    private static native void Sobel_0(long j, long j2, int i, int i2, int i3, int i4, double d, double d2, int i5);

    private static native void Sobel_1(long j, long j2, int i, int i2, int i3, int i4, double d, double d2);

    private static native void Sobel_2(long j, long j2, int i, int i2, int i3, int i4, double d);

    private static native void Sobel_3(long j, long j2, int i, int i2, int i3, int i4);

    private static native void Sobel_4(long j, long j2, int i, int i2, int i3);

    private static native void accumulateProduct_0(long j, long j2, long j3, long j4);

    private static native void accumulateProduct_1(long j, long j2, long j3);

    private static native void accumulateSquare_0(long j, long j2, long j3);

    private static native void accumulateSquare_1(long j, long j2);

    private static native void accumulateWeighted_0(long j, long j2, double d, long j3);

    private static native void accumulateWeighted_1(long j, long j2, double d);

    private static native void accumulate_0(long j, long j2, long j3);

    private static native void accumulate_1(long j, long j2);

    private static native void adaptiveThreshold_0(long j, long j2, double d, int i, int i2, int i3, double d2);

    private static native void applyColorMap_0(long j, long j2, int i);

    private static native void applyColorMap_1(long j, long j2, long j3);

    private static native void approxPolyDP_0(long j, long j2, double d, boolean z);

    private static native double arcLength_0(long j, boolean z);

    private static native void arrowedLine_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2, int i3, double d9);

    private static native void arrowedLine_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2, int i3);

    private static native void arrowedLine_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2);

    private static native void arrowedLine_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i);

    private static native void arrowedLine_4(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8);

    private static native void bilateralFilter_0(long j, long j2, int i, double d, double d2, int i2);

    private static native void bilateralFilter_1(long j, long j2, int i, double d, double d2);

    private static native void blendLinear_0(long j, long j2, long j3, long j4, long j5);

    private static native void blur_0(long j, long j2, double d, double d2, double d3, double d4, int i);

    private static native void blur_1(long j, long j2, double d, double d2, double d3, double d4);

    private static native void blur_2(long j, long j2, double d, double d2);

    private static native double[] boundingRect_0(long j);

    private static native void boxFilter_0(long j, long j2, int i, double d, double d2, double d3, double d4, boolean z, int i2);

    private static native void boxFilter_1(long j, long j2, int i, double d, double d2, double d3, double d4, boolean z);

    private static native void boxFilter_2(long j, long j2, int i, double d, double d2, double d3, double d4);

    private static native void boxFilter_3(long j, long j2, int i, double d, double d2);

    private static native void boxPoints_0(double d, double d2, double d3, double d4, double d5, long j);

    private static native void calcBackProject_0(long j, long j2, long j3, long j4, long j5, double d);

    private static native void calcHist_0(long j, long j2, long j3, long j4, long j5, long j6, boolean z);

    private static native void calcHist_1(long j, long j2, long j3, long j4, long j5, long j6);

    private static native void circle_0(long j, double d, double d2, int i, double d3, double d4, double d5, double d6, int i2, int i3, int i4);

    private static native void circle_1(long j, double d, double d2, int i, double d3, double d4, double d5, double d6, int i2, int i3);

    private static native void circle_2(long j, double d, double d2, int i, double d3, double d4, double d5, double d6, int i2);

    private static native void circle_3(long j, double d, double d2, int i, double d3, double d4, double d5, double d6);

    private static native boolean clipLine_0(int i, int i2, int i3, int i4, double d, double d2, double[] dArr, double d3, double d4, double[] dArr2);

    private static native double compareHist_0(long j, long j2, int i);

    private static native int connectedComponentsWithAlgorithm_0(long j, long j2, int i, int i2, int i3);

    private static native int connectedComponentsWithStatsWithAlgorithm_0(long j, long j2, long j3, long j4, int i, int i2, int i3);

    private static native int connectedComponentsWithStats_0(long j, long j2, long j3, long j4, int i, int i2);

    private static native int connectedComponentsWithStats_1(long j, long j2, long j3, long j4, int i);

    private static native int connectedComponentsWithStats_2(long j, long j2, long j3, long j4);

    private static native int connectedComponents_0(long j, long j2, int i, int i2);

    private static native int connectedComponents_1(long j, long j2, int i);

    private static native int connectedComponents_2(long j, long j2);

    private static native double contourArea_0(long j, boolean z);

    private static native double contourArea_1(long j);

    private static native void convertMaps_0(long j, long j2, long j3, long j4, int i, boolean z);

    private static native void convertMaps_1(long j, long j2, long j3, long j4, int i);

    private static native void convexHull_0(long j, long j2, boolean z);

    private static native void convexHull_2(long j, long j2);

    private static native void convexityDefects_0(long j, long j2, long j3);

    private static native void cornerEigenValsAndVecs_0(long j, long j2, int i, int i2, int i3);

    private static native void cornerEigenValsAndVecs_1(long j, long j2, int i, int i2);

    private static native void cornerHarris_0(long j, long j2, int i, int i2, double d, int i3);

    private static native void cornerHarris_1(long j, long j2, int i, int i2, double d);

    private static native void cornerMinEigenVal_0(long j, long j2, int i, int i2, int i3);

    private static native void cornerMinEigenVal_1(long j, long j2, int i, int i2);

    private static native void cornerMinEigenVal_2(long j, long j2, int i);

    private static native void cornerSubPix_0(long j, long j2, double d, double d2, double d3, double d4, int i, int i2, double d5);

    private static native long createCLAHE_0(double d, double d2, double d3);

    private static native long createCLAHE_1(double d);

    private static native long createCLAHE_2();

    private static native long createGeneralizedHoughBallard_0();

    private static native long createGeneralizedHoughGuil_0();

    private static native void createHanningWindow_0(long j, double d, double d2, int i);

    private static native long createLineSegmentDetector_0(int i, double d, double d2, double d3, double d4, double d5, double d6, int i2);

    private static native long createLineSegmentDetector_1(int i, double d, double d2, double d3, double d4, double d5, double d6);

    private static native long createLineSegmentDetector_2(int i, double d, double d2, double d3, double d4, double d5);

    private static native long createLineSegmentDetector_3(int i, double d, double d2, double d3, double d4);

    private static native long createLineSegmentDetector_4(int i, double d, double d2, double d3);

    private static native long createLineSegmentDetector_5(int i, double d, double d2);

    private static native long createLineSegmentDetector_6(int i, double d);

    private static native long createLineSegmentDetector_7(int i);

    private static native long createLineSegmentDetector_8();

    private static native void cvtColorTwoPlane_0(long j, long j2, long j3, int i);

    private static native void cvtColor_0(long j, long j2, int i, int i2);

    private static native void cvtColor_1(long j, long j2, int i);

    private static native void demosaicing_0(long j, long j2, int i, int i2);

    private static native void demosaicing_1(long j, long j2, int i);

    private static native void dilate_0(long j, long j2, long j3, double d, double d2, int i, int i2, double d3, double d4, double d5, double d6);

    private static native void dilate_1(long j, long j2, long j3, double d, double d2, int i, int i2);

    private static native void dilate_2(long j, long j2, long j3, double d, double d2, int i);

    private static native void dilate_3(long j, long j2, long j3, double d, double d2);

    private static native void dilate_4(long j, long j2, long j3);

    private static native void distanceTransformWithLabels_0(long j, long j2, long j3, int i, int i2, int i3);

    private static native void distanceTransformWithLabels_1(long j, long j2, long j3, int i, int i2);

    private static native void distanceTransform_0(long j, long j2, int i, int i2, int i3);

    private static native void distanceTransform_1(long j, long j2, int i, int i2);

    private static native void divSpectrums_0(long j, long j2, long j3, int i, boolean z);

    private static native void divSpectrums_1(long j, long j2, long j3, int i);

    private static native void drawContours_0(long j, long j2, int i, double d, double d2, double d3, double d4, int i2, int i3, long j3, int i4, double d5, double d6);

    private static native void drawContours_1(long j, long j2, int i, double d, double d2, double d3, double d4, int i2, int i3, long j3, int i4);

    private static native void drawContours_2(long j, long j2, int i, double d, double d2, double d3, double d4, int i2, int i3, long j3);

    private static native void drawContours_3(long j, long j2, int i, double d, double d2, double d3, double d4, int i2, int i3);

    private static native void drawContours_4(long j, long j2, int i, double d, double d2, double d3, double d4, int i2);

    private static native void drawContours_5(long j, long j2, int i, double d, double d2, double d3, double d4);

    private static native void drawMarker_0(long j, double d, double d2, double d3, double d4, double d5, double d6, int i, int i2, int i3, int i4);

    private static native void drawMarker_1(long j, double d, double d2, double d3, double d4, double d5, double d6, int i, int i2, int i3);

    private static native void drawMarker_2(long j, double d, double d2, double d3, double d4, double d5, double d6, int i, int i2);

    private static native void drawMarker_3(long j, double d, double d2, double d3, double d4, double d5, double d6, int i);

    private static native void drawMarker_4(long j, double d, double d2, double d3, double d4, double d5, double d6);

    private static native void ellipse2Poly_0(double d, double d2, double d3, double d4, int i, int i2, int i3, int i4, long j);

    private static native void ellipse_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, double d11, int i, int i2, int i3);

    private static native void ellipse_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, double d11, int i, int i2);

    private static native void ellipse_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, double d11, int i);

    private static native void ellipse_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, double d11);

    private static native void ellipse_4(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, int i, int i2);

    private static native void ellipse_5(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, int i);

    private static native void ellipse_6(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9);

    private static native void equalizeHist_0(long j, long j2);

    private static native void erode_0(long j, long j2, long j3, double d, double d2, int i, int i2, double d3, double d4, double d5, double d6);

    private static native void erode_1(long j, long j2, long j3, double d, double d2, int i, int i2);

    private static native void erode_2(long j, long j2, long j3, double d, double d2, int i);

    private static native void erode_3(long j, long j2, long j3, double d, double d2);

    private static native void erode_4(long j, long j2, long j3);

    private static native void fillConvexPoly_0(long j, long j2, double d, double d2, double d3, double d4, int i, int i2);

    private static native void fillConvexPoly_1(long j, long j2, double d, double d2, double d3, double d4, int i);

    private static native void fillConvexPoly_2(long j, long j2, double d, double d2, double d3, double d4);

    private static native void fillPoly_0(long j, long j2, double d, double d2, double d3, double d4, int i, int i2, double d5, double d6);

    private static native void fillPoly_1(long j, long j2, double d, double d2, double d3, double d4, int i, int i2);

    private static native void fillPoly_2(long j, long j2, double d, double d2, double d3, double d4, int i);

    private static native void fillPoly_3(long j, long j2, double d, double d2, double d3, double d4);

    private static native void filter2D_0(long j, long j2, int i, long j3, double d, double d2, double d3, int i2);

    private static native void filter2D_1(long j, long j2, int i, long j3, double d, double d2, double d3);

    private static native void filter2D_2(long j, long j2, int i, long j3, double d, double d2);

    private static native void filter2D_3(long j, long j2, int i, long j3);

    private static native void findContours_0(long j, long j2, long j3, int i, int i2, double d, double d2);

    private static native void findContours_1(long j, long j2, long j3, int i, int i2);

    private static native double[] fitEllipseAMS_0(long j);

    private static native double[] fitEllipseDirect_0(long j);

    private static native double[] fitEllipse_0(long j);

    private static native void fitLine_0(long j, long j2, int i, double d, double d2, double d3);

    private static native int floodFill_0(long j, long j2, double d, double d2, double d3, double d4, double d5, double d6, double[] dArr, double d7, double d8, double d9, double d10, double d11, double d12, double d13, double d14, int i);

    private static native int floodFill_1(long j, long j2, double d, double d2, double d3, double d4, double d5, double d6, double[] dArr, double d7, double d8, double d9, double d10, double d11, double d12, double d13, double d14);

    private static native int floodFill_2(long j, long j2, double d, double d2, double d3, double d4, double d5, double d6, double[] dArr, double d7, double d8, double d9, double d10);

    private static native int floodFill_3(long j, long j2, double d, double d2, double d3, double d4, double d5, double d6, double[] dArr);

    private static native int floodFill_4(long j, long j2, double d, double d2, double d3, double d4, double d5, double d6);

    private static native long getAffineTransform_0(long j, long j2);

    private static native void getDerivKernels_0(long j, long j2, int i, int i2, int i3, boolean z, int i4);

    private static native void getDerivKernels_1(long j, long j2, int i, int i2, int i3, boolean z);

    private static native void getDerivKernels_2(long j, long j2, int i, int i2, int i3);

    private static native double getFontScaleFromHeight_0(int i, int i2, int i3);

    private static native double getFontScaleFromHeight_1(int i, int i2);

    private static native long getGaborKernel_0(double d, double d2, double d3, double d4, double d5, double d6, double d7, int i);

    private static native long getGaborKernel_1(double d, double d2, double d3, double d4, double d5, double d6, double d7);

    private static native long getGaborKernel_2(double d, double d2, double d3, double d4, double d5, double d6);

    private static native long getGaussianKernel_0(int i, double d, int i2);

    private static native long getGaussianKernel_1(int i, double d);

    private static native long getPerspectiveTransform_0(long j, long j2, int i);

    private static native long getPerspectiveTransform_1(long j, long j2);

    private static native void getRectSubPix_0(long j, double d, double d2, double d3, double d4, long j2, int i);

    private static native void getRectSubPix_1(long j, double d, double d2, double d3, double d4, long j2);

    private static native long getRotationMatrix2D_0(double d, double d2, double d3, double d4);

    private static native long getStructuringElement_0(int i, double d, double d2, double d3, double d4);

    private static native long getStructuringElement_1(int i, double d, double d2);

    private static native void goodFeaturesToTrackWithQuality_0(long j, long j2, int i, double d, double d2, long j3, long j4, int i2, int i3, boolean z, double d3);

    private static native void goodFeaturesToTrackWithQuality_1(long j, long j2, int i, double d, double d2, long j3, long j4, int i2, int i3, boolean z);

    private static native void goodFeaturesToTrackWithQuality_2(long j, long j2, int i, double d, double d2, long j3, long j4, int i2, int i3);

    private static native void goodFeaturesToTrackWithQuality_3(long j, long j2, int i, double d, double d2, long j3, long j4, int i2);

    private static native void goodFeaturesToTrackWithQuality_4(long j, long j2, int i, double d, double d2, long j3, long j4);

    private static native void goodFeaturesToTrack_0(long j, long j2, int i, double d, double d2, long j3, int i2, boolean z, double d3);

    private static native void goodFeaturesToTrack_1(long j, long j2, int i, double d, double d2, long j3, int i2, boolean z);

    private static native void goodFeaturesToTrack_2(long j, long j2, int i, double d, double d2, long j3, int i2);

    private static native void goodFeaturesToTrack_3(long j, long j2, int i, double d, double d2, long j3);

    private static native void goodFeaturesToTrack_4(long j, long j2, int i, double d, double d2);

    private static native void goodFeaturesToTrack_5(long j, long j2, int i, double d, double d2, long j3, int i2, int i3, boolean z, double d3);

    private static native void goodFeaturesToTrack_6(long j, long j2, int i, double d, double d2, long j3, int i2, int i3, boolean z);

    private static native void goodFeaturesToTrack_7(long j, long j2, int i, double d, double d2, long j3, int i2, int i3);

    private static native void grabCut_0(long j, long j2, int i, int i2, int i3, int i4, long j3, long j4, int i5, int i6);

    private static native void grabCut_1(long j, long j2, int i, int i2, int i3, int i4, long j3, long j4, int i5);

    private static native void integral2_0(long j, long j2, long j3, int i, int i2);

    private static native void integral2_1(long j, long j2, long j3, int i);

    private static native void integral2_2(long j, long j2, long j3);

    private static native void integral3_0(long j, long j2, long j3, long j4, int i, int i2);

    private static native void integral3_1(long j, long j2, long j3, long j4, int i);

    private static native void integral3_2(long j, long j2, long j3, long j4);

    private static native void integral_0(long j, long j2, int i);

    private static native void integral_1(long j, long j2);

    private static native float intersectConvexConvex_0(long j, long j2, long j3, boolean z);

    private static native float intersectConvexConvex_1(long j, long j2, long j3);

    private static native void invertAffineTransform_0(long j, long j2);

    private static native boolean isContourConvex_0(long j);

    private static native void line_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2, int i3);

    private static native void line_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2);

    private static native void line_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i);

    private static native void line_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8);

    private static native void linearPolar_0(long j, long j2, double d, double d2, double d3, int i);

    private static native void logPolar_0(long j, long j2, double d, double d2, double d3, int i);

    private static native double matchShapes_0(long j, long j2, int i, double d);

    private static native void matchTemplate_0(long j, long j2, long j3, int i, long j4);

    private static native void matchTemplate_1(long j, long j2, long j3, int i);

    private static native void medianBlur_0(long j, long j2, int i);

    private static native double[] minAreaRect_0(long j);

    private static native void minEnclosingCircle_0(long j, double[] dArr, double[] dArr2);

    private static native double minEnclosingTriangle_0(long j, long j2);

    private static native double[] moments_0(long j, boolean z);

    private static native double[] moments_1(long j);

    private static native void morphologyEx_0(long j, long j2, int i, long j3, double d, double d2, int i2, int i3, double d3, double d4, double d5, double d6);

    private static native void morphologyEx_1(long j, long j2, int i, long j3, double d, double d2, int i2, int i3);

    private static native void morphologyEx_2(long j, long j2, int i, long j3, double d, double d2, int i2);

    private static native void morphologyEx_3(long j, long j2, int i, long j3, double d, double d2);

    private static native void morphologyEx_4(long j, long j2, int i, long j3);

    private static native double[] n_getTextSize(String str, int i, double d, int i2, int[] iArr);

    private static native double[] phaseCorrelate_0(long j, long j2, long j3, double[] dArr);

    private static native double[] phaseCorrelate_1(long j, long j2, long j3);

    private static native double[] phaseCorrelate_2(long j, long j2);

    private static native double pointPolygonTest_0(long j, double d, double d2, boolean z);

    private static native void polylines_0(long j, long j2, boolean z, double d, double d2, double d3, double d4, int i, int i2, int i3);

    private static native void polylines_1(long j, long j2, boolean z, double d, double d2, double d3, double d4, int i, int i2);

    private static native void polylines_2(long j, long j2, boolean z, double d, double d2, double d3, double d4, int i);

    private static native void polylines_3(long j, long j2, boolean z, double d, double d2, double d3, double d4);

    private static native void preCornerDetect_0(long j, long j2, int i, int i2);

    private static native void preCornerDetect_1(long j, long j2, int i);

    private static native void putText_0(long j, String str, double d, double d2, int i, double d3, double d4, double d5, double d6, double d7, int i2, int i3, boolean z);

    private static native void putText_1(long j, String str, double d, double d2, int i, double d3, double d4, double d5, double d6, double d7, int i2, int i3);

    private static native void putText_2(long j, String str, double d, double d2, int i, double d3, double d4, double d5, double d6, double d7, int i2);

    private static native void putText_3(long j, String str, double d, double d2, int i, double d3, double d4, double d5, double d6, double d7);

    private static native void pyrDown_0(long j, long j2, double d, double d2, int i);

    private static native void pyrDown_1(long j, long j2, double d, double d2);

    private static native void pyrDown_2(long j, long j2);

    private static native void pyrMeanShiftFiltering_0(long j, long j2, double d, double d2, int i, int i2, int i3, double d3);

    private static native void pyrMeanShiftFiltering_1(long j, long j2, double d, double d2, int i);

    private static native void pyrMeanShiftFiltering_2(long j, long j2, double d, double d2);

    private static native void pyrUp_0(long j, long j2, double d, double d2, int i);

    private static native void pyrUp_1(long j, long j2, double d, double d2);

    private static native void pyrUp_2(long j, long j2);

    private static native void rectangle_0(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2, int i3);

    private static native void rectangle_1(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i, int i2);

    private static native void rectangle_2(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, int i);

    private static native void rectangle_3(long j, double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8);

    private static native void rectangle_4(long j, int i, int i2, int i3, int i4, double d, double d2, double d3, double d4, int i5, int i6, int i7);

    private static native void rectangle_5(long j, int i, int i2, int i3, int i4, double d, double d2, double d3, double d4, int i5, int i6);

    private static native void rectangle_6(long j, int i, int i2, int i3, int i4, double d, double d2, double d3, double d4, int i5);

    private static native void rectangle_7(long j, int i, int i2, int i3, int i4, double d, double d2, double d3, double d4);

    private static native void remap_0(long j, long j2, long j3, long j4, int i, int i2, double d, double d2, double d3, double d4);

    private static native void remap_1(long j, long j2, long j3, long j4, int i, int i2);

    private static native void remap_2(long j, long j2, long j3, long j4, int i);

    private static native void resize_0(long j, long j2, double d, double d2, double d3, double d4, int i);

    private static native void resize_1(long j, long j2, double d, double d2, double d3, double d4);

    private static native void resize_2(long j, long j2, double d, double d2, double d3);

    private static native void resize_3(long j, long j2, double d, double d2);

    private static native int rotatedRectangleIntersection_0(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, long j);

    private static native void sepFilter2D_0(long j, long j2, int i, long j3, long j4, double d, double d2, double d3, int i2);

    private static native void sepFilter2D_1(long j, long j2, int i, long j3, long j4, double d, double d2, double d3);

    private static native void sepFilter2D_2(long j, long j2, int i, long j3, long j4, double d, double d2);

    private static native void sepFilter2D_3(long j, long j2, int i, long j3, long j4);

    private static native void spatialGradient_0(long j, long j2, long j3, int i, int i2);

    private static native void spatialGradient_1(long j, long j2, long j3, int i);

    private static native void spatialGradient_2(long j, long j2, long j3);

    private static native void sqrBoxFilter_0(long j, long j2, int i, double d, double d2, double d3, double d4, boolean z, int i2);

    private static native void sqrBoxFilter_1(long j, long j2, int i, double d, double d2, double d3, double d4, boolean z);

    private static native void sqrBoxFilter_2(long j, long j2, int i, double d, double d2, double d3, double d4);

    private static native void sqrBoxFilter_3(long j, long j2, int i, double d, double d2);

    private static native void stackBlur_0(long j, long j2, double d, double d2);

    private static native double threshold_0(long j, long j2, double d, double d2, int i);

    private static native void warpAffine_0(long j, long j2, long j3, double d, double d2, int i, int i2, double d3, double d4, double d5, double d6);

    private static native void warpAffine_1(long j, long j2, long j3, double d, double d2, int i, int i2);

    private static native void warpAffine_2(long j, long j2, long j3, double d, double d2, int i);

    private static native void warpAffine_3(long j, long j2, long j3, double d, double d2);

    private static native void warpPerspective_0(long j, long j2, long j3, double d, double d2, int i, int i2, double d3, double d4, double d5, double d6);

    private static native void warpPerspective_1(long j, long j2, long j3, double d, double d2, int i, int i2);

    private static native void warpPerspective_2(long j, long j2, long j3, double d, double d2, int i);

    private static native void warpPerspective_3(long j, long j2, long j3, double d, double d2);

    private static native void warpPolar_0(long j, long j2, double d, double d2, double d3, double d4, double d5, int i);

    private static native void watershed_0(long j, long j2);

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2, double d3, double d4, double d5, double d6, int i2) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_0(i, d, d2, d3, d4, d5, d6, i2));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2, double d3, double d4, double d5, double d6) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_1(i, d, d2, d3, d4, d5, d6));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2, double d3, double d4, double d5) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_2(i, d, d2, d3, d4, d5));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2, double d3, double d4) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_3(i, d, d2, d3, d4));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2, double d3) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_4(i, d, d2, d3));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d, double d2) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_5(i, d, d2));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i, double d) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_6(i, d));
    }

    public static LineSegmentDetector createLineSegmentDetector(int i) {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_7(i));
    }

    public static LineSegmentDetector createLineSegmentDetector() {
        return LineSegmentDetector.__fromPtr__(createLineSegmentDetector_8());
    }

    public static Mat getGaussianKernel(int i, double d, int i2) {
        return new Mat(getGaussianKernel_0(i, d, i2));
    }

    public static Mat getGaussianKernel(int i, double d) {
        return new Mat(getGaussianKernel_1(i, d));
    }

    public static void getDerivKernels(Mat mat, Mat mat2, int i, int i2, int i3, boolean z, int i4) {
        getDerivKernels_0(mat.nativeObj, mat2.nativeObj, i, i2, i3, z, i4);
    }

    public static void getDerivKernels(Mat mat, Mat mat2, int i, int i2, int i3, boolean z) {
        getDerivKernels_1(mat.nativeObj, mat2.nativeObj, i, i2, i3, z);
    }

    public static void getDerivKernels(Mat mat, Mat mat2, int i, int i2, int i3) {
        getDerivKernels_2(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static Mat getGaborKernel(Size size, double d, double d2, double d3, double d4, double d5, int i) {
        return new Mat(getGaborKernel_0(size.width, size.height, d, d2, d3, d4, d5, i));
    }

    public static Mat getGaborKernel(Size size, double d, double d2, double d3, double d4, double d5) {
        return new Mat(getGaborKernel_1(size.width, size.height, d, d2, d3, d4, d5));
    }

    public static Mat getGaborKernel(Size size, double d, double d2, double d3, double d4) {
        return new Mat(getGaborKernel_2(size.width, size.height, d, d2, d3, d4));
    }

    public static Mat getStructuringElement(int i, Size size, Point point) {
        return new Mat(getStructuringElement_0(i, size.width, size.height, point.x, point.y));
    }

    public static Mat getStructuringElement(int i, Size size) {
        return new Mat(getStructuringElement_1(i, size.width, size.height));
    }

    public static void medianBlur(Mat mat, Mat mat2, int i) {
        medianBlur_0(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void GaussianBlur(Mat mat, Mat mat2, Size size, double d, double d2, int i) {
        GaussianBlur_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, d, d2, i);
    }

    public static void GaussianBlur(Mat mat, Mat mat2, Size size, double d, double d2) {
        GaussianBlur_1(mat.nativeObj, mat2.nativeObj, size.width, size.height, d, d2);
    }

    public static void GaussianBlur(Mat mat, Mat mat2, Size size, double d) {
        GaussianBlur_2(mat.nativeObj, mat2.nativeObj, size.width, size.height, d);
    }

    public static void bilateralFilter(Mat mat, Mat mat2, int i, double d, double d2, int i2) {
        bilateralFilter_0(mat.nativeObj, mat2.nativeObj, i, d, d2, i2);
    }

    public static void bilateralFilter(Mat mat, Mat mat2, int i, double d, double d2) {
        bilateralFilter_1(mat.nativeObj, mat2.nativeObj, i, d, d2);
    }

    public static void boxFilter(Mat mat, Mat mat2, int i, Size size, Point point, boolean z, int i2) {
        boxFilter_0(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y, z, i2);
    }

    public static void boxFilter(Mat mat, Mat mat2, int i, Size size, Point point, boolean z) {
        boxFilter_1(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y, z);
    }

    public static void boxFilter(Mat mat, Mat mat2, int i, Size size, Point point) {
        boxFilter_2(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y);
    }

    public static void boxFilter(Mat mat, Mat mat2, int i, Size size) {
        boxFilter_3(mat.nativeObj, mat2.nativeObj, i, size.width, size.height);
    }

    public static void sqrBoxFilter(Mat mat, Mat mat2, int i, Size size, Point point, boolean z, int i2) {
        sqrBoxFilter_0(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y, z, i2);
    }

    public static void sqrBoxFilter(Mat mat, Mat mat2, int i, Size size, Point point, boolean z) {
        sqrBoxFilter_1(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y, z);
    }

    public static void sqrBoxFilter(Mat mat, Mat mat2, int i, Size size, Point point) {
        sqrBoxFilter_2(mat.nativeObj, mat2.nativeObj, i, size.width, size.height, point.x, point.y);
    }

    public static void sqrBoxFilter(Mat mat, Mat mat2, int i, Size size) {
        sqrBoxFilter_3(mat.nativeObj, mat2.nativeObj, i, size.width, size.height);
    }

    public static void blur(Mat mat, Mat mat2, Size size, Point point, int i) {
        blur_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, point.x, point.y, i);
    }

    public static void blur(Mat mat, Mat mat2, Size size, Point point) {
        blur_1(mat.nativeObj, mat2.nativeObj, size.width, size.height, point.x, point.y);
    }

    public static void blur(Mat mat, Mat mat2, Size size) {
        blur_2(mat.nativeObj, mat2.nativeObj, size.width, size.height);
    }

    public static void stackBlur(Mat mat, Mat mat2, Size size) {
        stackBlur_0(mat.nativeObj, mat2.nativeObj, size.width, size.height);
    }

    public static void filter2D(Mat mat, Mat mat2, int i, Mat mat3, Point point, double d, int i2) {
        filter2D_0(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y, d, i2);
    }

    public static void filter2D(Mat mat, Mat mat2, int i, Mat mat3, Point point, double d) {
        filter2D_1(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y, d);
    }

    public static void filter2D(Mat mat, Mat mat2, int i, Mat mat3, Point point) {
        filter2D_2(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y);
    }

    public static void filter2D(Mat mat, Mat mat2, int i, Mat mat3) {
        filter2D_3(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj);
    }

    public static void sepFilter2D(Mat mat, Mat mat2, int i, Mat mat3, Mat mat4, Point point, double d, int i2) {
        sepFilter2D_0(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, mat4.nativeObj, point.x, point.y, d, i2);
    }

    public static void sepFilter2D(Mat mat, Mat mat2, int i, Mat mat3, Mat mat4, Point point, double d) {
        sepFilter2D_1(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, mat4.nativeObj, point.x, point.y, d);
    }

    public static void sepFilter2D(Mat mat, Mat mat2, int i, Mat mat3, Mat mat4, Point point) {
        sepFilter2D_2(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, mat4.nativeObj, point.x, point.y);
    }

    public static void sepFilter2D(Mat mat, Mat mat2, int i, Mat mat3, Mat mat4) {
        sepFilter2D_3(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, mat4.nativeObj);
    }

    public static void Sobel(Mat mat, Mat mat2, int i, int i2, int i3, int i4, double d, double d2, int i5) {
        Sobel_0(mat.nativeObj, mat2.nativeObj, i, i2, i3, i4, d, d2, i5);
    }

    public static void Sobel(Mat mat, Mat mat2, int i, int i2, int i3, int i4, double d, double d2) {
        Sobel_1(mat.nativeObj, mat2.nativeObj, i, i2, i3, i4, d, d2);
    }

    public static void Sobel(Mat mat, Mat mat2, int i, int i2, int i3, int i4, double d) {
        Sobel_2(mat.nativeObj, mat2.nativeObj, i, i2, i3, i4, d);
    }

    public static void Sobel(Mat mat, Mat mat2, int i, int i2, int i3, int i4) {
        Sobel_3(mat.nativeObj, mat2.nativeObj, i, i2, i3, i4);
    }

    public static void Sobel(Mat mat, Mat mat2, int i, int i2, int i3) {
        Sobel_4(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static void spatialGradient(Mat mat, Mat mat2, Mat mat3, int i, int i2) {
        spatialGradient_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, i2);
    }

    public static void spatialGradient(Mat mat, Mat mat2, Mat mat3, int i) {
        spatialGradient_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
    }

    public static void spatialGradient(Mat mat, Mat mat2, Mat mat3) {
        spatialGradient_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void Scharr(Mat mat, Mat mat2, int i, int i2, int i3, double d, double d2, int i4) {
        Scharr_0(mat.nativeObj, mat2.nativeObj, i, i2, i3, d, d2, i4);
    }

    public static void Scharr(Mat mat, Mat mat2, int i, int i2, int i3, double d, double d2) {
        Scharr_1(mat.nativeObj, mat2.nativeObj, i, i2, i3, d, d2);
    }

    public static void Scharr(Mat mat, Mat mat2, int i, int i2, int i3, double d) {
        Scharr_2(mat.nativeObj, mat2.nativeObj, i, i2, i3, d);
    }

    public static void Scharr(Mat mat, Mat mat2, int i, int i2, int i3) {
        Scharr_3(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static void Laplacian(Mat mat, Mat mat2, int i, int i2, double d, double d2, int i3) {
        Laplacian_0(mat.nativeObj, mat2.nativeObj, i, i2, d, d2, i3);
    }

    public static void Laplacian(Mat mat, Mat mat2, int i, int i2, double d, double d2) {
        Laplacian_1(mat.nativeObj, mat2.nativeObj, i, i2, d, d2);
    }

    public static void Laplacian(Mat mat, Mat mat2, int i, int i2, double d) {
        Laplacian_2(mat.nativeObj, mat2.nativeObj, i, i2, d);
    }

    public static void Laplacian(Mat mat, Mat mat2, int i, int i2) {
        Laplacian_3(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void Laplacian(Mat mat, Mat mat2, int i) {
        Laplacian_4(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void Canny(Mat mat, Mat mat2, double d, double d2, int i, boolean z) {
        Canny_0(mat.nativeObj, mat2.nativeObj, d, d2, i, z);
    }

    public static void Canny(Mat mat, Mat mat2, double d, double d2, int i) {
        Canny_1(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static void Canny(Mat mat, Mat mat2, double d, double d2) {
        Canny_2(mat.nativeObj, mat2.nativeObj, d, d2);
    }

    public static void Canny(Mat mat, Mat mat2, Mat mat3, double d, double d2, boolean z) {
        Canny_3(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, d, d2, z);
    }

    public static void Canny(Mat mat, Mat mat2, Mat mat3, double d, double d2) {
        Canny_4(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, d, d2);
    }

    public static void cornerMinEigenVal(Mat mat, Mat mat2, int i, int i2, int i3) {
        cornerMinEigenVal_0(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static void cornerMinEigenVal(Mat mat, Mat mat2, int i, int i2) {
        cornerMinEigenVal_1(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void cornerMinEigenVal(Mat mat, Mat mat2, int i) {
        cornerMinEigenVal_2(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void cornerHarris(Mat mat, Mat mat2, int i, int i2, double d, int i3) {
        cornerHarris_0(mat.nativeObj, mat2.nativeObj, i, i2, d, i3);
    }

    public static void cornerHarris(Mat mat, Mat mat2, int i, int i2, double d) {
        cornerHarris_1(mat.nativeObj, mat2.nativeObj, i, i2, d);
    }

    public static void cornerEigenValsAndVecs(Mat mat, Mat mat2, int i, int i2, int i3) {
        cornerEigenValsAndVecs_0(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static void cornerEigenValsAndVecs(Mat mat, Mat mat2, int i, int i2) {
        cornerEigenValsAndVecs_1(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void preCornerDetect(Mat mat, Mat mat2, int i, int i2) {
        preCornerDetect_0(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void preCornerDetect(Mat mat, Mat mat2, int i) {
        preCornerDetect_1(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void cornerSubPix(Mat mat, Mat mat2, Size size, Size size2, TermCriteria termCriteria) {
        cornerSubPix_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, size2.width, size2.height, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2, boolean z, double d3) {
        goodFeaturesToTrack_0(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2, z, d3);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2, boolean z) {
        goodFeaturesToTrack_1(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2, z);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2) {
        goodFeaturesToTrack_2(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2) {
        goodFeaturesToTrack_3(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2) {
        goodFeaturesToTrack_4(mat.nativeObj, matOfPoint.nativeObj, i, d, d2);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2, int i3, boolean z, double d3) {
        goodFeaturesToTrack_5(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2, i3, z, d3);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2, int i3, boolean z) {
        goodFeaturesToTrack_6(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2, i3, z);
    }

    public static void goodFeaturesToTrack(Mat mat, MatOfPoint matOfPoint, int i, double d, double d2, Mat mat2, int i2, int i3) {
        goodFeaturesToTrack_7(mat.nativeObj, matOfPoint.nativeObj, i, d, d2, mat2.nativeObj, i2, i3);
    }

    public static void goodFeaturesToTrackWithQuality(Mat mat, Mat mat2, int i, double d, double d2, Mat mat3, Mat mat4, int i2, int i3, boolean z, double d3) {
        goodFeaturesToTrackWithQuality_0(mat.nativeObj, mat2.nativeObj, i, d, d2, mat3.nativeObj, mat4.nativeObj, i2, i3, z, d3);
    }

    public static void goodFeaturesToTrackWithQuality(Mat mat, Mat mat2, int i, double d, double d2, Mat mat3, Mat mat4, int i2, int i3, boolean z) {
        goodFeaturesToTrackWithQuality_1(mat.nativeObj, mat2.nativeObj, i, d, d2, mat3.nativeObj, mat4.nativeObj, i2, i3, z);
    }

    public static void goodFeaturesToTrackWithQuality(Mat mat, Mat mat2, int i, double d, double d2, Mat mat3, Mat mat4, int i2, int i3) {
        goodFeaturesToTrackWithQuality_2(mat.nativeObj, mat2.nativeObj, i, d, d2, mat3.nativeObj, mat4.nativeObj, i2, i3);
    }

    public static void goodFeaturesToTrackWithQuality(Mat mat, Mat mat2, int i, double d, double d2, Mat mat3, Mat mat4, int i2) {
        goodFeaturesToTrackWithQuality_3(mat.nativeObj, mat2.nativeObj, i, d, d2, mat3.nativeObj, mat4.nativeObj, i2);
    }

    public static void goodFeaturesToTrackWithQuality(Mat mat, Mat mat2, int i, double d, double d2, Mat mat3, Mat mat4) {
        goodFeaturesToTrackWithQuality_4(mat.nativeObj, mat2.nativeObj, i, d, d2, mat3.nativeObj, mat4.nativeObj);
    }

    public static void HoughLines(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4, double d5, double d6) {
        HoughLines_0(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4, d5, d6);
    }

    public static void HoughLines(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4, double d5) {
        HoughLines_1(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4, d5);
    }

    public static void HoughLines(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4) {
        HoughLines_2(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4);
    }

    public static void HoughLines(Mat mat, Mat mat2, double d, double d2, int i, double d3) {
        HoughLines_3(mat.nativeObj, mat2.nativeObj, d, d2, i, d3);
    }

    public static void HoughLines(Mat mat, Mat mat2, double d, double d2, int i) {
        HoughLines_4(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static void HoughLinesP(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4) {
        HoughLinesP_0(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4);
    }

    public static void HoughLinesP(Mat mat, Mat mat2, double d, double d2, int i, double d3) {
        HoughLinesP_1(mat.nativeObj, mat2.nativeObj, d, d2, i, d3);
    }

    public static void HoughLinesP(Mat mat, Mat mat2, double d, double d2, int i) {
        HoughLinesP_2(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static void HoughLinesPointSet(Mat mat, Mat mat2, int i, int i2, double d, double d2, double d3, double d4, double d5, double d6) {
        HoughLinesPointSet_0(mat.nativeObj, mat2.nativeObj, i, i2, d, d2, d3, d4, d5, d6);
    }

    public static void HoughCircles(Mat mat, Mat mat2, int i, double d, double d2, double d3, double d4, int i2, int i3) {
        HoughCircles_0(mat.nativeObj, mat2.nativeObj, i, d, d2, d3, d4, i2, i3);
    }

    public static void HoughCircles(Mat mat, Mat mat2, int i, double d, double d2, double d3, double d4, int i2) {
        HoughCircles_1(mat.nativeObj, mat2.nativeObj, i, d, d2, d3, d4, i2);
    }

    public static void HoughCircles(Mat mat, Mat mat2, int i, double d, double d2, double d3, double d4) {
        HoughCircles_2(mat.nativeObj, mat2.nativeObj, i, d, d2, d3, d4);
    }

    public static void HoughCircles(Mat mat, Mat mat2, int i, double d, double d2, double d3) {
        HoughCircles_3(mat.nativeObj, mat2.nativeObj, i, d, d2, d3);
    }

    public static void HoughCircles(Mat mat, Mat mat2, int i, double d, double d2) {
        HoughCircles_4(mat.nativeObj, mat2.nativeObj, i, d, d2);
    }

    public static void erode(Mat mat, Mat mat2, Mat mat3, Point point, int i, int i2, Scalar scalar) {
        erode_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i, i2, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void erode(Mat mat, Mat mat2, Mat mat3, Point point, int i, int i2) {
        erode_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i, i2);
    }

    public static void erode(Mat mat, Mat mat2, Mat mat3, Point point, int i) {
        erode_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i);
    }

    public static void erode(Mat mat, Mat mat2, Mat mat3, Point point) {
        erode_3(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y);
    }

    public static void erode(Mat mat, Mat mat2, Mat mat3) {
        erode_4(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void dilate(Mat mat, Mat mat2, Mat mat3, Point point, int i, int i2, Scalar scalar) {
        dilate_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i, i2, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void dilate(Mat mat, Mat mat2, Mat mat3, Point point, int i, int i2) {
        dilate_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i, i2);
    }

    public static void dilate(Mat mat, Mat mat2, Mat mat3, Point point, int i) {
        dilate_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y, i);
    }

    public static void dilate(Mat mat, Mat mat2, Mat mat3, Point point) {
        dilate_3(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, point.x, point.y);
    }

    public static void dilate(Mat mat, Mat mat2, Mat mat3) {
        dilate_4(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void morphologyEx(Mat mat, Mat mat2, int i, Mat mat3, Point point, int i2, int i3, Scalar scalar) {
        morphologyEx_0(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y, i2, i3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void morphologyEx(Mat mat, Mat mat2, int i, Mat mat3, Point point, int i2, int i3) {
        morphologyEx_1(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y, i2, i3);
    }

    public static void morphologyEx(Mat mat, Mat mat2, int i, Mat mat3, Point point, int i2) {
        morphologyEx_2(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y, i2);
    }

    public static void morphologyEx(Mat mat, Mat mat2, int i, Mat mat3, Point point) {
        morphologyEx_3(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, point.x, point.y);
    }

    public static void morphologyEx(Mat mat, Mat mat2, int i, Mat mat3) {
        morphologyEx_4(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj);
    }

    public static void resize(Mat mat, Mat mat2, Size size, double d, double d2, int i) {
        resize_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, d, d2, i);
    }

    public static void resize(Mat mat, Mat mat2, Size size, double d, double d2) {
        resize_1(mat.nativeObj, mat2.nativeObj, size.width, size.height, d, d2);
    }

    public static void resize(Mat mat, Mat mat2, Size size, double d) {
        resize_2(mat.nativeObj, mat2.nativeObj, size.width, size.height, d);
    }

    public static void resize(Mat mat, Mat mat2, Size size) {
        resize_3(mat.nativeObj, mat2.nativeObj, size.width, size.height);
    }

    public static void warpAffine(Mat mat, Mat mat2, Mat mat3, Size size, int i, int i2, Scalar scalar) {
        warpAffine_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i, i2, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void warpAffine(Mat mat, Mat mat2, Mat mat3, Size size, int i, int i2) {
        warpAffine_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i, i2);
    }

    public static void warpAffine(Mat mat, Mat mat2, Mat mat3, Size size, int i) {
        warpAffine_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i);
    }

    public static void warpAffine(Mat mat, Mat mat2, Mat mat3, Size size) {
        warpAffine_3(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height);
    }

    public static void warpPerspective(Mat mat, Mat mat2, Mat mat3, Size size, int i, int i2, Scalar scalar) {
        warpPerspective_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i, i2, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void warpPerspective(Mat mat, Mat mat2, Mat mat3, Size size, int i, int i2) {
        warpPerspective_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i, i2);
    }

    public static void warpPerspective(Mat mat, Mat mat2, Mat mat3, Size size, int i) {
        warpPerspective_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height, i);
    }

    public static void warpPerspective(Mat mat, Mat mat2, Mat mat3, Size size) {
        warpPerspective_3(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, size.width, size.height);
    }

    public static void remap(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, int i2, Scalar scalar) {
        remap_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, i2, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void remap(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, int i2) {
        remap_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, i2);
    }

    public static void remap(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i) {
        remap_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i);
    }

    public static void convertMaps(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, boolean z) {
        convertMaps_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, z);
    }

    public static void convertMaps(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i) {
        convertMaps_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i);
    }

    public static Mat getRotationMatrix2D(Point point, double d, double d2) {
        return new Mat(getRotationMatrix2D_0(point.x, point.y, d, d2));
    }

    public static void invertAffineTransform(Mat mat, Mat mat2) {
        invertAffineTransform_0(mat.nativeObj, mat2.nativeObj);
    }

    public static Mat getPerspectiveTransform(Mat mat, Mat mat2, int i) {
        return new Mat(getPerspectiveTransform_0(mat.nativeObj, mat2.nativeObj, i));
    }

    public static Mat getPerspectiveTransform(Mat mat, Mat mat2) {
        return new Mat(getPerspectiveTransform_1(mat.nativeObj, mat2.nativeObj));
    }

    public static Mat getAffineTransform(MatOfPoint2f matOfPoint2f, MatOfPoint2f matOfPoint2f2) {
        return new Mat(getAffineTransform_0(matOfPoint2f.nativeObj, matOfPoint2f2.nativeObj));
    }

    public static void getRectSubPix(Mat mat, Size size, Point point, Mat mat2, int i) {
        getRectSubPix_0(mat.nativeObj, size.width, size.height, point.x, point.y, mat2.nativeObj, i);
    }

    public static void getRectSubPix(Mat mat, Size size, Point point, Mat mat2) {
        getRectSubPix_1(mat.nativeObj, size.width, size.height, point.x, point.y, mat2.nativeObj);
    }

    @Deprecated
    public static void logPolar(Mat mat, Mat mat2, Point point, double d, int i) {
        logPolar_0(mat.nativeObj, mat2.nativeObj, point.x, point.y, d, i);
    }

    @Deprecated
    public static void linearPolar(Mat mat, Mat mat2, Point point, double d, int i) {
        linearPolar_0(mat.nativeObj, mat2.nativeObj, point.x, point.y, d, i);
    }

    public static void warpPolar(Mat mat, Mat mat2, Size size, Point point, double d, int i) {
        warpPolar_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, point.x, point.y, d, i);
    }

    public static void integral3(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, int i2) {
        integral3_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, i2);
    }

    public static void integral3(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i) {
        integral3_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i);
    }

    public static void integral3(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        integral3_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public static void integral(Mat mat, Mat mat2, int i) {
        integral_0(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void integral(Mat mat, Mat mat2) {
        integral_1(mat.nativeObj, mat2.nativeObj);
    }

    public static void integral2(Mat mat, Mat mat2, Mat mat3, int i, int i2) {
        integral2_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, i2);
    }

    public static void integral2(Mat mat, Mat mat2, Mat mat3, int i) {
        integral2_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
    }

    public static void integral2(Mat mat, Mat mat2, Mat mat3) {
        integral2_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void accumulate(Mat mat, Mat mat2, Mat mat3) {
        accumulate_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void accumulate(Mat mat, Mat mat2) {
        accumulate_1(mat.nativeObj, mat2.nativeObj);
    }

    public static void accumulateSquare(Mat mat, Mat mat2, Mat mat3) {
        accumulateSquare_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void accumulateSquare(Mat mat, Mat mat2) {
        accumulateSquare_1(mat.nativeObj, mat2.nativeObj);
    }

    public static void accumulateProduct(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        accumulateProduct_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public static void accumulateProduct(Mat mat, Mat mat2, Mat mat3) {
        accumulateProduct_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void accumulateWeighted(Mat mat, Mat mat2, double d, Mat mat3) {
        accumulateWeighted_0(mat.nativeObj, mat2.nativeObj, d, mat3.nativeObj);
    }

    public static void accumulateWeighted(Mat mat, Mat mat2, double d) {
        accumulateWeighted_1(mat.nativeObj, mat2.nativeObj, d);
    }

    public static Point phaseCorrelate(Mat mat, Mat mat2, Mat mat3, double[] dArr) {
        double[] dArr2 = new double[1];
        Point point = new Point(phaseCorrelate_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, dArr2));
        if (dArr != null) {
            dArr[0] = dArr2[0];
        }
        return point;
    }

    public static Point phaseCorrelate(Mat mat, Mat mat2, Mat mat3) {
        return new Point(phaseCorrelate_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj));
    }

    public static Point phaseCorrelate(Mat mat, Mat mat2) {
        return new Point(phaseCorrelate_2(mat.nativeObj, mat2.nativeObj));
    }

    public static void createHanningWindow(Mat mat, Size size, int i) {
        createHanningWindow_0(mat.nativeObj, size.width, size.height, i);
    }

    public static void divSpectrums(Mat mat, Mat mat2, Mat mat3, int i, boolean z) {
        divSpectrums_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, z);
    }

    public static void divSpectrums(Mat mat, Mat mat2, Mat mat3, int i) {
        divSpectrums_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
    }

    public static double threshold(Mat mat, Mat mat2, double d, double d2, int i) {
        return threshold_0(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static void adaptiveThreshold(Mat mat, Mat mat2, double d, int i, int i2, int i3, double d2) {
        adaptiveThreshold_0(mat.nativeObj, mat2.nativeObj, d, i, i2, i3, d2);
    }

    public static void pyrDown(Mat mat, Mat mat2, Size size, int i) {
        pyrDown_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, i);
    }

    public static void pyrDown(Mat mat, Mat mat2, Size size) {
        pyrDown_1(mat.nativeObj, mat2.nativeObj, size.width, size.height);
    }

    public static void pyrDown(Mat mat, Mat mat2) {
        pyrDown_2(mat.nativeObj, mat2.nativeObj);
    }

    public static void pyrUp(Mat mat, Mat mat2, Size size, int i) {
        pyrUp_0(mat.nativeObj, mat2.nativeObj, size.width, size.height, i);
    }

    public static void pyrUp(Mat mat, Mat mat2, Size size) {
        pyrUp_1(mat.nativeObj, mat2.nativeObj, size.width, size.height);
    }

    public static void pyrUp(Mat mat, Mat mat2) {
        pyrUp_2(mat.nativeObj, mat2.nativeObj);
    }

    public static void calcHist(List<Mat> list, MatOfInt matOfInt, Mat mat, Mat mat2, MatOfInt matOfInt2, MatOfFloat matOfFloat, boolean z) {
        calcHist_0(Converters.vector_Mat_to_Mat(list).nativeObj, matOfInt.nativeObj, mat.nativeObj, mat2.nativeObj, matOfInt2.nativeObj, matOfFloat.nativeObj, z);
    }

    public static void calcHist(List<Mat> list, MatOfInt matOfInt, Mat mat, Mat mat2, MatOfInt matOfInt2, MatOfFloat matOfFloat) {
        calcHist_1(Converters.vector_Mat_to_Mat(list).nativeObj, matOfInt.nativeObj, mat.nativeObj, mat2.nativeObj, matOfInt2.nativeObj, matOfFloat.nativeObj);
    }

    public static void calcBackProject(List<Mat> list, MatOfInt matOfInt, Mat mat, Mat mat2, MatOfFloat matOfFloat, double d) {
        calcBackProject_0(Converters.vector_Mat_to_Mat(list).nativeObj, matOfInt.nativeObj, mat.nativeObj, mat2.nativeObj, matOfFloat.nativeObj, d);
    }

    public static double compareHist(Mat mat, Mat mat2, int i) {
        return compareHist_0(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void equalizeHist(Mat mat, Mat mat2) {
        equalizeHist_0(mat.nativeObj, mat2.nativeObj);
    }

    public static CLAHE createCLAHE(double d, Size size) {
        return CLAHE.__fromPtr__(createCLAHE_0(d, size.width, size.height));
    }

    public static CLAHE createCLAHE(double d) {
        return CLAHE.__fromPtr__(createCLAHE_1(d));
    }

    public static CLAHE createCLAHE() {
        return CLAHE.__fromPtr__(createCLAHE_2());
    }

    public static float EMD(Mat mat, Mat mat2, int i, Mat mat3, Mat mat4) {
        return EMD_0(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj, mat4.nativeObj);
    }

    public static float EMD(Mat mat, Mat mat2, int i, Mat mat3) {
        return EMD_1(mat.nativeObj, mat2.nativeObj, i, mat3.nativeObj);
    }

    public static float EMD(Mat mat, Mat mat2, int i) {
        return EMD_3(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void watershed(Mat mat, Mat mat2) {
        watershed_0(mat.nativeObj, mat2.nativeObj);
    }

    public static void pyrMeanShiftFiltering(Mat mat, Mat mat2, double d, double d2, int i, TermCriteria termCriteria) {
        pyrMeanShiftFiltering_0(mat.nativeObj, mat2.nativeObj, d, d2, i, termCriteria.type, termCriteria.maxCount, termCriteria.epsilon);
    }

    public static void pyrMeanShiftFiltering(Mat mat, Mat mat2, double d, double d2, int i) {
        pyrMeanShiftFiltering_1(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static void pyrMeanShiftFiltering(Mat mat, Mat mat2, double d, double d2) {
        pyrMeanShiftFiltering_2(mat.nativeObj, mat2.nativeObj, d, d2);
    }

    public static void grabCut(Mat mat, Mat mat2, Rect rect, Mat mat3, Mat mat4, int i, int i2) {
        grabCut_0(mat.nativeObj, mat2.nativeObj, rect.x, rect.y, rect.width, rect.height, mat3.nativeObj, mat4.nativeObj, i, i2);
    }

    public static void grabCut(Mat mat, Mat mat2, Rect rect, Mat mat3, Mat mat4, int i) {
        grabCut_1(mat.nativeObj, mat2.nativeObj, rect.x, rect.y, rect.width, rect.height, mat3.nativeObj, mat4.nativeObj, i);
    }

    public static void distanceTransformWithLabels(Mat mat, Mat mat2, Mat mat3, int i, int i2, int i3) {
        distanceTransformWithLabels_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, i2, i3);
    }

    public static void distanceTransformWithLabels(Mat mat, Mat mat2, Mat mat3, int i, int i2) {
        distanceTransformWithLabels_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, i2);
    }

    public static void distanceTransform(Mat mat, Mat mat2, int i, int i2, int i3) {
        distanceTransform_0(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static void distanceTransform(Mat mat, Mat mat2, int i, int i2) {
        distanceTransform_1(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static int floodFill(Mat mat, Mat mat2, Point point, Scalar scalar, Rect rect, Scalar scalar2, Scalar scalar3, int i) {
        double[] dArr = new double[4];
        int iFloodFill_0 = floodFill_0(mat.nativeObj, mat2.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], dArr, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3], scalar3.val[0], scalar3.val[1], scalar3.val[2], scalar3.val[3], i);
        if (rect != null) {
            rect.x = (int) dArr[0];
            rect.y = (int) dArr[1];
            rect.width = (int) dArr[2];
            rect.height = (int) dArr[3];
        }
        return iFloodFill_0;
    }

    public static int floodFill(Mat mat, Mat mat2, Point point, Scalar scalar, Rect rect, Scalar scalar2, Scalar scalar3) {
        double[] dArr = new double[4];
        int iFloodFill_1 = floodFill_1(mat.nativeObj, mat2.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], dArr, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3], scalar3.val[0], scalar3.val[1], scalar3.val[2], scalar3.val[3]);
        if (rect != null) {
            rect.x = (int) dArr[0];
            rect.y = (int) dArr[1];
            rect.width = (int) dArr[2];
            rect.height = (int) dArr[3];
        }
        return iFloodFill_1;
    }

    public static int floodFill(Mat mat, Mat mat2, Point point, Scalar scalar, Rect rect, Scalar scalar2) {
        double[] dArr = new double[4];
        int iFloodFill_2 = floodFill_2(mat.nativeObj, mat2.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], dArr, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3]);
        if (rect != null) {
            rect.x = (int) dArr[0];
            rect.y = (int) dArr[1];
            rect.width = (int) dArr[2];
            rect.height = (int) dArr[3];
        }
        return iFloodFill_2;
    }

    public static int floodFill(Mat mat, Mat mat2, Point point, Scalar scalar, Rect rect) {
        double[] dArr = new double[4];
        int iFloodFill_3 = floodFill_3(mat.nativeObj, mat2.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], dArr);
        if (rect != null) {
            rect.x = (int) dArr[0];
            rect.y = (int) dArr[1];
            rect.width = (int) dArr[2];
            rect.height = (int) dArr[3];
        }
        return iFloodFill_3;
    }

    public static int floodFill(Mat mat, Mat mat2, Point point, Scalar scalar) {
        return floodFill_4(mat.nativeObj, mat2.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void blendLinear(Mat mat, Mat mat2, Mat mat3, Mat mat4, Mat mat5) {
        blendLinear_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, mat5.nativeObj);
    }

    public static void cvtColor(Mat mat, Mat mat2, int i, int i2) {
        cvtColor_0(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void cvtColor(Mat mat, Mat mat2, int i) {
        cvtColor_1(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void cvtColorTwoPlane(Mat mat, Mat mat2, Mat mat3, int i) {
        cvtColorTwoPlane_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
    }

    public static void demosaicing(Mat mat, Mat mat2, int i, int i2) {
        demosaicing_0(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static void demosaicing(Mat mat, Mat mat2, int i) {
        demosaicing_1(mat.nativeObj, mat2.nativeObj, i);
    }

    public static Moments moments(Mat mat, boolean z) {
        return new Moments(moments_0(mat.nativeObj, z));
    }

    public static Moments moments(Mat mat) {
        return new Moments(moments_1(mat.nativeObj));
    }

    public static void HuMoments(Moments moments, Mat mat) {
        HuMoments_0(moments.m00, moments.m10, moments.m01, moments.m20, moments.m11, moments.m02, moments.m30, moments.m21, moments.m12, moments.m03, mat.nativeObj);
    }

    public static void matchTemplate(Mat mat, Mat mat2, Mat mat3, int i, Mat mat4) {
        matchTemplate_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i, mat4.nativeObj);
    }

    public static void matchTemplate(Mat mat, Mat mat2, Mat mat3, int i) {
        matchTemplate_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, i);
    }

    public static int connectedComponentsWithAlgorithm(Mat mat, Mat mat2, int i, int i2, int i3) {
        return connectedComponentsWithAlgorithm_0(mat.nativeObj, mat2.nativeObj, i, i2, i3);
    }

    public static int connectedComponents(Mat mat, Mat mat2, int i, int i2) {
        return connectedComponents_0(mat.nativeObj, mat2.nativeObj, i, i2);
    }

    public static int connectedComponents(Mat mat, Mat mat2, int i) {
        return connectedComponents_1(mat.nativeObj, mat2.nativeObj, i);
    }

    public static int connectedComponents(Mat mat, Mat mat2) {
        return connectedComponents_2(mat.nativeObj, mat2.nativeObj);
    }

    public static int connectedComponentsWithStatsWithAlgorithm(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, int i2, int i3) {
        return connectedComponentsWithStatsWithAlgorithm_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, i2, i3);
    }

    public static int connectedComponentsWithStats(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i, int i2) {
        return connectedComponentsWithStats_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i, i2);
    }

    public static int connectedComponentsWithStats(Mat mat, Mat mat2, Mat mat3, Mat mat4, int i) {
        return connectedComponentsWithStats_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj, i);
    }

    public static int connectedComponentsWithStats(Mat mat, Mat mat2, Mat mat3, Mat mat4) {
        return connectedComponentsWithStats_2(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, mat4.nativeObj);
    }

    public static void findContours(Mat mat, List<MatOfPoint> list, Mat mat2, int i, int i2, Point point) {
        Mat mat3 = new Mat();
        findContours_0(mat.nativeObj, mat3.nativeObj, mat2.nativeObj, i, i2, point.x, point.y);
        Converters.Mat_to_vector_vector_Point(mat3, list);
        mat3.release();
    }

    public static void findContours(Mat mat, List<MatOfPoint> list, Mat mat2, int i, int i2) {
        Mat mat3 = new Mat();
        findContours_1(mat.nativeObj, mat3.nativeObj, mat2.nativeObj, i, i2);
        Converters.Mat_to_vector_vector_Point(mat3, list);
        mat3.release();
    }

    public static void approxPolyDP(MatOfPoint2f matOfPoint2f, MatOfPoint2f matOfPoint2f2, double d, boolean z) {
        approxPolyDP_0(matOfPoint2f.nativeObj, matOfPoint2f2.nativeObj, d, z);
    }

    public static double arcLength(MatOfPoint2f matOfPoint2f, boolean z) {
        return arcLength_0(matOfPoint2f.nativeObj, z);
    }

    public static Rect boundingRect(Mat mat) {
        return new Rect(boundingRect_0(mat.nativeObj));
    }

    public static double contourArea(Mat mat, boolean z) {
        return contourArea_0(mat.nativeObj, z);
    }

    public static double contourArea(Mat mat) {
        return contourArea_1(mat.nativeObj);
    }

    public static RotatedRect minAreaRect(MatOfPoint2f matOfPoint2f) {
        return new RotatedRect(minAreaRect_0(matOfPoint2f.nativeObj));
    }

    public static void boxPoints(RotatedRect rotatedRect, Mat mat) {
        boxPoints_0(rotatedRect.center.x, rotatedRect.center.y, rotatedRect.size.width, rotatedRect.size.height, rotatedRect.angle, mat.nativeObj);
    }

    public static void minEnclosingCircle(MatOfPoint2f matOfPoint2f, Point point, float[] fArr) {
        double[] dArr = new double[2];
        double[] dArr2 = new double[1];
        minEnclosingCircle_0(matOfPoint2f.nativeObj, dArr, dArr2);
        if (point != null) {
            point.x = dArr[0];
            point.y = dArr[1];
        }
        if (fArr != null) {
            fArr[0] = (float) dArr2[0];
        }
    }

    public static double minEnclosingTriangle(Mat mat, Mat mat2) {
        return minEnclosingTriangle_0(mat.nativeObj, mat2.nativeObj);
    }

    public static double matchShapes(Mat mat, Mat mat2, int i, double d) {
        return matchShapes_0(mat.nativeObj, mat2.nativeObj, i, d);
    }

    public static void convexHull(MatOfPoint matOfPoint, MatOfInt matOfInt, boolean z) {
        convexHull_0(matOfPoint.nativeObj, matOfInt.nativeObj, z);
    }

    public static void convexHull(MatOfPoint matOfPoint, MatOfInt matOfInt) {
        convexHull_2(matOfPoint.nativeObj, matOfInt.nativeObj);
    }

    public static void convexityDefects(MatOfPoint matOfPoint, MatOfInt matOfInt, MatOfInt4 matOfInt4) {
        convexityDefects_0(matOfPoint.nativeObj, matOfInt.nativeObj, matOfInt4.nativeObj);
    }

    public static boolean isContourConvex(MatOfPoint matOfPoint) {
        return isContourConvex_0(matOfPoint.nativeObj);
    }

    public static float intersectConvexConvex(Mat mat, Mat mat2, Mat mat3, boolean z) {
        return intersectConvexConvex_0(mat.nativeObj, mat2.nativeObj, mat3.nativeObj, z);
    }

    public static float intersectConvexConvex(Mat mat, Mat mat2, Mat mat3) {
        return intersectConvexConvex_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static RotatedRect fitEllipse(MatOfPoint2f matOfPoint2f) {
        return new RotatedRect(fitEllipse_0(matOfPoint2f.nativeObj));
    }

    public static RotatedRect fitEllipseAMS(Mat mat) {
        return new RotatedRect(fitEllipseAMS_0(mat.nativeObj));
    }

    public static RotatedRect fitEllipseDirect(Mat mat) {
        return new RotatedRect(fitEllipseDirect_0(mat.nativeObj));
    }

    public static void fitLine(Mat mat, Mat mat2, int i, double d, double d2, double d3) {
        fitLine_0(mat.nativeObj, mat2.nativeObj, i, d, d2, d3);
    }

    public static double pointPolygonTest(MatOfPoint2f matOfPoint2f, Point point, boolean z) {
        return pointPolygonTest_0(matOfPoint2f.nativeObj, point.x, point.y, z);
    }

    public static int rotatedRectangleIntersection(RotatedRect rotatedRect, RotatedRect rotatedRect2, Mat mat) {
        return rotatedRectangleIntersection_0(rotatedRect.center.x, rotatedRect.center.y, rotatedRect.size.width, rotatedRect.size.height, rotatedRect.angle, rotatedRect2.center.x, rotatedRect2.center.y, rotatedRect2.size.width, rotatedRect2.size.height, rotatedRect2.angle, mat.nativeObj);
    }

    public static GeneralizedHoughBallard createGeneralizedHoughBallard() {
        return GeneralizedHoughBallard.__fromPtr__(createGeneralizedHoughBallard_0());
    }

    public static GeneralizedHoughGuil createGeneralizedHoughGuil() {
        return GeneralizedHoughGuil.__fromPtr__(createGeneralizedHoughGuil_0());
    }

    public static void applyColorMap(Mat mat, Mat mat2, int i) {
        applyColorMap_0(mat.nativeObj, mat2.nativeObj, i);
    }

    public static void applyColorMap(Mat mat, Mat mat2, Mat mat3) {
        applyColorMap_1(mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public static void line(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2, int i3) {
        line_0(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void line(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2) {
        line_1(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void line(Mat mat, Point point, Point point2, Scalar scalar, int i) {
        line_2(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void line(Mat mat, Point point, Point point2, Scalar scalar) {
        line_3(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void arrowedLine(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2, int i3, double d) {
        arrowedLine_0(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3, d);
    }

    public static void arrowedLine(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2, int i3) {
        arrowedLine_1(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void arrowedLine(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2) {
        arrowedLine_2(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void arrowedLine(Mat mat, Point point, Point point2, Scalar scalar, int i) {
        arrowedLine_3(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void arrowedLine(Mat mat, Point point, Point point2, Scalar scalar) {
        arrowedLine_4(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void rectangle(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2, int i3) {
        rectangle_0(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void rectangle(Mat mat, Point point, Point point2, Scalar scalar, int i, int i2) {
        rectangle_1(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void rectangle(Mat mat, Point point, Point point2, Scalar scalar, int i) {
        rectangle_2(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void rectangle(Mat mat, Point point, Point point2, Scalar scalar) {
        rectangle_3(mat.nativeObj, point.x, point.y, point2.x, point2.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void rectangle(Mat mat, Rect rect, Scalar scalar, int i, int i2, int i3) {
        rectangle_4(mat.nativeObj, rect.x, rect.y, rect.width, rect.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void rectangle(Mat mat, Rect rect, Scalar scalar, int i, int i2) {
        rectangle_5(mat.nativeObj, rect.x, rect.y, rect.width, rect.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void rectangle(Mat mat, Rect rect, Scalar scalar, int i) {
        rectangle_6(mat.nativeObj, rect.x, rect.y, rect.width, rect.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void rectangle(Mat mat, Rect rect, Scalar scalar) {
        rectangle_7(mat.nativeObj, rect.x, rect.y, rect.width, rect.height, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void circle(Mat mat, Point point, int i, Scalar scalar, int i2, int i3, int i4) {
        circle_0(mat.nativeObj, point.x, point.y, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3, i4);
    }

    public static void circle(Mat mat, Point point, int i, Scalar scalar, int i2, int i3) {
        circle_1(mat.nativeObj, point.x, point.y, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3);
    }

    public static void circle(Mat mat, Point point, int i, Scalar scalar, int i2) {
        circle_2(mat.nativeObj, point.x, point.y, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2);
    }

    public static void circle(Mat mat, Point point, int i, Scalar scalar) {
        circle_3(mat.nativeObj, point.x, point.y, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void ellipse(Mat mat, Point point, Size size, double d, double d2, double d3, Scalar scalar, int i, int i2, int i3) {
        ellipse_0(mat.nativeObj, point.x, point.y, size.width, size.height, d, d2, d3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void ellipse(Mat mat, Point point, Size size, double d, double d2, double d3, Scalar scalar, int i, int i2) {
        ellipse_1(mat.nativeObj, point.x, point.y, size.width, size.height, d, d2, d3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void ellipse(Mat mat, Point point, Size size, double d, double d2, double d3, Scalar scalar, int i) {
        ellipse_2(mat.nativeObj, point.x, point.y, size.width, size.height, d, d2, d3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void ellipse(Mat mat, Point point, Size size, double d, double d2, double d3, Scalar scalar) {
        ellipse_3(mat.nativeObj, point.x, point.y, size.width, size.height, d, d2, d3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void ellipse(Mat mat, RotatedRect rotatedRect, Scalar scalar, int i, int i2) {
        ellipse_4(mat.nativeObj, rotatedRect.center.x, rotatedRect.center.y, rotatedRect.size.width, rotatedRect.size.height, rotatedRect.angle, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void ellipse(Mat mat, RotatedRect rotatedRect, Scalar scalar, int i) {
        ellipse_5(mat.nativeObj, rotatedRect.center.x, rotatedRect.center.y, rotatedRect.size.width, rotatedRect.size.height, rotatedRect.angle, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void ellipse(Mat mat, RotatedRect rotatedRect, Scalar scalar) {
        ellipse_6(mat.nativeObj, rotatedRect.center.x, rotatedRect.center.y, rotatedRect.size.width, rotatedRect.size.height, rotatedRect.angle, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void drawMarker(Mat mat, Point point, Scalar scalar, int i, int i2, int i3, int i4) {
        drawMarker_0(mat.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3, i4);
    }

    public static void drawMarker(Mat mat, Point point, Scalar scalar, int i, int i2, int i3) {
        drawMarker_1(mat.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void drawMarker(Mat mat, Point point, Scalar scalar, int i, int i2) {
        drawMarker_2(mat.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void drawMarker(Mat mat, Point point, Scalar scalar, int i) {
        drawMarker_3(mat.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void drawMarker(Mat mat, Point point, Scalar scalar) {
        drawMarker_4(mat.nativeObj, point.x, point.y, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void fillConvexPoly(Mat mat, MatOfPoint matOfPoint, Scalar scalar, int i, int i2) {
        fillConvexPoly_0(mat.nativeObj, matOfPoint.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void fillConvexPoly(Mat mat, MatOfPoint matOfPoint, Scalar scalar, int i) {
        fillConvexPoly_1(mat.nativeObj, matOfPoint.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void fillConvexPoly(Mat mat, MatOfPoint matOfPoint, Scalar scalar) {
        fillConvexPoly_2(mat.nativeObj, matOfPoint.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void fillPoly(Mat mat, List<MatOfPoint> list, Scalar scalar, int i, int i2, Point point) {
        fillPoly_0(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, point.x, point.y);
    }

    public static void fillPoly(Mat mat, List<MatOfPoint> list, Scalar scalar, int i, int i2) {
        fillPoly_1(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void fillPoly(Mat mat, List<MatOfPoint> list, Scalar scalar, int i) {
        fillPoly_2(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void fillPoly(Mat mat, List<MatOfPoint> list, Scalar scalar) {
        fillPoly_3(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void polylines(Mat mat, List<MatOfPoint> list, boolean z, Scalar scalar, int i, int i2, int i3) {
        polylines_0(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, z, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2, i3);
    }

    public static void polylines(Mat mat, List<MatOfPoint> list, boolean z, Scalar scalar, int i, int i2) {
        polylines_1(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, z, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i, i2);
    }

    public static void polylines(Mat mat, List<MatOfPoint> list, boolean z, Scalar scalar, int i) {
        polylines_2(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, z, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i);
    }

    public static void polylines(Mat mat, List<MatOfPoint> list, boolean z, Scalar scalar) {
        polylines_3(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, z, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar, int i2, int i3, Mat mat2, int i4, Point point) {
        drawContours_0(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3, mat2.nativeObj, i4, point.x, point.y);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar, int i2, int i3, Mat mat2, int i4) {
        drawContours_1(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3, mat2.nativeObj, i4);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar, int i2, int i3, Mat mat2) {
        drawContours_2(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3, mat2.nativeObj);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar, int i2, int i3) {
        drawContours_3(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar, int i2) {
        drawContours_4(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2);
    }

    public static void drawContours(Mat mat, List<MatOfPoint> list, int i, Scalar scalar) {
        drawContours_5(mat.nativeObj, Converters.vector_vector_Point_to_Mat(list, new ArrayList(list != null ? list.size() : 0)).nativeObj, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static boolean clipLine(Rect rect, Point point, Point point2) {
        double[] dArr = new double[2];
        double[] dArr2 = new double[2];
        boolean zClipLine_0 = clipLine_0(rect.x, rect.y, rect.width, rect.height, point.x, point.y, dArr, point2.x, point2.y, dArr2);
        if (point != null) {
            point.x = dArr[0];
            point.y = dArr[1];
        }
        if (point2 != null) {
            point2.x = dArr2[0];
            point2.y = dArr2[1];
        }
        return zClipLine_0;
    }

    public static void ellipse2Poly(Point point, Size size, int i, int i2, int i3, int i4, MatOfPoint matOfPoint) {
        ellipse2Poly_0(point.x, point.y, size.width, size.height, i, i2, i3, i4, matOfPoint.nativeObj);
    }

    public static void putText(Mat mat, String str, Point point, int i, double d, Scalar scalar, int i2, int i3, boolean z) {
        putText_0(mat.nativeObj, str, point.x, point.y, i, d, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3, z);
    }

    public static void putText(Mat mat, String str, Point point, int i, double d, Scalar scalar, int i2, int i3) {
        putText_1(mat.nativeObj, str, point.x, point.y, i, d, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2, i3);
    }

    public static void putText(Mat mat, String str, Point point, int i, double d, Scalar scalar, int i2) {
        putText_2(mat.nativeObj, str, point.x, point.y, i, d, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], i2);
    }

    public static void putText(Mat mat, String str, Point point, int i, double d, Scalar scalar) {
        putText_3(mat.nativeObj, str, point.x, point.y, i, d, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public static double getFontScaleFromHeight(int i, int i2, int i3) {
        return getFontScaleFromHeight_0(i, i2, i3);
    }

    public static double getFontScaleFromHeight(int i, int i2) {
        return getFontScaleFromHeight_1(i, i2);
    }

    public static void HoughLinesWithAccumulator(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4, double d5, double d6) {
        HoughLinesWithAccumulator_0(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4, d5, d6);
    }

    public static void HoughLinesWithAccumulator(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4, double d5) {
        HoughLinesWithAccumulator_1(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4, d5);
    }

    public static void HoughLinesWithAccumulator(Mat mat, Mat mat2, double d, double d2, int i, double d3, double d4) {
        HoughLinesWithAccumulator_2(mat.nativeObj, mat2.nativeObj, d, d2, i, d3, d4);
    }

    public static void HoughLinesWithAccumulator(Mat mat, Mat mat2, double d, double d2, int i, double d3) {
        HoughLinesWithAccumulator_3(mat.nativeObj, mat2.nativeObj, d, d2, i, d3);
    }

    public static void HoughLinesWithAccumulator(Mat mat, Mat mat2, double d, double d2, int i) {
        HoughLinesWithAccumulator_4(mat.nativeObj, mat2.nativeObj, d, d2, i);
    }

    public static Size getTextSize(String str, int i, double d, int i2, int[] iArr) {
        if (iArr != null && iArr.length != 1) {
            throw new IllegalArgumentException("'baseLine' must be 'int[1]' or 'null'.");
        }
        return new Size(n_getTextSize(str, i, d, i2, iArr));
    }
}

