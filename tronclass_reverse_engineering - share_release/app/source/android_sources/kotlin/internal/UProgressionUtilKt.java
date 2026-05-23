package kotlin.internal;

import com.onesignal.NotificationBundleProcessor;
import kotlin.Metadata;
import kotlin.UByte$$ExternalSyntheticBackport0;
import kotlin.UInt;
import kotlin.ULong;
@Metadata(d1 = {"\u0000 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\u001a*\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00012\u0006\u0010\u0003\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u0001H\u0002ø\u0001\u0000¢\u0006\u0004\b\u0005\u0010\u0006\u001a*\u0010\u0000\u001a\u00020\u00072\u0006\u0010\u0002\u001a\u00020\u00072\u0006\u0010\u0003\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\u0007H\u0002ø\u0001\u0000¢\u0006\u0004\b\b\u0010\t\u001a*\u0010\n\u001a\u00020\u00012\u0006\u0010\u000b\u001a\u00020\u00012\u0006\u0010\f\u001a\u00020\u00012\u0006\u0010\r\u001a\u00020\u000eH\u0001ø\u0001\u0000¢\u0006\u0004\b\u000f\u0010\u0006\u001a*\u0010\n\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\u00072\u0006\u0010\f\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u0010H\u0001ø\u0001\u0000¢\u0006\u0004\b\u0011\u0010\t\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u0012"}, d2 = {"differenceModulo", "Lkotlin/UInt;", NotificationBundleProcessor.PUSH_ADDITIONAL_DATA_KEY, "b", "c", "differenceModulo-WZ9TVnA", "(III)I", "Lkotlin/ULong;", "differenceModulo-sambcqE", "(JJJ)J", "getProgressionLastElement", "start", "end", "step", "", "getProgressionLastElement-Nkh28Cs", "", "getProgressionLastElement-7ftBX0g", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class UProgressionUtilKt {
    private static final int m1551differenceModuloWZ9TVnA(int i, int i2, int i3) {
        int iM$1 = UByte$$ExternalSyntheticBackport0.m$1(i, i3);
        int iM$12 = UByte$$ExternalSyntheticBackport0.m$1(i2, i3);
        int iCompare = Integer.compare(iM$1 ^ Integer.MIN_VALUE, iM$12 ^ Integer.MIN_VALUE);
        int iM429constructorimpl = UInt.m429constructorimpl(iM$1 - iM$12);
        return iCompare >= 0 ? iM429constructorimpl : UInt.m429constructorimpl(iM429constructorimpl + i3);
    }
    private static final long m1552differenceModulosambcqE(long j, long j2, long j3) {
        long jM402m = UByte$$ExternalSyntheticBackport0.m402m(j, j3);
        long jM402m2 = UByte$$ExternalSyntheticBackport0.m402m(j2, j3);
        int iCompare = Long.compare(jM402m ^ Long.MIN_VALUE, jM402m2 ^ Long.MIN_VALUE);
        long jM508constructorimpl = ULong.m508constructorimpl(jM402m - jM402m2);
        return iCompare >= 0 ? jM508constructorimpl : ULong.m508constructorimpl(jM508constructorimpl + j3);
    }
    public static final int m1554getProgressionLastElementNkh28Cs(int i, int i2, int i3) {
        if (i3 > 0) {
            return Integer.compare(i ^ Integer.MIN_VALUE, i2 ^ Integer.MIN_VALUE) >= 0 ? i2 : UInt.m429constructorimpl(i2 - m1551differenceModuloWZ9TVnA(i2, i, UInt.m429constructorimpl(i3)));
        }
        if (i3 < 0) {
            return Integer.compare(i ^ Integer.MIN_VALUE, i2 ^ Integer.MIN_VALUE) <= 0 ? i2 : UInt.m429constructorimpl(i2 + m1551differenceModuloWZ9TVnA(i, i2, UInt.m429constructorimpl(-i3)));
        }
        throw new IllegalArgumentException("Step is zero.");
    }
    public static final long m1553getProgressionLastElement7ftBX0g(long j, long j2, long j3) {
        if (j3 > 0) {
            return Long.compare(j ^ Long.MIN_VALUE, j2 ^ Long.MIN_VALUE) >= 0 ? j2 : ULong.m508constructorimpl(j2 - m1552differenceModulosambcqE(j2, j, ULong.m508constructorimpl(j3)));
        }
        if (j3 < 0) {
            return Long.compare(j ^ Long.MIN_VALUE, j2 ^ Long.MIN_VALUE) <= 0 ? j2 : ULong.m508constructorimpl(j2 + m1552differenceModulosambcqE(j, j2, ULong.m508constructorimpl(-j3)));
        }
        throw new IllegalArgumentException("Step is zero.");
    }
}

