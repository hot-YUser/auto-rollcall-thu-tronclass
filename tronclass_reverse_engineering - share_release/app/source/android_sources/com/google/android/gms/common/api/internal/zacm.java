package com.google.android.gms.common.api.internal;

import android.os.Looper;
import android.util.Log;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.PendingResult;
import com.google.android.gms.common.api.Releasable;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.ResultCallbacks;
import com.google.android.gms.common.api.ResultTransform;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.TransformedResult;
import com.google.android.gms.common.internal.Preconditions;
import java.lang.ref.WeakReference;
public final class zacm<R extends Result> extends TransformedResult<R> implements ResultCallback<R> {
    private final WeakReference<GoogleApiClient> zadq;
    private final zaco zakt;
    private ResultTransform<? super R, ? extends Result> zako = null;
    private zacm<? extends Result> zakp = null;
    private volatile ResultCallbacks<? super R> zakq = null;
    private PendingResult<R> zakr = null;
    private final Object zado = new Object();
    private Status zaks = null;
    private boolean zaku = false;

    public zacm(WeakReference<GoogleApiClient> weakReference) {
        Preconditions.checkNotNull(weakReference, "GoogleApiClient reference must not be null");
        this.zadq = weakReference;
        GoogleApiClient googleApiClient = weakReference.get();
        this.zakt = new zaco(this, googleApiClient != null ? googleApiClient.getLooper() : Looper.getMainLooper());
    }

    @Override // com.google.android.gms.common.api.TransformedResult
    public final <S extends Result> TransformedResult<S> then(ResultTransform<? super R, ? extends S> resultTransform) {
        zacm<? extends Result> zacmVar;
        synchronized (this.zado) {
            boolean z = true;
            Preconditions.checkState(this.zako == null, "Cannot call then() twice.");
            if (this.zakq != null) {
                z = false;
            }
            Preconditions.checkState(z, "Cannot call then() and andFinally() on the same TransformedResult.");
            this.zako = resultTransform;
            zacmVar = new zacm<>(this.zadq);
            this.zakp = zacmVar;
            zabu();
        }
        return zacmVar;
    }

    @Override // com.google.android.gms.common.api.TransformedResult
    public final void andFinally(ResultCallbacks<? super R> resultCallbacks) {
        synchronized (this.zado) {
            boolean z = true;
            Preconditions.checkState(this.zakq == null, "Cannot call andFinally() twice.");
            if (this.zako != null) {
                z = false;
            }
            Preconditions.checkState(z, "Cannot call then() and andFinally() on the same TransformedResult.");
            this.zakq = resultCallbacks;
            zabu();
        }
    }

    @Override // com.google.android.gms.common.api.ResultCallback
    public final void onResult(R r) {
        synchronized (this.zado) {
            if (r.getStatus().isSuccess()) {
                if (this.zako != null) {
                    zacc.zabb().submit(new zacn(this, r));
                } else if (zabw()) {
                    this.zakq.onSuccess(r);
                }
            } else {
                zad(r.getStatus());
                zab(r);
            }
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    public final void zaa(PendingResult<?> pendingResult) {
        synchronized (this.zado) {
            this.zakr = pendingResult;
            zabu();
        }
    }

    private final void zabu() {
        if (this.zako == null && this.zakq == null) {
            return;
        }
        GoogleApiClient googleApiClient = this.zadq.get();
        if (!this.zaku && this.zako != null && googleApiClient != null) {
            googleApiClient.zaa(this);
            this.zaku = true;
        }
        Status status = this.zaks;
        if (status != null) {
            zae(status);
            return;
        }
        PendingResult<R> pendingResult = this.zakr;
        if (pendingResult != null) {
            pendingResult.setResultCallback(this);
        }
    }
    public final void zad(Status status) {
        synchronized (this.zado) {
            this.zaks = status;
            zae(status);
        }
    }

    private final void zae(Status status) {
        synchronized (this.zado) {
            ResultTransform<? super R, ? extends Result> resultTransform = this.zako;
            if (resultTransform != null) {
                Status statusOnFailure = resultTransform.onFailure(status);
                Preconditions.checkNotNull(statusOnFailure, "onFailure must not return null");
                this.zakp.zad(statusOnFailure);
            } else if (zabw()) {
                this.zakq.onFailure(status);
            }
        }
    }

    final void zabv() {
        this.zakq = null;
    }

    private final boolean zabw() {
        return (this.zakq == null || this.zadq.get() == null) ? false : true;
    }
    public static void zab(Result result) {
        if (result instanceof Releasable) {
            try {
                ((Releasable) result).release();
            } catch (RuntimeException e) {
                String strValueOf = String.valueOf(result);
                Log.w("TransformedResultImpl", new StringBuilder(String.valueOf(strValueOf).length() + 18).append("Unable to release ").append(strValueOf).toString(), e);
            }
        }
    }
}

