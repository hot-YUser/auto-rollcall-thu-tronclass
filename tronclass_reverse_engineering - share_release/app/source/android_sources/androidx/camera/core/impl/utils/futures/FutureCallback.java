package androidx.camera.core.impl.utils.futures;
public interface FutureCallback<V> {
    void onFailure(Throwable th);

    void onSuccess(V v);
}

