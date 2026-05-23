package com.google.android.gms.common.api.internal;
final class zap extends ThreadLocal<Boolean> {
    zap() {
    }

    @Override // java.lang.ThreadLocal
    protected final /* synthetic */ Boolean initialValue() {
        return false;
    }
}

