package androidx.camera.video.internal.compat.quirk;

import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.core.impl.Quirk;
import androidx.camera.video.Quality;
public interface VideoQualityQuirk extends Quirk {
    boolean isProblematicVideoQuality(CameraInfoInternal cameraInfoInternal, Quality quality);

    default boolean workaroundBySurfaceProcessing() {
        return false;
    }
}

