package androidx.camera.video.internal.compat;

import android.media.AudioManager;
import android.media.AudioRecord;
import android.media.AudioRecordingConfiguration;
import java.util.concurrent.Executor;
public final class Api29Impl {
    private Api29Impl() {
    }

    public static AudioRecordingConfiguration getActiveRecordingConfiguration(AudioRecord audioRecord) {
        return audioRecord.getActiveRecordingConfiguration();
    }

    public static void registerAudioRecordingCallback(AudioRecord audioRecord, Executor executor, AudioManager.AudioRecordingCallback audioRecordingCallback) {
        audioRecord.registerAudioRecordingCallback(executor, audioRecordingCallback);
    }

    public static void unregisterAudioRecordingCallback(AudioRecord audioRecord, AudioManager.AudioRecordingCallback audioRecordingCallback) {
        audioRecord.unregisterAudioRecordingCallback(audioRecordingCallback);
    }

    public static boolean isClientSilenced(AudioRecordingConfiguration audioRecordingConfiguration) {
        return audioRecordingConfiguration.isClientSilenced();
    }
}

