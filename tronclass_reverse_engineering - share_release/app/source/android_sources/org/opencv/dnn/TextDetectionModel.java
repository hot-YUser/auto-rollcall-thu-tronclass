package org.opencv.dnn;

import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfFloat;
import org.opencv.core.MatOfPoint;
import org.opencv.core.MatOfRotatedRect;
import org.opencv.utils.Converters;
public class TextDetectionModel extends Model {
    private static native void delete(long j);

    private static native void detectTextRectangles_0(long j, long j2, long j3, long j4);

    private static native void detectTextRectangles_1(long j, long j2, long j3);

    private static native void detect_0(long j, long j2, long j3, long j4);

    private static native void detect_1(long j, long j2, long j3);

    protected TextDetectionModel(long j) {
        super(j);
    }

    public static TextDetectionModel __fromPtr__(long j) {
        return new TextDetectionModel(j);
    }

    public void detect(Mat mat, List<MatOfPoint> list, MatOfFloat matOfFloat) {
        Mat mat2 = new Mat();
        detect_0(this.nativeObj, mat.nativeObj, mat2.nativeObj, matOfFloat.nativeObj);
        Converters.Mat_to_vector_vector_Point(mat2, list);
        mat2.release();
    }

    public void detect(Mat mat, List<MatOfPoint> list) {
        Mat mat2 = new Mat();
        detect_1(this.nativeObj, mat.nativeObj, mat2.nativeObj);
        Converters.Mat_to_vector_vector_Point(mat2, list);
        mat2.release();
    }

    public void detectTextRectangles(Mat mat, MatOfRotatedRect matOfRotatedRect, MatOfFloat matOfFloat) {
        detectTextRectangles_0(this.nativeObj, mat.nativeObj, matOfRotatedRect.nativeObj, matOfFloat.nativeObj);
    }

    public void detectTextRectangles(Mat mat, MatOfRotatedRect matOfRotatedRect) {
        detectTextRectangles_1(this.nativeObj, mat.nativeObj, matOfRotatedRect.nativeObj);
    }

    @Override // org.opencv.dnn.Model
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

