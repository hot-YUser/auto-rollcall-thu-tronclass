package org.opencv.core;

import androidx.camera.video.AudioStats;
public class Point3 {
    public double x;
    public double y;
    public double z;

    public Point3(double d, double d2, double d3) {
        this.x = d;
        this.y = d2;
        this.z = d3;
    }

    public Point3() {
        this(AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE);
    }

    public Point3(Point point) {
        this.x = point.x;
        this.y = point.y;
        this.z = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public Point3(double[] dArr) {
        this();
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.x = dArr.length > 0 ? dArr[0] : 0.0d;
            this.y = dArr.length > 1 ? dArr[1] : 0.0d;
            if (dArr.length > 2) {
                d = dArr[2];
            }
            this.z = d;
            return;
        }
        this.x = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.y = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.z = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public Point3 clone() {
        return new Point3(this.x, this.y, this.z);
    }

    public double dot(Point3 point3) {
        return (this.x * point3.x) + (this.y * point3.y) + (this.z * point3.z);
    }

    public Point3 cross(Point3 point3) {
        double d = this.y;
        double d2 = point3.z;
        double d3 = this.z;
        double d4 = point3.y;
        double d5 = (d * d2) - (d3 * d4);
        double d6 = point3.x;
        double d7 = this.x;
        return new Point3(d5, (d3 * d6) - (d2 * d7), (d7 * d4) - (d * d6));
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.x);
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.y);
        int i = ((((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31) * 31) + ((int) (jDoubleToLongBits2 ^ (jDoubleToLongBits2 >>> 32)));
        long jDoubleToLongBits3 = Double.doubleToLongBits(this.z);
        return (i * 31) + ((int) ((jDoubleToLongBits3 >>> 32) ^ jDoubleToLongBits3));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Point3)) {
            return false;
        }
        Point3 point3 = (Point3) obj;
        return this.x == point3.x && this.y == point3.y && this.z == point3.z;
    }

    public String toString() {
        return "{" + this.x + ", " + this.y + ", " + this.z + "}";
    }
}

