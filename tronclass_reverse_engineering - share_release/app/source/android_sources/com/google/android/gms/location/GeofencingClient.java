package com.google.android.gms.location;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApi;
import com.google.android.gms.common.api.internal.ApiExceptionMapper;
import com.google.android.gms.common.api.internal.StatusExceptionMapper;
import com.google.android.gms.common.internal.PendingResultUtil;
import com.google.android.gms.tasks.Task;
import java.util.List;
public class GeofencingClient extends GoogleApi<Api.ApiOptions.NoOptions> {
    public GeofencingClient(Activity activity) {
        super(activity, (Api<Api.ApiOptions>) LocationServices.API, (Api.ApiOptions) null, (StatusExceptionMapper) new ApiExceptionMapper());
    }

    public GeofencingClient(Context context) {
        super(context, LocationServices.API, (Api.ApiOptions) null, new ApiExceptionMapper());
    }

    public Task<Void> addGeofences(GeofencingRequest geofencingRequest, PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(LocationServices.GeofencingApi.addGeofences(asGoogleApiClient(), geofencingRequest, pendingIntent));
    }

    public Task<Void> removeGeofences(PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(LocationServices.GeofencingApi.removeGeofences(asGoogleApiClient(), pendingIntent));
    }

    public Task<Void> removeGeofences(List<String> list) {
        return PendingResultUtil.toVoidTask(LocationServices.GeofencingApi.removeGeofences(asGoogleApiClient(), list));
    }
}

