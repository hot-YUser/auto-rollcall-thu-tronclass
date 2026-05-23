package com.google.android.datatransport.runtime.time;

import dagger.internal.Factory;
import dagger.internal.Preconditions;
public final class TimeModule_EventClockFactory implements Factory<Clock> {
    private static final TimeModule_EventClockFactory INSTANCE = new TimeModule_EventClockFactory();

    @Override // javax.inject.Provider
    public Clock get() {
        return eventClock();
    }

    public static TimeModule_EventClockFactory create() {
        return INSTANCE;
    }

    public static Clock eventClock() {
        return (Clock) Preconditions.checkNotNull(TimeModule.eventClock(), "Cannot return null from a non-@Nullable @Provides method");
    }
}

