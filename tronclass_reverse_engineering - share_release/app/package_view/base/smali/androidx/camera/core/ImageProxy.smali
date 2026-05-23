.class public interface abstract Landroidx/camera/core/ImageProxy;
.super Ljava/lang/Object;
.source "ImageProxy.java"

# interfaces
.implements Ljava/lang/AutoCloseable;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/ImageProxy$PlaneProxy;
    }
.end annotation


# virtual methods
.method public abstract close()V
.end method

.method public abstract getCropRect()Landroid/graphics/Rect;
.end method

.method public abstract getFormat()I
.end method

.method public abstract getHeight()I
.end method

.method public abstract getImage()Landroid/media/Image;
.end method

.method public abstract getImageInfo()Landroidx/camera/core/ImageInfo;
.end method

.method public abstract getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;
.end method

.method public abstract getWidth()I
.end method

.method public abstract setCropRect(Landroid/graphics/Rect;)V
.end method

.method public toBitmap()Landroid/graphics/Bitmap;
    .locals 1

    .line 154
    invoke-static {p0}, Landroidx/camera/core/internal/utils/ImageUtil;->createBitmapFromImageProxy(Landroidx/camera/core/ImageProxy;)Landroid/graphics/Bitmap;

    move-result-object v0

    return-object v0
.end method
