package org.opencv.core;

import kotlin.Metadata;
import kotlin.UByte;
import kotlin.UByteArray;
import kotlin.jvm.internal.Intrinsics;
import org.opencv.core.Mat;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0015\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u001f\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0002\u0010\bB\u0015\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0002\u0010\u000bJ\u0018\u0010\u0010\u001a\u00020\u0002H\u0016ø\u0001\u0000ø\u0001\u0001ø\u0001\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u0011\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00020\u0014H\u0016ø\u0001\u0002J\u0011\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00020\u0016H\u0016ø\u0001\u0002J\u0011\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016ø\u0001\u0002J\u001d\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u0002H\u0016ø\u0001\u0001ø\u0001\u0002¢\u0006\u0004\b\u001c\u0010\u001dJ\u0019\u0010\u001e\u001a\u00020\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00020\u0014H\u0016ø\u0001\u0002J\u0019\u0010\u001f\u001a\u00020\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00020\u0016H\u0016ø\u0001\u0002J\u0019\u0010 \u001a\u00020\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00020\u0018H\u0016ø\u0001\u0002R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fø\u0001\u0002\u0082\u0002\u000f\n\u0002\b!\n\u0005\b¡\u001e0\u0001\n\u0002\b\u0019¨\u0006!"}, d2 = {"Lorg/opencv/core/AtableUByte;", "Lorg/opencv/core/Mat$Atable;", "Lkotlin/UByte;", "mat", "Lorg/opencv/core/Mat;", "row", "", "col", "(Lorg/opencv/core/Mat;II)V", "indices", "", "(Lorg/opencv/core/Mat;[I)V", "getIndices", "()[I", "getMat", "()Lorg/opencv/core/Mat;", "getV", "getV-w2LRezQ", "()B", "getV2c", "Lorg/opencv/core/Mat$Tuple2;", "getV3c", "Lorg/opencv/core/Mat$Tuple3;", "getV4c", "Lorg/opencv/core/Mat$Tuple4;", "setV", "", "v", "setV-7apg3OU", "(B)V", "setV2c", "setV3c", "setV4c", "opencv_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class AtableUByte implements Mat.Atable<UByte> {
    private final int[] indices;
    private final Mat mat;

    public AtableUByte(Mat mat, int[] indices) {
        Intrinsics.checkNotNullParameter(mat, "mat");
        Intrinsics.checkNotNullParameter(indices, "indices");
        this.mat = mat;
        this.indices = indices;
    }

    public final int[] getIndices() {
        return this.indices;
    }

    public final Mat getMat() {
        return this.mat;
    }

    @Override // org.opencv.core.Mat.Atable
    public /* bridge */ /* synthetic */ UByte getV() {
        return UByte.m345boximpl(m1900getVw2LRezQ());
    }

    @Override // org.opencv.core.Mat.Atable
    public /* bridge */ /* synthetic */ void setV(UByte uByte) {
        m1901setV7apg3OU(uByte.getData());
    }

    /* high-level source view WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AtableUByte(Mat mat, int i, int i2) {
        this(mat, new int[]{i, i2});
        Intrinsics.checkNotNullParameter(mat, "mat");
    }
    public byte m1900getVw2LRezQ() {
        byte[] bArrM404constructorimpl = UByteArray.m404constructorimpl(1);
        MatAtKt.m1905get7tiRaYo(this.mat, this.indices, bArrM404constructorimpl);
        return UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 0);
    }
    public void m1901setV7apg3OU(byte v) {
        MatAtKt.m1909put7tiRaYo(this.mat, this.indices, new byte[]{v});
    }

    @Override // org.opencv.core.Mat.Atable
    public Mat.Tuple2<UByte> getV2c() {
        byte[] bArrM404constructorimpl = UByteArray.m404constructorimpl(2);
        MatAtKt.m1905get7tiRaYo(this.mat, this.indices, bArrM404constructorimpl);
        return new Mat.Tuple2<>(UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 0)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 1)));
    }

    @Override // org.opencv.core.Mat.Atable
    public void setV2c(Mat.Tuple2<UByte> v) {
        Intrinsics.checkNotNullParameter(v, "v");
        UByte _0 = v.get_0();
        Intrinsics.checkNotNullExpressionValue(_0, "v._0");
        byte data = _0.getData();
        UByte _1 = v.get_1();
        Intrinsics.checkNotNullExpressionValue(_1, "v._1");
        MatAtKt.m1909put7tiRaYo(this.mat, this.indices, new byte[]{data, _1.getData()});
    }

    @Override // org.opencv.core.Mat.Atable
    public Mat.Tuple3<UByte> getV3c() {
        byte[] bArrM404constructorimpl = UByteArray.m404constructorimpl(3);
        MatAtKt.m1905get7tiRaYo(this.mat, this.indices, bArrM404constructorimpl);
        return new Mat.Tuple3<>(UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 0)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 1)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 2)));
    }

    @Override // org.opencv.core.Mat.Atable
    public void setV3c(Mat.Tuple3<UByte> v) {
        Intrinsics.checkNotNullParameter(v, "v");
        UByte _0 = v.get_0();
        Intrinsics.checkNotNullExpressionValue(_0, "v._0");
        byte data = _0.getData();
        UByte _1 = v.get_1();
        Intrinsics.checkNotNullExpressionValue(_1, "v._1");
        byte data2 = _1.getData();
        UByte _2 = v.get_2();
        Intrinsics.checkNotNullExpressionValue(_2, "v._2");
        MatAtKt.m1909put7tiRaYo(this.mat, this.indices, new byte[]{data, data2, _2.getData()});
    }

    @Override // org.opencv.core.Mat.Atable
    public Mat.Tuple4<UByte> getV4c() {
        byte[] bArrM404constructorimpl = UByteArray.m404constructorimpl(4);
        MatAtKt.m1905get7tiRaYo(this.mat, this.indices, bArrM404constructorimpl);
        return new Mat.Tuple4<>(UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 0)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 1)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 2)), UByte.m345boximpl(UByteArray.m410getw2LRezQ(bArrM404constructorimpl, 3)));
    }

    @Override // org.opencv.core.Mat.Atable
    public void setV4c(Mat.Tuple4<UByte> v) {
        Intrinsics.checkNotNullParameter(v, "v");
        UByte _0 = v.get_0();
        Intrinsics.checkNotNullExpressionValue(_0, "v._0");
        byte data = _0.getData();
        UByte _1 = v.get_1();
        Intrinsics.checkNotNullExpressionValue(_1, "v._1");
        byte data2 = _1.getData();
        UByte _2 = v.get_2();
        Intrinsics.checkNotNullExpressionValue(_2, "v._2");
        byte data3 = _2.getData();
        UByte _3 = v.get_3();
        Intrinsics.checkNotNullExpressionValue(_3, "v._3");
        MatAtKt.m1909put7tiRaYo(this.mat, this.indices, new byte[]{data, data2, data3, _3.getData()});
    }
}

