package org.opencv.core;

import androidx.camera.video.AudioStats;
public class Point {
    public double x;
    public double y;

    public Point(double d, double d2) {
        this.x = d;
        this.y = d2;
    }

    public Point() {
        this(AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE);
    }

    public Point(double[] dArr) {
        this();
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.x = dArr.length > 0 ? dArr[0] : 0.0d;
            if (dArr.length > 1) {
                d = dArr[1];
            }
            this.y = d;
            return;
        }
        this.x = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.y = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public Point clone() {
        return new Point(this.x, this.y);
    }

    public double dot(Point point) {
        return (this.x * point.x) + (this.y * point.y);
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.x);
        int i = ((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31;
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.y);
        return (i * 31) + ((int) ((jDoubleToLongBits2 >>> 32) ^ jDoubleToLongBits2));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Point)) {
            return false;
        }
        Point point = (Point) obj;
        return this.x == point.x && this.y == point.y;
    }

    public boolean inside(Rect rect) {
        return rect.contains(this);
    }

    public String toString() {
        return "{" + this.x + ", " + this.y + "}";
    }
}

