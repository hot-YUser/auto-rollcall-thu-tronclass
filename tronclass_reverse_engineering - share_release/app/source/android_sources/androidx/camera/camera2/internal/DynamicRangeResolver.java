package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import android.text.TextUtils;
import androidx.camera.camera2.internal.compat.CameraCharacteristicsCompat;
import androidx.camera.camera2.internal.compat.params.DynamicRangeConversions;
import androidx.camera.camera2.internal.compat.params.DynamicRangesCompat;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.impl.AttachedSurfaceInfo;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.core.util.Preconditions;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
final class DynamicRangeResolver {
    private static final String TAG = "DynamicRangeResolver";
    private final CameraCharacteristicsCompat mCharacteristics;
    private final DynamicRangesCompat mDynamicRangesInfo;
    private final boolean mIs10BitSupported;

    DynamicRangeResolver(CameraCharacteristicsCompat cameraCharacteristicsCompat) {
        this.mCharacteristics = cameraCharacteristicsCompat;
        this.mDynamicRangesInfo = DynamicRangesCompat.fromCameraCharacteristics(cameraCharacteristicsCompat);
        int[] iArr = (int[]) cameraCharacteristicsCompat.get(CameraCharacteristics.REQUEST_AVAILABLE_CAPABILITIES);
        boolean z = false;
        if (iArr != null) {
            int length = iArr.length;
            int i = 0;
            while (true) {
                if (i >= length) {
                    break;
                }
                if (iArr[i] == 18) {
                    z = true;
                    break;
                }
                i++;
            }
        }
        this.mIs10BitSupported = z;
    }

    boolean is10BitDynamicRangeSupported() {
        return this.mIs10BitSupported;
    }

    Map<UseCaseConfig<?>, DynamicRange> resolveAndValidateDynamicRanges(List<AttachedSurfaceInfo> list, List<UseCaseConfig<?>> list2, List<Integer> list3) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        Iterator<AttachedSurfaceInfo> it = list.iterator();
        while (it.hasNext()) {
            linkedHashSet.add(it.next().getDynamicRange());
        }
        Set<DynamicRange> supportedDynamicRanges = this.mDynamicRangesInfo.getSupportedDynamicRanges();
        HashSet hashSet = new HashSet(supportedDynamicRanges);
        Iterator<DynamicRange> it2 = linkedHashSet.iterator();
        while (it2.hasNext()) {
            updateConstraints(hashSet, it2.next(), this.mDynamicRangesInfo);
        }
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        ArrayList arrayList3 = new ArrayList();
        Iterator<Integer> it3 = list3.iterator();
        while (it3.hasNext()) {
            UseCaseConfig<?> useCaseConfig = list2.get(it3.next().intValue());
            DynamicRange dynamicRange = useCaseConfig.getDynamicRange();
            if (isFullyUnspecified(dynamicRange)) {
                arrayList3.add(useCaseConfig);
            } else if (isPartiallySpecified(dynamicRange)) {
                arrayList2.add(useCaseConfig);
            } else {
                arrayList.add(useCaseConfig);
            }
        }
        HashMap map = new HashMap();
        LinkedHashSet linkedHashSet2 = new LinkedHashSet();
        ArrayList<UseCaseConfig<?>> arrayList4 = new ArrayList();
        arrayList4.addAll(arrayList);
        arrayList4.addAll(arrayList2);
        arrayList4.addAll(arrayList3);
        for (UseCaseConfig<?> useCaseConfig2 : arrayList4) {
            DynamicRange dynamicRangeResolveDynamicRangeAndUpdateConstraints = resolveDynamicRangeAndUpdateConstraints(supportedDynamicRanges, linkedHashSet, linkedHashSet2, useCaseConfig2, hashSet);
            map.put(useCaseConfig2, dynamicRangeResolveDynamicRangeAndUpdateConstraints);
            if (!linkedHashSet.contains(dynamicRangeResolveDynamicRangeAndUpdateConstraints)) {
                linkedHashSet2.add(dynamicRangeResolveDynamicRangeAndUpdateConstraints);
            }
        }
        return map;
    }

    private DynamicRange resolveDynamicRangeAndUpdateConstraints(Set<DynamicRange> set, Set<DynamicRange> set2, Set<DynamicRange> set3, UseCaseConfig<?> useCaseConfig, Set<DynamicRange> set4) {
        DynamicRange dynamicRange = useCaseConfig.getDynamicRange();
        DynamicRange dynamicRangeResolveDynamicRange = resolveDynamicRange(dynamicRange, set4, set2, set3, useCaseConfig.getTargetName());
        if (dynamicRangeResolveDynamicRange != null) {
            updateConstraints(set4, dynamicRangeResolveDynamicRange, this.mDynamicRangesInfo);
            return dynamicRangeResolveDynamicRange;
        }
        throw new IllegalArgumentException(String.format("Unable to resolve supported dynamic range. The dynamic range may not be supported on the device or may not be allowed concurrently with other attached use cases.\nUse case:\n  %s\nRequested dynamic range:\n  %s\nSupported dynamic ranges:\n  %s\nConstrained set of concurrent dynamic ranges:\n  %s", useCaseConfig.getTargetName(), dynamicRange, TextUtils.join("\n  ", set), TextUtils.join("\n  ", set4)));
    }

    private DynamicRange resolveDynamicRange(DynamicRange dynamicRange, Set<DynamicRange> set, Set<DynamicRange> set2, Set<DynamicRange> set3, String str) {
        DynamicRange recommended10BitDynamicRange;
        if (dynamicRange.isFullySpecified()) {
            if (set.contains(dynamicRange)) {
                return dynamicRange;
            }
            return null;
        }
        int encoding = dynamicRange.getEncoding();
        int bitDepth = dynamicRange.getBitDepth();
        if (encoding == 1 && bitDepth == 0) {
            if (set.contains(DynamicRange.SDR)) {
                return DynamicRange.SDR;
            }
            return null;
        }
        DynamicRange dynamicRangeFindSupportedHdrMatch = findSupportedHdrMatch(dynamicRange, set2, set);
        if (dynamicRangeFindSupportedHdrMatch != null) {
            Logger.d(TAG, String.format("Resolved dynamic range for use case %s from existing attached surface.\n%s\n->\n%s", str, dynamicRange, dynamicRangeFindSupportedHdrMatch));
            return dynamicRangeFindSupportedHdrMatch;
        }
        DynamicRange dynamicRangeFindSupportedHdrMatch2 = findSupportedHdrMatch(dynamicRange, set3, set);
        if (dynamicRangeFindSupportedHdrMatch2 != null) {
            Logger.d(TAG, String.format("Resolved dynamic range for use case %s from concurrently bound use case.\n%s\n->\n%s", str, dynamicRange, dynamicRangeFindSupportedHdrMatch2));
            return dynamicRangeFindSupportedHdrMatch2;
        }
        if (canResolveWithinConstraints(dynamicRange, DynamicRange.SDR, set)) {
            Logger.d(TAG, String.format("Resolved dynamic range for use case %s to no compatible HDR dynamic ranges.\n%s\n->\n%s", str, dynamicRange, DynamicRange.SDR));
            return DynamicRange.SDR;
        }
        if (encoding == 2 && (bitDepth == 10 || bitDepth == 0)) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            if (Build.VERSION.SDK_INT >= 33) {
                recommended10BitDynamicRange = Api33Impl.getRecommended10BitDynamicRange(this.mCharacteristics);
                if (recommended10BitDynamicRange != null) {
                    linkedHashSet.add(recommended10BitDynamicRange);
                }
            } else {
                recommended10BitDynamicRange = null;
            }
            linkedHashSet.add(DynamicRange.HLG_10_BIT);
            DynamicRange dynamicRangeFindSupportedHdrMatch3 = findSupportedHdrMatch(dynamicRange, linkedHashSet, set);
            if (dynamicRangeFindSupportedHdrMatch3 != null) {
                Logger.d(TAG, String.format("Resolved dynamic range for use case %s from %s 10-bit supported dynamic range.\n%s\n->\n%s", str, Objects.equals(dynamicRangeFindSupportedHdrMatch3, recommended10BitDynamicRange) ? "recommended" : "required", dynamicRange, dynamicRangeFindSupportedHdrMatch3));
                return dynamicRangeFindSupportedHdrMatch3;
            }
        }
        for (DynamicRange dynamicRange2 : set) {
            Preconditions.checkState(dynamicRange2.isFullySpecified(), "Candidate dynamic range must be fully specified.");
            if (!dynamicRange2.equals(DynamicRange.SDR) && canResolve(dynamicRange, dynamicRange2)) {
                Logger.d(TAG, String.format("Resolved dynamic range for use case %s from validated dynamic range constraints or supported HDR dynamic ranges.\n%s\n->\n%s", str, dynamicRange, dynamicRange2));
                return dynamicRange2;
            }
        }
        return null;
    }

    private static void updateConstraints(Set<DynamicRange> set, DynamicRange dynamicRange, DynamicRangesCompat dynamicRangesCompat) {
        Preconditions.checkState(!set.isEmpty(), "Cannot update already-empty constraints.");
        Set<DynamicRange> dynamicRangeCaptureRequestConstraints = dynamicRangesCompat.getDynamicRangeCaptureRequestConstraints(dynamicRange);
        if (dynamicRangeCaptureRequestConstraints.isEmpty()) {
            return;
        }
        HashSet hashSet = new HashSet(set);
        set.retainAll(dynamicRangeCaptureRequestConstraints);
        if (set.isEmpty()) {
            throw new IllegalArgumentException(String.format("Constraints of dynamic range cannot be combined with existing constraints.\nDynamic range:\n  %s\nConstraints:\n  %s\nExisting constraints:\n  %s", dynamicRange, TextUtils.join("\n  ", dynamicRangeCaptureRequestConstraints), TextUtils.join("\n  ", hashSet)));
        }
    }

    private static DynamicRange findSupportedHdrMatch(DynamicRange dynamicRange, Collection<DynamicRange> collection, Set<DynamicRange> set) {
        if (dynamicRange.getEncoding() == 1) {
            return null;
        }
        for (DynamicRange dynamicRange2 : collection) {
            Preconditions.checkNotNull(dynamicRange2, "Fully specified DynamicRange cannot be null.");
            int encoding = dynamicRange2.getEncoding();
            Preconditions.checkState(dynamicRange2.isFullySpecified(), "Fully specified DynamicRange must have fully defined encoding.");
            if (encoding != 1 && canResolveWithinConstraints(dynamicRange, dynamicRange2, set)) {
                return dynamicRange2;
            }
        }
        return null;
    }

    static final class Api33Impl {
        private Api33Impl() {
        }

        static DynamicRange getRecommended10BitDynamicRange(CameraCharacteristicsCompat cameraCharacteristicsCompat) {
            Long l = (Long) cameraCharacteristicsCompat.get(CameraCharacteristics.REQUEST_RECOMMENDED_TEN_BIT_DYNAMIC_RANGE_PROFILE);
            if (l != null) {
                return DynamicRangeConversions.profileToDynamicRange(l.longValue());
            }
            return null;
        }
    }

    private static boolean isFullyUnspecified(DynamicRange dynamicRange) {
        return Objects.equals(dynamicRange, DynamicRange.UNSPECIFIED);
    }

    private static boolean isPartiallySpecified(DynamicRange dynamicRange) {
        return dynamicRange.getEncoding() == 2 || (dynamicRange.getEncoding() != 0 && dynamicRange.getBitDepth() == 0) || (dynamicRange.getEncoding() == 0 && dynamicRange.getBitDepth() != 0);
    }

    private static boolean canResolveWithinConstraints(DynamicRange dynamicRange, DynamicRange dynamicRange2, Set<DynamicRange> set) {
        if (!set.contains(dynamicRange2)) {
            Logger.d(TAG, String.format("Candidate Dynamic range is not within constraints.\nDynamic range to resolve:\n  %s\nCandidate dynamic range:\n  %s", dynamicRange, dynamicRange2));
            return false;
        }
        return canResolve(dynamicRange, dynamicRange2);
    }

    private static boolean canResolve(DynamicRange dynamicRange, DynamicRange dynamicRange2) {
        Preconditions.checkState(dynamicRange2.isFullySpecified(), "Fully specified range is not actually fully specified.");
        if (dynamicRange.getEncoding() == 2 && dynamicRange2.getEncoding() == 1) {
            return false;
        }
        if (dynamicRange.getEncoding() == 2 || dynamicRange.getEncoding() == 0 || dynamicRange.getEncoding() == dynamicRange2.getEncoding()) {
            return dynamicRange.getBitDepth() == 0 || dynamicRange.getBitDepth() == dynamicRange2.getBitDepth();
        }
        return false;
    }
}

