package com.google.android.datatransport.cct;

import com.google.android.datatransport.cct.zzc;
import com.google.android.datatransport.runtime.retries.Function;
final /* synthetic */ class zza implements Function {
    private final zzc zza;

    private zza(zzc zzcVar) {
        this.zza = zzcVar;
    }

    public static Function zza(zzc zzcVar) {
        return new zza(zzcVar);
    }

    @Override // com.google.android.datatransport.runtime.retries.Function
    public Object apply(Object obj) {
        return this.zza.zza((zzc.zza) obj);
    }
}

