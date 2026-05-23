.class public abstract Landroidx/camera/video/internal/encoder/AudioEncoderConfig;
.super Ljava/lang/Object;
.source "AudioEncoderConfig.java"

# interfaces
.implements Landroidx/camera/video/internal/encoder/EncoderConfig;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static builder()Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;
    .locals 2

    .line 41
    new-instance v0, Landroidx/camera/video/internal/encoder/AutoValue_AudioEncoderConfig$Builder;

    invoke-direct {v0}, Landroidx/camera/video/internal/encoder/AutoValue_AudioEncoderConfig$Builder;-><init>()V

    const/4 v1, -0x1

    .line 42
    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/encoder/AutoValue_AudioEncoderConfig$Builder;->setProfile(I)Landroidx/camera/video/internal/encoder/AudioEncoderConfig$Builder;

    move-result-object v0

    return-object v0
.end method


# virtual methods
.method public abstract getBitrate()I
.end method

.method public abstract getChannelCount()I
.end method

.method public abstract getInputTimebase()Landroidx/camera/core/impl/Timebase;
.end method

.method public abstract getMimeType()Ljava/lang/String;
.end method

.method public abstract getProfile()I
.end method

.method public abstract getSampleRate()I
.end method

.method public toMediaFormat()Landroid/media/MediaFormat;
    .locals 3

    .line 75
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getMimeType()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getSampleRate()I

    move-result v1

    .line 76
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getChannelCount()I

    move-result v2

    .line 75
    invoke-static {v0, v1, v2}, Landroid/media/MediaFormat;->createAudioFormat(Ljava/lang/String;II)Landroid/media/MediaFormat;

    move-result-object v0

    .line 77
    const-string v1, "bitrate"

    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getBitrate()I

    move-result v2

    invoke-virtual {v0, v1, v2}, Landroid/media/MediaFormat;->setInteger(Ljava/lang/String;I)V

    .line 78
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getProfile()I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_1

    .line 79
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getMimeType()Ljava/lang/String;

    move-result-object v1

    const-string v2, "audio/mp4a-latm"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 80
    const-string v1, "aac-profile"

    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getProfile()I

    move-result v2

    invoke-virtual {v0, v1, v2}, Landroid/media/MediaFormat;->setInteger(Ljava/lang/String;I)V

    goto :goto_0

    .line 82
    :cond_0
    const-string v1, "profile"

    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getProfile()I

    move-result v2

    invoke-virtual {v0, v1, v2}, Landroid/media/MediaFormat;->setInteger(Ljava/lang/String;I)V

    :cond_1
    :goto_0
    return-object v0
.end method
