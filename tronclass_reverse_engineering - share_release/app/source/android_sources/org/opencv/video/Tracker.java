package org.opencv.video;

import org.opencv.core.Mat;
import org.opencv.core.Rect;
public class Tracker {
    protected final long nativeObj;

    private static native void delete(long j);

    private static native void init_0(long j, long j2, int i, int i2, int i3, int i4);

    private static native boolean update_0(long j, long j2, double[] dArr);

    protected Tracker(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Tracker __fromPtr__(long j) {
        return new Tracker(j);
    }

    public void init(Mat mat, Rect rect) {
        init_0(this.nativeObj, mat.nativeObj, rect.x, rect.y, rect.width, rect.height);
    }

    public boolean update(Mat mat, Rect rect) {
        double[] dArr = new double[4];
        boolean zUpdate_0 = update_0(this.nativeObj, mat.nativeObj, dArr);
        if (rect != null) {
            rect.x = (int) dArr[0];
            rect.y = (int) dArr[1];
            rect.width = (int) dArr[2];
            rect.height = (int) dArr[3];
        }
        return zUpdate_0;
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

