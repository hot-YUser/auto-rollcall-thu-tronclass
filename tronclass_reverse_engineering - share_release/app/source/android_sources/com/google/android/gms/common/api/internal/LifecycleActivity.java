package com.google.android.gms.common.api.internal;

import android.app.Activity;
import android.content.ContextWrapper;
import androidx.fragment.app.FragmentActivity;
import com.google.android.gms.common.internal.Preconditions;
public class LifecycleActivity {
    private final Object zzbd;

    public LifecycleActivity(Activity activity) {
        Preconditions.checkNotNull(activity, "Activity must not be null");
        this.zzbd = activity;
    }

    public boolean isChimera() {
        return false;
    }

    public LifecycleActivity(ContextWrapper contextWrapper) {
        throw new UnsupportedOperationException();
    }

    public boolean isSupport() {
        return this.zzbd instanceof FragmentActivity;
    }

    public final boolean zzh() {
        return this.zzbd instanceof Activity;
    }

    public Activity asActivity() {
        return (Activity) this.zzbd;
    }

    public FragmentActivity asFragmentActivity() {
        return (FragmentActivity) this.zzbd;
    }

    public Object asObject() {
        return this.zzbd;
    }
}

