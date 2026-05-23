package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import android.util.Size;
import androidx.camera.core.impl.Quirk;
import com.king.camera.scan.config.ResolutionCameraConfig;
import com.onesignal.OneSignalRemoteParams;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import org.opencv.videoio.Videoio;
public class SmallDisplaySizeQuirk implements Quirk {
    private static final Map<String, Size> MODEL_TO_DISPLAY_SIZE_MAP;
    private static final String TAG = "SmallDisplaySizeQuirk";

    static {
        HashMap map = new HashMap();
        MODEL_TO_DISPLAY_SIZE_MAP = map;
        map.put("REDMI NOTE 8", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2340));
        map.put("REDMI NOTE 7", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2340));
        map.put("SM-A207M", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1560));
        map.put("REDMI NOTE 7S", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2340));
        map.put("SM-A127F", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("SM-A536E", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, Videoio.CAP_XINE));
        map.put("220233L2I", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("V2149", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("VIVO 1920", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2340));
        map.put("CPH2223", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, Videoio.CAP_XINE));
        map.put("V2029", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("CPH1901", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1520));
        map.put("REDMI Y3", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1520));
        map.put("SM-A045M", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("SM-A146U", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2408));
        map.put("CPH1909", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1520));
        map.put("NOKIA 4.2", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1520));
        map.put("SM-G960U1", new Size(OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW, 2960));
        map.put("SM-A137F", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, 2408));
        map.put("VIVO 1816", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1520));
        map.put("INFINIX X6817", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, 1612));
        map.put("SM-A037F", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("NOKIA 2.4", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("SM-A125M", new Size(ResolutionCameraConfig.IMAGE_QUALITY_720P, Videoio.CAP_OPENNI2));
        map.put("INFINIX X670", new Size(ResolutionCameraConfig.IMAGE_QUALITY_1080P, Videoio.CAP_XINE));
    }

    static boolean load() {
        return MODEL_TO_DISPLAY_SIZE_MAP.containsKey(Build.MODEL.toUpperCase(Locale.US));
    }

    public Size getDisplaySize() {
        return MODEL_TO_DISPLAY_SIZE_MAP.get(Build.MODEL.toUpperCase(Locale.US));
    }
}

