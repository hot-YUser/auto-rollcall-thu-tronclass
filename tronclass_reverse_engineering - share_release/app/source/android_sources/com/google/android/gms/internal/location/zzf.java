package com.google.android.gms.internal.location;

import android.app.PendingIntent;
import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Status;
final class zzf extends zzj {
    private final /* synthetic */ long zzbw;
    private final /* synthetic */ PendingIntent zzbx;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzf(zze zzeVar, GoogleApiClient googleApiClient, long j, PendingIntent pendingIntent) {
        super(googleApiClient);
        this.zzbw = j;
        this.zzbx = pendingIntent;
    }

    @Override // com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl
    protected final /* synthetic */ void doExecute(Api.AnyClient anyClient) throws RemoteException {
        ((zzaz) anyClient).zza(this.zzbw, this.zzbx);
        setResult(Status.RESULT_SUCCESS);
    }
}

