.class public Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;
.super Landroidx/camera/video/internal/encoder/EncoderInfoImpl;
.source "VideoEncoderInfoImpl.java"

# interfaces
.implements Landroidx/camera/video/internal/encoder/VideoEncoderInfo;


# instance fields
.field private final mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;


# direct methods
.method constructor <init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 54
    invoke-direct {p0, p1, p2}, Landroidx/camera/video/internal/encoder/EncoderInfoImpl;-><init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V

    .line 55
    iget-object p1, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mCodecCapabilities:Landroid/media/MediaCodecInfo$CodecCapabilities;

    invoke-virtual {p1}, Landroid/media/MediaCodecInfo$CodecCapabilities;->getVideoCapabilities()Landroid/media/MediaCodecInfo$VideoCapabilities;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/media/MediaCodecInfo$VideoCapabilities;

    iput-object p1, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    return-void
.end method

.method public static from(Landroidx/camera/video/internal/encoder/VideoEncoderConfig;)Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/video/internal/encoder/InvalidConfigException;
        }
    .end annotation

    .line 48
    new-instance v0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;

    invoke-static {p0}, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->findCodecAndGetCodecInfo(Landroidx/camera/video/internal/encoder/EncoderConfig;)Landroid/media/MediaCodecInfo;

    move-result-object v1

    .line 49
    invoke-virtual {p0}, Landroidx/camera/video/internal/encoder/VideoEncoderConfig;->getMimeType()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, v1, p0}, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;-><init>(Landroid/media/MediaCodecInfo;Ljava/lang/String;)V

    return-object v0
.end method

.method private static toIllegalArgumentException(Ljava/lang/Throwable;)Ljava/lang/IllegalArgumentException;
    .locals 1

    .line 113
    instance-of v0, p0, Ljava/lang/IllegalArgumentException;

    if-eqz v0, :cond_0

    .line 114
    check-cast p0, Ljava/lang/IllegalArgumentException;

    return-object p0

    .line 116
    :cond_0
    new-instance v0, Ljava/lang/IllegalArgumentException;

    invoke-direct {v0, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/Throwable;)V

    return-object v0
.end method


# virtual methods
.method public getHeightAlignment()I
    .locals 1

    .line 102
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getHeightAlignment()I

    move-result v0

    return v0
.end method

.method public getSupportedBitrateRange()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 108
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getBitrateRange()Landroid/util/Range;

    move-result-object v0

    return-object v0
.end method

.method public getSupportedHeights()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 72
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getSupportedHeights()Landroid/util/Range;

    move-result-object v0

    return-object v0
.end method

.method public getSupportedHeightsFor(I)Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 89
    :try_start_0
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0, p1}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getSupportedHeightsFor(I)Landroid/util/Range;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-object p1

    :catchall_0
    move-exception p1

    .line 91
    invoke-static {p1}, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->toIllegalArgumentException(Ljava/lang/Throwable;)Ljava/lang/IllegalArgumentException;

    move-result-object p1

    throw p1
.end method

.method public getSupportedWidths()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 66
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getSupportedWidths()Landroid/util/Range;

    move-result-object v0

    return-object v0
.end method

.method public getSupportedWidthsFor(I)Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 79
    :try_start_0
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0, p1}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getSupportedWidthsFor(I)Landroid/util/Range;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-object p1

    :catchall_0
    move-exception p1

    .line 81
    invoke-static {p1}, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->toIllegalArgumentException(Ljava/lang/Throwable;)Ljava/lang/IllegalArgumentException;

    move-result-object p1

    throw p1
.end method

.method public getWidthAlignment()I
    .locals 1

    .line 97
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0}, Landroid/media/MediaCodecInfo$VideoCapabilities;->getWidthAlignment()I

    move-result v0

    return v0
.end method

.method public isSizeSupported(II)Z
    .locals 1

    .line 60
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->mVideoCapabilities:Landroid/media/MediaCodecInfo$VideoCapabilities;

    invoke-virtual {v0, p1, p2}, Landroid/media/MediaCodecInfo$VideoCapabilities;->isSizeSupported(II)Z

    move-result p1

    return p1
.end method
