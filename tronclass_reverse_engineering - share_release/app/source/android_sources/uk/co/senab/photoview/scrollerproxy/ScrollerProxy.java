package uk.co.senab.photoview.scrollerproxy;

import android.content.Context;
public abstract class ScrollerProxy {
    public abstract boolean computeScrollOffset();

    public abstract void fling(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, int i10);

    public abstract void forceFinished(boolean z);

    public abstract int getCurrX();

    public abstract int getCurrY();

    public abstract boolean isFinished();

    public static ScrollerProxy getScroller(Context context) {
        return new IcsScroller(context);
    }
}

