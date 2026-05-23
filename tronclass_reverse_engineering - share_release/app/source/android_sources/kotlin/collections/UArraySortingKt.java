package kotlin.collections;

import kotlin.Metadata;
import kotlin.UByte;
import kotlin.UByteArray;
import kotlin.UIntArray;
import kotlin.ULongArray;
import kotlin.UShort;
import kotlin.UShortArray;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u00000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0010\u001a*\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u0006\u0010\u0007\u001a*\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\b2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\t\u0010\n\u001a*\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u000b2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\f\u0010\r\u001a*\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u000e2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u000f\u0010\u0010\u001a*\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u0013\u0010\u0014\u001a*\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\b2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u0015\u0010\u0016\u001a*\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u000b2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u0017\u0010\u0018\u001a*\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u000e2\u0006\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0001H\u0003ø\u0001\u0000¢\u0006\u0004\b\u0019\u0010\u001a\u001a*\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u001c\u001a\u00020\u00012\u0006\u0010\u001d\u001a\u00020\u0001H\u0001ø\u0001\u0000¢\u0006\u0004\b\u001e\u0010\u0014\u001a*\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\b2\u0006\u0010\u001c\u001a\u00020\u00012\u0006\u0010\u001d\u001a\u00020\u0001H\u0001ø\u0001\u0000¢\u0006\u0004\b\u001f\u0010\u0016\u001a*\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u000b2\u0006\u0010\u001c\u001a\u00020\u00012\u0006\u0010\u001d\u001a\u00020\u0001H\u0001ø\u0001\u0000¢\u0006\u0004\b \u0010\u0018\u001a*\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0002\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u00012\u0006\u0010\u001d\u001a\u00020\u0001H\u0001ø\u0001\u0000¢\u0006\u0004\b!\u0010\u001a\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\""}, d2 = {"partition", "", "array", "Lkotlin/UByteArray;", "left", "right", "partition-4UcCI2c", "([BII)I", "Lkotlin/UIntArray;", "partition-oBK06Vg", "([III)I", "Lkotlin/ULongArray;", "partition--nroSd4", "([JII)I", "Lkotlin/UShortArray;", "partition-Aa5vz7o", "([SII)I", "quickSort", "", "quickSort-4UcCI2c", "([BII)V", "quickSort-oBK06Vg", "([III)V", "quickSort--nroSd4", "([JII)V", "quickSort-Aa5vz7o", "([SII)V", "sortArray", "fromIndex", "toIndex", "sortArray-4UcCI2c", "sortArray-oBK06Vg", "sortArray--nroSd4", "sortArray-Aa5vz7o", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class UArraySortingKt {
    private static final int m790partition4UcCI2c(byte[] bArr, int i, int i2) {
        int i3;
        byte bM410getw2LRezQ = UByteArray.m410getw2LRezQ(bArr, (i + i2) / 2);
        while (i <= i2) {
            while (true) {
                int iM410getw2LRezQ = UByteArray.m410getw2LRezQ(bArr, i) & UByte.MAX_VALUE;
                i3 = bM410getw2LRezQ & UByte.MAX_VALUE;
                if (Intrinsics.compare(iM410getw2LRezQ, i3) >= 0) {
                    break;
                }
                i++;
            }
            while (Intrinsics.compare(UByteArray.m410getw2LRezQ(bArr, i2) & UByte.MAX_VALUE, i3) > 0) {
                i2--;
            }
            if (i <= i2) {
                byte bM410getw2LRezQ2 = UByteArray.m410getw2LRezQ(bArr, i);
                UByteArray.m415setVurrAj0(bArr, i, UByteArray.m410getw2LRezQ(bArr, i2));
                UByteArray.m415setVurrAj0(bArr, i2, bM410getw2LRezQ2);
                i++;
                i2--;
            }
        }
        return i;
    }
    private static final void m794quickSort4UcCI2c(byte[] bArr, int i, int i2) {
        int iM790partition4UcCI2c = m790partition4UcCI2c(bArr, i, i2);
        int i3 = iM790partition4UcCI2c - 1;
        if (i < i3) {
            m794quickSort4UcCI2c(bArr, i, i3);
        }
        if (iM790partition4UcCI2c < i2) {
            m794quickSort4UcCI2c(bArr, iM790partition4UcCI2c, i2);
        }
    }
    private static final int m791partitionAa5vz7o(short[] sArr, int i, int i2) {
        int i3;
        short sM673getMh2AYeg = UShortArray.m673getMh2AYeg(sArr, (i + i2) / 2);
        while (i <= i2) {
            while (true) {
                int iM673getMh2AYeg = UShortArray.m673getMh2AYeg(sArr, i) & UShort.MAX_VALUE;
                i3 = sM673getMh2AYeg & UShort.MAX_VALUE;
                if (Intrinsics.compare(iM673getMh2AYeg, i3) >= 0) {
                    break;
                }
                i++;
            }
            while (Intrinsics.compare(UShortArray.m673getMh2AYeg(sArr, i2) & UShort.MAX_VALUE, i3) > 0) {
                i2--;
            }
            if (i <= i2) {
                short sM673getMh2AYeg2 = UShortArray.m673getMh2AYeg(sArr, i);
                UShortArray.m678set01HTLdE(sArr, i, UShortArray.m673getMh2AYeg(sArr, i2));
                UShortArray.m678set01HTLdE(sArr, i2, sM673getMh2AYeg2);
                i++;
                i2--;
            }
        }
        return i;
    }
    private static final void m795quickSortAa5vz7o(short[] sArr, int i, int i2) {
        int iM791partitionAa5vz7o = m791partitionAa5vz7o(sArr, i, i2);
        int i3 = iM791partitionAa5vz7o - 1;
        if (i < i3) {
            m795quickSortAa5vz7o(sArr, i, i3);
        }
        if (iM791partitionAa5vz7o < i2) {
            m795quickSortAa5vz7o(sArr, iM791partitionAa5vz7o, i2);
        }
    }
    private static final int m792partitionoBK06Vg(int[] iArr, int i, int i2) {
        int iM489getpVg5ArA = UIntArray.m489getpVg5ArA(iArr, (i + i2) / 2);
        while (i <= i2) {
            while (Integer.compare(UIntArray.m489getpVg5ArA(iArr, i) ^ Integer.MIN_VALUE, iM489getpVg5ArA ^ Integer.MIN_VALUE) < 0) {
                i++;
            }
            while (Integer.compare(UIntArray.m489getpVg5ArA(iArr, i2) ^ Integer.MIN_VALUE, iM489getpVg5ArA ^ Integer.MIN_VALUE) > 0) {
                i2--;
            }
            if (i <= i2) {
                int iM489getpVg5ArA2 = UIntArray.m489getpVg5ArA(iArr, i);
                UIntArray.m494setVXSXFK8(iArr, i, UIntArray.m489getpVg5ArA(iArr, i2));
                UIntArray.m494setVXSXFK8(iArr, i2, iM489getpVg5ArA2);
                i++;
                i2--;
            }
        }
        return i;
    }
    private static final void m796quickSortoBK06Vg(int[] iArr, int i, int i2) {
        int iM792partitionoBK06Vg = m792partitionoBK06Vg(iArr, i, i2);
        int i3 = iM792partitionoBK06Vg - 1;
        if (i < i3) {
            m796quickSortoBK06Vg(iArr, i, i3);
        }
        if (iM792partitionoBK06Vg < i2) {
            m796quickSortoBK06Vg(iArr, iM792partitionoBK06Vg, i2);
        }
    }
    private static final int m789partitionnroSd4(long[] jArr, int i, int i2) {
        long jM568getsVKNKU = ULongArray.m568getsVKNKU(jArr, (i + i2) / 2);
        while (i <= i2) {
            while (Long.compare(ULongArray.m568getsVKNKU(jArr, i) ^ Long.MIN_VALUE, jM568getsVKNKU ^ Long.MIN_VALUE) < 0) {
                i++;
            }
            while (Long.compare(ULongArray.m568getsVKNKU(jArr, i2) ^ Long.MIN_VALUE, jM568getsVKNKU ^ Long.MIN_VALUE) > 0) {
                i2--;
            }
            if (i <= i2) {
                long jM568getsVKNKU2 = ULongArray.m568getsVKNKU(jArr, i);
                ULongArray.m573setk8EXiF4(jArr, i, ULongArray.m568getsVKNKU(jArr, i2));
                ULongArray.m573setk8EXiF4(jArr, i2, jM568getsVKNKU2);
                i++;
                i2--;
            }
        }
        return i;
    }
    private static final void m793quickSortnroSd4(long[] jArr, int i, int i2) {
        int iM789partitionnroSd4 = m789partitionnroSd4(jArr, i, i2);
        int i3 = iM789partitionnroSd4 - 1;
        if (i < i3) {
            m793quickSortnroSd4(jArr, i, i3);
        }
        if (iM789partitionnroSd4 < i2) {
            m793quickSortnroSd4(jArr, iM789partitionnroSd4, i2);
        }
    }
    public static final void m798sortArray4UcCI2c(byte[] array, int i, int i2) {
        Intrinsics.checkNotNullParameter(array, "array");
        m794quickSort4UcCI2c(array, i, i2 - 1);
    }
    public static final void m799sortArrayAa5vz7o(short[] array, int i, int i2) {
        Intrinsics.checkNotNullParameter(array, "array");
        m795quickSortAa5vz7o(array, i, i2 - 1);
    }
    public static final void m800sortArrayoBK06Vg(int[] array, int i, int i2) {
        Intrinsics.checkNotNullParameter(array, "array");
        m796quickSortoBK06Vg(array, i, i2 - 1);
    }
    public static final void m797sortArraynroSd4(long[] array, int i, int i2) {
        Intrinsics.checkNotNullParameter(array, "array");
        m793quickSortnroSd4(array, i, i2 - 1);
    }
}

