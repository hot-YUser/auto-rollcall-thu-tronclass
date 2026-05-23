package androidx.camera.video.internal.encoder;
public class InvalidConfigException extends Exception {
    public InvalidConfigException(String str) {
        super(str);
    }

    public InvalidConfigException(String str, Throwable th) {
        super(str, th);
    }

    public InvalidConfigException(Throwable th) {
        super(th);
    }
}

