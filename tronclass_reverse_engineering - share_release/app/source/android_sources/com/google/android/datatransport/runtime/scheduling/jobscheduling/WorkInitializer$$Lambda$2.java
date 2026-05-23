package com.google.android.datatransport.runtime.scheduling.jobscheduling;

import com.google.android.datatransport.runtime.synchronization.SynchronizationGuard;
final /* synthetic */ class WorkInitializer$$Lambda$2 implements SynchronizationGuard.CriticalSection {
    private final WorkInitializer arg$1;

    private WorkInitializer$$Lambda$2(WorkInitializer workInitializer) {
        this.arg$1 = workInitializer;
    }

    public static SynchronizationGuard.CriticalSection lambdaFactory$(WorkInitializer workInitializer) {
        return new WorkInitializer$$Lambda$2(workInitializer);
    }

    @Override // com.google.android.datatransport.runtime.synchronization.SynchronizationGuard.CriticalSection
    public Object execute() {
        return WorkInitializer.lambda$ensureContextsScheduled$0(this.arg$1);
    }
}

