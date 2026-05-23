package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfInt4 extends Mat {
    private static final int _channels = 4;
    private static final int _depth = 4;

    public MatOfInt4() {
    }

    protected MatOfInt4(long j) {
        super(j);
        if (!empty() && checkVector(4, 4) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfInt4 fromNativeAddr(long j) {
        return new MatOfInt4(j);
    }

    public MatOfInt4(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(4, 4) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfInt4(int... iArr) {
        fromArray(iArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(4, 4));
        }
    }

    public void fromArray(int... iArr) {
        if (iArr == null || iArr.length == 0) {
            return;
        }
        alloc(iArr.length / 4);
        put(0, 0, iArr);
    }

    public int[] toArray() {
        int iCheckVector = checkVector(4, 4);
        if (iCheckVector < 0) {
            throw new RuntimeException("Native Mat has unexpected type or size: " + toString());
        }
        int[] iArr = new int[iCheckVector * 4];
        if (iCheckVector == 0) {
            return iArr;
        }
        get(0, 0, iArr);
        return iArr;
    }

    public void fromList(List<Integer> list) {
        if (list == null || list.size() == 0) {
            return;
        }
        Integer[] numArr = (Integer[]) list.toArray(new Integer[0]);
        int[] iArr = new int[numArr.length];
        for (int i = 0; i < numArr.length; i++) {
            iArr[i] = numArr[i].intValue();
        }
        fromArray(iArr);
    }

    public List<Integer> toList() {
        int[] array = toArray();
        Integer[] numArr = new Integer[array.length];
        for (int i = 0; i < array.length; i++) {
            numArr[i] = Integer.valueOf(array[i]);
        }
        return Arrays.asList(numArr);
    }
}

