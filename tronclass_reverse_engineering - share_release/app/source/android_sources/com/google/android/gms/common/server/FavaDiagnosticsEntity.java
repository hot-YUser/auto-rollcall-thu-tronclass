package com.google.android.gms.common.server;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.ReflectedParcelable;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
public class FavaDiagnosticsEntity extends AbstractSafeParcelable implements ReflectedParcelable {
    public static final Parcelable.Creator<FavaDiagnosticsEntity> CREATOR = new zaa();
    private final int zalf;
    private final String zapj;
    private final int zapk;

    public FavaDiagnosticsEntity(int i, String str, int i2) {
        this.zalf = i;
        this.zapj = str;
        this.zapk = i2;
    }

    public FavaDiagnosticsEntity(String str, int i) {
        this.zalf = 1;
        this.zapj = str;
        this.zapk = i;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeInt(parcel, 1, this.zalf);
        SafeParcelWriter.writeString(parcel, 2, this.zapj, false);
        SafeParcelWriter.writeInt(parcel, 3, this.zapk);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

