package com.google.android.gms.common.api.internal;

import android.app.Activity;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.internal.ApiExceptionUtil;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
import java.util.concurrent.CancellationException;
public class zabu extends zal {
    private TaskCompletionSource<Void> zajp;

    public static zabu zac(Activity activity) {
        LifecycleFragment fragment = getFragment(activity);
        zabu zabuVar = (zabu) fragment.getCallbackOrNull("GmsAvailabilityHelper", zabu.class);
        if (zabuVar == null) {
            return new zabu(fragment);
        }
        if (zabuVar.zajp.getTask().isComplete()) {
            zabuVar.zajp = new TaskCompletionSource<>();
        }
        return zabuVar;
    }

    private zabu(LifecycleFragment lifecycleFragment) {
        super(lifecycleFragment);
        this.zajp = new TaskCompletionSource<>();
        this.mLifecycleFragment.addCallback("GmsAvailabilityHelper", this);
    }

    @Override // com.google.android.gms.common.api.internal.zal
    protected final void zaa(ConnectionResult connectionResult, int i) {
        this.zajp.setException(ApiExceptionUtil.fromStatus(new Status(connectionResult.getErrorCode(), connectionResult.getErrorMessage(), connectionResult.getResolution())));
    }

    @Override // com.google.android.gms.common.api.internal.zal
    protected final void zao() {
        int iIsGooglePlayServicesAvailable = this.zacd.isGooglePlayServicesAvailable(this.mLifecycleFragment.getLifecycleActivity());
        if (iIsGooglePlayServicesAvailable == 0) {
            this.zajp.setResult(null);
        } else {
            if (this.zajp.getTask().isComplete()) {
                return;
            }
            zab(new ConnectionResult(iIsGooglePlayServicesAvailable, null), 0);
        }
    }

    @Override // com.google.android.gms.common.api.internal.LifecycleCallback
    public void onDestroy() {
        super.onDestroy();
        this.zajp.trySetException(new CancellationException("Host activity was destroyed before Google Play services could be made available."));
    }

    public final Task<Void> getTask() {
        return this.zajp.getTask();
    }
}

