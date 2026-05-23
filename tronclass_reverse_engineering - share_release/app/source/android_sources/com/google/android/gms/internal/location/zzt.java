package com.google.android.gms.internal.location;

import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Status;
final class zzt extends zzab {
    private final /* synthetic */ boolean zzcn;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzt(zzq zzqVar, GoogleApiClient googleApiClient, boolean z) {
        super(googleApiClient);
        this.zzcn = z;
    }

    @Override // com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl
    protected final /* synthetic */ void doExecute(Api.AnyClient anyClient) throws RemoteException {
        ((zzaz) anyClient).zza(this.zzcn);
        setResult(Status.RESULT_SUCCESS);
    }
}

