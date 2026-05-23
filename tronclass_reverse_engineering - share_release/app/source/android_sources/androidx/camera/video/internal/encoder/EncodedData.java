package androidx.camera.video.internal.encoder;

import android.media.MediaCodec;
import com.google.common.util.concurrent.ListenableFuture;
import java.nio.ByteBuffer;
public interface EncodedData extends AutoCloseable {
    @Override // java.lang.AutoCloseable
    void close();

    MediaCodec.BufferInfo getBufferInfo();

    ByteBuffer getByteBuffer();

    ListenableFuture<Void> getClosedFuture();

    long getPresentationTimeUs();

    boolean isKeyFrame();

    long size();
}

