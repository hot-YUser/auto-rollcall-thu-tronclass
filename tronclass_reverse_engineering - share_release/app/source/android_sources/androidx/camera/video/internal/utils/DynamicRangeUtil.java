package androidx.camera.video.internal.utils;

import androidx.camera.core.DynamicRange;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
public class DynamicRangeUtil {
    public static final Map<Integer, Set<Integer>> DR_TO_VP_BIT_DEPTH_MAP;
    public static final Map<Integer, Set<Integer>> DR_TO_VP_FORMAT_MAP;
    private static final Map<String, Map<DynamicRange, Integer>> MIME_TO_DEFAULT_PROFILE_LEVEL_MAP;
    public static final Map<Integer, Integer> VP_TO_DR_FORMAT_MAP;

    static {
        HashMap map = new HashMap();
        DR_TO_VP_BIT_DEPTH_MAP = map;
        HashMap map2 = new HashMap();
        DR_TO_VP_FORMAT_MAP = map2;
        HashMap map3 = new HashMap();
        VP_TO_DR_FORMAT_MAP = map3;
        HashMap map4 = new HashMap();
        MIME_TO_DEFAULT_PROFILE_LEVEL_MAP = map4;
        map.put(8, new HashSet(Collections.singletonList(8)));
        map.put(10, new HashSet(Collections.singletonList(10)));
        map.put(0, new HashSet(Arrays.asList(8, 10)));
        map2.put(0, new HashSet(Arrays.asList(0, 1, 2, 3, 4)));
        map2.put(1, new HashSet(Collections.singletonList(0)));
        map2.put(2, new HashSet(Arrays.asList(1, 2, 3, 4)));
        map2.put(3, new HashSet(Collections.singletonList(1)));
        map2.put(4, new HashSet(Collections.singletonList(2)));
        map2.put(5, new HashSet(Collections.singletonList(3)));
        map2.put(6, new HashSet(Collections.singletonList(4)));
        map3.put(0, 1);
        map3.put(1, 3);
        map3.put(2, 4);
        map3.put(3, 5);
        map3.put(4, 6);
        HashMap map5 = new HashMap();
        map5.put(DynamicRange.SDR, 1);
        map5.put(DynamicRange.HLG_10_BIT, 2);
        map5.put(DynamicRange.HDR10_10_BIT, 4096);
        map5.put(DynamicRange.HDR10_PLUS_10_BIT, 8192);
        HashMap map6 = new HashMap();
        map6.put(DynamicRange.SDR, 1);
        map6.put(DynamicRange.HLG_10_BIT, 2);
        map6.put(DynamicRange.HDR10_10_BIT, 4096);
        map6.put(DynamicRange.HDR10_PLUS_10_BIT, 8192);
        HashMap map7 = new HashMap();
        map7.put(DynamicRange.SDR, 1);
        map7.put(DynamicRange.HLG_10_BIT, 4);
        map7.put(DynamicRange.HDR10_10_BIT, 4096);
        map7.put(DynamicRange.HDR10_PLUS_10_BIT, 16384);
        HashMap map8 = new HashMap();
        map8.put(DynamicRange.DOLBY_VISION_10_BIT, 256);
        map8.put(DynamicRange.DOLBY_VISION_8_BIT, 512);
        map4.put("video/hevc", map5);
        map4.put("video/av01", map6);
        map4.put("video/x-vnd.on2.vp9", map7);
        map4.put("video/dolby-vision", map8);
    }

    private DynamicRangeUtil() {
    }

    public static Set<Integer> dynamicRangeToVideoProfileHdrFormats(DynamicRange dynamicRange) {
        Set<Integer> set = DR_TO_VP_FORMAT_MAP.get(Integer.valueOf(dynamicRange.getEncoding()));
        return set == null ? Collections.emptySet() : set;
    }

    public static Set<Integer> dynamicRangeToVideoProfileBitDepth(DynamicRange dynamicRange) {
        Set<Integer> set = DR_TO_VP_BIT_DEPTH_MAP.get(Integer.valueOf(dynamicRange.getBitDepth()));
        return set == null ? Collections.emptySet() : set;
    }

    public static int dynamicRangeToCodecProfileLevelForMime(String str, DynamicRange dynamicRange) {
        Integer num;
        Map<DynamicRange, Integer> map = MIME_TO_DEFAULT_PROFILE_LEVEL_MAP.get(str);
        if (map == null || (num = map.get(dynamicRange)) == null) {
            return -1;
        }
        return num.intValue();
    }
}

