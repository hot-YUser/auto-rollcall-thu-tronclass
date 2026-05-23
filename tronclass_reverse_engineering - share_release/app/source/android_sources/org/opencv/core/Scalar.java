package org.opencv.core;

import androidx.camera.video.AudioStats;
import java.util.Arrays;
public class Scalar {
    public double[] val;

    public Scalar(double d, double d2, double d3, double d4) {
        this.val = new double[]{d, d2, d3, d4};
    }

    public Scalar(double d, double d2, double d3) {
        this.val = new double[]{d, d2, d3, AudioStats.AUDIO_AMPLITUDE_NONE};
    }

    public Scalar(double d, double d2) {
        this.val = new double[]{d, d2, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE};
    }

    public Scalar(double d) {
        this.val = new double[]{d, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE, AudioStats.AUDIO_AMPLITUDE_NONE};
    }

    public Scalar(double[] dArr) {
        if (dArr != null && dArr.length == 4) {
            this.val = (double[]) dArr.clone();
        } else {
            this.val = new double[4];
            set(dArr);
        }
    }

    public void set(double[] dArr) {
        double d = AudioStats.AUDIO_AMPLITUDE_NONE;
        if (dArr != null) {
            double[] dArr2 = this.val;
            dArr2[0] = dArr.length > 0 ? dArr[0] : 0.0d;
            dArr2[1] = dArr.length > 1 ? dArr[1] : 0.0d;
            dArr2[2] = dArr.length > 2 ? dArr[2] : 0.0d;
            if (dArr.length > 3) {
                d = dArr[3];
            }
            dArr2[3] = d;
            return;
        }
        double[] dArr3 = this.val;
        dArr3[3] = 0.0d;
        dArr3[2] = 0.0d;
        dArr3[1] = 0.0d;
        dArr3[0] = 0.0d;
    }

    public static Scalar all(double d) {
        return new Scalar(d, d, d, d);
    }

    public Scalar clone() {
        return new Scalar(this.val);
    }

    public Scalar mul(Scalar scalar, double d) {
        double[] dArr = this.val;
        double d2 = dArr[0];
        double[] dArr2 = scalar.val;
        return new Scalar(d2 * dArr2[0] * d, dArr[1] * dArr2[1] * d, dArr[2] * dArr2[2] * d, dArr[3] * dArr2[3] * d);
    }

    public Scalar mul(Scalar scalar) {
        return mul(scalar, 1.0d);
    }

    public Scalar conj() {
        double[] dArr = this.val;
        return new Scalar(dArr[0], -dArr[1], -dArr[2], -dArr[3]);
    }

    public boolean isReal() {
        double[] dArr = this.val;
        return dArr[1] == AudioStats.AUDIO_AMPLITUDE_NONE && dArr[2] == AudioStats.AUDIO_AMPLITUDE_NONE && dArr[3] == AudioStats.AUDIO_AMPLITUDE_NONE;
    }

    public int hashCode() {
        return 31 + Arrays.hashCode(this.val);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof Scalar) && Arrays.equals(this.val, ((Scalar) obj).val);
    }

    public String toString() {
        return "[" + this.val[0] + ", " + this.val[1] + ", " + this.val[2] + ", " + this.val[3] + "]";
    }
}

