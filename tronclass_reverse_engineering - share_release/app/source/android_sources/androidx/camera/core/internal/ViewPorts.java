package androidx.camera.core.internal;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Rational;
import androidx.camera.core.UseCase;
import androidx.camera.core.impl.StreamSpec;
import androidx.camera.core.internal.utils.ImageUtil;
import androidx.core.util.Preconditions;
import java.util.HashMap;
import java.util.Map;
public class ViewPorts {
    private static float flipX(float f, float f2) {
        return (f2 + f2) - f;
    }

    private static float flipY(float f, float f2) {
        return (f2 + f2) - f;
    }

    private static boolean shouldMirrorStartAndEnd(boolean z, int i) {
        return z ^ (i == 1);
    }

    private ViewPorts() {
    }

    public static Map<UseCase, Rect> calculateViewPortRects(Rect rect, boolean z, Rational rational, int i, int i2, int i3, Map<UseCase, StreamSpec> map) {
        Preconditions.checkArgument(rect.width() > 0 && rect.height() > 0, "Cannot compute viewport crop rects zero sized sensor rect.");
        RectF rectF = new RectF(rect);
        HashMap map2 = new HashMap();
        RectF rectF2 = new RectF(rect);
        for (Map.Entry<UseCase, StreamSpec> entry : map.entrySet()) {
            Matrix matrix = new Matrix();
            RectF rectF3 = new RectF(0.0f, 0.0f, entry.getValue().getResolution().getWidth(), entry.getValue().getResolution().getHeight());
            matrix.setRectToRect(rectF3, rectF, Matrix.ScaleToFit.CENTER);
            map2.put(entry.getKey(), matrix);
            RectF rectF4 = new RectF();
            matrix.mapRect(rectF4, rectF3);
            rectF2.intersect(rectF4);
        }
        RectF scaledRect = getScaledRect(rectF2, ImageUtil.getRotatedAspectRatio(i, rational), i2, z, i3, i);
        HashMap map3 = new HashMap();
        RectF rectF5 = new RectF();
        Matrix matrix2 = new Matrix();
        for (Map.Entry entry2 : map2.entrySet()) {
            ((Matrix) entry2.getValue()).invert(matrix2);
            matrix2.mapRect(rectF5, scaledRect);
            Rect rect2 = new Rect();
            rectF5.round(rect2);
            map3.put((UseCase) entry2.getKey(), rect2);
        }
        return map3;
    }

    public static RectF getScaledRect(RectF rectF, Rational rational, int i, boolean z, int i2, int i3) {
        if (i == 3) {
            return rectF;
        }
        Matrix matrix = new Matrix();
        RectF rectF2 = new RectF(0.0f, 0.0f, rational.getNumerator(), rational.getDenominator());
        if (i == 0) {
            matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.START);
        } else if (i == 1) {
            matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.CENTER);
        } else if (i == 2) {
            matrix.setRectToRect(rectF2, rectF, Matrix.ScaleToFit.END);
        } else {
            throw new IllegalStateException("Unexpected scale type: " + i);
        }
        RectF rectF3 = new RectF();
        matrix.mapRect(rectF3, rectF2);
        return correctStartOrEnd(shouldMirrorStartAndEnd(z, i2), i3, rectF, rectF3);
    }

    private static RectF correctStartOrEnd(boolean z, int i, RectF rectF, RectF rectF2) {
        boolean z2 = i == 0 && !z;
        boolean z3 = i == 90 && z;
        if (z2 || z3) {
            return rectF2;
        }
        boolean z4 = i == 0 && z;
        boolean z5 = i == 270 && !z;
        if (z4 || z5) {
            return flipHorizontally(rectF2, rectF.centerX());
        }
        boolean z6 = i == 90 && !z;
        boolean z7 = i == 180 && z;
        if (z6 || z7) {
            return flipVertically(rectF2, rectF.centerY());
        }
        boolean z8 = i == 180 && !z;
        boolean z9 = i == 270 && z;
        if (z8 || z9) {
            return flipHorizontally(flipVertically(rectF2, rectF.centerY()), rectF.centerX());
        }
        throw new IllegalArgumentException("Invalid argument: mirrored " + z + " rotation " + i);
    }

    private static RectF flipHorizontally(RectF rectF, float f) {
        return new RectF(flipX(rectF.right, f), rectF.top, flipX(rectF.left, f), rectF.bottom);
    }

    private static RectF flipVertically(RectF rectF, float f) {
        return new RectF(rectF.left, flipY(rectF.bottom, f), rectF.right, flipY(rectF.top, f));
    }
}

