package org.opencv.core;

import androidx.camera.video.AudioStats;
public class RotatedRect {
    public double angle;
    public Point center;
    public Size size;

    public RotatedRect() {
        this.center = new Point();
        this.size = new Size();
        this.angle = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public RotatedRect(Point point, Size size, double d) {
        this.center = point.clone();
        this.size = size.clone();
        this.angle = d;
    }

    public RotatedRect(double[] dArr) {
        this();
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.center.x = dArr.length > 0 ? dArr[0] : 0.0d;
            this.center.y = dArr.length > 1 ? dArr[1] : 0.0d;
            this.size.width = dArr.length > 2 ? dArr[2] : 0.0d;
            this.size.height = dArr.length > 3 ? dArr[3] : 0.0d;
            if (dArr.length > 4) {
                d = dArr[4];
            }
            this.angle = d;
            return;
        }
        this.center.x = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.center.y = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.size.width = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.size.height = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.angle = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public void points(Point[] pointArr) {
        double d = (this.angle * 3.141592653589793d) / 180.0d;
        double dCos = Math.cos(d) * 0.5d;
        double dSin = Math.sin(d) * 0.5d;
        pointArr[0] = new Point((this.center.x - (this.size.height * dSin)) - (this.size.width * dCos), (this.center.y + (this.size.height * dCos)) - (this.size.width * dSin));
        pointArr[1] = new Point((this.center.x + (this.size.height * dSin)) - (this.size.width * dCos), (this.center.y - (dCos * this.size.height)) - (dSin * this.size.width));
        pointArr[2] = new Point((this.center.x * 2.0d) - pointArr[0].x, (this.center.y * 2.0d) - pointArr[0].y);
        pointArr[3] = new Point((this.center.x * 2.0d) - pointArr[1].x, (this.center.y * 2.0d) - pointArr[1].y);
    }

    public Rect boundingRect() {
        Point[] pointArr = new Point[4];
        points(pointArr);
        Rect rect = new Rect((int) Math.floor(Math.min(Math.min(Math.min(pointArr[0].x, pointArr[1].x), pointArr[2].x), pointArr[3].x)), (int) Math.floor(Math.min(Math.min(Math.min(pointArr[0].y, pointArr[1].y), pointArr[2].y), pointArr[3].y)), (int) Math.ceil(Math.max(Math.max(Math.max(pointArr[0].x, pointArr[1].x), pointArr[2].x), pointArr[3].x)), (int) Math.ceil(Math.max(Math.max(Math.max(pointArr[0].y, pointArr[1].y), pointArr[2].y), pointArr[3].y)));
        rect.width -= rect.x - 1;
        rect.height -= rect.y - 1;
        return rect;
    }

    public RotatedRect clone() {
        return new RotatedRect(this.center, this.size, this.angle);
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.center.x);
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.center.y);
        int i = ((((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31) * 31) + ((int) (jDoubleToLongBits2 ^ (jDoubleToLongBits2 >>> 32)));
        long jDoubleToLongBits3 = Double.doubleToLongBits(this.size.width);
        int i2 = (i * 31) + ((int) (jDoubleToLongBits3 ^ (jDoubleToLongBits3 >>> 32)));
        long jDoubleToLongBits4 = Double.doubleToLongBits(this.size.height);
        int i3 = (i2 * 31) + ((int) (jDoubleToLongBits4 ^ (jDoubleToLongBits4 >>> 32)));
        long jDoubleToLongBits5 = Double.doubleToLongBits(this.angle);
        return (i3 * 31) + ((int) ((jDoubleToLongBits5 >>> 32) ^ jDoubleToLongBits5));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof RotatedRect)) {
            return false;
        }
        RotatedRect rotatedRect = (RotatedRect) obj;
        return this.center.equals(rotatedRect.center) && this.size.equals(rotatedRect.size) && this.angle == rotatedRect.angle;
    }

    public String toString() {
        return "{ " + this.center + " " + this.size + " * " + this.angle + " }";
    }
}

