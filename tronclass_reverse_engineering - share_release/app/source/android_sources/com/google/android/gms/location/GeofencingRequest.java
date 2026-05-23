package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import com.google.android.gms.internal.location.zzbh;
import java.util.ArrayList;
import java.util.List;
public class GeofencingRequest extends AbstractSafeParcelable {
    public static final Parcelable.Creator<GeofencingRequest> CREATOR = new zzq();
    public static final int INITIAL_TRIGGER_DWELL = 4;
    public static final int INITIAL_TRIGGER_ENTER = 1;
    public static final int INITIAL_TRIGGER_EXIT = 2;
    private final String tag;
    private final List<zzbh> zzap;
    private final int zzaq;

    public static final class Builder {
        private final List<zzbh> zzap = new ArrayList();
        private int zzaq = 5;
        private String tag = "";

        public final Builder addGeofence(Geofence geofence) {
            Preconditions.checkNotNull(geofence, "geofence can't be null.");
            Preconditions.checkArgument(geofence instanceof zzbh, "Geofence must be created using Geofence.Builder.");
            this.zzap.add((zzbh) geofence);
            return this;
        }

        public final Builder addGeofences(List<Geofence> list) {
            if (list != null && !list.isEmpty()) {
                for (Geofence geofence : list) {
                    if (geofence != null) {
                        addGeofence(geofence);
                    }
                }
            }
            return this;
        }

        public final GeofencingRequest build() {
            Preconditions.checkArgument(!this.zzap.isEmpty(), "No geofence has been added to this request.");
            return new GeofencingRequest(this.zzap, this.zzaq, this.tag);
        }

        public final Builder setInitialTrigger(int i) {
            this.zzaq = i & 7;
            return this;
        }
    }

    GeofencingRequest(List<zzbh> list, int i, String str) {
        this.zzap = list;
        this.zzaq = i;
        this.tag = str;
    }

    public List<Geofence> getGeofences() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.zzap);
        return arrayList;
    }

    public int getInitialTrigger() {
        return this.zzaq;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("GeofencingRequest[geofences=");
        sb.append(this.zzap);
        sb.append(new StringBuilder(30).append(", initialTrigger=").append(this.zzaq).append(", ").toString());
        String strValueOf = String.valueOf(this.tag);
        sb.append(strValueOf.length() != 0 ? "tag=".concat(strValueOf) : new String("tag="));
        sb.append("]");
        return sb.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeTypedList(parcel, 1, this.zzap, false);
        SafeParcelWriter.writeInt(parcel, 2, getInitialTrigger());
        SafeParcelWriter.writeString(parcel, 3, this.tag, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

