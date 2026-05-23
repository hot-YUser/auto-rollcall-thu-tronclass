package com.google.android.gms.internal.location;

import android.app.PendingIntent;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
public final class zzbf extends AbstractSafeParcelable {
    public static final Parcelable.Creator<zzbf> CREATOR = new zzbg();
    private PendingIntent zzbv;
    private int zzcg;
    private zzaj zzcj;
    private zzbd zzdl;
    private com.google.android.gms.location.zzx zzdm;
    private com.google.android.gms.location.zzu zzdn;

    zzbf(int i, zzbd zzbdVar, IBinder iBinder, PendingIntent pendingIntent, IBinder iBinder2, IBinder iBinder3) {
        this.zzcg = i;
        this.zzdl = zzbdVar;
        zzaj zzalVar = null;
        this.zzdm = iBinder == null ? null : com.google.android.gms.location.zzy.zzc(iBinder);
        this.zzbv = pendingIntent;
        this.zzdn = iBinder2 == null ? null : com.google.android.gms.location.zzv.zzb(iBinder2);
        if (iBinder3 != null && iBinder3 != null) {
            IInterface iInterfaceQueryLocalInterface = iBinder3.queryLocalInterface("com.google.android.gms.location.internal.IFusedLocationProviderCallback");
            zzalVar = iInterfaceQueryLocalInterface instanceof zzaj ? (zzaj) iInterfaceQueryLocalInterface : new zzal(iBinder3);
        }
        this.zzcj = zzalVar;
    }

    public static zzbf zza(com.google.android.gms.location.zzu zzuVar, zzaj zzajVar) {
        return new zzbf(2, null, null, null, zzuVar.asBinder(), zzajVar != null ? zzajVar.asBinder() : null);
    }

    public static zzbf zza(com.google.android.gms.location.zzx zzxVar, zzaj zzajVar) {
        return new zzbf(2, null, zzxVar.asBinder(), null, null, zzajVar != null ? zzajVar.asBinder() : null);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeInt(parcel, 1, this.zzcg);
        SafeParcelWriter.writeParcelable(parcel, 2, this.zzdl, i, false);
        com.google.android.gms.location.zzx zzxVar = this.zzdm;
        SafeParcelWriter.writeIBinder(parcel, 3, zzxVar == null ? null : zzxVar.asBinder(), false);
        SafeParcelWriter.writeParcelable(parcel, 4, this.zzbv, i, false);
        com.google.android.gms.location.zzu zzuVar = this.zzdn;
        SafeParcelWriter.writeIBinder(parcel, 5, zzuVar == null ? null : zzuVar.asBinder(), false);
        zzaj zzajVar = this.zzcj;
        SafeParcelWriter.writeIBinder(parcel, 6, zzajVar != null ? zzajVar.asBinder() : null, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

