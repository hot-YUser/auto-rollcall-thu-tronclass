package com.google.android.gms.common.api.internal;

import android.os.Bundle;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
final class zaat implements GoogleApiClient.ConnectionCallbacks, GoogleApiClient.OnConnectionFailedListener {
    private final /* synthetic */ zaak zagj;

    private zaat(zaak zaakVar) {
        this.zagj = zaakVar;
    }

    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    public final void onConnectionSuspended(int i) {
    }

    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    public final void onConnected(Bundle bundle) {
        if (!this.zagj.zaet.isSignInClientDisconnectFixEnabled()) {
            this.zagj.zagb.zaa(new zaar(this.zagj));
            return;
        }
        this.zagj.zaeo.lock();
        try {
            if (this.zagj.zagb == null) {
                return;
            }
            this.zagj.zagb.zaa(new zaar(this.zagj));
        } finally {
            this.zagj.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
    public final void onConnectionFailed(ConnectionResult connectionResult) {
        this.zagj.zaeo.lock();
        try {
            if (!this.zagj.zad(connectionResult)) {
                this.zagj.zae(connectionResult);
            } else {
                this.zagj.zaar();
                this.zagj.zaap();
            }
        } finally {
            this.zagj.zaeo.unlock();
        }
    }

    /* synthetic */ zaat(zaak zaakVar, zaal zaalVar) {
        this(zaakVar);
    }
}

