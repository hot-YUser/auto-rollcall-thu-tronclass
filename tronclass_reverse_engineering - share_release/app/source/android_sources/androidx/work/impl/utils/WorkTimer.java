package androidx.work.impl.utils;

import androidx.work.Logger;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
public class WorkTimer {
    private static final String TAG = Logger.tagWithPrefix("WorkTimer");
    private final ThreadFactory mBackgroundThreadFactory;
    private final ScheduledExecutorService mExecutorService;
    final Map<String, TimeLimitExceededListener> mListeners;
    final Object mLock;
    final Map<String, WorkTimerRunnable> mTimerMap;

    public interface TimeLimitExceededListener {
        void onTimeLimitExceeded(String workSpecId);
    }

    public WorkTimer() {
        ThreadFactory threadFactory = new ThreadFactory() { // from class: androidx.work.impl.utils.WorkTimer.1
            private int mThreadsCreated = 0;

            @Override // java.util.concurrent.ThreadFactory
            public Thread newThread(Runnable r) {
                Thread threadNewThread = Executors.defaultThreadFactory().newThread(r);
                threadNewThread.setName("WorkManager-WorkTimer-thread-" + this.mThreadsCreated);
                this.mThreadsCreated++;
                return threadNewThread;
            }
        };
        this.mBackgroundThreadFactory = threadFactory;
        this.mTimerMap = new HashMap();
        this.mListeners = new HashMap();
        this.mLock = new Object();
        this.mExecutorService = Executors.newSingleThreadScheduledExecutor(threadFactory);
    }

    public void startTimer(final String workSpecId, long processingTimeMillis, TimeLimitExceededListener listener) {
        synchronized (this.mLock) {
            Logger.get().debug(TAG, String.format("Starting timer for %s", workSpecId), new Throwable[0]);
            stopTimer(workSpecId);
            WorkTimerRunnable workTimerRunnable = new WorkTimerRunnable(this, workSpecId);
            this.mTimerMap.put(workSpecId, workTimerRunnable);
            this.mListeners.put(workSpecId, listener);
            this.mExecutorService.schedule(workTimerRunnable, processingTimeMillis, TimeUnit.MILLISECONDS);
        }
    }

    public void stopTimer(final String workSpecId) {
        synchronized (this.mLock) {
            if (this.mTimerMap.remove(workSpecId) != null) {
                Logger.get().debug(TAG, String.format("Stopping timer for %s", workSpecId), new Throwable[0]);
                this.mListeners.remove(workSpecId);
            }
        }
    }

    public void onDestroy() {
        if (this.mExecutorService.isShutdown()) {
            return;
        }
        this.mExecutorService.shutdownNow();
    }

    public synchronized Map<String, WorkTimerRunnable> getTimerMap() {
        return this.mTimerMap;
    }

    public synchronized Map<String, TimeLimitExceededListener> getListeners() {
        return this.mListeners;
    }

    public ScheduledExecutorService getExecutorService() {
        return this.mExecutorService;
    }

    public static class WorkTimerRunnable implements Runnable {
        static final String TAG = "WrkTimerRunnable";
        private final String mWorkSpecId;
        private final WorkTimer mWorkTimer;

        WorkTimerRunnable(WorkTimer workTimer, String workSpecId) {
            this.mWorkTimer = workTimer;
            this.mWorkSpecId = workSpecId;
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (this.mWorkTimer.mLock) {
                if (this.mWorkTimer.mTimerMap.remove(this.mWorkSpecId) != null) {
                    TimeLimitExceededListener timeLimitExceededListenerRemove = this.mWorkTimer.mListeners.remove(this.mWorkSpecId);
                    if (timeLimitExceededListenerRemove != null) {
                        timeLimitExceededListenerRemove.onTimeLimitExceeded(this.mWorkSpecId);
                    }
                } else {
                    Logger.get().debug(TAG, String.format("Timer with %s is already marked as complete.", this.mWorkSpecId), new Throwable[0]);
                }
            }
        }
    }
}

