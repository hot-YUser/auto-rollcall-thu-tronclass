package androidx.camera.core.impl.utils;
public class InterruptedRuntimeException extends RuntimeException {
    public InterruptedRuntimeException() {
    }

    public InterruptedRuntimeException(String str) {
        super(str);
    }

    public InterruptedRuntimeException(String str, Throwable th) {
        super(str, th);
    }

    public InterruptedRuntimeException(Throwable th) {
        super(th);
    }
}

