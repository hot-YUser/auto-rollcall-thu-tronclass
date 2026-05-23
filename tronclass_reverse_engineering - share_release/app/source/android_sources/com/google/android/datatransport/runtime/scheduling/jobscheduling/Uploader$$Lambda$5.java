package com.google.android.datatransport.runtime.scheduling.jobscheduling;

import com.google.android.datatransport.runtime.TransportContext;
import com.google.android.datatransport.runtime.synchronization.SynchronizationGuard;
final /* synthetic */ class Uploader$$Lambda$5 implements SynchronizationGuard.CriticalSection {
    private final Uploader arg$1;
    private final TransportContext arg$2;
    private final int arg$3;

    private Uploader$$Lambda$5(Uploader uploader, TransportContext transportContext, int i) {
        this.arg$1 = uploader;
        this.arg$2 = transportContext;
        this.arg$3 = i;
    }

    public static SynchronizationGuard.CriticalSection lambdaFactory$(Uploader uploader, TransportContext transportContext, int i) {
        return new Uploader$$Lambda$5(uploader, transportContext, i);
    }

    @Override // com.google.android.datatransport.runtime.synchronization.SynchronizationGuard.CriticalSection
    public Object execute() {
        return Uploader.lambda$upload$0(this.arg$1, this.arg$2, this.arg$3);
    }
}

