package androidx.core.view;

import android.graphics.Rect;
import android.view.Gravity;
public final class GravityCompat {
    public static final int END = 8388613;
    public static final int RELATIVE_HORIZONTAL_GRAVITY_MASK = 8388615;
    public static final int RELATIVE_LAYOUT_DIRECTION = 8388608;
    public static final int START = 8388611;

    public static void apply(int i, int i2, int i3, Rect rect, Rect rect2, int i4) {
        Api17Impl.apply(i, i2, i3, rect, rect2, i4);
    }

    public static void apply(int i, int i2, int i3, Rect rect, int i4, int i5, Rect rect2, int i6) {
        Api17Impl.apply(i, i2, i3, rect, i4, i5, rect2, i6);
    }

    public static void applyDisplay(int i, Rect rect, Rect rect2, int i2) {
        Api17Impl.applyDisplay(i, rect, rect2, i2);
    }

    public static int getAbsoluteGravity(int i, int i2) {
        return Gravity.getAbsoluteGravity(i, i2);
    }

    private GravityCompat() {
    }

    static class Api17Impl {
        private Api17Impl() {
        }

        static void apply(int i, int i2, int i3, Rect rect, Rect rect2, int i4) {
            Gravity.apply(i, i2, i3, rect, rect2, i4);
        }

        static void apply(int i, int i2, int i3, Rect rect, int i4, int i5, Rect rect2, int i6) {
            Gravity.apply(i, i2, i3, rect, i4, i5, rect2, i6);
        }

        static void applyDisplay(int i, Rect rect, Rect rect2, int i2) {
            Gravity.applyDisplay(i, rect, rect2, i2);
        }
    }
}

