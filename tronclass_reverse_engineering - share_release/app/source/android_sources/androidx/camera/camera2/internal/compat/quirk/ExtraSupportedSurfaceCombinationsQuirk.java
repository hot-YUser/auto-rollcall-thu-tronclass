package androidx.camera.camera2.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.impl.Quirk;
import androidx.camera.core.impl.SurfaceCombination;
import androidx.camera.core.impl.SurfaceConfig;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
public class ExtraSupportedSurfaceCombinationsQuirk implements Quirk {
    private static final SurfaceCombination FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION = createFullYuvPrivYuvConfiguration();
    private static final SurfaceCombination FULL_LEVEL_YUV_YUV_YUV_CONFIGURATION = createFullYuvYuvYuvConfiguration();
    private static final SurfaceCombination LEVEL_3_LEVEL_PRIV_PRIV_YUV_RAW_CONFIGURATION = createLevel3PrivPrivYuvRawConfiguration();
    private static final Set<String> SUPPORT_EXTRA_FULL_CONFIGURATIONS_SAMSUNG_MODELS = new HashSet(Arrays.asList("SM-A515F", "SM-A515U", "SM-A515U1", "SM-A515W", "SM-S515DL", "SC-54A", "SCG07", "SM-A5160", "SM-A516B", "SM-A516N", "SM-A516U", "SM-A516U1", "SM-A516V", "SM-A715F", "SM-A715W", "SM-A7160", "SM-A716B", "SM-A716U", "SM-A716U1", "SM-A716V", "SM-A8050", "SM-A805F", "SM-A805N", "SCV44", "SM-F9000", "SM-F900F", "SM-F900U", "SM-F900U1", "SM-F900W", "SM-F907B", "SM-F907N", "SM-N970F", "SM-N9700", "SM-N970U", "SM-N970U1", "SM-N970W", "SM-N971N", "SM-N770F", "SC-01M", "SCV45", "SM-N9750", "SM-N975C", "SM-N975U", "SM-N975U1", "SM-N975W", "SM-N975F", "SM-N976B", "SM-N976N", "SM-N9760", "SM-N976Q", "SM-N976V", "SM-N976U", "SM-N9810", "SM-N981N", "SM-N981U", "SM-N981U1", "SM-N981W", "SM-N981B", "SC-53A", "SCG06", "SM-N9860", "SM-N986N", "SM-N986U", "SM-N986U1", "SM-N986W", "SM-N986B", "SC-03L", "SCV41", "SM-G973F", "SM-G973N", "SM-G9730", "SM-G9738", "SM-G973C", "SM-G973U", "SM-G973U1", "SM-G973W", "SM-G977B", "SM-G977N", "SM-G977P", "SM-G977T", "SM-G977U", "SM-G770F", "SM-G770U1", "SC-04L", "SCV42", "SM-G975F", "SM-G975N", "SM-G9750", "SM-G9758", "SM-G975U", "SM-G975U1", "SM-G975W", "SC-05L", "SM-G970F", "SM-G970N", "SM-G9700", "SM-G9708", "SM-G970U", "SM-G970U1", "SM-G970W", "SC-51A", "SC51Aa", "SCG01", "SM-G9810", "SM-G981N", "SM-G981U", "SM-G981U1", "SM-G981V", "SM-G981W", "SM-G981B", "SCG03", "SM-G9880", "SM-G988N", "SM-G988Q", "SM-G988U", "SM-G988U1", "SM-G988W", "SM-G988B", "SC-52A", "SCG02", "SM-G9860", "SM-G986N", "SM-G986U", "SM-G986U1", "SM-G986W", "SM-G986B", "SCV47", "SM-F7000", "SM-F700F", "SM-F700N", "SM-F700U", "SM-F700U1", "SM-F700W", "SCG04", "SM-F7070", "SM-F707B", "SM-F707N", "SM-F707U", "SM-F707U1", "SM-F707W", "SM-F9160", "SM-F916B", "SM-F916N", "SM-F916Q", "SM-F916U", "SM-F916U1", "SM-F916W"));
    private static final Set<String> SUPPORT_EXTRA_LEVEL_3_CONFIGURATIONS_GOOGLE_MODELS = new HashSet(Arrays.asList("PIXEL 6", "PIXEL 6 PRO", "PIXEL 7", "PIXEL 7 PRO"));
    private static final String TAG = "ExtraSupportedSurfaceCombinationsQuirk";

    static boolean load() {
        return isSamsungS7() || supportExtraFullConfigurationsSamsungDevice() || supportExtraLevel3ConfigurationsGoogleDevice();
    }

    private static boolean isSamsungS7() {
        return "heroqltevzw".equalsIgnoreCase(Build.DEVICE) || "heroqltetmo".equalsIgnoreCase(Build.DEVICE);
    }

    private static boolean supportExtraFullConfigurationsSamsungDevice() {
        if (!"samsung".equalsIgnoreCase(Build.BRAND)) {
            return false;
        }
        return SUPPORT_EXTRA_FULL_CONFIGURATIONS_SAMSUNG_MODELS.contains(Build.MODEL.toUpperCase(Locale.US));
    }

    private static boolean supportExtraLevel3ConfigurationsGoogleDevice() {
        if (!"google".equalsIgnoreCase(Build.BRAND)) {
            return false;
        }
        return SUPPORT_EXTRA_LEVEL_3_CONFIGURATIONS_GOOGLE_MODELS.contains(Build.MODEL.toUpperCase(Locale.US));
    }

    public List<SurfaceCombination> getExtraSupportedSurfaceCombinations(String str, int i) {
        if (isSamsungS7()) {
            return getSamsungS7ExtraCombinations(str);
        }
        if (supportExtraFullConfigurationsSamsungDevice()) {
            return getLimitedDeviceExtraSupportedFullConfigurations(i);
        }
        if (supportExtraLevel3ConfigurationsGoogleDevice()) {
            return Collections.singletonList(LEVEL_3_LEVEL_PRIV_PRIV_YUV_RAW_CONFIGURATION);
        }
        return Collections.emptyList();
    }

    private List<SurfaceCombination> getSamsungS7ExtraCombinations(String str) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("1")) {
            arrayList.add(FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION);
        }
        return arrayList;
    }

    private List<SurfaceCombination> getLimitedDeviceExtraSupportedFullConfigurations(int i) {
        ArrayList arrayList = new ArrayList();
        if (i == 0) {
            arrayList.add(FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION);
            arrayList.add(FULL_LEVEL_YUV_YUV_YUV_CONFIGURATION);
        }
        return arrayList;
    }

    private static SurfaceCombination createFullYuvPrivYuvConfiguration() {
        SurfaceCombination surfaceCombination = new SurfaceCombination();
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.VGA));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.PRIV, SurfaceConfig.ConfigSize.PREVIEW));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.MAXIMUM));
        return surfaceCombination;
    }

    private static SurfaceCombination createFullYuvYuvYuvConfiguration() {
        SurfaceCombination surfaceCombination = new SurfaceCombination();
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.VGA));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.PREVIEW));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.MAXIMUM));
        return surfaceCombination;
    }

    private static SurfaceCombination createLevel3PrivPrivYuvRawConfiguration() {
        SurfaceCombination surfaceCombination = new SurfaceCombination();
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.PRIV, SurfaceConfig.ConfigSize.PREVIEW));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.PRIV, SurfaceConfig.ConfigSize.VGA));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.YUV, SurfaceConfig.ConfigSize.MAXIMUM));
        surfaceCombination.addSurfaceConfig(SurfaceConfig.create(SurfaceConfig.ConfigType.RAW, SurfaceConfig.ConfigSize.MAXIMUM));
        return surfaceCombination;
    }
}

