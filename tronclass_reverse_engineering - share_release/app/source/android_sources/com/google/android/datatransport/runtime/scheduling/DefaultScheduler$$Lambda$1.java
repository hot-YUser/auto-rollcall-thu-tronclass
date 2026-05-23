package com.google.android.datatransport.runtime.scheduling;

import com.google.android.datatransport.TransportScheduleCallback;
import com.google.android.datatransport.runtime.EventInternal;
import com.google.android.datatransport.runtime.TransportContext;
final /* synthetic */ class DefaultScheduler$$Lambda$1 implements Runnable {
    private final DefaultScheduler arg$1;
    private final TransportContext arg$2;
    private final TransportScheduleCallback arg$3;
    private final EventInternal arg$4;

    private DefaultScheduler$$Lambda$1(DefaultScheduler defaultScheduler, TransportContext transportContext, TransportScheduleCallback transportScheduleCallback, EventInternal eventInternal) {
        this.arg$1 = defaultScheduler;
        this.arg$2 = transportContext;
        this.arg$3 = transportScheduleCallback;
        this.arg$4 = eventInternal;
    }

    public static Runnable lambdaFactory$(DefaultScheduler defaultScheduler, TransportContext transportContext, TransportScheduleCallback transportScheduleCallback, EventInternal eventInternal) {
        return new DefaultScheduler$$Lambda$1(defaultScheduler, transportContext, transportScheduleCallback, eventInternal);
    }

    @Override // java.lang.Runnable
    public void run() {
        DefaultScheduler.lambda$schedule$1(this.arg$1, this.arg$2, this.arg$3, this.arg$4);
    }
}

