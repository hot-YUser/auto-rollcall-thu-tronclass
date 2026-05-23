package kotlin;

import kotlin.jvm.internal.DoubleCompanionObject;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000*\n\u0000\n\u0002\u0010\b\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\n\u001a\r\u0010\u0000\u001a\u00020\u0001*\u00020\u0001H\u0087\b\u001a\r\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0087\b\u001a\r\u0010\u0003\u001a\u00020\u0001*\u00020\u0001H\u0087\b\u001a\r\u0010\u0003\u001a\u00020\u0001*\u00020\u0002H\u0087\b\u001a\r\u0010\u0004\u001a\u00020\u0001*\u00020\u0001H\u0087\b\u001a\r\u0010\u0004\u001a\u00020\u0001*\u00020\u0002H\u0087\b\u001a\u0015\u0010\u0005\u001a\u00020\u0006*\u00020\u00072\u0006\u0010\b\u001a\u00020\u0002H\u0087\b\u001a\u0015\u0010\u0005\u001a\u00020\t*\u00020\n2\u0006\u0010\b\u001a\u00020\u0001H\u0087\b\u001a\r\u0010\u000b\u001a\u00020\f*\u00020\u0006H\u0087\b\u001a\r\u0010\u000b\u001a\u00020\f*\u00020\tH\u0087\b\u001a\r\u0010\r\u001a\u00020\f*\u00020\u0006H\u0087\b\u001a\r\u0010\r\u001a\u00020\f*\u00020\tH\u0087\b\u001a\r\u0010\u000e\u001a\u00020\f*\u00020\u0006H\u0087\b\u001a\r\u0010\u000e\u001a\u00020\f*\u00020\tH\u0087\b\u001a\u0015\u0010\u000f\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\u0001H\u0087\b\u001a\u0015\u0010\u000f\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\u0010\u001a\u00020\u0001H\u0087\b\u001a\u0015\u0010\u0011\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\u0001H\u0087\b\u001a\u0015\u0010\u0011\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\u0010\u001a\u00020\u0001H\u0087\b\u001a\r\u0010\u0012\u001a\u00020\u0001*\u00020\u0001H\u0087\b\u001a\r\u0010\u0012\u001a\u00020\u0002*\u00020\u0002H\u0087\b\u001a\r\u0010\u0013\u001a\u00020\u0001*\u00020\u0001H\u0087\b\u001a\r\u0010\u0013\u001a\u00020\u0002*\u00020\u0002H\u0087\b\u001a\r\u0010\u0014\u001a\u00020\u0002*\u00020\u0006H\u0087\b\u001a\r\u0010\u0014\u001a\u00020\u0001*\u00020\tH\u0087\b\u001a\r\u0010\u0015\u001a\u00020\u0002*\u00020\u0006H\u0087\b\u001a\r\u0010\u0015\u001a\u00020\u0001*\u00020\tH\u0087\b¨\u0006\u0016"}, d2 = {"countLeadingZeroBits", "", "", "countOneBits", "countTrailingZeroBits", "fromBits", "", "Lkotlin/Double$Companion;", "bits", "", "Lkotlin/Float$Companion;", "isFinite", "", "isInfinite", "isNaN", "rotateLeft", "bitCount", "rotateRight", "takeHighestOneBit", "takeLowestOneBit", "toBits", "toRawBits", "kotlin-stdlib"}, k = 5, mv = {1, 8, 0}, xi = 49, xs = "kotlin/NumbersKt")
class NumbersKt__NumbersJVMKt extends NumbersKt__FloorDivModKt {
    private static final boolean isNaN(double d) {
        return Double.isNaN(d);
    }

    private static final boolean isNaN(float f) {
        return Float.isNaN(f);
    }

    private static final boolean isInfinite(double d) {
        return Double.isInfinite(d);
    }

    private static final boolean isInfinite(float f) {
        return Float.isInfinite(f);
    }

    private static final boolean isFinite(double d) {
        return (Double.isInfinite(d) || Double.isNaN(d)) ? false : true;
    }

    private static final boolean isFinite(float f) {
        return (Float.isInfinite(f) || Float.isNaN(f)) ? false : true;
    }

    private static final long toBits(double d) {
        return Double.doubleToLongBits(d);
    }

    private static final long toRawBits(double d) {
        return Double.doubleToRawLongBits(d);
    }

    private static final double fromBits(DoubleCompanionObject doubleCompanionObject, long j) {
        Intrinsics.checkNotNullParameter(doubleCompanionObject, "<this>");
        return Double.longBitsToDouble(j);
    }

    private static final int toBits(float f) {
        return Float.floatToIntBits(f);
    }

    private static final int toRawBits(float f) {
        return Float.floatToRawIntBits(f);
    }

    private static final float fromBits(FloatCompanionObject floatCompanionObject, int i) {
        Intrinsics.checkNotNullParameter(floatCompanionObject, "<this>");
        return Float.intBitsToFloat(i);
    }

    private static final int countOneBits(int i) {
        return Integer.bitCount(i);
    }

    private static final int countLeadingZeroBits(int i) {
        return Integer.numberOfLeadingZeros(i);
    }

    private static final int countTrailingZeroBits(int i) {
        return Integer.numberOfTrailingZeros(i);
    }

    private static final int takeHighestOneBit(int i) {
        return Integer.highestOneBit(i);
    }

    private static final int takeLowestOneBit(int i) {
        return Integer.lowestOneBit(i);
    }

    private static final int rotateLeft(int i, int i2) {
        return Integer.rotateLeft(i, i2);
    }

    private static final int rotateRight(int i, int i2) {
        return Integer.rotateRight(i, i2);
    }

    private static final int countOneBits(long j) {
        return Long.bitCount(j);
    }

    private static final int countLeadingZeroBits(long j) {
        return Long.numberOfLeadingZeros(j);
    }

    private static final int countTrailingZeroBits(long j) {
        return Long.numberOfTrailingZeros(j);
    }

    private static final long takeHighestOneBit(long j) {
        return Long.highestOneBit(j);
    }

    private static final long takeLowestOneBit(long j) {
        return Long.lowestOneBit(j);
    }

    private static final long rotateLeft(long j, int i) {
        return Long.rotateLeft(j, i);
    }

    private static final long rotateRight(long j, int i) {
        return Long.rotateRight(j, i);
    }
}

