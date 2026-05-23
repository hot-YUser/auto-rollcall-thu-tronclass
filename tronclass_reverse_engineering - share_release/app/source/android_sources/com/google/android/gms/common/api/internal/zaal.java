package com.google.android.gms.common.api.internal;
final class zaal implements Runnable {
    private final /* synthetic */ zaak zagj;

    zaal(zaak zaakVar) {
        this.zagj = zaakVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.zagj.zaey.cancelAvailabilityErrorNotifications(this.zagj.mContext);
    }
}

