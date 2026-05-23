package com.google.firebase.iid;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.util.Log;
import com.google.android.gms.common.stats.ConnectionTracker;
import com.google.android.gms.common.util.concurrent.NamedThreadFactory;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
public final class zzbj implements ServiceConnection {
    private final Context zza;
    private final Intent zzb;
    private final ScheduledExecutorService zzc;
    private final Queue<zzbi> zzd;
    private zzbe zze;
    private boolean zzf;

    public zzbj(Context context, String str) {
        this(context, str, new ScheduledThreadPoolExecutor(0, new NamedThreadFactory("Firebase-FirebaseInstanceIdServiceConnection")));
    }

    private zzbj(Context context, String str, ScheduledExecutorService scheduledExecutorService) {
        this.zzd = new ArrayDeque();
        this.zzf = false;
        Context applicationContext = context.getApplicationContext();
        this.zza = applicationContext;
        this.zzb = new Intent(str).setPackage(applicationContext.getPackageName());
        this.zzc = scheduledExecutorService;
    }

    public final synchronized Task<Void> zza(Intent intent) {
        final zzbi zzbiVar;
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            Log.d("FirebaseInstanceId", "new intent queued in the bind-strategy delivery");
        }
        zzbiVar = new zzbi(intent);
        ScheduledExecutorService scheduledExecutorService = this.zzc;
        final ScheduledFuture<?> scheduledFutureSchedule = scheduledExecutorService.schedule(new Runnable(zzbiVar) { // from class: com.google.firebase.iid.zzbl
            private final zzbi zza;

            {
                this.zza = zzbiVar;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.zza.zzc();
            }
        }, 9000L, TimeUnit.MILLISECONDS);
        zzbiVar.zza().addOnCompleteListener(scheduledExecutorService, new OnCompleteListener(scheduledFutureSchedule) { // from class: com.google.firebase.iid.zzbk
            private final ScheduledFuture zza;

            {
                this.zza = scheduledFutureSchedule;
            }

            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                this.zza.cancel(false);
            }
        });
        this.zzd.add(zzbiVar);
        zza();
        return zzbiVar.zza();
    }

    private final synchronized void zza() {
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            Log.d("FirebaseInstanceId", "flush queue called");
        }
        while (!this.zzd.isEmpty()) {
            if (Log.isLoggable("FirebaseInstanceId", 3)) {
                Log.d("FirebaseInstanceId", "found intent to be delivered");
            }
            zzbe zzbeVar = this.zze;
            if (zzbeVar != null && zzbeVar.isBinderAlive()) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    Log.d("FirebaseInstanceId", "binder is alive, sending the intent.");
                }
                this.zze.zza(this.zzd.poll());
            } else {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    Log.d("FirebaseInstanceId", new StringBuilder(39).append("binder is dead. start connection? ").append(!this.zzf).toString());
                }
                if (!this.zzf) {
                    this.zzf = true;
                    try {
                        if (ConnectionTracker.getInstance().bindService(this.zza, this.zzb, this, 65)) {
                            return;
                        } else {
                            Log.e("FirebaseInstanceId", "binding to the service failed");
                        }
                    } catch (SecurityException e) {
                        Log.e("FirebaseInstanceId", "Exception while binding the service", e);
                    }
                    this.zzf = false;
                    zzb();
                }
                return;
            }
        }
    }

    private final void zzb() {
        while (!this.zzd.isEmpty()) {
            this.zzd.poll().zzb();
        }
    }

    @Override // android.content.ServiceConnection
    public final synchronized void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            String strValueOf = String.valueOf(componentName);
            Log.d("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf).length() + 20).append("onServiceConnected: ").append(strValueOf).toString());
        }
        this.zzf = false;
        if (!(iBinder instanceof zzbe)) {
            String strValueOf2 = String.valueOf(iBinder);
            Log.e("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf2).length() + 28).append("Invalid service connection: ").append(strValueOf2).toString());
            zzb();
        } else {
            this.zze = (zzbe) iBinder;
            zza();
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            String strValueOf = String.valueOf(componentName);
            Log.d("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf).length() + 23).append("onServiceDisconnected: ").append(strValueOf).toString());
        }
        zza();
    }
}

