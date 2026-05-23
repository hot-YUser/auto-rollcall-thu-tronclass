package androidx.camera.video.internal.config;

import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.video.internal.config.VideoMimeInfo;
final class AutoValue_VideoMimeInfo extends VideoMimeInfo {
    private final EncoderProfilesProxy.VideoProfileProxy compatibleVideoProfile;
    private final String mimeType;
    private final int profile;

    private AutoValue_VideoMimeInfo(String str, int i, EncoderProfilesProxy.VideoProfileProxy videoProfileProxy) {
        this.mimeType = str;
        this.profile = i;
        this.compatibleVideoProfile = videoProfileProxy;
    }

    @Override // androidx.camera.video.internal.config.MimeInfo
    public String getMimeType() {
        return this.mimeType;
    }

    @Override // androidx.camera.video.internal.config.MimeInfo
    public int getProfile() {
        return this.profile;
    }

    @Override // androidx.camera.video.internal.config.VideoMimeInfo
    public EncoderProfilesProxy.VideoProfileProxy getCompatibleVideoProfile() {
        return this.compatibleVideoProfile;
    }

    public String toString() {
        return "VideoMimeInfo{mimeType=" + this.mimeType + ", profile=" + this.profile + ", compatibleVideoProfile=" + this.compatibleVideoProfile + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof VideoMimeInfo)) {
            return false;
        }
        VideoMimeInfo videoMimeInfo = (VideoMimeInfo) obj;
        if (this.mimeType.equals(videoMimeInfo.getMimeType()) && this.profile == videoMimeInfo.getProfile()) {
            EncoderProfilesProxy.VideoProfileProxy videoProfileProxy = this.compatibleVideoProfile;
            if (videoProfileProxy == null) {
                if (videoMimeInfo.getCompatibleVideoProfile() == null) {
                    return true;
                }
            } else if (videoProfileProxy.equals(videoMimeInfo.getCompatibleVideoProfile())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int iHashCode = (((this.mimeType.hashCode() ^ 1000003) * 1000003) ^ this.profile) * 1000003;
        EncoderProfilesProxy.VideoProfileProxy videoProfileProxy = this.compatibleVideoProfile;
        return iHashCode ^ (videoProfileProxy == null ? 0 : videoProfileProxy.hashCode());
    }

    static final class Builder extends VideoMimeInfo.Builder {
        private EncoderProfilesProxy.VideoProfileProxy compatibleVideoProfile;
        private String mimeType;
        private Integer profile;

        Builder() {
        }
        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.video.internal.config.MimeInfo.Builder
        public VideoMimeInfo.Builder setMimeType(String str) {
            if (str == null) {
                throw new NullPointerException("Null mimeType");
            }
            this.mimeType = str;
            return this;
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.video.internal.config.MimeInfo.Builder
        public VideoMimeInfo.Builder setProfile(int i) {
            this.profile = Integer.valueOf(i);
            return this;
        }

        @Override // androidx.camera.video.internal.config.VideoMimeInfo.Builder
        public VideoMimeInfo.Builder setCompatibleVideoProfile(EncoderProfilesProxy.VideoProfileProxy videoProfileProxy) {
            this.compatibleVideoProfile = videoProfileProxy;
            return this;
        }

        @Override // androidx.camera.video.internal.config.VideoMimeInfo.Builder, androidx.camera.video.internal.config.MimeInfo.Builder
        public VideoMimeInfo build() {
            String str;
            if (this.mimeType != null) {
                str = "";
            } else {
                str = " mimeType";
            }
            if (this.profile == null) {
                str = str + " profile";
            }
            if (!str.isEmpty()) {
                throw new IllegalStateException("Missing required properties:" + str);
            }
            return new AutoValue_VideoMimeInfo(this.mimeType, this.profile.intValue(), this.compatibleVideoProfile);
        }
    }
}

