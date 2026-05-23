package com.google.android.gms.common.api.internal;

import com.google.android.gms.auth.api.signin.internal.Storage;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.Status;
final class zaba implements ResultCallback<Status> {
    private final /* synthetic */ zaaw zahh;
    private final /* synthetic */ StatusPendingResult zahj;
    private final /* synthetic */ boolean zahk;
    private final /* synthetic */ GoogleApiClient zahl;

    zaba(zaaw zaawVar, StatusPendingResult statusPendingResult, boolean z, GoogleApiClient googleApiClient) {
        this.zahh = zaawVar;
        this.zahj = statusPendingResult;
        this.zahk = z;
        this.zahl = googleApiClient;
    }

    @Override // com.google.android.gms.common.api.ResultCallback
    public final /* synthetic */ void onResult(Result result) {
        Status status = (Status) result;
        Storage.getInstance(this.zahh.mContext).zaf();
        if (status.isSuccess() && this.zahh.isConnected()) {
            this.zahh.reconnect();
        }
        this.zahj.setResult(status);
        if (this.zahk) {
            this.zahl.disconnect();
        }
    }
}

