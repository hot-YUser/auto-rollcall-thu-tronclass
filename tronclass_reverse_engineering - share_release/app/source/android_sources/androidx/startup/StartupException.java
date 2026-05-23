package androidx.startup;
public final class StartupException extends RuntimeException {
    public StartupException(String str) {
        super(str);
    }

    public StartupException(Throwable th) {
        super(th);
    }

    public StartupException(String str, Throwable th) {
        super(str, th);
    }
}

