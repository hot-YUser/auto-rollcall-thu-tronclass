package org.opencv.objdetect;

import org.opencv.core.Mat;
import org.opencv.core.MatOfPoint3f;
import org.opencv.core.Size;
public class CharucoBoard extends Board {
    private static native long CharucoBoard_0(double d, double d2, float f, float f2, long j, long j2);

    private static native long CharucoBoard_1(double d, double d2, float f, float f2, long j);

    private static native boolean checkCharucoCornersCollinear_0(long j, long j2);

    private static native void delete(long j);

    private static native long getChessboardCorners_0(long j);

    private static native double[] getChessboardSize_0(long j);

    private static native boolean getLegacyPattern_0(long j);

    private static native float getMarkerLength_0(long j);

    private static native float getSquareLength_0(long j);

    private static native void setLegacyPattern_0(long j, boolean z);

    protected CharucoBoard(long j) {
        super(j);
    }

    public static CharucoBoard __fromPtr__(long j) {
        return new CharucoBoard(j);
    }

    public CharucoBoard(Size size, float f, float f2, Dictionary dictionary, Mat mat) {
        super(CharucoBoard_0(size.width, size.height, f, f2, dictionary.nativeObj, mat.nativeObj));
    }

    public CharucoBoard(Size size, float f, float f2, Dictionary dictionary) {
        super(CharucoBoard_1(size.width, size.height, f, f2, dictionary.nativeObj));
    }

    public void setLegacyPattern(boolean z) {
        setLegacyPattern_0(this.nativeObj, z);
    }

    public boolean getLegacyPattern() {
        return getLegacyPattern_0(this.nativeObj);
    }

    public Size getChessboardSize() {
        return new Size(getChessboardSize_0(this.nativeObj));
    }

    public float getSquareLength() {
        return getSquareLength_0(this.nativeObj);
    }

    public float getMarkerLength() {
        return getMarkerLength_0(this.nativeObj);
    }

    public MatOfPoint3f getChessboardCorners() {
        return MatOfPoint3f.fromNativeAddr(getChessboardCorners_0(this.nativeObj));
    }

    public boolean checkCharucoCornersCollinear(Mat mat) {
        return checkCharucoCornersCollinear_0(this.nativeObj, mat.nativeObj);
    }

    @Override // org.opencv.objdetect.Board
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

