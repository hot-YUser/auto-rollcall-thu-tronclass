package org.opencv.objdetect;
public class DetectorParameters {
    protected final long nativeObj;

    private static native long DetectorParameters_0();

    private static native void delete(long j);

    private static native double get_adaptiveThreshConstant_0(long j);

    private static native int get_adaptiveThreshWinSizeMax_0(long j);

    private static native int get_adaptiveThreshWinSizeMin_0(long j);

    private static native int get_adaptiveThreshWinSizeStep_0(long j);

    private static native float get_aprilTagCriticalRad_0(long j);

    private static native int get_aprilTagDeglitch_0(long j);

    private static native float get_aprilTagMaxLineFitMse_0(long j);

    private static native int get_aprilTagMaxNmaxima_0(long j);

    private static native int get_aprilTagMinClusterPixels_0(long j);

    private static native int get_aprilTagMinWhiteBlackDiff_0(long j);

    private static native float get_aprilTagQuadDecimate_0(long j);

    private static native float get_aprilTagQuadSigma_0(long j);

    private static native int get_cornerRefinementMaxIterations_0(long j);

    private static native int get_cornerRefinementMethod_0(long j);

    private static native double get_cornerRefinementMinAccuracy_0(long j);

    private static native int get_cornerRefinementWinSize_0(long j);

    private static native boolean get_detectInvertedMarker_0(long j);

    private static native double get_errorCorrectionRate_0(long j);

    private static native int get_markerBorderBits_0(long j);

    private static native double get_maxErroneousBitsInBorderRate_0(long j);

    private static native double get_maxMarkerPerimeterRate_0(long j);

    private static native double get_minCornerDistanceRate_0(long j);

    private static native int get_minDistanceToBorder_0(long j);

    private static native float get_minGroupDistance_0(long j);

    private static native double get_minMarkerDistanceRate_0(long j);

    private static native float get_minMarkerLengthRatioOriginalImg_0(long j);

    private static native double get_minMarkerPerimeterRate_0(long j);

    private static native double get_minOtsuStdDev_0(long j);

    private static native int get_minSideLengthCanonicalImg_0(long j);

    private static native double get_perspectiveRemoveIgnoredMarginPerCell_0(long j);

    private static native int get_perspectiveRemovePixelPerCell_0(long j);

    private static native double get_polygonalApproxAccuracyRate_0(long j);

    private static native float get_relativeCornerRefinmentWinSize_0(long j);

    private static native boolean get_useAruco3Detection_0(long j);

    private static native void set_adaptiveThreshConstant_0(long j, double d);

    private static native void set_adaptiveThreshWinSizeMax_0(long j, int i);

    private static native void set_adaptiveThreshWinSizeMin_0(long j, int i);

    private static native void set_adaptiveThreshWinSizeStep_0(long j, int i);

    private static native void set_aprilTagCriticalRad_0(long j, float f);

    private static native void set_aprilTagDeglitch_0(long j, int i);

    private static native void set_aprilTagMaxLineFitMse_0(long j, float f);

    private static native void set_aprilTagMaxNmaxima_0(long j, int i);

    private static native void set_aprilTagMinClusterPixels_0(long j, int i);

    private static native void set_aprilTagMinWhiteBlackDiff_0(long j, int i);

    private static native void set_aprilTagQuadDecimate_0(long j, float f);

    private static native void set_aprilTagQuadSigma_0(long j, float f);

    private static native void set_cornerRefinementMaxIterations_0(long j, int i);

    private static native void set_cornerRefinementMethod_0(long j, int i);

    private static native void set_cornerRefinementMinAccuracy_0(long j, double d);

    private static native void set_cornerRefinementWinSize_0(long j, int i);

    private static native void set_detectInvertedMarker_0(long j, boolean z);

    private static native void set_errorCorrectionRate_0(long j, double d);

    private static native void set_markerBorderBits_0(long j, int i);

    private static native void set_maxErroneousBitsInBorderRate_0(long j, double d);

    private static native void set_maxMarkerPerimeterRate_0(long j, double d);

    private static native void set_minCornerDistanceRate_0(long j, double d);

    private static native void set_minDistanceToBorder_0(long j, int i);

    private static native void set_minGroupDistance_0(long j, float f);

    private static native void set_minMarkerDistanceRate_0(long j, double d);

    private static native void set_minMarkerLengthRatioOriginalImg_0(long j, float f);

    private static native void set_minMarkerPerimeterRate_0(long j, double d);

    private static native void set_minOtsuStdDev_0(long j, double d);

    private static native void set_minSideLengthCanonicalImg_0(long j, int i);

    private static native void set_perspectiveRemoveIgnoredMarginPerCell_0(long j, double d);

    private static native void set_perspectiveRemovePixelPerCell_0(long j, int i);

    private static native void set_polygonalApproxAccuracyRate_0(long j, double d);

    private static native void set_relativeCornerRefinmentWinSize_0(long j, float f);

    private static native void set_useAruco3Detection_0(long j, boolean z);

    protected DetectorParameters(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static DetectorParameters __fromPtr__(long j) {
        return new DetectorParameters(j);
    }

    public DetectorParameters() {
        this.nativeObj = DetectorParameters_0();
    }

    public int get_adaptiveThreshWinSizeMin() {
        return get_adaptiveThreshWinSizeMin_0(this.nativeObj);
    }

    public void set_adaptiveThreshWinSizeMin(int i) {
        set_adaptiveThreshWinSizeMin_0(this.nativeObj, i);
    }

    public int get_adaptiveThreshWinSizeMax() {
        return get_adaptiveThreshWinSizeMax_0(this.nativeObj);
    }

    public void set_adaptiveThreshWinSizeMax(int i) {
        set_adaptiveThreshWinSizeMax_0(this.nativeObj, i);
    }

    public int get_adaptiveThreshWinSizeStep() {
        return get_adaptiveThreshWinSizeStep_0(this.nativeObj);
    }

    public void set_adaptiveThreshWinSizeStep(int i) {
        set_adaptiveThreshWinSizeStep_0(this.nativeObj, i);
    }

    public double get_adaptiveThreshConstant() {
        return get_adaptiveThreshConstant_0(this.nativeObj);
    }

    public void set_adaptiveThreshConstant(double d) {
        set_adaptiveThreshConstant_0(this.nativeObj, d);
    }

    public double get_minMarkerPerimeterRate() {
        return get_minMarkerPerimeterRate_0(this.nativeObj);
    }

    public void set_minMarkerPerimeterRate(double d) {
        set_minMarkerPerimeterRate_0(this.nativeObj, d);
    }

    public double get_maxMarkerPerimeterRate() {
        return get_maxMarkerPerimeterRate_0(this.nativeObj);
    }

    public void set_maxMarkerPerimeterRate(double d) {
        set_maxMarkerPerimeterRate_0(this.nativeObj, d);
    }

    public double get_polygonalApproxAccuracyRate() {
        return get_polygonalApproxAccuracyRate_0(this.nativeObj);
    }

    public void set_polygonalApproxAccuracyRate(double d) {
        set_polygonalApproxAccuracyRate_0(this.nativeObj, d);
    }

    public double get_minCornerDistanceRate() {
        return get_minCornerDistanceRate_0(this.nativeObj);
    }

    public void set_minCornerDistanceRate(double d) {
        set_minCornerDistanceRate_0(this.nativeObj, d);
    }

    public int get_minDistanceToBorder() {
        return get_minDistanceToBorder_0(this.nativeObj);
    }

    public void set_minDistanceToBorder(int i) {
        set_minDistanceToBorder_0(this.nativeObj, i);
    }

    public double get_minMarkerDistanceRate() {
        return get_minMarkerDistanceRate_0(this.nativeObj);
    }

    public void set_minMarkerDistanceRate(double d) {
        set_minMarkerDistanceRate_0(this.nativeObj, d);
    }

    public float get_minGroupDistance() {
        return get_minGroupDistance_0(this.nativeObj);
    }

    public void set_minGroupDistance(float f) {
        set_minGroupDistance_0(this.nativeObj, f);
    }

    public int get_cornerRefinementMethod() {
        return get_cornerRefinementMethod_0(this.nativeObj);
    }

    public void set_cornerRefinementMethod(int i) {
        set_cornerRefinementMethod_0(this.nativeObj, i);
    }

    public int get_cornerRefinementWinSize() {
        return get_cornerRefinementWinSize_0(this.nativeObj);
    }

    public void set_cornerRefinementWinSize(int i) {
        set_cornerRefinementWinSize_0(this.nativeObj, i);
    }

    public float get_relativeCornerRefinmentWinSize() {
        return get_relativeCornerRefinmentWinSize_0(this.nativeObj);
    }

    public void set_relativeCornerRefinmentWinSize(float f) {
        set_relativeCornerRefinmentWinSize_0(this.nativeObj, f);
    }

    public int get_cornerRefinementMaxIterations() {
        return get_cornerRefinementMaxIterations_0(this.nativeObj);
    }

    public void set_cornerRefinementMaxIterations(int i) {
        set_cornerRefinementMaxIterations_0(this.nativeObj, i);
    }

    public double get_cornerRefinementMinAccuracy() {
        return get_cornerRefinementMinAccuracy_0(this.nativeObj);
    }

    public void set_cornerRefinementMinAccuracy(double d) {
        set_cornerRefinementMinAccuracy_0(this.nativeObj, d);
    }

    public int get_markerBorderBits() {
        return get_markerBorderBits_0(this.nativeObj);
    }

    public void set_markerBorderBits(int i) {
        set_markerBorderBits_0(this.nativeObj, i);
    }

    public int get_perspectiveRemovePixelPerCell() {
        return get_perspectiveRemovePixelPerCell_0(this.nativeObj);
    }

    public void set_perspectiveRemovePixelPerCell(int i) {
        set_perspectiveRemovePixelPerCell_0(this.nativeObj, i);
    }

    public double get_perspectiveRemoveIgnoredMarginPerCell() {
        return get_perspectiveRemoveIgnoredMarginPerCell_0(this.nativeObj);
    }

    public void set_perspectiveRemoveIgnoredMarginPerCell(double d) {
        set_perspectiveRemoveIgnoredMarginPerCell_0(this.nativeObj, d);
    }

    public double get_maxErroneousBitsInBorderRate() {
        return get_maxErroneousBitsInBorderRate_0(this.nativeObj);
    }

    public void set_maxErroneousBitsInBorderRate(double d) {
        set_maxErroneousBitsInBorderRate_0(this.nativeObj, d);
    }

    public double get_minOtsuStdDev() {
        return get_minOtsuStdDev_0(this.nativeObj);
    }

    public void set_minOtsuStdDev(double d) {
        set_minOtsuStdDev_0(this.nativeObj, d);
    }

    public double get_errorCorrectionRate() {
        return get_errorCorrectionRate_0(this.nativeObj);
    }

    public void set_errorCorrectionRate(double d) {
        set_errorCorrectionRate_0(this.nativeObj, d);
    }

    public float get_aprilTagQuadDecimate() {
        return get_aprilTagQuadDecimate_0(this.nativeObj);
    }

    public void set_aprilTagQuadDecimate(float f) {
        set_aprilTagQuadDecimate_0(this.nativeObj, f);
    }

    public float get_aprilTagQuadSigma() {
        return get_aprilTagQuadSigma_0(this.nativeObj);
    }

    public void set_aprilTagQuadSigma(float f) {
        set_aprilTagQuadSigma_0(this.nativeObj, f);
    }

    public int get_aprilTagMinClusterPixels() {
        return get_aprilTagMinClusterPixels_0(this.nativeObj);
    }

    public void set_aprilTagMinClusterPixels(int i) {
        set_aprilTagMinClusterPixels_0(this.nativeObj, i);
    }

    public int get_aprilTagMaxNmaxima() {
        return get_aprilTagMaxNmaxima_0(this.nativeObj);
    }

    public void set_aprilTagMaxNmaxima(int i) {
        set_aprilTagMaxNmaxima_0(this.nativeObj, i);
    }

    public float get_aprilTagCriticalRad() {
        return get_aprilTagCriticalRad_0(this.nativeObj);
    }

    public void set_aprilTagCriticalRad(float f) {
        set_aprilTagCriticalRad_0(this.nativeObj, f);
    }

    public float get_aprilTagMaxLineFitMse() {
        return get_aprilTagMaxLineFitMse_0(this.nativeObj);
    }

    public void set_aprilTagMaxLineFitMse(float f) {
        set_aprilTagMaxLineFitMse_0(this.nativeObj, f);
    }

    public int get_aprilTagMinWhiteBlackDiff() {
        return get_aprilTagMinWhiteBlackDiff_0(this.nativeObj);
    }

    public void set_aprilTagMinWhiteBlackDiff(int i) {
        set_aprilTagMinWhiteBlackDiff_0(this.nativeObj, i);
    }

    public int get_aprilTagDeglitch() {
        return get_aprilTagDeglitch_0(this.nativeObj);
    }

    public void set_aprilTagDeglitch(int i) {
        set_aprilTagDeglitch_0(this.nativeObj, i);
    }

    public boolean get_detectInvertedMarker() {
        return get_detectInvertedMarker_0(this.nativeObj);
    }

    public void set_detectInvertedMarker(boolean z) {
        set_detectInvertedMarker_0(this.nativeObj, z);
    }

    public boolean get_useAruco3Detection() {
        return get_useAruco3Detection_0(this.nativeObj);
    }

    public void set_useAruco3Detection(boolean z) {
        set_useAruco3Detection_0(this.nativeObj, z);
    }

    public int get_minSideLengthCanonicalImg() {
        return get_minSideLengthCanonicalImg_0(this.nativeObj);
    }

    public void set_minSideLengthCanonicalImg(int i) {
        set_minSideLengthCanonicalImg_0(this.nativeObj, i);
    }

    public float get_minMarkerLengthRatioOriginalImg() {
        return get_minMarkerLengthRatioOriginalImg_0(this.nativeObj);
    }

    public void set_minMarkerLengthRatioOriginalImg(float f) {
        set_minMarkerLengthRatioOriginalImg_0(this.nativeObj, f);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

