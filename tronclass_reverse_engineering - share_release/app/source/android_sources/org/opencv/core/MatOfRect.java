package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfRect extends Mat {
    private static final int _channels = 4;
    private static final int _depth = 4;

    public MatOfRect() {
    }

    protected MatOfRect(long j) {
        super(j);
        if (!empty() && checkVector(4, 4) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfRect fromNativeAddr(long j) {
        return new MatOfRect(j);
    }

    public MatOfRect(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(4, 4) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfRect(Rect... rectArr) {
        fromArray(rectArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(4, 4));
        }
    }

    public void fromArray(Rect... rectArr) {
        if (rectArr == null || rectArr.length == 0) {
            return;
        }
        int length = rectArr.length;
        alloc(length);
        int[] iArr = new int[length * 4];
        for (int i = 0; i < length; i++) {
            Rect rect = rectArr[i];
            int i2 = i * 4;
            iArr[i2] = rect.x;
            iArr[i2 + 1] = rect.y;
            iArr[i2 + 2] = rect.width;
            iArr[i2 + 3] = rect.height;
        }
        put(0, 0, iArr);
    }

    public Rect[] toArray() {
        int i = (int) total();
        Rect[] rectArr = new Rect[i];
        if (i == 0) {
            return rectArr;
        }
        int[] iArr = new int[i * 4];
        get(0, 0, iArr);
        for (int i2 = 0; i2 < i; i2++) {
            int i3 = i2 * 4;
            rectArr[i2] = new Rect(iArr[i3], iArr[i3 + 1], iArr[i3 + 2], iArr[i3 + 3]);
        }
        return rectArr;
    }

    public void fromList(List<Rect> list) {
        fromArray((Rect[]) list.toArray(new Rect[0]));
    }

    public List<Rect> toList() {
        return Arrays.asList(toArray());
    }
}

