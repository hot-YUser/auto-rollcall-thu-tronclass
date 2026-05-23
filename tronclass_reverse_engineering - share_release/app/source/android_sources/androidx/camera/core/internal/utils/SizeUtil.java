package androidx.camera.core.internal.utils;

import android.util.Size;
import androidx.camera.core.impl.utils.CompareSizesByArea;
import com.king.camera.scan.config.ResolutionCameraConfig;
import com.onesignal.OneSignalRemoteParams;
import java.util.Collections;
import java.util.List;
import org.opencv.videoio.Videoio;
public final class SizeUtil {
    public static final Size RESOLUTION_ZERO = new Size(0, 0);
    public static final Size RESOLUTION_QVGA = new Size(320, 240);
    public static final Size RESOLUTION_VGA = new Size(640, Videoio.CAP_PROP_XI_CC_MATRIX_01);
    public static final Size RESOLUTION_480P = new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_PROP_XI_CC_MATRIX_01);
    public static final Size RESOLUTION_720P = new Size(1280, ResolutionCameraConfig.IMAGE_QUALITY_720P);
    public static final Size RESOLUTION_1080P = new Size(1920, ResolutionCameraConfig.IMAGE_QUALITY_1080P);
    public static final Size RESOLUTION_1440P = new Size(1920, OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW);

    private SizeUtil() {
    }

    public static int getArea(Size size) {
        return size.getWidth() * size.getHeight();
    }

    public static boolean isSmallerByArea(Size size, Size size2) {
        return getArea(size) < getArea(size2);
    }

    public static boolean isLongerInAnyEdge(Size size, Size size2) {
        return size.getWidth() > size2.getWidth() || size.getHeight() > size2.getHeight();
    }

    public static Size getMaxSize(List<Size> list) {
        if (list.isEmpty()) {
            return null;
        }
        return (Size) Collections.max(list, new CompareSizesByArea());
    }
}

