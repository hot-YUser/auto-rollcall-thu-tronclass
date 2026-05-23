package kotlin;

import kotlin.jvm.JvmInline;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.UIntRange;
import kotlin.ranges.URangesKt;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0000\n\u0002\u0010\n\n\u0002\b\t\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\u0010\u0000\n\u0002\b!\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u0005\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u000e\b\u0087@\u0018\u0000 v2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001vB\u0014\b\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003ø\u0001\u0000¢\u0006\u0004\b\u0004\u0010\u0005J\u001b\u0010\b\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\u0000H\u0087\fø\u0001\u0000¢\u0006\u0004\b\n\u0010\u000bJ\u001b\u0010\f\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\b\u000f\u0010\u0010J\u001b\u0010\f\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\b\u0012\u0010\u0013J\u001b\u0010\f\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\b\u0015\u0010\u0016J\u001b\u0010\f\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\u0000H\u0097\nø\u0001\u0000¢\u0006\u0004\b\u0017\u0010\u0018J\u0016\u0010\u0019\u001a\u00020\u0000H\u0087\nø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b\u001a\u0010\u0005J\u001b\u0010\u001b\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\b\u001c\u0010\u0010J\u001b\u0010\u001b\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\b\u001d\u0010\u0013J\u001b\u0010\u001b\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\b\u001e\u0010\u001fJ\u001b\u0010\u001b\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\b \u0010\u0018J\u001a\u0010!\u001a\u00020\"2\b\u0010\t\u001a\u0004\u0018\u00010#HÖ\u0003¢\u0006\u0004\b$\u0010%J\u001b\u0010&\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\bø\u0001\u0000¢\u0006\u0004\b'\u0010\u0010J\u001b\u0010&\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\bø\u0001\u0000¢\u0006\u0004\b(\u0010\u0013J\u001b\u0010&\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\bø\u0001\u0000¢\u0006\u0004\b)\u0010\u001fJ\u001b\u0010&\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\bø\u0001\u0000¢\u0006\u0004\b*\u0010\u0018J\u0010\u0010+\u001a\u00020\rHÖ\u0001¢\u0006\u0004\b,\u0010-J\u0016\u0010.\u001a\u00020\u0000H\u0087\nø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b/\u0010\u0005J\u0016\u00100\u001a\u00020\u0000H\u0087\bø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b1\u0010\u0005J\u001b\u00102\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\b3\u0010\u0010J\u001b\u00102\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\b4\u0010\u0013J\u001b\u00102\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\b5\u0010\u001fJ\u001b\u00102\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\b6\u0010\u0018J\u001b\u00107\u001a\u00020\u000e2\u0006\u0010\t\u001a\u00020\u000eH\u0087\bø\u0001\u0000¢\u0006\u0004\b8\u00109J\u001b\u00107\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\bø\u0001\u0000¢\u0006\u0004\b:\u0010\u0013J\u001b\u00107\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\bø\u0001\u0000¢\u0006\u0004\b;\u0010\u001fJ\u001b\u00107\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\u0000H\u0087\bø\u0001\u0000¢\u0006\u0004\b<\u0010\u000bJ\u001b\u0010=\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\u0000H\u0087\fø\u0001\u0000¢\u0006\u0004\b>\u0010\u000bJ\u001b\u0010?\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\b@\u0010\u0010J\u001b\u0010?\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\bA\u0010\u0013J\u001b\u0010?\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\bB\u0010\u001fJ\u001b\u0010?\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\bC\u0010\u0018J\u001b\u0010D\u001a\u00020E2\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\bF\u0010GJ\u001b\u0010H\u001a\u00020E2\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\bI\u0010GJ\u001b\u0010J\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\bK\u0010\u0010J\u001b\u0010J\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\bL\u0010\u0013J\u001b\u0010J\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\bM\u0010\u001fJ\u001b\u0010J\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\bN\u0010\u0018J\u001b\u0010O\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u000eH\u0087\nø\u0001\u0000¢\u0006\u0004\bP\u0010\u0010J\u001b\u0010O\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0011H\u0087\nø\u0001\u0000¢\u0006\u0004\bQ\u0010\u0013J\u001b\u0010O\u001a\u00020\u00142\u0006\u0010\t\u001a\u00020\u0014H\u0087\nø\u0001\u0000¢\u0006\u0004\bR\u0010\u001fJ\u001b\u0010O\u001a\u00020\u00112\u0006\u0010\t\u001a\u00020\u0000H\u0087\nø\u0001\u0000¢\u0006\u0004\bS\u0010\u0018J\u0010\u0010T\u001a\u00020UH\u0087\b¢\u0006\u0004\bV\u0010WJ\u0010\u0010X\u001a\u00020YH\u0087\b¢\u0006\u0004\bZ\u0010[J\u0010\u0010\\\u001a\u00020]H\u0087\b¢\u0006\u0004\b^\u0010_J\u0010\u0010`\u001a\u00020\rH\u0087\b¢\u0006\u0004\ba\u0010-J\u0010\u0010b\u001a\u00020cH\u0087\b¢\u0006\u0004\bd\u0010eJ\u0010\u0010f\u001a\u00020\u0003H\u0087\b¢\u0006\u0004\bg\u0010\u0005J\u000f\u0010h\u001a\u00020iH\u0016¢\u0006\u0004\bj\u0010kJ\u0016\u0010l\u001a\u00020\u000eH\u0087\bø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\bm\u0010WJ\u0016\u0010n\u001a\u00020\u0011H\u0087\bø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\bo\u0010-J\u0016\u0010p\u001a\u00020\u0014H\u0087\bø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\bq\u0010eJ\u0016\u0010r\u001a\u00020\u0000H\u0087\bø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\bs\u0010\u0005J\u001b\u0010t\u001a\u00020\u00002\u0006\u0010\t\u001a\u00020\u0000H\u0087\fø\u0001\u0000¢\u0006\u0004\bu\u0010\u000bR\u0016\u0010\u0002\u001a\u00020\u00038\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002\u0092\u0001\u00020\u0003ø\u0001\u0000\u0082\u0002\b\n\u0002\b\u0019\n\u0002\b!¨\u0006w"}, d2 = {"Lkotlin/UShort;", "", "data", "", "constructor-impl", "(S)S", "getData$annotations", "()V", "and", "other", "and-xj2QHRw", "(SS)S", "compareTo", "", "Lkotlin/UByte;", "compareTo-7apg3OU", "(SB)I", "Lkotlin/UInt;", "compareTo-WZ4Q5Ns", "(SI)I", "Lkotlin/ULong;", "compareTo-VKZWuLQ", "(SJ)I", "compareTo-xj2QHRw", "(SS)I", "dec", "dec-Mh2AYeg", "div", "div-7apg3OU", "div-WZ4Q5Ns", "div-VKZWuLQ", "(SJ)J", "div-xj2QHRw", "equals", "", "", "equals-impl", "(SLjava/lang/Object;)Z", "floorDiv", "floorDiv-7apg3OU", "floorDiv-WZ4Q5Ns", "floorDiv-VKZWuLQ", "floorDiv-xj2QHRw", "hashCode", "hashCode-impl", "(S)I", "inc", "inc-Mh2AYeg", "inv", "inv-Mh2AYeg", "minus", "minus-7apg3OU", "minus-WZ4Q5Ns", "minus-VKZWuLQ", "minus-xj2QHRw", "mod", "mod-7apg3OU", "(SB)B", "mod-WZ4Q5Ns", "mod-VKZWuLQ", "mod-xj2QHRw", "or", "or-xj2QHRw", "plus", "plus-7apg3OU", "plus-WZ4Q5Ns", "plus-VKZWuLQ", "plus-xj2QHRw", "rangeTo", "Lkotlin/ranges/UIntRange;", "rangeTo-xj2QHRw", "(SS)Lkotlin/ranges/UIntRange;", "rangeUntil", "rangeUntil-xj2QHRw", "rem", "rem-7apg3OU", "rem-WZ4Q5Ns", "rem-VKZWuLQ", "rem-xj2QHRw", "times", "times-7apg3OU", "times-WZ4Q5Ns", "times-VKZWuLQ", "times-xj2QHRw", "toByte", "", "toByte-impl", "(S)B", "toDouble", "", "toDouble-impl", "(S)D", "toFloat", "", "toFloat-impl", "(S)F", "toInt", "toInt-impl", "toLong", "", "toLong-impl", "(S)J", "toShort", "toShort-impl", "toString", "", "toString-impl", "(S)Ljava/lang/String;", "toUByte", "toUByte-w2LRezQ", "toUInt", "toUInt-pVg5ArA", "toULong", "toULong-s-VKNKU", "toUShort", "toUShort-Mh2AYeg", "xor", "xor-xj2QHRw", "Companion", "kotlin-stdlib"}, k = 1, mv = {1, 8, 0}, xi = 48)
@JvmInline
public final class UShort implements Comparable<UShort> {
    public static final short MAX_VALUE = -1;
    public static final short MIN_VALUE = 0;
    public static final int SIZE_BITS = 16;
    public static final int SIZE_BYTES = 2;
    private final short data;
    public static final /* synthetic */ UShort m609boximpl(short s) {
        return new UShort(s);
    }
    public static short m615constructorimpl(short s) {
        return s;
    }
    public static boolean m621equalsimpl(short s, Object obj) {
        return (obj instanceof UShort) && s == ((UShort) obj).getData();
    }
    public static final boolean m622equalsimpl0(short s, short s2) {
        return s == s2;
    }

    public static /* synthetic */ void getData$annotations() {
    }
    public static int m627hashCodeimpl(short s) {
        return Short.hashCode(s);
    }
    private static final byte m653toByteimpl(short s) {
        return (byte) s;
    }
    private static final double m654toDoubleimpl(short s) {
        return s & MAX_VALUE;
    }
    private static final float m655toFloatimpl(short s) {
        return s & MAX_VALUE;
    }
    private static final int m656toIntimpl(short s) {
        return s & MAX_VALUE;
    }
    private static final long m657toLongimpl(short s) {
        return ((long) s) & 65535;
    }
    private static final short m658toShortimpl(short s) {
        return s;
    }
    private static final short m663toUShortMh2AYeg(short s) {
        return s;
    }

    public boolean equals(Object obj) {
        return m621equalsimpl(this.data, obj);
    }

    public int hashCode() {
        return m627hashCodeimpl(this.data);
    }
    public final /* synthetic */ short getData() {
        return this.data;
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(UShort uShort) {
        return Intrinsics.compare(getData() & MAX_VALUE, uShort.getData() & MAX_VALUE);
    }

    private /* synthetic */ UShort(short s) {
        this.data = s;
    }
    private static final int m610compareTo7apg3OU(short s, byte b) {
        return Intrinsics.compare(s & MAX_VALUE, b & UByte.MAX_VALUE);
    }
    private int m613compareToxj2QHRw(short s) {
        return Intrinsics.compare(getData() & MAX_VALUE, s & MAX_VALUE);
    }
    private static int m614compareToxj2QHRw(short s, short s2) {
        return Intrinsics.compare(s & MAX_VALUE, s2 & MAX_VALUE);
    }
    private static final int m612compareToWZ4Q5Ns(short s, int i) {
        return Integer.compare(UInt.m429constructorimpl(s & MAX_VALUE) ^ Integer.MIN_VALUE, i ^ Integer.MIN_VALUE);
    }
    private static final int m611compareToVKZWuLQ(short s, long j) {
        return Long.compare(ULong.m508constructorimpl(((long) s) & 65535) ^ Long.MIN_VALUE, j ^ Long.MIN_VALUE);
    }
    private static final int m639plus7apg3OU(short s, byte b) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) + UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m642plusxj2QHRw(short s, short s2) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) + UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m641plusWZ4Q5Ns(short s, int i) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) + i);
    }
    private static final long m640plusVKZWuLQ(short s, long j) {
        return ULong.m508constructorimpl(ULong.m508constructorimpl(((long) s) & 65535) + j);
    }
    private static final int m630minus7apg3OU(short s, byte b) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) - UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m633minusxj2QHRw(short s, short s2) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) - UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m632minusWZ4Q5Ns(short s, int i) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) - i);
    }
    private static final long m631minusVKZWuLQ(short s, long j) {
        return ULong.m508constructorimpl(ULong.m508constructorimpl(((long) s) & 65535) - j);
    }
    private static final int m649times7apg3OU(short s, byte b) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) * UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m652timesxj2QHRw(short s, short s2) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) * UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m651timesWZ4Q5Ns(short s, int i) {
        return UInt.m429constructorimpl(UInt.m429constructorimpl(s & MAX_VALUE) * i);
    }
    private static final long m650timesVKZWuLQ(short s, long j) {
        return ULong.m508constructorimpl(ULong.m508constructorimpl(((long) s) & 65535) * j);
    }
    private static final int m617div7apg3OU(short s, byte b) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m620divxj2QHRw(short s, short s2) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m619divWZ4Q5Ns(short s, int i) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), i);
    }
    private static final long m618divVKZWuLQ(short s, long j) {
        return UByte$$ExternalSyntheticBackport0.m$1(ULong.m508constructorimpl(((long) s) & 65535), j);
    }
    private static final int m645rem7apg3OU(short s, byte b) {
        return UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m648remxj2QHRw(short s, short s2) {
        return UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m647remWZ4Q5Ns(short s, int i) {
        return UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), i);
    }
    private static final long m646remVKZWuLQ(short s, long j) {
        return UByte$$ExternalSyntheticBackport0.m402m(ULong.m508constructorimpl(((long) s) & 65535), j);
    }
    private static final int m623floorDiv7apg3OU(short s, byte b) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(b & UByte.MAX_VALUE));
    }
    private static final int m626floorDivxj2QHRw(short s, short s2) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final int m625floorDivWZ4Q5Ns(short s, int i) {
        return UByte$$ExternalSyntheticBackport0.m(UInt.m429constructorimpl(s & MAX_VALUE), i);
    }
    private static final long m624floorDivVKZWuLQ(short s, long j) {
        return UByte$$ExternalSyntheticBackport0.m$1(ULong.m508constructorimpl(((long) s) & 65535), j);
    }
    private static final byte m634mod7apg3OU(short s, byte b) {
        return UByte.m351constructorimpl((byte) UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(b & UByte.MAX_VALUE)));
    }
    private static final short m637modxj2QHRw(short s, short s2) {
        return m615constructorimpl((short) UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE)));
    }
    private static final int m636modWZ4Q5Ns(short s, int i) {
        return UByte$$ExternalSyntheticBackport0.m$1(UInt.m429constructorimpl(s & MAX_VALUE), i);
    }
    private static final long m635modVKZWuLQ(short s, long j) {
        return UByte$$ExternalSyntheticBackport0.m402m(ULong.m508constructorimpl(((long) s) & 65535), j);
    }
    private static final short m628incMh2AYeg(short s) {
        return m615constructorimpl((short) (s + 1));
    }
    private static final short m616decMh2AYeg(short s) {
        return m615constructorimpl((short) (s - 1));
    }
    private static final UIntRange m643rangeToxj2QHRw(short s, short s2) {
        return new UIntRange(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE), null);
    }
    private static final UIntRange m644rangeUntilxj2QHRw(short s, short s2) {
        return URangesKt.m1613untilJ1ME1BU(UInt.m429constructorimpl(s & MAX_VALUE), UInt.m429constructorimpl(s2 & MAX_VALUE));
    }
    private static final short m608andxj2QHRw(short s, short s2) {
        return m615constructorimpl((short) (s & s2));
    }
    private static final short m638orxj2QHRw(short s, short s2) {
        return m615constructorimpl((short) (s | s2));
    }
    private static final short m664xorxj2QHRw(short s, short s2) {
        return m615constructorimpl((short) (s ^ s2));
    }
    private static final short m629invMh2AYeg(short s) {
        return m615constructorimpl((short) (~s));
    }
    private static final byte m660toUBytew2LRezQ(short s) {
        return UByte.m351constructorimpl((byte) s);
    }
    private static final int m661toUIntpVg5ArA(short s) {
        return UInt.m429constructorimpl(s & MAX_VALUE);
    }
    private static final long m662toULongsVKNKU(short s) {
        return ULong.m508constructorimpl(((long) s) & 65535);
    }
    public static String m659toStringimpl(short s) {
        return String.valueOf(s & MAX_VALUE);
    }

    public String toString() {
        return m659toStringimpl(this.data);
    }
}

