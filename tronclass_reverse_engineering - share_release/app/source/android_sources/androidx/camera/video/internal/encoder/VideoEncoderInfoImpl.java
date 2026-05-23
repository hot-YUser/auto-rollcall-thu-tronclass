package androidx.camera.video.internal.encoder;

import android.media.MediaCodecInfo;
import android.util.Range;
import java.util.Objects;
public class VideoEncoderInfoImpl extends EncoderInfoImpl implements VideoEncoderInfo {
    private final MediaCodecInfo.VideoCapabilities mVideoCapabilities;

    public static VideoEncoderInfoImpl from(VideoEncoderConfig videoEncoderConfig) throws InvalidConfigException {
        return new VideoEncoderInfoImpl(findCodecAndGetCodecInfo(videoEncoderConfig), videoEncoderConfig.getMimeType());
    }

    VideoEncoderInfoImpl(MediaCodecInfo mediaCodecInfo, String str) throws InvalidConfigException {
        super(mediaCodecInfo, str);
        this.mVideoCapabilities = (MediaCodecInfo.VideoCapabilities) Objects.requireNonNull(this.mCodecCapabilities.getVideoCapabilities());
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public boolean isSizeSupported(int i, int i2) {
        return this.mVideoCapabilities.isSizeSupported(i, i2);
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedWidths() {
        return this.mVideoCapabilities.getSupportedWidths();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedHeights() {
        return this.mVideoCapabilities.getSupportedHeights();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedWidthsFor(int i) {
        try {
            return this.mVideoCapabilities.getSupportedWidthsFor(i);
        } catch (Throwable th) {
            throw toIllegalArgumentException(th);
        }
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedHeightsFor(int i) {
        try {
            return this.mVideoCapabilities.getSupportedHeightsFor(i);
        } catch (Throwable th) {
            throw toIllegalArgumentException(th);
        }
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public int getWidthAlignment() {
        return this.mVideoCapabilities.getWidthAlignment();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public int getHeightAlignment() {
        return this.mVideoCapabilities.getHeightAlignment();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedBitrateRange() {
        return this.mVideoCapabilities.getBitrateRange();
    }

    private static IllegalArgumentException toIllegalArgumentException(Throwable th) {
        if (th instanceof IllegalArgumentException) {
            return (IllegalArgumentException) th;
        }
        return new IllegalArgumentException(th);
    }
}

