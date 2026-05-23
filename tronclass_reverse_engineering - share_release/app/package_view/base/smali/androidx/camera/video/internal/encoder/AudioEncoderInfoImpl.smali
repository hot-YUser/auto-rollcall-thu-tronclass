.class public Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;
.super Landroidx/camera/video/internal/encoder/EncoderInfoImpl;
.source "AudioEncoderInfoImpl.java"

# interfaces
.implements Landroidx/camera/video/internal/encoder/AudioEncoderInfo;


# instance fields
.field private final mAudioCapabilities:Landroid/media/MediaCodecInfo$AudioCapabilities;


# direct methods
.method constructor <init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 55
    invoke-direct {p0, p1, p2}, Landroidx/camera/video/internal/encoder/EncoderInfoImpl;-><init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V

    .line 56
    iget-object p1, p0, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;->mCodecCapabilities:Landroid/media/MediaCodecInfo$CodecCapabilities;

    invoke-virtual {p1}, Landroid/media/MediaCodecInfo$CodecCapabilities;->getAudioCapabilities()Landroid/media/MediaCodecInfo$AudioCapabilities;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/media/MediaCodecInfo$AudioCapabilities;

    iput-object p1, p0, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;->mAudioCapabilities:Landroid/media/MediaCodecInfo$AudioCapabilities;

    return-void
.end method

.method public static from(Landroidx/camera/video/internal/encoder/AudioEncoderConfig;)Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 49
    new-instance v0, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;

    invoke-static {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;->findCodecAndGetCodecInfo(Landroidx/camera/video/internal/encoder/EncoderConfig;)Landroid/media/MediaCodecInfo;

    move-result-object v1

    .line 50
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/AudioEncoderConfig;->getMimeType()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, v1, p0}, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;-><init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method public getBitrateRange()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 62
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/AudioEncoderInfoImpl;->mAudioCapabilities:Landroid/media/MediaCodecInfo$AudioCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$AudioCapabilities;->getBitrateRange()Landroid/util/Range;

    move-result-object v0

    return-object v0
.end method
