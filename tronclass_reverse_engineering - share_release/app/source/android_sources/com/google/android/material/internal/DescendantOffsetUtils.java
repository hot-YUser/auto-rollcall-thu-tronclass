package com.google.android.material.internal;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
public class DescendantOffsetUtils {
    private static final ThreadLocal<Matrix> matrix = new ThreadLocal<>();
    private static final ThreadLocal<RectF> rectF = new ThreadLocal<>();

    public static void offsetDescendantRect(ViewGroup viewGroup, View view, Rect rect) {
        ThreadLocal<Matrix> threadLocal = matrix;
        Matrix matrix2 = threadLocal.get();
        if (matrix2 == null) {
            matrix2 = new Matrix();
            threadLocal.set(matrix2);
        } else {
            matrix2.reset();
        }
        offsetDescendantMatrix(viewGroup, view, matrix2);
        ThreadLocal<RectF> threadLocal2 = rectF;
        RectF rectF2 = threadLocal2.get();
        if (rectF2 == null) {
            rectF2 = new RectF();
            threadLocal2.set(rectF2);
        }
        rectF2.set(rect);
        matrix2.mapRect(rectF2);
        rect.set((int) (rectF2.left + 0.5f), (int) (rectF2.top + 0.5f), (int) (rectF2.right + 0.5f), (int) (rectF2.bottom + 0.5f));
    }

    public static void getDescendantRect(ViewGroup viewGroup, View view, Rect rect) {
        rect.set(0, 0, view.getWidth(), view.getHeight());
        offsetDescendantRect(viewGroup, view, rect);
    }

    private static void offsetDescendantMatrix(ViewParent viewParent, View view, Matrix matrix2) {
        Object parent = view.getParent();
        if ((parent instanceof View) && parent != viewParent) {
            offsetDescendantMatrix(viewParent, (View) parent, matrix2);
            matrix2.preTranslate(-r0.getScrollX(), -r0.getScrollY());
        }
        matrix2.preTranslate(view.getLeft(), view.getTop());
        if (view.getMatrix().isIdentity()) {
            return;
        }
        matrix2.preConcat(view.getMatrix());
    }
}

