package com.google.firebase.iid;

import android.os.Bundle;
final class zzao extends zzam<Bundle> {
    zzao(int i, int i2, Bundle bundle) {
        super(i, 1, bundle);
    }

    @Override // com.google.firebase.iid.zzam
    final boolean zza() {
        return false;
    }

    @Override // com.google.firebase.iid.zzam
    final void zza(Bundle bundle) {
        Bundle bundle2 = bundle.getBundle("data");
        if (bundle2 == null) {
            bundle2 = Bundle.EMPTY;
        }
        zza(bundle2);
    }
}

