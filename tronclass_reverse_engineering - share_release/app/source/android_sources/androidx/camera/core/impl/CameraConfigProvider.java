package androidx.camera.core.impl;

import android.content.Context;
import androidx.camera.core.CameraInfo;
public interface CameraConfigProvider {
    public static final CameraConfigProvider EMPTY = new CameraConfigProvider() { // from class: androidx.camera.core.impl.CameraConfigProvider$$ExternalSyntheticLambda0
        @Override // androidx.camera.core.impl.CameraConfigProvider
        public final CameraConfig getConfig(CameraInfo cameraInfo, Context context) {
            return CameraConfigProvider.lambda$static$0(cameraInfo, context);
        }
    };

    static /* synthetic */ CameraConfig lambda$static$0(CameraInfo cameraInfo, Context context) {
        return null;
    }

    CameraConfig getConfig(CameraInfo cameraInfo, Context context);
}

