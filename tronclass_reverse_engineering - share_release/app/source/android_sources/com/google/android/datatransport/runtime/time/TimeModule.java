package com.google.android.datatransport.runtime.time;

import dagger.Module;
import dagger.Provides;
@Module
public abstract class TimeModule {
    @Provides
    static Clock eventClock() {
        return new WallTimeClock();
    }

    @Provides
    static Clock uptimeClock() {
        return new UptimeClock();
    }
}

