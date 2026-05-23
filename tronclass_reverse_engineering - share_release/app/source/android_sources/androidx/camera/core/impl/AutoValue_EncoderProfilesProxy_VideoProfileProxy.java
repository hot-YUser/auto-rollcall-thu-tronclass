package androidx.camera.core.impl;

import androidx.camera.core.impl.EncoderProfilesProxy;
final class AutoValue_EncoderProfilesProxy_VideoProfileProxy extends EncoderProfilesProxy.VideoProfileProxy {
    private final int bitDepth;
    private final int bitrate;
    private final int chromaSubsampling;
    private final int codec;
    private final int frameRate;
    private final int hdrFormat;
    private final int height;
    private final String mediaType;
    private final int profile;
    private final int width;

    AutoValue_EncoderProfilesProxy_VideoProfileProxy(int i, String str, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9) {
        this.codec = i;
        if (str == null) {
            throw new NullPointerException("Null mediaType");
        }
        this.mediaType = str;
        this.bitrate = i2;
        this.frameRate = i3;
        this.width = i4;
        this.height = i5;
        this.profile = i6;
        this.bitDepth = i7;
        this.chromaSubsampling = i8;
        this.hdrFormat = i9;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getCodec() {
        return this.codec;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public String getMediaType() {
        return this.mediaType;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getBitrate() {
        return this.bitrate;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getFrameRate() {
        return this.frameRate;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getWidth() {
        return this.width;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getHeight() {
        return this.height;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getProfile() {
        return this.profile;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getBitDepth() {
        return this.bitDepth;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getChromaSubsampling() {
        return this.chromaSubsampling;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProxy.VideoProfileProxy
    public int getHdrFormat() {
        return this.hdrFormat;
    }

    public String toString() {
        return "VideoProfileProxy{codec=" + this.codec + ", mediaType=" + this.mediaType + ", bitrate=" + this.bitrate + ", frameRate=" + this.frameRate + ", width=" + this.width + ", height=" + this.height + ", profile=" + this.profile + ", bitDepth=" + this.bitDepth + ", chromaSubsampling=" + this.chromaSubsampling + ", hdrFormat=" + this.hdrFormat + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof EncoderProfilesProxy.VideoProfileProxy)) {
            return false;
        }
        EncoderProfilesProxy.VideoProfileProxy videoProfileProxy = (EncoderProfilesProxy.VideoProfileProxy) obj;
        return this.codec == videoProfileProxy.getCodec() && this.mediaType.equals(videoProfileProxy.getMediaType()) && this.bitrate == videoProfileProxy.getBitrate() && this.frameRate == videoProfileProxy.getFrameRate() && this.width == videoProfileProxy.getWidth() && this.height == videoProfileProxy.getHeight() && this.profile == videoProfileProxy.getProfile() && this.bitDepth == videoProfileProxy.getBitDepth() && this.chromaSubsampling == videoProfileProxy.getChromaSubsampling() && this.hdrFormat == videoProfileProxy.getHdrFormat();
    }

    public int hashCode() {
        return ((((((((((((((((((this.codec ^ 1000003) * 1000003) ^ this.mediaType.hashCode()) * 1000003) ^ this.bitrate) * 1000003) ^ this.frameRate) * 1000003) ^ this.width) * 1000003) ^ this.height) * 1000003) ^ this.profile) * 1000003) ^ this.bitDepth) * 1000003) ^ this.chromaSubsampling) * 1000003) ^ this.hdrFormat;
    }
}

