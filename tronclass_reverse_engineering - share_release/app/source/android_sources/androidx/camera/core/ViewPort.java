package androidx.camera.core;

import android.util.Rational;
import androidx.core.util.Preconditions;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class ViewPort {
    public static final int FILL_CENTER = 1;
    public static final int FILL_END = 2;
    public static final int FILL_START = 0;
    public static final int FIT = 3;
    private Rational mAspectRatio;
    private int mLayoutDirection;
    private int mRotation;
    private int mScaleType;

    @Retention(RetentionPolicy.SOURCE)
    public @interface LayoutDirection {
    }

    @Retention(RetentionPolicy.SOURCE)
    public @interface ScaleType {
    }

    ViewPort(int i, Rational rational, int i2, int i3) {
        this.mScaleType = i;
        this.mAspectRatio = rational;
        this.mRotation = i2;
        this.mLayoutDirection = i3;
    }

    public Rational getAspectRatio() {
        return this.mAspectRatio;
    }

    public int getRotation() {
        return this.mRotation;
    }

    public int getScaleType() {
        return this.mScaleType;
    }

    public int getLayoutDirection() {
        return this.mLayoutDirection;
    }

    public static final class Builder {
        private static final int DEFAULT_LAYOUT_DIRECTION = 0;
        private static final int DEFAULT_SCALE_TYPE = 1;
        private final Rational mAspectRatio;
        private final int mRotation;
        private int mScaleType = 1;
        private int mLayoutDirection = 0;

        public Builder(Rational rational, int i) {
            this.mAspectRatio = rational;
            this.mRotation = i;
        }

        public Builder setScaleType(int i) {
            this.mScaleType = i;
            return this;
        }

        public Builder setLayoutDirection(int i) {
            this.mLayoutDirection = i;
            return this;
        }

        public ViewPort build() {
            Preconditions.checkNotNull(this.mAspectRatio, "The crop aspect ratio must be set.");
            return new ViewPort(this.mScaleType, this.mAspectRatio, this.mRotation, this.mLayoutDirection);
        }
    }
}

