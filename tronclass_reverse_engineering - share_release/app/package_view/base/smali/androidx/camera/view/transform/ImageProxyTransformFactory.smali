.class public final Landroidx/camera/view/transform/ImageProxyTransformFactory;
.super Ljava/lang/Object;
.source "ImageProxyTransformFactory.java"


# instance fields
.field private mUsingCropRect:Z

.field private mUsingRotationDegrees:Z


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 54
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private getCropRect(Landroidx/camera/core/ImageProxy;)Landroid/graphics/RectF;
    .locals 3

    .line 126
    iget-boolean v0, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingCropRect:Z

    if-eqz v0, :cond_0

    .line 127
    new-instance v0, Landroid/graphics/RectF;

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getCropRect()Landroid/graphics/Rect;

    move-result-object p1

    invoke-direct {v0, p1}, Landroid/graphics/RectF;-><init>(Landroid/graphics/Rect;)V

    return-object v0

    .line 130
    :cond_0
    new-instance v0, Landroid/graphics/RectF;

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v1

    int-to-float v1, v1

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result p1

    int-to-float p1, p1

    const/4 v2, 0x0

    invoke-direct {v0, v2, v2, v1, p1}, Landroid/graphics/RectF;-><init>(FFFF)V

    return-object v0
.end method

.method static getRotatedCropRect(Landroid/graphics/RectF;I)Landroid/graphics/RectF;
    .locals 2

    .line 148
    invoke-static {p1}, Landroidx/camera/core/impl/utils/TransformUtils;->is90or270(I)Z

    move-result p1

    const/4 v0, 0x0

    if-eqz p1, :cond_0

    .line 149
    new-instance p1, Landroid/graphics/RectF;

    invoke-virtual {p0}, Landroid/graphics/RectF;->height()F

    move-result v1

    invoke-virtual {p0}, Landroid/graphics/RectF;->width()F

    move-result p0

    invoke-direct {p1, v0, v0, v1, p0}, Landroid/graphics/RectF;-><init>(FFFF)V

    return-object p1

    .line 151
    :cond_0
    new-instance p1, Landroid/graphics/RectF;

    invoke-virtual {p0}, Landroid/graphics/RectF;->width()F

    move-result v1

    invoke-virtual {p0}, Landroid/graphics/RectF;->height()F

    move-result p0

    invoke-direct {p1, v0, v0, v1, p0}, Landroid/graphics/RectF;-><init>(FFFF)V

    return-object p1
.end method

.method private getRotationDegrees(Landroidx/camera/core/ImageProxy;)I
    .locals 1

    .line 137
    iget-boolean v0, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingRotationDegrees:Z

    if-eqz v0, :cond_0

    .line 138
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getImageInfo()Landroidx/camera/core/ImageInfo;

    move-result-object p1

    invoke-interface {p1}, Landroidx/camera/core/ImageInfo;->getRotationDegrees()I

    move-result p1

    return p1

    :cond_0
    const/4 p1, 0x0

    return p1
.end method


# virtual methods
.method public getOutputTransform(Landroidx/camera/core/ImageProxy;)Landroidx/camera/view/transform/OutputTransform;
    .locals 3

    .line 111
    invoke-direct {p0, p1}, Landroidx/camera/view/transform/ImageProxyTransformFactory;->getRotationDegrees(Landroidx/camera/core/ImageProxy;)I

    move-result v0

    .line 112
    invoke-direct {p0, p1}, Landroidx/camera/view/transform/ImageProxyTransformFactory;->getCropRect(Landroidx/camera/core/ImageProxy;)Landroid/graphics/RectF;

    move-result-object v1

    .line 113
    invoke-static {v1, v0}, Landroidx/camera/view/transform/ImageProxyTransformFactory;->getRotatedCropRect(Landroid/graphics/RectF;I)Landroid/graphics/RectF;

    move-result-object v2

    .line 114
    invoke-static {v1, v2, v0}, Landroidx/camera/core/impl/utils/TransformUtils;->getRectToRect(Landroid/graphics/RectF;Landroid/graphics/RectF;I)Landroid/graphics/Matrix;

    move-result-object v0

    .line 117
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getCropRect()Landroid/graphics/Rect;

    move-result-object v1

    invoke-static {v1}, Landroidx/camera/core/impl/utils/TransformUtils;->getNormalizedToBuffer(Landroid/graphics/Rect;)Landroid/graphics/Matrix;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/graphics/Matrix;->preConcat(Landroid/graphics/Matrix;)Z

    .line 119
    new-instance v1, Landroidx/camera/view/transform/OutputTransform;

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getCropRect()Landroid/graphics/Rect;

    move-result-object p1

    invoke-static {p1}, Landroidx/camera/core/impl/utils/TransformUtils;->rectToSize(Landroid/graphics/Rect;)Landroid/util/Size;

    move-result-object p1

    invoke-direct {v1, v0, p1}, Landroidx/camera/view/transform/OutputTransform;-><init>(Landroid/graphics/Matrix;Landroid/util/Size;)V

    return-object v1
.end method

.method public isUsingCropRect()Z
    .locals 1

    .line 74
    iget-boolean v0, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingCropRect:Z

    return v0
.end method

.method public isUsingRotationDegrees()Z
    .locals 1

    .line 97
    iget-boolean v0, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingRotationDegrees:Z

    return v0
.end method

.method public setUsingCropRect(Z)V
    .locals 0

    .line 65
    iput-boolean p1, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingCropRect:Z

    return-void
.end method

.method public setUsingRotationDegrees(Z)V
    .locals 0

    .line 88
    iput-boolean p1, p0, Landroidx/camera/view/transform/ImageProxyTransformFactory;->mUsingRotationDegrees:Z

    return-void
.end method
