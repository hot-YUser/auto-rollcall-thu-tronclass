package org.opencv.features2d;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.Mat;
import org.opencv.utils.Converters;
public class BOWTrainer {
    protected final long nativeObj;

    private static native void add_0(long j, long j2);

    private static native void clear_0(long j);

    private static native long cluster_0(long j);

    private static native long cluster_1(long j, long j2);

    private static native void delete(long j);

    private static native int descriptorsCount_0(long j);

    private static native long getDescriptors_0(long j);

    protected BOWTrainer(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static BOWTrainer __fromPtr__(long j) {
        return new BOWTrainer(j);
    }

    public void add(Mat mat) {
        add_0(this.nativeObj, mat.nativeObj);
    }

    public List<Mat> getDescriptors() {
        ArrayList arrayList = new ArrayList();
        Converters.Mat_to_vector_Mat(new Mat(getDescriptors_0(this.nativeObj)), arrayList);
        return arrayList;
    }

    public int descriptorsCount() {
        return descriptorsCount_0(this.nativeObj);
    }

    public void clear() {
        clear_0(this.nativeObj);
    }

    public Mat cluster() {
        return new Mat(cluster_0(this.nativeObj));
    }

    public Mat cluster(Mat mat) {
        return new Mat(cluster_1(this.nativeObj, mat.nativeObj));
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

