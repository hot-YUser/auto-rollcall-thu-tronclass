package com.google.android.datatransport.runtime.scheduling.persistence;

import dagger.internal.Factory;
import dagger.internal.Preconditions;
public final class EventStoreModule_StoreConfigFactory implements Factory<EventStoreConfig> {
    private static final EventStoreModule_StoreConfigFactory INSTANCE = new EventStoreModule_StoreConfigFactory();

    @Override // javax.inject.Provider
    public EventStoreConfig get() {
        return storeConfig();
    }

    public static EventStoreModule_StoreConfigFactory create() {
        return INSTANCE;
    }

    public static EventStoreConfig storeConfig() {
        return (EventStoreConfig) Preconditions.checkNotNull(EventStoreModule.storeConfig(), "Cannot return null from a non-@Nullable @Provides method");
    }
}

