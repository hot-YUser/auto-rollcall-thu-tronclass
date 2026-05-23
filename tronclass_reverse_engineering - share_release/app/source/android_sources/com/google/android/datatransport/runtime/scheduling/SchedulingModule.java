package com.google.android.datatransport.runtime.scheduling;

import android.content.Context;
import com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoScheduler;
import com.google.android.datatransport.runtime.scheduling.jobscheduling.SchedulerConfig;
import com.google.android.datatransport.runtime.scheduling.jobscheduling.WorkScheduler;
import com.google.android.datatransport.runtime.scheduling.persistence.EventStore;
import com.google.android.datatransport.runtime.time.Clock;
import dagger.Binds;
import dagger.Module;
import dagger.Provides;
@Module
public abstract class SchedulingModule {
    @Binds
    abstract Scheduler scheduler(DefaultScheduler defaultScheduler);

    @Provides
    static WorkScheduler workScheduler(Context context, EventStore eventStore, SchedulerConfig schedulerConfig, Clock clock) {
        return new JobInfoScheduler(context, eventStore, schedulerConfig);
    }
}

