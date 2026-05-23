package androidx.camera.core;
public final class CameraInfoUnavailableException extends Exception {
    public CameraInfoUnavailableException(String str, Throwable th) {
        super(str, th);
    }

    public CameraInfoUnavailableException(String str) {
        super(str);
    }
}

