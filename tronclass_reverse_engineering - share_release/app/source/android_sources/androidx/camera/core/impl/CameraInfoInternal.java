package androidx.camera.core.impl;

import android.util.Size;
import androidx.camera.core.CameraFilter;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.DynamicRange;
import androidx.core.util.Preconditions;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;
public interface CameraInfoInternal extends CameraInfo {
    void addSessionCaptureCallback(Executor executor, CameraCaptureCallback cameraCaptureCallback);

    String getCameraId();

    Quirks getCameraQuirks();

    EncoderProfilesProvider getEncoderProfilesProvider();

    default CameraInfoInternal getImplementation() {
        return this;
    }

    Set<DynamicRange> getSupportedDynamicRanges();

    List<Size> getSupportedHighResolutions(int i);

    List<Size> getSupportedResolutions(int i);

    Timebase getTimebase();

    void removeSessionCaptureCallback(CameraCaptureCallback cameraCaptureCallback);

    @Override // androidx.camera.core.CameraInfo
    default CameraSelector getCameraSelector() {
        return new CameraSelector.Builder().addCameraFilter(new CameraFilter() { // from class: androidx.camera.core.impl.CameraInfoInternal$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.CameraFilter
            public final List filter(List list) {
                return CameraInfoInternal.lambda$getCameraSelector$0(this.f$0, list);
            }
        }).addCameraFilter(new LensFacingCameraFilter(getLensFacing())).build();
    }

    static /* synthetic */ List lambda$getCameraSelector$0(CameraInfoInternal _this, List list) {
        String cameraId = _this.getCameraId();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            CameraInfo cameraInfo = (CameraInfo) it.next();
            Preconditions.checkArgument(cameraInfo instanceof CameraInfoInternal);
            if (((CameraInfoInternal) cameraInfo).getCameraId().equals(cameraId)) {
                return Collections.singletonList(cameraInfo);
            }
        }
        throw new IllegalStateException("Unable to find camera with id " + cameraId + " from list of available cameras.");
    }
}

