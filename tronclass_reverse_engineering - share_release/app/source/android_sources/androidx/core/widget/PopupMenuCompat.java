package androidx.core.widget;

import android.view.View;
import android.widget.PopupMenu;
public final class PopupMenuCompat {
    private PopupMenuCompat() {
    }

    public static View.OnTouchListener getDragToOpenListener(Object obj) {
        return Api19Impl.getDragToOpenListener((PopupMenu) obj);
    }

    static class Api19Impl {
        private Api19Impl() {
        }

        static View.OnTouchListener getDragToOpenListener(PopupMenu popupMenu) {
            return popupMenu.getDragToOpenListener();
        }
    }
}

