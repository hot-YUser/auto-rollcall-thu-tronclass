package com.google.android.gms.common.providers;

import java.util.concurrent.ScheduledExecutorService;
public class PooledExecutorsProvider {
    private static PooledExecutorFactory zzey;

    public interface PooledExecutorFactory {
        ScheduledExecutorService newSingleThreadScheduledExecutor();
    }

    public static synchronized PooledExecutorFactory getInstance() {
        if (zzey == null) {
            zzey = new zza();
        }
        return zzey;
    }

    private PooledExecutorsProvider() {
    }
}

