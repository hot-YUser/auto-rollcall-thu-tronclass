package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraCaptureSession;
import android.view.Surface;
import androidx.camera.camera2.internal.SynchronizedCaptureSession;
import androidx.camera.camera2.internal.compat.ApiCompat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
final class SynchronizedCaptureSessionStateCallbacks extends SynchronizedCaptureSession.StateCallback {
    private final List<SynchronizedCaptureSession.StateCallback> mCallbacks;

    static SynchronizedCaptureSession.StateCallback createComboCallback(SynchronizedCaptureSession.StateCallback... stateCallbackArr) {
        return new SynchronizedCaptureSessionStateCallbacks(Arrays.asList(stateCallbackArr));
    }

    SynchronizedCaptureSessionStateCallbacks(List<SynchronizedCaptureSession.StateCallback> list) {
        ArrayList arrayList = new ArrayList();
        this.mCallbacks = arrayList;
        arrayList.addAll(list);
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onSurfacePrepared(SynchronizedCaptureSession synchronizedCaptureSession, Surface surface) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onSurfacePrepared(synchronizedCaptureSession, surface);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onReady(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onReady(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onActive(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onActive(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onCaptureQueueEmpty(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onCaptureQueueEmpty(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onConfigured(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onConfigured(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onConfigureFailed(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onConfigureFailed(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    public void onClosed(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onClosed(synchronizedCaptureSession);
        }
    }

    @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
    void onSessionFinished(SynchronizedCaptureSession synchronizedCaptureSession) {
        Iterator<SynchronizedCaptureSession.StateCallback> it = this.mCallbacks.iterator();
        while (it.hasNext()) {
            it.next().onSessionFinished(synchronizedCaptureSession);
        }
    }

    static class Adapter extends SynchronizedCaptureSession.StateCallback {
        private final CameraCaptureSession.StateCallback mCameraCaptureSessionStateCallback;

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        void onSessionFinished(SynchronizedCaptureSession synchronizedCaptureSession) {
        }

        Adapter(CameraCaptureSession.StateCallback stateCallback) {
            this.mCameraCaptureSessionStateCallback = stateCallback;
        }

        Adapter(List<CameraCaptureSession.StateCallback> list) {
            this(CameraCaptureSessionStateCallbacks.createComboCallback(list));
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onSurfacePrepared(SynchronizedCaptureSession synchronizedCaptureSession, Surface surface) {
            ApiCompat.Api23Impl.onSurfacePrepared(this.mCameraCaptureSessionStateCallback, synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession(), surface);
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onReady(SynchronizedCaptureSession synchronizedCaptureSession) {
            this.mCameraCaptureSessionStateCallback.onReady(synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onActive(SynchronizedCaptureSession synchronizedCaptureSession) {
            this.mCameraCaptureSessionStateCallback.onActive(synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onCaptureQueueEmpty(SynchronizedCaptureSession synchronizedCaptureSession) {
            ApiCompat.Api26Impl.onCaptureQueueEmpty(this.mCameraCaptureSessionStateCallback, synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onConfigured(SynchronizedCaptureSession synchronizedCaptureSession) {
            this.mCameraCaptureSessionStateCallback.onConfigured(synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onConfigureFailed(SynchronizedCaptureSession synchronizedCaptureSession) {
            this.mCameraCaptureSessionStateCallback.onConfigureFailed(synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }

        @Override // androidx.camera.camera2.internal.SynchronizedCaptureSession.StateCallback
        public void onClosed(SynchronizedCaptureSession synchronizedCaptureSession) {
            this.mCameraCaptureSessionStateCallback.onClosed(synchronizedCaptureSession.toCameraCaptureSessionCompat().toCameraCaptureSession());
        }
    }
}

