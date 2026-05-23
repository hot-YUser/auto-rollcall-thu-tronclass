package androidx.camera.core.resolutionselector;

import android.util.Size;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class ResolutionStrategy {
    public static final int FALLBACK_RULE_CLOSEST_HIGHER = 2;
    public static final int FALLBACK_RULE_CLOSEST_HIGHER_THEN_LOWER = 1;
    public static final int FALLBACK_RULE_CLOSEST_LOWER = 4;
    public static final int FALLBACK_RULE_CLOSEST_LOWER_THEN_HIGHER = 3;
    public static final int FALLBACK_RULE_NONE = 0;
    public static final ResolutionStrategy HIGHEST_AVAILABLE_STRATEGY = new ResolutionStrategy();
    private Size mBoundSize;
    private int mFallbackRule;

    @Retention(RetentionPolicy.SOURCE)
    public @interface ResolutionFallbackRule {
    }

    private ResolutionStrategy() {
        this.mBoundSize = null;
        this.mFallbackRule = 0;
    }

    public ResolutionStrategy(Size size, int i) {
        this.mBoundSize = size;
        this.mFallbackRule = i;
    }

    public Size getBoundSize() {
        return this.mBoundSize;
    }

    public int getFallbackRule() {
        return this.mFallbackRule;
    }
}

