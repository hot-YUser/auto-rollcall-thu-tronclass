package com.google.android.gms.internal.location;

import android.os.Parcel;
import android.os.RemoteException;
public abstract class zzak extends zzb implements zzaj {
    public zzak() {
        super("com.google.android.gms.location.internal.IFusedLocationProviderCallback");
    }

    @Override // com.google.android.gms.internal.location.zzb
    protected final boolean dispatchTransaction(int i, Parcel parcel, Parcel parcel2, int i2) throws RemoteException {
        if (i != 1) {
            return false;
        }
        zza((zzad) zzc.zza(parcel, zzad.CREATOR));
        return true;
    }
}

