package androidx.camera.camera2.internal.compat.workaround;

import android.hardware.camera2.CaptureRequest;
import androidx.camera.camera2.impl.Camera2ImplConfig;
import androidx.camera.camera2.internal.compat.quirk.DeviceQuirks;
import androidx.camera.camera2.internal.compat.quirk.TorchIsClosedAfterImageCapturingQuirk;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.DeferrableSurface;
import java.util.Iterator;
import java.util.List;
public class TorchStateReset {
    private final boolean mIsImageCaptureTorchIsClosedQuirkEnabled;

    public TorchStateReset() {
        this.mIsImageCaptureTorchIsClosedQuirkEnabled = DeviceQuirks.get(TorchIsClosedAfterImageCapturingQuirk.class) != null;
    }

    public boolean isTorchResetRequired(List<CaptureRequest> list, boolean z) {
        if (!this.mIsImageCaptureTorchIsClosedQuirkEnabled || !z) {
            return false;
        }
        Iterator<CaptureRequest> it = list.iterator();
        while (it.hasNext()) {
            Integer num = (Integer) it.next().get(CaptureRequest.FLASH_MODE);
            if (num != null && num.intValue() == 2) {
                return true;
            }
        }
        return false;
    }

    public CaptureConfig createTorchResetRequest(CaptureConfig captureConfig) {
        CaptureConfig.Builder builder = new CaptureConfig.Builder();
        builder.setTemplateType(captureConfig.getTemplateType());
        Iterator<DeferrableSurface> it = captureConfig.getSurfaces().iterator();
        while (it.hasNext()) {
            builder.addSurface(it.next());
        }
        builder.addImplementationOptions(captureConfig.getImplementationOptions());
        Camera2ImplConfig.Builder builder2 = new Camera2ImplConfig.Builder();
        builder2.setCaptureRequestOption(CaptureRequest.FLASH_MODE, 0);
        builder.addImplementationOptions(builder2.build());
        return builder.build();
    }
}

