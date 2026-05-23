package org.opencv.objdetect;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfInt;
import org.opencv.core.MatOfPoint3f;
import org.opencv.core.Point3;
import org.opencv.core.Size;
import org.opencv.utils.Converters;
public class Board {
    protected final long nativeObj;

    private static native long Board_0(long j, long j2, long j3);

    private static native void delete(long j);

    private static native void generateImage_0(long j, double d, double d2, long j2, int i, int i2);

    private static native void generateImage_1(long j, double d, double d2, long j2, int i);

    private static native void generateImage_2(long j, double d, double d2, long j2);

    private static native long getDictionary_0(long j);

    private static native long getIds_0(long j);

    private static native long getObjPoints_0(long j);

    private static native double[] getRightBottomCorner_0(long j);

    private static native void matchImagePoints_0(long j, long j2, long j3, long j4, long j5);

    protected Board(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Board __fromPtr__(long j) {
        return new Board(j);
    }

    public Board(List<Mat> list, Dictionary dictionary, Mat mat) {
        this.nativeObj = Board_0(Converters.vector_Mat_to_Mat(list).nativeObj, dictionary.nativeObj, mat.nativeObj);
    }

    public Dictionary getDictionary() {
        return new Dictionary(getDictionary_0(this.nativeObj));
    }

    public List<MatOfPoint3f> getObjPoints() {
        ArrayList arrayList = new ArrayList();
        Converters.Mat_to_vector_vector_Point3f(new Mat(getObjPoints_0(this.nativeObj)), arrayList);
        return arrayList;
    }

    public MatOfInt getIds() {
        return MatOfInt.fromNativeAddr(getIds_0(this.nativeObj));
    }

    public Point3 getRightBottomCorner() {
        return new Point3(getRightBottomCorner_0(this.nativeObj));
    }

    public void matchImagePoints(List<Mat> list, Mat mat, Mat mat2, Mat mat3) {
        matchImagePoints_0(this.nativeObj, Converters.vector_Mat_to_Mat(list).nativeObj, mat.nativeObj, mat2.nativeObj, mat3.nativeObj);
    }

    public void generateImage(Size size, Mat mat, int i, int i2) {
        generateImage_0(this.nativeObj, size.width, size.height, mat.nativeObj, i, i2);
    }

    public void generateImage(Size size, Mat mat, int i) {
        generateImage_1(this.nativeObj, size.width, size.height, mat.nativeObj, i);
    }

    public void generateImage(Size size, Mat mat) {
        generateImage_2(this.nativeObj, size.width, size.height, mat.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

