.class final Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;
.super Landroidx/camera/camera2/internal/CameraDeviceId;
.source "AutoValue_CameraDeviceId.java"


# instance fields
.field private final brand:Ljava/lang/String;

.field private final cameraId:Ljava/lang/String;

.field private final device:Ljava/lang/String;

.field private final model:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 22
    invoke-direct {p0}, Landroidx/camera/camera2/internal/CameraDeviceId;-><init>()V

    if-eqz p1, :cond_3

    .line 26
    iput-object p1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->brand:Ljava/lang/String;

    if-eqz p2, :cond_2

    .line 30
    iput-object p2, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->device:Ljava/lang/String;

    if-eqz p3, :cond_1

    .line 34
    iput-object p3, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->model:Ljava/lang/String;

    if-eqz p4, :cond_0

    .line 38
    iput-object p4, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->cameraId:Ljava/lang/String;

    return-void

    .line 36
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null cameraId"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 32
    :cond_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null model"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 28
    :cond_2
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null device"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 24
    :cond_3
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null brand"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 80
    :cond_0
    instance-of v1, p1, Landroidx/camera/camera2/internal/CameraDeviceId;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 81
    check-cast p1, Landroidx/camera/camera2/internal/CameraDeviceId;

    .line 82
    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->brand:Ljava/lang/String;

    invoke-virtual {p1}, Landroidx/camera/camera2/internal/CameraDeviceId;->getBrand()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->device:Ljava/lang/String;

    .line 83
    invoke-virtual {p1}, Landroidx/camera/camera2/internal/CameraDeviceId;->getDevice()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->model:Ljava/lang/String;

    .line 84
    invoke-virtual {p1}, Landroidx/camera/camera2/internal/CameraDeviceId;->getModel()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->cameraId:Ljava/lang/String;

    .line 85
    invoke-virtual {p1}, Landroidx/camera/camera2/internal/CameraDeviceId;->getCameraId()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

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

.method public getBrand()Ljava/lang/String;
    .locals 1

    .line 44
    iget-object v0, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->brand:Ljava/lang/String;

    return-object v0
.end method

.method public getCameraId()Ljava/lang/String;
    .locals 1

    .line 62
    iget-object v0, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->cameraId:Ljava/lang/String;

    return-object v0
.end method

.method public getDevice()Ljava/lang/String;
    .locals 1

    .line 50
    iget-object v0, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->device:Ljava/lang/String;

    return-object v0
.end method

.method public getModel()Ljava/lang/String;
    .locals 1

    .line 56
    iget-object v0, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->model:Ljava/lang/String;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    .line 94
    iget-object v0, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->brand:Ljava/lang/String;

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 96
    iget-object v2, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->device:Ljava/lang/String;

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 98
    iget-object v2, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->model:Ljava/lang/String;

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 100
    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->cameraId:Ljava/lang/String;

    invoke-virtual {v1}, Ljava/lang/String;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 67
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CameraDeviceId{brand="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->brand:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", device="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->device:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", model="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->model:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", cameraId="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;->cameraId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
