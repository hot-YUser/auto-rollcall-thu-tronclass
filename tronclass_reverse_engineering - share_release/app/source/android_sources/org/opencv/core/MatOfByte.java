package org.opencv.core;

import java.util.Arrays;
import java.util.List;
public class MatOfByte extends Mat {
    private static final int _channels = 1;
    private static final int _depth = 0;

    public MatOfByte() {
    }

    protected MatOfByte(long j) {
        super(j);
        if (!empty() && checkVector(1, 0) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public static MatOfByte fromNativeAddr(long j) {
        return new MatOfByte(j);
    }

    public MatOfByte(Mat mat) {
        super(mat, Range.all());
        if (!empty() && checkVector(1, 0) < 0) {
            throw new IllegalArgumentException("Incompatible Mat");
        }
    }

    public MatOfByte(byte... bArr) {
        fromArray(bArr);
    }

    public MatOfByte(int i, int i2, byte... bArr) {
        fromArray(i, i2, bArr);
    }

    public void alloc(int i) {
        if (i > 0) {
            super.create(i, 1, CvType.makeType(0, 1));
        }
    }

    public void fromArray(byte... bArr) {
        if (bArr == null || bArr.length == 0) {
            return;
        }
        alloc(bArr.length);
        put(0, 0, bArr);
    }

    public void fromArray(int i, int i2, byte... bArr) {
        if (i < 0) {
            throw new IllegalArgumentException("offset < 0");
        }
        bArr.getClass();
        if (i2 < 0 || i2 + i > bArr.length) {
            throw new IllegalArgumentException("invalid 'length' parameter: " + Integer.toString(i2));
        }
        if (bArr.length == 0) {
            return;
        }
        alloc(i2);
        put(0, 0, bArr, i, i2);
    }

    public byte[] toArray() {
        int iCheckVector = checkVector(1, 0);
        if (iCheckVector < 0) {
            throw new RuntimeException("Native Mat has unexpected type or size: " + toString());
        }
        byte[] bArr = new byte[iCheckVector];
        if (iCheckVector == 0) {
            return bArr;
        }
        get(0, 0, bArr);
        return bArr;
    }

    public void fromList(List<Byte> list) {
        if (list == null || list.size() == 0) {
            return;
        }
        Byte[] bArr = (Byte[]) list.toArray(new Byte[0]);
        byte[] bArr2 = new byte[bArr.length];
        for (int i = 0; i < bArr.length; i++) {
            bArr2[i] = bArr[i].byteValue();
        }
        fromArray(bArr2);
    }

    public List<Byte> toList() {
        byte[] array = toArray();
        Byte[] bArr = new Byte[array.length];
        for (int i = 0; i < array.length; i++) {
            bArr[i] = Byte.valueOf(array[i]);
        }
        return Arrays.asList(bArr);
    }
}

