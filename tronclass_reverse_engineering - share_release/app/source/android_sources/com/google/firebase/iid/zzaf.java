package com.google.firebase.iid;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;
import android.util.SparseArray;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.stats.ConnectionTracker;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.Queue;
import java.util.concurrent.TimeUnit;
final class zzaf implements ServiceConnection {
    int zza;
    final Messenger zzb;
    zzak zzc;
    final Queue<zzam<?>> zzd;
    final SparseArray<zzam<?>> zze;
    final /* synthetic */ zzad zzf;

    private zzaf(zzad zzadVar) {
        this.zzf = zzadVar;
        this.zza = 0;
        this.zzb = new Messenger(new com.google.android.gms.internal.firebase_messaging.zze(Looper.getMainLooper(), new Handler.Callback(this) { // from class: com.google.firebase.iid.zzae
            private final zzaf zza;

            {
                this.zza = this;
            }

            @Override // android.os.Handler.Callback
            public final boolean handleMessage(Message message) {
                return this.zza.zza(message);
            }
        }));
        this.zzd = new ArrayDeque();
        this.zze = new SparseArray<>();
    }

    final synchronized boolean zza(zzam<?> zzamVar) {
        int i = this.zza;
        if (i != 0) {
            if (i == 1) {
                this.zzd.add(zzamVar);
                return true;
            }
            if (i == 2) {
                this.zzd.add(zzamVar);
                zza();
                return true;
            }
            if (i != 3 && i != 4) {
                throw new IllegalStateException(new StringBuilder(26).append("Unknown state: ").append(this.zza).toString());
            }
            return false;
        }
        this.zzd.add(zzamVar);
        Preconditions.checkState(this.zza == 0);
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Starting bind to GmsCore");
        }
        this.zza = 1;
        Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
        intent.setPackage("com.google.android.gms");
        if (!ConnectionTracker.getInstance().bindService(this.zzf.zzb, intent, this, 1)) {
            zza(0, "Unable to bind to service");
        } else {
            this.zzf.zzc.schedule(new Runnable(this) { // from class: com.google.firebase.iid.zzah
                private final zzaf zza;

                {
                    this.zza = this;
                }

                @Override // java.lang.Runnable
                public final void run() {
                    this.zza.zzc();
                }
            }, 30L, TimeUnit.SECONDS);
        }
        return true;
    }

    final boolean zza(Message message) {
        int i = message.arg1;
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            Log.d("MessengerIpcClient", new StringBuilder(41).append("Received response to request: ").append(i).toString());
        }
        synchronized (this) {
            zzam<?> zzamVar = this.zze.get(i);
            if (zzamVar == null) {
                Log.w("MessengerIpcClient", new StringBuilder(50).append("Received response for unknown request: ").append(i).toString());
                return true;
            }
            this.zze.remove(i);
            zzb();
            Bundle data = message.getData();
            if (data.getBoolean("unsupported", false)) {
                zzamVar.zza(new zzap(4, "Not supported by GmsCore"));
            } else {
                zzamVar.zza(data);
            }
            return true;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, final IBinder iBinder) {
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Service connected");
        }
        this.zzf.zzc.execute(new Runnable(this, iBinder) { // from class: com.google.firebase.iid.zzag
            private final zzaf zza;
            private final IBinder zzb;

            {
                this.zza = this;
                this.zzb = iBinder;
            }

            @Override // java.lang.Runnable
            public final void run() {
                zzaf zzafVar = this.zza;
                IBinder iBinder2 = this.zzb;
                synchronized (zzafVar) {
                    try {
                        if (iBinder2 == null) {
                            zzafVar.zza(0, "Null service connection");
                            return;
                        }
                        try {
                            zzafVar.zzc = new zzak(iBinder2);
                            zzafVar.zza = 2;
                            zzafVar.zza();
                        } catch (RemoteException e) {
                            zzafVar.zza(0, e.getMessage());
                        }
                    } catch (Throwable th) {
                        throw th;
                    }
                }
            }
        });
    }

    final void zza() {
        this.zzf.zzc.execute(new Runnable(this) { // from class: com.google.firebase.iid.zzaj
            private final zzaf zza;

            {
                this.zza = this;
            }

            @Override // java.lang.Runnable
            public final void run() {
                final zzam<?> zzamVarPoll;
                final zzaf zzafVar = this.zza;
                while (true) {
                    synchronized (zzafVar) {
                        if (zzafVar.zza != 2) {
                            return;
                        }
                        if (zzafVar.zzd.isEmpty()) {
                            zzafVar.zzb();
                            return;
                        } else {
                            zzamVarPoll = zzafVar.zzd.poll();
                            zzafVar.zze.put(zzamVarPoll.zza, zzamVarPoll);
                            zzafVar.zzf.zzc.schedule(new Runnable(zzafVar, zzamVarPoll) { // from class: com.google.firebase.iid.zzal
                                private final zzaf zza;
                                private final zzam zzb;

                                {
                                    this.zza = zzafVar;
                                    this.zzb = zzamVarPoll;
                                }

                                @Override // java.lang.Runnable
                                public final void run() {
                                    this.zza.zza(this.zzb.zza);
                                }
                            }, 30L, TimeUnit.SECONDS);
                        }
                    }
                    if (Log.isLoggable("MessengerIpcClient", 3)) {
                        String strValueOf = String.valueOf(zzamVarPoll);
                        Log.d("MessengerIpcClient", new StringBuilder(String.valueOf(strValueOf).length() + 8).append("Sending ").append(strValueOf).toString());
                    }
                    Context context = zzafVar.zzf.zzb;
                    Messenger messenger = zzafVar.zzb;
                    Message messageObtain = Message.obtain();
                    messageObtain.what = zzamVarPoll.zzc;
                    messageObtain.arg1 = zzamVarPoll.zza;
                    messageObtain.replyTo = messenger;
                    Bundle bundle = new Bundle();
                    bundle.putBoolean("oneWay", zzamVarPoll.zza());
                    bundle.putString("pkg", context.getPackageName());
                    bundle.putBundle("data", zzamVarPoll.zzd);
                    messageObtain.setData(bundle);
                    try {
                        zzafVar.zzc.zza(messageObtain);
                    } catch (RemoteException e) {
                        zzafVar.zza(2, e.getMessage());
                    }
                }
            }
        });
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Service disconnected");
        }
        this.zzf.zzc.execute(new Runnable(this) { // from class: com.google.firebase.iid.zzai
            private final zzaf zza;

            {
                this.zza = this;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.zza.zza(2, "Service disconnected");
            }
        });
    }

    final synchronized void zza(int i, String str) {
        if (Log.isLoggable("MessengerIpcClient", 3)) {
            String strValueOf = String.valueOf(str);
            Log.d("MessengerIpcClient", strValueOf.length() != 0 ? "Disconnected: ".concat(strValueOf) : new String("Disconnected: "));
        }
        int i2 = this.zza;
        if (i2 == 0) {
            throw new IllegalStateException();
        }
        if (i2 != 1 && i2 != 2) {
            if (i2 == 3) {
                this.zza = 4;
                return;
            } else {
                if (i2 != 4) {
                    throw new IllegalStateException(new StringBuilder(26).append("Unknown state: ").append(this.zza).toString());
                }
                return;
            }
        }
        if (Log.isLoggable("MessengerIpcClient", 2)) {
            Log.v("MessengerIpcClient", "Unbinding service");
        }
        this.zza = 4;
        ConnectionTracker.getInstance().unbindService(this.zzf.zzb, this);
        zzap zzapVar = new zzap(i, str);
        Iterator<zzam<?>> it = this.zzd.iterator();
        while (it.hasNext()) {
            it.next().zza(zzapVar);
        }
        this.zzd.clear();
        for (int i3 = 0; i3 < this.zze.size(); i3++) {
            this.zze.valueAt(i3).zza(zzapVar);
        }
        this.zze.clear();
    }

    final synchronized void zzb() {
        if (this.zza == 2 && this.zzd.isEmpty() && this.zze.size() == 0) {
            if (Log.isLoggable("MessengerIpcClient", 2)) {
                Log.v("MessengerIpcClient", "Finished handling requests, unbinding");
            }
            this.zza = 3;
            ConnectionTracker.getInstance().unbindService(this.zzf.zzb, this);
        }
    }

    final synchronized void zzc() {
        if (this.zza == 1) {
            zza(1, "Timed out while binding");
        }
    }

    final synchronized void zza(int i) {
        zzam<?> zzamVar = this.zze.get(i);
        if (zzamVar != null) {
            Log.w("MessengerIpcClient", new StringBuilder(31).append("Timing out request: ").append(i).toString());
            this.zze.remove(i);
            zzamVar.zza(new zzap(3, "Timed out waiting for response"));
            zzb();
        }
    }
}

