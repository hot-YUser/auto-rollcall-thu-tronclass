.class Landroidx/camera/video/internal/encoder/EncoderImpl$Api23Impl;
.super Ljava/lang/Object;
.source "EncoderImpl.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/encoder/EncoderImpl;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "Api23Impl"
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 1681
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static createPersistentInputSurface()Landroid/view/Surface;
    .locals 1

    .line 1687
    invoke-static {}, Landroid/media/MediaCodec;->createPersistentInputSurface()Landroid/view/Surface;

    move-result-object v0

    return-object v0
.end method

.method static setInputSurface(Landroid/media/MediaCodec;Landroid/view/Surface;)V
    .locals 0

    .line 1692
    invoke-virtual {p0, p1}, Landroid/media/MediaCodec;->setInputSurface(Landroid/view/Surface;)V

    return-void
.end method
