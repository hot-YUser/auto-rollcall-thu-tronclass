package androidx.camera.video.internal.compat;

import android.media.AudioFormat;
import android.media.AudioRecord;
public final class Api23Impl {
    private Api23Impl() {
    }

    public static AudioRecord.Builder createAudioRecordBuilder() {
        return new AudioRecord.Builder();
    }

    public static void setAudioSource(AudioRecord.Builder builder, int i) {
        builder.setAudioSource(i);
    }

    public static void setAudioFormat(AudioRecord.Builder builder, AudioFormat audioFormat) {
        builder.setAudioFormat(audioFormat);
    }

    public static void setBufferSizeInBytes(AudioRecord.Builder builder, int i) {
        builder.setBufferSizeInBytes(i);
    }

    public static AudioRecord build(AudioRecord.Builder builder) {
        return builder.build();
    }
}

