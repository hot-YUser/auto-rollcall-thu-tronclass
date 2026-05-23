package com.google.android.gms.location;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.location.Location;
import android.os.Looper;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApi;
import com.google.android.gms.common.api.internal.ApiExceptionMapper;
import com.google.android.gms.common.api.internal.ListenerHolder;
import com.google.android.gms.common.api.internal.ListenerHolders;
import com.google.android.gms.common.api.internal.StatusExceptionMapper;
import com.google.android.gms.common.api.internal.TaskUtil;
import com.google.android.gms.common.internal.PendingResultUtil;
import com.google.android.gms.internal.location.zzbd;
import com.google.android.gms.internal.location.zzbm;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
public class FusedLocationProviderClient extends GoogleApi<Api.ApiOptions.NoOptions> {
    public static final String KEY_VERTICAL_ACCURACY = "verticalAccuracy";
    static class zza extends com.google.android.gms.internal.location.zzak {
        private final TaskCompletionSource<Void> zzac;

        public zza(TaskCompletionSource<Void> taskCompletionSource) {
            this.zzac = taskCompletionSource;
        }

        @Override // com.google.android.gms.internal.location.zzaj
        public final void zza(com.google.android.gms.internal.location.zzad zzadVar) {
            TaskUtil.setResultOrApiException(zzadVar.getStatus(), this.zzac);
        }
    }

    public FusedLocationProviderClient(Activity activity) {
        super(activity, (Api<Api.ApiOptions>) LocationServices.API, (Api.ApiOptions) null, (StatusExceptionMapper) new ApiExceptionMapper());
    }

    public FusedLocationProviderClient(Context context) {
        super(context, LocationServices.API, (Api.ApiOptions) null, new ApiExceptionMapper());
    }
    public final com.google.android.gms.internal.location.zzaj zza(TaskCompletionSource<Boolean> taskCompletionSource) {
        return new zzp(this, taskCompletionSource);
    }

    public Task<Void> flushLocations() {
        return PendingResultUtil.toVoidTask(LocationServices.FusedLocationApi.flushLocations(asGoogleApiClient()));
    }

    public Task<Location> getLastLocation() {
        return doRead(new zzl(this));
    }

    public Task<LocationAvailability> getLocationAvailability() {
        return doRead(new zzm(this));
    }

    public Task<Void> removeLocationUpdates(PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(LocationServices.FusedLocationApi.removeLocationUpdates(asGoogleApiClient(), pendingIntent));
    }

    public Task<Void> removeLocationUpdates(LocationCallback locationCallback) {
        return TaskUtil.toVoidTaskThatFailsOnFalse(doUnregisterEventListener(ListenerHolders.createListenerKey(locationCallback, "LocationCallback")));
    }

    public Task<Void> requestLocationUpdates(LocationRequest locationRequest, PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(LocationServices.FusedLocationApi.requestLocationUpdates(asGoogleApiClient(), locationRequest, pendingIntent));
    }

    public Task<Void> requestLocationUpdates(LocationRequest locationRequest, LocationCallback locationCallback, Looper looper) {
        zzbd zzbdVarZza = zzbd.zza(locationRequest);
        ListenerHolder listenerHolderCreateListenerHolder = ListenerHolders.createListenerHolder(locationCallback, zzbm.zza(looper), "LocationCallback");
        return doRegisterEventListener(new zzn(this, listenerHolderCreateListenerHolder, zzbdVarZza, listenerHolderCreateListenerHolder), new zzo(this, listenerHolderCreateListenerHolder.getListenerKey()));
    }

    public Task<Void> setMockLocation(Location location) {
        return PendingResultUtil.toVoidTask(LocationServices.FusedLocationApi.setMockLocation(asGoogleApiClient(), location));
    }

    public Task<Void> setMockMode(boolean z) {
        return PendingResultUtil.toVoidTask(LocationServices.FusedLocationApi.setMockMode(asGoogleApiClient(), z));
    }
}

