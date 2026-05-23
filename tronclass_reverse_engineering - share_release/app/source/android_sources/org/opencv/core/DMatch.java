package org.opencv.core;
public class DMatch {
    public float distance;
    public int imgIdx;
    public int queryIdx;
    public int trainIdx;

    public DMatch() {
        this(-1, -1, Float.MAX_VALUE);
    }

    public DMatch(int i, int i2, float f) {
        this.queryIdx = i;
        this.trainIdx = i2;
        this.imgIdx = -1;
        this.distance = f;
    }

    public DMatch(int i, int i2, int i3, float f) {
        this.queryIdx = i;
        this.trainIdx = i2;
        this.imgIdx = i3;
        this.distance = f;
    }

    public boolean lessThan(DMatch dMatch) {
        return this.distance < dMatch.distance;
    }

    public String toString() {
        return "DMatch [queryIdx=" + this.queryIdx + ", trainIdx=" + this.trainIdx + ", imgIdx=" + this.imgIdx + ", distance=" + this.distance + "]";
    }
}

