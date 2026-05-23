package androidx.camera.camera2.internal;
public class LensFacingUtil {
    private LensFacingUtil() {
    }

    public static int getCameraSelectorLensFacing(int i) {
        if (i == 0) {
            return 0;
        }
        if (i == 1) {
            return 1;
        }
        if (i == 2) {
            return 2;
        }
        throw new IllegalArgumentException("The given lens facing integer: " + i + " can not be recognized.");
    }

    public static int getLensFacingInt(int i) {
        if (i == 0) {
            return 0;
        }
        if (i == 1) {
            return 1;
        }
        if (i == 2) {
            return 2;
        }
        throw new IllegalArgumentException("The given lens facing: " + i + " can not be recognized.");
    }
}

