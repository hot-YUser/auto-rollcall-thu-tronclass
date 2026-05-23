package androidx.camera.core.impl.utils;

import android.util.Size;
import java.util.Comparator;
public final class CompareSizesByArea implements Comparator<Size> {
    private boolean mReverse;

    public CompareSizesByArea() {
        this(false);
    }

    public CompareSizesByArea(boolean z) {
        this.mReverse = z;
    }

    @Override // java.util.Comparator
    public int compare(Size size, Size size2) {
        int iSignum = Long.signum((((long) size.getWidth()) * ((long) size.getHeight())) - (((long) size2.getWidth()) * ((long) size2.getHeight())));
        return this.mReverse ? iSignum * (-1) : iSignum;
    }
}

