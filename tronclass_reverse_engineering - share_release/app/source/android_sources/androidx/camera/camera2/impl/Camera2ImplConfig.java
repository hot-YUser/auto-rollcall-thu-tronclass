package androidx.camera.camera2.impl;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import androidx.camera.camera2.interop.CaptureRequestOptions;
import androidx.camera.core.ExtendableBuilder;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.MutableConfig;
import androidx.camera.core.impl.MutableOptionsBundle;
import androidx.camera.core.impl.OptionsBundle;
public final class Camera2ImplConfig extends CaptureRequestOptions {
    public static final String CAPTURE_REQUEST_ID_STEM = "camera2.captureRequest.option.";
    public static final Config.Option<Integer> TEMPLATE_TYPE_OPTION = Config.Option.create("camera2.captureRequest.templateType", Integer.TYPE);
    public static final Config.Option<Long> STREAM_USE_CASE_OPTION = Config.Option.create("camera2.cameraCaptureSession.streamUseCase", Long.TYPE);
    public static final Config.Option<CameraDevice.StateCallback> DEVICE_STATE_CALLBACK_OPTION = Config.Option.create("camera2.cameraDevice.stateCallback", CameraDevice.StateCallback.class);
    public static final Config.Option<CameraCaptureSession.StateCallback> SESSION_STATE_CALLBACK_OPTION = Config.Option.create("camera2.cameraCaptureSession.stateCallback", CameraCaptureSession.StateCallback.class);
    public static final Config.Option<CameraCaptureSession.CaptureCallback> SESSION_CAPTURE_CALLBACK_OPTION = Config.Option.create("camera2.cameraCaptureSession.captureCallback", CameraCaptureSession.CaptureCallback.class);
    public static final Config.Option<CameraEventCallbacks> CAMERA_EVENT_CALLBACK_OPTION = Config.Option.create("camera2.cameraEvent.callback", CameraEventCallbacks.class);
    public static final Config.Option<Object> CAPTURE_REQUEST_TAG_OPTION = Config.Option.create("camera2.captureRequest.tag", Object.class);
    public static final Config.Option<String> SESSION_PHYSICAL_CAMERA_ID_OPTION = Config.Option.create("camera2.cameraCaptureSession.physicalCameraId", String.class);

    public Camera2ImplConfig(Config config) {
        super(config);
    }

    public static Config.Option<Object> createCaptureRequestOption(CaptureRequest.Key<?> key) {
        return Config.Option.create(CAPTURE_REQUEST_ID_STEM + key.getName(), Object.class, key);
    }

    public CaptureRequestOptions getCaptureRequestOptions() {
        return CaptureRequestOptions.Builder.from(getConfig()).build();
    }

    public long getStreamUseCase(long j) {
        return ((Long) getConfig().retrieveOption(STREAM_USE_CASE_OPTION, Long.valueOf(j))).longValue();
    }

    public int getCaptureRequestTemplate(int i) {
        return ((Integer) getConfig().retrieveOption(TEMPLATE_TYPE_OPTION, Integer.valueOf(i))).intValue();
    }

    public CameraDevice.StateCallback getDeviceStateCallback(CameraDevice.StateCallback stateCallback) {
        return (CameraDevice.StateCallback) getConfig().retrieveOption(DEVICE_STATE_CALLBACK_OPTION, stateCallback);
    }

    public CameraCaptureSession.StateCallback getSessionStateCallback(CameraCaptureSession.StateCallback stateCallback) {
        return (CameraCaptureSession.StateCallback) getConfig().retrieveOption(SESSION_STATE_CALLBACK_OPTION, stateCallback);
    }

    public CameraCaptureSession.CaptureCallback getSessionCaptureCallback(CameraCaptureSession.CaptureCallback captureCallback) {
        return (CameraCaptureSession.CaptureCallback) getConfig().retrieveOption(SESSION_CAPTURE_CALLBACK_OPTION, captureCallback);
    }

    public CameraEventCallbacks getCameraEventCallback(CameraEventCallbacks cameraEventCallbacks) {
        return (CameraEventCallbacks) getConfig().retrieveOption(CAMERA_EVENT_CALLBACK_OPTION, cameraEventCallbacks);
    }

    public Object getCaptureRequestTag(Object obj) {
        return getConfig().retrieveOption(CAPTURE_REQUEST_TAG_OPTION, obj);
    }

    public String getPhysicalCameraId(String str) {
        return (String) getConfig().retrieveOption(SESSION_PHYSICAL_CAMERA_ID_OPTION, str);
    }

    public static final class Builder implements ExtendableBuilder<Camera2ImplConfig> {
        private final MutableOptionsBundle mMutableOptionsBundle = MutableOptionsBundle.create();

        @Override // androidx.camera.core.ExtendableBuilder
        public MutableConfig getMutableConfig() {
            return this.mMutableOptionsBundle;
        }

        /* high-level source view WARN: Multi-variable type inference failed */
        public <ValueT> Builder setCaptureRequestOption(CaptureRequest.Key<ValueT> key, ValueT valuet) {
            this.mMutableOptionsBundle.insertOption(Camera2ImplConfig.createCaptureRequestOption(key), valuet);
            return this;
        }

        /* high-level source view WARN: Multi-variable type inference failed */
        public <ValueT> Builder setCaptureRequestOptionWithPriority(CaptureRequest.Key<ValueT> key, ValueT valuet, Config.OptionPriority optionPriority) {
            this.mMutableOptionsBundle.insertOption(Camera2ImplConfig.createCaptureRequestOption(key), optionPriority, valuet);
            return this;
        }

        public Builder insertAllOptions(Config config) {
            for (Config.Option<?> option : config.listOptions()) {
                this.mMutableOptionsBundle.insertOption(option, config.retrieveOption(option));
            }
            return this;
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.core.ExtendableBuilder
        public Camera2ImplConfig build() {
            return new Camera2ImplConfig(OptionsBundle.from(this.mMutableOptionsBundle));
        }
    }

    public static final class Extender<T> {
        ExtendableBuilder<T> mBaseBuilder;

        public Extender(ExtendableBuilder<T> extendableBuilder) {
            this.mBaseBuilder = extendableBuilder;
        }

        public Extender<T> setCameraEventCallback(CameraEventCallbacks cameraEventCallbacks) {
            this.mBaseBuilder.getMutableConfig().insertOption(Camera2ImplConfig.CAMERA_EVENT_CALLBACK_OPTION, cameraEventCallbacks);
            return this;
        }
    }
}

