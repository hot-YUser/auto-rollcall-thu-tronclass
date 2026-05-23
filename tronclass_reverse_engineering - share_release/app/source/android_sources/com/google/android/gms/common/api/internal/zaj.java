package com.google.android.gms.common.api.internal;

import android.util.Log;
import android.util.SparseArray;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.Preconditions;
import java.io.FileDescriptor;
import java.io.PrintWriter;
public class zaj extends zal {
    private final SparseArray<zaa> zacw;

    public static zaj zaa(LifecycleActivity lifecycleActivity) {
        LifecycleFragment fragment = getFragment(lifecycleActivity);
        zaj zajVar = (zaj) fragment.getCallbackOrNull("AutoManageHelper", zaj.class);
        return zajVar != null ? zajVar : new zaj(fragment);
    }

    private class zaa implements GoogleApiClient.OnConnectionFailedListener {
        public final int zacx;
        public final GoogleApiClient zacy;
        public final GoogleApiClient.OnConnectionFailedListener zacz;

        public zaa(int i, GoogleApiClient googleApiClient, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {
            this.zacx = i;
            this.zacy = googleApiClient;
            this.zacz = onConnectionFailedListener;
            googleApiClient.registerConnectionFailedListener(this);
        }

        @Override // com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
        public final void onConnectionFailed(ConnectionResult connectionResult) {
            String strValueOf = String.valueOf(connectionResult);
            Log.d("AutoManageHelper", new StringBuilder(String.valueOf(strValueOf).length() + 27).append("beginFailureResolution for ").append(strValueOf).toString());
            zaj.this.zab(connectionResult, this.zacx);
        }
    }

    private zaj(LifecycleFragment lifecycleFragment) {
        super(lifecycleFragment);
        this.zacw = new SparseArray<>();
        this.mLifecycleFragment.addCallback("AutoManageHelper", this);
    }

    public final void zaa(int i, GoogleApiClient googleApiClient, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {
        Preconditions.checkNotNull(googleApiClient, "GoogleApiClient instance cannot be null");
        Preconditions.checkState(this.zacw.indexOfKey(i) < 0, new StringBuilder(54).append("Already managing a GoogleApiClient with id ").append(i).toString());
        zam zamVar = this.zadf.get();
        boolean z = this.mStarted;
        String strValueOf = String.valueOf(zamVar);
        Log.d("AutoManageHelper", new StringBuilder(String.valueOf(strValueOf).length() + 49).append("starting AutoManage for client ").append(i).append(" ").append(z).append(" ").append(strValueOf).toString());
        this.zacw.put(i, new zaa(i, googleApiClient, onConnectionFailedListener));
        if (this.mStarted && zamVar == null) {
            String strValueOf2 = String.valueOf(googleApiClient);
            Log.d("AutoManageHelper", new StringBuilder(String.valueOf(strValueOf2).length() + 11).append("connecting ").append(strValueOf2).toString());
            googleApiClient.connect();
        }
    }

    public final void zaa(int i) {
        zaa zaaVar = this.zacw.get(i);
        this.zacw.remove(i);
        if (zaaVar != null) {
            zaaVar.zacy.unregisterConnectionFailedListener(zaaVar);
            zaaVar.zacy.disconnect();
        }
    }

    @Override // com.google.android.gms.common.api.internal.zal, com.google.android.gms.common.api.internal.LifecycleCallback
    public void onStart() {
        super.onStart();
        boolean z = this.mStarted;
        String strValueOf = String.valueOf(this.zacw);
        Log.d("AutoManageHelper", new StringBuilder(String.valueOf(strValueOf).length() + 14).append("onStart ").append(z).append(" ").append(strValueOf).toString());
        if (this.zadf.get() == null) {
            for (int i = 0; i < this.zacw.size(); i++) {
                zaa zaaVarZab = zab(i);
                if (zaaVarZab != null) {
                    zaaVarZab.zacy.connect();
                }
            }
        }
    }

    @Override // com.google.android.gms.common.api.internal.zal, com.google.android.gms.common.api.internal.LifecycleCallback
    public void onStop() {
        super.onStop();
        for (int i = 0; i < this.zacw.size(); i++) {
            zaa zaaVarZab = zab(i);
            if (zaaVarZab != null) {
                zaaVarZab.zacy.disconnect();
            }
        }
    }

    @Override // com.google.android.gms.common.api.internal.LifecycleCallback
    public void dump(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        for (int i = 0; i < this.zacw.size(); i++) {
            zaa zaaVarZab = zab(i);
            if (zaaVarZab != null) {
                printWriter.append((CharSequence) str).append("GoogleApiClient #").print(zaaVarZab.zacx);
                printWriter.println(":");
                zaaVarZab.zacy.dump(String.valueOf(str).concat("  "), fileDescriptor, printWriter, strArr);
            }
        }
    }

    @Override // com.google.android.gms.common.api.internal.zal
    protected final void zaa(ConnectionResult connectionResult, int i) {
        Log.w("AutoManageHelper", "Unresolved error while connecting client. Stopping auto-manage.");
        if (i < 0) {
            Log.wtf("AutoManageHelper", "AutoManageLifecycleHelper received onErrorResolutionFailed callback but no failing client ID is set", new Exception());
            return;
        }
        zaa zaaVar = this.zacw.get(i);
        if (zaaVar != null) {
            zaa(i);
            GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener = zaaVar.zacz;
            if (onConnectionFailedListener != null) {
                onConnectionFailedListener.onConnectionFailed(connectionResult);
            }
        }
    }

    @Override // com.google.android.gms.common.api.internal.zal
    protected final void zao() {
        for (int i = 0; i < this.zacw.size(); i++) {
            zaa zaaVarZab = zab(i);
            if (zaaVarZab != null) {
                zaaVarZab.zacy.connect();
            }
        }
    }

    private final zaa zab(int i) {
        if (this.zacw.size() <= i) {
            return null;
        }
        SparseArray<zaa> sparseArray = this.zacw;
        return sparseArray.get(sparseArray.keyAt(i));
    }
}

