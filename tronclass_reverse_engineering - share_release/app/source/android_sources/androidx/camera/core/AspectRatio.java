package androidx.camera.core;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public class AspectRatio {
    public static final int RATIO_16_9 = 1;
    public static final int RATIO_4_3 = 0;
    public static final int RATIO_DEFAULT = -1;

    @Retention(RetentionPolicy.SOURCE)
    public @interface Ratio {
    }

    private AspectRatio() {
    }
}

