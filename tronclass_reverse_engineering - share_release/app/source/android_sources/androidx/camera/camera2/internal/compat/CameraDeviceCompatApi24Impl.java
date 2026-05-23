package androidx.camera.camera2.internal.compat;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.params.InputConfiguration;
import android.os.Handler;
import androidx.camera.camera2.internal.compat.CameraCaptureSessionCompat;
import androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl;
import androidx.camera.camera2.internal.compat.params.InputConfigurationCompat;
import androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat;
import androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
import androidx.core.util.Preconditions;
import java.util.List;
class CameraDeviceCompatApi24Impl extends CameraDeviceCompatApi23Impl {
    CameraDeviceCompatApi24Impl(CameraDevice cameraDevice, Object obj) {
        super(cameraDevice, obj);
    }

    static CameraDeviceCompatApi24Impl create(CameraDevice cameraDevice, Handler handler) {
        return new CameraDeviceCompatApi24Impl(cameraDevice, new CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21(handler));
    }

    @Override // androidx.camera.camera2.internal.compat.CameraDeviceCompatApi23Impl, androidx.camera.camera2.internal.compat.CameraDeviceCompatBaseImpl, androidx.camera.camera2.internal.compat.CameraDeviceCompat.CameraDeviceCompatImpl
    public void createCaptureSession(SessionConfigurationCompat sessionConfigurationCompat) throws CameraAccessExceptionCompat {
        checkPreconditions(this.mCameraDevice, sessionConfigurationCompat);
        CameraCaptureSessionCompat.StateCallbackExecutorWrapper stateCallbackExecutorWrapper = new CameraCaptureSessionCompat.StateCallbackExecutorWrapper(sessionConfigurationCompat.getExecutor(), sessionConfigurationCompat.getStateCallback());
        List<OutputConfigurationCompat> outputConfigurations = sessionConfigurationCompat.getOutputConfigurations();
        Handler handler = ((CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21) Preconditions.checkNotNull((CameraDeviceCompatBaseImpl.CameraDeviceCompatParamsApi21) this.mImplParams)).mCompatHandler;
        InputConfigurationCompat inputConfiguration = sessionConfigurationCompat.getInputConfiguration();
        try {
            if (inputConfiguration != null) {
                InputConfiguration inputConfiguration2 = (InputConfiguration) inputConfiguration.unwrap();
                Preconditions.checkNotNull(inputConfiguration2);
                this.mCameraDevice.createReprocessableCaptureSessionByConfigurations(inputConfiguration2, SessionConfigurationCompat.transformFromCompat(outputConfigurations), stateCallbackExecutorWrapper, handler);
            } else if (sessionConfigurationCompat.getSessionType() == 1) {
                this.mCameraDevice.createConstrainedHighSpeedCaptureSession(unpackSurfaces(outputConfigurations), stateCallbackExecutorWrapper, handler);
            } else {
                this.mCameraDevice.createCaptureSessionByOutputConfigurations(SessionConfigurationCompat.transformFromCompat(outputConfigurations), stateCallbackExecutorWrapper, handler);
            }
        } catch (CameraAccessException e) {
            throw CameraAccessExceptionCompat.toCameraAccessExceptionCompat(e);
        }
    }
}

