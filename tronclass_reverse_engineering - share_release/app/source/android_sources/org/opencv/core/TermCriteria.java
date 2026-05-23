package org.opencv.core;

import androidx.camera.video.AudioStats;
public class TermCriteria {
    public static final int COUNT = 1;
    public static final int EPS = 2;
    public static final int MAX_ITER = 1;
    public double epsilon;
    public int maxCount;
    public int type;

    public TermCriteria(int i, int i2, double d) {
        this.type = i;
        this.maxCount = i2;
        this.epsilon = d;
    }

    public TermCriteria() {
        this(0, 0, AudioStats.AUDIO_AMPLITUDE_NONE);
    }

    public TermCriteria(double[] dArr) {
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.type = dArr.length > 0 ? (int) dArr[0] : 0;
            this.maxCount = dArr.length > 1 ? (int) dArr[1] : 0;
            if (dArr.length > 2) {
                d = dArr[2];
            }
            this.epsilon = d;
            return;
        }
        this.type = 0;
        this.maxCount = 0;
        this.epsilon = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public TermCriteria clone() {
        return new TermCriteria(this.type, this.maxCount, this.epsilon);
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.type);
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.maxCount);
        int i = ((((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31) * 31) + ((int) (jDoubleToLongBits2 ^ (jDoubleToLongBits2 >>> 32)));
        long jDoubleToLongBits3 = Double.doubleToLongBits(this.epsilon);
        return (i * 31) + ((int) ((jDoubleToLongBits3 >>> 32) ^ jDoubleToLongBits3));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof TermCriteria)) {
            return false;
        }
        TermCriteria termCriteria = (TermCriteria) obj;
        return this.type == termCriteria.type && this.maxCount == termCriteria.maxCount && this.epsilon == termCriteria.epsilon;
    }

    public String toString() {
        return "{ type: " + this.type + ", maxCount: " + this.maxCount + ", epsilon: " + this.epsilon + "}";
    }
}

