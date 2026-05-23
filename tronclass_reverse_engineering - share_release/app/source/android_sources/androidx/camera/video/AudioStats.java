package androidx.camera.video;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
public abstract class AudioStats {
    public static final double AUDIO_AMPLITUDE_NONE = 0.0d;
    public static final int AUDIO_STATE_ACTIVE = 0;
    public static final int AUDIO_STATE_DISABLED = 1;
    public static final int AUDIO_STATE_ENCODER_ERROR = 3;
    public static final int AUDIO_STATE_MUTED = 5;
    public static final int AUDIO_STATE_SOURCE_ERROR = 4;
    public static final int AUDIO_STATE_SOURCE_SILENCED = 2;
    private static final Set<Integer> ERROR_STATES = Collections.unmodifiableSet(new HashSet(Arrays.asList(2, 3, 4)));

    @Retention(RetentionPolicy.SOURCE)
    public @interface AudioState {
    }

    abstract double getAudioAmplitudeInternal();

    public abstract int getAudioState();

    public abstract Throwable getErrorCause();

    AudioStats() {
    }

    static AudioStats of(int i, Throwable th, double d) {
        return new AutoValue_AudioStats(i, d, th);
    }

    public boolean hasAudio() {
        return getAudioState() == 0;
    }

    public boolean hasError() {
        return ERROR_STATES.contains(Integer.valueOf(getAudioState()));
    }

    public double getAudioAmplitude() {
        return getAudioState() == 1 ? AUDIO_AMPLITUDE_NONE : getAudioAmplitudeInternal();
    }
}

