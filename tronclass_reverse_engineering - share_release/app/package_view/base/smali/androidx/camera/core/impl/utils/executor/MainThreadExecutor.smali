.class final Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;
.super Ljava/lang/Object;
.source "MainThreadExecutor.java"


# static fields
.field private static volatile sInstance:Ljava/util/concurrent/ScheduledExecutorService;


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static getInstance()Ljava/util/concurrent/ScheduledExecutorService;
    .locals 4

    .line 42
    sget-object v0, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->sInstance:Ljava/util/concurrent/ScheduledExecutorService;

    if-eqz v0, :cond_0

    .line 43
    sget-object v0, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->sInstance:Ljava/util/concurrent/ScheduledExecutorService;

    return-object v0

    .line 45
    :cond_0
    const-class v0, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;

    monitor-enter v0

    .line 46
    :try_start_0
    sget-object v1, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->sInstance:Ljava/util/concurrent/ScheduledExecutorService;

    if-nez v1, :cond_1

    .line 47
    new-instance v1, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;

    new-instance v2, Landroid/os/Handler;

    .line 48
    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v3

    invoke-direct {v2, v3}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    invoke-direct {v1, v2}, Landroidx/camera/core/impl/utils/executor/HandlerScheduledExecutorService;-><init>(Landroid/os/Handler;)V

    sput-object v1, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->sInstance:Ljava/util/concurrent/ScheduledExecutorService;

    .line 50
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 52
    sget-object v0, Landroidx/camera/core/impl/utils/executor/MainThreadExecutor;->sInstance:Ljava/util/concurrent/ScheduledExecutorService;

    return-object v0

    :catchall_0
    move-exception v1

    .line 50
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method
