package androidx.camera.core.impl;

import android.util.Size;
import android.view.Surface;
import androidx.camera.core.impl.utils.futures.Futures;
import com.google.common.util.concurrent.ListenableFuture;
public final class ImmediateSurface extends DeferrableSurface {
    private final Surface mSurface;

    public ImmediateSurface(Surface surface, Size size, int i) {
        super(size, i);
        this.mSurface = surface;
    }

    public ImmediateSurface(Surface surface) {
        this.mSurface = surface;
    }

    @Override // androidx.camera.core.impl.DeferrableSurface
    public ListenableFuture<Surface> provideSurface() {
        return Futures.immediateFuture(this.mSurface);
    }
}

