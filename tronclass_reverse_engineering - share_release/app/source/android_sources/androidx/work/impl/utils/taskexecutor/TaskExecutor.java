package androidx.work.impl.utils.taskexecutor;

import androidx.work.impl.utils.SerialExecutor;
import java.util.concurrent.Executor;
public interface TaskExecutor {
    void executeOnBackgroundThread(Runnable runnable);

    SerialExecutor getBackgroundExecutor();

    Executor getMainThreadExecutor();

    void postToMainThread(Runnable runnable);
}

