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
public class ActivityRecognitionClient extends GoogleApi<Api.ApiOptions.NoOptions> {
    public ActivityRecognitionClient(Activity activity) {
        super(activity, (Api<Api.ApiOptions>) LocationServices.API, (Api.ApiOptions) null, (StatusExceptionMapper) new ApiExceptionMapper());
    }

    public ActivityRecognitionClient(Context context) {
        super(context, LocationServices.API, (Api.ApiOptions) null, new ApiExceptionMapper());
    }

    public Task<Void> removeActivityTransitionUpdates(PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(ActivityRecognition.ActivityRecognitionApi.zza(asGoogleApiClient(), pendingIntent));
    }

    public Task<Void> removeActivityUpdates(PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(ActivityRecognition.ActivityRecognitionApi.removeActivityUpdates(asGoogleApiClient(), pendingIntent));
    }

    public Task<Void> requestActivityTransitionUpdates(ActivityTransitionRequest activityTransitionRequest, PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(ActivityRecognition.ActivityRecognitionApi.zza(asGoogleApiClient(), activityTransitionRequest, pendingIntent));
    }

    public Task<Void> requestActivityUpdates(long j, PendingIntent pendingIntent) {
        return PendingResultUtil.toVoidTask(ActivityRecognition.ActivityRecognitionApi.requestActivityUpdates(asGoogleApiClient(), j, pendingIntent));
    }
}

