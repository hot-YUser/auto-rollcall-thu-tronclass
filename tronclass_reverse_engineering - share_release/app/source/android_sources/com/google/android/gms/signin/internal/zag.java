package com.google.android.gms.signin.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.common.internal.IAccountAccessor;
public final class zag extends com.google.android.gms.internal.base.zaa implements zaf {
    zag(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.signin.internal.ISignInService");
    }

    @Override // com.google.android.gms.signin.internal.zaf
    public final void zam(int i) throws RemoteException {
        Parcel parcelZaa = zaa();
        parcelZaa.writeInt(i);
        zab(7, parcelZaa);
    }

    @Override // com.google.android.gms.signin.internal.zaf
    public final void zaa(IAccountAccessor iAccountAccessor, int i, boolean z) throws RemoteException {
        Parcel parcelZaa = zaa();
        com.google.android.gms.internal.base.zac.zaa(parcelZaa, iAccountAccessor);
        parcelZaa.writeInt(i);
        com.google.android.gms.internal.base.zac.writeBoolean(parcelZaa, z);
        zab(9, parcelZaa);
    }

    @Override // com.google.android.gms.signin.internal.zaf
    public final void zaa(zah zahVar, zad zadVar) throws RemoteException {
        Parcel parcelZaa = zaa();
        com.google.android.gms.internal.base.zac.zaa(parcelZaa, zahVar);
        com.google.android.gms.internal.base.zac.zaa(parcelZaa, zadVar);
        zab(12, parcelZaa);
    }
}

