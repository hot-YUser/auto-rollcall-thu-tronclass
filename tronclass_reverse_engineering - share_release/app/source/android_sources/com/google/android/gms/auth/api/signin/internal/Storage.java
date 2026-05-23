package com.google.android.gms.auth.api.signin.internal;

import android.content.Context;
import android.content.SharedPreferences;
import android.text.TextUtils;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.internal.Preconditions;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import javax.annotation.Nullable;
import org.json.JSONException;
public class Storage {
    private static final Lock zaaj = new ReentrantLock();
    private static Storage zaak;
    private final Lock zaal = new ReentrantLock();
    private final SharedPreferences zaam;

    public static Storage getInstance(Context context) {
        Preconditions.checkNotNull(context);
        Lock lock = zaaj;
        lock.lock();
        try {
            if (zaak == null) {
                zaak = new Storage(context.getApplicationContext());
            }
            Storage storage = zaak;
            lock.unlock();
            return storage;
        } catch (Throwable th) {
            zaaj.unlock();
            throw th;
        }
    }

    private Storage(Context context) {
        this.zaam = context.getSharedPreferences("com.google.android.gms.signin", 0);
    }

    public void saveDefaultGoogleSignInAccount(GoogleSignInAccount googleSignInAccount, GoogleSignInOptions googleSignInOptions) {
        Preconditions.checkNotNull(googleSignInAccount);
        Preconditions.checkNotNull(googleSignInOptions);
        zaa("defaultGoogleSignInAccount", googleSignInAccount.zab());
        Preconditions.checkNotNull(googleSignInAccount);
        Preconditions.checkNotNull(googleSignInOptions);
        String strZab = googleSignInAccount.zab();
        zaa(zab("googleSignInAccount", strZab), googleSignInAccount.zac());
        zaa(zab("googleSignInOptions", strZab), googleSignInOptions.zae());
    }

    private final void zaa(String str, String str2) {
        this.zaal.lock();
        try {
            this.zaam.edit().putString(str, str2).apply();
        } finally {
            this.zaal.unlock();
        }
    }

    @Nullable
    public GoogleSignInAccount getSavedDefaultGoogleSignInAccount() {
        return zad(zaf("defaultGoogleSignInAccount"));
    }

    @Nullable
    private final GoogleSignInAccount zad(String str) {
        String strZaf;
        if (!TextUtils.isEmpty(str) && (strZaf = zaf(zab("googleSignInAccount", str))) != null) {
            try {
                return GoogleSignInAccount.zaa(strZaf);
            } catch (JSONException unused) {
            }
        }
        return null;
    }

    @Nullable
    public GoogleSignInOptions getSavedDefaultGoogleSignInOptions() {
        return zae(zaf("defaultGoogleSignInAccount"));
    }

    @Nullable
    private final GoogleSignInOptions zae(String str) {
        String strZaf;
        if (!TextUtils.isEmpty(str) && (strZaf = zaf(zab("googleSignInOptions", str))) != null) {
            try {
                return GoogleSignInOptions.zab(strZaf);
            } catch (JSONException unused) {
            }
        }
        return null;
    }

    @Nullable
    public String getSavedRefreshToken() {
        return zaf("refreshToken");
    }

    @Nullable
    private final String zaf(String str) {
        this.zaal.lock();
        try {
            return this.zaam.getString(str, null);
        } finally {
            this.zaal.unlock();
        }
    }

    public final void zaf() {
        String strZaf = zaf("defaultGoogleSignInAccount");
        zag("defaultGoogleSignInAccount");
        if (TextUtils.isEmpty(strZaf)) {
            return;
        }
        zag(zab("googleSignInAccount", strZaf));
        zag(zab("googleSignInOptions", strZaf));
    }

    private final void zag(String str) {
        this.zaal.lock();
        try {
            this.zaam.edit().remove(str).apply();
        } finally {
            this.zaal.unlock();
        }
    }

    public void clear() {
        this.zaal.lock();
        try {
            this.zaam.edit().clear().apply();
        } finally {
            this.zaal.unlock();
        }
    }

    private static String zab(String str, String str2) {
        return new StringBuilder(String.valueOf(str).length() + 1 + String.valueOf(str2).length()).append(str).append(":").append(str2).toString();
    }
}

