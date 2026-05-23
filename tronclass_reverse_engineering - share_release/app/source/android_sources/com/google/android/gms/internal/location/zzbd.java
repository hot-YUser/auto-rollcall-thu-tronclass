package com.google.android.gms.internal.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.ClientIdentity;
import com.google.android.gms.common.internal.Objects;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import com.google.android.gms.location.LocationRequest;
import java.util.Collections;
import java.util.List;
public final class zzbd extends AbstractSafeParcelable {
    private String moduleId;
    private String tag;
    private LocationRequest zzdg;
    private boolean zzdh;
    private boolean zzdi;
    private boolean zzdj;
    private boolean zzdk = true;
    private List<ClientIdentity> zzm;
    static final List<ClientIdentity> zzcd = Collections.emptyList();
    public static final Parcelable.Creator<zzbd> CREATOR = new zzbe();

    zzbd(LocationRequest locationRequest, List<ClientIdentity> list, String str, boolean z, boolean z2, boolean z3, String str2) {
        this.zzdg = locationRequest;
        this.zzm = list;
        this.tag = str;
        this.zzdh = z;
        this.zzdi = z2;
        this.zzdj = z3;
        this.moduleId = str2;
    }

    @Deprecated
    public static zzbd zza(LocationRequest locationRequest) {
        return new zzbd(locationRequest, zzcd, null, false, false, false, null);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof zzbd)) {
            return false;
        }
        zzbd zzbdVar = (zzbd) obj;
        return Objects.equal(this.zzdg, zzbdVar.zzdg) && Objects.equal(this.zzm, zzbdVar.zzm) && Objects.equal(this.tag, zzbdVar.tag) && this.zzdh == zzbdVar.zzdh && this.zzdi == zzbdVar.zzdi && this.zzdj == zzbdVar.zzdj && Objects.equal(this.moduleId, zzbdVar.moduleId);
    }

    public final int hashCode() {
        return this.zzdg.hashCode();
    }

    public final String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(this.zzdg);
        if (this.tag != null) {
            sb.append(" tag=").append(this.tag);
        }
        if (this.moduleId != null) {
            sb.append(" moduleId=").append(this.moduleId);
        }
        sb.append(" hideAppOps=").append(this.zzdh);
        sb.append(" clients=").append(this.zzm);
        sb.append(" forceCoarseLocation=").append(this.zzdi);
        if (this.zzdj) {
            sb.append(" exemptFromBackgroundThrottle");
        }
        return sb.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeParcelable(parcel, 1, this.zzdg, i, false);
        SafeParcelWriter.writeTypedList(parcel, 5, this.zzm, false);
        SafeParcelWriter.writeString(parcel, 6, this.tag, false);
        SafeParcelWriter.writeBoolean(parcel, 7, this.zzdh);
        SafeParcelWriter.writeBoolean(parcel, 8, this.zzdi);
        SafeParcelWriter.writeBoolean(parcel, 9, this.zzdj);
        SafeParcelWriter.writeString(parcel, 10, this.moduleId, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

