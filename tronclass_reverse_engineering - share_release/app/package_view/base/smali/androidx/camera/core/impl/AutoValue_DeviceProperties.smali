.class final Landroidx/camera/core/impl/AutoValue_DeviceProperties;
.super Landroidx/camera/core/impl/DeviceProperties;
.source "AutoValue_DeviceProperties.java"


# instance fields
.field private final manufacturer:Ljava/lang/String;

.field private final model:Ljava/lang/String;

.field private final sdkVersion:I


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;I)V
    .locals 0

    .line 19
    invoke-direct {p0}, Landroidx/camera/core/impl/DeviceProperties;-><init>()V

    if-eqz p1, :cond_1

    .line 23
    iput-object p1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->manufacturer:Ljava/lang/String;

    if-eqz p2, :cond_0

    .line 27
    iput-object p2, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->model:Ljava/lang/String;

    .line 28
    iput p3, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->sdkVersion:I

    return-void

    .line 25
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null model"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 21
    :cond_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null manufacturer"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 62
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/impl/DeviceProperties;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 63
    check-cast p1, Landroidx/camera/core/impl/DeviceProperties;

    .line 64
    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->manufacturer:Ljava/lang/String;

    invoke-virtual {p1}, Landroidx/camera/core/impl/DeviceProperties;->manufacturer()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->model:Ljava/lang/String;

    .line 65
    invoke-virtual {p1}, Landroidx/camera/core/impl/DeviceProperties;->model()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->sdkVersion:I

    .line 66
    invoke-virtual {p1}, Landroidx/camera/core/impl/DeviceProperties;->sdkVersion()I

    move-result p1

    if-ne v1, p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method public hashCode()I
    .locals 3

    .line 75
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->manufacturer:Ljava/lang/String;

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 77
    iget-object v2, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->model:Ljava/lang/String;

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 79
    iget v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->sdkVersion:I

    xor-int/2addr v0, v1

    return v0
.end method

.method public manufacturer()Ljava/lang/String;
    .locals 1

    .line 34
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->manufacturer:Ljava/lang/String;

    return-object v0
.end method

.method public model()Ljava/lang/String;
    .locals 1

    .line 40
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->model:Ljava/lang/String;

    return-object v0
.end method

.method public sdkVersion()I
    .locals 1

    .line 45
    iget v0, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->sdkVersion:I

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 50
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "DeviceProperties{manufacturer="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->manufacturer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", model="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->model:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sdkVersion="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/impl/AutoValue_DeviceProperties;->sdkVersion:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
