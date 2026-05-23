package com.google.firebase.iid;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Looper;
import android.os.Message;
import android.os.Messenger;
import android.os.Parcelable;
import android.os.RemoteException;
import android.util.Log;
import androidx.collection.SimpleArrayMap;
import androidx.work.WorkRequest;
import com.google.android.gms.tasks.TaskCompletionSource;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.iid.zzi;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
final class zzax {
    private static int zza;
    private static PendingIntent zzb;
    private final Context zzd;
    private final zzaq zze;
    private Messenger zzg;
    private zzi zzh;
    private final SimpleArrayMap<String, TaskCompletionSource<Bundle>> zzc = new SimpleArrayMap<>();
    private Messenger zzf = new Messenger(new zzaw(this, Looper.getMainLooper()));

    public zzax(Context context, zzaq zzaqVar) {
        this.zzd = context;
        this.zze = zzaqVar;
    }
    public final void zza(Message message) {
        if (message != null && (message.obj instanceof Intent)) {
            Intent intent = (Intent) message.obj;
            intent.setExtrasClassLoader(new zzi.zza());
            if (intent.hasExtra("google.messenger")) {
                Parcelable parcelableExtra = intent.getParcelableExtra("google.messenger");
                if (parcelableExtra instanceof zzi) {
                    this.zzh = (zzi) parcelableExtra;
                }
                if (parcelableExtra instanceof Messenger) {
                    this.zzg = (Messenger) parcelableExtra;
                }
            }
            Intent intent2 = (Intent) message.obj;
            String action = intent2.getAction();
            if (!"com.google.android.c2dm.intent.REGISTRATION".equals(action)) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    String strValueOf = String.valueOf(action);
                    Log.d("FirebaseInstanceId", strValueOf.length() != 0 ? "Unexpected response action: ".concat(strValueOf) : new String("Unexpected response action: "));
                    return;
                }
                return;
            }
            String stringExtra = intent2.getStringExtra("registration_id");
            if (stringExtra == null) {
                stringExtra = intent2.getStringExtra("unregistered");
            }
            if (stringExtra == null) {
                String stringExtra2 = intent2.getStringExtra("error");
                if (stringExtra2 == null) {
                    String strValueOf2 = String.valueOf(intent2.getExtras());
                    Log.w("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf2).length() + 49).append("Unexpected response, no error or registration id ").append(strValueOf2).toString());
                    return;
                }
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    String strValueOf3 = String.valueOf(stringExtra2);
                    Log.d("FirebaseInstanceId", strValueOf3.length() != 0 ? "Received InstanceID error ".concat(strValueOf3) : new String("Received InstanceID error "));
                }
                if (stringExtra2.startsWith("|")) {
                    String[] strArrSplit = stringExtra2.split("\\|");
                    if (strArrSplit.length <= 2 || !"ID".equals(strArrSplit[1])) {
                        String strValueOf4 = String.valueOf(stringExtra2);
                        Log.w("FirebaseInstanceId", strValueOf4.length() != 0 ? "Unexpected structured response ".concat(strValueOf4) : new String("Unexpected structured response "));
                        return;
                    }
                    String str = strArrSplit[2];
                    String strSubstring = strArrSplit[3];
                    if (strSubstring.startsWith(":")) {
                        strSubstring = strSubstring.substring(1);
                    }
                    zza(str, intent2.putExtra("error", strSubstring).getExtras());
                    return;
                }
                synchronized (this.zzc) {
                    for (int i = 0; i < this.zzc.size(); i++) {
                        zza(this.zzc.keyAt(i), intent2.getExtras());
                    }
                }
                return;
            }
            Matcher matcher = Pattern.compile("\\|ID\\|([^|]+)\\|:?+(.*)").matcher(stringExtra);
            if (!matcher.matches()) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    String strValueOf5 = String.valueOf(stringExtra);
                    Log.d("FirebaseInstanceId", strValueOf5.length() != 0 ? "Unexpected response string: ".concat(strValueOf5) : new String("Unexpected response string: "));
                    return;
                }
                return;
            }
            String strGroup = matcher.group(1);
            String strGroup2 = matcher.group(2);
            Bundle extras = intent2.getExtras();
            extras.putString("registration_id", strGroup2);
            zza(strGroup, extras);
            return;
        }
        Log.w("FirebaseInstanceId", "Dropping invalid message");
    }

    private static synchronized void zza(Context context, Intent intent) {
        if (zzb == null) {
            Intent intent2 = new Intent();
            intent2.setPackage("com.google.example.invalidpackage");
            zzb = PendingIntent.getBroadcast(context, 0, intent2, 0);
        }
        intent.putExtra("app", zzb);
    }

    private final void zza(String str, Bundle bundle) {
        synchronized (this.zzc) {
            TaskCompletionSource<Bundle> taskCompletionSourceRemove = this.zzc.remove(str);
            if (taskCompletionSourceRemove == null) {
                String strValueOf = String.valueOf(str);
                Log.w("FirebaseInstanceId", strValueOf.length() != 0 ? "Missing callback for ".concat(strValueOf) : new String("Missing callback for "));
            } else {
                taskCompletionSourceRemove.setResult(bundle);
            }
        }
    }

    final Bundle zza(Bundle bundle) throws IOException {
        if (this.zze.zzd() >= 12000000) {
            try {
                return (Bundle) Tasks.await(zzad.zza(this.zzd).zzb(1, bundle));
            } catch (InterruptedException | ExecutionException e) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    String strValueOf = String.valueOf(e);
                    Log.d("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf).length() + 22).append("Error making request: ").append(strValueOf).toString());
                }
                if ((e.getCause() instanceof zzap) && ((zzap) e.getCause()).zza() == 4) {
                    return zzb(bundle);
                }
                return null;
            }
        }
        return zzb(bundle);
    }

    private final Bundle zzb(Bundle bundle) throws IOException {
        Bundle bundleZzc = zzc(bundle);
        if (bundleZzc == null || !bundleZzc.containsKey("google.messenger")) {
            return bundleZzc;
        }
        Bundle bundleZzc2 = zzc(bundle);
        if (bundleZzc2 == null || !bundleZzc2.containsKey("google.messenger")) {
            return bundleZzc2;
        }
        return null;
    }

    private static synchronized String zza() {
        int i;
        i = zza;
        zza = i + 1;
        return Integer.toString(i);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:30:0x00d5  */
    /* high-level source view WARN: Removed duplicated region for block: B:31:0x00db  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private final Bundle zzc(Bundle bundle) throws IOException {
        String strZza = zza();
        TaskCompletionSource<Bundle> taskCompletionSource = new TaskCompletionSource<>();
        synchronized (this.zzc) {
            this.zzc.put(strZza, taskCompletionSource);
        }
        if (this.zze.zza() == 0) {
            throw new IOException("MISSING_INSTANCEID_SERVICE");
        }
        Intent intent = new Intent();
        intent.setPackage("com.google.android.gms");
        if (this.zze.zza() == 2) {
            intent.setAction("com.google.iid.TOKEN_REQUEST");
        } else {
            intent.setAction("com.google.android.c2dm.intent.REGISTER");
        }
        intent.putExtras(bundle);
        zza(this.zzd, intent);
        intent.putExtra("kid", new StringBuilder(String.valueOf(strZza).length() + 5).append("|ID|").append(strZza).append("|").toString());
        if (Log.isLoggable("FirebaseInstanceId", 3)) {
            String strValueOf = String.valueOf(intent.getExtras());
            Log.d("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf).length() + 8).append("Sending ").append(strValueOf).toString());
        }
        intent.putExtra("google.messenger", this.zzf);
        if (this.zzg != null || this.zzh != null) {
            Message messageObtain = Message.obtain();
            messageObtain.obj = intent;
            try {
                Messenger messenger = this.zzg;
                if (messenger != null) {
                    messenger.send(messageObtain);
                } else {
                    this.zzh.zza(messageObtain);
                }
            } catch (RemoteException unused) {
                if (Log.isLoggable("FirebaseInstanceId", 3)) {
                    Log.d("FirebaseInstanceId", "Messenger failed, fallback to startService");
                }
                if (this.zze.zza() != 2) {
                }
            }
        } else if (this.zze.zza() != 2) {
            this.zzd.sendBroadcast(intent);
        } else {
            this.zzd.startService(intent);
        }
        try {
            try {
                Bundle bundle2 = (Bundle) Tasks.await(taskCompletionSource.getTask(), WorkRequest.DEFAULT_BACKOFF_DELAY_MILLIS, TimeUnit.MILLISECONDS);
                synchronized (this.zzc) {
                    this.zzc.remove(strZza);
                }
                return bundle2;
            } catch (InterruptedException | TimeoutException unused2) {
                Log.w("FirebaseInstanceId", "No response");
                throw new IOException("TIMEOUT");
            } catch (ExecutionException e) {
                throw new IOException(e);
            }
        } catch (Throwable th) {
            synchronized (this.zzc) {
                this.zzc.remove(strZza);
                throw th;
            }
        }
    }
}

