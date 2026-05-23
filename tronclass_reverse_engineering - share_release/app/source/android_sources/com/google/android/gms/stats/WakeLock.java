package com.google.android.gms.stats;

import android.content.Context;
import android.os.PowerManager;
import android.os.WorkSource;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.providers.PooledExecutorsProvider;
import com.google.android.gms.common.stats.StatsUtils;
import com.google.android.gms.common.stats.WakeLockTracker;
import com.google.android.gms.common.util.Strings;
import com.google.android.gms.common.util.WorkSourceUtil;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
public class WakeLock {
    private static ScheduledExecutorService zzn;
    private static volatile zza zzo = new com.google.android.gms.stats.zza();
    private final Object zza;
    private final PowerManager.WakeLock zzb;
    private WorkSource zzc;
    private final int zzd;
    private final String zze;
    private final String zzf;
    private final String zzg;
    private final Context zzh;
    private boolean zzi;
    private final Map<String, Integer[]> zzj;
    private final Set<Future<?>> zzk;
    private int zzl;
    private AtomicInteger zzm;

    public interface zza {
    }

    public WakeLock(Context context, int i, String str) {
        this(context, i, str, null, context == null ? null : context.getPackageName());
    }

    private WakeLock(Context context, int i, String str, String str2, String str3) {
        this(context, i, str, null, str3, null);
    }

    private WakeLock(Context context, int i, String str, String str2, String str3, String str4) {
        this.zza = this;
        this.zzi = true;
        this.zzj = new HashMap();
        this.zzk = Collections.synchronizedSet(new HashSet());
        this.zzm = new AtomicInteger(0);
        Preconditions.checkNotNull(context, "WakeLock: context must not be null");
        Preconditions.checkNotEmpty(str, "WakeLock: wakeLockName must not be empty");
        this.zzd = i;
        this.zzf = null;
        this.zzg = null;
        Context applicationContext = context.getApplicationContext();
        this.zzh = applicationContext;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String strValueOf = String.valueOf("*gcore*:");
            String strValueOf2 = String.valueOf(str);
            this.zze = strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf);
        } else {
            this.zze = str;
        }
        PowerManager.WakeLock wakeLockNewWakeLock = ((PowerManager) context.getSystemService("power")).newWakeLock(i, str);
        this.zzb = wakeLockNewWakeLock;
        if (WorkSourceUtil.hasWorkSourcePermission(context)) {
            WorkSource workSourceFromPackage = WorkSourceUtil.fromPackage(context, Strings.isEmptyOrWhitespace(str3) ? context.getPackageName() : str3);
            this.zzc = workSourceFromPackage;
            if (workSourceFromPackage != null && WorkSourceUtil.hasWorkSourcePermission(applicationContext)) {
                WorkSource workSource = this.zzc;
                if (workSource != null) {
                    workSource.add(workSourceFromPackage);
                } else {
                    this.zzc = workSourceFromPackage;
                }
                try {
                    wakeLockNewWakeLock.setWorkSource(this.zzc);
                } catch (ArrayIndexOutOfBoundsException | IllegalArgumentException e) {
                    Log.wtf("WakeLock", e.toString());
                }
            }
        }
        if (zzn == null) {
            zzn = PooledExecutorsProvider.getInstance().newSingleThreadScheduledExecutor();
        }
    }

    private final List<String> zza() {
        return WorkSourceUtil.getNames(this.zzc);
    }

    public void acquire(long j) {
        this.zzm.incrementAndGet();
        String strZza = zza((String) null);
        synchronized (this.zza) {
            if ((!this.zzj.isEmpty() || this.zzl > 0) && !this.zzb.isHeld()) {
                this.zzj.clear();
                this.zzl = 0;
            }
            if (this.zzi) {
                Integer[] numArr = this.zzj.get(strZza);
                if (numArr == null) {
                    this.zzj.put(strZza, new Integer[]{1});
                    WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 7, this.zze, strZza, null, this.zzd, zza(), j);
                    this.zzl++;
                } else {
                    numArr[0] = Integer.valueOf(numArr[0].intValue() + 1);
                    if (!this.zzi) {
                        WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 7, this.zze, strZza, null, this.zzd, zza(), j);
                        this.zzl++;
                    }
                }
            } else if (!this.zzi && this.zzl == 0) {
                WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 7, this.zze, strZza, null, this.zzd, zza(), j);
                this.zzl++;
            }
        }
        this.zzb.acquire();
        if (j > 0) {
            zzn.schedule(new zzb(this), j, TimeUnit.MILLISECONDS);
        }
    }

    public void release() {
        Integer[] numArr;
        if (this.zzm.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.zze).concat(" release without a matched acquire!"));
        }
        String strZza = zza((String) null);
        synchronized (this.zza) {
            if (this.zzi && (numArr = this.zzj.get(strZza)) != null) {
                if (numArr[0].intValue() == 1) {
                    this.zzj.remove(strZza);
                    WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 8, this.zze, strZza, null, this.zzd, zza());
                    this.zzl--;
                } else {
                    numArr[0] = Integer.valueOf(numArr[0].intValue() - 1);
                    if (!this.zzi) {
                        WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 8, this.zze, strZza, null, this.zzd, zza());
                        this.zzl--;
                    }
                }
            } else if (!this.zzi && this.zzl == 1) {
                WakeLockTracker.getInstance().registerEvent(this.zzh, StatsUtils.getEventKey(this.zzb, strZza), 8, this.zze, strZza, null, this.zzd, zza());
                this.zzl--;
            }
        }
        zza(0);
    }
    public final void zza(int i) {
        if (this.zzb.isHeld()) {
            try {
                this.zzb.release();
            } catch (RuntimeException e) {
                if (e.getClass().equals(RuntimeException.class)) {
                    Log.e("WakeLock", String.valueOf(this.zze).concat(" was already released!"), e);
                } else {
                    throw e;
                }
            }
            this.zzb.isHeld();
        }
    }

    private final String zza(String str) {
        return (!this.zzi || TextUtils.isEmpty(str)) ? this.zzf : str;
    }

    public void setReferenceCounted(boolean z) {
        this.zzb.setReferenceCounted(z);
        this.zzi = z;
    }

    public boolean isHeld() {
        return this.zzb.isHeld();
    }
}

