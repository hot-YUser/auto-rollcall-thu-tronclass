package com.google.android.datatransport.runtime.scheduling.persistence;

import android.content.Context;
import dagger.internal.Factory;
import javax.inject.Provider;
public final class SchemaManager_Factory implements Factory<SchemaManager> {
    private final Provider<Context> contextProvider;
    private final Provider<Integer> schemaVersionProvider;

    public SchemaManager_Factory(Provider<Context> provider, Provider<Integer> provider2) {
        this.contextProvider = provider;
        this.schemaVersionProvider = provider2;
    }

    @Override // javax.inject.Provider
    public SchemaManager get() {
        return new SchemaManager(this.contextProvider.get(), this.schemaVersionProvider.get().intValue());
    }

    public static SchemaManager_Factory create(Provider<Context> provider, Provider<Integer> provider2) {
        return new SchemaManager_Factory(provider, provider2);
    }

    public static SchemaManager newInstance(Context context, int i) {
        return new SchemaManager(context, i);
    }
}

