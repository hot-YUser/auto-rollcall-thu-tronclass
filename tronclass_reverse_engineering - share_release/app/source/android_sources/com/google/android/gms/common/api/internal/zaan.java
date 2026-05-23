package com.google.android.gms.common.api.internal;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.internal.GoogleApiAvailabilityCache;
import java.util.ArrayList;
import java.util.Map;
final class zaan extends zaau {
    final /* synthetic */ zaak zagj;
    private final Map<Api.Client, zaam> zagl;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public zaan(zaak zaakVar, Map<Api.Client, zaam> map) {
        super(zaakVar, null);
        this.zagj = zaakVar;
        this.zagl = map;
    }

    @Override // com.google.android.gms.common.api.internal.zaau
    public final void zaan() {
        GoogleApiAvailabilityCache googleApiAvailabilityCache = new GoogleApiAvailabilityCache(this.zagj.zaey);
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (Api.Client client : this.zagl.keySet()) {
            if (client.requiresGooglePlayServices() && !this.zagl.get(client).zaec) {
                arrayList.add(client);
            } else {
                arrayList2.add(client);
            }
        }
        int i = 0;
        int clientAvailability = -1;
        if (!arrayList.isEmpty()) {
            int size = arrayList.size();
            while (i < size) {
                Object obj = arrayList.get(i);
                i++;
                clientAvailability = googleApiAvailabilityCache.getClientAvailability(this.zagj.mContext, (Api.Client) obj);
                if (clientAvailability != 0) {
                    break;
                }
            }
        } else {
            int size2 = arrayList2.size();
            while (i < size2) {
                Object obj2 = arrayList2.get(i);
                i++;
                clientAvailability = googleApiAvailabilityCache.getClientAvailability(this.zagj.mContext, (Api.Client) obj2);
                if (clientAvailability == 0) {
                    break;
                }
            }
        }
        if (clientAvailability != 0) {
            this.zagj.zaft.zaa(new zaao(this, this.zagj, new ConnectionResult(clientAvailability, null)));
            return;
        }
        if (this.zagj.zagd && this.zagj.zagb != null) {
            this.zagj.zagb.connect();
        }
        for (Api.Client client2 : this.zagl.keySet()) {
            zaam zaamVar = this.zagl.get(client2);
            if (!client2.requiresGooglePlayServices() || googleApiAvailabilityCache.getClientAvailability(this.zagj.mContext, client2) == 0) {
                client2.connect(zaamVar);
            } else {
                this.zagj.zaft.zaa(new zaap(this, this.zagj, zaamVar));
            }
        }
    }
}

