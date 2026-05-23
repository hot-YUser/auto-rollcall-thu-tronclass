.class final Landroidx/camera/video/AutoValue_StreamInfo;
.super Landroidx/camera/video/StreamInfo;
.source "AutoValue_StreamInfo.java"


# instance fields
.field private final id:I

.field private final inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

.field private final streamState:Landroidx/camera/video/StreamInfo$StreamState;


# direct methods
.method constructor <init>(ILandroidx/camera/video/StreamInfo$StreamState;Landroidx/camera/core/SurfaceRequest$TransformationInfo;)V
    .locals 0

    .line 21
    invoke-direct {p0}, Landroidx/camera/video/StreamInfo;-><init>()V

    .line 22
    iput p1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->id:I

    if-eqz p2, :cond_0

    .line 26
    iput-object p2, p0, Landroidx/camera/video/AutoValue_StreamInfo;->streamState:Landroidx/camera/video/StreamInfo$StreamState;

    .line 27
    iput-object p3, p0, Landroidx/camera/video/AutoValue_StreamInfo;->inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

    return-void

    .line 24
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null streamState"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 61
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/StreamInfo;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 62
    check-cast p1, Landroidx/camera/video/StreamInfo;

    .line 63
    iget v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->id:I

    invoke-virtual {p1}, Landroidx/camera/video/StreamInfo;->getId()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->streamState:Landroidx/camera/video/StreamInfo$StreamState;

    .line 64
    invoke-virtual {p1}, Landroidx/camera/video/StreamInfo;->getStreamState()Landroidx/camera/video/StreamInfo$StreamState;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroidx/camera/video/StreamInfo$StreamState;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-object v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

    if-nez v1, :cond_1

    .line 65
    invoke-virtual {p1}, Landroidx/camera/video/StreamInfo;->getInProgressTransformationInfo()Landroidx/camera/core/SurfaceRequest$TransformationInfo;

    move-result-object p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/StreamInfo;->getInProgressTransformationInfo()Landroidx/camera/core/SurfaceRequest$TransformationInfo;

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

.method public getId()I
    .locals 1

    .line 32
    iget v0, p0, Landroidx/camera/video/AutoValue_StreamInfo;->id:I

    return v0
.end method

.method public getInProgressTransformationInfo()Landroidx/camera/core/SurfaceRequest$TransformationInfo;
    .locals 1

    .line 44
    iget-object v0, p0, Landroidx/camera/video/AutoValue_StreamInfo;->inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

    return-object v0
.end method

.method public getStreamState()Landroidx/camera/video/StreamInfo$StreamState;
    .locals 1

    .line 38
    iget-object v0, p0, Landroidx/camera/video/AutoValue_StreamInfo;->streamState:Landroidx/camera/video/StreamInfo$StreamState;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    .line 74
    iget v0, p0, Landroidx/camera/video/AutoValue_StreamInfo;->id:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 76
    iget-object v2, p0, Landroidx/camera/video/AutoValue_StreamInfo;->streamState:Landroidx/camera/video/StreamInfo$StreamState;

    invoke-virtual {v2}, Landroidx/camera/video/StreamInfo$StreamState;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 78
    iget-object v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

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

    .line 49
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "StreamInfo{id="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->id:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", streamState="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->streamState:Landroidx/camera/video/StreamInfo$StreamState;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", inProgressTransformationInfo="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_StreamInfo;->inProgressTransformationInfo:Landroidx/camera/core/SurfaceRequest$TransformationInfo;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
