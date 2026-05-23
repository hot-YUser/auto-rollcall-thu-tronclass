package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
public final class BinderWrapper implements Parcelable {
    public static final Parcelable.Creator<BinderWrapper> CREATOR = new zza();
    private IBinder zzcz;

    public BinderWrapper() {
        this.zzcz = null;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public BinderWrapper(IBinder iBinder) {
        this.zzcz = iBinder;
    }

    private BinderWrapper(Parcel parcel) {
        this.zzcz = null;
        this.zzcz = parcel.readStrongBinder();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        parcel.writeStrongBinder(this.zzcz);
    }

    /* synthetic */ BinderWrapper(Parcel parcel, zza zzaVar) {
        this(parcel);
    }
}

