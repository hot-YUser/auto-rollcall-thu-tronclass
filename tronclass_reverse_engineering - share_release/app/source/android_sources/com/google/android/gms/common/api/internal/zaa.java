package com.google.android.gms.common.api.internal;

import android.app.Activity;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
public final class zaa extends ActivityLifecycleObserver {
    private final WeakReference<C0019zaa> zacl;

    public zaa(Activity activity) {
        this(C0019zaa.zaa(activity));
    }

    private zaa(C0019zaa c0019zaa) {
        this.zacl = new WeakReference<>(c0019zaa);
    }

    @Override // com.google.android.gms.common.api.internal.ActivityLifecycleObserver
    public final ActivityLifecycleObserver onStopCallOnce(Runnable runnable) {
        C0019zaa c0019zaa = this.zacl.get();
        if (c0019zaa == null) {
            throw new IllegalStateException("The target activity has already been GC'd");
        }
        c0019zaa.zaa(runnable);
        return this;
    }
    static class C0019zaa extends LifecycleCallback {
        private List<Runnable> zacm;
        public static C0019zaa zaa(Activity activity) {
            C0019zaa c0019zaa;
            synchronized (activity) {
                LifecycleFragment fragment = getFragment(activity);
                c0019zaa = (C0019zaa) fragment.getCallbackOrNull("LifecycleObserverOnStop", C0019zaa.class);
                if (c0019zaa == null) {
                    c0019zaa = new C0019zaa(fragment);
                }
            }
            return c0019zaa;
        }

        private C0019zaa(LifecycleFragment lifecycleFragment) {
            super(lifecycleFragment);
            this.zacm = new ArrayList();
            this.mLifecycleFragment.addCallback("LifecycleObserverOnStop", this);
        }
        public final synchronized void zaa(Runnable runnable) {
            this.zacm.add(runnable);
        }

        @Override // com.google.android.gms.common.api.internal.LifecycleCallback
        public void onStop() {
            List<Runnable> list;
            synchronized (this) {
                list = this.zacm;
                this.zacm = new ArrayList();
            }
            Iterator<Runnable> it = list.iterator();
            while (it.hasNext()) {
                it.next().run();
            }
        }
    }
}

