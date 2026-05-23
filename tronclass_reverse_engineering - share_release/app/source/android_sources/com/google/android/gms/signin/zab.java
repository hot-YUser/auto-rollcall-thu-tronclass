package com.google.android.gms.signin;

import android.content.Context;
import android.os.Looper;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.internal.ClientSettings;
import com.google.android.gms.signin.internal.SignInClientImpl;
final class zab extends Api.AbstractClientBuilder<SignInClientImpl, SignInOptions> {
    zab() {
    }

    @Override // com.google.android.gms.common.api.Api.AbstractClientBuilder
    public final /* synthetic */ Api.Client buildClient(Context context, Looper looper, ClientSettings clientSettings, SignInOptions signInOptions, GoogleApiClient.ConnectionCallbacks connectionCallbacks, GoogleApiClient.OnConnectionFailedListener onConnectionFailedListener) {
        SignInOptions signInOptions2 = signInOptions;
        if (signInOptions2 == null) {
            signInOptions2 = SignInOptions.DEFAULT;
        }
        return new SignInClientImpl(context, looper, true, clientSettings, signInOptions2, connectionCallbacks, onConnectionFailedListener);
    }
}

