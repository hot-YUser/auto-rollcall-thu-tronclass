package androidx.camera.camera2.internal.compat.quirk;

import android.hardware.camera2.params.StreamConfigurationMap;
import android.os.Build;
import android.util.Size;
import androidx.camera.core.impl.Quirk;
import com.king.camera.scan.config.ResolutionCameraConfig;
import com.onesignal.OneSignalRemoteParams;
import org.opencv.videoio.Videoio;
public class ExtraSupportedOutputSizeQuirk implements Quirk {
    static boolean load() {
        return isMotoE5Play();
    }

    private static boolean isMotoE5Play() {
        return "motorola".equalsIgnoreCase(Build.BRAND) && "moto e5 play".equalsIgnoreCase(Build.MODEL);
    }

    public Size[] getExtraSupportedResolutions(int i) {
        if (i == 34 && isMotoE5Play()) {
            return getMotoE5PlayExtraSupportedResolutions();
        }
        return new Size[0];
    }

    public <T> Size[] getExtraSupportedResolutions(Class<T> cls) {
        if (StreamConfigurationMap.isOutputSupportedFor(cls) && isMotoE5Play()) {
            return getMotoE5PlayExtraSupportedResolutions();
        }
        return new Size[0];
    }

    private Size[] getMotoE5PlayExtraSupportedResolutions() {
        return new Size[]{new Size(1920, ResolutionCameraConfig.IMAGE_QUALITY_1080P), new Size(OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW, ResolutionCameraConfig.IMAGE_QUALITY_1080P), new Size(1280, ResolutionCameraConfig.IMAGE_QUALITY_720P), new Size(960, ResolutionCameraConfig.IMAGE_QUALITY_720P), new Size(864, Videoio.CAP_PROP_XI_CC_MATRIX_01), new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_PROP_XI_CC_MATRIX_01)};
    }
}

