package com.google.android.datatransport.cct.a;

import android.util.SparseArray;

/* high-level source view WARN: $VALUES field not found */
/* high-level source view WARN: Failed to restore enum class, 'enum' modifier and super class removed */
public final class zzaa {
    public static final zzaa zza;
    public static final zzaa zzb;
    public static final zzaa zzc;
    public static final zzaa zzd;
    public static final zzaa zze;
    public static final zzaa zzf;
    private static final SparseArray<zzaa> zzg;

    static {
        zzaa zzaaVar = new zzaa("DEFAULT", 0, 0);
        zza = zzaaVar;
        zzaa zzaaVar2 = new zzaa("UNMETERED_ONLY", 1, 1);
        zzb = zzaaVar2;
        zzaa zzaaVar3 = new zzaa("UNMETERED_OR_DAILY", 2, 2);
        zzc = zzaaVar3;
        zzaa zzaaVar4 = new zzaa("FAST_IF_RADIO_AWAKE", 3, 3);
        zzd = zzaaVar4;
        zzaa zzaaVar5 = new zzaa("NEVER", 4, 4);
        zze = zzaaVar5;
        zzaa zzaaVar6 = new zzaa("UNRECOGNIZED", 5, -1);
        zzf = zzaaVar6;
        SparseArray<zzaa> sparseArray = new SparseArray<>();
        zzg = sparseArray;
        sparseArray.put(0, zzaaVar);
        sparseArray.put(1, zzaaVar2);
        sparseArray.put(2, zzaaVar3);
        sparseArray.put(3, zzaaVar4);
        sparseArray.put(4, zzaaVar5);
        sparseArray.put(-1, zzaaVar6);
    }

    private zzaa(String str, int i, int i2) {
    }
}

