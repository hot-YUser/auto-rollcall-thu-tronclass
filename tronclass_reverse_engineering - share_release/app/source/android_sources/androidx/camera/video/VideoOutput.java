package androidx.camera.video;

import androidx.camera.core.CameraInfo;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.ConstantObservable;
import androidx.camera.core.impl.Observable;
import androidx.camera.core.impl.Timebase;
public interface VideoOutput {

    public enum SourceState {
        ACTIVE_STREAMING,
        ACTIVE_NON_STREAMING,
        INACTIVE
    }

    default void onSourceStateChanged(SourceState sourceState) {
    }

    void onSurfaceRequested(SurfaceRequest surfaceRequest);

    default void onSurfaceRequested(SurfaceRequest surfaceRequest, Timebase timebase) {
        onSurfaceRequested(surfaceRequest);
    }

    default Observable<StreamInfo> getStreamInfo() {
        return StreamInfo.ALWAYS_ACTIVE_OBSERVABLE;
    }

    default Observable<MediaSpec> getMediaSpec() {
        return ConstantObservable.withValue(null);
    }

    default VideoCapabilities getMediaCapabilities(CameraInfo cameraInfo) {
        return VideoCapabilities.EMPTY;
    }
}

