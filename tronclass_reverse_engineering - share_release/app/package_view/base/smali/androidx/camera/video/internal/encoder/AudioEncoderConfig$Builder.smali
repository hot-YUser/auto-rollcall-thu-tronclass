.class public abstract Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.super Ljava/lang/Object;
.source "AudioEncoderConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/encoder/AudioEncoderConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 93
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method abstract autoBuild()Landroidx/camera/video/internal/encoder/AudioEncoderConfig;
.end method

.method public build()Landroidx/camera/video/internal/encoder/AudioEncoderConfig;
    .locals 3

    .line 133
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;->autoBuild()Landroidx/camera/video/internal/encoder/AudioEncoderConfig;

    move-result-object v0

    .line 134
    invoke-virtual {v0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getMimeType()Ljava/lang/String;

    move-result-object v1

    const-string v2, "audio/mp4a-latm"

    invoke-static {v1, v2}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 135
    invoke-virtual {v0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getProfile()I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_0

    goto :goto_0

    .line 136
    :cond_0
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Encoder mime set to AAC, but no AAC profile was provided."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    :cond_1
    :goto_0
    return-object v0
.end method

.method public abstract setBitrate(I)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method

.method public abstract setChannelCount(I)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method

.method public abstract setInputTimebase(Landroidx/camera/core/impl/Timebase;)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method

.method public abstract setMimeType(Ljava/lang/String;)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method

.method public abstract setProfile(I)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method

.method public abstract setSampleRate(I)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
.end method
