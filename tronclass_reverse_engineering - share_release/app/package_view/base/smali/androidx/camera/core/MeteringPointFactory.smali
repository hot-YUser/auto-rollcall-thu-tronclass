.class public abstract Landroidx/camera/core/MeteringPointFactory;
.super Ljava/lang/Object;
.source "MeteringPointFactory.java"


# instance fields
.field private mSurfaceAspectRatio:Landroid/util/Rational;


# direct methods
.method public constructor <init>()V
    .locals 1

    const/4 v0, 0x0

    .line 56
    invoke-direct {p0, v0}, Landroidx/camera/core/MeteringPointFactory;-><init>(Landroid/util/Rational;)V

    return-void
.end method

.method public constructor <init>(Landroid/util/Rational;)V
    .locals 0

    .line 64
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 65
    iput-object p1, p0, Landroidx/camera/core/MeteringPointFactory;->mSurfaceAspectRatio:Landroid/util/Rational;

    return-void
.end method

.method public static getDefaultPointSize()F
    .locals 1

    const v0, 0x3e19999a    # 0.15f

    return v0
.end method


# virtual methods
.method protected abstract convertPoint(FF)Landroid/graphics/PointF;
.end method

.method public final createPoint(FF)Landroidx/camera/core/MeteringPoint;
    .locals 1

    .line 115
    invoke-static {}, Landroidx/camera/core/MeteringPointFactory;->getDefaultPointSize()F

    move-result v0

    invoke-virtual {p0, p1, p2, v0}, Landroidx/camera/core/MeteringPointFactory;->createPoint(FFF)Landroidx/camera/core/MeteringPoint;

    move-result-object p1

    return-object p1
.end method

.method public final createPoint(FFF)Landroidx/camera/core/MeteringPoint;
    .locals 2

    .line 136
    invoke-virtual {p0, p1, p2}, Landroidx/camera/core/MeteringPointFactory;->convertPoint(FF)Landroid/graphics/PointF;

    move-result-object p1

    .line 137
    new-instance p2, Landroidx/camera/core/MeteringPoint;

    iget v0, p1, Landroid/graphics/PointF;->x:F

    iget p1, p1, Landroid/graphics/PointF;->y:F

    iget-object v1, p0, Landroidx/camera/core/MeteringPointFactory;->mSurfaceAspectRatio:Landroid/util/Rational;

    invoke-direct {p2, v0, p1, p3, v1}, Landroidx/camera/core/MeteringPoint;-><init>(FFFLandroid/util/Rational;)V

    return-object p2
.end method
