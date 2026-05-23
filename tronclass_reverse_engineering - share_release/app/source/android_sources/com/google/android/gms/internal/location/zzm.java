package com.google.android.gms.internal.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.ClientIdentity;
import com.google.android.gms.common.internal.Objects;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import java.util.Collections;
import java.util.List;
public final class zzm extends AbstractSafeParcelable {
    private String tag;
    private com.google.android.gms.location.zzj zzcf;
    private List<ClientIdentity> zzm;
    static final List<ClientIdentity> zzcd = Collections.emptyList();
    static final com.google.android.gms.location.zzj zzce = new com.google.android.gms.location.zzj();
    public static final Parcelable.Creator<zzm> CREATOR = new zzn();

    zzm(com.google.android.gms.location.zzj zzjVar, List<ClientIdentity> list, String str) {
        this.zzcf = zzjVar;
        this.zzm = list;
        this.tag = str;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof zzm)) {
            return false;
        }
        zzm zzmVar = (zzm) obj;
        return Objects.equal(this.zzcf, zzmVar.zzcf) && Objects.equal(this.zzm, zzmVar.zzm) && Objects.equal(this.tag, zzmVar.tag);
    }

    public final int hashCode() {
        return this.zzcf.hashCode();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeParcelable(parcel, 1, this.zzcf, i, false);
        SafeParcelWriter.writeTypedList(parcel, 2, this.zzm, false);
        SafeParcelWriter.writeString(parcel, 3, this.tag, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

