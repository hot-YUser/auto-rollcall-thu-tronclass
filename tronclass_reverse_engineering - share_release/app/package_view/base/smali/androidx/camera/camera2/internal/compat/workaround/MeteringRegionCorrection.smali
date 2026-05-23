.class public Landroidx/camera/camera2/internal/compat/workaround/MeteringRegionCorrection;
.super Ljava/lang/Object;
.source "MeteringRegionCorrection.java"


# instance fields
.field private final mCameraQuirks:Landroidx/camera/core/impl/Quirks;


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/Quirks;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    iput-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/MeteringRegionCorrection;->mCameraQuirks:Landroidx/camera/core/impl/Quirks;

    return-void
.end method


# virtual methods
.method public getCorrectedPoint(Landroidx/camera/core/MeteringPoint;I)Landroid/graphics/PointF;
    .locals 2

    const/4 v0, 0x1

    if-ne p2, v0, :cond_0

    .line 45
    iget-object p2, p0, Landroidx/camera/camera2/internal/compat/workaround/MeteringRegionCorrection;->mCameraQuirks:Landroidx/camera/core/impl/Quirks;

    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/AfRegionFlipHorizontallyQuirk;

    .line 46
    invoke-virtual {p2, v0}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 47
    new-instance p2, Landroid/graphics/PointF;

    const/high16 v0, 0x3f800000    # 1.0f

    invoke-virtual {p1}, Landroidx/camera/core/MeteringPoint;->getX()F

    move-result v1

    sub-float/2addr v0, v1

    invoke-virtual {p1}, Landroidx/camera/core/MeteringPoint;->getY()F

    move-result p1

    invoke-direct {p2, v0, p1}, Landroid/graphics/PointF;-><init>(FF)V

    return-object p2

    .line 50
    :cond_0
    new-instance p2, Landroid/graphics/PointF;

    invoke-virtual {p1}, Landroidx/camera/core/MeteringPoint;->getX()F

    move-result v0

    invoke-virtual {p1}, Landroidx/camera/core/MeteringPoint;->getY()F

    move-result p1

    invoke-direct {p2, v0, p1}, Landroid/graphics/PointF;-><init>(FF)V

    return-object p2
.end method
