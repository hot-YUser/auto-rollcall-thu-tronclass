package com.google.firebase.iid;

import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;
import com.google.android.gms.common.GoogleApiAvailabilityLight;
import com.google.android.gms.common.internal.LibraryVersion;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.FirebaseApp;
import com.google.firebase.heartbeatinfo.HeartBeatInfo;
import com.google.firebase.installations.FirebaseInstallationsApi;
import com.google.firebase.installations.InstallationTokenResult;
import com.google.firebase.platforminfo.UserAgentPublisher;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
final class zzs {
    private final FirebaseApp zza;
    private final zzaq zzb;
    private final zzax zzc;
    private final Executor zzd;
    private final UserAgentPublisher zze;
    private final HeartBeatInfo zzf;
    private final FirebaseInstallationsApi zzg;

    zzs(FirebaseApp firebaseApp, zzaq zzaqVar, Executor executor, UserAgentPublisher userAgentPublisher, HeartBeatInfo heartBeatInfo, FirebaseInstallationsApi firebaseInstallationsApi) {
        this(firebaseApp, zzaqVar, executor, new zzax(firebaseApp.getApplicationContext(), zzaqVar), userAgentPublisher, heartBeatInfo, firebaseInstallationsApi);
    }

    private zzs(FirebaseApp firebaseApp, zzaq zzaqVar, Executor executor, zzax zzaxVar, UserAgentPublisher userAgentPublisher, HeartBeatInfo heartBeatInfo, FirebaseInstallationsApi firebaseInstallationsApi) {
        this.zza = firebaseApp;
        this.zzb = zzaqVar;
        this.zzc = zzaxVar;
        this.zzd = executor;
        this.zze = userAgentPublisher;
        this.zzf = heartBeatInfo;
        this.zzg = firebaseInstallationsApi;
    }

    public final Task<String> zza(String str, String str2, String str3) {
        return zzb(zza(str, str2, str3, new Bundle()));
    }

    public final Task<Void> zzb(String str, String str2, String str3) {
        Bundle bundle = new Bundle();
        bundle.putString("delete", "1");
        return zza(zzb(zza(str, str2, str3, bundle)));
    }

    public final Task<Void> zzc(String str, String str2, String str3) {
        Bundle bundle = new Bundle();
        String strValueOf = String.valueOf("/topics/");
        String strValueOf2 = String.valueOf(str3);
        bundle.putString("gcm.topic", strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf));
        String strValueOf3 = String.valueOf("/topics/");
        String strValueOf4 = String.valueOf(str3);
        return zza(zzb(zza(str, str2, strValueOf4.length() != 0 ? strValueOf3.concat(strValueOf4) : new String(strValueOf3), bundle)));
    }

    public final Task<Void> zzd(String str, String str2, String str3) {
        Bundle bundle = new Bundle();
        String strValueOf = String.valueOf("/topics/");
        String strValueOf2 = String.valueOf(str3);
        bundle.putString("gcm.topic", strValueOf2.length() != 0 ? strValueOf.concat(strValueOf2) : new String(strValueOf));
        bundle.putString("delete", "1");
        String strValueOf3 = String.valueOf("/topics/");
        String strValueOf4 = String.valueOf(str3);
        return zza(zzb(zza(str, str2, strValueOf4.length() != 0 ? strValueOf3.concat(strValueOf4) : new String(strValueOf3), bundle)));
    }

    private final Task<Bundle> zza(final String str, final String str2, final String str3, final Bundle bundle) {
        final TaskCompletionSource taskCompletionSource = new TaskCompletionSource();
        this.zzd.execute(new Runnable(this, str, str2, str3, bundle, taskCompletionSource) { // from class: com.google.firebase.iid.zzv
            private final zzs zza;
            private final String zzb;
            private final String zzc;
            private final String zzd;
            private final Bundle zze;
            private final TaskCompletionSource zzf;

            {
                this.zza = this;
                this.zzb = str;
                this.zzc = str2;
                this.zzd = str3;
                this.zze = bundle;
                this.zzf = taskCompletionSource;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.zza.zza(this.zzb, this.zzc, this.zzd, this.zze, this.zzf);
            }
        });
        return taskCompletionSource.getTask();
    }

    private final String zza() {
        try {
            return Base64.encodeToString(MessageDigest.getInstance("SHA-1").digest(this.zza.getName().getBytes()), 11);
        } catch (NoSuchAlgorithmException unused) {
            return "[HASH-ERROR]";
        }
    }

    private final Bundle zzb(String str, String str2, String str3, Bundle bundle) {
        bundle.putString("scope", str3);
        bundle.putString("sender", str2);
        bundle.putString("subtype", str2);
        bundle.putString("appid", str);
        bundle.putString("gmp_app_id", this.zza.getOptions().getApplicationId());
        bundle.putString("gmsv", Integer.toString(this.zzb.zzd()));
        bundle.putString("osv", Integer.toString(Build.VERSION.SDK_INT));
        bundle.putString("app_ver", this.zzb.zzb());
        bundle.putString("app_ver_name", this.zzb.zzc());
        bundle.putString("firebase-app-name-hash", zza());
        try {
            String token = ((InstallationTokenResult) Tasks.await(this.zzg.getToken(false))).getToken();
            if (TextUtils.isEmpty(token)) {
                Log.w("FirebaseInstanceId", "FIS auth token is empty");
            } else {
                bundle.putString("Goog-Firebase-Installations-Auth", token);
            }
        } catch (InterruptedException | ExecutionException e) {
            Log.e("FirebaseInstanceId", "Failed to get FIS auth token", e);
        }
        String version = LibraryVersion.getInstance().getVersion("firebase-iid");
        if ("UNKNOWN".equals(version)) {
            version = new StringBuilder(19).append("unknown_").append(GoogleApiAvailabilityLight.GOOGLE_PLAY_SERVICES_VERSION_CODE).toString();
        }
        String strValueOf = String.valueOf(version);
        bundle.putString("cliv", strValueOf.length() != 0 ? "fiid-".concat(strValueOf) : new String("fiid-"));
        HeartBeatInfo.HeartBeat heartBeatCode = this.zzf.getHeartBeatCode("fire-iid");
        if (heartBeatCode != HeartBeatInfo.HeartBeat.NONE) {
            bundle.putString("Firebase-Client-Log-Type", Integer.toString(heartBeatCode.getCode()));
            bundle.putString("Firebase-Client", this.zze.getUserAgent());
        }
        return bundle;
    }
    public static String zza(Bundle bundle) throws IOException {
        if (bundle == null) {
            throw new IOException("SERVICE_NOT_AVAILABLE");
        }
        String string = bundle.getString("registration_id");
        if (string != null) {
            return string;
        }
        String string2 = bundle.getString("unregistered");
        if (string2 != null) {
            return string2;
        }
        String string3 = bundle.getString("error");
        if ("RST".equals(string3)) {
            throw new IOException("INSTANCE_ID_RESET");
        }
        if (string3 != null) {
            throw new IOException(string3);
        }
        String strValueOf = String.valueOf(bundle);
        Log.w("FirebaseInstanceId", new StringBuilder(String.valueOf(strValueOf).length() + 21).append("Unexpected response: ").append(strValueOf).toString(), new Throwable());
        throw new IOException("SERVICE_NOT_AVAILABLE");
    }

    private final <T> Task<Void> zza(Task<T> task) {
        return task.continueWith(zzh.zza(), new zzu(this));
    }

    private final Task<String> zzb(Task<Bundle> task) {
        return task.continueWith(this.zzd, new zzx(this));
    }

    final /* synthetic */ void zza(String str, String str2, String str3, Bundle bundle, TaskCompletionSource taskCompletionSource) {
        try {
            zzb(str, str2, str3, bundle);
            taskCompletionSource.setResult(this.zzc.zza(bundle));
        } catch (IOException e) {
            taskCompletionSource.setException(e);
        }
    }
}

