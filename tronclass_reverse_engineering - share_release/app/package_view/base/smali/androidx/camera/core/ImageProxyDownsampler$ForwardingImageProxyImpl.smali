.class final Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;
.super Landroidx/camera/core/ForwardingImageProxy;
.source "ImageProxyDownsampler.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ImageProxyDownsampler;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "ForwardingImageProxyImpl"
.end annotation


# instance fields
.field private final mDownsampledHeight:I

.field private final mDownsampledPlanes:[Landroidx/camera/core/ImageProxy$PlaneProxy;

.field private final mDownsampledWidth:I


# direct methods
.method constructor <init>(Landroidx/camera/core/ImageProxy;[Landroidx/camera/core/ImageProxy$PlaneProxy;II)V
    .locals 0

    .line 232
    invoke-direct {p0, p1}, Landroidx/camera/core/ForwardingImageProxy;-><init>(Landroidx/camera/core/ImageProxy;)V

    .line 233
    iput-object p2, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledPlanes:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    .line 234
    iput p3, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledWidth:I

    .line 235
    iput p4, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledHeight:I

    return-void
.end method


# virtual methods
.method public getHeight()I
    .locals 1

    .line 245
    iget v0, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledHeight:I

    return v0
.end method

.method public getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;
    .locals 1

    .line 251
    iget-object v0, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledPlanes:[Landroidx/camera/core/ImageProxy$PlaneProxy;

    return-object v0
.end method

.method public getWidth()I
    .locals 1

    .line 240
    iget v0, p0, Landroidx/camera/core/ImageProxyDownsampler$ForwardingImageProxyImpl;->mDownsampledWidth:I

    return v0
.end method
