package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfKeyPoint extends Mat {
    private static final int _channels = 7;
    private static final int _depth = 5;

    public MatOfKeyPoint() {
    }

    protected MatOfKeyPoint(long j) {
        super(j);
        if (!empty() && checkVector(7, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfKeyPoint fromNativeAddr(long j) {
        return new MatOfKeyPoint(j);
    }

    public MatOfKeyPoint(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(7, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfKeyPoint(KeyPoint... keyPointArr) {
        fromArray(keyPointArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(5, 7));
        }
    }

    public void fromArray(KeyPoint... keyPointArr) {
        if (keyPointArr == null || keyPointArr.length == 0) {
            return;
        }
        int length = keyPointArr.length;
        alloc(length);
        float[] fArr = new float[length * 7];
        for (int i = 0; i < length; i++) {
            KeyPoint keyPoint = keyPointArr[i];
            int i2 = i * 7;
            fArr[i2] = (float) keyPoint.pt.x;
            fArr[i2 + 1] = (float) keyPoint.pt.y;
            fArr[i2 + 2] = keyPoint.size;
            fArr[i2 + 3] = keyPoint.angle;
            fArr[i2 + 4] = keyPoint.response;
            fArr[i2 + 5] = keyPoint.octave;
            fArr[i2 + 6] = keyPoint.class_id;
        }
        put(0, 0, fArr);
    }

    public KeyPoint[] toArray() {
        int i = (int) total();
        KeyPoint[] keyPointArr = new KeyPoint[i];
        if (i == 0) {
            return keyPointArr;
        }
        float[] fArr = new float[i * 7];
        get(0, 0, fArr);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 7;
            keyPointArr[i2] = new KeyPoint(fArr[i3], fArr[i3 + 1], fArr[i3 + 2], fArr[i3 + 3], fArr[i3 + 4], (int) fArr[i3 + 5], (int) fArr[i3 + 6]);
        }
        return keyPointArr;
    }

    public void fromList(List<KeyPoint> list) {
        fromArray((KeyPoint[]) list.toArray(new KeyPoint[0]));
    }

    public List<KeyPoint> toList() {
        return Arrays.asList(toArray());
    }
}

