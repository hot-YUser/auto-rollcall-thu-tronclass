package com.google.firebase.messaging;

import com.google.android.datatransport.Transformer;
final /* synthetic */ class zzk implements Transformer {
    static final Transformer zza = new zzk();

    private zzk() {
    }

    @Override // com.google.android.datatransport.Transformer
    public final Object apply(Object obj) {
        return ((String) obj).getBytes();
    }
}

