package androidx.camera.video;

import android.util.Range;
import androidx.camera.video.AutoValue_AudioSpec;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public abstract class AudioSpec {
    public static final int CHANNEL_COUNT_AUTO = -1;
    public static final int CHANNEL_COUNT_MONO = 1;
    public static final int CHANNEL_COUNT_NONE = 0;
    public static final int CHANNEL_COUNT_STEREO = 2;
    public static final int SOURCE_AUTO = -1;
    public static final int SOURCE_CAMCORDER = 5;
    public static final int SOURCE_FORMAT_AUTO = -1;
    public static final int SOURCE_FORMAT_PCM_16BIT = 2;
    public static final Range<Integer> BITRATE_RANGE_AUTO = new Range<>(0, Integer.MAX_VALUE);
    public static final Range<Integer> SAMPLE_RATE_RANGE_AUTO = new Range<>(0, Integer.MAX_VALUE);
    public static final AudioSpec NO_AUDIO = builder().setChannelCount(0).build();

    @Retention(RetentionPolicy.SOURCE)
    public @interface ChannelCount {
    }

    @Retention(RetentionPolicy.SOURCE)
    public @interface Source {
    }

    public abstract Range<Integer> getBitrate();

    public abstract int getChannelCount();

    public abstract Range<Integer> getSampleRate();

    public abstract int getSource();

    public abstract int getSourceFormat();

    public abstract Builder toBuilder();

    AudioSpec() {
    }

    public static Builder builder() {
        return new AutoValue_AudioSpec.Builder().setSourceFormat(-1).setSource(-1).setChannelCount(-1).setBitrate(BITRATE_RANGE_AUTO).setSampleRate(SAMPLE_RATE_RANGE_AUTO);
    }

    public static abstract class Builder {
        public abstract AudioSpec build();

        public abstract Builder setBitrate(Range<Integer> range);

        public abstract Builder setChannelCount(int i);

        public abstract Builder setSampleRate(Range<Integer> range);

        public abstract Builder setSource(int i);

        public abstract Builder setSourceFormat(int i);

        Builder() {
        }
    }
}

