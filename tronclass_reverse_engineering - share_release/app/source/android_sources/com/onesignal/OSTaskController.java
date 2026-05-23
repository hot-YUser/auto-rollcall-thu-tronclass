package com.onesignal;

import com.onesignal.OneSignal;
import java.util.Queue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicLong;
class OSTaskController {
    static final String OS_PENDING_EXECUTOR = "OS_PENDING_EXECUTOR_";
    protected final OSLogger logger;
    private ExecutorService pendingTaskExecutor;
    private final Queue<Runnable> taskQueueWaitingForInit = new LinkedBlockingQueue();
    private final AtomicLong lastTaskId = new AtomicLong();

    OSTaskController(OSLogger oSLogger) {
        this.logger = oSLogger;
    }

    boolean shouldRunTaskThroughQueue() {
        if (Thread.currentThread().getName().contains(OS_PENDING_EXECUTOR)) {
            return false;
        }
        if (OneSignal.isInitDone() && this.pendingTaskExecutor == null) {
            return false;
        }
        if (OneSignal.isInitDone() || this.pendingTaskExecutor != null) {
            return !this.pendingTaskExecutor.isShutdown();
        }
        return true;
    }

    void addTaskToQueue(Runnable runnable) {
        addTaskToQueue(new PendingTaskRunnable(this, runnable));
    }

    private void addTaskToQueue(PendingTaskRunnable pendingTaskRunnable) {
        synchronized (this.taskQueueWaitingForInit) {
            pendingTaskRunnable.taskId = this.lastTaskId.incrementAndGet();
            ExecutorService executorService = this.pendingTaskExecutor;
            if (executorService != null) {
                if (!executorService.isShutdown()) {
                    this.logger.debug("Executor is still running, add to the executor with ID: " + pendingTaskRunnable.taskId);
                    try {
                        this.pendingTaskExecutor.submit(pendingTaskRunnable);
                    } catch (RejectedExecutionException e) {
                        this.logger.info("Executor is shutdown, running task manually with ID: " + pendingTaskRunnable.taskId);
                        pendingTaskRunnable.run();
                        e.printStackTrace();
                    }
                }
            }
            this.logger.debug("Adding a task to the pending queue with ID: " + pendingTaskRunnable.taskId);
            this.taskQueueWaitingForInit.add(pendingTaskRunnable);
        }
    }

    void startPendingTasks() {
        synchronized (this.taskQueueWaitingForInit) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "startPendingTasks with task queue quantity: " + this.taskQueueWaitingForInit.size());
            if (!this.taskQueueWaitingForInit.isEmpty()) {
                this.pendingTaskExecutor = Executors.newSingleThreadExecutor(new ThreadFactory() { // from class: com.onesignal.OSTaskController.1
                    @Override // java.util.concurrent.ThreadFactory
                    public Thread newThread(Runnable runnable) {
                        Thread thread = new Thread(runnable);
                        thread.setName(OSTaskController.OS_PENDING_EXECUTOR + thread.getId());
                        return thread;
                    }
                });
                while (!this.taskQueueWaitingForInit.isEmpty()) {
                    this.pendingTaskExecutor.submit(this.taskQueueWaitingForInit.poll());
                }
            }
        }
    }
    public void onTaskRan(long j) {
        if (this.lastTaskId.get() == j) {
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Last Pending Task has ran, shutting down");
            this.pendingTaskExecutor.shutdown();
        }
    }

    Queue<Runnable> getTaskQueueWaitingForInit() {
        Queue<Runnable> queue;
        synchronized (this.taskQueueWaitingForInit) {
            queue = this.taskQueueWaitingForInit;
        }
        return queue;
    }

    void shutdownNow() {
        ExecutorService executorService = this.pendingTaskExecutor;
        if (executorService != null) {
            executorService.shutdownNow();
        }
    }

    private static class PendingTaskRunnable implements Runnable {
        private OSTaskController controller;
        private Runnable innerTask;
        private long taskId;

        PendingTaskRunnable(OSTaskController oSTaskController, Runnable runnable) {
            this.controller = oSTaskController;
            this.innerTask = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.innerTask.run();
            this.controller.onTaskRan(this.taskId);
        }

        public String toString() {
            return "PendingTaskRunnable{innerTask=" + this.innerTask + ", taskId=" + this.taskId + '}';
        }
    }
}

