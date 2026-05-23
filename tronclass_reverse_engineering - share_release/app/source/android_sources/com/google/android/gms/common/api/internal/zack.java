package com.google.android.gms.common.api.internal;

import android.os.RemoteException;
import com.google.android.gms.common.Feature;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.internal.TaskApiCall;
import com.google.android.gms.tasks.TaskCompletionSource;
final class zack<A, ResultT> extends TaskApiCall<A, ResultT> {
    private final /* synthetic */ TaskApiCall.Builder zakn;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zack(TaskApiCall.Builder builder, Feature[] featureArr, boolean z) {
        super(featureArr, z);
        this.zakn = builder;
    }

    /* high-level source view WARN: Incorrect types in method signature: (TA;Lcom/google/android/gms/tasks/TaskCompletionSource<TResultT;>;)V */
    @Override // com.google.android.gms.common.api.internal.TaskApiCall
    protected final void doExecute(Api.AnyClient anyClient, TaskCompletionSource taskCompletionSource) throws RemoteException {
        this.zakn.zakm.accept(anyClient, taskCompletionSource);
    }
}

