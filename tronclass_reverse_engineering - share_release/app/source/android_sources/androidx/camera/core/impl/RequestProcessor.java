package androidx.camera.core.impl;

import java.util.List;
public interface RequestProcessor {

    public interface Callback {
        default void onCaptureBufferLost(Request request, long j, int i) {
        }

        default void onCaptureCompleted(Request request, CameraCaptureResult cameraCaptureResult) {
        }

        default void onCaptureFailed(Request request, CameraCaptureFailure cameraCaptureFailure) {
        }

        default void onCaptureProgressed(Request request, CameraCaptureResult cameraCaptureResult) {
        }

        default void onCaptureSequenceAborted(int i) {
        }

        default void onCaptureSequenceCompleted(int i, long j) {
        }

        default void onCaptureStarted(Request request, long j, long j2) {
        }
    }

    public interface Request {
        Config getParameters();

        List<Integer> getTargetOutputConfigIds();

        int getTemplateId();
    }

    void abortCaptures();

    int setRepeating(Request request, Callback callback);

    void stopRepeating();

    int submit(Request request, Callback callback);

    int submit(List<Request> list, Callback callback);
}

