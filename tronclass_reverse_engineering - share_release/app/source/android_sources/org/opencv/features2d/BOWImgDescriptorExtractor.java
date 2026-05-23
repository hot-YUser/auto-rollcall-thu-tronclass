package org.opencv.features2d;

import org.opencv.core.Mat;
import org.opencv.core.MatOfKeyPoint;
public class BOWImgDescriptorExtractor {
    protected final long nativeObj;

    private static native long BOWImgDescriptorExtractor_0(long j, long j2);

    private static native void compute_0(long j, long j2, long j3, long j4);

    private static native void delete(long j);

    private static native int descriptorSize_0(long j);

    private static native int descriptorType_0(long j);

    private static native long getVocabulary_0(long j);

    private static native void setVocabulary_0(long j, long j2);

    protected BOWImgDescriptorExtractor(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static BOWImgDescriptorExtractor __fromPtr__(long j) {
        return new BOWImgDescriptorExtractor(j);
    }

    public BOWImgDescriptorExtractor(Feature2D feature2D, DescriptorMatcher descriptorMatcher) {
        this.nativeObj = BOWImgDescriptorExtractor_0(feature2D.getNativeObjAddr(), descriptorMatcher.getNativeObjAddr());
    }

    public void setVocabulary(Mat mat) {
        setVocabulary_0(this.nativeObj, mat.nativeObj);
    }

    public Mat getVocabulary() {
        return new Mat(getVocabulary_0(this.nativeObj));
    }

    public void compute(Mat mat, MatOfKeyPoint matOfKeyPoint, Mat mat2) {
        compute_0(this.nativeObj, mat.nativeObj, matOfKeyPoint.nativeObj, mat2.nativeObj);
    }

    public int descriptorSize() {
        return descriptorSize_0(this.nativeObj);
    }

    public int descriptorType() {
        return descriptorType_0(this.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

