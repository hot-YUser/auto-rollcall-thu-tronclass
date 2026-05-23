package com.google.android.gms.common.internal;

import android.content.ComponentName;
import android.content.Context;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import androidx.work.PeriodicWorkRequest;
import com.google.android.gms.common.internal.GmsClientSupervisor;
import com.google.android.gms.common.stats.ConnectionTracker;
import java.util.HashMap;
final class zze extends GmsClientSupervisor implements Handler.Callback {
    private final Handler mHandler;
    private final Context zzdv;
    private final HashMap<GmsClientSupervisor.zza, zzf> zzdu = new HashMap<>();
    private final ConnectionTracker zzdw = ConnectionTracker.getInstance();
    private final long zzdx = 5000;
    private final long zzdy = PeriodicWorkRequest.MIN_PERIODIC_FLEX_MILLIS;

    zze(Context context) {
        this.zzdv = context.getApplicationContext();
        this.mHandler = new com.google.android.gms.internal.common.zze(context.getMainLooper(), this);
    }

    @Override // com.google.android.gms.common.internal.GmsClientSupervisor
    protected final boolean zza(GmsClientSupervisor.zza zzaVar, ServiceConnection serviceConnection, String str) {
        boolean zIsBound;
        Preconditions.checkNotNull(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.zzdu) {
            zzf zzfVar = this.zzdu.get(zzaVar);
            if (zzfVar == null) {
                zzfVar = new zzf(this, zzaVar);
                zzfVar.zza(serviceConnection, str);
                zzfVar.zze(str);
                this.zzdu.put(zzaVar, zzfVar);
            } else {
                this.mHandler.removeMessages(0, zzaVar);
                if (zzfVar.zza(serviceConnection)) {
                    String strValueOf = String.valueOf(zzaVar);
                    throw new IllegalStateException(new StringBuilder(String.valueOf(strValueOf).length() + 81).append("Trying to bind a GmsServiceConnection that was already connected before.  config=").append(strValueOf).toString());
                }
                zzfVar.zza(serviceConnection, str);
                int state = zzfVar.getState();
                if (state == 1) {
                    serviceConnection.onServiceConnected(zzfVar.getComponentName(), zzfVar.getBinder());
                } else if (state == 2) {
                    zzfVar.zze(str);
                }
            }
            zIsBound = zzfVar.isBound();
        }
        return zIsBound;
    }

    @Override // com.google.android.gms.common.internal.GmsClientSupervisor
    protected final void zzb(GmsClientSupervisor.zza zzaVar, ServiceConnection serviceConnection, String str) {
        Preconditions.checkNotNull(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.zzdu) {
            zzf zzfVar = this.zzdu.get(zzaVar);
            if (zzfVar == null) {
                String strValueOf = String.valueOf(zzaVar);
                throw new IllegalStateException(new StringBuilder(String.valueOf(strValueOf).length() + 50).append("Nonexistent connection status for service config: ").append(strValueOf).toString());
            }
            if (!zzfVar.zza(serviceConnection)) {
                String strValueOf2 = String.valueOf(zzaVar);
                throw new IllegalStateException(new StringBuilder(String.valueOf(strValueOf2).length() + 76).append("Trying to unbind a GmsServiceConnection  that was not bound before.  config=").append(strValueOf2).toString());
            }
            zzfVar.zzb(serviceConnection, str);
            if (zzfVar.zzr()) {
                this.mHandler.sendMessageDelayed(this.mHandler.obtainMessage(0, zzaVar), this.zzdx);
            }
        }
    }

    @Override // android.os.Handler.Callback
    public final boolean handleMessage(Message message) {
        int i = message.what;
        if (i == 0) {
            synchronized (this.zzdu) {
                GmsClientSupervisor.zza zzaVar = (GmsClientSupervisor.zza) message.obj;
                zzf zzfVar = this.zzdu.get(zzaVar);
                if (zzfVar != null && zzfVar.zzr()) {
                    if (zzfVar.isBound()) {
                        zzfVar.zzf("GmsClientSupervisor");
                    }
                    this.zzdu.remove(zzaVar);
                }
            }
            return true;
        }
        if (i != 1) {
            return false;
        }
        synchronized (this.zzdu) {
            GmsClientSupervisor.zza zzaVar2 = (GmsClientSupervisor.zza) message.obj;
            zzf zzfVar2 = this.zzdu.get(zzaVar2);
            if (zzfVar2 != null && zzfVar2.getState() == 3) {
                String strValueOf = String.valueOf(zzaVar2);
                Log.e("GmsClientSupervisor", new StringBuilder(String.valueOf(strValueOf).length() + 47).append("Timeout waiting for ServiceConnection callback ").append(strValueOf).toString(), new Exception());
                ComponentName componentName = zzfVar2.getComponentName();
                if (componentName == null) {
                    componentName = zzaVar2.getComponentName();
                }
                if (componentName == null) {
                    componentName = new ComponentName(zzaVar2.getPackage(), "unknown");
                }
                zzfVar2.onServiceDisconnected(componentName);
            }
        }
        return true;
    }
}

