package org.opencv.core;

import androidx.camera.video.AudioStats;
public class Rect2d {
    public double height;
    public double width;
    public double x;
    public double y;

    public Rect2d(double d, double d2, double d3, double d4) {
        this.x = d;
        this.y = d2;
        this.width = d3;
        this.height = d4;
    }

    public Rect2d() {
        this(AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE);
    }

    public Rect2d(Point point, Point point2) {
        this.x = point.x < point2.x ? point.x : point2.x;
        this.y = point.y < point2.y ? point.y : point2.y;
        this.width = (point.x > point2.x ? point.x : point2.x) - this.x;
        this.height = (point.y > point2.y ? point.y : point2.y) - this.y;
    }

    public Rect2d(Point point, Size size) {
        this(point.x, point.y, size.width, size.height);
    }

    public Rect2d(double[] dArr) {
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.x = dArr.length > 0 ? dArr[0] : 0.0d;
            this.y = dArr.length > 1 ? dArr[1] : 0.0d;
            this.width = dArr.length > 2 ? dArr[2] : 0.0d;
            if (dArr.length > 3) {
                d = dArr[3];
            }
            this.height = d;
            return;
        }
        this.x = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.y = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.width = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.height = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public Rect2d clone() {
        return new Rect2d(this.x, this.y, this.width, this.height);
    }

    public Point tl() {
        return new Point(this.x, this.y);
    }

    public Point br() {
        return new Point(this.x + this.width, this.y + this.height);
    }

    public Size size() {
        return new Size(this.width, this.height);
    }

    public double area() {
        return this.width * this.height;
    }

    public boolean empty() {
        return this.width <= AudioStats.AUDIO_AMPLITUDE_NONE || this.height <= AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public boolean contains(Point point) {
        return this.x <= point.x && point.x < this.x + this.width && this.y <= point.y && point.y < this.y + this.height;
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.height);
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.width);
        int i = ((((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31) * 31) + ((int) (jDoubleToLongBits2 ^ (jDoubleToLongBits2 >>> 32)));
        long jDoubleToLongBits3 = Double.doubleToLongBits(this.x);
        int i2 = (i * 31) + ((int) (jDoubleToLongBits3 ^ (jDoubleToLongBits3 >>> 32)));
        long jDoubleToLongBits4 = Double.doubleToLongBits(this.y);
        return (i2 * 31) + ((int) ((jDoubleToLongBits4 >>> 32) ^ jDoubleToLongBits4));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Rect2d)) {
            return false;
        }
        Rect2d rect2d = (Rect2d) obj;
        return this.x == rect2d.x && this.y == rect2d.y && this.width == rect2d.width && this.height == rect2d.height;
    }

    public String toString() {
        return "{" + this.x + ", " + this.y + ", " + this.width + "x" + this.height + "}";
    }
}

