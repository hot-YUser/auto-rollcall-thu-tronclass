.class final Landroidx/camera/core/AndroidImageProxy$PlaneProxy;
.super Ljava/lang/Object;
.source "AndroidImageProxy.java"

# interfaces
.implements Landroidx/camera/core/ImageProxy$PlaneProxy;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/AndroidImageProxy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "PlaneProxy"
.end annotation


# instance fields
.field private final mPlane:Landroid/media/Image$Plane;


# direct methods
.method constructor <init>(Landroid/media/Image$Plane;)V
    .locals 0

    .line 105
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 106
    iput-object p1, p0, Landroidx/camera/core/AndroidImageProxy$PlaneProxy;->mPlane:Landroid/media/Image$Plane;

    return-void
.end method


# virtual methods
.method public getBuffer()Ljava/nio/ByteBuffer;
    .locals 1

    .line 122
    iget-object v0, p0, Landroidx/camera/core/AndroidImageProxy$PlaneProxy;->mPlane:Landroid/media/Image$Plane;

    invoke-virtual {v0}, Landroid/media/Image$Plane;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object v0

    return-object v0
.end method

.method public getPixelStride()I
    .locals 1

    .line 116
    iget-object v0, p0, Landroidx/camera/core/AndroidImageProxy$PlaneProxy;->mPlane:Landroid/media/Image$Plane;

    invoke-virtual {v0}, Landroid/media/Image$Plane;->getPixelStride()I

    move-result v0

    return v0
.end method

.method public getRowStride()I
    .locals 1

    .line 111
    iget-object v0, p0, Landroidx/camera/core/AndroidImageProxy$PlaneProxy;->mPlane:Landroid/media/Image$Plane;

    invoke-virtual {v0}, Landroid/media/Image$Plane;->getRowStride()I

    move-result v0

    return v0
.end method
