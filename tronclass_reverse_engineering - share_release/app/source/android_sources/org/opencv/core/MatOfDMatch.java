package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfDMatch extends Mat {
    private static final int _channels = 4;
    private static final int _depth = 5;

    public MatOfDMatch() {
    }

    protected MatOfDMatch(long j) {
        super(j);
        if (!empty() && checkVector(4, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat: " + toString());
        }
    }

    public static MatOfDMatch fromNativeAddr(long j) {
        return new MatOfDMatch(j);
    }

    public MatOfDMatch(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(4, 5) < 0) {
            throw new IllegalArgumentException("Incompatible Mat: " + toString());
        }
    }

    public MatOfDMatch(DMatch... dMatchArr) {
        fromArray(dMatchArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(5, 4));
        }
    }

    public void fromArray(DMatch... dMatchArr) {
        if (dMatchArr == null || dMatchArr.length == 0) {
            return;
        }
        int length = dMatchArr.length;
        alloc(length);
        float[] fArr = new float[length * 4];
        for (int i = 0; i < length; i++) {
            DMatch dMatch = dMatchArr[i];
            int i2 = i * 4;
            fArr[i2] = dMatch.queryIdx;
            fArr[i2 + 1] = dMatch.trainIdx;
            fArr[i2 + 2] = dMatch.imgIdx;
            fArr[i2 + 3] = dMatch.distance;
        }
        put(0, 0, fArr);
    }

    public DMatch[] toArray() {
        int i = (int) total();
        DMatch[] dMatchArr = new DMatch[i];
        if (i == 0) {
            return dMatchArr;
        }
        float[] fArr = new float[i * 4];
        get(0, 0, fArr);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 4;
            dMatchArr[i2] = new DMatch((int) fArr[i3], (int) fArr[i3 + 1], (int) fArr[i3 + 2], fArr[i3 + 3]);
        }
        return dMatchArr;
    }

    public void fromList(List<DMatch> list) {
        fromArray((DMatch[]) list.toArray(new DMatch[0]));
    }

    public List<DMatch> toList() {
        return Arrays.asList(toArray());
    }
}

