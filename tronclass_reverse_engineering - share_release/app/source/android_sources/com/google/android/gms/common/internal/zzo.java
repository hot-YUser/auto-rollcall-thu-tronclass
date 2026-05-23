package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.dynamic.IObjectWrapper;
public final class zzo extends com.google.android.gms.internal.common.zza implements zzm {
    zzo(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.IGoogleCertificatesApi");
    }

    @Override // com.google.android.gms.common.internal.zzm
    public final boolean zza(com.google.android.gms.common.zzk zzkVar, IObjectWrapper iObjectWrapper) throws RemoteException {
        Parcel parcelZza = zza();
        com.google.android.gms.internal.common.zzc.zza(parcelZza, zzkVar);
        com.google.android.gms.internal.common.zzc.zza(parcelZza, iObjectWrapper);
        Parcel parcelZza2 = zza(5, parcelZza);
        boolean zZza = com.google.android.gms.internal.common.zzc.zza(parcelZza2);
        parcelZza2.recycle();
        return zZza;
    }
}

