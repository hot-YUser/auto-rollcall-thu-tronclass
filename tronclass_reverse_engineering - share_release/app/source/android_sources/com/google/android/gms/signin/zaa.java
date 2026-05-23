package com.google.android.gms.signin;

import com.google.android.gms.common.Scopes;
import com.google.android.gms.common.api.Api;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.signin.internal.SignInClientImpl;
public final class zaa {
    public static final Api<SignInOptions> API;
    private static final Api.ClientKey<SignInClientImpl> CLIENT_KEY;
    public static final Api.AbstractClientBuilder<SignInClientImpl, SignInOptions> zaph;
    private static final Scope zar;
    private static final Api.ClientKey<SignInClientImpl> zars;
    private static final Api.AbstractClientBuilder<SignInClientImpl, Object> zart;
    private static final Api<Object> zaru;
    private static final Scope zas;

    static {
        Api.ClientKey<SignInClientImpl> clientKey = new Api.ClientKey<>();
        CLIENT_KEY = clientKey;
        Api.ClientKey<SignInClientImpl> clientKey2 = new Api.ClientKey<>();
        zars = clientKey2;
        zab zabVar = new zab();
        zaph = zabVar;
        zac zacVar = new zac();
        zart = zacVar;
        zar = new Scope(Scopes.PROFILE);
        zas = new Scope("email");
        API = new Api<>("SignIn.API", zabVar, clientKey);
        zaru = new Api<>("SignIn.INTERNAL_API", zacVar, clientKey2);
    }
}

