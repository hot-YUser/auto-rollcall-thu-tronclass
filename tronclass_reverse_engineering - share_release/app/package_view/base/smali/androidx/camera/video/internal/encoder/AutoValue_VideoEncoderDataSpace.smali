.class final Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;
.super Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;
.source "AutoValue_VideoEncoderDataSpace.java"


# instance fields
.field private final range:I

.field private final standard:I

.field private final transfer:I


# direct methods
.method constructor <init>(III)V
    .locals 0

    .line 17
    invoke-direct {p0}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;-><init>()V

    .line 18
    iput p1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->standard:I

    .line 19
    iput p2, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->transfer:I

    .line 20
    iput p3, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->range:I

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 52
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 53
    check-cast p1, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    .line 54
    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->standard:I

    invoke-virtual {p1}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->getStandard()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->transfer:I

    .line 55
    invoke-virtual {p1}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->getTransfer()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->range:I

    .line 56
    invoke-virtual {p1}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->getRange()I

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

.method public getRange()I
    .locals 1

    .line 35
    iget v0, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->range:I

    return v0
.end method

.method public getStandard()I
    .locals 1

    .line 25
    iget v0, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->standard:I

    return v0
.end method

.method public getTransfer()I
    .locals 1

    .line 30
    iget v0, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->transfer:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 65
    iget v0, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->standard:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 67
    iget v2, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->transfer:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 69
    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->range:I

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 40
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "VideoEncoderDataSpace{standard="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->standard:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", transfer="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->transfer:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", range="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;->range:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
