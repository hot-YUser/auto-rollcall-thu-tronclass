package androidx.core.widget;

import android.view.View;
import android.widget.ListPopupWindow;
public final class ListPopupWindowCompat {
    private ListPopupWindowCompat() {
    }

    @Deprecated
    public static View.OnTouchListener createDragToOpenListener(Object obj, View view) {
        return createDragToOpenListener((ListPopupWindow) obj, view);
    }

    public static View.OnTouchListener createDragToOpenListener(ListPopupWindow listPopupWindow, View view) {
        return Api19Impl.createDragToOpenListener(listPopupWindow, view);
    }

    static class Api19Impl {
        private Api19Impl() {
        }

        static View.OnTouchListener createDragToOpenListener(ListPopupWindow listPopupWindow, View view) {
            return listPopupWindow.createDragToOpenListener(view);
        }
    }
}

