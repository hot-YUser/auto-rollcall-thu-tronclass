.class final Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;
.super Landroidx/camera/core/impl/CameraThreadConfig;
.source "AutoValue_CameraThreadConfig.java"


# instance fields
.field private final cameraExecutor:Ljava/util/concurrent/Executor;

.field private final schedulerHandler:Landroid/os/Handler;


# direct methods
.method constructor <init>(Ljava/util/concurrent/Executor;Landroid/os/Handler;)V
    .locals 0

    .line 18
    invoke-direct {p0}, Landroidx/camera/core/impl/CameraThreadConfig;-><init>()V

    if-eqz p1, :cond_1

    .line 22
    iput-object p1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->cameraExecutor:Ljava/util/concurrent/Executor;

    if-eqz p2, :cond_0

    .line 26
    iput-object p2, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->schedulerHandler:Landroid/os/Handler;

    return-void

    .line 24
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null schedulerHandler"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 20
    :cond_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null cameraExecutor"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 54
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/impl/CameraThreadConfig;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 55
    check-cast p1, Landroidx/camera/core/impl/CameraThreadConfig;

    .line 56
    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->cameraExecutor:Ljava/util/concurrent/Executor;

    invoke-virtual {p1}, Landroidx/camera/core/impl/CameraThreadConfig;->getCameraExecutor()Ljava/util/concurrent/Executor;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->schedulerHandler:Landroid/os/Handler;

    .line 57
    invoke-virtual {p1}, Landroidx/camera/core/impl/CameraThreadConfig;->getSchedulerHandler()Landroid/os/Handler;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method public getCameraExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 32
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->cameraExecutor:Ljava/util/concurrent/Executor;

    return-object v0
.end method

.method public getSchedulerHandler()Landroid/os/Handler;
    .locals 1

    .line 38
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->schedulerHandler:Landroid/os/Handler;

    return-object v0
.end method

.method public hashCode()I
    .locals 2

    .line 66
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->cameraExecutor:Ljava/util/concurrent/Executor;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 68
    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->schedulerHandler:Landroid/os/Handler;

    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 43
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CameraThreadConfig{cameraExecutor="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->cameraExecutor:Ljava/util/concurrent/Executor;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", schedulerHandler="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_CameraThreadConfig;->schedulerHandler:Landroid/os/Handler;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
