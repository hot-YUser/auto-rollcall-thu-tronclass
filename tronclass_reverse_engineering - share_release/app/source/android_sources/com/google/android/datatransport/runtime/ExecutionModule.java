package com.google.android.datatransport.runtime;

import dagger.Module;
import dagger.Provides;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import javax.inject.Singleton;
@Module
abstract class ExecutionModule {
    ExecutionModule() {
    }

    @Provides
    @Singleton
    static Executor executor() {
        return Executors.newSingleThreadExecutor();
    }
}

