package com.google.android.datatransport.runtime.backends;

import android.content.Context;
import com.google.android.datatransport.runtime.time.Clock;
public abstract class CreationContext {
    private static final String DEFAULT_BACKEND_NAME = "cct";

    public abstract Context getApplicationContext();

    public abstract String getBackendName();

    public abstract Clock getMonotonicClock();

    public abstract Clock getWallClock();

    public static CreationContext create(Context context, Clock clock, Clock clock2) {
        return new AutoValue_CreationContext(context, clock, clock2, DEFAULT_BACKEND_NAME);
    }

    public static CreationContext create(Context context, Clock clock, Clock clock2, String str) {
        return new AutoValue_CreationContext(context, clock, clock2, str);
    }
}

