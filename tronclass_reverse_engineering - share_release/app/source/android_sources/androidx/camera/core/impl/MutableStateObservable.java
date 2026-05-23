package androidx.camera.core.impl;
public class MutableStateObservable<T> extends StateObservable<T> {
    private MutableStateObservable(Object obj, boolean z) {
        super(obj, z);
    }

    public static <T> MutableStateObservable<T> withInitialState(T t) {
        return new MutableStateObservable<>(t, false);
    }

    public static <T> MutableStateObservable<T> withInitialError(Throwable th) {
        return new MutableStateObservable<>(th, true);
    }

    public void setState(T t) {
        updateState(t);
    }

    public void setError(Throwable th) {
        updateStateAsError(th);
    }
}

