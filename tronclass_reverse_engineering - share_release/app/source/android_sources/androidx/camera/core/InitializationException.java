package androidx.camera.core;
public class InitializationException extends Exception {
    public InitializationException(String str) {
        super(str);
    }

    public InitializationException(String str, Throwable th) {
        super(str, th);
    }

    public InitializationException(Throwable th) {
        super(th);
    }
}

