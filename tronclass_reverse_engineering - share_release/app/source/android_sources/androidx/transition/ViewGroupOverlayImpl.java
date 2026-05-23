package androidx.transition;

import android.view.View;
interface ViewGroupOverlayImpl extends ViewOverlayImpl {
    void add(View view);

    void remove(View view);
}

