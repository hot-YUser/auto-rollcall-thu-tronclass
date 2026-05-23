package com.google.android.datatransport.runtime.scheduling.jobscheduling;

import com.google.android.datatransport.runtime.scheduling.persistence.EventStore;
import com.google.android.datatransport.runtime.synchronization.SynchronizationGuard;
final /* synthetic */ class Uploader$$Lambda$4 implements SynchronizationGuard.CriticalSection {
    private final EventStore arg$1;

    private Uploader$$Lambda$4(EventStore eventStore) {
        this.arg$1 = eventStore;
    }

    public static SynchronizationGuard.CriticalSection lambdaFactory$(EventStore eventStore) {
        return new Uploader$$Lambda$4(eventStore);
    }

    @Override // com.google.android.datatransport.runtime.synchronization.SynchronizationGuard.CriticalSection
    public Object execute() {
        return Integer.valueOf(this.arg$1.cleanUp());
    }
}

