package androidx.camera.core.impl;

import androidx.camera.core.Camera;
import androidx.camera.core.CameraControl;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.UseCase;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashSet;
public interface CameraInternal extends Camera, UseCase.StateChangeCallback {
    void attachUseCases(Collection<UseCase> collection);

    void close();

    void detachUseCases(Collection<UseCase> collection);

    CameraControlInternal getCameraControlInternal();

    CameraInfoInternal getCameraInfoInternal();

    Observable<State> getCameraState();

    default boolean getHasTransform() {
        return true;
    }

    void open();

    ListenableFuture<Void> release();

    default void setActiveResumingMode(boolean z) {
    }

    @Override // androidx.camera.core.Camera
    default void setExtendedConfig(CameraConfig cameraConfig) {
    }

    public enum State {
        PENDING_OPEN(false),
        OPENING(true),
        OPEN(true),
        CONFIGURED(true),
        CLOSING(true),
        CLOSED(false),
        RELEASING(true),
        RELEASED(false);

        private final boolean mHoldsCameraSlot;

        State(boolean z) {
            this.mHoldsCameraSlot = z;
        }

        boolean holdsCameraSlot() {
            return this.mHoldsCameraSlot;
        }
    }

    default boolean isFrontFacing() {
        return getCameraInfo().getLensFacing() == 0;
    }

    @Override // androidx.camera.core.Camera
    default CameraControl getCameraControl() {
        return getCameraControlInternal();
    }

    @Override // androidx.camera.core.Camera
    default CameraInfo getCameraInfo() {
        return getCameraInfoInternal();
    }

    @Override // androidx.camera.core.Camera
    default LinkedHashSet<CameraInternal> getCameraInternals() {
        return new LinkedHashSet<>(Collections.singleton(this));
    }

    @Override // androidx.camera.core.Camera
    default CameraConfig getExtendedConfig() {
        return CameraConfigs.emptyConfig();
    }
}

