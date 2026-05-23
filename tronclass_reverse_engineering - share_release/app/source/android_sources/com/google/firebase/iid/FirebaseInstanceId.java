package com.google.firebase.iid;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Looper;
import android.text.TextUtils;
import android.util.Log;
import androidx.work.WorkRequest;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.util.concurrent.NamedThreadFactory;
import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.SuccessContinuation;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.DataCollectionDefaultChange;
import com.google.firebase.FirebaseApp;
import com.google.firebase.events.Event;
import com.google.firebase.events.EventHandler;
import com.google.firebase.events.Subscriber;
import com.google.firebase.heartbeatinfo.HeartBeatInfo;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.installations.FirebaseInstallationsApi;
import com.google.firebase.platforminfo.UserAgentPublisher;
import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
public class FirebaseInstanceId {
    private static final long zza = TimeUnit.HOURS.toSeconds(8);
    private static zzay zzb;
    private static ScheduledExecutorService zzc;
    private final Executor zzd;
    private final FirebaseApp zze;
    private final zzaq zzf;
    private final zzs zzg;
    private final zzat zzh;
    private final zzbc zzi;
    private final FirebaseInstallationsApi zzj;
    private boolean zzk;
    private final zza zzl;

    public static FirebaseInstanceId getInstance() {
        return getInstance(FirebaseApp.getInstance());
    }

    public static FirebaseInstanceId getInstance(FirebaseApp firebaseApp) {
        return (FirebaseInstanceId) firebaseApp.get(FirebaseInstanceId.class);
    }
    class zza {
        private boolean zzb;
        private final Subscriber zzc;
        private boolean zzd;
        private EventHandler<DataCollectionDefaultChange> zze;
        private Boolean zzf;

        zza(Subscriber subscriber) {
            this.zzc = subscriber;
        }

        private final synchronized void zzb() {
            if (this.zzd) {
                return;
            }
            this.zzb = zzd();
            Boolean boolZzc = zzc();
            this.zzf = boolZzc;
            if (boolZzc == null && this.zzb) {
                EventHandler<DataCollectionDefaultChange> eventHandler = new EventHandler(this) { // from class: com.google.firebase.iid.zzr
                    private final FirebaseInstanceId.zza zza;

                    {
                        this.zza = this;
                    }

                    @Override // com.google.firebase.events.EventHandler
                    public final void handle(Event event) {
                        FirebaseInstanceId.zza zzaVar = this.zza;
                        synchronized (zzaVar) {
                            if (zzaVar.zza()) {
                                FirebaseInstanceId.this.zzj();
                            }
                        }
                    }
                };
                this.zze = eventHandler;
                this.zzc.subscribe(DataCollectionDefaultChange.class, eventHandler);
            }
            this.zzd = true;
        }

        final synchronized boolean zza() {
            zzb();
            Boolean bool = this.zzf;
            if (bool != null) {
                return bool.booleanValue();
            }
            return this.zzb && FirebaseInstanceId.this.zze.isDataCollectionDefaultEnabled();
        }

        final synchronized void zza(boolean z) {
            zzb();
            EventHandler<DataCollectionDefaultChange> eventHandler = this.zze;
            if (eventHandler != null) {
                this.zzc.unsubscribe(DataCollectionDefaultChange.class, eventHandler);
                this.zze = null;
            }
            SharedPreferences.Editor editorEdit = FirebaseInstanceId.this.zze.getApplicationContext().getSharedPreferences("com.google.firebase.messaging", 0).edit();
            editorEdit.putBoolean("auto_init", z);
            editorEdit.apply();
            if (z) {
                FirebaseInstanceId.this.zzj();
            }
            this.zzf = Boolean.valueOf(z);
        }

        private final Boolean zzc() {
            ApplicationInfo applicationInfo;
            Context applicationContext = FirebaseInstanceId.this.zze.getApplicationContext();
            SharedPreferences sharedPreferences = applicationContext.getSharedPreferences("com.google.firebase.messaging", 0);
            if (sharedPreferences.contains("auto_init")) {
                return Boolean.valueOf(sharedPreferences.getBoolean("auto_init", false));
            }
            try {
                PackageManager packageManager = applicationContext.getPackageManager();
                if (packageManager == null || (applicationInfo = packageManager.getApplicationInfo(applicationContext.getPackageName(), 128)) == null || applicationInfo.metaData == null || !applicationInfo.metaData.containsKey("firebase_messaging_auto_init_enabled")) {
                    return null;
                }
                return Boolean.valueOf(applicationInfo.metaData.getBoolean("firebase_messaging_auto_init_enabled"));
            } catch (PackageManager.NameNotFoundException unused) {
                return null;
            }
        }

        private final boolean zzd() {
            try {
                Class.forName("com.google.firebase.messaging.FirebaseMessaging");
                return true;
            } catch (ClassNotFoundException unused) {
                Context applicationContext = FirebaseInstanceId.this.zze.getApplicationContext();
                Intent intent = new Intent("com.google.firebase.MESSAGING_EVENT");
                intent.setPackage(applicationContext.getPackageName());
                ResolveInfo resolveInfoResolveService = applicationContext.getPackageManager().resolveService(intent, 0);
                return (resolveInfoResolveService == null || resolveInfoResolveService.serviceInfo == null) ? false : true;
            }
        }
    }

    FirebaseInstanceId(FirebaseApp firebaseApp, Subscriber subscriber, UserAgentPublisher userAgentPublisher, HeartBeatInfo heartBeatInfo, FirebaseInstallationsApi firebaseInstallationsApi) {
        this(firebaseApp, new zzaq(firebaseApp.getApplicationContext()), zzh.zzb(), zzh.zzb(), subscriber, userAgentPublisher, heartBeatInfo, firebaseInstallationsApi);
    }

    private FirebaseInstanceId(FirebaseApp firebaseApp, zzaq zzaqVar, Executor executor, Executor executor2, Subscriber subscriber, UserAgentPublisher userAgentPublisher, HeartBeatInfo heartBeatInfo, FirebaseInstallationsApi firebaseInstallationsApi) {
        this.zzk = false;
        if (zzaq.zza(firebaseApp) == null) {
            throw new IllegalStateException("FirebaseInstanceId failed to initialize, FirebaseApp is missing project ID");
        }
        synchronized (FirebaseInstanceId.class) {
            if (zzb == null) {
                zzb = new zzay(firebaseApp.getApplicationContext());
            }
        }
        this.zze = firebaseApp;
        this.zzf = zzaqVar;
        this.zzg = new zzs(firebaseApp, zzaqVar, executor, userAgentPublisher, heartBeatInfo, firebaseInstallationsApi);
        this.zzd = executor2;
        this.zzi = new zzbc(zzb);
        this.zzl = new zza(subscriber);
        this.zzh = new zzat(executor);
        this.zzj = firebaseInstallationsApi;
        executor2.execute(new Runnable(this) { // from class: com.google.firebase.iid.zzl
            private final FirebaseInstanceId zza;

            {
                this.zza = this;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.zza.zzi();
            }
        });
    }
    public final void zzj() {
        if (zza(zzb()) || this.zzi.zza()) {
            zzk();
        }
    }

    final FirebaseApp zza() {
        return this.zze;
    }

    final synchronized void zza(boolean z) {
        this.zzk = z;
    }

    private final synchronized void zzk() {
        if (!this.zzk) {
            zza(0L);
        }
    }

    final synchronized void zza(long j) {
        zza(new zzba(this, this.zzf, this.zzi, Math.min(Math.max(30L, j << 1), zza)), j);
        this.zzk = true;
    }

    static void zza(Runnable runnable, long j) {
        synchronized (FirebaseInstanceId.class) {
            if (zzc == null) {
                zzc = new ScheduledThreadPoolExecutor(1, new NamedThreadFactory("FirebaseInstanceId"));
            }
            zzc.schedule(runnable, j, TimeUnit.SECONDS);
        }
    }

    public String getId() {
        zza(this.zze);
        zzj();
        return zzl();
    }

    private static void zza(FirebaseApp firebaseApp) {
        String projectId;
        if (TextUtils.isEmpty(firebaseApp.getOptions().getProjectId())) {
            projectId = firebaseApp.getOptions().getGcmSenderId();
        } else {
            projectId = firebaseApp.getOptions().getProjectId();
        }
        Preconditions.checkNotEmpty(projectId, "FirebaseApp should have a non-empty projectId.");
        Preconditions.checkNotEmpty(firebaseApp.getOptions().getApplicationId(), "FirebaseApp should have a non-empty applicationId.");
        Preconditions.checkNotEmpty(firebaseApp.getOptions().getApiKey(), "FirebaseApp should have a non-empty apiKey.");
    }

    private final String zzl() {
        try {
            zzb.zzc(this.zze.getPersistenceKey());
            Task<String> id = this.zzj.getId();
            Preconditions.checkNotNull(id, "Task must not be null");
            final CountDownLatch countDownLatch = new CountDownLatch(1);
            id.addOnCompleteListener(zzm.zza, new OnCompleteListener(countDownLatch) { // from class: com.google.firebase.iid.zzp
                private final CountDownLatch zza;

                {
                    this.zza = countDownLatch;
                }

                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    this.zza.countDown();
                }
            });
            countDownLatch.await(WorkRequest.DEFAULT_BACKOFF_DELAY_MILLIS, TimeUnit.MILLISECONDS);
            if (id.isSuccessful()) {
                return id.getResult();
            }
            if (id.isCanceled()) {
                throw new CancellationException("Task is already canceled");
            }
            throw new IllegalStateException(id.getException());
        } catch (InterruptedException e) {
            throw new IllegalStateException(e);
        }
    }

    public long getCreationTime() {
        return zzb.zzb(this.zze.getPersistenceKey());
    }

    public Task<InstanceIdResult> getInstanceId() {
        return zza(zzaq.zza(this.zze), "*");
    }

    private final Task<InstanceIdResult> zza(final String str, String str2) {
        final String strZzd = zzd(str2);
        return Tasks.forResult(null).continueWithTask(this.zzd, new Continuation(this, str, strZzd) { // from class: com.google.firebase.iid.zzn
            private final FirebaseInstanceId zza;
            private final String zzb;
            private final String zzc;

            {
                this.zza = this;
                this.zzb = str;
                this.zzc = strZzd;
            }

            @Override // com.google.android.gms.tasks.Continuation
            public final Object then(Task task) {
                return this.zza.zza(this.zzb, this.zzc, task);
            }
        });
    }

    public void deleteInstanceId() throws IOException {
        zza(this.zze);
        if (Looper.getMainLooper() == Looper.myLooper()) {
            throw new IOException("MAIN_THREAD");
        }
        zza(this.zzj.delete());
        zze();
    }

    @Deprecated
    public String getToken() {
        zza(this.zze);
        zzbb zzbbVarZzb = zzb();
        if (zza(zzbbVarZzb)) {
            zzk();
        }
        return zzbb.zza(zzbbVarZzb);
    }

    public String getToken(String str, String str2) throws IOException {
        if (Looper.getMainLooper() == Looper.myLooper()) {
            throw new IOException("MAIN_THREAD");
        }
        return ((InstanceIdResult) zza(zza(str, str2))).getToken();
    }

    final zzbb zzb() {
        return zzb(zzaq.zza(this.zze), "*");
    }

    private static zzbb zzb(String str, String str2) {
        return zzb.zza("", str, str2);
    }

    final String zzc() throws IOException {
        return getToken(zzaq.zza(this.zze), "*");
    }

    private final <T> T zza(Task<T> task) throws IOException {
        try {
            return (T) Tasks.await(task, WorkRequest.DEFAULT_BACKOFF_DELAY_MILLIS, TimeUnit.MILLISECONDS);
        } catch (InterruptedException | TimeoutException unused) {
            throw new IOException("SERVICE_NOT_AVAILABLE");
        } catch (ExecutionException e) {
            Throwable cause = e.getCause();
            if (cause instanceof IOException) {
                if ("INSTANCE_ID_RESET".equals(cause.getMessage())) {
                    zze();
                }
                throw ((IOException) cause);
            }
            if (cause instanceof RuntimeException) {
                throw ((RuntimeException) cause);
            }
            throw new IOException(e);
        }
    }

    public void deleteToken(String str, String str2) throws IOException {
        zza(this.zze);
        if (Looper.getMainLooper() == Looper.myLooper()) {
            throw new IOException("MAIN_THREAD");
        }
        String strZzd = zzd(str2);
        zza(this.zzg.zzb(zzl(), str, strZzd));
        zzb.zzb("", str, strZzd);
    }

    public final synchronized Task<Void> zza(String str) {
        Task<Void> taskZza;
        taskZza = this.zzi.zza(str);
        zzk();
        return taskZza;
    }

    final void zzb(String str) throws IOException {
        zzbb zzbbVarZzb = zzb();
        if (zza(zzbbVarZzb)) {
            throw new IOException("token not available");
        }
        zza(this.zzg.zzc(zzl(), zzbbVarZzb.zza, str));
    }

    final void zzc(String str) throws IOException {
        zzbb zzbbVarZzb = zzb();
        if (zza(zzbbVarZzb)) {
            throw new IOException("token not available");
        }
        zza(this.zzg.zzd(zzl(), zzbbVarZzb.zza, str));
    }

    static boolean zzd() {
        return Log.isLoggable("FirebaseInstanceId", 3);
    }

    final synchronized void zze() {
        zzb.zzb();
        if (this.zzl.zza()) {
            zzk();
        }
    }

    final boolean zzf() {
        return this.zzf.zza() != 0;
    }

    final void zzg() {
        zzb.zzd("");
        zzk();
    }

    public final boolean zzh() {
        return this.zzl.zza();
    }

    public final void zzb(boolean z) {
        this.zzl.zza(z);
    }

    private static String zzd(String str) {
        return (str.isEmpty() || str.equalsIgnoreCase("fcm") || str.equalsIgnoreCase("gcm")) ? "*" : str;
    }

    final boolean zza(zzbb zzbbVar) {
        return zzbbVar == null || zzbbVar.zzb(this.zzf.zzb());
    }

    final /* synthetic */ Task zza(final String str, final String str2, Task task) throws Exception {
        final String strZzl = zzl();
        zzbb zzbbVarZzb = zzb(str, str2);
        if (!zza(zzbbVarZzb)) {
            return Tasks.forResult(new zzab(strZzl, zzbbVarZzb.zza));
        }
        return this.zzh.zza(str, str2, new zzau(this, strZzl, str, str2) { // from class: com.google.firebase.iid.zzo
            private final FirebaseInstanceId zza;
            private final String zzb;
            private final String zzc;
            private final String zzd;

            {
                this.zza = this;
                this.zzb = strZzl;
                this.zzc = str;
                this.zzd = str2;
            }

            @Override // com.google.firebase.iid.zzau
            public final Task zza() {
                return this.zza.zza(this.zzb, this.zzc, this.zzd);
            }
        });
    }

    final /* synthetic */ Task zza(final String str, final String str2, final String str3) {
        return this.zzg.zza(str, str2, str3).onSuccessTask(this.zzd, new SuccessContinuation(this, str2, str3, str) { // from class: com.google.firebase.iid.zzq
            private final FirebaseInstanceId zza;
            private final String zzb;
            private final String zzc;
            private final String zzd;

            {
                this.zza = this;
                this.zzb = str2;
                this.zzc = str3;
                this.zzd = str;
            }

            @Override // com.google.android.gms.tasks.SuccessContinuation
            public final Task then(Object obj) {
                return this.zza.zza(this.zzb, this.zzc, this.zzd, (String) obj);
            }
        });
    }

    final /* synthetic */ Task zza(String str, String str2, String str3, String str4) throws Exception {
        zzb.zza("", str, str2, str4, this.zzf.zzb());
        return Tasks.forResult(new zzab(str3, str4));
    }

    final /* synthetic */ void zzi() {
        if (this.zzl.zza()) {
            zzj();
        }
    }
}

