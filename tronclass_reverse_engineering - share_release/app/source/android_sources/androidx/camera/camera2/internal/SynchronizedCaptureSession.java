package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.view.Surface;
import androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.concurrent.Executor;
public interface SynchronizedCaptureSession {

    public static abstract class StateCallback {
        void onActive(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        void onCaptureQueueEmpty(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        public void onClosed(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        public void onConfigureFailed(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        void onConfigured(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        void onReady(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        void onSessionFinished(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        void onSurfacePrepared(SynchronizedCaptureSession synchronizedCaptureSession, Surface surface) {
        }
    }

    void abortCaptures() throws CameraAccessException;

    int captureBurstRequests(List<CaptureRequest> list, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int captureBurstRequests(List<CaptureRequest> list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int captureSingleRequest(CaptureRequest captureRequest, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int captureSingleRequest(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    void close();

    void finishClose();

    CameraDevice getDevice();

    Surface getInputSurface();

    ListenableFuture<Void> getOpeningBlocker();

    StateCallback getStateCallback();

    int setRepeatingBurstRequests(List<CaptureRequest> list, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int setRepeatingBurstRequests(List<CaptureRequest> list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int setSingleRepeatingRequest(CaptureRequest captureRequest, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    int setSingleRepeatingRequest(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException;

    void stopRepeating() throws CameraAccessException;

    CameraCaptureSessionCompat toCameraCaptureSessionCompat();
}

