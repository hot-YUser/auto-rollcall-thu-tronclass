package com.google.android.datatransport.cct.a;

import com.google.android.datatransport.cct.a.zzv;
import java.util.List;
final class zzk extends zzv {
    private final long zza;
    private final long zzb;
    private final zzq zzc;
    private final int zzd;
    private final String zze;
    private final List<zzt> zzf;
    private final zzaa zzg;
    static final class zza extends zzv.zza {
        private Long zza;
        private Long zzb;
        private zzq zzc;
        private Integer zzd;
        private String zze;
        private List<zzt> zzf;
        private zzaa zzg;

        zza() {
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv.zza zza(long j) {
            this.zza = Long.valueOf(j);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv.zza zzb(long j) {
            this.zzb = Long.valueOf(j);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv.zza zza(zzq zzqVar) {
            this.zzc = zzqVar;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        zzv.zza zza(int i) {
            this.zzd = Integer.valueOf(i);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        zzv.zza zza(String str) {
            this.zze = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv.zza zza(List<zzt> list) {
            this.zzf = list;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv.zza zza(zzaa zzaaVar) {
            this.zzg = zzaaVar;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzv.zza
        public zzv zza() {
            String str;
            if (this.zza != null) {
                str = "";
            } else {
                str = " requestTimeMs";
            }
            if (this.zzb == null) {
                str = str + " requestUptimeMs";
            }
            if (this.zzd == null) {
                str = str + " logSource";
            }
            if (str.isEmpty()) {
                return new zzk(this.zza.longValue(), this.zzb.longValue(), this.zzc, this.zzd.intValue(), this.zze, this.zzf, this.zzg, null);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }
    }

    /* synthetic */ zzk(long j, long j2, zzq zzqVar, int i, String str, List list, zzaa zzaaVar, zzj zzjVar) {
        this.zza = j;
        this.zzb = j2;
        this.zzc = zzqVar;
        this.zzd = i;
        this.zze = str;
        this.zzf = list;
        this.zzg = zzaaVar;
    }

    public boolean equals(Object obj) {
        zzq zzqVar;
        String str;
        List<zzt> list;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof zzv)) {
            return false;
        }
        zzk zzkVar = (zzk) ((zzv) obj);
        if (this.zza == zzkVar.zza && this.zzb == zzkVar.zzb && ((zzqVar = this.zzc) != null ? zzqVar.equals(zzkVar.zzc) : zzkVar.zzc == null) && this.zzd == zzkVar.zzd && ((str = this.zze) != null ? str.equals(zzkVar.zze) : zzkVar.zze == null) && ((list = this.zzf) != null ? list.equals(zzkVar.zzf) : zzkVar.zzf == null)) {
            zzaa zzaaVar = this.zzg;
            if (zzaaVar == null) {
                if (zzkVar.zzg == null) {
                    return true;
                }
            } else if (zzaaVar.equals(zzkVar.zzg)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j = this.zza;
        long j2 = this.zzb;
        int i = (((((int) (j ^ (j >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j2 >>> 32) ^ j2))) * 1000003;
        zzq zzqVar = this.zzc;
        int iHashCode = (((i ^ (zzqVar == null ? 0 : zzqVar.hashCode())) * 1000003) ^ this.zzd) * 1000003;
        String str = this.zze;
        int iHashCode2 = (iHashCode ^ (str == null ? 0 : str.hashCode())) * 1000003;
        List<zzt> list = this.zzf;
        int iHashCode3 = (iHashCode2 ^ (list == null ? 0 : list.hashCode())) * 1000003;
        zzaa zzaaVar = this.zzg;
        return iHashCode3 ^ (zzaaVar != null ? zzaaVar.hashCode() : 0);
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.zza + ", requestUptimeMs=" + this.zzb + ", clientInfo=" + this.zzc + ", logSource=" + this.zzd + ", logSourceName=" + this.zze + ", logEvents=" + this.zzf + ", qosTier=" + this.zzg + "}";
    }

    public zzq zzb() {
        return this.zzc;
    }

    public List<zzt> zzc() {
        return this.zzf;
    }

    public int zzd() {
        return this.zzd;
    }

    public String zze() {
        return this.zze;
    }

    public long zzf() {
        return this.zza;
    }

    public long zzg() {
        return this.zzb;
    }
}

