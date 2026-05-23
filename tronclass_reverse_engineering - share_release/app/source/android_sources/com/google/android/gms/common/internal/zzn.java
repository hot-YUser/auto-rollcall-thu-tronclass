package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.IInterface;
public abstract class zzn extends com.google.android.gms.internal.common.zzb implements zzm {
    public static zzm zzc(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface iInterfaceQueryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGoogleCertificatesApi");
        if (iInterfaceQueryLocalInterface instanceof zzm) {
            return (zzm) iInterfaceQueryLocalInterface;
        }
        return new zzo(iBinder);
    }
}

