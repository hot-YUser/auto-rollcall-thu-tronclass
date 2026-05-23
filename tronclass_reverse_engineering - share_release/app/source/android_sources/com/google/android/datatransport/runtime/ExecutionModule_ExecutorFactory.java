package com.google.android.datatransport.runtime;

import dagger.internal.Factory;
import dagger.internal.Preconditions;
import java.util.concurrent.Executor;
public final class ExecutionModule_ExecutorFactory implements Factory<Executor> {
    private static final ExecutionModule_ExecutorFactory INSTANCE = new ExecutionModule_ExecutorFactory();

    @Override // javax.inject.Provider
    public Executor get() {
        return executor();
    }

    public static ExecutionModule_ExecutorFactory create() {
        return INSTANCE;
    }

    public static Executor executor() {
        return (Executor) Preconditions.checkNotNull(ExecutionModule.executor(), "Cannot return null from a non-@Nullable @Provides method");
    }
}

