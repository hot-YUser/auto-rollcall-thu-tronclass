package androidx.camera.video.internal.compat;

import android.media.AudioRecord;
import android.media.AudioRecordingConfiguration;
import android.media.AudioTimestamp;
public final class Api24Impl {
    private Api24Impl() {
    }

    public static int getTimestamp(AudioRecord audioRecord, AudioTimestamp audioTimestamp, int i) {
        return audioRecord.getTimestamp(audioTimestamp, i);
    }

    public static int getClientAudioSessionId(AudioRecordingConfiguration audioRecordingConfiguration) {
        return audioRecordingConfiguration.getClientAudioSessionId();
    }
}

