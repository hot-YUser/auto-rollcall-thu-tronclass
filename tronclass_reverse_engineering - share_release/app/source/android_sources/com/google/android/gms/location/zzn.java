package com.google.android.gms.location;

import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.internal.ListenerHolder;
import com.google.android.gms.common.api.internal.RegisterListenerMethod;
import com.google.android.gms.internal.location.zzaz;
import com.google.android.gms.internal.location.zzbd;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.tasks.TaskCompletionSource;
final class zzn extends RegisterListenerMethod<zzaz, LocationCallback> {
    private final /* synthetic */ zzbd zzy;
    private final /* synthetic */ ListenerHolder zzz;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zzn(FusedLocationProviderClient fusedLocationProviderClient, ListenerHolder listenerHolder, zzbd zzbdVar, ListenerHolder listenerHolder2) {
        super(listenerHolder);
        this.zzy = zzbdVar;
        this.zzz = listenerHolder2;
    }

    @Override // com.google.android.gms.common.api.internal.RegisterListenerMethod
    protected final /* synthetic */ void registerListener(Api.AnyClient anyClient, TaskCompletionSource taskCompletionSource) throws RemoteException {
        ((zzaz) anyClient).zza(this.zzy, this.zzz, new FusedLocationProviderClient.zza(taskCompletionSource));
    }
}

