package com.google.android.datatransport.cct.a;

import java.util.List;
final class zze extends zzo {
    private final List<zzv> zza;

    zze(List<zzv> list) {
        if (list == null) {
            throw new NullPointerException("Null logRequests");
        }
        this.zza = list;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof zzo) {
            return this.zza.equals(((zzo) obj).zza());
        }
        return false;
    }

    public int hashCode() {
        return this.zza.hashCode() ^ 1000003;
    }

    public String toString() {
        return "BatchedLogRequest{logRequests=" + this.zza + "}";
    }

    @Override // com.google.android.datatransport.cct.a.zzo
    public List<zzv> zza() {
        return this.zza;
    }
}

