package androidx.camera.core.resolutionselector;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class AspectRatioStrategy {
    public static final int FALLBACK_RULE_AUTO = 1;
    public static final int FALLBACK_RULE_NONE = 0;
    private final int mFallbackRule;
    private final int mPreferredAspectRatio;
    public static final AspectRatioStrategy RATIO_4_3_FALLBACK_AUTO_STRATEGY = new AspectRatioStrategy(0, 1);
    public static final AspectRatioStrategy RATIO_16_9_FALLBACK_AUTO_STRATEGY = new AspectRatioStrategy(1, 1);

    @Retention(RetentionPolicy.SOURCE)
    public @interface AspectRatioFallbackRule {
    }

    public AspectRatioStrategy(int i, int i2) {
        this.mPreferredAspectRatio = i;
        this.mFallbackRule = i2;
    }

    public int getPreferredAspectRatio() {
        return this.mPreferredAspectRatio;
    }

    public int getFallbackRule() {
        return this.mFallbackRule;
    }
}

