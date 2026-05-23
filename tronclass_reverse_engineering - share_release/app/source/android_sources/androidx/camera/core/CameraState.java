package androidx.camera.core;
public abstract class CameraState {
    public static final int ERROR_CAMERA_DISABLED = 5;
    public static final int ERROR_CAMERA_FATAL_ERROR = 6;
    public static final int ERROR_CAMERA_IN_USE = 2;
    public static final int ERROR_DO_NOT_DISTURB_MODE_ENABLED = 7;
    public static final int ERROR_MAX_CAMERAS_IN_USE = 1;
    public static final int ERROR_OTHER_RECOVERABLE_ERROR = 3;
    public static final int ERROR_STREAM_CONFIG = 4;

    public enum ErrorType {
        RECOVERABLE,
        CRITICAL
    }

    public enum Type {
        PENDING_OPEN,
        OPENING,
        OPEN,
        CLOSING,
        CLOSED
    }

    public abstract StateError getError();

    public abstract Type getType();

    public static CameraState create(Type type) {
        return create(type, null);
    }

    public static CameraState create(Type type, StateError stateError) {
        return new AutoValue_CameraState(type, stateError);
    }

    public static abstract class StateError {
        public abstract Throwable getCause();

        public abstract int getCode();

        public static StateError create(int i) {
            return create(i, null);
        }

        public static StateError create(int i, Throwable th) {
            return new AutoValue_CameraState_StateError(i, th);
        }

        public ErrorType getType() {
            int code = getCode();
            if (code == 2 || code == 1 || code == 3) {
                return ErrorType.RECOVERABLE;
            }
            return ErrorType.CRITICAL;
        }
    }
}

