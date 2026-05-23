package com.google.firebase.iid;

import android.os.Bundle;
final class zzan extends zzam<Void> {
    zzan(int i, int i2, Bundle bundle) {
        super(i, 2, bundle);
    }

    @Override // com.google.firebase.iid.zzam
    final boolean zza() {
        return true;
    }

    @Override // com.google.firebase.iid.zzam
    final void zza(Bundle bundle) {
        if (bundle.getBoolean("ack", false)) {
            zza((Object) null);
        } else {
            zza(new zzap(4, "Invalid response to one way request"));
        }
    }
}

