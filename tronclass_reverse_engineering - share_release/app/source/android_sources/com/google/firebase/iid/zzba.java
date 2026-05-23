package com.google.firebase.iid;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.PowerManager;
import android.util.Log;
import com.google.firebase.FirebaseApp;
import java.io.IOException;
final class zzba implements Runnable {
    private final long zza;
    private final PowerManager.WakeLock zzb;
    private final FirebaseInstanceId zzc;
    private final zzbc zzd;

    zzba(FirebaseInstanceId firebaseInstanceId, zzaq zzaqVar, zzbc zzbcVar, long j) {
        this.zzc = firebaseInstanceId;
        this.zzd = zzbcVar;
        this.zza = j;
        PowerManager.WakeLock wakeLockNewWakeLock = ((PowerManager) zza().getSystemService("power")).newWakeLock(1, "fiid-sync");
        this.zzb = wakeLockNewWakeLock;
        wakeLockNewWakeLock.setReferenceCounted(false);
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (zzaz.zza().zza(zza())) {
            this.zzb.acquire();
        }
        try {
            try {
                this.zzc.zza(true);
                if (!this.zzc.zzf()) {
                    this.zzc.zza(false);
                    if (zzaz.zza().zza(zza())) {
                        this.zzb.release();
                        return;
                    }
                    return;
                }
                if (zzaz.zza().zzb(zza()) && !zzb()) {
                    new zzbd(this).zza();
                    if (zzaz.zza().zza(zza())) {
                        this.zzb.release();
                        return;
                    }
                    return;
                }
                if (zzc() && this.zzd.zza(this.zzc)) {
                    this.zzc.zza(false);
                } else {
                    this.zzc.zza(this.zza);
                }
                if (zzaz.zza().zza(zza())) {
                    this.zzb.release();
                }
            } catch (IOException e) {
                String message = e.getMessage();
                Log.e("FirebaseInstanceId", new StringBuilder(String.valueOf(message).length() + 93).append("Topic sync or token retrieval failed on hard failure exceptions: ").append(message).append(". Won't retry the operation.").toString());
                this.zzc.zza(false);
                if (zzaz.zza().zza(zza())) {
                    this.zzb.release();
                }
            }
        } catch (Throwable th) {
            if (zzaz.zza().zza(zza())) {
                this.zzb.release();
            }
            throw th;
        }
    }

    private final boolean zzc() throws IOException {
        zzbb zzbbVarZzb = this.zzc.zzb();
        if (!this.zzc.zza(zzbbVarZzb)) {
            return true;
        }
        try {
            String strZzc = this.zzc.zzc();
            if (strZzc == null) {
                Log.e("FirebaseInstanceId", "Token retrieval failed: null");
                return false;
            }
            if (Log.isLoggable("FirebaseInstanceId", 3)) {
                Log.d("FirebaseInstanceId", "Token successfully retrieved");
            }
            if ((zzbbVarZzb == null || (zzbbVarZzb != null && !strZzc.equals(zzbbVarZzb.zza))) && FirebaseApp.DEFAULT_APP_NAME.equals(this.zzc.zza().getName())) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    String strValueOf = String.valueOf(this.zzc.zza().getName());
                    Log.d("FirebaseInstanceId", strValueOf.length() != 0 ? "Invoking onNewToken for app: ".concat(strValueOf) : new String("Invoking onNewToken for app: "));
                }
                Intent intent = new Intent("com.google.firebase.messaging.NEW_TOKEN");
                intent.putExtra("token", strZzc);
                Context contextZza = zza();
                Intent intent2 = new Intent(contextZza, (Class<?>) FirebaseInstanceIdReceiver.class);
                intent2.setAction("com.google.firebase.MESSAGING_EVENT");
                intent2.putExtra("wrapped_intent", intent);
                contextZza.sendBroadcast(intent2);
            }
            return true;
        } catch (IOException e) {
            String message = e.getMessage();
            if ("SERVICE_NOT_AVAILABLE".equals(message) || "INTERNAL_SERVER_ERROR".equals(message) || "InternalServerError".equals(message)) {
                String message2 = e.getMessage();
                Log.w("FirebaseInstanceId", new StringBuilder(String.valueOf(message2).length() + 52).append("Token retrieval failed: ").append(message2).append(". Will retry token retrieval").toString());
                return false;
            }
            if (e.getMessage() == null) {
                Log.w("FirebaseInstanceId", "Token retrieval failed without exception message. Will retry token retrieval");
                return false;
            }
            throw e;
        } catch (SecurityException unused) {
            Log.w("FirebaseInstanceId", "Token retrieval failed with SecurityException. Will retry token retrieval");
            return false;
        }
    }

    final Context zza() {
        return this.zzc.zza().getApplicationContext();
    }

    final boolean zzb() {
        ConnectivityManager connectivityManager = (ConnectivityManager) zza().getSystemService("connectivity");
        NetworkInfo activeNetworkInfo = connectivityManager != null ? connectivityManager.getActiveNetworkInfo() : null;
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }
}

