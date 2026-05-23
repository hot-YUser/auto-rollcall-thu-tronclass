package androidx.camera.core.impl.utils.futures;

import com.google.common.util.concurrent.ListenableFuture;
@FunctionalInterface
public interface AsyncFunction<I, O> {
    ListenableFuture<O> apply(I i) throws Exception;
}

