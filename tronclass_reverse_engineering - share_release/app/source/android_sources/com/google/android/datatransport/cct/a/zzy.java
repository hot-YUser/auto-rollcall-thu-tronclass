package com.google.android.datatransport.cct.a;

import android.util.SparseArray;
import com.google.android.datatransport.cct.a.zzn;
public abstract class zzy {
    public static abstract class zza {
        public abstract zza zza(zzb zzbVar);

        public abstract zza zza(zzc zzcVar);

        public abstract zzy zza();
    }

    /* high-level source view WARN: $VALUES field not found */
    /* high-level source view WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    public static final class zzb {
        public static final zzb zza;
        public static final zzb zzb;
        public static final zzb zzc;
        public static final zzb zzd;
        public static final zzb zze;
        public static final zzb zzf;
        public static final zzb zzg;
        public static final zzb zzh;
        public static final zzb zzi;
        public static final zzb zzj;
        public static final zzb zzk;
        public static final zzb zzl;
        public static final zzb zzm;
        public static final zzb zzn;
        public static final zzb zzo;
        public static final zzb zzp;
        public static final zzb zzq;
        public static final zzb zzr;
        public static final zzb zzs;
        public static final zzb zzt;
        public static final zzb zzu;
        private static final SparseArray<zzb> zzv;
        private final int zzw;

        static {
            zzb zzbVar = new zzb("UNKNOWN_MOBILE_SUBTYPE", 0, 0);
            zza = zzbVar;
            zzb zzbVar2 = new zzb("GPRS", 1, 1);
            zzb = zzbVar2;
            zzb zzbVar3 = new zzb("EDGE", 2, 2);
            zzc = zzbVar3;
            zzb zzbVar4 = new zzb("UMTS", 3, 3);
            zzd = zzbVar4;
            zzb zzbVar5 = new zzb("CDMA", 4, 4);
            zze = zzbVar5;
            zzb zzbVar6 = new zzb("EVDO_0", 5, 5);
            zzf = zzbVar6;
            zzb zzbVar7 = new zzb("EVDO_A", 6, 6);
            zzg = zzbVar7;
            zzb zzbVar8 = new zzb("RTT", 7, 7);
            zzh = zzbVar8;
            zzb zzbVar9 = new zzb("HSDPA", 8, 8);
            zzi = zzbVar9;
            zzb zzbVar10 = new zzb("HSUPA", 9, 9);
            zzj = zzbVar10;
            zzb zzbVar11 = new zzb("HSPA", 10, 10);
            zzk = zzbVar11;
            zzb zzbVar12 = new zzb("IDEN", 11, 11);
            zzl = zzbVar12;
            zzb zzbVar13 = new zzb("EVDO_B", 12, 12);
            zzm = zzbVar13;
            zzb zzbVar14 = new zzb("LTE", 13, 13);
            zzn = zzbVar14;
            zzb zzbVar15 = new zzb("EHRPD", 14, 14);
            zzo = zzbVar15;
            zzb zzbVar16 = new zzb("HSPAP", 15, 15);
            zzp = zzbVar16;
            zzb zzbVar17 = new zzb("GSM", 16, 16);
            zzq = zzbVar17;
            zzb zzbVar18 = new zzb("TD_SCDMA", 17, 17);
            zzr = zzbVar18;
            zzb zzbVar19 = new zzb("IWLAN", 18, 18);
            zzs = zzbVar19;
            zzb zzbVar20 = new zzb("LTE_CA", 19, 19);
            zzt = zzbVar20;
            zzu = new zzb("COMBINED", 20, 100);
            SparseArray<zzb> sparseArray = new SparseArray<>();
            zzv = sparseArray;
            sparseArray.put(0, zzbVar);
            sparseArray.put(1, zzbVar2);
            sparseArray.put(2, zzbVar3);
            sparseArray.put(3, zzbVar4);
            sparseArray.put(4, zzbVar5);
            sparseArray.put(5, zzbVar6);
            sparseArray.put(6, zzbVar7);
            sparseArray.put(7, zzbVar8);
            sparseArray.put(8, zzbVar9);
            sparseArray.put(9, zzbVar10);
            sparseArray.put(10, zzbVar11);
            sparseArray.put(11, zzbVar12);
            sparseArray.put(12, zzbVar13);
            sparseArray.put(13, zzbVar14);
            sparseArray.put(14, zzbVar15);
            sparseArray.put(15, zzbVar16);
            sparseArray.put(16, zzbVar17);
            sparseArray.put(17, zzbVar18);
            sparseArray.put(18, zzbVar19);
            sparseArray.put(19, zzbVar20);
        }

        private zzb(String str, int i, int i2) {
            this.zzw = i2;
        }

        public int zza() {
            return this.zzw;
        }

        public static zzb zza(int i) {
            return zzv.get(i);
        }
    }

    /* high-level source view WARN: $VALUES field not found */
    /* high-level source view WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    public static final class zzc {
        public static final zzc zza;
        public static final zzc zzb;
        public static final zzc zzc;
        public static final zzc zzd;
        public static final zzc zze;
        public static final zzc zzf;
        public static final zzc zzg;
        public static final zzc zzh;
        public static final zzc zzi;
        public static final zzc zzj;
        public static final zzc zzk;
        public static final zzc zzl;
        public static final zzc zzm;
        public static final zzc zzn;
        public static final zzc zzo;
        public static final zzc zzp;
        public static final zzc zzq;
        public static final zzc zzr;
        public static final zzc zzs;
        private static final SparseArray<zzc> zzt;
        private final int zzu;

        static {
            zzc zzcVar = new zzc("MOBILE", 0, 0);
            zza = zzcVar;
            zzc zzcVar2 = new zzc("WIFI", 1, 1);
            zzb = zzcVar2;
            zzc zzcVar3 = new zzc("MOBILE_MMS", 2, 2);
            zzc = zzcVar3;
            zzc zzcVar4 = new zzc("MOBILE_SUPL", 3, 3);
            zzd = zzcVar4;
            zzc zzcVar5 = new zzc("MOBILE_DUN", 4, 4);
            zze = zzcVar5;
            zzc zzcVar6 = new zzc("MOBILE_HIPRI", 5, 5);
            zzf = zzcVar6;
            zzc zzcVar7 = new zzc("WIMAX", 6, 6);
            zzg = zzcVar7;
            zzc zzcVar8 = new zzc("BLUETOOTH", 7, 7);
            zzh = zzcVar8;
            zzc zzcVar9 = new zzc("DUMMY", 8, 8);
            zzi = zzcVar9;
            zzc zzcVar10 = new zzc("ETHERNET", 9, 9);
            zzj = zzcVar10;
            zzc zzcVar11 = new zzc("MOBILE_FOTA", 10, 10);
            zzk = zzcVar11;
            zzc zzcVar12 = new zzc("MOBILE_IMS", 11, 11);
            zzl = zzcVar12;
            zzc zzcVar13 = new zzc("MOBILE_CBS", 12, 12);
            zzm = zzcVar13;
            zzc zzcVar14 = new zzc("WIFI_P2P", 13, 13);
            zzn = zzcVar14;
            zzc zzcVar15 = new zzc("MOBILE_IA", 14, 14);
            zzo = zzcVar15;
            zzc zzcVar16 = new zzc("MOBILE_EMERGENCY", 15, 15);
            zzp = zzcVar16;
            zzc zzcVar17 = new zzc("PROXY", 16, 16);
            zzq = zzcVar17;
            zzc zzcVar18 = new zzc("VPN", 17, 17);
            zzr = zzcVar18;
            zzc zzcVar19 = new zzc("NONE", 18, -1);
            zzs = zzcVar19;
            SparseArray<zzc> sparseArray = new SparseArray<>();
            zzt = sparseArray;
            sparseArray.put(0, zzcVar);
            sparseArray.put(1, zzcVar2);
            sparseArray.put(2, zzcVar3);
            sparseArray.put(3, zzcVar4);
            sparseArray.put(4, zzcVar5);
            sparseArray.put(5, zzcVar6);
            sparseArray.put(6, zzcVar7);
            sparseArray.put(7, zzcVar8);
            sparseArray.put(8, zzcVar9);
            sparseArray.put(9, zzcVar10);
            sparseArray.put(10, zzcVar11);
            sparseArray.put(11, zzcVar12);
            sparseArray.put(12, zzcVar13);
            sparseArray.put(13, zzcVar14);
            sparseArray.put(14, zzcVar15);
            sparseArray.put(15, zzcVar16);
            sparseArray.put(16, zzcVar17);
            sparseArray.put(17, zzcVar18);
            sparseArray.put(-1, zzcVar19);
        }

        private zzc(String str, int i, int i2) {
            this.zzu = i2;
        }

        public int zza() {
            return this.zzu;
        }

        public static zzc zza(int i) {
            return zzt.get(i);
        }
    }

    public static zza zza() {
        return new zzn.zza();
    }
}

