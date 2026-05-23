package androidx.camera.video.internal.encoder;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public class EncodeException extends Exception {
    public static final int ERROR_CODEC = 1;
    public static final int ERROR_UNKNOWN = 0;
    private final int mErrorType;

    @Retention(RetentionPolicy.SOURCE)
    public @interface ErrorType {
    }

    public EncodeException(int i, String str, Throwable th) {
        super(str, th);
        this.mErrorType = i;
    }

    public int getErrorType() {
        return this.mErrorType;
    }
}

