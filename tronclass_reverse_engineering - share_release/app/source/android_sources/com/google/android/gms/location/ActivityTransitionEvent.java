package com.google.android.gms.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.Objects;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
public class ActivityTransitionEvent extends AbstractSafeParcelable {
    public static final Parcelable.Creator<ActivityTransitionEvent> CREATOR = new zzd();
    private final int zzi;
    private final int zzj;
    private final long zzk;

    public ActivityTransitionEvent(int i, int i2, long j) {
        DetectedActivity.zzb(i);
        ActivityTransition.zza(i2);
        this.zzi = i;
        this.zzj = i2;
        this.zzk = j;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof ActivityTransitionEvent)) {
            return false;
        }
        ActivityTransitionEvent activityTransitionEvent = (ActivityTransitionEvent) obj;
        return this.zzi == activityTransitionEvent.zzi && this.zzj == activityTransitionEvent.zzj && this.zzk == activityTransitionEvent.zzk;
    }

    public int getActivityType() {
        return this.zzi;
    }

    public long getElapsedRealTimeNanos() {
        return this.zzk;
    }

    public int getTransitionType() {
        return this.zzj;
    }

    public int hashCode() {
        return Objects.hashCode(Integer.valueOf(this.zzi), Integer.valueOf(this.zzj), Long.valueOf(this.zzk));
    }

    public String toString() {
        return new StringBuilder(24).append("ActivityType ").append(this.zzi).toString() + " " + new StringBuilder(26).append("TransitionType ").append(this.zzj).toString() + " " + new StringBuilder(41).append("ElapsedRealTimeNanos ").append(this.zzk).toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeInt(parcel, 1, getActivityType());
        SafeParcelWriter.writeInt(parcel, 2, getTransitionType());
        SafeParcelWriter.writeLong(parcel, 3, getElapsedRealTimeNanos());
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

