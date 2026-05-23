package androidx.camera.video.internal.encoder;

import com.google.common.util.concurrent.ListenableFuture;
import java.nio.ByteBuffer;
public interface InputBuffer {
    boolean cancel();

    ByteBuffer getByteBuffer();

    ListenableFuture<Void> getTerminationFuture();

    void setEndOfStream(boolean z);

    void setPresentationTimeUs(long j);

    boolean submit();
}

