package org.opencv.core;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.UByte;
import kotlin.UShort;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import org.opencv.core.Mat;
@Metadata(d1 = {"\u0000D\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0015\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\u001a'\u0010\u0000\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u0004\b\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u0002¢\u0006\u0002\u0010\u0005\u001a/\u0010\u0006\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0007\"\u0004\b\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u00022\u0006\u0010\b\u001a\u0002H\u0002¢\u0006\u0002\u0010\t\u001a7\u0010\n\u001a\b\u0012\u0004\u0012\u0002H\u00020\u000b\"\u0004\b\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u00022\u0006\u0010\b\u001a\u0002H\u00022\u0006\u0010\f\u001a\u0002H\u0002¢\u0006\u0002\u0010\r\u001a+\u0010\u000e\u001a\b\u0012\u0004\u0012\u0002H\u00020\u000f\"\u0006\b\u0000\u0010\u0002\u0018\u0001*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0012H\u0086\b\u001a#\u0010\u000e\u001a\b\u0012\u0004\u0012\u0002H\u00020\u000f\"\u0006\b\u0000\u0010\u0002\u0018\u0001*\u00020\u00102\u0006\u0010\u0014\u001a\u00020\u0015H\u0086\b\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0001H\u0086\u0002¢\u0006\u0002\u0010\u0017\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002¢\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002¢\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0001H\u0086\u0002¢\u0006\u0002\u0010\u0017\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002¢\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002¢\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001b\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002¢\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u001b\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002¢\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001c\u001a\u0002H\u0002\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002¢\u0006\u0002\u0010\u0019\u001a/\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u001fø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b \u0010!\u001a/\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\"ø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b#\u0010$\u001a'\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\u001fø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b&\u0010'\u001a'\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\"ø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b(\u0010)\u001a/\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u001fø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b+\u0010!\u001a/\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\"ø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b,\u0010$\u001a'\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\u001fø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b-\u0010'\u001a'\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\"ø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\b.\u0010)\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b\u0019¨\u0006/"}, d2 = {"T2", "Lorg/opencv/core/Mat$Tuple2;", ExifInterface.GPS_DIRECTION_TRUE, "_0", "_1", "(Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple2;", "T3", "Lorg/opencv/core/Mat$Tuple3;", "_2", "(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple3;", "T4", "Lorg/opencv/core/Mat$Tuple4;", "_3", "(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple4;", "at", "Lorg/opencv/core/Mat$Atable;", "Lorg/opencv/core/Mat;", "row", "", "col", "idx", "", "component1", "(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;", "(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;", "(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;", "component2", "component3", "component4", "get", "data", "Lkotlin/UByteArray;", "get-K0TZSog", "(Lorg/opencv/core/Mat;II[B)I", "Lkotlin/UShortArray;", "get-rFce7Xw", "(Lorg/opencv/core/Mat;II[S)I", "indices", "get-7tiRaYo", "(Lorg/opencv/core/Mat;[I[B)I", "get-N38XRpM", "(Lorg/opencv/core/Mat;[I[S)I", "put", "put-K0TZSog", "put-rFce7Xw", "put-7tiRaYo", "put-N38XRpM", "opencv_release"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class MatAtKt {
    public static final int m1906getK0TZSog(Mat get, int i, int i2, byte[] data) {
        Intrinsics.checkNotNullParameter(get, "$this$get");
        Intrinsics.checkNotNullParameter(data, "data");
        return get.get(i, i2, data);
    }
    public static final int m1905get7tiRaYo(Mat get, int[] indices, byte[] data) {
        Intrinsics.checkNotNullParameter(get, "$this$get");
        Intrinsics.checkNotNullParameter(indices, "indices");
        Intrinsics.checkNotNullParameter(data, "data");
        return get.get(indices, data);
    }
    public static final int m1910putK0TZSog(Mat put, int i, int i2, byte[] data) {
        Intrinsics.checkNotNullParameter(put, "$this$put");
        Intrinsics.checkNotNullParameter(data, "data");
        return put.put(i, i2, data);
    }
    public static final int m1909put7tiRaYo(Mat put, int[] indices, byte[] data) {
        Intrinsics.checkNotNullParameter(put, "$this$put");
        Intrinsics.checkNotNullParameter(indices, "indices");
        Intrinsics.checkNotNullParameter(data, "data");
        return put.put(indices, data);
    }
    public static final int m1908getrFce7Xw(Mat get, int i, int i2, short[] data) {
        Intrinsics.checkNotNullParameter(get, "$this$get");
        Intrinsics.checkNotNullParameter(data, "data");
        return get.get(i, i2, data);
    }
    public static final int m1907getN38XRpM(Mat get, int[] indices, short[] data) {
        Intrinsics.checkNotNullParameter(get, "$this$get");
        Intrinsics.checkNotNullParameter(indices, "indices");
        Intrinsics.checkNotNullParameter(data, "data");
        return get.get(indices, data);
    }
    public static final int m1912putrFce7Xw(Mat put, int i, int i2, short[] data) {
        Intrinsics.checkNotNullParameter(put, "$this$put");
        Intrinsics.checkNotNullParameter(data, "data");
        return put.put(i, i2, data);
    }
    public static final int m1911putN38XRpM(Mat put, int[] indices, short[] data) {
        Intrinsics.checkNotNullParameter(put, "$this$put");
        Intrinsics.checkNotNullParameter(indices, "indices");
        Intrinsics.checkNotNullParameter(data, "data");
        return put.put(indices, data);
    }

    public static final /* synthetic */ <T> Mat.Atable<T> at(Mat mat, int i, int i2) {
        Intrinsics.checkNotNullParameter(mat, "<this>");
        Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
        KClass orCreateKotlinClass = Reflection.getOrCreateKotlinClass(Object.class);
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Byte.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Double.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Float.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Integer.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Short.TYPE))) {
            Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
            Mat.Atable<T> atableAt = mat.at(Object.class, i, i2);
            Intrinsics.checkNotNullExpressionValue(atableAt, "this.at(\n            T::…            col\n        )");
            return atableAt;
        }
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(UByte.class))) {
            return new AtableUByte(mat, i, i2);
        }
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(UShort.class))) {
            return new AtableUShort(mat, i, i2);
        }
        throw new RuntimeException("Unsupported class type");
    }

    public static final /* synthetic */ <T> Mat.Atable<T> at(Mat mat, int[] idx) {
        Intrinsics.checkNotNullParameter(mat, "<this>");
        Intrinsics.checkNotNullParameter(idx, "idx");
        Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
        KClass orCreateKotlinClass = Reflection.getOrCreateKotlinClass(Object.class);
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Byte.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Double.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Float.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Integer.TYPE)) ? true : Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(Short.TYPE))) {
            Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
            Mat.Atable<T> atableAt = mat.at(Object.class, idx);
            Intrinsics.checkNotNullExpressionValue(atableAt, "this.at(\n            T::…            idx\n        )");
            return atableAt;
        }
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(UByte.class))) {
            return new AtableUByte(mat, idx);
        }
        if (Intrinsics.areEqual(orCreateKotlinClass, Reflection.getOrCreateKotlinClass(UShort.class))) {
            return new AtableUShort(mat, idx);
        }
        throw new RuntimeException("Unsupported class type");
    }

    public static final <T> T component1(Mat.Tuple2<T> tuple2) {
        Intrinsics.checkNotNullParameter(tuple2, "<this>");
        return tuple2.get_0();
    }

    public static final <T> T component2(Mat.Tuple2<T> tuple2) {
        Intrinsics.checkNotNullParameter(tuple2, "<this>");
        return tuple2.get_1();
    }

    public static final <T> T component1(Mat.Tuple3<T> tuple3) {
        Intrinsics.checkNotNullParameter(tuple3, "<this>");
        return tuple3.get_0();
    }

    public static final <T> T component2(Mat.Tuple3<T> tuple3) {
        Intrinsics.checkNotNullParameter(tuple3, "<this>");
        return tuple3.get_1();
    }

    public static final <T> T component3(Mat.Tuple3<T> tuple3) {
        Intrinsics.checkNotNullParameter(tuple3, "<this>");
        return tuple3.get_2();
    }

    public static final <T> T component1(Mat.Tuple4<T> tuple4) {
        Intrinsics.checkNotNullParameter(tuple4, "<this>");
        return tuple4.get_0();
    }

    public static final <T> T component2(Mat.Tuple4<T> tuple4) {
        Intrinsics.checkNotNullParameter(tuple4, "<this>");
        return tuple4.get_1();
    }

    public static final <T> T component3(Mat.Tuple4<T> tuple4) {
        Intrinsics.checkNotNullParameter(tuple4, "<this>");
        return tuple4.get_2();
    }

    public static final <T> T component4(Mat.Tuple4<T> tuple4) {
        Intrinsics.checkNotNullParameter(tuple4, "<this>");
        return tuple4.get_3();
    }

    public static final <T> Mat.Tuple2<T> T2(T t, T t2) {
        return new Mat.Tuple2<>(t, t2);
    }

    public static final <T> Mat.Tuple3<T> T3(T t, T t2, T t3) {
        return new Mat.Tuple3<>(t, t2, t3);
    }

    public static final <T> Mat.Tuple4<T> T4(T t, T t2, T t3, T t4) {
        return new Mat.Tuple4<>(t, t2, t3, t4);
    }
}

