.class public Landroidx/camera/core/internal/compat/workaround/JpegMetadataCorrector;
.super Ljava/lang/Object;
.source "JpegMetadataCorrector.java"


# instance fields
.field private final mQuirk:Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/Quirks;)V
    .locals 1

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    const-class v0, Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;

    invoke-virtual {p1, v0}, Landroidx/camera/core/impl/Quirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object p1

    check-cast p1, Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;

    iput-object p1, p0, Landroidx/camera/core/internal/compat/workaround/JpegMetadataCorrector;->mQuirk:Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;

    return-void
.end method


# virtual methods
.method public jpegImageToJpegByteArray(Landroidx/camera/core/ImageProxy;)[B
    .locals 1

    .line 55
    iget-object v0, p0, Landroidx/camera/core/internal/compat/workaround/JpegMetadataCorrector;->mQuirk:Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;

    if-nez v0, :cond_0

    .line 56
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object p1

    const/4 v0, 0x0

    .line 57
    aget-object p1, p1, v0

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object p1

    .line 58
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->capacity()I

    move-result v0

    new-array v0, v0, [B

    .line 59
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 60
    invoke-virtual {p1, v0}, Ljava/nio/ByteBuffer;->get([B)Ljava/nio/ByteBuffer;

    return-object v0

    .line 63
    :cond_0
    invoke-virtual {v0, p1}, Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;->jpegImageToJpegByteArray(Landroidx/camera/core/ImageProxy;)[B

    move-result-object p1

    return-object p1
.end method

.method public needCorrectJpegMetadata()Z
    .locals 1

    .line 47
    iget-object v0, p0, Landroidx/camera/core/internal/compat/workaround/JpegMetadataCorrector;->mQuirk:Landroidx/camera/core/internal/compat/quirk/IncorrectJpegMetadataQuirk;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method
