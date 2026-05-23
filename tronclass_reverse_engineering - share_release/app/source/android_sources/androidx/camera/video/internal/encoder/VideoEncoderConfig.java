package androidx.camera.video.internal.encoder;

import android.media.MediaFormat;
import android.util.Size;
import androidx.camera.core.impl.Timebase;
import androidx.camera.video.internal.encoder.AutoValue_VideoEncoderConfig;
import com.google.android.gms.common.Scopes;
public abstract class VideoEncoderConfig implements EncoderConfig {
    private static final int VIDEO_COLOR_FORMAT_DEFAULT = 2130708361;
    private static final int VIDEO_INTRA_FRAME_INTERVAL_DEFAULT = 1;

    public abstract int getBitrate();

    public abstract int getColorFormat();

    public abstract VideoEncoderDataSpace getDataSpace();

    public abstract int getFrameRate();

    public abstract int getIFrameInterval();

    @Override // androidx.camera.video.internal.encoder.EncoderConfig
    public abstract Timebase getInputTimebase();

    @Override // androidx.camera.video.internal.encoder.EncoderConfig
    public abstract String getMimeType();

    @Override // androidx.camera.video.internal.encoder.EncoderConfig
    public abstract int getProfile();

    public abstract Size getResolution();

    VideoEncoderConfig() {
    }

    public static Builder builder() {
        return new AutoValue_VideoEncoderConfig.Builder().setProfile(-1).setIFrameInterval(1).setColorFormat(VIDEO_COLOR_FORMAT_DEFAULT).setDataSpace(VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED);
    }

    @Override // androidx.camera.video.internal.encoder.EncoderConfig
    public MediaFormat toMediaFormat() {
        Size resolution = getResolution();
        MediaFormat mediaFormatCreateVideoFormat = MediaFormat.createVideoFormat(getMimeType(), resolution.getWidth(), resolution.getHeight());
        mediaFormatCreateVideoFormat.setInteger("color-format", getColorFormat());
        mediaFormatCreateVideoFormat.setInteger("bitrate", getBitrate());
        mediaFormatCreateVideoFormat.setInteger("frame-rate", getFrameRate());
        mediaFormatCreateVideoFormat.setInteger("i-frame-interval", getIFrameInterval());
        if (getProfile() != -1) {
            mediaFormatCreateVideoFormat.setInteger(Scopes.PROFILE, getProfile());
        }
        VideoEncoderDataSpace dataSpace = getDataSpace();
        if (dataSpace.getStandard() != 0) {
            mediaFormatCreateVideoFormat.setInteger("color-standard", dataSpace.getStandard());
        }
        if (dataSpace.getTransfer() != 0) {
            mediaFormatCreateVideoFormat.setInteger("color-transfer", dataSpace.getTransfer());
        }
        if (dataSpace.getRange() != 0) {
            mediaFormatCreateVideoFormat.setInteger("color-range", dataSpace.getRange());
        }
        return mediaFormatCreateVideoFormat;
    }

    public static abstract class Builder {
        public abstract VideoEncoderConfig build();

        public abstract Builder setBitrate(int i);

        public abstract Builder setColorFormat(int i);

        public abstract Builder setDataSpace(VideoEncoderDataSpace videoEncoderDataSpace);

        public abstract Builder setFrameRate(int i);

        public abstract Builder setIFrameInterval(int i);

        public abstract Builder setInputTimebase(Timebase timebase);

        public abstract Builder setMimeType(String str);

        public abstract Builder setProfile(int i);

        public abstract Builder setResolution(Size size);

        Builder() {
        }
    }
}

