package androidx.camera.video.internal;

import androidx.camera.core.impl.EncoderProfilesProxy;
import java.util.List;
final class AutoValue_VideoValidatedEncoderProfilesProxy extends VideoValidatedEncoderProfilesProxy {
    private final List<EncoderProfilesProxy.AudioProfileProxy> audioProfiles;
    private final EncoderProfilesProxy.AudioProfileProxy defaultAudioProfile;
    private final int defaultDurationSeconds;
    private final EncoderProfilesProxy.VideoProfileProxy defaultVideoProfile;
    private final int recommendedFileFormat;
    private final List<EncoderProfilesProxy.VideoProfileProxy> videoProfiles;

    AutoValue_VideoValidatedEncoderProfilesProxy(int i, int i2, List<EncoderProfilesProxy.AudioProfileProxy> list, List<EncoderProfilesProxy.VideoProfileProxy> list2, EncoderProfilesProxy.AudioProfileProxy audioProfileProxy, EncoderProfilesProxy.VideoProfileProxy videoProfileProxy) {
        this.defaultDurationSeconds = i;
        this.recommendedFileFormat = i2;
        if (list == null) {
            throw new NullPointerException("Null audioProfiles");
        }
        this.audioProfiles = list;
        if (list2 == null) {
            throw new NullPointerException("Null videoProfiles");
        }
        this.videoProfiles = list2;
        this.defaultAudioProfile = audioProfileProxy;
        if (videoProfileProxy == null) {
            throw new NullPointerException("Null defaultVideoProfile");
        }
        this.defaultVideoProfile = videoProfileProxy;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy
    public int getDefaultDurationSeconds() {
        return this.defaultDurationSeconds;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy
    public int getRecommendedFileFormat() {
        return this.recommendedFileFormat;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy
    public List<EncoderProfilesProxy.AudioProfileProxy> getAudioProfiles() {
        return this.audioProfiles;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy
    public List<EncoderProfilesProxy.VideoProfileProxy> getVideoProfiles() {
        return this.videoProfiles;
    }

    @Override // androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy
    public EncoderProfilesProxy.AudioProfileProxy getDefaultAudioProfile() {
        return this.defaultAudioProfile;
    }

    @Override // androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy
    public EncoderProfilesProxy.VideoProfileProxy getDefaultVideoProfile() {
        return this.defaultVideoProfile;
    }

    public String toString() {
        return "VideoValidatedEncoderProfilesProxy{defaultDurationSeconds=" + this.defaultDurationSeconds + ", recommendedFileFormat=" + this.recommendedFileFormat + ", audioProfiles=" + this.audioProfiles + ", videoProfiles=" + this.videoProfiles + ", defaultAudioProfile=" + this.defaultAudioProfile + ", defaultVideoProfile=" + this.defaultVideoProfile + "}";
    }

    public boolean equals(Object obj) {
        EncoderProfilesProxy.AudioProfileProxy audioProfileProxy;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof VideoValidatedEncoderProfilesProxy)) {
            return false;
        }
        VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy = (VideoValidatedEncoderProfilesProxy) obj;
        return this.defaultDurationSeconds == videoValidatedEncoderProfilesProxy.getDefaultDurationSeconds() && this.recommendedFileFormat == videoValidatedEncoderProfilesProxy.getRecommendedFileFormat() && this.audioProfiles.equals(videoValidatedEncoderProfilesProxy.getAudioProfiles()) && this.videoProfiles.equals(videoValidatedEncoderProfilesProxy.getVideoProfiles()) && ((audioProfileProxy = this.defaultAudioProfile) != null ? audioProfileProxy.equals(videoValidatedEncoderProfilesProxy.getDefaultAudioProfile()) : videoValidatedEncoderProfilesProxy.getDefaultAudioProfile() == null) && this.defaultVideoProfile.equals(videoValidatedEncoderProfilesProxy.getDefaultVideoProfile());
    }

    public int hashCode() {
        int iHashCode = (((((((this.defaultDurationSeconds ^ 1000003) * 1000003) ^ this.recommendedFileFormat) * 1000003) ^ this.audioProfiles.hashCode()) * 1000003) ^ this.videoProfiles.hashCode()) * 1000003;
        EncoderProfilesProxy.AudioProfileProxy audioProfileProxy = this.defaultAudioProfile;
        return ((iHashCode ^ (audioProfileProxy == null ? 0 : audioProfileProxy.hashCode())) * 1000003) ^ this.defaultVideoProfile.hashCode();
    }
}

