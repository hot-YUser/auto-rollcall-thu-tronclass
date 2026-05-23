package androidx.camera.video.internal.compat;

import android.content.Context;
import android.media.AudioRecord;
import android.media.MediaCodecInfo;
import android.util.Range;
public final class Api31Impl {
    private Api31Impl() {
    }

    public static int getMinInputChannelCount(MediaCodecInfo.AudioCapabilities audioCapabilities) {
        return audioCapabilities.getMinInputChannelCount();
    }

    public static Range<Integer>[] getInputChannelCountRanges(MediaCodecInfo.AudioCapabilities audioCapabilities) {
        return audioCapabilities.getInputChannelCountRanges();
    }

    public static void setContext(AudioRecord.Builder builder, Context context) {
        builder.setContext(context);
    }
}

