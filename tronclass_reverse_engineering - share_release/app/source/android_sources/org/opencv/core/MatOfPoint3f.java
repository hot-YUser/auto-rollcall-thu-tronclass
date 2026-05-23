package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfPoint3f extends Mat {
    private static final int _channels = 3;
    private static final int _depth = 5;

    public MatOfPoint3f() {
    }

    protected MatOfPoint3f(long j) {
        super(j);
        if (!empty() && checkVector(3, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfPoint3f fromNativeAddr(long j) {
        return new MatOfPoint3f(j);
    }

    public MatOfPoint3f(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(3, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfPoint3f(Point3... point3Arr) {
        fromArray(point3Arr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(5, 3));
        }
    }

    public void fromArray(Point3... point3Arr) {
        if (point3Arr == null || point3Arr.length == 0) {
            return;
        }
        int length = point3Arr.length;
        alloc(length);
        float[] fArr = new float[length * 3];
        for (int i = 0; i < length; i++) {
            Point3 point3 = point3Arr[i];
            int i2 = i * 3;
            fArr[i2] = (float) point3.x;
            fArr[i2 + 1] = (float) point3.y;
            fArr[i2 + 2] = (float) point3.z;
        }
        put(0, 0, fArr);
    }

    public Point3[] toArray() {
        int i = (int) total();
        Point3[] point3Arr = new Point3[i];
        if (i == 0) {
            return point3Arr;
        }
        get(0, 0, new float[i * 3]);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 3;
            point3Arr[i2] = new Point3(r2[i3], r2[i3 + 1], r2[i3 + 2]);
        }
        return point3Arr;
    }

    public void fromList(List<Point3> list) {
        fromArray((Point3[]) list.toArray(new Point3[0]));
    }

    public List<Point3> toList() {
        return Arrays.asList(toArray());
    }
}

