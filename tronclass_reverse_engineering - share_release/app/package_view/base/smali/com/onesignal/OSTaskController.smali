.class Lcom/onesignal/OSTaskController;
.super Ljava/lang/Object;
.source "OSTaskController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSTaskController$PendingTaskRunnable;
    }
.end annotation


# static fields
.field static final OS_PENDING_EXECUTOR:Ljava/lang/String; = "OS_PENDING_EXECUTOR_"


# instance fields
.field private final lastTaskId:Ljava/util/concurrent/atomic/AtomicLong;

.field protected final logger:Lcom/onesignal/OSLogger;

.field private pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

.field private final taskQueueWaitingForInit:Ljava/util/Queue;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Queue<",
            "Ljava/lang/Runnable;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Lcom/onesignal/OSLogger;)V
    .locals 1

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 18
    new-instance v0, Ljava/util/concurrent/LinkedBlockingQueue;

    invoke-direct {v0}, Ljava/util/concurrent/LinkedBlockingQueue;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    .line 19
    new-instance v0, Ljava/util/concurrent/atomic/AtomicLong;

    invoke-direct {v0}, Ljava/util/concurrent/atomic/AtomicLong;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSTaskController;->lastTaskId:Ljava/util/concurrent/atomic/AtomicLong;

    .line 25
    iput-object p1, p0, Lcom/onesignal/OSTaskController;->logger:Lcom/onesignal/OSLogger;

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/OSTaskController;J)V
    .locals 0

    .line 13
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSTaskController;->onTaskRan(J)V

    return-void
.end method

.method private addTaskToQueue(Lcom/onesignal/OSTaskController$PendingTaskRunnable;)V
    .locals 7

    const-string v0, "Executor is shutdown, running task manually with ID: "

    const-string v1, "Executor is still running, add to the executor with ID: "

    const-string v2, "Adding a task to the pending queue with ID: "

    .line 51
    iget-object v3, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    monitor-enter v3

    .line 52
    :try_start_0
    iget-object v4, p0, Lcom/onesignal/OSTaskController;->lastTaskId:Ljava/util/concurrent/atomic/AtomicLong;

    invoke-virtual {v4}, Ljava/util/concurrent/atomic/AtomicLong;->incrementAndGet()J

    move-result-wide v4

    invoke-static {p1, v4, v5}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;->access$002(Lcom/onesignal/OSTaskController$PendingTaskRunnable;J)J

    .line 54
    iget-object v4, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    if-nez v4, :cond_0

    .line 55
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;->access$000(Lcom/onesignal/OSTaskController$PendingTaskRunnable;)J

    move-result-wide v4

    invoke-virtual {v1, v4, v5}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 57
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    invoke-interface {v0, p1}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 58
    :cond_0
    invoke-interface {v4}, Ljava/util/concurrent/ExecutorService;->isShutdown()Z

    move-result v2

    if-nez v2, :cond_1

    .line 59
    iget-object v2, p0, Lcom/onesignal/OSTaskController;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;->access$000(Lcom/onesignal/OSTaskController$PendingTaskRunnable;)J

    move-result-wide v5

    invoke-virtual {v4, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v2, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 62
    :try_start_1
    iget-object v1, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    invoke-interface {v1, p1}, Ljava/util/concurrent/ExecutorService;->submit(Ljava/lang/Runnable;)Ljava/util/concurrent/Future;
    :try_end_1
    .catch Ljava/util/concurrent/RejectedExecutionException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 64
    :try_start_2
    iget-object v2, p0, Lcom/onesignal/OSTaskController;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;->access$000(Lcom/onesignal/OSTaskController$PendingTaskRunnable;)J

    move-result-wide v5

    invoke-virtual {v4, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v2, v0}, Lcom/onesignal/OSLogger;->info(Ljava/lang/String;)V

    .line 69
    invoke-virtual {p1}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;->run()V

    .line 70
    invoke-virtual {v1}, Ljava/util/concurrent/RejectedExecutionException;->printStackTrace()V

    .line 73
    :cond_1
    :goto_0
    monitor-exit v3

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v3
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw p1
.end method

.method private onTaskRan(J)V
    .locals 2

    .line 101
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->lastTaskId:Ljava/util/concurrent/atomic/AtomicLong;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicLong;->get()J

    move-result-wide v0

    cmp-long p1, v0, p1

    if-nez p1, :cond_0

    .line 102
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "Last Pending Task has ran, shutting down"

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 103
    iget-object p1, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    invoke-interface {p1}, Ljava/util/concurrent/ExecutorService;->shutdown()V

    :cond_0
    return-void
.end method


# virtual methods
.method addTaskToQueue(Ljava/lang/Runnable;)V
    .locals 1

    .line 47
    new-instance v0, Lcom/onesignal/OSTaskController$PendingTaskRunnable;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSTaskController$PendingTaskRunnable;-><init>(Lcom/onesignal/OSTaskController;Ljava/lang/Runnable;)V

    invoke-direct {p0, v0}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Lcom/onesignal/OSTaskController$PendingTaskRunnable;)V

    return-void
.end method

.method getTaskQueueWaitingForInit()Ljava/util/Queue;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Queue<",
            "Ljava/lang/Runnable;",
            ">;"
        }
    .end annotation

    .line 108
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    monitor-enter v0

    .line 109
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 110
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method shouldRunTaskThroughQueue()Z
    .locals 2

    .line 30
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Thread;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "OS_PENDING_EXECUTOR_"

    invoke-virtual {v0, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    return v1

    .line 33
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->isInitDone()Z

    move-result v0

    if-eqz v0, :cond_1

    iget-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    if-nez v0, :cond_1

    return v1

    .line 39
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->isInitDone()Z

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_2

    iget-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    if-nez v0, :cond_2

    return v1

    .line 43
    :cond_2
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    invoke-interface {v0}, Ljava/util/concurrent/ExecutorService;->isShutdown()Z

    move-result v0

    xor-int/2addr v0, v1

    return v0
.end method

.method shutdownNow()V
    .locals 1

    .line 114
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    if-eqz v0, :cond_0

    .line 115
    invoke-interface {v0}, Ljava/util/concurrent/ExecutorService;->shutdownNow()Ljava/util/List;

    :cond_0
    return-void
.end method

.method startPendingTasks()V
    .locals 4

    const-string v0, "startPendingTasks with task queue quantity: "

    .line 81
    iget-object v1, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    monitor-enter v1

    .line 82
    :try_start_0
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    invoke-interface {v0}, Ljava/util/Queue;->size()I

    move-result v0

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 83
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    invoke-interface {v0}, Ljava/util/Queue;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 84
    new-instance v0, Lcom/onesignal/OSTaskController$1;

    invoke-direct {v0, p0}, Lcom/onesignal/OSTaskController$1;-><init>(Lcom/onesignal/OSTaskController;)V

    invoke-static {v0}, Ljava/util/concurrent/Executors;->newSingleThreadExecutor(Ljava/util/concurrent/ThreadFactory;)Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    .line 93
    :goto_0
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    invoke-interface {v0}, Ljava/util/Queue;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 94
    iget-object v0, p0, Lcom/onesignal/OSTaskController;->pendingTaskExecutor:Ljava/util/concurrent/ExecutorService;

    iget-object v2, p0, Lcom/onesignal/OSTaskController;->taskQueueWaitingForInit:Ljava/util/Queue;

    invoke-interface {v2}, Ljava/util/Queue;->poll()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Runnable;

    invoke-interface {v0, v2}, Ljava/util/concurrent/ExecutorService;->submit(Ljava/lang/Runnable;)Ljava/util/concurrent/Future;

    goto :goto_0

    .line 97
    :cond_0
    monitor-exit v1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method
