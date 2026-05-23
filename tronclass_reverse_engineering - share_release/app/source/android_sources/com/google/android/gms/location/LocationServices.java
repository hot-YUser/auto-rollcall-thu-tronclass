package com.google.android.gms.location;

import android.app.Activity;
import android.content.Context;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.Result;
import com.google.android.gms.common.api.internal.BaseImplementation;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.internal.location.zzaz;
import com.google.android.gms.internal.location.zzbk;
public class LocationServices {
    public static final Api<Api.ApiOptions.NoOptions> API;
    private static final Api.AbstractClientBuilder<zzaz, Api.ApiOptions.NoOptions> CLIENT_BUILDER;
    private static final Api.ClientKey<zzaz> CLIENT_KEY;

    @Deprecated
    public static final FusedLocationProviderApi FusedLocationApi;

    @Deprecated
    public static final GeofencingApi GeofencingApi;

    @Deprecated
    public static final SettingsApi SettingsApi;

    public static abstract class zza<R extends Result> extends BaseImplementation.ApiMethodImpl<R, zzaz> {
        public zza(GoogleApiClient googleApiClient) {
            super(LocationServices.API, googleApiClient);
        }
    }

    static {
        Api.ClientKey<zzaz> clientKey = new Api.ClientKey<>();
        CLIENT_KEY = clientKey;
        zzad zzadVar = new zzad();
        CLIENT_BUILDER = zzadVar;
        API = new Api<>("LocationServices.API", zzadVar, clientKey);
        FusedLocationApi = new com.google.android.gms.internal.location.zzq();
        GeofencingApi = new com.google.android.gms.internal.location.zzaf();
        SettingsApi = new zzbk();
    }

    private LocationServices() {
    }

    public static FusedLocationProviderClient getFusedLocationProviderClient(Activity activity) {
        return new FusedLocationProviderClient(activity);
    }

    public static FusedLocationProviderClient getFusedLocationProviderClient(Context context) {
        return new FusedLocationProviderClient(context);
    }

    public static GeofencingClient getGeofencingClient(Activity activity) {
        return new GeofencingClient(activity);
    }

    public static GeofencingClient getGeofencingClient(Context context) {
        return new GeofencingClient(context);
    }

    public static SettingsClient getSettingsClient(Activity activity) {
        return new SettingsClient(activity);
    }

    public static SettingsClient getSettingsClient(Context context) {
        return new SettingsClient(context);
    }

    public static zzaz zza(GoogleApiClient googleApiClient) {
        Preconditions.checkArgument(googleApiClient != null, "GoogleApiClient parameter is required.");
        zzaz zzazVar = (zzaz) googleApiClient.getClient(CLIENT_KEY);
        Preconditions.checkState(zzazVar != null, "GoogleApiClient is not configured to use the LocationServices.API Api. Pass thisinto GoogleApiClient.Builder#addApi() to use this feature.");
        return zzazVar;
    }
}

