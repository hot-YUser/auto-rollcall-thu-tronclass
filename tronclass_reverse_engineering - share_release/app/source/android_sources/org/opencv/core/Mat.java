package org.opencv.core;

import java.nio.ByteBuffer;
public class Mat {
    public final long nativeObj;

    public interface Atable<T> {
        T getV();

        Tuple2<T> getV2c();

        Tuple3<T> getV3c();

        Tuple4<T> getV4c();

        void setV(T t);

        void setV2c(Tuple2<T> tuple2);

        void setV3c(Tuple3<T> tuple3);

        void setV4c(Tuple4<T> tuple4);
    }

    private static native void locateROI_0(long j, double[] dArr, double[] dArr2);

    private static native String nDump(long j);

    private static native double[] nGet(long j, int i, int i2);

    private static native int nGetB(long j, int i, int i2, int i3, byte[] bArr);

    private static native int nGetBIdx(long j, int[] iArr, int i, byte[] bArr);

    private static native int nGetD(long j, int i, int i2, int i3, double[] dArr);

    private static native int nGetDIdx(long j, int[] iArr, int i, double[] dArr);

    private static native int nGetF(long j, int i, int i2, int i3, float[] fArr);

    private static native int nGetFIdx(long j, int[] iArr, int i, float[] fArr);

    private static native int nGetI(long j, int i, int i2, int i3, int[] iArr);

    private static native int nGetIIdx(long j, int[] iArr, int i, int[] iArr2);

    private static native double[] nGetIdx(long j, int[] iArr);

    private static native int nGetS(long j, int i, int i2, int i3, short[] sArr);

    private static native int nGetSIdx(long j, int[] iArr, int i, short[] sArr);

    private static native int nPutB(long j, int i, int i2, int i3, byte[] bArr);

    private static native int nPutBIdx(long j, int[] iArr, int i, byte[] bArr);

    private static native int nPutBwIdxOffset(long j, int[] iArr, int i, int i2, byte[] bArr);

    private static native int nPutBwOffset(long j, int i, int i2, int i3, int i4, byte[] bArr);

    private static native int nPutD(long j, int i, int i2, int i3, double[] dArr);

    private static native int nPutDIdx(long j, int[] iArr, int i, double[] dArr);

    private static native int nPutF(long j, int i, int i2, int i3, float[] fArr);

    private static native int nPutFIdx(long j, int[] iArr, int i, float[] fArr);

    private static native int nPutI(long j, int i, int i2, int i3, int[] iArr);

    private static native int nPutIIdx(long j, int[] iArr, int i, int[] iArr2);

    private static native int nPutS(long j, int i, int i2, int i3, short[] sArr);

    private static native int nPutSIdx(long j, int[] iArr, int i, short[] sArr);

    private static native long n_Mat();

    private static native long n_Mat(double d, double d2, int i);

    private static native long n_Mat(double d, double d2, int i, double d3, double d4, double d5, double d6);

    private static native long n_Mat(int i, int i2, int i3);

    private static native long n_Mat(int i, int i2, int i3, double d, double d2, double d3, double d4);

    private static native long n_Mat(int i, int i2, int i3, ByteBuffer byteBuffer);

    private static native long n_Mat(int i, int i2, int i3, ByteBuffer byteBuffer, long j);

    private static native long n_Mat(int i, int[] iArr, int i2);

    private static native long n_Mat(int i, int[] iArr, int i2, double d, double d2, double d3, double d4);

    private static native long n_Mat(long j, int i, int i2);

    private static native long n_Mat(long j, int i, int i2, int i3, int i4);

    private static native long n_Mat(long j, Range[] rangeArr);

    private static native long n_adjustROI(long j, int i, int i2, int i3, int i4);

    private static native void n_assignTo(long j, long j2);

    private static native void n_assignTo(long j, long j2, int i);

    private static native int n_channels(long j);

    private static native int n_checkVector(long j, int i);

    private static native int n_checkVector(long j, int i, int i2);

    private static native int n_checkVector(long j, int i, int i2, boolean z);

    private static native long n_clone(long j);

    private static native long n_col(long j, int i);

    private static native long n_colRange(long j, int i, int i2);

    private static native int n_cols(long j);

    private static native void n_convertTo(long j, long j2, int i);

    private static native void n_convertTo(long j, long j2, int i, double d);

    private static native void n_convertTo(long j, long j2, int i, double d, double d2);

    private static native void n_copySize(long j, long j2);

    private static native void n_copyTo(long j, long j2);

    private static native void n_copyTo(long j, long j2, long j3);

    private static native void n_create(long j, double d, double d2, int i);

    private static native void n_create(long j, int i, int i2, int i3);

    private static native void n_create(long j, int i, int[] iArr, int i2);

    private static native long n_cross(long j, long j2);

    private static native long n_dataAddr(long j);

    private static native void n_delete(long j);

    private static native int n_depth(long j);

    private static native long n_diag(long j);

    private static native long n_diag(long j, int i);

    private static native int n_dims(long j);

    private static native double n_dot(long j, long j2);

    private static native long n_elemSize(long j);

    private static native long n_elemSize1(long j);

    private static native boolean n_empty(long j);

    private static native long n_eye(double d, double d2, int i);

    private static native long n_eye(int i, int i2, int i3);

    private static native long n_inv(long j);

    private static native long n_inv(long j, int i);

    private static native boolean n_isContinuous(long j);

    private static native boolean n_isSubmatrix(long j);

    private static native long n_matMul(long j, long j2);

    private static native long n_mul(long j, long j2);

    private static native long n_mul(long j, long j2, double d);

    private static native long n_ones(double d, double d2, int i);

    private static native long n_ones(int i, int i2, int i3);

    private static native long n_ones(int i, int[] iArr, int i2);

    private static native void n_push_back(long j, long j2);

    private static native void n_release(long j);

    private static native long n_reshape(long j, int i);

    private static native long n_reshape(long j, int i, int i2);

    private static native long n_reshape_1(long j, int i, int i2, int[] iArr);

    private static native long n_row(long j, int i);

    private static native long n_rowRange(long j, int i, int i2);

    private static native int n_rows(long j);

    private static native long n_setTo(long j, double d, double d2, double d3, double d4);

    private static native long n_setTo(long j, double d, double d2, double d3, double d4, long j2);

    private static native long n_setTo(long j, long j2);

    private static native long n_setTo(long j, long j2, long j3);

    private static native double[] n_size(long j);

    private static native int n_size_i(long j, int i);

    private static native long n_step1(long j);

    private static native long n_step1(long j, int i);

    private static native long n_submat(long j, int i, int i2, int i3, int i4);

    private static native long n_submat_ranges(long j, Range[] rangeArr);

    private static native long n_submat_rr(long j, int i, int i2, int i3, int i4);

    private static native long n_t(long j);

    private static native long n_total(long j);

    private static native int n_type(long j);

    private static native long n_zeros(double d, double d2, int i);

    private static native long n_zeros(int i, int i2, int i3);

    private static native long n_zeros(int i, int[] iArr, int i2);

    public Mat(long j) {
        if (j == 0) {
            throw new UnsupportedOperationException("Native object address is NULL");
        }
        this.nativeObj = j;
    }

    public Mat() {
        this.nativeObj = n_Mat();
    }

    public Mat(int i, int i2, int i3) {
        this.nativeObj = n_Mat(i, i2, i3);
    }

    public Mat(int i, int i2, int i3, ByteBuffer byteBuffer) {
        this.nativeObj = n_Mat(i, i2, i3, byteBuffer);
    }

    public Mat(int i, int i2, int i3, ByteBuffer byteBuffer, long j) {
        this.nativeObj = n_Mat(i, i2, i3, byteBuffer, j);
    }

    public Mat(Size size, int i) {
        this.nativeObj = n_Mat(size.width, size.height, i);
    }

    public Mat(int[] iArr, int i) {
        this.nativeObj = n_Mat(iArr.length, iArr, i);
    }

    public Mat(int i, int i2, int i3, Scalar scalar) {
        this.nativeObj = n_Mat(i, i2, i3, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Mat(Size size, int i, Scalar scalar) {
        this.nativeObj = n_Mat(size.width, size.height, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Mat(int[] iArr, int i, Scalar scalar) {
        this.nativeObj = n_Mat(iArr.length, iArr, i, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]);
    }

    public Mat(Mat mat, Range range, Range range2) {
        this.nativeObj = n_Mat(mat.nativeObj, range.start, range.end, range2.start, range2.end);
    }

    public Mat(Mat mat, Range range) {
        this.nativeObj = n_Mat(mat.nativeObj, range.start, range.end);
    }

    public Mat(Mat mat, Range[] rangeArr) {
        this.nativeObj = n_Mat(mat.nativeObj, rangeArr);
    }

    public Mat(Mat mat, Rect rect) {
        this.nativeObj = n_Mat(mat.nativeObj, rect.y, rect.height + rect.y, rect.x, rect.x + rect.width);
    }

    public Mat adjustROI(int i, int i2, int i3, int i4) {
        return new Mat(n_adjustROI(this.nativeObj, i, i2, i3, i4));
    }

    public void assignTo(Mat mat, int i) {
        n_assignTo(this.nativeObj, mat.nativeObj, i);
    }

    public void assignTo(Mat mat) {
        n_assignTo(this.nativeObj, mat.nativeObj);
    }

    public int channels() {
        return n_channels(this.nativeObj);
    }

    public int checkVector(int i, int i2, boolean z) {
        return n_checkVector(this.nativeObj, i, i2, z);
    }

    public int checkVector(int i, int i2) {
        return n_checkVector(this.nativeObj, i, i2);
    }

    public int checkVector(int i) {
        return n_checkVector(this.nativeObj, i);
    }

    public Mat clone() {
        return new Mat(n_clone(this.nativeObj));
    }

    public Mat col(int i) {
        return new Mat(n_col(this.nativeObj, i));
    }

    public Mat colRange(int i, int i2) {
        return new Mat(n_colRange(this.nativeObj, i, i2));
    }

    public Mat colRange(Range range) {
        return new Mat(n_colRange(this.nativeObj, range.start, range.end));
    }

    public int dims() {
        return n_dims(this.nativeObj);
    }

    public int cols() {
        return n_cols(this.nativeObj);
    }

    public void convertTo(Mat mat, int i, double d, double d2) {
        n_convertTo(this.nativeObj, mat.nativeObj, i, d, d2);
    }

    public void convertTo(Mat mat, int i, double d) {
        n_convertTo(this.nativeObj, mat.nativeObj, i, d);
    }

    public void convertTo(Mat mat, int i) {
        n_convertTo(this.nativeObj, mat.nativeObj, i);
    }

    public void copyTo(Mat mat) {
        n_copyTo(this.nativeObj, mat.nativeObj);
    }

    public void copyTo(Mat mat, Mat mat2) {
        n_copyTo(this.nativeObj, mat.nativeObj, mat2.nativeObj);
    }

    public void create(int i, int i2, int i3) {
        n_create(this.nativeObj, i, i2, i3);
    }

    public void create(Size size, int i) {
        n_create(this.nativeObj, size.width, size.height, i);
    }

    public void create(int[] iArr, int i) {
        n_create(this.nativeObj, iArr.length, iArr, i);
    }

    public void copySize(Mat mat) {
        n_copySize(this.nativeObj, mat.nativeObj);
    }

    public Mat cross(Mat mat) {
        return new Mat(n_cross(this.nativeObj, mat.nativeObj));
    }

    public long dataAddr() {
        return n_dataAddr(this.nativeObj);
    }

    public int depth() {
        return n_depth(this.nativeObj);
    }

    public Mat diag(int i) {
        return new Mat(n_diag(this.nativeObj, i));
    }

    public Mat diag() {
        return new Mat(n_diag(this.nativeObj, 0));
    }

    public static Mat diag(Mat mat) {
        return new Mat(n_diag(mat.nativeObj));
    }

    public double dot(Mat mat) {
        return n_dot(this.nativeObj, mat.nativeObj);
    }

    public long elemSize() {
        return n_elemSize(this.nativeObj);
    }

    public long elemSize1() {
        return n_elemSize1(this.nativeObj);
    }

    public boolean empty() {
        return n_empty(this.nativeObj);
    }

    public static Mat eye(int i, int i2, int i3) {
        return new Mat(n_eye(i, i2, i3));
    }

    public static Mat eye(Size size, int i) {
        return new Mat(n_eye(size.width, size.height, i));
    }

    public Mat inv(int i) {
        return new Mat(n_inv(this.nativeObj, i));
    }

    public Mat inv() {
        return new Mat(n_inv(this.nativeObj));
    }

    public boolean isContinuous() {
        return n_isContinuous(this.nativeObj);
    }

    public boolean isSubmatrix() {
        return n_isSubmatrix(this.nativeObj);
    }

    public void locateROI(Size size, Point point) {
        double[] dArr = new double[2];
        double[] dArr2 = new double[2];
        locateROI_0(this.nativeObj, dArr, dArr2);
        if (size != null) {
            size.width = dArr[0];
            size.height = dArr[1];
        }
        if (point != null) {
            point.x = dArr2[0];
            point.y = dArr2[1];
        }
    }

    public Mat mul(Mat mat, double d) {
        return new Mat(n_mul(this.nativeObj, mat.nativeObj, d));
    }

    public Mat mul(Mat mat) {
        return new Mat(n_mul(this.nativeObj, mat.nativeObj));
    }

    public Mat matMul(Mat mat) {
        return new Mat(n_matMul(this.nativeObj, mat.nativeObj));
    }

    public static Mat ones(int i, int i2, int i3) {
        return new Mat(n_ones(i, i2, i3));
    }

    public static Mat ones(Size size, int i) {
        return new Mat(n_ones(size.width, size.height, i));
    }

    public static Mat ones(int[] iArr, int i) {
        return new Mat(n_ones(iArr.length, iArr, i));
    }

    public void push_back(Mat mat) {
        n_push_back(this.nativeObj, mat.nativeObj);
    }

    public void release() {
        n_release(this.nativeObj);
    }

    public Mat reshape(int i, int i2) {
        return new Mat(n_reshape(this.nativeObj, i, i2));
    }

    public Mat reshape(int i) {
        return new Mat(n_reshape(this.nativeObj, i));
    }

    public Mat reshape(int i, int[] iArr) {
        return new Mat(n_reshape_1(this.nativeObj, i, iArr.length, iArr));
    }

    public Mat row(int i) {
        return new Mat(n_row(this.nativeObj, i));
    }

    public Mat rowRange(int i, int i2) {
        return new Mat(n_rowRange(this.nativeObj, i, i2));
    }

    public Mat rowRange(Range range) {
        return new Mat(n_rowRange(this.nativeObj, range.start, range.end));
    }

    public int rows() {
        return n_rows(this.nativeObj);
    }

    public Mat setTo(Scalar scalar) {
        return new Mat(n_setTo(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3]));
    }

    public Mat setTo(Scalar scalar, Mat mat) {
        return new Mat(n_setTo(this.nativeObj, scalar.val[0], scalar.val[1], scalar.val[2], scalar.val[3], mat.nativeObj));
    }

    public Mat setTo(Mat mat, Mat mat2) {
        return new Mat(n_setTo(this.nativeObj, mat.nativeObj, mat2.nativeObj));
    }

    public Mat setTo(Mat mat) {
        return new Mat(n_setTo(this.nativeObj, mat.nativeObj));
    }

    public Size size() {
        return new Size(n_size(this.nativeObj));
    }

    public int size(int i) {
        return n_size_i(this.nativeObj, i);
    }

    public long step1(int i) {
        return n_step1(this.nativeObj, i);
    }

    public long step1() {
        return n_step1(this.nativeObj);
    }

    public Mat submat(int i, int i2, int i3, int i4) {
        return new Mat(n_submat_rr(this.nativeObj, i, i2, i3, i4));
    }

    public Mat submat(Range range, Range range2) {
        return new Mat(n_submat_rr(this.nativeObj, range.start, range.end, range2.start, range2.end));
    }

    public Mat submat(Range[] rangeArr) {
        return new Mat(n_submat_ranges(this.nativeObj, rangeArr));
    }

    public Mat submat(Rect rect) {
        return new Mat(n_submat(this.nativeObj, rect.x, rect.y, rect.width, rect.height));
    }

    public Mat t() {
        return new Mat(n_t(this.nativeObj));
    }

    public long total() {
        return n_total(this.nativeObj);
    }

    public int type() {
        return n_type(this.nativeObj);
    }

    public static Mat zeros(int i, int i2, int i3) {
        return new Mat(n_zeros(i, i2, i3));
    }

    public static Mat zeros(Size size, int i) {
        return new Mat(n_zeros(size.width, size.height, i));
    }

    public static Mat zeros(int[] iArr, int i) {
        return new Mat(n_zeros(iArr.length, iArr, i));
    }

    protected void finalize() throws Throwable {
        n_delete(this.nativeObj);
        super.finalize();
    }

    public String toString() {
        String str = dims() > 0 ? "" : "-1*-1*";
        for (int i = 0; i < dims(); i++) {
            str = str + size(i) + "*";
        }
        return "Mat [ " + str + CvType.typeToString(type()) + ", isCont=" + isContinuous() + ", isSubmat=" + isSubmatrix() + ", nativeObj=0x" + Long.toHexString(this.nativeObj) + ", dataAddr=0x" + Long.toHexString(dataAddr()) + " ]";
    }

    public String dump() {
        return nDump(this.nativeObj);
    }

    public int put(int i, int i2, double... dArr) {
        int iType = type();
        if (dArr == null || dArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (dArr == null ? 0 : dArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        return nPutD(this.nativeObj, i, i2, dArr.length, dArr);
    }

    public int put(int[] iArr, double... dArr) {
        int iType = type();
        if (dArr == null || dArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (dArr == null ? 0 : dArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        return nPutDIdx(this.nativeObj, iArr, dArr.length, dArr);
    }

    public int put(int i, int i2, float[] fArr) {
        int iType = type();
        if (fArr == null || fArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (fArr == null ? 0 : fArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 5) {
            return nPutF(this.nativeObj, i, i2, fArr.length, fArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int[] iArr, float[] fArr) {
        int iType = type();
        if (fArr == null || fArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (fArr == null ? 0 : fArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 5) {
            return nPutFIdx(this.nativeObj, iArr, fArr.length, fArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int i, int i2, int[] iArr) {
        int iType = type();
        if (iArr == null || iArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (iArr == null ? 0 : iArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 4) {
            return nPutI(this.nativeObj, i, i2, iArr.length, iArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int[] iArr, int[] iArr2) {
        int iType = type();
        if (iArr2 == null || iArr2.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (iArr2 == null ? 0 : iArr2.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 4) {
            return nPutIIdx(this.nativeObj, iArr, iArr2.length, iArr2);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int i, int i2, short[] sArr) {
        int iType = type();
        if (sArr == null || sArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (sArr == null ? 0 : sArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 2 || CvType.depth(iType) == 3) {
            return nPutS(this.nativeObj, i, i2, sArr.length, sArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int[] iArr, short[] sArr) {
        int iType = type();
        if (sArr == null || sArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (sArr == null ? 0 : sArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 2 || CvType.depth(iType) == 3) {
            return nPutSIdx(this.nativeObj, iArr, sArr.length, sArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int i, int i2, byte[] bArr) {
        int iType = type();
        if (bArr == null || bArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nPutB(this.nativeObj, i, i2, bArr.length, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int[] iArr, byte[] bArr) {
        int iType = type();
        if (bArr == null || bArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nPutBIdx(this.nativeObj, iArr, bArr.length, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int i, int i2, byte[] bArr, int i3, int i4) {
        int iType = type();
        if (bArr == null || i4 % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nPutBwOffset(this.nativeObj, i, i2, i4, i3, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int put(int[] iArr, byte[] bArr, int i, int i2) {
        int iType = type();
        if (bArr == null || i2 % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nPutBwIdxOffset(this.nativeObj, iArr, i2, i, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int i, int i2, byte[] bArr) {
        int iType = type();
        if (bArr == null || bArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nGetB(this.nativeObj, i, i2, bArr.length, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int[] iArr, byte[] bArr) {
        int iType = type();
        if (bArr == null || bArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (bArr == null ? 0 : bArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 0 || CvType.depth(iType) == 1) {
            return nGetBIdx(this.nativeObj, iArr, bArr.length, bArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int i, int i2, short[] sArr) {
        int iType = type();
        if (sArr == null || sArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (sArr == null ? 0 : sArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 2 || CvType.depth(iType) == 3) {
            return nGetS(this.nativeObj, i, i2, sArr.length, sArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int[] iArr, short[] sArr) {
        int iType = type();
        if (sArr == null || sArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (sArr == null ? 0 : sArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 2 || CvType.depth(iType) == 3) {
            return nGetSIdx(this.nativeObj, iArr, sArr.length, sArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int i, int i2, int[] iArr) {
        int iType = type();
        if (iArr == null || iArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (iArr == null ? 0 : iArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 4) {
            return nGetI(this.nativeObj, i, i2, iArr.length, iArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int[] iArr, int[] iArr2) {
        int iType = type();
        if (iArr2 == null || iArr2.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (iArr2 == null ? 0 : iArr2.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 4) {
            return nGetIIdx(this.nativeObj, iArr, iArr2.length, iArr2);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int i, int i2, float[] fArr) {
        int iType = type();
        if (fArr == null || fArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (fArr == null ? 0 : fArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 5) {
            return nGetF(this.nativeObj, i, i2, fArr.length, fArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int[] iArr, float[] fArr) {
        int iType = type();
        if (fArr == null || fArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (fArr == null ? 0 : fArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 5) {
            return nGetFIdx(this.nativeObj, iArr, fArr.length, fArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int i, int i2, double[] dArr) {
        int iType = type();
        if (dArr == null || dArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (dArr == null ? 0 : dArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (CvType.depth(iType) == 6) {
            return nGetD(this.nativeObj, i, i2, dArr.length, dArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public int get(int[] iArr, double[] dArr) {
        int iType = type();
        if (dArr == null || dArr.length % CvType.channels(iType) != 0) {
            throw new UnsupportedOperationException("Provided data element number (" + (dArr == null ? 0 : dArr.length) + ") should be multiple of the Mat channels count (" + CvType.channels(iType) + ")");
        }
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        if (CvType.depth(iType) == 6) {
            return nGetDIdx(this.nativeObj, iArr, dArr.length, dArr);
        }
        throw new UnsupportedOperationException("Mat data type is not compatible: " + iType);
    }

    public double[] get(int i, int i2) {
        return nGet(this.nativeObj, i, i2);
    }

    public double[] get(int[] iArr) {
        if (iArr.length != dims()) {
            throw new IllegalArgumentException("Incorrect number of indices");
        }
        return nGetIdx(this.nativeObj, iArr);
    }

    public int height() {
        return rows();
    }

    public int width() {
        return cols();
    }

    public <T> Atable<T> at(Class<T> cls, int i, int i2) {
        if (cls == Byte.class || cls == Byte.TYPE) {
            return new AtableByte(this, i, i2);
        }
        if (cls == Double.class || cls == Double.TYPE) {
            return new AtableDouble(this, i, i2);
        }
        if (cls == Float.class || cls == Float.TYPE) {
            return new AtableFloat(this, i, i2);
        }
        if (cls == Integer.class || cls == Integer.TYPE) {
            return new AtableInteger(this, i, i2);
        }
        if (cls == Short.class || cls == Short.TYPE) {
            return new AtableShort(this, i, i2);
        }
        throw new RuntimeException("Unsupported class type");
    }

    public <T> Atable<T> at(Class<T> cls, int[] iArr) {
        if (cls == Byte.class || cls == Byte.TYPE) {
            return new AtableByte(this, iArr);
        }
        if (cls == Double.class || cls == Double.TYPE) {
            return new AtableDouble(this, iArr);
        }
        if (cls == Float.class || cls == Float.TYPE) {
            return new AtableFloat(this, iArr);
        }
        if (cls == Integer.class || cls == Integer.TYPE) {
            return new AtableInteger(this, iArr);
        }
        if (cls == Short.class || cls == Short.TYPE) {
            return new AtableShort(this, iArr);
        }
        throw new RuntimeException("Unsupported class parameter");
    }

    public static class Tuple2<T> {
        private final T _0;
        private final T _1;

        public Tuple2(T t, T t2) {
            this._0 = t;
            this._1 = t2;
        }

        public T get_0() {
            return this._0;
        }

        public T get_1() {
            return this._1;
        }
    }

    public static class Tuple3<T> {
        private final T _0;
        private final T _1;
        private final T _2;

        public Tuple3(T t, T t2, T t3) {
            this._0 = t;
            this._1 = t2;
            this._2 = t3;
        }

        public T get_0() {
            return this._0;
        }

        public T get_1() {
            return this._1;
        }

        public T get_2() {
            return this._2;
        }
    }

    public static class Tuple4<T> {
        private final T _0;
        private final T _1;
        private final T _2;
        private final T _3;

        public Tuple4(T t, T t2, T t3, T t4) {
            this._0 = t;
            this._1 = t2;
            this._2 = t3;
            this._3 = t4;
        }

        public T get_0() {
            return this._0;
        }

        public T get_1() {
            return this._1;
        }

        public T get_2() {
            return this._2;
        }

        public T get_3() {
            return this._3;
        }
    }

    private static class AtableBase {
        protected final int[] indices;
        protected final Mat mat;

        protected AtableBase(Mat mat, int i, int i2) {
            this.mat = mat;
            this.indices = new int[]{i, i2};
        }

        protected AtableBase(Mat mat, int[] iArr) {
            this.mat = mat;
            this.indices = iArr;
        }
    }

    private static class AtableByte extends AtableBase implements Atable<Byte> {
        public AtableByte(Mat mat, int i, int i2) {
            super(mat, i, i2);
        }

        public AtableByte(Mat mat, int[] iArr) {
            super(mat, iArr);
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // org.opencv.core.Mat.Atable
        public Byte getV() {
            byte[] bArr = new byte[1];
            this.mat.get(this.indices, bArr);
            return Byte.valueOf(bArr[0]);
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV(Byte b) {
            this.mat.put(this.indices, new byte[]{b.byteValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple2<Byte> getV2c() {
            byte[] bArr = new byte[2];
            this.mat.get(this.indices, bArr);
            return new Tuple2<>(Byte.valueOf(bArr[0]), Byte.valueOf(bArr[1]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV2c(Tuple2<Byte> tuple2) {
            this.mat.put(this.indices, new byte[]{((Byte) ((Tuple2) tuple2)._0).byteValue(), ((Byte) ((Tuple2) tuple2)._1).byteValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple3<Byte> getV3c() {
            byte[] bArr = new byte[3];
            this.mat.get(this.indices, bArr);
            return new Tuple3<>(Byte.valueOf(bArr[0]), Byte.valueOf(bArr[1]), Byte.valueOf(bArr[2]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV3c(Tuple3<Byte> tuple3) {
            this.mat.put(this.indices, new byte[]{((Byte) ((Tuple3) tuple3)._0).byteValue(), ((Byte) ((Tuple3) tuple3)._1).byteValue(), ((Byte) ((Tuple3) tuple3)._2).byteValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple4<Byte> getV4c() {
            byte[] bArr = new byte[4];
            this.mat.get(this.indices, bArr);
            return new Tuple4<>(Byte.valueOf(bArr[0]), Byte.valueOf(bArr[1]), Byte.valueOf(bArr[2]), Byte.valueOf(bArr[3]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV4c(Tuple4<Byte> tuple4) {
            this.mat.put(this.indices, new byte[]{((Byte) ((Tuple4) tuple4)._0).byteValue(), ((Byte) ((Tuple4) tuple4)._1).byteValue(), ((Byte) ((Tuple4) tuple4)._2).byteValue(), ((Byte) ((Tuple4) tuple4)._3).byteValue()});
        }
    }

    private static class AtableDouble extends AtableBase implements Atable<Double> {
        public AtableDouble(Mat mat, int i, int i2) {
            super(mat, i, i2);
        }

        public AtableDouble(Mat mat, int[] iArr) {
            super(mat, iArr);
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // org.opencv.core.Mat.Atable
        public Double getV() {
            double[] dArr = new double[1];
            this.mat.get(this.indices, dArr);
            return Double.valueOf(dArr[0]);
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV(Double d) {
            this.mat.put(this.indices, d.doubleValue());
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple2<Double> getV2c() {
            double[] dArr = new double[2];
            this.mat.get(this.indices, dArr);
            return new Tuple2<>(Double.valueOf(dArr[0]), Double.valueOf(dArr[1]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV2c(Tuple2<Double> tuple2) {
            this.mat.put(this.indices, ((Double) ((Tuple2) tuple2)._0).doubleValue(), ((Double) ((Tuple2) tuple2)._1).doubleValue());
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple3<Double> getV3c() {
            double[] dArr = new double[3];
            this.mat.get(this.indices, dArr);
            return new Tuple3<>(Double.valueOf(dArr[0]), Double.valueOf(dArr[1]), Double.valueOf(dArr[2]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV3c(Tuple3<Double> tuple3) {
            this.mat.put(this.indices, ((Double) ((Tuple3) tuple3)._0).doubleValue(), ((Double) ((Tuple3) tuple3)._1).doubleValue(), ((Double) ((Tuple3) tuple3)._2).doubleValue());
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple4<Double> getV4c() {
            double[] dArr = new double[4];
            this.mat.get(this.indices, dArr);
            return new Tuple4<>(Double.valueOf(dArr[0]), Double.valueOf(dArr[1]), Double.valueOf(dArr[2]), Double.valueOf(dArr[3]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV4c(Tuple4<Double> tuple4) {
            this.mat.put(this.indices, ((Double) ((Tuple4) tuple4)._0).doubleValue(), ((Double) ((Tuple4) tuple4)._1).doubleValue(), ((Double) ((Tuple4) tuple4)._2).doubleValue(), ((Double) ((Tuple4) tuple4)._3).doubleValue());
        }
    }

    private static class AtableFloat extends AtableBase implements Atable<Float> {
        public AtableFloat(Mat mat, int i, int i2) {
            super(mat, i, i2);
        }

        public AtableFloat(Mat mat, int[] iArr) {
            super(mat, iArr);
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // org.opencv.core.Mat.Atable
        public Float getV() {
            float[] fArr = new float[1];
            this.mat.get(this.indices, fArr);
            return Float.valueOf(fArr[0]);
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV(Float f) {
            this.mat.put(this.indices, new float[]{f.floatValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple2<Float> getV2c() {
            float[] fArr = new float[2];
            this.mat.get(this.indices, fArr);
            return new Tuple2<>(Float.valueOf(fArr[0]), Float.valueOf(fArr[1]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV2c(Tuple2<Float> tuple2) {
            this.mat.put(this.indices, new float[]{((Float) ((Tuple2) tuple2)._0).floatValue(), ((Float) ((Tuple2) tuple2)._1).floatValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple3<Float> getV3c() {
            float[] fArr = new float[3];
            this.mat.get(this.indices, fArr);
            return new Tuple3<>(Float.valueOf(fArr[0]), Float.valueOf(fArr[1]), Float.valueOf(fArr[2]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV3c(Tuple3<Float> tuple3) {
            this.mat.put(this.indices, new float[]{((Float) ((Tuple3) tuple3)._0).floatValue(), ((Float) ((Tuple3) tuple3)._1).floatValue(), ((Float) ((Tuple3) tuple3)._2).floatValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple4<Float> getV4c() {
            float[] fArr = new float[4];
            this.mat.get(this.indices, fArr);
            return new Tuple4<>(Float.valueOf(fArr[0]), Float.valueOf(fArr[1]), Float.valueOf(fArr[2]), Float.valueOf(fArr[3]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV4c(Tuple4<Float> tuple4) {
            this.mat.put(this.indices, ((Float) ((Tuple4) tuple4)._0).floatValue(), ((Float) ((Tuple4) tuple4)._1).floatValue(), ((Float) ((Tuple4) tuple4)._2).floatValue(), ((Float) ((Tuple4) tuple4)._3).floatValue());
        }
    }

    private static class AtableInteger extends AtableBase implements Atable<Integer> {
        public AtableInteger(Mat mat, int i, int i2) {
            super(mat, i, i2);
        }

        public AtableInteger(Mat mat, int[] iArr) {
            super(mat, iArr);
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // org.opencv.core.Mat.Atable
        public Integer getV() {
            int[] iArr = new int[1];
            this.mat.get(this.indices, iArr);
            return Integer.valueOf(iArr[0]);
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV(Integer num) {
            this.mat.put(this.indices, new int[]{num.intValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple2<Integer> getV2c() {
            int[] iArr = new int[2];
            this.mat.get(this.indices, iArr);
            return new Tuple2<>(Integer.valueOf(iArr[0]), Integer.valueOf(iArr[1]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV2c(Tuple2<Integer> tuple2) {
            this.mat.put(this.indices, new int[]{((Integer) ((Tuple2) tuple2)._0).intValue(), ((Integer) ((Tuple2) tuple2)._1).intValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple3<Integer> getV3c() {
            int[] iArr = new int[3];
            this.mat.get(this.indices, iArr);
            return new Tuple3<>(Integer.valueOf(iArr[0]), Integer.valueOf(iArr[1]), Integer.valueOf(iArr[2]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV3c(Tuple3<Integer> tuple3) {
            this.mat.put(this.indices, new int[]{((Integer) ((Tuple3) tuple3)._0).intValue(), ((Integer) ((Tuple3) tuple3)._1).intValue(), ((Integer) ((Tuple3) tuple3)._2).intValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple4<Integer> getV4c() {
            int[] iArr = new int[4];
            this.mat.get(this.indices, iArr);
            return new Tuple4<>(Integer.valueOf(iArr[0]), Integer.valueOf(iArr[1]), Integer.valueOf(iArr[2]), Integer.valueOf(iArr[3]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV4c(Tuple4<Integer> tuple4) {
            this.mat.put(this.indices, new int[]{((Integer) ((Tuple4) tuple4)._0).intValue(), ((Integer) ((Tuple4) tuple4)._1).intValue(), ((Integer) ((Tuple4) tuple4)._2).intValue(), ((Integer) ((Tuple4) tuple4)._3).intValue()});
        }
    }

    private static class AtableShort extends AtableBase implements Atable<Short> {
        public AtableShort(Mat mat, int i, int i2) {
            super(mat, i, i2);
        }

        public AtableShort(Mat mat, int[] iArr) {
            super(mat, iArr);
        }

        @Override // org.opencv.core.Mat.Atable
        public Short getV() {
            short[] sArr = new short[1];
            this.mat.get(this.indices, sArr);
            return Short.valueOf(sArr[0]);
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV(Short sh) {
            this.mat.put(this.indices, new short[]{sh.shortValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple2<Short> getV2c() {
            short[] sArr = new short[2];
            this.mat.get(this.indices, sArr);
            return new Tuple2<>(Short.valueOf(sArr[0]), Short.valueOf(sArr[1]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV2c(Tuple2<Short> tuple2) {
            this.mat.put(this.indices, new short[]{((Short) ((Tuple2) tuple2)._0).shortValue(), ((Short) ((Tuple2) tuple2)._1).shortValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple3<Short> getV3c() {
            short[] sArr = new short[3];
            this.mat.get(this.indices, sArr);
            return new Tuple3<>(Short.valueOf(sArr[0]), Short.valueOf(sArr[1]), Short.valueOf(sArr[2]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV3c(Tuple3<Short> tuple3) {
            this.mat.put(this.indices, new short[]{((Short) ((Tuple3) tuple3)._0).shortValue(), ((Short) ((Tuple3) tuple3)._1).shortValue(), ((Short) ((Tuple3) tuple3)._2).shortValue()});
        }

        @Override // org.opencv.core.Mat.Atable
        public Tuple4<Short> getV4c() {
            short[] sArr = new short[4];
            this.mat.get(this.indices, sArr);
            return new Tuple4<>(Short.valueOf(sArr[0]), Short.valueOf(sArr[1]), Short.valueOf(sArr[2]), Short.valueOf(sArr[3]));
        }

        @Override // org.opencv.core.Mat.Atable
        public void setV4c(Tuple4<Short> tuple4) {
            this.mat.put(this.indices, new short[]{((Short) ((Tuple4) tuple4)._0).shortValue(), ((Short) ((Tuple4) tuple4)._1).shortValue(), ((Short) ((Tuple4) tuple4)._2).shortValue(), ((Short) ((Tuple4) tuple4)._3).shortValue()});
        }
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }
}

