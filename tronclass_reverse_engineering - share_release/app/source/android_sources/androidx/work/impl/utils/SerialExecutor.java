package androidx.work.impl.utils;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
public class SerialExecutor implements Executor {
    private volatile Runnable mActive;
    private final Executor mExecutor;
    private final ArrayDeque<Task> mTasks = new ArrayDeque<>();
    private final Object mLock = new Object();

    public SerialExecutor(Executor executor) {
        this.mExecutor = executor;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable command) {
        synchronized (this.mLock) {
            this.mTasks.add(new Task(this, command));
            if (this.mActive == null) {
                scheduleNext();
            }
        }
    }

    void scheduleNext() {
        synchronized (this.mLock) {
            Task taskPoll = this.mTasks.poll();
            this.mActive = taskPoll;
            if (taskPoll != null) {
                this.mExecutor.execute(this.mActive);
            }
        }
    }

    public boolean hasPendingTasks() {
        boolean z;
        synchronized (this.mLock) {
            z = !this.mTasks.isEmpty();
        }
        return z;
    }

    public Executor getDelegatedExecutor() {
        return this.mExecutor;
    }

    static class Task implements Runnable {
        final Runnable mRunnable;
        final SerialExecutor mSerialExecutor;

        Task(SerialExecutor serialExecutor, Runnable runnable) {
            this.mSerialExecutor = serialExecutor;
            this.mRunnable = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.mRunnable.run();
            } finally {
                this.mSerialExecutor.scheduleNext();
            }
        }
    }
}

