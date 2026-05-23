package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfRect2d extends Mat {
    private static final int _channels = 4;
    private static final int _depth = 6;

    public MatOfRect2d() {
    }

    protected MatOfRect2d(long j) {
        super(j);
        if (!empty() && checkVector(4, 6) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfRect2d fromNativeAddr(long j) {
        return new MatOfRect2d(j);
    }

    public MatOfRect2d(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(4, 6) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfRect2d(Rect2d... rect2dArr) {
        fromArray(rect2dArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(6, 4));
        }
    }

    public void fromArray(Rect2d... rect2dArr) {
        if (rect2dArr == null || rect2dArr.length == 0) {
            return;
        }
        int length = rect2dArr.length;
        alloc(length);
        double[] dArr = new double[length * 4];
        for (int i = 0; i < length; i++) {
            Rect2d rect2d = rect2dArr[i];
            int i2 = i * 4;
            dArr[i2] = rect2d.x;
            dArr[i2 + 1] = rect2d.y;
            dArr[i2 + 2] = rect2d.width;
            dArr[i2 + 3] = rect2d.height;
        }
        put(0, 0, dArr);
    }

    public Rect2d[] toArray() {
        int i = (int) total();
        Rect2d[] rect2dArr = new Rect2d[i];
        if (i == 0) {
            return rect2dArr;
        }
        double[] dArr = new double[i * 4];
        get(0, 0, dArr);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 4;
            rect2dArr[i2] = new Rect2d(dArr[i3], dArr[i3 + 1], dArr[i3 + 2], dArr[i3 + 3]);
        }
        return rect2dArr;
    }

    public void fromList(List<Rect2d> list) {
        fromArray((Rect2d[]) list.toArray(new Rect2d[0]));
    }

    public List<Rect2d> toList() {
        return Arrays.asList(toArray());
    }
}

