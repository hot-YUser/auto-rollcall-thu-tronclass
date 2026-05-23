package androidx.camera.core.impl.utils;

import android.opengl.Matrix;
import java.util.Locale;
public final class MatrixExt {
    private static final float[] sTemp = new float[16];

    private MatrixExt() {
    }

    public static void setRotate(float[] fArr, float f, float f2, float f3) {
        Matrix.setIdentityM(fArr, 0);
        preRotate(fArr, f, f2, f3);
    }

    public static void preRotate(float[] fArr, float f, float f2, float f3) {
        normalize(fArr, f2, f3);
        Matrix.rotateM(fArr, 0, f, 0.0f, 0.0f, 1.0f);
        denormalize(fArr, f2, f3);
    }

    public static void postRotate(float[] fArr, float f, float f2, float f3) {
        float[] fArr2 = sTemp;
        synchronized (fArr2) {
            Matrix.setIdentityM(fArr2, 0);
            normalize(fArr2, f2, f3);
            Matrix.rotateM(fArr2, 0, f, 0.0f, 0.0f, 1.0f);
            denormalize(fArr2, f2, f3);
            Matrix.multiplyMM(fArr, 0, fArr2, 0, fArr, 0);
        }
    }

    public static void preVerticalFlip(float[] fArr, float f) {
        normalize(fArr, 0.0f, f);
        Matrix.scaleM(fArr, 0, 1.0f, -1.0f, 1.0f);
        denormalize(fArr, 0.0f, f);
    }

    public static String toString(float[] fArr, int i) {
        return String.format(Locale.US, "Matrix:\n%2.1f %2.1f %2.1f %2.1f\n%2.1f %2.1f %2.1f %2.1f\n%2.1f %2.1f %2.1f %2.1f\n%2.1f %2.1f %2.1f %2.1f", Float.valueOf(fArr[i]), Float.valueOf(fArr[i + 4]), Float.valueOf(fArr[i + 8]), Float.valueOf(fArr[i + 12]), Float.valueOf(fArr[i + 1]), Float.valueOf(fArr[i + 5]), Float.valueOf(fArr[i + 9]), Float.valueOf(fArr[i + 13]), Float.valueOf(fArr[i + 2]), Float.valueOf(fArr[i + 6]), Float.valueOf(fArr[i + 10]), Float.valueOf(fArr[i + 14]), Float.valueOf(fArr[i + 3]), Float.valueOf(fArr[i + 7]), Float.valueOf(fArr[i + 11]), Float.valueOf(fArr[i + 15]));
    }

    private static void normalize(float[] fArr, float f, float f2) {
        Matrix.translateM(fArr, 0, f, f2, 0.0f);
    }

    private static void denormalize(float[] fArr, float f, float f2) {
        Matrix.translateM(fArr, 0, -f, -f2, 0.0f);
    }
}

