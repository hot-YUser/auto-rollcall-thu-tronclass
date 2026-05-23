package org.opencv.features2d;

import org.opencv.core.MatOfFloat;
public class AffineFeature extends Feature2D {
    private static native long create_0(long j, int i, int i2, float f, float f2);

    private static native long create_1(long j, int i, int i2, float f);

    private static native long create_2(long j, int i, int i2);

    private static native long create_3(long j, int i);

    private static native long create_4(long j);

    private static native void delete(long j);

    private static native String getDefaultName_0(long j);

    private static native void getViewParams_0(long j, long j2, long j3);

    private static native void setViewParams_0(long j, long j2, long j3);

    protected AffineFeature(long j) {
        super(j);
    }

    public static AffineFeature __fromPtr__(long j) {
        return new AffineFeature(j);
    }

    public static AffineFeature create(Feature2D feature2D, int i, int i2, float f, float f2) {
        return __fromPtr__(create_0(feature2D.getNativeObjAddr(), i, i2, f, f2));
    }

    public static AffineFeature create(Feature2D feature2D, int i, int i2, float f) {
        return __fromPtr__(create_1(feature2D.getNativeObjAddr(), i, i2, f));
    }

    public static AffineFeature create(Feature2D feature2D, int i, int i2) {
        return __fromPtr__(create_2(feature2D.getNativeObjAddr(), i, i2));
    }

    public static AffineFeature create(Feature2D feature2D, int i) {
        return __fromPtr__(create_3(feature2D.getNativeObjAddr(), i));
    }

    public static AffineFeature create(Feature2D feature2D) {
        return __fromPtr__(create_4(feature2D.getNativeObjAddr()));
    }

    public void setViewParams(MatOfFloat matOfFloat, MatOfFloat matOfFloat2) {
        setViewParams_0(this.nativeObj, matOfFloat.nativeObj, matOfFloat2.nativeObj);
    }

    public void getViewParams(MatOfFloat matOfFloat, MatOfFloat matOfFloat2) {
        getViewParams_0(this.nativeObj, matOfFloat.nativeObj, matOfFloat2.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    public String getDefaultName() {
        return getDefaultName_0(this.nativeObj);
    }

    @Override // org.opencv.features2d.Feature2D, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

