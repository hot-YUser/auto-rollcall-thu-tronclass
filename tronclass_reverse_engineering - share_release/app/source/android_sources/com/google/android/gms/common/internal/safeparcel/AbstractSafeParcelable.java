package com.google.android.gms.common.internal.safeparcel;
public abstract class AbstractSafeParcelable implements SafeParcelable {
    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }
}

