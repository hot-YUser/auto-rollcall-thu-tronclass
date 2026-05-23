package androidx.camera.camera2.internal;

import androidx.camera.camera2.impl.Camera2ImplConfig;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.OptionsBundle;
import androidx.camera.core.impl.UseCaseConfig;
class Camera2CaptureOptionUnpacker implements CaptureConfig.OptionUnpacker {
    static final Camera2CaptureOptionUnpacker INSTANCE = new Camera2CaptureOptionUnpacker();

    Camera2CaptureOptionUnpacker() {
    }

    @Override // androidx.camera.core.impl.CaptureConfig.OptionUnpacker
    public void unpack(UseCaseConfig<?> useCaseConfig, CaptureConfig.Builder builder) {
        CaptureConfig defaultCaptureConfig = useCaseConfig.getDefaultCaptureConfig(null);
        Config configEmptyBundle = OptionsBundle.emptyBundle();
        int templateType = CaptureConfig.defaultEmptyCaptureConfig().getTemplateType();
        if (defaultCaptureConfig != null) {
            templateType = defaultCaptureConfig.getTemplateType();
            builder.addAllCameraCaptureCallbacks(defaultCaptureConfig.getCameraCaptureCallbacks());
            configEmptyBundle = defaultCaptureConfig.getImplementationOptions();
        }
        builder.setImplementationOptions(configEmptyBundle);
        Camera2ImplConfig camera2ImplConfig = new Camera2ImplConfig(useCaseConfig);
        builder.setTemplateType(camera2ImplConfig.getCaptureRequestTemplate(templateType));
        builder.addCameraCaptureCallback(CaptureCallbackContainer.create(camera2ImplConfig.getSessionCaptureCallback(Camera2CaptureCallbacks.createNoOpCallback())));
        builder.addImplementationOptions(camera2ImplConfig.getCaptureRequestOptions());
    }
}

