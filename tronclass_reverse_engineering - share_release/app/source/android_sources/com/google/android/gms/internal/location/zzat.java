package com.google.android.gms.internal.location;

import com.google.android.gms.common.api.internal.ListenerHolder;
import com.google.android.gms.location.LocationAvailability;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationResult;
final class zzat extends com.google.android.gms.location.zzv {
    private final ListenerHolder<LocationCallback> zzda;

    zzat(ListenerHolder<LocationCallback> listenerHolder) {
        this.zzda = listenerHolder;
    }

    @Override // com.google.android.gms.location.zzu
    public final void onLocationAvailability(LocationAvailability locationAvailability) {
        this.zzda.notifyListener(new zzav(this, locationAvailability));
    }

    @Override // com.google.android.gms.location.zzu
    public final void onLocationResult(LocationResult locationResult) {
        this.zzda.notifyListener(new zzau(this, locationResult));
    }

    public final synchronized void release() {
        this.zzda.clear();
    }
}

