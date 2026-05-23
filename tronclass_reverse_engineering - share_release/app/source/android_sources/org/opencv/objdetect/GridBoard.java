package org.opencv.objdetect;

import org.opencv.core.Mat;
import org.opencv.core.Size;
public class GridBoard extends Board {
    private static native long GridBoard_0(double d, double d2, float f, float f2, long j, long j2);

    private static native long GridBoard_1(double d, double d2, float f, float f2, long j);

    private static native void delete(long j);

    private static native double[] getGridSize_0(long j);

    private static native float getMarkerLength_0(long j);

    private static native float getMarkerSeparation_0(long j);

    protected GridBoard(long j) {
        super(j);
    }

    public static GridBoard __fromPtr__(long j) {
        return new GridBoard(j);
    }

    public GridBoard(Size size, float f, float f2, Dictionary dictionary, Mat mat) {
        super(GridBoard_0(size.width, size.height, f, f2, dictionary.nativeObj, mat.nativeObj));
    }

    public GridBoard(Size size, float f, float f2, Dictionary dictionary) {
        super(GridBoard_1(size.width, size.height, f, f2, dictionary.nativeObj));
    }

    public Size getGridSize() {
        return new Size(getGridSize_0(this.nativeObj));
    }

    public float getMarkerLength() {
        return getMarkerLength_0(this.nativeObj);
    }

    public float getMarkerSeparation() {
        return getMarkerSeparation_0(this.nativeObj);
    }

    @Override // org.opencv.objdetect.Board
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

