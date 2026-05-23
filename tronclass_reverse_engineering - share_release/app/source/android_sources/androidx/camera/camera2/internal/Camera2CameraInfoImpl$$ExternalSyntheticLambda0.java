package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraCharacteristics;
import androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
import androidx.camera.camera2.internal.compat.workaround.CameraCharacteristicsProvider;
public final /* synthetic */ class Camera2CameraInfoImpl$$ExternalSyntheticLambda0 implements CameraCharacteristicsProvider {
    public final /* synthetic */ CameraCharacteristicsCompat f$0;

    @Override // androidx.camera.camera2.internal.compat.workaround.CameraCharacteristicsProvider
    public final Object get(CameraCharacteristics.Key key) {
        return this.f$0.get(key);
    }
}

