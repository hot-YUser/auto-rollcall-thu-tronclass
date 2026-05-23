package com.google.firebase.iid;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Parcelable;
import androidx.legacy.content.WakefulBroadcastReceiver;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutorService;
import org.opencv.videoio.Videoio;
public final class FirebaseInstanceIdReceiver extends WakefulBroadcastReceiver {
    private final ExecutorService zza = zzh.zzb();

    @Override // android.content.BroadcastReceiver
    public final void onReceive(Context context, Intent intent) {
        zzb zzaVar;
        if (intent == null) {
            return;
        }
        Parcelable parcelableExtra = intent.getParcelableExtra("wrapped_intent");
        Intent intent2 = parcelableExtra instanceof Intent ? (Intent) parcelableExtra : null;
        if (intent2 != null) {
            intent = intent2;
        }
        intent.setComponent(null);
        intent.setPackage(context.getPackageName());
        if ("google.com/iid".equals(intent.getStringExtra("from"))) {
            zzaVar = new zzy(this.zza);
        } else {
            zzaVar = new zza(context, this.zza);
        }
        final boolean zIsOrderedBroadcast = isOrderedBroadcast();
        final BroadcastReceiver.PendingResult pendingResultGoAsync = goAsync();
        zzaVar.zza(intent).addOnCompleteListener(this.zza, new OnCompleteListener(zIsOrderedBroadcast, pendingResultGoAsync) { // from class: com.google.firebase.iid.zzt
            private final boolean zza;
            private final BroadcastReceiver.PendingResult zzb;

            {
                this.zza = zIsOrderedBroadcast;
                this.zzb = pendingResultGoAsync;
            }

            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                FirebaseInstanceIdReceiver.zza(this.zza, this.zzb, task);
            }
        });
    }

    static final /* synthetic */ void zza(boolean z, BroadcastReceiver.PendingResult pendingResult, Task task) {
        if (z) {
            pendingResult.setResultCode(task.isSuccessful() ? ((Integer) task.getResult()).intValue() : Videoio.CAP_QT);
        }
        pendingResult.finish();
    }
}

