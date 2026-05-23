package org.opencv.objdetect;
public class QRCodeDetectorAruco_Params {
    protected final long nativeObj;

    private static native long QRCodeDetectorAruco_Params_0();

    private static native void delete(long j);

    private static native float get_maxColorsMismatch_0(long j);

    private static native float get_maxModuleSizeMismatch_0(long j);

    private static native float get_maxPenalties_0(long j);

    private static native float get_maxRotation_0(long j);

    private static native float get_maxTimingPatternMismatch_0(long j);

    private static native float get_minModuleSizeInPyramid_0(long j);

    private static native float get_scaleTimingPatternScore_0(long j);

    private static native void set_maxColorsMismatch_0(long j, float f);

    private static native void set_maxModuleSizeMismatch_0(long j, float f);

    private static native void set_maxPenalties_0(long j, float f);

    private static native void set_maxRotation_0(long j, float f);

    private static native void set_maxTimingPatternMismatch_0(long j, float f);

    private static native void set_minModuleSizeInPyramid_0(long j, float f);

    private static native void set_scaleTimingPatternScore_0(long j, float f);

    protected QRCodeDetectorAruco_Params(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static QRCodeDetectorAruco_Params __fromPtr__(long j) {
        return new QRCodeDetectorAruco_Params(j);
    }

    public QRCodeDetectorAruco_Params() {
        this.nativeObj = QRCodeDetectorAruco_Params_0();
    }

    public float get_minModuleSizeInPyramid() {
        return get_minModuleSizeInPyramid_0(this.nativeObj);
    }

    public void set_minModuleSizeInPyramid(float f) {
        set_minModuleSizeInPyramid_0(this.nativeObj, f);
    }

    public float get_maxRotation() {
        return get_maxRotation_0(this.nativeObj);
    }

    public void set_maxRotation(float f) {
        set_maxRotation_0(this.nativeObj, f);
    }

    public float get_maxModuleSizeMismatch() {
        return get_maxModuleSizeMismatch_0(this.nativeObj);
    }

    public void set_maxModuleSizeMismatch(float f) {
        set_maxModuleSizeMismatch_0(this.nativeObj, f);
    }

    public float get_maxTimingPatternMismatch() {
        return get_maxTimingPatternMismatch_0(this.nativeObj);
    }

    public void set_maxTimingPatternMismatch(float f) {
        set_maxTimingPatternMismatch_0(this.nativeObj, f);
    }

    public float get_maxPenalties() {
        return get_maxPenalties_0(this.nativeObj);
    }

    public void set_maxPenalties(float f) {
        set_maxPenalties_0(this.nativeObj, f);
    }

    public float get_maxColorsMismatch() {
        return get_maxColorsMismatch_0(this.nativeObj);
    }

    public void set_maxColorsMismatch(float f) {
        set_maxColorsMismatch_0(this.nativeObj, f);
    }

    public float get_scaleTimingPatternScore() {
        return get_scaleTimingPatternScore_0(this.nativeObj);
    }

    public void set_scaleTimingPatternScore(float f) {
        set_scaleTimingPatternScore_0(this.nativeObj, f);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

