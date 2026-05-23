package androidx.camera.video.internal.encoder;

import android.util.Range;
public interface AudioEncoderInfo extends EncoderInfo {
    Range<Integer> getBitrateRange();
}

