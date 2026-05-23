package androidx.camera.core;
final class CameraClosedException extends RuntimeException {
    CameraClosedException(String str, Throwable th) {
        super(str, th);
    }

    CameraClosedException(String str) {
        super(str);
    }
}

