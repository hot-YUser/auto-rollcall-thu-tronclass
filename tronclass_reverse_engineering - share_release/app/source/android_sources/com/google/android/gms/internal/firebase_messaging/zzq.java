package com.google.android.gms.internal.firebase_messaging;
final class zzq extends zzp {
    private final zzo zza = new zzo();

    zzq() {
    }

    @Override // com.google.android.gms.internal.firebase_messaging.zzp
    public final void zza(Throwable th, Throwable th2) {
        if (th2 == th) {
            throw new IllegalArgumentException("Self suppression is not allowed.", th2);
        }
        if (th2 == null) {
            throw new NullPointerException("The suppressed exception cannot be null.");
        }
        this.zza.zza(th, true).add(th2);
    }
}

