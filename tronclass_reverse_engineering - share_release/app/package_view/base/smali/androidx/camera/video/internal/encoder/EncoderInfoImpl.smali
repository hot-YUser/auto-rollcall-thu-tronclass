.class public abstract Landroidx/camera/video/internal/encoder/EncoderInfoImpl;
.super Ljava/lang/Object;
.source "EncoderInfoImpl.java"

# interfaces
.implements Landroidx/camera/video/internal/encoder/EncoderInfo;


# instance fields
.field protected final mCodecCapabilities:Landroid/media/MediaCodecInfo$CodecCapabilities;

.field private final mMediaCodecInfo:Landroid/media/MediaCodecInfo;


# direct methods
.method constructor <init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    iput-object p1, p0, Landroidx/camera/video/internal/encoder/EncoderInfoImpl;->mMediaCodecInfo:Landroid/media/MediaCodecInfo;

    .line 44
    :try_start_0
    invoke-virtual {p1, p2}, Landroid/media/MediaCodecInfo;->getCapabilitiesForType(Ljava/lang/String;)Landroid/media/MediaCodecInfo$CodecCapabilities;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/media/MediaCodecInfo$CodecCapabilities;

    iput-object p1, p0, Landroidx/camera/video/internal/encoder/EncoderInfoImpl;->mCodecCapabilities:Landroid/media/MediaCodecInfo$CodecCapabilities;
    :try_end_0
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception p1

    .line 48
    new-instance v0, Landroidx/camera/video/internal/encoder/InvalidConfigException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unable to get CodecCapabilities for mime: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {v0, p2, p1}, Landroidx/camera/video/internal/encoder/InvalidConfigException;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    throw v0
.end method

.method static findCodecAndGetCodecInfo(Landroidx/camera/video/internal/encoder/EncoderConfig;)Landroid/media/MediaCodecInfo;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 62
    new-instance v0, Landroidx/camera/video/internal/workaround/EncoderFinder;

    invoke-direct {v0}, Landroidx/camera/video/internal/workaround/EncoderFinder;-><init>()V

    invoke-interface {p0}, Landroidx/camera/video/internal/encoder/EncoderConfig;->toMediaFormat()Landroid/media/MediaFormat;

    move-result-object p0

    invoke-virtual {v0, p0}, Landroidx/camera/video/internal/workaround/EncoderFinder;->findEncoder(Landroid/media/MediaFormat;)Landroid/media/MediaCodec;

    move-result-object p0

    .line 63
    invoke-virtual {p0}, Landroid/media/MediaCodec;->getCodecInfo()Landroid/media/MediaCodecInfo;

    move-result-object v0

    .line 64
    invoke-virtual {p0}, Landroid/media/MediaCodec;->release()V

    return-object v0
.end method


# virtual methods
.method public getName()Ljava/lang/String;
    .locals 1

    .line 56
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/EncoderInfoImpl;->mMediaCodecInfo:Landroid/media/MediaCodecInfo;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo;->getName()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
