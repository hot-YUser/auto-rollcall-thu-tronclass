.class public final Landroidx/camera/core/SettableImageProxy;
.super Landroidx/camera/core/ForwardingImageProxy;
.source "SettableImageProxy.java"


# instance fields
.field private mCropRect:Landroid/graphics/Rect;

.field private final mHeight:I

.field private final mImageInfo:Landroidx/camera/core/ImageInfo;

.field private final mLock:Ljava/lang/Object;

.field private final mWidth:I


# direct methods
.method public constructor <init>(Landroidx/camera/core/ImageProxy;Landroid/util/Size;Landroidx/camera/core/ImageInfo;)V
    .locals 0

    .line 64
    invoke-direct {p0, p1}, Landroidx/camera/core/ForwardingImageProxy;-><init>(Landroidx/camera/core/ImageProxy;)V

    .line 35
    new-instance p1, Ljava/lang/Object;

    invoke-direct {p1}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/SettableImageProxy;->mLock:Ljava/lang/Object;

    if-nez p2, :cond_0

    .line 66
    invoke-super {p0}, Landroidx/camera/core/ForwardingImageProxy;->getWidth()I

    move-result p1

    iput p1, p0, Landroidx/camera/core/SettableImageProxy;->mWidth:I

    .line 67
    invoke-super {p0}, Landroidx/camera/core/ForwardingImageProxy;->getHeight()I

    move-result p1

    iput p1, p0, Landroidx/camera/core/SettableImageProxy;->mHeight:I

    goto :goto_0

    .line 69
    :cond_0
    invoke-virtual {p2}, Landroid/util/Size;->getWidth()I

    move-result p1

    iput p1, p0, Landroidx/camera/core/SettableImageProxy;->mWidth:I

    .line 70
    invoke-virtual {p2}, Landroid/util/Size;->getHeight()I

    move-result p1

    iput p1, p0, Landroidx/camera/core/SettableImageProxy;->mHeight:I

    .line 72
    :goto_0
    iput-object p3, p0, Landroidx/camera/core/SettableImageProxy;->mImageInfo:Landroidx/camera/core/ImageInfo;

    return-void
.end method

.method constructor <init>(Landroidx/camera/core/ImageProxy;Landroidx/camera/core/ImageInfo;)V
    .locals 1

    const/4 v0, 0x0

    .line 52
    invoke-direct {p0, p1, v0, p2}, Landroidx/camera/core/SettableImageProxy;-><init>(Landroidx/camera/core/ImageProxy;Landroid/util/Size;Landroidx/camera/core/ImageInfo;)V

    return-void
.end method


# virtual methods
.method public getCropRect()Landroid/graphics/Rect;
    .locals 5

    .line 78
    iget-object v0, p0, Landroidx/camera/core/SettableImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 79
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/SettableImageProxy;->mCropRect:Landroid/graphics/Rect;

    if-nez v1, :cond_0

    .line 80
    new-instance v1, Landroid/graphics/Rect;

    invoke-virtual {p0}, Landroidx/camera/core/SettableImageProxy;->getWidth()I

    move-result v2

    invoke-virtual {p0}, Landroidx/camera/core/SettableImageProxy;->getHeight()I

    move-result v3

    const/4 v4, 0x0

    invoke-direct {v1, v4, v4, v2, v3}, Landroid/graphics/Rect;-><init>(IIII)V

    monitor-exit v0

    return-object v1

    .line 82
    :cond_0
    new-instance v1, Landroid/graphics/Rect;

    iget-object v2, p0, Landroidx/camera/core/SettableImageProxy;->mCropRect:Landroid/graphics/Rect;

    invoke-direct {v1, v2}, Landroid/graphics/Rect;-><init>(Landroid/graphics/Rect;)V

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 84
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getHeight()I
    .locals 1

    .line 107
    iget v0, p0, Landroidx/camera/core/SettableImageProxy;->mHeight:I

    return v0
.end method

.method public getImageInfo()Landroidx/camera/core/ImageInfo;
    .locals 1

    .line 113
    iget-object v0, p0, Landroidx/camera/core/SettableImageProxy;->mImageInfo:Landroidx/camera/core/ImageInfo;

    return-object v0
.end method

.method public getWidth()I
    .locals 1

    .line 102
    iget v0, p0, Landroidx/camera/core/SettableImageProxy;->mWidth:I

    return v0
.end method

.method public setCropRect(Landroid/graphics/Rect;)V
    .locals 3

    if-eqz p1, :cond_1

    .line 90
    new-instance v0, Landroid/graphics/Rect;

    invoke-direct {v0, p1}, Landroid/graphics/Rect;-><init>(Landroid/graphics/Rect;)V

    .line 91
    invoke-virtual {p0}, Landroidx/camera/core/SettableImageProxy;->getWidth()I

    move-result p1

    invoke-virtual {p0}, Landroidx/camera/core/SettableImageProxy;->getHeight()I

    move-result v1

    const/4 v2, 0x0

    invoke-virtual {v0, v2, v2, p1, v1}, Landroid/graphics/Rect;->intersect(IIII)Z

    move-result p1

    if-nez p1, :cond_0

    .line 92
    invoke-virtual {v0}, Landroid/graphics/Rect;->setEmpty()V

    :cond_0
    move-object p1, v0

    .line 95
    :cond_1
    iget-object v0, p0, Landroidx/camera/core/SettableImageProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 96
    :try_start_0
    iput-object p1, p0, Landroidx/camera/core/SettableImageProxy;->mCropRect:Landroid/graphics/Rect;

    .line 97
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
