package com.google.android.datatransport.runtime.scheduling;

import com.google.android.datatransport.runtime.scheduling.jobscheduling.SchedulerConfig;
import com.google.android.datatransport.runtime.time.Clock;
import dagger.Module;
import dagger.Provides;
@Module
public abstract class SchedulingConfigModule {
    @Provides
    static SchedulerConfig config(Clock clock) {
        return SchedulerConfig.getDefault(clock);
    }
}

