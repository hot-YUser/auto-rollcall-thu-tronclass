package com.google.android.gms.internal.location;

import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.internal.ListenerHolders;
import com.google.android.gms.location.LocationCallback;
final class zzs extends zzab {
    private final /* synthetic */ LocationCallback zzcm;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzs(zzq zzqVar, GoogleApiClient googleApiClient, LocationCallback locationCallback) {
        super(googleApiClient);
        this.zzcm = locationCallback;
    }

    @Override // com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl
    protected final /* synthetic */ void doExecute(Api.AnyClient anyClient) throws RemoteException {
        ((zzaz) anyClient).zzb(ListenerHolders.createListenerKey(this.zzcm, "LocationCallback"), new zzac(this));
    }
}

