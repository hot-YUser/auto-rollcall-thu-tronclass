package androidx.camera.video;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
public class Quality {
    public static final Quality FHD;
    public static final Quality HD;
    public static final Quality HIGHEST;
    public static final Quality LOWEST;
    static final Quality NONE;
    private static final Set<Quality> QUALITIES;
    private static final List<Quality> QUALITIES_ORDER_BY_SIZE;
    public static final Quality SD;
    public static final Quality UHD;

    private Quality() {
    }

    static {
        ConstantQuality constantQualityOf = ConstantQuality.of(4, "SD");
        SD = constantQualityOf;
        ConstantQuality constantQualityOf2 = ConstantQuality.of(5, "HD");
        HD = constantQualityOf2;
        ConstantQuality constantQualityOf3 = ConstantQuality.of(6, "FHD");
        FHD = constantQualityOf3;
        ConstantQuality constantQualityOf4 = ConstantQuality.of(8, "UHD");
        UHD = constantQualityOf4;
        ConstantQuality constantQualityOf5 = ConstantQuality.of(0, "LOWEST");
        LOWEST = constantQualityOf5;
        ConstantQuality constantQualityOf6 = ConstantQuality.of(1, "HIGHEST");
        HIGHEST = constantQualityOf6;
        NONE = ConstantQuality.of(-1, "NONE");
        QUALITIES = new HashSet(Arrays.asList(constantQualityOf5, constantQualityOf6, constantQualityOf, constantQualityOf2, constantQualityOf3, constantQualityOf4));
        QUALITIES_ORDER_BY_SIZE = Arrays.asList(constantQualityOf4, constantQualityOf3, constantQualityOf2, constantQualityOf);
    }

    static boolean containsQuality(Quality quality) {
        return QUALITIES.contains(quality);
    }

    static List<Quality> getSortedQualities() {
        return new ArrayList(QUALITIES_ORDER_BY_SIZE);
    }

    static abstract class ConstantQuality extends Quality {
        abstract String getName();

        abstract int getValue();

        ConstantQuality() {
            super();
        }

        static ConstantQuality of(int i, String str) {
            return new AutoValue_Quality_ConstantQuality(i, str);
        }
    }
}

