package com.google.android.datatransport.cct.a;
final class zzl extends zzx {
    private final long zza;

    zzl(long j) {
        this.zza = j;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        return (obj instanceof zzx) && this.zza == ((zzx) obj).zza();
    }

    public int hashCode() {
        long j = this.zza;
        return ((int) (j ^ (j >>> 32))) ^ 1000003;
    }

    public String toString() {
        return "LogResponse{nextRequestWaitMillis=" + this.zza + "}";
    }

    @Override // com.google.android.datatransport.cct.a.zzx
    public long zza() {
        return this.zza;
    }
}

