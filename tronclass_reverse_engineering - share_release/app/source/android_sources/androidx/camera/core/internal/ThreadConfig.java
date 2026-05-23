package androidx.camera.core.internal;

import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.ReadableConfig;
import java.util.concurrent.Executor;
public interface ThreadConfig extends ReadableConfig {
    public static final Config.Option<Executor> OPTION_BACKGROUND_EXECUTOR = Config.Option.create("camerax.core.thread.backgroundExecutor", Executor.class);

    public interface Builder<B> {
        B setBackgroundExecutor(Executor executor);
    }

    default Executor getBackgroundExecutor(Executor executor) {
        return (Executor) retrieveOption(OPTION_BACKGROUND_EXECUTOR, executor);
    }

    default Executor getBackgroundExecutor() {
        return (Executor) retrieveOption(OPTION_BACKGROUND_EXECUTOR);
    }
}

