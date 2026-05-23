package com.google.android.datatransport.runtime.time;

import dagger.internal.Factory;
import dagger.internal.Preconditions;
public final class TimeModule_UptimeClockFactory implements Factory<Clock> {
    private static final TimeModule_UptimeClockFactory INSTANCE = new TimeModule_UptimeClockFactory();

    @Override // javax.inject.Provider
    public Clock get() {
        return uptimeClock();
    }

    public static TimeModule_UptimeClockFactory create() {
        return INSTANCE;
    }

    public static Clock uptimeClock() {
        return (Clock) Preconditions.checkNotNull(TimeModule.uptimeClock(), "Cannot return null from a non-@Nullable @Provides method");
    }
}

