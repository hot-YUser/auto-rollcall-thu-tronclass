package com.google.android.datatransport.cct.a;

import com.google.android.datatransport.cct.a.zzt;
import java.util.Arrays;
final class zzi extends zzt {
    private final long zza;
    private final int zzb;
    private final long zzc;
    private final byte[] zzd;
    private final String zze;
    private final long zzf;
    private final zzy zzg;
    static final class zza extends zzt.zza {
        private Long zza;
        private Integer zzb;
        private Long zzc;
        private byte[] zzd;
        private String zze;
        private Long zzf;
        private zzy zzg;

        zza() {
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt.zza zza(long j) {
            this.zza = Long.valueOf(j);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt.zza zzb(long j) {
            this.zzc = Long.valueOf(j);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt.zza zzc(long j) {
            this.zzf = Long.valueOf(j);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt.zza zza(int i) {
            this.zzb = Integer.valueOf(i);
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        zzt.zza zza(byte[] bArr) {
            this.zzd = bArr;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        zzt.zza zza(String str) {
            this.zze = str;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt.zza zza(zzy zzyVar) {
            this.zzg = zzyVar;
            return this;
        }

        @Override // com.google.android.datatransport.cct.a.zzt.zza
        public zzt zza() {
            String str;
            if (this.zza != null) {
                str = "";
            } else {
                str = " eventTimeMs";
            }
            if (this.zzb == null) {
                str = str + " eventCode";
            }
            if (this.zzc == null) {
                str = str + " eventUptimeMs";
            }
            if (this.zzf == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new zzi(this.zza.longValue(), this.zzb.intValue(), this.zzc.longValue(), this.zzd, this.zze, this.zzf.longValue(), this.zzg, null);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }
    }

    /* synthetic */ zzi(long j, int i, long j2, byte[] bArr, String str, long j3, zzy zzyVar, zzh zzhVar) {
        this.zza = j;
        this.zzb = i;
        this.zzc = j2;
        this.zzd = bArr;
        this.zze = str;
        this.zzf = j3;
        this.zzg = zzyVar;
    }

    public boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof zzt)) {
            return false;
        }
        zzt zztVar = (zzt) obj;
        if (this.zza == zztVar.zza()) {
            zzi zziVar = (zzi) zztVar;
            if (this.zzb == zziVar.zzb && this.zzc == zztVar.zzb()) {
                if (Arrays.equals(this.zzd, zztVar instanceof zzi ? zziVar.zzd : zziVar.zzd) && ((str = this.zze) != null ? str.equals(zziVar.zze) : zziVar.zze == null) && this.zzf == zztVar.zzc()) {
                    zzy zzyVar = this.zzg;
                    if (zzyVar == null) {
                        if (zziVar.zzg == null) {
                            return true;
                        }
                    } else if (zzyVar.equals(zziVar.zzg)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public int hashCode() {
        long j = this.zza;
        int i = (((((int) (j ^ (j >>> 32))) ^ 1000003) * 1000003) ^ this.zzb) * 1000003;
        long j2 = this.zzc;
        int iHashCode = (((i ^ ((int) (j2 ^ (j2 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.zzd)) * 1000003;
        String str = this.zze;
        int iHashCode2 = str == null ? 0 : str.hashCode();
        long j3 = this.zzf;
        int i2 = (((iHashCode ^ iHashCode2) * 1000003) ^ ((int) ((j3 >>> 32) ^ j3))) * 1000003;
        zzy zzyVar = this.zzg;
        return i2 ^ (zzyVar != null ? zzyVar.hashCode() : 0);
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.zza + ", eventCode=" + this.zzb + ", eventUptimeMs=" + this.zzc + ", sourceExtension=" + Arrays.toString(this.zzd) + ", sourceExtensionJsonProto3=" + this.zze + ", timezoneOffsetSeconds=" + this.zzf + ", networkConnectionInfo=" + this.zzg + "}";
    }

    @Override // com.google.android.datatransport.cct.a.zzt
    public long zza() {
        return this.zza;
    }

    @Override // com.google.android.datatransport.cct.a.zzt
    public long zzb() {
        return this.zzc;
    }

    @Override // com.google.android.datatransport.cct.a.zzt
    public long zzc() {
        return this.zzf;
    }

    public int zzd() {
        return this.zzb;
    }

    public zzy zze() {
        return this.zzg;
    }

    public byte[] zzf() {
        return this.zzd;
    }

    public String zzg() {
        return this.zze;
    }
}

