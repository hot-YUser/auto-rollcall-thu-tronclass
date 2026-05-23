package androidx.camera.video.internal.encoder;

import android.media.MediaFormat;
import androidx.camera.core.impl.Timebase;
public interface EncoderConfig {
    public static final int CODEC_PROFILE_NONE = -1;

    Timebase getInputTimebase();

    String getMimeType();

    int getProfile();

    MediaFormat toMediaFormat() throws InvalidConfigException;
}

