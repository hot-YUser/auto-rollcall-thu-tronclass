package androidx.camera.video.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.video.Quality;
import java.util.Arrays;
import java.util.Locale;
public class ReportedVideoQualityNotSupportedQuirk implements VideoQualityQuirk {
    static boolean load() {
        return isHuaweiMate20() || isHuaweiMate20Pro() || isVivoY91i() || isHuaweiP40Lite();
    }

    private static boolean isHuaweiMate20() {
        return "Huawei".equalsIgnoreCase(Build.BRAND) && "HMA-L29".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isHuaweiMate20Pro() {
        return "Huawei".equalsIgnoreCase(Build.BRAND) && "LYA-AL00".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isVivoY91i() {
        return "Vivo".equalsIgnoreCase(Build.BRAND) && "vivo 1820".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isHuaweiP40Lite() {
        return "Huawei".equalsIgnoreCase(Build.MANUFACTURER) && Arrays.asList("JNY-L21A", "JNY-L01A", "JNY-L21B", "JNY-L22A", "JNY-L02A", "JNY-L22B", "JNY-LX1").contains(Build.MODEL.toUpperCase(Locale.US));
    }

    @Override // androidx.camera.video.internal.compat.quirk.VideoQualityQuirk
    public boolean isProblematicVideoQuality(CameraInfoInternal cameraInfoInternal, Quality quality) {
        if (isHuaweiMate20() || isHuaweiMate20Pro()) {
            return quality == Quality.UHD;
        }
        if (isVivoY91i()) {
            return quality == Quality.HD || quality == Quality.FHD;
        }
        if (isHuaweiP40Lite()) {
            return cameraInfoInternal.getLensFacing() == 0 && (quality == Quality.FHD || quality == Quality.HD);
        }
        return false;
    }

    @Override // androidx.camera.video.internal.compat.quirk.VideoQualityQuirk
    public boolean workaroundBySurfaceProcessing() {
        return isHuaweiMate20() || isHuaweiMate20Pro() || isHuaweiP40Lite();
    }
}

