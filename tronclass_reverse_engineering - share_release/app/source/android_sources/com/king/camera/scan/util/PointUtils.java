package com.king.camera.scan.util;

import android.graphics.Point;
import com.king.logx.LogX;
public final class PointUtils {
    private PointUtils() {
        throw new AssertionError();
    }

    public static Point transform(Point point, int i, int i2, int i3, int i4) {
        return transform(point, i, i2, i3, i4, false);
    }

    public static Point transform(Point point, int i, int i2, int i3, int i4, boolean z) {
        return transform(point.x, point.y, i, i2, i3, i4, z);
    }

    public static Point transform(int i, int i2, int i3, int i4, int i5, int i6) {
        return transform(i, i2, i3, i4, i5, i6, false);
    }

    public static Point transform(int i, int i2, int i3, int i4, int i5, int i6, boolean z) {
        LogX.d("transform: %d,%d | %d,%d", Integer.valueOf(i3), Integer.valueOf(i4), Integer.valueOf(i5), Integer.valueOf(i6));
        float f = i5;
        float f2 = i3;
        float f3 = (f * 1.0f) / f2;
        float f4 = i6;
        float f5 = i4;
        float f6 = (1.0f * f4) / f5;
        Point point = new Point();
        if (z) {
            float fMin = Math.min(f3, f6);
            float fAbs = Math.abs((f2 * fMin) - f) / 2.0f;
            float fAbs2 = Math.abs((f5 * fMin) - f4) / 2.0f;
            point.x = (int) ((i * fMin) + fAbs);
            point.y = (int) ((i2 * fMin) + fAbs2);
        } else {
            float fMax = Math.max(f3, f6);
            float fAbs3 = Math.abs((f2 * fMax) - f) / 2.0f;
            float fAbs4 = Math.abs((f5 * fMax) - f4) / 2.0f;
            point.x = (int) ((i * fMax) - fAbs3);
            point.y = (int) ((i2 * fMax) - fAbs4);
        }
        return point;
    }
}

