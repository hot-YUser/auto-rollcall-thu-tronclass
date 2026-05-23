package com.google.android.gms.internal.location;

import android.location.Location;
import com.google.android.gms.common.api.internal.ListenerHolder;
import com.google.android.gms.location.LocationListener;
final class zzay implements ListenerHolder.Notifier<LocationListener> {
    private final /* synthetic */ Location zzdd;

    zzay(zzax zzaxVar, Location location) {
        this.zzdd = location;
    }

    @Override // com.google.android.gms.common.api.internal.ListenerHolder.Notifier
    public final /* synthetic */ void notifyListener(LocationListener locationListener) {
        locationListener.onLocationChanged(this.zzdd);
    }

    @Override // com.google.android.gms.common.api.internal.ListenerHolder.Notifier
    public final void onNotifyListenerFailed() {
    }
}

