package androidx.camera.core.impl.utils.executor;

import android.os.Process;
import androidx.camera.core.impl.utils.executor.AudioExecutor;
import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
public class AudioExecutor implements Executor {
    private static volatile Executor sExecutor;
    private final ExecutorService mAudioService = Executors.newFixedThreadPool(2, new AnonymousClass1());
    class AnonymousClass1 implements ThreadFactory {
        private static final String THREAD_NAME_STEM = "CameraX-camerax_audio_%d";
        private final AtomicInteger mThreadId = new AtomicInteger(0);

        AnonymousClass1() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(final Runnable runnable) {
            Thread thread = new Thread(new Runnable() { // from class: androidx.camera.core.impl.utils.executor.AudioExecutor$1$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    AudioExecutor.AnonymousClass1.lambda$newThread$0(runnable);
                }
            });
            thread.setName(String.format(Locale.US, THREAD_NAME_STEM, Integer.valueOf(this.mThreadId.getAndIncrement())));
            return thread;
        }

        static /* synthetic */ void lambda$newThread$0(Runnable runnable) {
            Process.setThreadPriority(-16);
            runnable.run();
        }
    }

    static Executor getInstance() {
        if (sExecutor != null) {
            return sExecutor;
        }
        synchronized (AudioExecutor.class) {
            if (sExecutor == null) {
                sExecutor = new AudioExecutor();
            }
        }
        return sExecutor;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.mAudioService.execute(runnable);
    }
}

