.class final Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;
.super Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;
.source "AutoValue_LifecycleCameraRepository_Key.java"


# instance fields
.field private final cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

.field private final lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;


# direct methods
.method constructor <init>(Landroidx/lifecycle/LifecycleOwner;Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;)V
    .locals 0

    .line 18
    invoke-direct {p0}, Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;-><init>()V

    if-eqz p1, :cond_1

    .line 22
    iput-object p1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;

    if-eqz p2, :cond_0

    .line 26
    iput-object p2, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    return-void

    .line 24
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null cameraId"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 20
    :cond_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null lifecycleOwner"

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
    instance-of v1, p1, Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 55
    check-cast p1, Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;

    .line 56
    iget-object v1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;

    invoke-virtual {p1}, Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;->getLifecycleOwner()Landroidx/lifecycle/LifecycleOwner;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    .line 57
    invoke-virtual {p1}, Landroidx/camera/lifecycle/LifecycleCameraRepository$Key;->getCameraId()Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    move-result-object p1

    invoke-virtual {v1, p1}, Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;->equals(Ljava/lang/Object;)Z

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

.method public getCameraId()Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;
    .locals 1

    .line 38
    iget-object v0, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    return-object v0
.end method

.method public getLifecycleOwner()Landroidx/lifecycle/LifecycleOwner;
    .locals 1

    .line 32
    iget-object v0, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;

    return-object v0
.end method

.method public hashCode()I
    .locals 2

    .line 66
    iget-object v0, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 68
    iget-object v1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    invoke-virtual {v1}, Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 43
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Key{lifecycleOwner="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->lifecycleOwner:Landroidx/lifecycle/LifecycleOwner;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", cameraId="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/lifecycle/AutoValue_LifecycleCameraRepository_Key;->cameraId:Landroidx/camera/core/internal/CameraUseCaseAdapter$CameraId;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
