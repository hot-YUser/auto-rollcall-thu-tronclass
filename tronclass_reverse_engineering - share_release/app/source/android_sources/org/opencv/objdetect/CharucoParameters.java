package org.opencv.objdetect;

import org.opencv.core.Mat;
public class CharucoParameters {
    protected final long nativeObj;

    private static native long CharucoParameters_0();

    private static native void delete(long j);

    private static native long get_cameraMatrix_0(long j);

    private static native long get_distCoeffs_0(long j);

    private static native int get_minMarkers_0(long j);

    private static native boolean get_tryRefineMarkers_0(long j);

    private static native void set_cameraMatrix_0(long j, long j2);

    private static native void set_distCoeffs_0(long j, long j2);

    private static native void set_minMarkers_0(long j, int i);

    private static native void set_tryRefineMarkers_0(long j, boolean z);

    protected CharucoParameters(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static CharucoParameters __fromPtr__(long j) {
        return new CharucoParameters(j);
    }

    public CharucoParameters() {
        this.nativeObj = CharucoParameters_0();
    }

    public Mat get_cameraMatrix() {
        return new Mat(get_cameraMatrix_0(this.nativeObj));
    }

    public void set_cameraMatrix(Mat mat) {
        set_cameraMatrix_0(this.nativeObj, mat.nativeObj);
    }

    public Mat get_distCoeffs() {
        return new Mat(get_distCoeffs_0(this.nativeObj));
    }

    public void set_distCoeffs(Mat mat) {
        set_distCoeffs_0(this.nativeObj, mat.nativeObj);
    }

    public int get_minMarkers() {
        return get_minMarkers_0(this.nativeObj);
    }

    public void set_minMarkers(int i) {
        set_minMarkers_0(this.nativeObj, i);
    }

    public boolean get_tryRefineMarkers() {
        return get_tryRefineMarkers_0(this.nativeObj);
    }

    public void set_tryRefineMarkers(boolean z) {
        set_tryRefineMarkers_0(this.nativeObj, z);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

