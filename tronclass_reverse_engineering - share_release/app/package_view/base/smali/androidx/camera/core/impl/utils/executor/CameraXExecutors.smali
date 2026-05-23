.class public final Landroidx/camera/core/impl/utils/executor/CameraXExecutors;
.super Ljava/lang/Object;
.source "CameraXExecutors.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static audioExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 53
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/AudioExecutor;->getInstance()Ljava/util/concurrent/Executor;

    move-result-object v0

    return-object v0
.end method

.method public static directExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 59
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/DirectExecutor;->getInstance()Ljava/util/concurrent/Executor;

    move-result-object v0

    return-object v0
.end method

.method public static highPriorityExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 110
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor;->getInstance()Ljava/util/concurrent/Executor;

    move-result-object v0

    return-object v0
.end method

.method public static ioExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 47
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/IoExecutor;->getInstance()Ljava/util/concurrent/Executor;

    move-result-object v0

    return-object v0
.end method

.method public static isSequentialExecutor(Ljava/util/concurrent/Executor;)Z
    .locals 0

    .line 81
    instance-of p0, p0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    return p0
.end method

.method public static mainThreadExecutor()Ljava/util/concurrent/ScheduledExecutorService;
    .locals 1

    .line 41
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->getInstance()Ljava/util/concurrent/ScheduledExecutorService;

    move-result-object v0

    return-object v0
.end method

.method public static myLooperExecutor()Ljava/util/concurrent/ScheduledExecutorService;
    .locals 1

    .line 92
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;->currentThreadExecutor()Ljava/util/concurrent/ScheduledExecutorService;

    move-result-object v0

    return-object v0
.end method

.method public static newHandlerExecutor(Landroid/os/Handler;)Ljava/util/concurrent/ScheduledExecutorService;
    .locals 1

    .line 102
    new-instance v0, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;

    invoke-direct {v0, p0}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;-><init>(Landroid/os/Handler;)V

    return-object v0
.end method

.method public static newSequentialExecutor(Ljava/util/concurrent/Executor;)Ljava/util/concurrent/Executor;
    .locals 1

    .line 73
    new-instance v0, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;

    invoke-direct {v0, p0}, Landroidx/camera/core/impl/utils/executor/SequentialExecutor;-><init>(Ljava/util/concurrent/Executor;)V

    return-object v0
.end method
