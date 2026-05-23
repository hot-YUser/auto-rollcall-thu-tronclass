.class public abstract Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.super Ljava/lang/Object;
.source "AudioSettings.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/audio/AudioSettings;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 162
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method abstract autoBuild()Landroidx/camera/video/internal/audio/AudioSettings;
.end method

.method public final build()Landroidx/camera/video/internal/audio/AudioSettings;
    .locals 4

    .line 138
    invoke-virtual {p0}, Landroidx/camera/video/internal/audio/AudioSettings$Builder;->autoBuild()Landroidx/camera/video/internal/audio/AudioSettings;

    move-result-object v0

    .line 140
    invoke-virtual {v0}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioSource()I

    move-result v1

    const/4 v2, -0x1

    if-ne v1, v2, :cond_0

    .line 141
    const-string v1, " audioSource"

    goto :goto_0

    .line 140
    :cond_0
    const-string v1, ""

    .line 143
    :goto_0
    invoke-virtual {v0}, Landroidx/camera/video/internal/audio/AudioSettings;->getSampleRate()I

    move-result v3

    if-gtz v3, :cond_1

    .line 144
    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, " sampleRate"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 146
    :cond_1
    invoke-virtual {v0}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v3

    if-gtz v3, :cond_2

    .line 147
    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, " channelCount"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 149
    :cond_2
    invoke-virtual {v0}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result v3

    if-ne v3, v2, :cond_3

    .line 150
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " audioFormat"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 153
    :cond_3
    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_4

    return-object v0

    .line 154
    :cond_4
    new-instance v0, Ljava/lang/IllegalArgumentException;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Required settings missing or non-positive:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public abstract setAudioFormat(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.end method

.method public abstract setAudioSource(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.end method

.method public abstract setChannelCount(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.end method

.method public abstract setSampleRate(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.end method
