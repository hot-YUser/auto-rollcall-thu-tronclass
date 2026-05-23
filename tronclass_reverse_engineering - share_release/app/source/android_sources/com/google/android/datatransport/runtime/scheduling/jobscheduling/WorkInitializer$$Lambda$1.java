package com.google.android.datatransport.runtime.scheduling.jobscheduling;
final /* synthetic */ class WorkInitializer$$Lambda$1 implements Runnable {
    private final WorkInitializer arg$1;

    private WorkInitializer$$Lambda$1(WorkInitializer workInitializer) {
        this.arg$1 = workInitializer;
    }

    public static Runnable lambdaFactory$(WorkInitializer workInitializer) {
        return new WorkInitializer$$Lambda$1(workInitializer);
    }

    @Override // java.lang.Runnable
    public void run() {
        WorkInitializer workInitializer = this.arg$1;
        workInitializer.guard.runCriticalSection(WorkInitializer$$Lambda$2.lambdaFactory$(workInitializer));
    }
}

