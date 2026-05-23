package androidx.camera.video.internal.compat;

import android.media.MediaCodecInfo;
import android.util.Range;
public final class Api28Impl {
    private Api28Impl() {
    }

    public static Range<Integer> getQualityRange(MediaCodecInfo.EncoderCapabilities encoderCapabilities) {
        return encoderCapabilities.getQualityRange();
    }
}

