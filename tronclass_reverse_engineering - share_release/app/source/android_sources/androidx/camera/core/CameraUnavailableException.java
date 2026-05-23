package androidx.camera.core;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public class CameraUnavailableException extends Exception {
    public static final int CAMERA_DISABLED = 1;
    public static final int CAMERA_DISCONNECTED = 2;
    public static final int CAMERA_ERROR = 3;
    public static final int CAMERA_IN_USE = 4;
    public static final int CAMERA_MAX_IN_USE = 5;
    public static final int CAMERA_UNAVAILABLE_DO_NOT_DISTURB = 6;
    public static final int CAMERA_UNKNOWN_ERROR = 0;
    private final int mReason;

    @Retention(RetentionPolicy.SOURCE)
    public @interface Reason {
    }

    public CameraUnavailableException(int i) {
        this.mReason = i;
    }

    public CameraUnavailableException(int i, String str) {
        super(str);
        this.mReason = i;
    }

    public CameraUnavailableException(int i, String str, Throwable th) {
        super(str, th);
        this.mReason = i;
    }

    public CameraUnavailableException(int i, Throwable th) {
        super(th);
        this.mReason = i;
    }

    public int getReason() {
        return this.mReason;
    }
}

