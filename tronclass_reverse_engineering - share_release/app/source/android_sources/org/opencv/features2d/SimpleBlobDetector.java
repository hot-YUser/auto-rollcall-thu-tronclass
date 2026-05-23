package org.opencv.features2d;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Mat;
import org.opencv.core.MatOfPoint;
import org.opencv.utils.Converters;
public class SimpleBlobDetector extends Feature2D {
    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    private static native long getBlobContours_0(long j);

    private static native String getDefaultName_0(long j);

    private static native long getParams_0(long j);

    private static native void setParams_0(long j, long j2);

    protected SimpleBlobDetector(long j) {
        super(j);
    }

    public static SimpleBlobDetector __fromPtr__(long j) {
        return new SimpleBlobDetector(j);
    }

    public static SimpleBlobDetector create(SimpleBlobDetector_Params simpleBlobDetector_Params) {
        return __fromPtr__(create_0(simpleBlobDetector_Params.nativeObj));
    }

    public static SimpleBlobDetector create() {
        return __fromPtr__(create_1());
    }

    public void setParams(SimpleBlobDetector_Params simpleBlobDetector_Params) {
        setParams_0(this.nativeObj, simpleBlobDetector_Params.nativeObj);
    }

    public SimpleBlobDetector_Params getParams() {
        return new SimpleBlobDetector_Params(getParams_0(this.nativeObj));
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    public String getDefaultName() {
        return getDefaultName_0(this.nativeObj);
    }

    public List<MatOfPoint> getBlobContours() {
        ArrayList arrayList = new ArrayList();
        Converters.Mat_to_vector_vector_Point(new Mat(getBlobContours_0(this.nativeObj)), arrayList);
        return arrayList;
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

