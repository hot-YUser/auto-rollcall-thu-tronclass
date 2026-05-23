package androidx.camera.camera2.internal;

import androidx.camera.core.SafeCloseImageReaderProxy;
public final /* synthetic */ class ZslControlImpl$$ExternalSyntheticLambda0 implements Runnable {
    public final /* synthetic */ SafeCloseImageReaderProxy f$0;

    public /* synthetic */ ZslControlImpl$$ExternalSyntheticLambda0(SafeCloseImageReaderProxy safeCloseImageReaderProxy) {
        this.f$0 = safeCloseImageReaderProxy;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.f$0.safeClose();
    }
}

