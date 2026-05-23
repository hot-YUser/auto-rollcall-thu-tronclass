.class public abstract Landroidx/camera/core/impl/CameraThreadConfig;
.super Ljava/lang/Object;
.source "CameraThreadConfig.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 33
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(Ljava/util/concurrent/Executor;Landroid/os/Handler;)Landroidx/camera/core/impl/CameraThreadConfig;
    .locals 1

    .line 48
    new-instance v0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;-><init>(Ljava/util/concurrent/Executor;Landroid/os/Handler;)V

    return-object v0
.end method


# virtual methods
.method public abstract getCameraExecutor()Ljava/util/concurrent/Executor;
.end method

.method public abstract getSchedulerHandler()Landroid/os/Handler;
.end method
