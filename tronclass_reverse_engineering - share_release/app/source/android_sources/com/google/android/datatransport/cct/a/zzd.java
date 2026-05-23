package com.google.android.datatransport.cct.a;

import com.google.android.datatransport.cct.a.zza;
final class zzd extends com.google.android.datatransport.cct.a.zza {
    private final int zza;
    private final String zzb;
    private final String zzc;
    private final String zzd;
    private final String zze;
    private final String zzf;
    private final String zzg;
    private final String zzh;
    static final class zza extends zza.AbstractC0018zza {
        private Integer zza;
        private String zzb;
        private String zzc;
        private String zzd;
        private String zze;
        private String zzf;
        private String zzg;
        private String zzh;

        zza() {
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zza(int i) {
            this.zza = Integer.valueOf(i);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zzb(String str) {
            this.zzh = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zzc(String str) {
            this.zzc = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zzd(String str) {
            this.zzg = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zze(String str) {
            this.zzb = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zzf(String str) {
            this.zzf = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zzg(String str) {
            this.zze = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public zza.AbstractC0018zza zza(String str) {
            this.zzd = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zza.AbstractC0018zza
        public com.google.android.datatransport.cct.a.zza zza() {
            String str;
            if (this.zza != null) {
                str = "";
            } else {
                str = " sdkVersion";
            }
            if (str.isEmpty()) {
                return new zzd(this.zza.intValue(), this.zzb, this.zzc, this.zzd, this.zze, this.zzf, this.zzg, this.zzh, null);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }
    }

    /* synthetic */ zzd(int i, String str, String str2, String str3, String str4, String str5, String str6, String str7, zzc zzcVar) {
        this.zza = i;
        this.zzb = str;
        this.zzc = str2;
        this.zzd = str3;
        this.zze = str4;
        this.zzf = str5;
        this.zzg = str6;
        this.zzh = str7;
    }

    public boolean equals(Object obj) {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof com.google.android.datatransport.cct.a.zza)) {
            return false;
        }
        zzd zzdVar = (zzd) ((com.google.android.datatransport.cct.a.zza) obj);
        if (this.zza == zzdVar.zza && ((str = this.zzb) != null ? str.equals(zzdVar.zzb) : zzdVar.zzb == null) && ((str2 = this.zzc) != null ? str2.equals(zzdVar.zzc) : zzdVar.zzc == null) && ((str3 = this.zzd) != null ? str3.equals(zzdVar.zzd) : zzdVar.zzd == null) && ((str4 = this.zze) != null ? str4.equals(zzdVar.zze) : zzdVar.zze == null) && ((str5 = this.zzf) != null ? str5.equals(zzdVar.zzf) : zzdVar.zzf == null) && ((str6 = this.zzg) != null ? str6.equals(zzdVar.zzg) : zzdVar.zzg == null)) {
            String str7 = this.zzh;
            if (str7 == null) {
                if (zzdVar.zzh == null) {
                    return true;
                }
            } else if (str7.equals(zzdVar.zzh)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i = (this.zza ^ 1000003) * 1000003;
        String str = this.zzb;
        int iHashCode = (i ^ (str == null ? 0 : str.hashCode())) * 1000003;
        String str2 = this.zzc;
        int iHashCode2 = (iHashCode ^ (str2 == null ? 0 : str2.hashCode())) * 1000003;
        String str3 = this.zzd;
        int iHashCode3 = (iHashCode2 ^ (str3 == null ? 0 : str3.hashCode())) * 1000003;
        String str4 = this.zze;
        int iHashCode4 = (iHashCode3 ^ (str4 == null ? 0 : str4.hashCode())) * 1000003;
        String str5 = this.zzf;
        int iHashCode5 = (iHashCode4 ^ (str5 == null ? 0 : str5.hashCode())) * 1000003;
        String str6 = this.zzg;
        int iHashCode6 = (iHashCode5 ^ (str6 == null ? 0 : str6.hashCode())) * 1000003;
        String str7 = this.zzh;
        return iHashCode6 ^ (str7 != null ? str7.hashCode() : 0);
    }

    public String toString() {
        return "AndroidClientInfo{sdkVersion=" + this.zza + ", model=" + this.zzb + ", hardware=" + this.zzc + ", device=" + this.zzd + ", product=" + this.zze + ", osBuild=" + this.zzf + ", manufacturer=" + this.zzg + ", fingerprint=" + this.zzh + "}";
    }

    public String zzb() {
        return this.zzd;
    }

    public String zzc() {
        return this.zzh;
    }

    public String zzd() {
        return this.zzc;
    }

    public String zze() {
        return this.zzg;
    }

    public String zzf() {
        return this.zzb;
    }

    public String zzg() {
        return this.zzf;
    }

    public String zzh() {
        return this.zze;
    }

    public int zzi() {
        return this.zza;
    }
}

