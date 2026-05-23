package com.google.android.gms.common.api.internal;

import android.os.IBinder;
import android.os.RemoteException;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BaseImplementation;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.WeakHashMap;
public final class zacp {
    public static final Status zakx = new Status(8, "The connection to Google Play services was lost");
    private static final BasePendingResult<?>[] zaky = new BasePendingResult[0];
    private final Map<Api.AnyClientKey<?>, Api.Client> zagz;
    final Set<BasePendingResult<?>> zakz = Collections.synchronizedSet(Collections.newSetFromMap(new WeakHashMap()));
    private final zacs zala = new zacq(this);

    public zacp(Map<Api.AnyClientKey<?>, Api.Client> map) {
        this.zagz = map;
    }

    final void zab(BasePendingResult<? extends Result> basePendingResult) {
        this.zakz.add(basePendingResult);
        basePendingResult.zaa(this.zala);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    public final void release() {
        for (BasePendingResult basePendingResult : (BasePendingResult[]) this.zakz.toArray(zaky)) {
            com.google.android.gms.common.api.zac zacVar = null;
            Object[] objArr = 0;
            Object[] objArr2 = 0;
            Object[] objArr3 = 0;
            Object[] objArr4 = 0;
            com.google.android.gms.common.api.zac zacVar2 = null;
            basePendingResult.zaa((zacs) null);
            if (basePendingResult.zam() == null) {
                if (basePendingResult.zat()) {
                    this.zakz.remove(basePendingResult);
                }
            } else {
                basePendingResult.setResultCallback(null);
                IBinder serviceBrokerBinder = this.zagz.get(((BaseImplementation.ApiMethodImpl) basePendingResult).getClientKey()).getServiceBrokerBinder();
                if (basePendingResult.isReady()) {
                    basePendingResult.zaa(new zacr(basePendingResult, objArr4 == true ? 1 : 0, serviceBrokerBinder, objArr3 == true ? 1 : 0));
                } else if (serviceBrokerBinder != null && serviceBrokerBinder.isBinderAlive()) {
                    zacr zacrVar = new zacr(basePendingResult, objArr2 == true ? 1 : 0, serviceBrokerBinder, objArr == true ? 1 : 0);
                    basePendingResult.zaa(zacrVar);
                    try {
                        serviceBrokerBinder.linkToDeath(zacrVar, 0);
                    } catch (RemoteException unused) {
                        basePendingResult.cancel();
                        zacVar2.remove(basePendingResult.zam().intValue());
                        throw null;
                    }
                } else {
                    basePendingResult.zaa((zacs) null);
                    basePendingResult.cancel();
                    zacVar.remove(basePendingResult.zam().intValue());
                    throw null;
                }
                this.zakz.remove(basePendingResult);
            }
        }
    }

    public final void zabx() {
        for (BasePendingResult basePendingResult : (BasePendingResult[]) this.zakz.toArray(zaky)) {
            basePendingResult.zab(zakx);
        }
    }
}

