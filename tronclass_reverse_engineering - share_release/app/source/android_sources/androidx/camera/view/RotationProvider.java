package androidx.camera.view;

import android.content.Context;
import android.view.OrientationEventListener;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
public final class RotationProvider {
    final OrientationEventListener mOrientationListener;
    final Object mLock = new Object();
    final Map<Listener, ListenerWrapper> mListeners = new HashMap();
    boolean mIgnoreCanDetectForTest = false;

    public interface Listener {
        void onRotationChanged(int i);
    }

    static int orientationToSurfaceRotation(int i) {
        if (i >= 315 || i < 45) {
            return 0;
        }
        if (i >= 225) {
            return 1;
        }
        return i >= 135 ? 2 : 3;
    }

    public RotationProvider(Context context) {
        this.mOrientationListener = new OrientationEventListener(context) { // from class: androidx.camera.view.RotationProvider.1
            private static final int INVALID_SURFACE_ROTATION = -1;
            private int mRotation = -1;

            @Override // android.view.OrientationEventListener
            public void onOrientationChanged(int i) {
                int iOrientationToSurfaceRotation;
                ArrayList arrayList;
                if (i == -1 || this.mRotation == (iOrientationToSurfaceRotation = RotationProvider.orientationToSurfaceRotation(i))) {
                    return;
                }
                this.mRotation = iOrientationToSurfaceRotation;
                synchronized (RotationProvider.this.mLock) {
                    arrayList = new ArrayList(RotationProvider.this.mListeners.values());
                }
                if (arrayList.isEmpty()) {
                    return;
                }
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    ((ListenerWrapper) it.next()).onRotationChanged(iOrientationToSurfaceRotation);
                }
            }
        };
    }

    public boolean addListener(Executor executor, Listener listener) {
        synchronized (this.mLock) {
            if (!this.mOrientationListener.canDetectOrientation() && !this.mIgnoreCanDetectForTest) {
                return false;
            }
            this.mListeners.put(listener, new ListenerWrapper(listener, executor));
            this.mOrientationListener.enable();
            return true;
        }
    }

    public void removeListener(Listener listener) {
        synchronized (this.mLock) {
            ListenerWrapper listenerWrapper = this.mListeners.get(listener);
            if (listenerWrapper != null) {
                listenerWrapper.disable();
                this.mListeners.remove(listener);
            }
            if (this.mListeners.isEmpty()) {
                this.mOrientationListener.disable();
            }
        }
    }
    static class ListenerWrapper {
        private final AtomicBoolean mEnabled = new AtomicBoolean(true);
        private final Executor mExecutor;
        private final Listener mListener;

        ListenerWrapper(Listener listener, Executor executor) {
            this.mListener = listener;
            this.mExecutor = executor;
        }

        void onRotationChanged(final int i) {
            this.mExecutor.execute(new Runnable() { // from class: androidx.camera.view.RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m268xb9537cd0(i);
                }
            });
        }
        /* synthetic */ void m268xb9537cd0(int i) {
            if (this.mEnabled.get()) {
                this.mListener.onRotationChanged(i);
            }
        }

        void disable() {
            this.mEnabled.set(false);
        }
    }
}

