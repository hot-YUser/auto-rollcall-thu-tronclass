package com.google.android.gms.internal.location;

import android.location.Location;
import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Status;
final class zzu extends zzab {
    private final /* synthetic */ Location zzco;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzu(zzq zzqVar, GoogleApiClient googleApiClient, Location location) {
        super(googleApiClient);
        this.zzco = location;
    }

    @Override // com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl
    protected final /* synthetic */ void doExecute(Api.AnyClient anyClient) throws RemoteException {
        ((zzaz) anyClient).zza(this.zzco);
        setResult(Status.RESULT_SUCCESS);
    }
}

