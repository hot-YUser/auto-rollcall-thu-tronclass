package androidx.camera.video.internal.config;

import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.video.internal.config.AutoValue_AudioMimeInfo;
import androidx.camera.video.internal.config.MimeInfo;
public abstract class AudioMimeInfo extends MimeInfo {

    public static abstract class Builder extends MimeInfo.Builder<Builder> {
        @Override // androidx.camera.video.internal.config.MimeInfo.Builder
        public abstract AudioMimeInfo build();

        public abstract Builder setCompatibleAudioProfile(EncoderProfilesProxy.AudioProfileProxy audioProfileProxy);
    }

    public abstract EncoderProfilesProxy.AudioProfileProxy getCompatibleAudioProfile();

    public static Builder builder(String str) {
        return new AutoValue_AudioMimeInfo.Builder().setMimeType(str).setProfile(-1);
    }
}

