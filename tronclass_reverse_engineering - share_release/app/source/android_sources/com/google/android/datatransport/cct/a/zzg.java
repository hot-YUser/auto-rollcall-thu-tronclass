package com.google.android.datatransport.cct.a;

import com.google.android.datatransport.cct.a.zzq;
final class zzg extends zzq {
    private final zzq.zzb zza;
    private final com.google.android.datatransport.cct.a.zza zzb;
    static final class zza extends zzq.zza {
        private zzq.zzb zza;
        private com.google.android.datatransport.cct.a.zza zzb;

        zza() {
        }

        @Override // com.google.android.datatransport.cct.a.zzq.zza
        public zzq.zza zza(zzq.zzb zzbVar) {
            this.zza = zzbVar;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzq.zza
        public zzq.zza zza(com.google.android.datatransport.cct.a.zza zzaVar) {
            this.zzb = zzaVar;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzq.zza
        public zzq zza() {
            return new zzg(this.zza, this.zzb, null);
        }
    }

    /* synthetic */ zzg(zzq.zzb zzbVar, com.google.android.datatransport.cct.a.zza zzaVar, zzf zzfVar) {
        this.zza = zzbVar;
        this.zzb = zzaVar;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof zzq)) {
            return false;
        }
        zzq.zzb zzbVar = this.zza;
        if (zzbVar != null ? zzbVar.equals(((zzg) obj).zza) : ((zzg) obj).zza == null) {
            com.google.android.datatransport.cct.a.zza zzaVar = this.zzb;
            if (zzaVar == null) {
                if (((zzg) obj).zzb == null) {
                    return true;
                }
            } else if (zzaVar.equals(((zzg) obj).zzb)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        zzq.zzb zzbVar = this.zza;
        int iHashCode = ((zzbVar == null ? 0 : zzbVar.hashCode()) ^ 1000003) * 1000003;
        com.google.android.datatransport.cct.a.zza zzaVar = this.zzb;
        return iHashCode ^ (zzaVar != null ? zzaVar.hashCode() : 0);
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.zza + ", androidClientInfo=" + this.zzb + "}";
    }

    public com.google.android.datatransport.cct.a.zza zzb() {
        return this.zzb;
    }

    public zzq.zzb zzc() {
        return this.zza;
    }
}

