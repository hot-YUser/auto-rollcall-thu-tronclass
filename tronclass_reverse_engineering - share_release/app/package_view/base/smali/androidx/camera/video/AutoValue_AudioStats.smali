.class final Landroidx/camera/video/AutoValue_AudioStats;
.super Landroidx/camera/video/AudioStats;
.source "AutoValue_AudioStats.java"


# instance fields
.field private final audioAmplitudeInternal:D

.field private final audioState:I

.field private final errorCause:Ljava/lang/Throwable;


# direct methods
.method constructor <init>(IDLjava/lang/Throwable;)V
    .locals 0

    .line 20
    invoke-direct {p0}, Landroidx/camera/video/AudioStats;-><init>()V

    .line 21
    iput p1, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioState:I

    .line 22
    iput-wide p2, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    .line 23
    iput-object p4, p0, Landroidx/camera/video/AutoValue_AudioStats;->errorCause:Ljava/lang/Throwable;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 58
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/AudioStats;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 59
    check-cast p1, Landroidx/camera/video/AudioStats;

    .line 60
    iget v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioState:I

    invoke-virtual {p1}, Landroidx/camera/video/AudioStats;->getAudioState()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-wide v3, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    .line 61
    invoke-static {v3, v4}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v3

    invoke-virtual {p1}, Landroidx/camera/video/AudioStats;->getAudioAmplitudeInternal()D

    move-result-wide v5

    invoke-static {v5, v6}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v5

    cmp-long v1, v3, v5

    if-nez v1, :cond_2

    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->errorCause:Ljava/lang/Throwable;

    if-nez v1, :cond_1

    .line 62
    invoke-virtual {p1}, Landroidx/camera/video/AudioStats;->getErrorCause()Ljava/lang/Throwable;

    move-result-object p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/AudioStats;->getErrorCause()Ljava/lang/Throwable;

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

.method getAudioAmplitudeInternal()D
    .locals 2

    .line 35
    iget-wide v0, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    return-wide v0
.end method

.method public getAudioState()I
    .locals 1

    .line 29
    iget v0, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioState:I

    return v0
.end method

.method public getErrorCause()Ljava/lang/Throwable;
    .locals 1

    .line 41
    iget-object v0, p0, Landroidx/camera/video/AutoValue_AudioStats;->errorCause:Ljava/lang/Throwable;

    return-object v0
.end method

.method public hashCode()I
    .locals 6

    .line 71
    iget v0, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioState:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 73
    iget-wide v2, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    invoke-static {v2, v3}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v2

    const/16 v4, 0x20

    ushr-long/2addr v2, v4

    iget-wide v4, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    invoke-static {v4, v5}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v4

    xor-long/2addr v2, v4

    long-to-int v2, v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 75
    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->errorCause:Ljava/lang/Throwable;

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
    .locals 3

    .line 46
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "AudioStats{audioState="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioState:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", audioAmplitudeInternal="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->audioAmplitudeInternal:D

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(D)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", errorCause="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioStats;->errorCause:Ljava/lang/Throwable;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
