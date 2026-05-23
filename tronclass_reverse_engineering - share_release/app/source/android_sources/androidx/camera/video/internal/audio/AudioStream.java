package androidx.camera.video.internal.audio;

import java.nio.ByteBuffer;
import java.util.concurrent.Executor;
public interface AudioStream {

    public interface AudioStreamCallback {
        default void onSilenceStateChanged(boolean z) {
        }
    }

    PacketInfo read(ByteBuffer byteBuffer);

    void release();

    void setCallback(AudioStreamCallback audioStreamCallback, Executor executor);

    void start() throws IllegalStateException, AudioStreamException;

    void stop() throws IllegalStateException;

    public static abstract class PacketInfo {
        public abstract int getSizeInBytes();

        public abstract long getTimestampNs();

        public static PacketInfo of(int i, long j) {
            return new AutoValue_AudioStream_PacketInfo(i, j);
        }
    }

    public static class AudioStreamException extends Exception {
        public AudioStreamException() {
        }

        public AudioStreamException(String str) {
            super(str);
        }

        public AudioStreamException(String str, Throwable th) {
            super(str, th);
        }

        public AudioStreamException(Throwable th) {
            super(th);
        }
    }
}

