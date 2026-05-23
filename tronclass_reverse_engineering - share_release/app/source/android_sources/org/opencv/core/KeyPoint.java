package org.opencv.core;
public class KeyPoint {
    public float angle;
    public int class_id;
    public int octave;
    public Point pt;
    public float response;
    public float size;

    public KeyPoint(float f, float f2, float f3, float f4, float f5, int i, int i2) {
        this.pt = new Point(f, f2);
        this.size = f3;
        this.angle = f4;
        this.response = f5;
        this.octave = i;
        this.class_id = i2;
    }

    public KeyPoint() {
        this(0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0, -1);
    }

    public KeyPoint(float f, float f2, float f3, float f4, float f5, int i) {
        this(f, f2, f3, f4, f5, i, -1);
    }

    public KeyPoint(float f, float f2, float f3, float f4, float f5) {
        this(f, f2, f3, f4, f5, 0, -1);
    }

    public KeyPoint(float f, float f2, float f3, float f4) {
        this(f, f2, f3, f4, 0.0f, 0, -1);
    }

    public KeyPoint(float f, float f2, float f3) {
        this(f, f2, f3, -1.0f, 0.0f, 0, -1);
    }

    public String toString() {
        return "KeyPoint [pt=" + this.pt + ", size=" + this.size + ", angle=" + this.angle + ", response=" + this.response + ", octave=" + this.octave + ", class_id=" + this.class_id + "]";
    }
}

