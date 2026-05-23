package org.opencv.core;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\u0015\u0010\u0000\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0086\u0002¨\u0006\u0003"}, d2 = {"times", "Lorg/opencv/core/Mat;", "other", "opencv_release"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class MatMatMulKt {
    public static final Mat times(Mat mat, Mat other) {
        Intrinsics.checkNotNullParameter(mat, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Mat matMatMul = mat.matMul(other);
        Intrinsics.checkNotNullExpressionValue(matMatMul, "this.matMul(other)");
        return matMatMul;
    }
}

