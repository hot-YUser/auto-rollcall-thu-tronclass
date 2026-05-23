package com.google.android.datatransport.runtime.scheduling;

import com.google.android.datatransport.runtime.EventInternal;
import com.google.android.datatransport.runtime.TransportContext;
import com.google.android.datatransport.runtime.synchronization.SynchronizationGuard;
final /* synthetic */ class DefaultScheduler$$Lambda$2 implements SynchronizationGuard.CriticalSection {
    private final DefaultScheduler arg$1;
    private final TransportContext arg$2;
    private final EventInternal arg$3;

    private DefaultScheduler$$Lambda$2(DefaultScheduler defaultScheduler, TransportContext transportContext, EventInternal eventInternal) {
        this.arg$1 = defaultScheduler;
        this.arg$2 = transportContext;
        this.arg$3 = eventInternal;
    }

    public static SynchronizationGuard.CriticalSection lambdaFactory$(DefaultScheduler defaultScheduler, TransportContext transportContext, EventInternal eventInternal) {
        return new DefaultScheduler$$Lambda$2(defaultScheduler, transportContext, eventInternal);
    }

    @Override // com.google.android.datatransport.runtime.synchronization.SynchronizationGuard.CriticalSection
    public Object execute() {
        return DefaultScheduler.lambda$schedule$0(this.arg$1, this.arg$2, this.arg$3);
    }
}

