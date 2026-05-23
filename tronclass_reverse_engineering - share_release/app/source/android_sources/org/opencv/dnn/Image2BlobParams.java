package org.opencv.dnn;

import org.opencv.core.MatOfRect;
import org.opencv.core.Rect;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
public class Image2BlobParams {
    protected final long nativeObj;

    private static native long Image2BlobParams_0();

    private static native long Image2BlobParams_1(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, boolean z, int i, double d11, double d12, double d13, double d14);

    private static native long Image2BlobParams_2(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, boolean z, int i);

    private static native long Image2BlobParams_5(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10, boolean z);

    private static native long Image2BlobParams_6(double d, double d2, double d3, double d4, double d5, double d6, double d7, double d8, double d9, double d10);

    private static native long Image2BlobParams_7(double d, double d2, double d3, double d4, double d5, double d6);

    private static native long Image2BlobParams_8(double d, double d2, double d3, double d4);

    private static native double[] blobRectToImageRect_0(long j, int i, int i2, int i3, int i4, double d, double d2);

    private static native void blobRectsToImageRects_0(long j, long j2, long j3, double d, double d2);

    private static native void delete(long j);

    private static native double[] get_borderValue_0(long j);

    private static native int get_ddepth_0(long j);

    private static native double[] get_mean_0(long j);

    private static native double[] get_scalefactor_0(long j);

    private static native double[] get_size_0(long j);

    private static native boolean get_swapRB_0(long j);

    private static native void set_borderValue_0(long j, double d, double d2, double d3, double d4);

    private static native void set_ddepth_0(long j, int i);

    private static native void set_mean_0(long j, double d, double d2, double d3, double d4);

    private static native void set_scalefactor_0(long j, double d, double d2, double d3, double d4);

    private static native void set_size_0(long j, double d, double d2);

    private static native void set_swapRB_0(long j, boolean z);

    protected Image2BlobParams(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static Image2BlobParams __fromPtr__(long j) {
        return new Image2BlobParams(j);
    }

    public Image2BlobParams() {
        this.nativeObj = Image2BlobParams_0();
    }

    public Image2BlobParams(Scalar scalar, Size size, Scalar scalar2, boolean z, int i, Scalar scalar3) {
        this.nativeObj = Image2BlobParams_1(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], size.width, size.height, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3], z, i, scalar3.val[0], scalar3.val[1], scalar3.val[2], scalar3.val[3]);
    }

    public Image2BlobParams(Scalar scalar, Size size, Scalar scalar2, boolean z, int i) {
        this.nativeObj = Image2BlobParams_2(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], size.width, size.height, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3], z, i);
    }

    public Image2BlobParams(Scalar scalar, Size size, Scalar scalar2, boolean z) {
        this.nativeObj = Image2BlobParams_5(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], size.width, size.height, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3], z);
    }

    public Image2BlobParams(Scalar scalar, Size size, Scalar scalar2) {
        this.nativeObj = Image2BlobParams_6(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], size.width, size.height, scalar2.val[0], scalar2.val[1], scalar2.val[2], scalar2.val[3]);
    }

    public Image2BlobParams(Scalar scalar, Size size) {
        this.nativeObj = Image2BlobParams_7(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], size.width, size.height);
    }

    public Image2BlobParams(Scalar scalar) {
        this.nativeObj = Image2BlobParams_8(scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Rect blobRectToImageRect(Rect rect, Size size) {
        return new Rect(blobRectToImageRect_0(this.nativeObj, rect.x, rect.y, rect.width, rect.height, size.width, size.height));
    }

    public void blobRectsToImageRects(MatOfRect matOfRect, MatOfRect matOfRect2, Size size) {
        blobRectsToImageRects_0(this.nativeObj, matOfRect.nativeObj, matOfRect2.nativeObj, size.width, size.height);
    }

    public Scalar get_scalefactor() {
        return new Scalar(get_scalefactor_0(this.nativeObj));
    }

    public void set_scalefactor(Scalar scalar) {
        set_scalefactor_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Size get_size() {
        return new Size(get_size_0(this.nativeObj));
    }

    public void set_size(Size size) {
        set_size_0(this.nativeObj, size.width, size.height);
    }

    public Scalar get_mean() {
        return new Scalar(get_mean_0(this.nativeObj));
    }

    public void set_mean(Scalar scalar) {
        set_mean_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public boolean get_swapRB() {
        return get_swapRB_0(this.nativeObj);
    }

    public void set_swapRB(boolean z) {
        set_swapRB_0(this.nativeObj, z);
    }

    public int get_ddepth() {
        return get_ddepth_0(this.nativeObj);
    }

    public void set_ddepth(int i) {
        set_ddepth_0(this.nativeObj, i);
    }

    public Scalar get_borderValue() {
        return new Scalar(get_borderValue_0(this.nativeObj));
    }

    public void set_borderValue(Scalar scalar) {
        set_borderValue_0(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

