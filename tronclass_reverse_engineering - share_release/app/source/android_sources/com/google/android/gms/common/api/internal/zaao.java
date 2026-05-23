package com.google.android.gms.common.api.internal;

import com.google.android.gms.common.ConnectionResult;
final class zaao extends zabf {
    private final /* synthetic */ ConnectionResult zagm;
    private final /* synthetic */ zaan zagn;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    zaao(zaan zaanVar, zabd zabdVar, ConnectionResult connectionResult) {
        super(zabdVar);
        this.zagn = zaanVar;
        this.zagm = connectionResult;
    }

    @Override // com.google.android.gms.common.api.internal.zabf
    public final void zaan() {
        this.zagn.zagj.zae(this.zagm);
    }
}

