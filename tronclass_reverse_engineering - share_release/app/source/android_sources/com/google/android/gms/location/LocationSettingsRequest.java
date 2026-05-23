package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
public final class LocationSettingsRequest extends AbstractSafeParcelable {
    public static final Parcelable.Creator<LocationSettingsRequest> CREATOR = new zzag();
    private final List<LocationRequest> zzbg;
    private final boolean zzbh;
    private final boolean zzbi;
    private zzae zzbj;

    public static final class Builder {
        private final ArrayList<LocationRequest> zzbk = new ArrayList<>();
        private boolean zzbh = false;
        private boolean zzbi = false;
        private zzae zzbj = null;

        public final Builder addAllLocationRequests(Collection<LocationRequest> collection) {
            for (LocationRequest locationRequest : collection) {
                if (locationRequest != null) {
                    this.zzbk.add(locationRequest);
                }
            }
            return this;
        }

        public final Builder addLocationRequest(LocationRequest locationRequest) {
            if (locationRequest != null) {
                this.zzbk.add(locationRequest);
            }
            return this;
        }

        public final LocationSettingsRequest build() {
            return new LocationSettingsRequest(this.zzbk, this.zzbh, this.zzbi, null);
        }

        public final Builder setAlwaysShow(boolean z) {
            this.zzbh = z;
            return this;
        }

        public final Builder setNeedBle(boolean z) {
            this.zzbi = z;
            return this;
        }
    }

    LocationSettingsRequest(List<LocationRequest> list, boolean z, boolean z2, zzae zzaeVar) {
        this.zzbg = list;
        this.zzbh = z;
        this.zzbi = z2;
        this.zzbj = zzaeVar;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeTypedList(parcel, 1, Collections.unmodifiableList(this.zzbg), false);
        SafeParcelWriter.writeBoolean(parcel, 2, this.zzbh);
        SafeParcelWriter.writeBoolean(parcel, 3, this.zzbi);
        SafeParcelWriter.writeParcelable(parcel, 5, this.zzbj, i, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

