package com.google.android.gms.common.api.internal;

import android.content.Context;
import android.os.Bundle;
import android.os.Looper;
import androidx.collection.ArrayMap;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailabilityLight;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BaseImplementation;
import com.google.android.gms.common.internal.ClientSettings;
import com.google.android.gms.common.util.concurrent.HandlerExecutor;
import com.google.android.gms.signin.SignInOptions;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
public final class zax implements zabs {
    private final Looper zabj;
    private final GoogleApiManager zabm;
    private final Lock zaeo;
    private final ClientSettings zaet;
    private final Map<Api<?>, Boolean> zaew;
    private final zaaw zaex;
    private final GoogleApiAvailabilityLight zaey;
    private final Condition zaez;
    private final boolean zafa;
    private final boolean zafb;
    private boolean zafd;
    private Map<zai<?>, ConnectionResult> zafe;
    private Map<zai<?>, ConnectionResult> zaff;
    private zaaa zafg;
    private ConnectionResult zafh;
    private final Map<Api.AnyClientKey<?>, zaw<?>> zaeu = new HashMap();
    private final Map<Api.AnyClientKey<?>, zaw<?>> zaev = new HashMap();
    private final Queue<BaseImplementation.ApiMethodImpl<?, ?>> zafc = new LinkedList();

    public zax(Context context, Lock lock, Looper looper, GoogleApiAvailabilityLight googleApiAvailabilityLight, Map<Api.AnyClientKey<?>, Api.Client> map, ClientSettings clientSettings, Map<Api<?>, Boolean> map2, Api.AbstractClientBuilder<? extends com.google.android.gms.signin.zad, SignInOptions> abstractClientBuilder, ArrayList<zaq> arrayList, zaaw zaawVar, boolean z) {
        boolean z2;
        boolean z3;
        boolean z4;
        this.zaeo = lock;
        this.zabj = looper;
        this.zaez = lock.newCondition();
        this.zaey = googleApiAvailabilityLight;
        this.zaex = zaawVar;
        this.zaew = map2;
        this.zaet = clientSettings;
        this.zafa = z;
        HashMap map3 = new HashMap();
        for (Api<?> api : map2.keySet()) {
            map3.put(api.getClientKey(), api);
        }
        HashMap map4 = new HashMap();
        int size = arrayList.size();
        int i = 0;
        while (i < size) {
            zaq zaqVar = arrayList.get(i);
            i++;
            zaq zaqVar2 = zaqVar;
            map4.put(zaqVar2.mApi, zaqVar2);
        }
        boolean z5 = true;
        boolean z6 = false;
        boolean z7 = false;
        for (Map.Entry<Api.AnyClientKey<?>, Api.Client> entry : map.entrySet()) {
            Api api2 = (Api) map3.get(entry.getKey());
            Api.Client value = entry.getValue();
            if (value.requiresGooglePlayServices()) {
                z4 = z5;
                if (this.zaew.get(api2).booleanValue()) {
                    z3 = z7;
                    z2 = true;
                } else {
                    z2 = true;
                    z3 = true;
                }
            } else {
                z2 = z6;
                z3 = z7;
                z4 = false;
            }
            zaw<?> zawVar = new zaw<>(context, api2, looper, value, (zaq) map4.get(api2), clientSettings, abstractClientBuilder);
            this.zaeu.put(entry.getKey(), zawVar);
            if (value.requiresSignIn()) {
                this.zaev.put(entry.getKey(), zawVar);
            }
            z6 = z2;
            z5 = z4;
            z7 = z3;
        }
        this.zafb = (!z6 || z5 || z7) ? false : true;
        this.zabm = GoogleApiManager.zabc();
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void zaw() {
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final <A extends Api.AnyClient, R extends Result, T extends BaseImplementation.ApiMethodImpl<R, A>> T enqueue(T t) {
        if (this.zafa && zab(t)) {
            return t;
        }
        if (!isConnected()) {
            this.zafc.add(t);
            return t;
        }
        this.zaex.zahf.zab(t);
        return (T) this.zaeu.get(t.getClientKey()).doRead(t);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final <A extends Api.AnyClient, T extends BaseImplementation.ApiMethodImpl<? extends Result, A>> T execute(T t) {
        Api.AnyClientKey<A> clientKey = t.getClientKey();
        if (this.zafa && zab(t)) {
            return t;
        }
        this.zaex.zahf.zab(t);
        return (T) this.zaeu.get(clientKey).doWrite(t);
    }

    private final <T extends BaseImplementation.ApiMethodImpl<? extends Result, ? extends Api.AnyClient>> boolean zab(T t) {
        Api.AnyClientKey<?> clientKey = t.getClientKey();
        ConnectionResult connectionResultZaa = zaa(clientKey);
        if (connectionResultZaa == null || connectionResultZaa.getErrorCode() != 4) {
            return false;
        }
        t.setFailedResult(new Status(4, null, this.zabm.zaa(this.zaeu.get(clientKey).zak(), System.identityHashCode(this.zaex))));
        return true;
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void connect() {
        this.zaeo.lock();
        try {
            if (this.zafd) {
                return;
            }
            this.zafd = true;
            this.zafe = null;
            this.zaff = null;
            this.zafg = null;
            this.zafh = null;
            this.zabm.zao();
            this.zabm.zaa(this.zaeu.values()).addOnCompleteListener(new HandlerExecutor(this.zabj), new zaz(this));
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final ConnectionResult blockingConnect() {
        connect();
        while (isConnecting()) {
            try {
                this.zaez.await();
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                return new ConnectionResult(15, null);
            }
        }
        if (isConnected()) {
            return ConnectionResult.RESULT_SUCCESS;
        }
        ConnectionResult connectionResult = this.zafh;
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
                nanos = this.zaez.awaitNanos(nanos);
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
        ConnectionResult connectionResult = this.zafh;
        return connectionResult != null ? connectionResult : new ConnectionResult(13, null);
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void disconnect() {
        this.zaeo.lock();
        try {
            this.zafd = false;
            this.zafe = null;
            this.zaff = null;
            zaaa zaaaVar = this.zafg;
            if (zaaaVar != null) {
                zaaaVar.cancel();
                this.zafg = null;
            }
            this.zafh = null;
            while (!this.zafc.isEmpty()) {
                BaseImplementation.ApiMethodImpl<?, ?> apiMethodImplRemove = this.zafc.remove();
                apiMethodImplRemove.zaa((zacs) null);
                apiMethodImplRemove.cancel();
            }
            this.zaez.signalAll();
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final ConnectionResult getConnectionResult(Api<?> api) {
        return zaa(api.getClientKey());
    }

    private final ConnectionResult zaa(Api.AnyClientKey<?> anyClientKey) {
        this.zaeo.lock();
        try {
            zaw<?> zawVar = this.zaeu.get(anyClientKey);
            Map<zai<?>, ConnectionResult> map = this.zafe;
            if (map != null && zawVar != null) {
                return map.get(zawVar.zak());
            }
            this.zaeo.unlock();
            return null;
        } finally {
            this.zaeo.unlock();
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:8:0x000f  */
    @Override // com.google.android.gms.common.api.internal.zabs
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final boolean isConnected() {
        boolean z;
        this.zaeo.lock();
        try {
            if (this.zafe != null) {
                z = this.zafh == null;
            }
            return z;
        } finally {
            this.zaeo.unlock();
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:8:0x000f  */
    @Override // com.google.android.gms.common.api.internal.zabs
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final boolean isConnecting() {
        boolean z;
        this.zaeo.lock();
        try {
            if (this.zafe == null) {
                z = this.zafd;
            }
            return z;
        } finally {
            this.zaeo.unlock();
        }
    }

    private final boolean zaac() {
        this.zaeo.lock();
        try {
            if (this.zafd && this.zafa) {
                Iterator<Api.AnyClientKey<?>> it = this.zaev.keySet().iterator();
                while (it.hasNext()) {
                    ConnectionResult connectionResultZaa = zaa(it.next());
                    if (connectionResultZaa == null || !connectionResultZaa.isSuccess()) {
                        return false;
                    }
                }
                this.zaeo.unlock();
                return true;
            }
            return false;
        } finally {
            this.zaeo.unlock();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final boolean maybeSignIn(SignInConnectionListener signInConnectionListener) {
        this.zaeo.lock();
        try {
            if (this.zafd && !zaac()) {
                this.zabm.zao();
                this.zafg = new zaaa(this, signInConnectionListener);
                this.zabm.zaa(this.zaev.values()).addOnCompleteListener(new HandlerExecutor(this.zabj), this.zafg);
                this.zaeo.unlock();
                return true;
            }
            this.zaeo.unlock();
            return false;
        } catch (Throwable th) {
            this.zaeo.unlock();
            throw th;
        }
    }

    @Override // com.google.android.gms.common.api.internal.zabs
    public final void maybeSignOut() {
        this.zaeo.lock();
        try {
            this.zabm.maybeSignOut();
            zaaa zaaaVar = this.zafg;
            if (zaaaVar != null) {
                zaaaVar.cancel();
                this.zafg = null;
            }
            if (this.zaff == null) {
                this.zaff = new ArrayMap(this.zaev.size());
            }
            ConnectionResult connectionResult = new ConnectionResult(4);
            Iterator<zaw<?>> it = this.zaev.values().iterator();
            while (it.hasNext()) {
                this.zaff.put(it.next().zak(), connectionResult);
            }
            Map<zai<?>, ConnectionResult> map = this.zafe;
            if (map != null) {
                map.putAll(this.zaff);
            }
        } finally {
            this.zaeo.unlock();
        }
    }
    public final void zaad() {
        if (this.zaet == null) {
            this.zaex.zaha = Collections.emptySet();
            return;
        }
        HashSet hashSet = new HashSet(this.zaet.getRequiredScopes());
        Map<Api<?>, ClientSettings.OptionalApiSettings> optionalApiSettings = this.zaet.getOptionalApiSettings();
        for (Api<?> api : optionalApiSettings.keySet()) {
            ConnectionResult connectionResult = getConnectionResult(api);
            if (connectionResult != null && connectionResult.isSuccess()) {
                hashSet.addAll(optionalApiSettings.get(api).mScopes);
            }
        }
        this.zaex.zaha = hashSet;
    }
    public final void zaae() {
        while (!this.zafc.isEmpty()) {
            execute(this.zafc.remove());
        }
        this.zaex.zab((Bundle) null);
    }
    public final boolean zaa(zaw<?> zawVar, ConnectionResult connectionResult) {
        return !connectionResult.isSuccess() && !connectionResult.hasResolution() && this.zaew.get(zawVar.getApi()).booleanValue() && zawVar.zaab().requiresGooglePlayServices() && this.zaey.isUserResolvableError(connectionResult.getErrorCode());
    }
    public final ConnectionResult zaaf() {
        ConnectionResult connectionResult = null;
        int i = 0;
        int i2 = 0;
        ConnectionResult connectionResult2 = null;
        for (zaw<?> zawVar : this.zaeu.values()) {
            Api<?> api = zawVar.getApi();
            ConnectionResult connectionResult3 = this.zafe.get(zawVar.zak());
            if (!connectionResult3.isSuccess() && (!this.zaew.get(api).booleanValue() || connectionResult3.hasResolution() || this.zaey.isUserResolvableError(connectionResult3.getErrorCode()))) {
                if (connectionResult3.getErrorCode() == 4 && this.zafa) {
                    int priority = api.zah().getPriority();
                    if (connectionResult2 == null || i2 > priority) {
                        connectionResult2 = connectionResult3;
                        i2 = priority;
                    }
                } else {
                    int priority2 = api.zah().getPriority();
                    if (connectionResult == null || i > priority2) {
                        connectionResult = connectionResult3;
                        i = priority2;
                    }
                }
            }
        }
        return (connectionResult == null || connectionResult2 == null || i <= i2) ? connectionResult : connectionResult2;
    }

    static /* synthetic */ boolean zaa(zax zaxVar, boolean z) {
        zaxVar.zafd = false;
        return false;
    }
}

