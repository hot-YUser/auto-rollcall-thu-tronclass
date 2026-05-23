package com.google.android.gms.dynamic;

import com.google.android.gms.dynamic.LifecycleDelegate;
public interface OnDelegateCreatedListener<T extends LifecycleDelegate> {
    void onDelegateCreated(T t);
}

