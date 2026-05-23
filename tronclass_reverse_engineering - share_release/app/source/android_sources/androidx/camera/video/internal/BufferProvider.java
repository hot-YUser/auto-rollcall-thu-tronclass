package androidx.camera.video.internal;

import androidx.camera.core.impl.Observable;
import com.google.common.util.concurrent.ListenableFuture;
public interface BufferProvider<T> extends Observable<State> {

    public enum State {
        ACTIVE,
        INACTIVE
    }

    ListenableFuture<T> acquireBuffer();
}

