package androidx.camera.video.internal.encoder;

import android.view.Surface;
import androidx.camera.video.internal.BufferProvider;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
public interface Encoder {
    public static final long NO_TIMESTAMP = -1;

    public interface ByteBufferInput extends EncoderInput, BufferProvider<InputBuffer> {
    }

    public interface EncoderInput {
    }

    public interface SurfaceInput extends EncoderInput {

        public interface OnSurfaceUpdateListener {
            void onSurfaceUpdate(Surface surface);
        }

        void setOnSurfaceUpdateListener(Executor executor, OnSurfaceUpdateListener onSurfaceUpdateListener);
    }

    int getConfiguredBitrate();

    EncoderInfo getEncoderInfo();

    EncoderInput getInput();

    ListenableFuture<Void> getReleasedFuture();

    void pause();

    void release();

    void requestKeyFrame();

    void setEncoderCallback(EncoderCallback encoderCallback, Executor executor);

    void start();

    void stop();

    void stop(long j);
}

