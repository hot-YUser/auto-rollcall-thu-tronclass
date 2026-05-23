package androidx.camera.camera2.internal.compat;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.params.InputConfiguration;
import android.os.Handler;
import android.view.Surface;
import androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
import androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl;
import androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
import androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
import androidx.core.util.Preconditions;
import java.util.List;
class CameraDeviceCompatApi23Impl extends CameraDeviceCompatBaseImpl {
    CameraDeviceCompatApi23Impl(CameraDevice cameraDevice, Object obj) {
        super(cameraDevice, obj);
    }

    static CameraDeviceCompatApi23Impl create(CameraDevice cameraDevice, Handler handler) {
        return new CameraDeviceCompatApi23Impl(cameraDevice, new CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21(handler));
    }

    @Override // androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl, androidx.camera.camera2.internal.compat.CameraDeviceCompat.CameraDeviceCompatImpl
    public void createCaptureSession(SessionConfigurationCompat sessionConfigurationCompat) throws CameraAccessExceptionCompat {
        checkPreconditions(this.mCameraDevice, sessionConfigurationCompat);
        CameraCaptureSessionCompat.StateCallbackExecutorWrapper stateCallbackExecutorWrapper = new CameraCaptureSessionCompat.StateCallbackExecutorWrapper(sessionConfigurationCompat.getExecutor(), sessionConfigurationCompat.getStateCallback());
        List<Surface> listUnpackSurfaces = unpackSurfaces(sessionConfigurationCompat.getOutputConfigurations());
        Handler handler = ((CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21) Preconditions.checkNotNull((CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21) this.mImplParams)).mCompatHandler;
        InputConfigurationCompat inputConfiguration = sessionConfigurationCompat.getInputConfiguration();
        try {
            if (inputConfiguration != null) {
                InputConfiguration inputConfiguration2 = (InputConfiguration) inputConfiguration.unwrap();
                Preconditions.checkNotNull(inputConfiguration2);
                this.mCameraDevice.createReprocessableCaptureSession(inputConfiguration2, listUnpackSurfaces, stateCallbackExecutorWrapper, handler);
            } else if (sessionConfigurationCompat.getSessionType() == 1) {
                this.mCameraDevice.createConstrainedHighSpeedCaptureSession(listUnpackSurfaces, stateCallbackExecutorWrapper, handler);
            } else {
                createBaseCaptureSession(this.mCameraDevice, listUnpackSurfaces, stateCallbackExecutorWrapper, handler);
            }
        } catch (CameraAccessException e) {
            throw CameraAccessExceptionCompat.toCameraAccessExceptionCompat(e);
        }
    }
}

