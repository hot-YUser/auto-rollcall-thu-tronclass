package androidx.camera.core.resolutionselector;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class ResolutionSelector {
    public static final int PREFER_CAPTURE_RATE_OVER_HIGHER_RESOLUTION = 0;
    public static final int PREFER_HIGHER_RESOLUTION_OVER_CAPTURE_RATE = 1;
    private final int mAllowedResolutionMode;
    private final AspectRatioStrategy mAspectRatioStrategy;
    private final ResolutionFilter mResolutionFilter;
    private final ResolutionStrategy mResolutionStrategy;

    @Retention(RetentionPolicy.SOURCE)
    public @interface AllowedResolutionMode {
    }

    ResolutionSelector(AspectRatioStrategy aspectRatioStrategy, ResolutionStrategy resolutionStrategy, ResolutionFilter resolutionFilter, int i) {
        this.mAspectRatioStrategy = aspectRatioStrategy;
        this.mResolutionStrategy = resolutionStrategy;
        this.mResolutionFilter = resolutionFilter;
        this.mAllowedResolutionMode = i;
    }

    public AspectRatioStrategy getAspectRatioStrategy() {
        return this.mAspectRatioStrategy;
    }

    public ResolutionStrategy getResolutionStrategy() {
        return this.mResolutionStrategy;
    }

    public ResolutionFilter getResolutionFilter() {
        return this.mResolutionFilter;
    }

    public int getAllowedResolutionMode() {
        return this.mAllowedResolutionMode;
    }

    public static final class Builder {
        private int mAllowedResolutionMode;
        private AspectRatioStrategy mAspectRatioStrategy;
        private ResolutionFilter mResolutionFilter;
        private ResolutionStrategy mResolutionStrategy;

        public Builder() {
            this.mAspectRatioStrategy = AspectRatioStrategy.RATIO_4_3_FALLBACK_AUTO_STRATEGY;
            this.mResolutionStrategy = null;
            this.mResolutionFilter = null;
            this.mAllowedResolutionMode = 0;
        }

        private Builder(ResolutionSelector resolutionSelector) {
            this.mAspectRatioStrategy = AspectRatioStrategy.RATIO_4_3_FALLBACK_AUTO_STRATEGY;
            this.mResolutionStrategy = null;
            this.mResolutionFilter = null;
            this.mAllowedResolutionMode = 0;
            this.mAspectRatioStrategy = resolutionSelector.getAspectRatioStrategy();
            this.mResolutionStrategy = resolutionSelector.getResolutionStrategy();
            this.mResolutionFilter = resolutionSelector.getResolutionFilter();
            this.mAllowedResolutionMode = resolutionSelector.getAllowedResolutionMode();
        }

        public static Builder fromResolutionSelector(ResolutionSelector resolutionSelector) {
            return new Builder(resolutionSelector);
        }

        public Builder setAspectRatioStrategy(AspectRatioStrategy aspectRatioStrategy) {
            this.mAspectRatioStrategy = aspectRatioStrategy;
            return this;
        }

        public Builder setResolutionStrategy(ResolutionStrategy resolutionStrategy) {
            this.mResolutionStrategy = resolutionStrategy;
            return this;
        }

        public Builder setResolutionFilter(ResolutionFilter resolutionFilter) {
            this.mResolutionFilter = resolutionFilter;
            return this;
        }

        public Builder setAllowedResolutionMode(int i) {
            this.mAllowedResolutionMode = i;
            return this;
        }

        public ResolutionSelector build() {
            return new ResolutionSelector(this.mAspectRatioStrategy, this.mResolutionStrategy, this.mResolutionFilter, this.mAllowedResolutionMode);
        }
    }
}

