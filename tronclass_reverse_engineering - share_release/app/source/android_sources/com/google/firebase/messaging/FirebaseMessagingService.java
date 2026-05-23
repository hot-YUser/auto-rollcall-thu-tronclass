package com.google.firebase.messaging;

import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.datatransport.Encoding;
import com.google.android.datatransport.Transport;
import com.google.android.datatransport.TransportFactory;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.iid.zzad;
import com.google.firebase.iid.zzaz;
import com.onesignal.OneSignalDbContract;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
public class FirebaseMessagingService extends zzc {
    private static final Queue<String> zza = new ArrayDeque(10);

    public void onDeletedMessages() {
    }

    public void onMessageReceived(RemoteMessage remoteMessage) {
    }

    public void onMessageSent(String str) {
    }

    public void onNewToken(String str) {
    }

    public void onSendError(String str, Exception exc) {
    }

    @Override // com.google.firebase.messaging.zzc
    protected final Intent zza(Intent intent) {
        return zzaz.zza().zzb();
    }

    @Override // com.google.firebase.messaging.zzc
    public final boolean zzb(Intent intent) {
        if (!"com.google.firebase.messaging.NOTIFICATION_OPEN".equals(intent.getAction())) {
            return false;
        }
        PendingIntent pendingIntent = (PendingIntent) intent.getParcelableExtra("pending_intent");
        if (pendingIntent != null) {
            try {
                pendingIntent.send();
            } catch (PendingIntent.CanceledException unused) {
                Log.e("FirebaseMessaging", "Notification pending intent canceled");
            }
        }
        if (!zzo.zzd(intent)) {
            return true;
        }
        zzo.zza(intent);
        return true;
    }

    /* high-level source view WARN: Failed to restore switch over string. Please report as a decompilation issue
    java.lang.NullPointerException: Cannot invoke "java.util.List.iterator()" because the return value of "high-level source view.core.dex.visitors.regions.SwitchOverStringVisitor$SwitchData.getNewCases()" is null
    	at high-level source view.core.dex.visitors.regions.SwitchOverStringVisitor.restoreSwitchOverString(SwitchOverStringVisitor.java:116)
    	at high-level source view.core.dex.visitors.regions.SwitchOverStringVisitor.visitRegion(SwitchOverStringVisitor.java:71)
    	at high-level source view.core.dex.visitors.regions.DepthRegionTraversal.traverseIterativeStepInternal(DepthRegionTraversal.java:77)
    	at high-level source view.core.dex.visitors.regions.DepthRegionTraversal.traverseIterativeStepInternal(DepthRegionTraversal.java:82)
     */
    /* high-level source view WARN: Removed duplicated region for block: B:100:0x01b2  */
    /* high-level source view WARN: Removed duplicated region for block: B:45:0x00c5  */
    /* high-level source view WARN: Removed duplicated region for block: B:48:0x00d1  */
    /* high-level source view WARN: Removed duplicated region for block: B:49:0x00d3  */
    /* high-level source view WARN: Removed duplicated region for block: B:53:0x00de  */
    /* high-level source view WARN: Removed duplicated region for block: B:56:0x00e7  */
    /* high-level source view WARN: Removed duplicated region for block: B:60:0x00f0  */
    /* high-level source view WARN: Removed duplicated region for block: B:65:0x00fd  */
    /* high-level source view WARN: Removed duplicated region for block: B:70:0x0118  */
    /* high-level source view WARN: Removed duplicated region for block: B:71:0x0121  */
    /* high-level source view WARN: Removed duplicated region for block: B:75:0x013d  */
    @Override // com.google.firebase.messaging.zzc
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final void zzc(Intent intent) {
        Task<Void> taskZza;
        String stringExtra;
        String action = intent.getAction();
        if ("com.google.android.c2dm.intent.RECEIVE".equals(action) || "com.google.firebase.messaging.RECEIVE_DIRECT_BOOT".equals(action)) {
            String stringExtra2 = intent.getStringExtra("google.message_id");
            if (TextUtils.isEmpty(stringExtra2)) {
                taskZza = Tasks.forResult(null);
            } else {
                Bundle bundle = new Bundle();
                bundle.putString("google.message_id", stringExtra2);
                taskZza = zzad.zza(this).zza(2, bundle);
            }
            if (!TextUtils.isEmpty(stringExtra2)) {
                Queue<String> queue = zza;
                if (queue.contains(stringExtra2)) {
                    if (Log.isLoggable("FirebaseMessaging", 3)) {
                        String strValueOf = String.valueOf(stringExtra2);
                        Log.d("FirebaseMessaging", strValueOf.length() != 0 ? "Received duplicate message: ".concat(strValueOf) : new String("Received duplicate message: "));
                    }
                } else {
                    if (queue.size() >= 10) {
                        queue.remove();
                    }
                    queue.add(stringExtra2);
                    stringExtra = intent.getStringExtra("message_type");
                    if (stringExtra == null) {
                    }
                    stringExtra.hashCode();
                    switch (stringExtra) {
                        case -2062414158:
                            break;
                        case 102161:
                            break;
                        case 814694033:
                            break;
                        case 814800675:
                            break;
                    }
                }
            } else {
                stringExtra = intent.getStringExtra("message_type");
                if (stringExtra == null) {
                    stringExtra = "gcm";
                }
                stringExtra.hashCode();
                switch (stringExtra) {
                    case "deleted_messages":
                        onDeletedMessages();
                        break;
                    case "gcm":
                        if (zzo.zzd(intent)) {
                            zzo.zza(intent, (Transport<String>) null);
                        }
                        if (zzo.zze(intent)) {
                            TransportFactory transportFactory = FirebaseMessaging.zza;
                            if (transportFactory != null) {
                                zzo.zza(intent, (Transport<String>) transportFactory.getTransport("FCM_CLIENT_EVENT_LOGGING", String.class, Encoding.of("json"), zzk.zza));
                            } else {
                                Log.e("FirebaseMessaging", "TransportFactory is null. Skip exporting message delivery metrics to Big Query");
                            }
                        }
                        Bundle extras = intent.getExtras();
                        if (extras == null) {
                            extras = new Bundle();
                        }
                        extras.remove("androidx.contentpager.content.wakelockid");
                        if (zzn.zza(extras)) {
                            zzn zznVar = new zzn(extras);
                            ExecutorService executorServiceNewSingleThreadExecutor = Executors.newSingleThreadExecutor();
                            try {
                                if (!new zzd(this, zznVar, executorServiceNewSingleThreadExecutor).zza()) {
                                    executorServiceNewSingleThreadExecutor.shutdown();
                                    if (zzo.zzd(intent)) {
                                        zzo.zzc(intent);
                                    }
                                    onMessageReceived(new RemoteMessage(extras));
                                }
                            } finally {
                                executorServiceNewSingleThreadExecutor.shutdown();
                            }
                            break;
                        } else {
                            onMessageReceived(new RemoteMessage(extras));
                            break;
                        }
                        break;
                    case "send_error":
                        String stringExtra3 = intent.getStringExtra("google.message_id");
                        if (stringExtra3 == null) {
                            stringExtra3 = intent.getStringExtra(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_MESSAGE_ID);
                        }
                        onSendError(stringExtra3, new SendException(intent.getStringExtra("error")));
                        break;
                    case "send_event":
                        onMessageSent(intent.getStringExtra("google.message_id"));
                        break;
                    default:
                        String strValueOf2 = String.valueOf(stringExtra);
                        Log.w("FirebaseMessaging", strValueOf2.length() != 0 ? "Received message with unknown type: ".concat(strValueOf2) : new String("Received message with unknown type: "));
                        break;
                }
            }
            try {
                Tasks.await(taskZza, TimeUnit.SECONDS.toMillis(1L), TimeUnit.MILLISECONDS);
                return;
            } catch (InterruptedException | ExecutionException | TimeoutException e) {
                String strValueOf3 = String.valueOf(e);
                Log.w("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf3).length() + 20).append("Message ack failed: ").append(strValueOf3).toString());
                return;
            }
        }
        if ("com.google.firebase.messaging.NOTIFICATION_DISMISS".equals(action)) {
            if (zzo.zzd(intent)) {
                zzo.zzb(intent);
            }
        } else if ("com.google.firebase.messaging.NEW_TOKEN".equals(action)) {
            onNewToken(intent.getStringExtra("token"));
        } else {
            String strValueOf4 = String.valueOf(intent.getAction());
            Log.d("FirebaseMessaging", strValueOf4.length() != 0 ? "Unknown intent action: ".concat(strValueOf4) : new String("Unknown intent action: "));
        }
    }
}

