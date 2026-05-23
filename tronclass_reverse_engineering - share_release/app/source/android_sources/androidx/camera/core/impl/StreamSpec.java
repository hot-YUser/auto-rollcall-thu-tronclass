package androidx.camera.core.impl;

import android.util.Range;
import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.impl.AutoValue_StreamSpec;
public abstract class StreamSpec {
    public static final Range<Integer> FRAME_RATE_RANGE_UNSPECIFIED = new Range<>(0, 0);

    public abstract DynamicRange getDynamicRange();

    public abstract Range<Integer> getExpectedFrameRateRange();

    public abstract Config getImplementationOptions();

    public abstract Size getResolution();

    public abstract Builder toBuilder();

    public static Builder builder(Size size) {
        return new AutoValue_StreamSpec.Builder().setResolution(size).setExpectedFrameRateRange(FRAME_RATE_RANGE_UNSPECIFIED).setDynamicRange(DynamicRange.SDR);
    }

    public static abstract class Builder {
        public abstract StreamSpec build();

        public abstract Builder setDynamicRange(DynamicRange dynamicRange);

        public abstract Builder setExpectedFrameRateRange(Range<Integer> range);

        public abstract Builder setImplementationOptions(Config config);

        public abstract Builder setResolution(Size size);

        Builder() {
        }
    }
}

