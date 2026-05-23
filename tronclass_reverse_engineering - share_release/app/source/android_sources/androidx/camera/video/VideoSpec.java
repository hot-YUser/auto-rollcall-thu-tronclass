package androidx.camera.video;

import android.util.Range;
import androidx.camera.video.AutoValue_VideoSpec;
import java.util.Arrays;
public abstract class VideoSpec {
    public static final Range<Integer> FRAME_RATE_RANGE_AUTO = new Range<>(0, Integer.MAX_VALUE);
    public static final Range<Integer> BITRATE_RANGE_AUTO = new Range<>(0, Integer.MAX_VALUE);
    public static final QualitySelector QUALITY_SELECTOR_AUTO = QualitySelector.fromOrderedList(Arrays.asList(Quality.FHD, Quality.HD, Quality.SD), FallbackStrategy.higherQualityOrLowerThan(Quality.FHD));

    abstract int getAspectRatio();

    public abstract Range<Integer> getBitrate();

    public abstract Range<Integer> getFrameRate();

    public abstract QualitySelector getQualitySelector();

    public abstract Builder toBuilder();

    VideoSpec() {
    }

    public static Builder builder() {
        return new AutoValue_VideoSpec.Builder().setQualitySelector(QUALITY_SELECTOR_AUTO).setFrameRate(FRAME_RATE_RANGE_AUTO).setBitrate(BITRATE_RANGE_AUTO).setAspectRatio(-1);
    }

    public static abstract class Builder {
        public abstract VideoSpec build();

        abstract Builder setAspectRatio(int i);

        public abstract Builder setBitrate(Range<Integer> range);

        public abstract Builder setFrameRate(Range<Integer> range);

        public abstract Builder setQualitySelector(QualitySelector qualitySelector);

        Builder() {
        }
    }
}

