package org.opencv.videoio;

import org.opencv.core.Mat;
import org.opencv.core.MatOfInt;
import org.opencv.core.Size;
public class VideoWriter {
    protected final long nativeObj;

    private static native long VideoWriter_0();

    private static native long VideoWriter_1(String str, int i, double d, double d2, double d3, boolean z);

    private static native long VideoWriter_2(String str, int i, double d, double d2, double d3);

    private static native long VideoWriter_3(String str, int i, int i2, double d, double d2, double d3, boolean z);

    private static native long VideoWriter_4(String str, int i, int i2, double d, double d2, double d3);

    private static native long VideoWriter_5(String str, int i, double d, double d2, double d3, long j);

    private static native long VideoWriter_6(String str, int i, int i2, double d, double d2, double d3, long j);

    private static native void delete(long j);

    private static native int fourcc_0(char c, char c2, char c3, char c4);

    private static native String getBackendName_0(long j);

    private static native double get_0(long j, int i);

    private static native boolean isOpened_0(long j);

    private static native boolean open_0(long j, String str, int i, double d, double d2, double d3, boolean z);

    private static native boolean open_1(long j, String str, int i, double d, double d2, double d3);

    private static native boolean open_2(long j, String str, int i, int i2, double d, double d2, double d3, boolean z);

    private static native boolean open_3(long j, String str, int i, int i2, double d, double d2, double d3);

    private static native boolean open_4(long j, String str, int i, double d, double d2, double d3, long j2);

    private static native boolean open_5(long j, String str, int i, int i2, double d, double d2, double d3, long j2);

    private static native void release_0(long j);

    private static native boolean set_0(long j, int i, double d);

    private static native void write_0(long j, long j2);

    protected VideoWriter(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static VideoWriter __fromPtr__(long j) {
        return new VideoWriter(j);
    }

    public VideoWriter() {
        this.nativeObj = VideoWriter_0();
    }

    public VideoWriter(String str, int i, double d, Size size, boolean z) {
        this.nativeObj = VideoWriter_1(str, i, d, size.width, size.height, z);
    }

    public VideoWriter(String str, int i, double d, Size size) {
        this.nativeObj = VideoWriter_2(str, i, d, size.width, size.height);
    }

    public VideoWriter(String str, int i, int i2, double d, Size size, boolean z) {
        this.nativeObj = VideoWriter_3(str, i, i2, d, size.width, size.height, z);
    }

    public VideoWriter(String str, int i, int i2, double d, Size size) {
        this.nativeObj = VideoWriter_4(str, i, i2, d, size.width, size.height);
    }

    public VideoWriter(String str, int i, double d, Size size, MatOfInt matOfInt) {
        this.nativeObj = VideoWriter_5(str, i, d, size.width, size.height, matOfInt.nativeObj);
    }

    public VideoWriter(String str, int i, int i2, double d, Size size, MatOfInt matOfInt) {
        this.nativeObj = VideoWriter_6(str, i, i2, d, size.width, size.height, matOfInt.nativeObj);
    }

    public boolean open(String str, int i, double d, Size size, boolean z) {
        return open_0(this.nativeObj, str, i, d, size.width, size.height, z);
    }

    public boolean open(String str, int i, double d, Size size) {
        return open_1(this.nativeObj, str, i, d, size.width, size.height);
    }

    public boolean open(String str, int i, int i2, double d, Size size, boolean z) {
        return open_2(this.nativeObj, str, i, i2, d, size.width, size.height, z);
    }

    public boolean open(String str, int i, int i2, double d, Size size) {
        return open_3(this.nativeObj, str, i, i2, d, size.width, size.height);
    }

    public boolean open(String str, int i, double d, Size size, MatOfInt matOfInt) {
        return open_4(this.nativeObj, str, i, d, size.width, size.height, matOfInt.nativeObj);
    }

    public boolean open(String str, int i, int i2, double d, Size size, MatOfInt matOfInt) {
        return open_5(this.nativeObj, str, i, i2, d, size.width, size.height, matOfInt.nativeObj);
    }

    public boolean isOpened() {
        return isOpened_0(this.nativeObj);
    }

    public void release() {
        release_0(this.nativeObj);
    }

    public void write(Mat mat) {
        write_0(this.nativeObj, mat.nativeObj);
    }

    public boolean set(int i, double d) {
        return set_0(this.nativeObj, i, d);
    }

    public double get(int i) {
        return get_0(this.nativeObj, i);
    }

    public static int fourcc(char c, char c2, char c3, char c4) {
        return fourcc_0(c, c2, c3, c4);
    }

    public String getBackendName() {
        return getBackendName_0(this.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

