package androidx.camera.video.internal.encoder;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import androidx.camera.video.internal.workaround.EncoderFinder;
import java.util.Objects;
public abstract class EncoderInfoImpl implements EncoderInfo {
    protected final MediaCodecInfo.CodecCapabilities mCodecCapabilities;
    private final MediaCodecInfo mMediaCodecInfo;

    EncoderInfoImpl(MediaCodecInfo mediaCodecInfo, String str) throws InvalidConfigException {
        this.mMediaCodecInfo = mediaCodecInfo;
        try {
            this.mCodecCapabilities = (MediaCodecInfo.CodecCapabilities) Objects.requireNonNull(mediaCodecInfo.getCapabilitiesForType(str));
        } catch (RuntimeException e) {
            throw new InvalidConfigException("Unable to get CodecCapabilities for mime: " + str, e);
        }
    }

    @Override // androidx.camera.video.internal.encoder.EncoderInfo
    public String getName() {
        return this.mMediaCodecInfo.getName();
    }

    static MediaCodecInfo findCodecAndGetCodecInfo(EncoderConfig encoderConfig) throws Throwable {
        MediaCodec mediaCodecFindEncoder = new EncoderFinder().findEncoder(encoderConfig.toMediaFormat());
        MediaCodecInfo codecInfo = mediaCodecFindEncoder.getCodecInfo();
        mediaCodecFindEncoder.release();
        return codecInfo;
    }
}

