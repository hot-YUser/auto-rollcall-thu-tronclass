package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import android.util.Range;
import android.util.Size;
import androidx.camera.core.impl.Quirk;
import androidx.camera.core.impl.SurfaceConfig;
import com.king.camera.scan.config.ResolutionCameraConfig;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
public class ExtraCroppingQuirk implements Quirk {
    private static final Map<String, Range<Integer>> SAMSUNG_DISTORTION_MODELS_TO_API_LEVEL_MAP;

    static {
        HashMap map = new HashMap();
        SAMSUNG_DISTORTION_MODELS_TO_API_LEVEL_MAP = map;
        map.put("SM-T580", null);
        map.put("SM-J710MN", new Range(21, 26));
        map.put("SM-A320FL", null);
        map.put("SM-G570M", null);
        map.put("SM-G610F", null);
        map.put("SM-G610M", new Range(21, 26));
    }

    static boolean load() {
        return isSamsungDistortion();
    }

    public Size getVerifiedResolution(SurfaceConfig.ConfigType configType) {
        if (!isSamsungDistortion()) {
            return null;
        }
        int i = AnonymousClass1.$SwitchMap$androidx$camera$core$impl$SurfaceConfig$ConfigType[configType.ordinal()];
        if (i == 1) {
            return new Size(1920, ResolutionCameraConfig.IMAGE_QUALITY_1080P);
        }
        if (i == 2) {
            return new Size(1280, ResolutionCameraConfig.IMAGE_QUALITY_720P);
        }
        if (i != 3) {
            return null;
        }
        return new Size(3264, 1836);
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$core$impl$SurfaceConfig$ConfigType;

        static {
            int[] iArr = new int[SurfaceConfig.ConfigType.values().length];
            $SwitchMap$androidx$camera$core$impl$SurfaceConfig$ConfigType = iArr;
            try {
                iArr[SurfaceConfig.ConfigType.PRIV.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$SurfaceConfig$ConfigType[SurfaceConfig.ConfigType.YUV.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$SurfaceConfig$ConfigType[SurfaceConfig.ConfigType.JPEG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private static boolean isSamsungDistortion() {
        if (!"samsung".equalsIgnoreCase(Build.BRAND)) {
            return false;
        }
        Map<String, Range<Integer>> map = SAMSUNG_DISTORTION_MODELS_TO_API_LEVEL_MAP;
        if (!map.containsKey(Build.MODEL.toUpperCase(Locale.US))) {
            return false;
        }
        Range<Integer> range = map.get(Build.MODEL.toUpperCase(Locale.US));
        if (range == null) {
            return true;
        }
        return range.contains(Integer.valueOf(Build.VERSION.SDK_INT));
    }
}

