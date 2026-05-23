package org.opencv.core;

import androidx.camera.video.AudioStats;
public class Size {
    public double height;
    public double width;

    public Size(double d, double d2) {
        this.width = d;
        this.height = d2;
    }

    public Size() {
        this(AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE);
    }

    public Size(Point point) {
        this.width = point.x;
        this.height = point.y;
    }

    public Size(double[] dArr) {
        set(dArr);
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            this.width = dArr.length > 0 ? dArr[0] : 0.0d;
            if (dArr.length > 1) {
                d = dArr[1];
            }
            this.height = d;
            return;
        }
        this.width = AudioStats.AUDIO_AMPLITUDE_NONE;
        this.height = AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public double area() {
        return this.width * this.height;
    }

    public boolean empty() {
        return this.width <= AudioStats.AUDIO_AMPLITUDE_NONE || this.height <= AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public Size clone() {
        return new Size(this.width, this.height);
    }

    public int hashCode() {
        long jDoubleToLongBits = Double.doubleToLongBits(this.height);
        int i = ((int) (jDoubleToLongBits ^ (jDoubleToLongBits >>> 32))) + 31;
        long jDoubleToLongBits2 = Double.doubleToLongBits(this.width);
        return (i * 31) + ((int) ((jDoubleToLongBits2 >>> 32) ^ jDoubleToLongBits2));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Size)) {
            return false;
        }
        Size size = (Size) obj;
        return this.width == size.width && this.height == size.height;
    }

    public String toString() {
        return ((int) this.width) + "x" + ((int) this.height);
    }
}

