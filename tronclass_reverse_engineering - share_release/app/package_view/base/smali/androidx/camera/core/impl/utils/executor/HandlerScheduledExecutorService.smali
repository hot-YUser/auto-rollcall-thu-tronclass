.class final Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;
.super Ljava/util/concurrent/AbstractExecutorService;
.source "HandlerScheduledExecutorService.java"

# interfaces
.implements Ljava/util/concurrent/ScheduledExecutorService;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$HandlerScheduledFuture;
    }
.end annotation


# static fields
.field private static sThreadLocalInstance:Ljava/lang/ThreadLocal;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ThreadLocal<",
            "Ljava/util/concurrent/ScheduledExecutorService;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final mHandler:Landroid/os/Handler;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 53
    new-instance v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$1;

    invoke-direct {v0}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$1;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->sThreadLocalInstance:Ljava/lang/ThreadLocal;

    return-void
.end method

.method constructor <init>(Landroid/os/Handler;)V
    .locals 0

    .line 70
    invoke-direct {p0}, Ljava/util/concurrent/AbstractExecutorService;-><init>()V

    .line 71
    iput-object p1, p0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->mHandler:Landroid/os/Handler;

    return-void
.end method

.method private createPostFailedException()Ljava/util/concurrent/RejectedExecutionException;
    .locals 3

    .line 184
    new-instance v0, Ljava/util/concurrent/RejectedExecutionException;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v2, p0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->mHandler:Landroid/os/Handler;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " is shutting down"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/concurrent/RejectedExecutionException;-><init>(Ljava/lang/String;)V

    return-object v0
.end method

.method static currentThreadExecutor()Ljava/util/concurrent/ScheduledExecutorService;
    .locals 3

    .line 78
    sget-object v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->sThreadLocalInstance:Ljava/lang/ThreadLocal;

    invoke-virtual {v0}, Ljava/lang/ThreadLocal;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/concurrent/ScheduledExecutorService;

    if-nez v0, :cond_1

    .line 80
    invoke-static {}, Landroid/os/Looper;->myLooper()Landroid/os/Looper;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 85
    new-instance v1, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;

    new-instance v2, Landroid/os/Handler;

    invoke-direct {v2, v0}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    invoke-direct {v1, v2}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;-><init>(Landroid/os/Handler;)V

    .line 86
    sget-object v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->sThreadLocalInstance:Ljava/lang/ThreadLocal;

    invoke-virtual {v0, v1}, Ljava/lang/ThreadLocal;->set(Ljava/lang/Object;)V

    move-object v0, v1

    goto :goto_0

    .line 82
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "Current thread has no looper!"

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0

    :cond_1
    :goto_0
    return-object v0
.end method


# virtual methods
.method public awaitTermination(JLjava/util/concurrent/TimeUnit;)Z
    .locals 0

    .line 171
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    .line 172
    const-string p2, "HandlerScheduledExecutorService cannot be shut down. Use Looper.quitSafely()."

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public execute(Ljava/lang/Runnable;)V
    .locals 1

    .line 178
    iget-object v0, p0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->mHandler:Landroid/os/Handler;

    invoke-virtual {v0, p1}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    move-result p1

    if-eqz p1, :cond_0

    return-void

    .line 179
    :cond_0
    invoke-direct {p0}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->createPostFailedException()Ljava/util/concurrent/RejectedExecutionException;

    move-result-object p1

    throw p1
.end method

.method public isShutdown()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public isTerminated()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public schedule(Ljava/lang/Runnable;JLjava/util/concurrent/TimeUnit;)Ljava/util/concurrent/ScheduledFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Runnable;",
            "J",
            "Ljava/util/concurrent/TimeUnit;",
            ")",
            "Ljava/util/concurrent/ScheduledFuture<",
            "*>;"
        }
    .end annotation

    .line 97
    new-instance v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$2;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$2;-><init>(Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;Ljava/lang/Runnable;)V

    .line 104
    invoke-virtual {p0, v0, p2, p3, p4}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->schedule(Ljava/util/concurrent/Callable;JLjava/util/concurrent/TimeUnit;)Ljava/util/concurrent/ScheduledFuture;

    move-result-object p1

    return-object p1
.end method

.method public schedule(Ljava/util/concurrent/Callable;JLjava/util/concurrent/TimeUnit;)Ljava/util/concurrent/ScheduledFuture;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<V:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/util/concurrent/Callable<",
            "TV;>;J",
            "Ljava/util/concurrent/TimeUnit;",
            ")",
            "Ljava/util/concurrent/ScheduledFuture<",
            "TV;>;"
        }
    .end annotation

    .line 113
    invoke-static {}, Landroid/os/SystemClock;->uptimeMillis()J

    move-result-wide v0

    sget-object v2, Ljava/util/concurrent/TimeUnit;->MILLISECONDS:Ljava/util/concurrent/TimeUnit;

    invoke-virtual {v2, p2, p3, p4}, Ljava/util/concurrent/TimeUnit;->convert(JLjava/util/concurrent/TimeUnit;)J

    move-result-wide p2

    add-long/2addr v0, p2

    .line 114
    new-instance p2, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$HandlerScheduledFuture;

    iget-object p3, p0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->mHandler:Landroid/os/Handler;

    invoke-direct {p2, p3, v0, v1, p1}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService$HandlerScheduledFuture;-><init>(Landroid/os/Handler;JLjava/util/concurrent/Callable;)V

    .line 116
    iget-object p1, p0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->mHandler:Landroid/os/Handler;

    invoke-virtual {p1, p2, v0, v1}, Landroid/os/Handler;->postAtTime(Ljava/lang/Runnable;J)Z

    move-result p1

    if-eqz p1, :cond_0

    return-object p2

    .line 120
    :cond_0
    invoke-direct {p0}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->createPostFailedException()Ljava/util/concurrent/RejectedExecutionException;

    move-result-object p1

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedScheduledFuture(Ljava/lang/Throwable;)Ljava/util/concurrent/ScheduledFuture;

    move-result-object p1

    return-object p1
.end method

.method public scheduleAtFixedRate(Ljava/lang/Runnable;JJLjava/util/concurrent/TimeUnit;)Ljava/util/concurrent/ScheduledFuture;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Runnable;",
            "JJ",
            "Ljava/util/concurrent/TimeUnit;",
            ")",
            "Ljava/util/concurrent/ScheduledFuture<",
            "*>;"
        }
    .end annotation

    .line 130
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    .line 131
    const-string p2, "HandlerScheduledExecutorService does not yet support fixed-rate scheduling."

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public scheduleWithFixedDelay(Ljava/lang/Runnable;JJLjava/util/concurrent/TimeUnit;)Ljava/util/concurrent/ScheduledFuture;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Runnable;",
            "JJ",
            "Ljava/util/concurrent/TimeUnit;",
            ")",
            "Ljava/util/concurrent/ScheduledFuture<",
            "*>;"
        }
    .end annotation

    .line 139
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    .line 140
    const-string p2, "HandlerScheduledExecutorService does not yet support fixed-delay scheduling."

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public shutdown()V
    .locals 2

    .line 146
    new-instance v0, Ljava/lang/UnsupportedOperationException;

    .line 147
    const-string v1, "HandlerScheduledExecutorService cannot be shut down. Use Looper.quitSafely()."

    invoke-direct {v0, v1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public shutdownNow()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Runnable;",
            ">;"
        }
    .end annotation

    .line 154
    new-instance v0, Ljava/lang/UnsupportedOperationException;

    .line 155
    const-string v1, "HandlerScheduledExecutorService cannot be shut down. Use Looper.quitSafely()."

    invoke-direct {v0, v1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
