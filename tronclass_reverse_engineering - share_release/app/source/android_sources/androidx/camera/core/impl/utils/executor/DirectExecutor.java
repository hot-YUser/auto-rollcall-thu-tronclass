package androidx.camera.core.impl.utils.executor;

import java.util.concurrent.Executor;
final class DirectExecutor implements Executor {
    private static volatile DirectExecutor sDirectExecutor;

    DirectExecutor() {
    }

    static Executor getInstance() {
        if (sDirectExecutor != null) {
            return sDirectExecutor;
        }
        synchronized (DirectExecutor.class) {
            if (sDirectExecutor == null) {
                sDirectExecutor = new DirectExecutor();
            }
        }
        return sDirectExecutor;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        runnable.run();
    }
}

