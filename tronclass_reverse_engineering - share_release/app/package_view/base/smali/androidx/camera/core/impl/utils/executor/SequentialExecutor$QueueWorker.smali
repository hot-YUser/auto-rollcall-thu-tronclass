.class final Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;
.super Ljava/lang/Object;
.source "SequentialExecutor.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/executor/SequentialExecutor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x10
    name = "QueueWorker"
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/executor/SequentialExecutor;)V
    .locals 0

    .line 169
    iput-object p1, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private workOnQueue()V
    .locals 7

    const/4 v0, 0x0

    move v1, v0

    .line 204
    :goto_0
    :try_start_0
    iget-object v2, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    iget-object v2, v2, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mQueue:Ljava/util/Deque;

    monitor-enter v2
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    if-nez v0, :cond_2

    .line 208
    :try_start_1
    iget-object v0, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    iget-object v0, v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunningState:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    sget-object v3, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;->RUNNING:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    if-ne v0, v3, :cond_1

    .line 210
    monitor-exit v2
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz v1, :cond_0

    .line 241
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Thread;->interrupt()V

    :cond_0
    return-void

    .line 215
    :cond_1
    :try_start_2
    iget-object v0, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    iget-wide v3, v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunCount:J

    const-wide/16 v5, 0x1

    add-long/2addr v3, v5

    iput-wide v3, v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunCount:J

    .line 216
    iget-object v0, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    sget-object v3, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;->RUNNING:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    iput-object v3, v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunningState:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    const/4 v0, 0x1

    .line 220
    :cond_2
    iget-object v3, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    iget-object v3, v3, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mQueue:Ljava/util/Deque;

    invoke-interface {v3}, Ljava/util/Deque;->poll()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/Runnable;

    if-nez v3, :cond_4

    .line 222
    iget-object v0, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    sget-object v3, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;->IDLE:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    iput-object v3, v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunningState:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    .line 223
    monitor-exit v2
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    if-eqz v1, :cond_3

    .line 241
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Thread;->interrupt()V

    :cond_3
    return-void

    .line 225
    :cond_4
    :try_start_3
    monitor-exit v2
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    .line 229
    :try_start_4
    invoke-static {}, Ljava/lang/Thread;->interrupted()Z

    move-result v2
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    or-int/2addr v1, v2

    .line 231
    :try_start_5
    invoke-interface {v3}, Ljava/lang/Runnable;->run()V
    :try_end_5
    .catch Ljava/lang/RuntimeException; {:try_start_5 .. :try_end_5} :catch_0
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    goto :goto_0

    :catch_0
    move-exception v2

    .line 233
    :try_start_6
    const-string v4, "SequentialExecutor"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "Exception while executing runnable "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v4, v3, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_1

    goto :goto_0

    :catchall_0
    move-exception v0

    .line 225
    :try_start_7
    monitor-exit v2
    :try_end_7
    .catchall {:try_start_7 .. :try_end_7} :catchall_0

    :try_start_8
    throw v0
    :try_end_8
    .catchall {:try_start_8 .. :try_end_8} :catchall_1

    :catchall_1
    move-exception v0

    if-eqz v1, :cond_5

    .line 241
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Thread;->interrupt()V

    .line 243
    :cond_5
    throw v0
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 173
    :try_start_0
    invoke-direct {p0}, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->workOnQueue()V
    :try_end_0
    .catch Ljava/lang/Error; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception v0

    .line 175
    iget-object v1, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    iget-object v1, v1, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mQueue:Ljava/util/Deque;

    monitor-enter v1

    .line 176
    :try_start_1
    iget-object v2, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$QueueWorker;->this$0:Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    sget-object v3, Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;->IDLE:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    iput-object v3, v2, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;->mWorkerRunningState:Landroidx/camera/core/impl/utils/executor/SequentialExecutor$WorkerRunningState;

    .line 177
    monitor-exit v1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 178
    throw v0

    :catchall_0
    move-exception v0

    .line 177
    :try_start_2
    monitor-exit v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v0
.end method
