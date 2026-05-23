package androidx.camera.core.streamsharing;

import androidx.camera.core.CameraSelector;
import androidx.camera.core.UseCase;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.MutableConfig;
import androidx.camera.core.impl.MutableOptionsBundle;
import androidx.camera.core.impl.OptionsBundle;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.camera.core.impl.UseCaseConfigFactory;
import androidx.camera.core.internal.TargetConfig;
import java.util.UUID;
class StreamSharingBuilder implements UseCaseConfig.Builder<StreamSharing, StreamSharingConfig, StreamSharingBuilder> {
    private static final String UNSUPPORTED_MESSAGE = "Operation not supported by StreamSharingBuilder.";
    private final MutableOptionsBundle mMutableConfig;

    @Override // androidx.camera.core.internal.TargetConfig.Builder
    public /* bridge */ /* synthetic */ Object setTargetClass(Class cls) {
        return setTargetClass((Class<StreamSharing>) cls);
    }

    StreamSharingBuilder() {
        this(MutableOptionsBundle.create());
    }

    StreamSharingBuilder(MutableOptionsBundle mutableOptionsBundle) {
        this.mMutableConfig = mutableOptionsBundle;
        Class cls = (Class) mutableOptionsBundle.retrieveOption(TargetConfig.OPTION_TARGET_CLASS, null);
        if (cls != null && !cls.equals(StreamSharing.class)) {
            throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
        }
        setTargetClass(StreamSharing.class);
    }

    @Override // androidx.camera.core.ExtendableBuilder
    public MutableConfig getMutableConfig() {
        return this.mMutableConfig;
    }

    @Override // androidx.camera.core.ExtendableBuilder
    public StreamSharing build() {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setDefaultSessionConfig(SessionConfig sessionConfig) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setDefaultCaptureConfig(CaptureConfig captureConfig) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setSessionOptionUnpacker(SessionConfig.OptionUnpacker optionUnpacker) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setCaptureOptionUnpacker(CaptureConfig.OptionUnpacker optionUnpacker) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setSurfaceOccupancyPriority(int i) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setCameraSelector(CameraSelector cameraSelector) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setZslDisabled(boolean z) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setHighResolutionDisabled(boolean z) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingConfig getUseCaseConfig() {
        return new StreamSharingConfig(OptionsBundle.from(this.mMutableConfig));
    }

    @Override // androidx.camera.core.internal.TargetConfig.Builder
    public StreamSharingBuilder setTargetClass(Class<StreamSharing> cls) {
        getMutableConfig().insertOption(TargetConfig.OPTION_TARGET_CLASS, cls);
        if (getMutableConfig().retrieveOption(TargetConfig.OPTION_TARGET_NAME, null) == null) {
            setTargetName(cls.getCanonicalName() + "-" + UUID.randomUUID());
        }
        return this;
    }

    @Override // androidx.camera.core.internal.TargetConfig.Builder
    public StreamSharingBuilder setTargetName(String str) {
        getMutableConfig().insertOption(TargetConfig.OPTION_TARGET_NAME, str);
        return this;
    }

    @Override // androidx.camera.core.internal.UseCaseEventConfig.Builder
    public StreamSharingBuilder setUseCaseEventCallback(UseCase.EventCallback eventCallback) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.camera.core.impl.UseCaseConfig.Builder
    public StreamSharingBuilder setCaptureType(UseCaseConfigFactory.CaptureType captureType) {
        getMutableConfig().insertOption(UseCaseConfig.OPTION_CAPTURE_TYPE, captureType);
        return this;
    }
}

