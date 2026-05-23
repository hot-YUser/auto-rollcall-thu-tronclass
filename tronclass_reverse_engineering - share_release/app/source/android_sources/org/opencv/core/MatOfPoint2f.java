package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfPoint2f extends Mat {
    private static final int _channels = 2;
    private static final int _depth = 5;

    public MatOfPoint2f() {
    }

    protected MatOfPoint2f(long j) {
        super(j);
        if (!empty() && checkVector(2, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfPoint2f fromNativeAddr(long j) {
        return new MatOfPoint2f(j);
    }

    public MatOfPoint2f(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(2, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfPoint2f(Point... pointArr) {
        fromArray(pointArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(5, 2));
        }
    }

    public void fromArray(Point... pointArr) {
        if (pointArr == null || pointArr.length == 0) {
            return;
        }
        int length = pointArr.length;
        alloc(length);
        float[] fArr = new float[length * 2];
        for (int i = 0; i < length; i++) {
            Point point = pointArr[i];
            int i2 = i * 2;
            fArr[i2] = (float) point.x;
            fArr[i2 + 1] = (float) point.y;
        }
        put(0, 0, fArr);
    }

    public Point[] toArray() {
        int i = (int) total();
        Point[] pointArr = new Point[i];
        if (i == 0) {
            return pointArr;
        }
        get(0, 0, new float[i * 2]);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 2;
            pointArr[i2] = new Point(r2[i3], r2[i3 + 1]);
        }
        return pointArr;
    }

    public void fromList(List<Point> list) {
        fromArray((Point[]) list.toArray(new Point[0]));
    }

    public List<Point> toList() {
        return Arrays.asList(toArray());
    }
}

