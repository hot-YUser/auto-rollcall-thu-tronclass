package com.google.android.gms.common.api.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.Looper;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailabilityLight;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.internal.BaseImplementation;
import com.google.android.gms.common.internal.ClientSettings;
import com.google.android.gms.signin.SignInOptions;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
public final class zabe implements zabs, zar {
    private final Context mContext;
    private final Api.AbstractClientBuilder<? extends com.google.android.gms.signin.zad, SignInOptions> zace;
    final zaaw zaee;
    private final Lock zaeo;
    private final ClientSettings zaet;
    private final Map<Api<?>, Boolean> zaew;
    private final GoogleApiAvailabilityLight zaey;
    final Map<Api.AnyClientKey<?>, Api.Client> zagz;
    private final Condition zahn;
    private final zabg zaho;
    private volatile zabd zahq;
    int zahs;
    final zabt zaht;
    final Map<Api.AnyClientKey<?>, ConnectionResult> zahp = new HashMap();
    private ConnectionResult zahr = null;

    public zabe(Context context, zaaw zaawVar, Lock lock, Looper looper, GoogleApiAvailabilityLight googleApiAvailabilityLight, Map<Api.AnyClientKey<?>, Api.Client> map, ClientSettings clientSettings, Map<Api<?>, Boolean> map2, Api.AbstractClientBuilder<? extends com.google.android.gms.signin.zad, SignInOptions> abstractClientBuilder, ArrayList<zaq> arrayList, zabt zabtVar) {
        this.mContext = context;
        this.zaeo = lock;
        this.zaey = googleApiAvailabilityLight;
        this.zagz = map;
        this.zaet = clientSettings;
        this.zaew = map2;
        this.zace = abstractClientBuilder;
        this.zaee = zaawVar;
        this.zaht = zabtVar;
        int size = arrayList.size();
        int i = 0;
        while (i < size) {
            zaq zaqVar = arrayList.get(i);
            i++;
            zaqVar.zaa(this);
        }
        this.zaho = new zabg(this, looper);
        this.zahn = lock.newCondition();
        this.zahq = new zaav(this);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final boolean maybeSignIn(SignInConnectionListener signInConnectionListener) {
        return false;
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void maybeSignOut() {
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final <A extends Api.AnyClient, R extends Result, T extends BaseImplementation.ApiMethodImpl<R, A>> T enqueue(T t) {
        t.zau();
        return (T) this.zahq.enqueue(t);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final <A extends Api.AnyClient, T extends BaseImplementation.ApiMethodImpl<? extends Result, A>> T execute(T t) {
        t.zau();
        return (T) this.zahq.execute(t);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void connect() {
        this.zahq.connect();
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final ConnectionResult blockingConnect() {
        connect();
        while (isConnecting()) {
            try {
                this.zahn.await();
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                return new ConnectionResult(15, null);
            }
        }
        if (isConnected()) {
            return ConnectionResult.RESULT_SUCCESS;
        }
        ConnectionResult connectionResult = this.zahr;
        return connectionResult != null ? connectionResult : new ConnectionResult(13, null);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final ConnectionResult blockingConnect(long j, TimeUnit timeUnit) {
        connect();
        long nanos = timeUnit.toNanos(j);
        while (isConnecting()) {
            if (nanos <= 0) {
                disconnect();
                return new ConnectionResult(14, null);
            }
            try {
                nanos = this.zahn.awaitNanos(nanos);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                return new ConnectionResult(15, null);
            }
            Thread.currentThread().interrupt();
            return new ConnectionResult(15, null);
        }
        if (isConnected()) {
            return ConnectionResult.RESULT_SUCCESS;
        }
        ConnectionResult connectionResult = this.zahr;
        return connectionResult != null ? connectionResult : new ConnectionResult(13, null);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void disconnect() {
        if (this.zahq.disconnect()) {
            this.zahp.clear();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final ConnectionResult getConnectionResult(Api<?> api) {
        Api.AnyClientKey<?> clientKey = api.getClientKey();
        if (!this.zagz.containsKey(clientKey)) {
            return null;
        }
        if (this.zagz.get(clientKey).isConnected()) {
            return ConnectionResult.RESULT_SUCCESS;
        }
        if (this.zahp.containsKey(clientKey)) {
            return this.zahp.get(clientKey);
        }
        return null;
    }

    final void zaaz() {
        this.zaeo.lock();
        try {
            this.zahq = new zaak(this, this.zaet, this.zaew, this.zaey, this.zace, this.zaeo, this.mContext);
            this.zahq.begin();
            this.zahn.signalAll();
        } finally {
            this.zaeo.unlock();
        }
    }

    final void zaba() {
        this.zaeo.lock();
        try {
            this.zaee.zaaw();
            this.zahq = new zaah(this);
            this.zahq.begin();
            this.zahn.signalAll();
        } finally {
            this.zaeo.unlock();
        }
    }

    final void zaf(ConnectionResult connectionResult) {
        this.zaeo.lock();
        try {
            this.zahr = connectionResult;
            this.zahq = new zaav(this);
            this.zahq.begin();
            this.zahn.signalAll();
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final boolean isConnected() {
        return this.zahq instanceof zaah;
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final boolean isConnecting() {
        return this.zahq instanceof zaak;
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void zaw() {
        if (isConnected()) {
            ((zaah) this.zahq).zaam();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zar
    public final void zaa(ConnectionResult connectionResult, Api<?> api, boolean z) {
        this.zaeo.lock();
        try {
            this.zahq.zaa(connectionResult, api, z);
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    public final void onConnected(Bundle bundle) {
        this.zaeo.lock();
        try {
            this.zahq.onConnected(bundle);
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
    public final void onConnectionSuspended(int i) {
        this.zaeo.lock();
        try {
            this.zahq.onConnectionSuspended(i);
        } finally {
            this.zaeo.unlock();
        }
    }

    final void zaa(zabf zabfVar) {
        this.zaho.sendMessage(this.zaho.obtainMessage(1, zabfVar));
    }

    final void zab(RuntimeException runtimeException) {
        this.zaho.sendMessage(this.zaho.obtainMessage(2, runtimeException));
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        String strConcat = String.valueOf(str).concat("  ");
        printWriter.append((CharSequence) str).append("mState=").println(this.zahq);
        for (Api<?> api : this.zaew.keySet()) {
            printWriter.append((CharSequence) str).append((CharSequence) api.getName()).println(":");
            this.zagz.get(api.getClientKey()).dump(strConcat, fileDescriptor, printWriter, strArr);
        }
    }
}

