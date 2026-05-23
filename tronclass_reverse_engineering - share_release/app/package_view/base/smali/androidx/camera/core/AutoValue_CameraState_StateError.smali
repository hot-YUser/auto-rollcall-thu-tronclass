.class final Landroidx/camera/core/AutoValue_CameraState_StateError;
.super Landroidx/camera/core/CameraState$StateError;
.source "AutoValue_CameraState_StateError.java"


# instance fields
.field private final cause:Ljava/lang/Throwable;

.field private final code:I


# direct methods
.method constructor <init>(ILjava/lang/Throwable;)V
    .locals 0

    .line 16
    invoke-direct {p0}, Landroidx/camera/core/CameraState$StateError;-><init>()V

    .line 17
    iput p1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->code:I

    .line 18
    iput-object p2, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->cause:Ljava/lang/Throwable;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 46
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/CameraState$StateError;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 47
    check-cast p1, Landroidx/camera/core/CameraState$StateError;

    .line 48
    iget v1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->code:I

    invoke-virtual {p1}, Landroidx/camera/core/CameraState$StateError;->getCode()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->cause:Ljava/lang/Throwable;

    if-nez v1, :cond_1

    .line 49
    invoke-virtual {p1}, Landroidx/camera/core/CameraState$StateError;->getCause()Ljava/lang/Throwable;

    move-result-object p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/core/CameraState$StateError;->getCause()Ljava/lang/Throwable;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_0

    :cond_2
    move v0, v2

    :goto_0
    return v0

    :cond_3
    return v2
.end method

.method public getCause()Ljava/lang/Throwable;
    .locals 1

    .line 30
    iget-object v0, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->cause:Ljava/lang/Throwable;

    return-object v0
.end method

.method public getCode()I
    .locals 1

    .line 24
    iget v0, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->code:I

    return v0
.end method

.method public hashCode()I
    .locals 2

    .line 58
    iget v0, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->code:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 60
    iget-object v1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->cause:Ljava/lang/Throwable;

    if-nez v1, :cond_0

    const/4 v1, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    :goto_0
    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 35
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "StateError{code="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->code:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", cause="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/AutoValue_CameraState_StateError;->cause:Ljava/lang/Throwable;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
