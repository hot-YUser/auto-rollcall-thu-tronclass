package androidx.camera.video.internal.config;

import android.util.Range;
import androidx.camera.core.Logger;
import androidx.camera.video.AudioSpec;
import androidx.camera.video.internal.audio.AudioSettings;
import androidx.core.util.Supplier;
public final class AudioSettingsDefaultResolver implements Supplier<AudioSettings> {
    private static final String TAG = "DefAudioResolver";
    private final AudioSpec mAudioSpec;

    public AudioSettingsDefaultResolver(AudioSpec audioSpec) {
        this.mAudioSpec = audioSpec;
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.core.util.Supplier
    public AudioSettings get() {
        int iSelectSampleRateOrNearestSupported;
        int iResolveAudioSource = AudioConfigUtil.resolveAudioSource(this.mAudioSpec);
        int iResolveAudioSourceFormat = AudioConfigUtil.resolveAudioSourceFormat(this.mAudioSpec);
        int channelCount = this.mAudioSpec.getChannelCount();
        if (channelCount == -1) {
            Logger.d(TAG, "Using fallback AUDIO channel count: 1");
            channelCount = 1;
        } else {
            Logger.d(TAG, "Using supplied AUDIO channel count: " + channelCount);
        }
        Range<Integer> sampleRate = this.mAudioSpec.getSampleRate();
        if (AudioSpec.SAMPLE_RATE_RANGE_AUTO.equals(sampleRate)) {
            Logger.d(TAG, "Using fallback AUDIO sample rate: 44100Hz");
            iSelectSampleRateOrNearestSupported = 44100;
        } else {
            iSelectSampleRateOrNearestSupported = AudioConfigUtil.selectSampleRateOrNearestSupported(sampleRate, channelCount, iResolveAudioSourceFormat, ((Integer) sampleRate.getUpper()).intValue());
            Logger.d(TAG, "Using AUDIO sample rate resolved from AudioSpec: " + iSelectSampleRateOrNearestSupported + "Hz");
        }
        return AudioSettings.builder().setAudioSource(iResolveAudioSource).setAudioFormat(iResolveAudioSourceFormat).setChannelCount(channelCount).setSampleRate(iSelectSampleRateOrNearestSupported).build();
    }
}

