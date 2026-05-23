package com.google.android.gms.common.api.internal;

import android.content.Context;
import android.content.res.Resources;
import android.text.TextUtils;
import com.google.android.gms.common.R;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.internal.StringResourceValueReader;
import com.google.android.gms.common.internal.zzp;
@Deprecated
public final class GoogleServices {
    private static final Object sLock = new Object();
    private static GoogleServices zzay;
    private final String zzaz;
    private final Status zzba;
    private final boolean zzbb;
    private final boolean zzbc;

    GoogleServices(Context context) {
        Resources resources = context.getResources();
        int identifier = resources.getIdentifier("google_app_measurement_enable", "integer", resources.getResourcePackageName(R.string.common_google_play_services_unknown_issue));
        boolean z = true;
        if (identifier != 0) {
            boolean z2 = resources.getInteger(identifier) != 0;
            this.zzbc = !z2;
            z = z2;
        } else {
            this.zzbc = false;
        }
        this.zzbb = z;
        String strZzc = zzp.zzc(context);
        strZzc = strZzc == null ? new StringResourceValueReader(context).getString("google_app_id") : strZzc;
        if (TextUtils.isEmpty(strZzc)) {
            this.zzba = new Status(10, "Missing google app id value from from string resources with name google_app_id.");
            this.zzaz = null;
        } else {
            this.zzaz = strZzc;
            this.zzba = Status.RESULT_SUCCESS;
        }
    }

    GoogleServices(String str, boolean z) {
        this.zzaz = str;
        this.zzba = Status.RESULT_SUCCESS;
        this.zzbb = z;
        this.zzbc = !z;
    }

    public static Status initialize(Context context, String str, boolean z) {
        Preconditions.checkNotNull(context, "Context must not be null.");
        Preconditions.checkNotEmpty(str, "App ID must be nonempty.");
        synchronized (sLock) {
            GoogleServices googleServices = zzay;
            if (googleServices != null) {
                return googleServices.checkGoogleAppId(str);
            }
            GoogleServices googleServices2 = new GoogleServices(str, z);
            zzay = googleServices2;
            return googleServices2.zzba;
        }
    }

    final Status checkGoogleAppId(String str) {
        String str2 = this.zzaz;
        if (str2 != null && !str2.equals(str)) {
            String str3 = this.zzaz;
            return new Status(10, new StringBuilder(String.valueOf(str3).length() + 97).append("Initialize was called with two different Google App IDs.  Only the first app ID will be used: '").append(str3).append("'.").toString());
        }
        return Status.RESULT_SUCCESS;
    }

    public static Status initialize(Context context) {
        Status status;
        Preconditions.checkNotNull(context, "Context must not be null.");
        synchronized (sLock) {
            if (zzay == null) {
                zzay = new GoogleServices(context);
            }
            status = zzay.zzba;
        }
        return status;
    }

    public static String getGoogleAppId() {
        return checkInitialized("getGoogleAppId").zzaz;
    }

    public static boolean isMeasurementEnabled() {
        GoogleServices googleServicesCheckInitialized = checkInitialized("isMeasurementEnabled");
        return googleServicesCheckInitialized.zzba.isSuccess() && googleServicesCheckInitialized.zzbb;
    }

    public static boolean isMeasurementExplicitlyDisabled() {
        return checkInitialized("isMeasurementExplicitlyDisabled").zzbc;
    }

    static void clearInstanceForTest() {
        synchronized (sLock) {
            zzay = null;
        }
    }

    private static GoogleServices checkInitialized(String str) {
        GoogleServices googleServices;
        synchronized (sLock) {
            googleServices = zzay;
            if (googleServices == null) {
                throw new IllegalStateException(new StringBuilder(String.valueOf(str).length() + 34).append("Initialize must be called before ").append(str).append(".").toString());
            }
        }
        return googleServices;
    }
}

