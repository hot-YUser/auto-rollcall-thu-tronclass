package androidx.camera.video;

import android.util.Range;
import android.util.Rational;
import android.util.Size;
import androidx.camera.core.impl.utils.AspectRatioUtil;
import androidx.camera.core.internal.utils.SizeUtil;
import com.king.camera.scan.config.ResolutionCameraConfig;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
class QualityRatioToResolutionsTable {
    private static final Map<Integer, Rational> sAspectRatioMap;
    private static final Map<Quality, Range<Integer>> sQualityRangeMap;
    private final Map<QualityRatio, List<Size>> mTable = new HashMap();

    static {
        HashMap map = new HashMap();
        sQualityRangeMap = map;
        map.put(Quality.UHD, Range.create(2160, 4319));
        map.put(Quality.FHD, Range.create(Integer.valueOf(ResolutionCameraConfig.IMAGE_QUALITY_1080P), 1439));
        map.put(Quality.HD, Range.create(Integer.valueOf(ResolutionCameraConfig.IMAGE_QUALITY_720P), 1079));
        map.put(Quality.SD, Range.create(241, 719));
        HashMap map2 = new HashMap();
        sAspectRatioMap = map2;
        map2.put(0, AspectRatioUtil.ASPECT_RATIO_4_3);
        map2.put(1, AspectRatioUtil.ASPECT_RATIO_16_9);
    }

    QualityRatioToResolutionsTable(List<Size> list, Map<Quality, Size> map) {
        for (Quality quality : sQualityRangeMap.keySet()) {
            this.mTable.put(QualityRatio.of(quality, -1), new ArrayList());
            Iterator<Integer> it = sAspectRatioMap.keySet().iterator();
            while (it.hasNext()) {
                this.mTable.put(QualityRatio.of(quality, it.next().intValue()), new ArrayList());
            }
        }
        addProfileSizesToTable(map);
        addResolutionsToTable(list);
        sortQualityRatioRow(map);
    }

    List<Size> getResolutions(Quality quality, int i) {
        List<Size> qualityRatioRow = getQualityRatioRow(quality, i);
        return qualityRatioRow != null ? new ArrayList(qualityRatioRow) : new ArrayList(0);
    }

    private void addProfileSizesToTable(Map<Quality, Size> map) {
        for (Map.Entry<Quality, Size> entry : map.entrySet()) {
            ((List) Objects.requireNonNull(getQualityRatioRow(entry.getKey(), -1))).add(entry.getValue());
        }
    }

    private void addResolutionsToTable(List<Size> list) {
        Integer numFindMappedAspectRatio;
        for (Size size : list) {
            Quality qualityFindMappedQuality = findMappedQuality(size);
            if (qualityFindMappedQuality != null && (numFindMappedAspectRatio = findMappedAspectRatio(size)) != null) {
                ((List) Objects.requireNonNull(getQualityRatioRow(qualityFindMappedQuality, numFindMappedAspectRatio.intValue()))).add(size);
            }
        }
    }

    private void sortQualityRatioRow(Map<Quality, Size> map) {
        for (Map.Entry<QualityRatio, List<Size>> entry : this.mTable.entrySet()) {
            Size size = map.get(entry.getKey().getQuality());
            if (size != null) {
                final int area = SizeUtil.getArea(size);
                Collections.sort(entry.getValue(), new Comparator() { // from class: androidx.camera.video.QualityRatioToResolutionsTable$$ExternalSyntheticLambda0
                    @Override // java.util.Comparator
                    public final int compare(Object obj, Object obj2) {
                        return QualityRatioToResolutionsTable.lambda$sortQualityRatioRow$0(area, (Size) obj, (Size) obj2);
                    }
                });
            }
        }
    }

    static /* synthetic */ int lambda$sortQualityRatioRow$0(int i, Size size, Size size2) {
        return Math.abs(SizeUtil.getArea(size) - i) - Math.abs(SizeUtil.getArea(size2) - i);
    }

    private static Quality findMappedQuality(Size size) {
        for (Map.Entry<Quality, Range<Integer>> entry : sQualityRangeMap.entrySet()) {
            if (entry.getValue().contains(Integer.valueOf(size.getHeight()))) {
                return entry.getKey();
            }
        }
        return null;
    }

    private static Integer findMappedAspectRatio(Size size) {
        for (Map.Entry<Integer, Rational> entry : sAspectRatioMap.entrySet()) {
            if (AspectRatioUtil.hasMatchingAspectRatio(size, entry.getValue(), SizeUtil.RESOLUTION_QVGA)) {
                return entry.getKey();
            }
        }
        return null;
    }

    private List<Size> getQualityRatioRow(Quality quality, int i) {
        return this.mTable.get(QualityRatio.of(quality, i));
    }

    static abstract class QualityRatio {
        abstract int getAspectRatio();

        abstract Quality getQuality();

        QualityRatio() {
        }

        static QualityRatio of(Quality quality, int i) {
            return new AutoValue_QualityRatioToResolutionsTable_QualityRatio(quality, i);
        }
    }
}

