.class public abstract Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.super Ljava/lang/Object;
.source "VideoEncoderConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/encoder/VideoEncoderConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 114
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract build()Landroidx/camera/video/internal/encoder/VideoEncoderConfig;
.end method

.method public abstract setBitrate(I)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setColorFormat(I)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setDataSpace(Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setFrameRate(I)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setIFrameInterval(I)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setInputTimebase(Landroidx/camera/core/impl/Timebase;)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setMimeType(Ljava/lang/String;)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setProfile(I)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method

.method public abstract setResolution(Landroid/util/Size;)Landroidx/camera/video/internal/encoder/VideoEncoderConfig$Builder;
.end method
