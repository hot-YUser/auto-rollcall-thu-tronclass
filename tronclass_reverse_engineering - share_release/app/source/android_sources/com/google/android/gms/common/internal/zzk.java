package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.dynamic.IObjectWrapper;
public final class zzk extends com.google.android.gms.internal.common.zza implements zzi {
    zzk(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.ICertData");
    }

    @Override // com.google.android.gms.common.internal.zzi
    public final IObjectWrapper zzb() throws RemoteException {
        Parcel parcelZza = zza(1, zza());
        IObjectWrapper iObjectWrapperAsInterface = IObjectWrapper.Stub.asInterface(parcelZza.readStrongBinder());
        parcelZza.recycle();
        return iObjectWrapperAsInterface;
    }

    @Override // com.google.android.gms.common.internal.zzi
    public final int zzc() throws RemoteException {
        Parcel parcelZza = zza(2, zza());
        int i = parcelZza.readInt();
        parcelZza.recycle();
        return i;
    }
}

