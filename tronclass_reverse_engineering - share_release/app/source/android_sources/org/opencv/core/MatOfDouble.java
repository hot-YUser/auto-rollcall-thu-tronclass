package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfDouble extends Mat {
    private static final int _channels = 1;
    private static final int _depth = 6;

    public MatOfDouble() {
    }

    protected MatOfDouble(long j) {
        super(j);
        if (!empty() && checkVector(1, 6) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfDouble fromNativeAddr(long j) {
        return new MatOfDouble(j);
    }

    public MatOfDouble(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(1, 6) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfDouble(double... dArr) {
        fromArray(dArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(6, 1));
        }
    }

    public void fromArray(double... dArr) {
        if (dArr == null || dArr.length == 0) {
            return;
        }
        alloc(dArr.length);
        put(0, 0, dArr);
    }

    public double[] toArray() {
        int iCheckVector = checkVector(1, 6);
        if (iCheckVector < 0) {
            throw new RuntimeException("Native Mat has unexpected type or size: " + toString());
        }
        double[] dArr = new double[iCheckVector];
        if (iCheckVector == 0) {
            return dArr;
        }
        get(0, 0, dArr);
        return dArr;
    }

    public void fromList(List<Double> list) {
        if (list == null || list.size() == 0) {
            return;
        }
        Double[] dArr = (Double[]) list.toArray(new Double[0]);
        double[] dArr2 = new double[dArr.length];
        for (int i = 0; i < dArr.length; i++) {
            dArr2[i] = dArr[i].doubleValue();
        }
        fromArray(dArr2);
    }

    public List<Double> toList() {
        double[] array = toArray();
        Double[] dArr = new Double[array.length];
        for (int i = 0; i < array.length; i++) {
            dArr[i] = Double.valueOf(array[i]);
        }
        return Arrays.asList(dArr);
    }
}

