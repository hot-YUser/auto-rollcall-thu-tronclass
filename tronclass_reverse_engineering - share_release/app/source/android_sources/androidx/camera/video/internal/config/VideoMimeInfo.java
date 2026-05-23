package androidx.camera.video.internal.config;

import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.video.internal.config.AutoValue_VideoMimeInfo;
import androidx.camera.video.internal.config.MimeInfo;
public abstract class VideoMimeInfo extends MimeInfo {

    public static abstract class Builder extends MimeInfo.Builder<Builder> {
        @Override // androidx.camera.video.internal.config.MimeInfo.Builder
        public abstract VideoMimeInfo build();

        public abstract Builder setCompatibleVideoProfile(EncoderProfilesProxy.VideoProfileProxy videoProfileProxy);
    }

    public abstract EncoderProfilesProxy.VideoProfileProxy getCompatibleVideoProfile();

    public static Builder builder(String str) {
        return new AutoValue_VideoMimeInfo.Builder().setMimeType(str).setProfile(-1);
    }
}

