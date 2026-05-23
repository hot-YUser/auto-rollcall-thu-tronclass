package com.google.android.datatransport.runtime.scheduling.persistence;

import dagger.internal.Factory;
public final class EventStoreModule_SchemaVersionFactory implements Factory<Integer> {
    private static final EventStoreModule_SchemaVersionFactory INSTANCE = new EventStoreModule_SchemaVersionFactory();

    @Override // javax.inject.Provider
    public Integer get() {
        return Integer.valueOf(schemaVersion());
    }

    public static EventStoreModule_SchemaVersionFactory create() {
        return INSTANCE;
    }

    public static int schemaVersion() {
        return EventStoreModule.schemaVersion();
    }
}

