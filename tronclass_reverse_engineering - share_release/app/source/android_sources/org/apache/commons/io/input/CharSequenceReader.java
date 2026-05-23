package org.apache.commons.io.input;

import java.io.Reader;
import java.io.Serializable;
public class CharSequenceReader extends Reader implements Serializable {
    private final CharSequence charSequence;
    private int idx;
    private int mark;

    @Override // java.io.Reader
    public boolean markSupported() {
        return true;
    }

    public CharSequenceReader(String str) {
        this.charSequence = str == null ? "" : str;
    }

    @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.idx = 0;
        this.mark = 0;
    }

    @Override // java.io.Reader
    public void mark(int i) {
        this.mark = this.idx;
    }

    @Override // java.io.Reader
    public int read() {
        if (this.idx >= this.charSequence.length()) {
            return -1;
        }
        CharSequence charSequence = this.charSequence;
        int i = this.idx;
        this.idx = i + 1;
        return charSequence.charAt(i);
    }

    @Override // java.io.Reader
    public int read(char[] cArr, int i, int i2) {
        if (this.idx >= this.charSequence.length()) {
            return -1;
        }
        if (cArr == null) {
            throw new NullPointerException("Character array is missing");
        }
        if (i2 < 0 || i < 0 || i + i2 > cArr.length) {
            throw new IndexOutOfBoundsException("Array Size=" + cArr.length + ", offset=" + i + ", length=" + i2);
        }
        int i3 = 0;
        for (int i4 = 0; i4 < i2; i4++) {
            int i5 = read();
            if (i5 == -1) {
                return i3;
            }
            cArr[i + i4] = (char) i5;
            i3++;
        }
        return i3;
    }

    @Override // java.io.Reader
    public void reset() {
        this.idx = this.mark;
    }

    @Override // java.io.Reader
    public long skip(long j) {
        if (j < 0) {
            throw new IllegalArgumentException("Number of characters to skip is less than zero: " + j);
        }
        if (this.idx >= this.charSequence.length()) {
            return -1L;
        }
        int iMin = (int) Math.min(this.charSequence.length(), ((long) this.idx) + j);
        int i = iMin - this.idx;
        this.idx = iMin;
        return i;
    }

    public String toString() {
        return this.charSequence.toString();
    }
}

