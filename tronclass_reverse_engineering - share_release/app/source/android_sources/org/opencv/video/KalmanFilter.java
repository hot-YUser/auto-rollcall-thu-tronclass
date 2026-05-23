package org.opencv.video;

import org.opencv.core.Mat;
public class KalmanFilter {
    protected final long nativeObj;

    private static native long KalmanFilter_0();

    private static native long KalmanFilter_1(int i, int i2, int i3, int i4);

    private static native long KalmanFilter_2(int i, int i2, int i3);

    private static native long KalmanFilter_3(int i, int i2);

    private static native long correct_0(long j, long j2);

    private static native void delete(long j);

    private static native long get_controlMatrix_0(long j);

    private static native long get_errorCovPost_0(long j);

    private static native long get_errorCovPre_0(long j);

    private static native long get_gain_0(long j);

    private static native long get_measurementMatrix_0(long j);

    private static native long get_measurementNoiseCov_0(long j);

    private static native long get_processNoiseCov_0(long j);

    private static native long get_statePost_0(long j);

    private static native long get_statePre_0(long j);

    private static native long get_transitionMatrix_0(long j);

    private static native long predict_0(long j, long j2);

    private static native long predict_1(long j);

    private static native void set_controlMatrix_0(long j, long j2);

    private static native void set_errorCovPost_0(long j, long j2);

    private static native void set_errorCovPre_0(long j, long j2);

    private static native void set_gain_0(long j, long j2);

    private static native void set_measurementMatrix_0(long j, long j2);

    private static native void set_measurementNoiseCov_0(long j, long j2);

    private static native void set_processNoiseCov_0(long j, long j2);

    private static native void set_statePost_0(long j, long j2);

    private static native void set_statePre_0(long j, long j2);

    private static native void set_transitionMatrix_0(long j, long j2);

    protected KalmanFilter(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static KalmanFilter __fromPtr__(long j) {
        return new KalmanFilter(j);
    }

    public KalmanFilter() {
        this.nativeObj = KalmanFilter_0();
    }

    public KalmanFilter(int i, int i2, int i3, int i4) {
        this.nativeObj = KalmanFilter_1(i, i2, i3, i4);
    }

    public KalmanFilter(int i, int i2, int i3) {
        this.nativeObj = KalmanFilter_2(i, i2, i3);
    }

    public KalmanFilter(int i, int i2) {
        this.nativeObj = KalmanFilter_3(i, i2);
    }

    public Mat predict(Mat mat) {
        return new Mat(predict_0(this.nativeObj, mat.nativeObj));
    }

    public Mat predict() {
        return new Mat(predict_1(this.nativeObj));
    }

    public Mat correct(Mat mat) {
        return new Mat(correct_0(this.nativeObj, mat.nativeObj));
    }

    public Mat get_statePre() {
        return new Mat(get_statePre_0(this.nativeObj));
    }

    public void set_statePre(Mat mat) {
        set_statePre_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_statePost() {
        return new Mat(get_statePost_0(this.nativeObj));
    }

    public void set_statePost(Mat mat) {
        set_statePost_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_transitionMatrix() {
        return new Mat(get_transitionMatrix_0(this.nativeObj));
    }

    public void set_transitionMatrix(Mat mat) {
        set_transitionMatrix_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_controlMatrix() {
        return new Mat(get_controlMatrix_0(this.nativeObj));
    }

    public void set_controlMatrix(Mat mat) {
        set_controlMatrix_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_measurementMatrix() {
        return new Mat(get_measurementMatrix_0(this.nativeObj));
    }

    public void set_measurementMatrix(Mat mat) {
        set_measurementMatrix_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_processNoiseCov() {
        return new Mat(get_processNoiseCov_0(this.nativeObj));
    }

    public void set_processNoiseCov(Mat mat) {
        set_processNoiseCov_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_measurementNoiseCov() {
        return new Mat(get_measurementNoiseCov_0(this.nativeObj));
    }

    public void set_measurementNoiseCov(Mat mat) {
        set_measurementNoiseCov_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_errorCovPre() {
        return new Mat(get_errorCovPre_0(this.nativeObj));
    }

    public void set_errorCovPre(Mat mat) {
        set_errorCovPre_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_gain() {
        return new Mat(get_gain_0(this.nativeObj));
    }

    public void set_gain(Mat mat) {
        set_gain_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_errorCovPost() {
        return new Mat(get_errorCovPost_0(this.nativeObj));
    }

    public void set_errorCovPost(Mat mat) {
        set_errorCovPost_0(this.nativeObj, mat.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

