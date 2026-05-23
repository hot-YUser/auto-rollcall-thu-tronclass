package androidx.work.impl.utils;

import android.content.Context;
import androidx.core.os.BuildCompat;
import androidx.work.ForegroundInfo;
import androidx.work.ForegroundUpdater;
import androidx.work.ListenableWorker;
import androidx.work.Logger;
import androidx.work.impl.model.WorkSpec;
import androidx.work.impl.utils.futures.SettableFuture;
import androidx.work.impl.utils.taskexecutor.TaskExecutor;
import com.google.common.util.concurrent.ListenableFuture;
public class WorkForegroundRunnable implements Runnable {
    static final String TAG = Logger.tagWithPrefix("WorkForegroundRunnable");
    final Context mContext;
    final ForegroundUpdater mForegroundUpdater;
    final SettableFuture<Void> mFuture = SettableFuture.create();
    final TaskExecutor mTaskExecutor;
    final WorkSpec mWorkSpec;
    final ListenableWorker mWorker;

    public WorkForegroundRunnable(Context context, WorkSpec workSpec, ListenableWorker worker, ForegroundUpdater foregroundUpdater, TaskExecutor taskExecutor) {
        this.mContext = context;
        this.mWorkSpec = workSpec;
        this.mWorker = worker;
        this.mForegroundUpdater = foregroundUpdater;
        this.mTaskExecutor = taskExecutor;
    }

    public ListenableFuture<Void> getFuture() {
        return this.mFuture;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (!this.mWorkSpec.expedited || BuildCompat.isAtLeastS()) {
            this.mFuture.set(null);
            return;
        }
        final SettableFuture settableFutureCreate = SettableFuture.create();
        this.mTaskExecutor.getMainThreadExecutor().execute(new Runnable() { // from class: androidx.work.impl.utils.WorkForegroundRunnable.1
            @Override // java.lang.Runnable
            public void run() {
                settableFutureCreate.setFuture(WorkForegroundRunnable.this.mWorker.getForegroundInfoAsync());
            }
        });
        settableFutureCreate.addListener(new Runnable() { // from class: androidx.work.impl.utils.WorkForegroundRunnable.2
            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // java.lang.Runnable
            public void run() {
                try {
                    ForegroundInfo foregroundInfo = (ForegroundInfo) settableFutureCreate.get();
                    if (foregroundInfo == null) {
                        throw new IllegalStateException(String.format("Worker was marked important (%s) but did not provide ForegroundInfo", WorkForegroundRunnable.this.mWorkSpec.workerClassName));
                    }
                    Logger.get().debug(WorkForegroundRunnable.TAG, String.format("Updating notification for %s", WorkForegroundRunnable.this.mWorkSpec.workerClassName), new Throwable[0]);
                    WorkForegroundRunnable.this.mWorker.setRunInForeground(true);
                    WorkForegroundRunnable.this.mFuture.setFuture(WorkForegroundRunnable.this.mForegroundUpdater.setForegroundAsync(WorkForegroundRunnable.this.mContext, WorkForegroundRunnable.this.mWorker.getId(), foregroundInfo));
                } catch (Throwable th) {
                    WorkForegroundRunnable.this.mFuture.setException(th);
                }
            }
        }, this.mTaskExecutor.getMainThreadExecutor());
    }
}

