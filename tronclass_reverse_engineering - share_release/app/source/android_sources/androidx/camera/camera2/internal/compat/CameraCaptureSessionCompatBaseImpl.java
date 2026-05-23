package androidx.camera.camera2.internal.compat;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureRequest;
import android.os.Handler;
import androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
import androidx.core.util.Preconditions;
import java.util.List;
import java.util.concurrent.Executor;
class CameraCaptureSessionCompatBaseImpl implements CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl {
    final CameraCaptureSession mCameraCaptureSession;
    final Object mObject;

    CameraCaptureSessionCompatBaseImpl(CameraCaptureSession cameraCaptureSession, Object obj) {
        this.mCameraCaptureSession = (CameraCaptureSession) Preconditions.checkNotNull(cameraCaptureSession);
        this.mObject = obj;
    }

    static CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl create(CameraCaptureSession cameraCaptureSession, Handler handler) {
        return new CameraCaptureSessionCompatBaseImpl(cameraCaptureSession, new CameraCaptureSessionCompatParamsApi21(handler));
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl
    public int captureBurstRequests(List<CaptureRequest> list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException {
        return this.mCameraCaptureSession.captureBurst(list, new CameraCaptureSessionCompat.CaptureCallbackExecutorWrapper(executor, captureCallback), ((CameraCaptureSessionCompatParamsApi21) this.mObject).mCompatHandler);
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl
    public int captureSingleRequest(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException {
        return this.mCameraCaptureSession.capture(captureRequest, new CameraCaptureSessionCompat.CaptureCallbackExecutorWrapper(executor, captureCallback), ((CameraCaptureSessionCompatParamsApi21) this.mObject).mCompatHandler);
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl
    public int setRepeatingBurstRequests(List<CaptureRequest> list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException {
        return this.mCameraCaptureSession.setRepeatingBurst(list, new CameraCaptureSessionCompat.CaptureCallbackExecutorWrapper(executor, captureCallback), ((CameraCaptureSessionCompatParamsApi21) this.mObject).mCompatHandler);
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl
    public int setSingleRepeatingRequest(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) throws CameraAccessException {
        return this.mCameraCaptureSession.setRepeatingRequest(captureRequest, new CameraCaptureSessionCompat.CaptureCallbackExecutorWrapper(executor, captureCallback), ((CameraCaptureSessionCompatParamsApi21) this.mObject).mCompatHandler);
    }

    @Override // androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat.CameraCaptureSessionCompatImpl
    public CameraCaptureSession unwrap() {
        return this.mCameraCaptureSession;
    }

    private static class CameraCaptureSessionCompatParamsApi21 {
        final Handler mCompatHandler;

        CameraCaptureSessionCompatParamsApi21(Handler handler) {
            this.mCompatHandler = handler;
        }
    }
}

