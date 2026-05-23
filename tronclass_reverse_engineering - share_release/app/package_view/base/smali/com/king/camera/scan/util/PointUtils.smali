.class public final Lcom/king/camera/scan/util/PointUtils;
.super Ljava/lang/Object;
.source "PointUtils.java"


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 17
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 18
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static transform(IIIIII)Landroid/graphics/Point;
    .locals 7

    const/4 v6, 0x0

    move v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    move v5, p5

    .line 62
    invoke-static/range {v0 .. v6}, Lcom/king/camera/scan/util/PointUtils;->transform(IIIIIIZ)Landroid/graphics/Point;

    move-result-object p0

    return-object p0
.end method

.method public static transform(IIIIIIZ)Landroid/graphics/Point;
    .locals 4

    .line 78
    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    invoke-static {p3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {p4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-static {p5}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    filled-new-array {v0, v1, v2, v3}, [Ljava/lang/Object;

    move-result-object v0

    const-string v1, "transform: %d,%d | %d,%d"

    invoke-static {v1, v0}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    int-to-float p4, p4

    const/high16 v0, 0x3f800000    # 1.0f

    mul-float v1, p4, v0

    int-to-float p2, p2

    div-float/2addr v1, p2

    int-to-float p5, p5

    mul-float/2addr v0, p5

    int-to-float p3, p3

    div-float/2addr v0, p3

    .line 81
    new-instance v2, Landroid/graphics/Point;

    invoke-direct {v2}, Landroid/graphics/Point;-><init>()V

    const/high16 v3, 0x40000000    # 2.0f

    if-eqz p6, :cond_0

    .line 84
    invoke-static {v1, v0}, Ljava/lang/Math;->min(FF)F

    move-result p6

    mul-float/2addr p2, p6

    sub-float/2addr p2, p4

    .line 85
    invoke-static {p2}, Ljava/lang/Math;->abs(F)F

    move-result p2

    div-float/2addr p2, v3

    mul-float/2addr p3, p6

    sub-float/2addr p3, p5

    .line 86
    invoke-static {p3}, Ljava/lang/Math;->abs(F)F

    move-result p3

    div-float/2addr p3, v3

    int-to-float p0, p0

    mul-float/2addr p0, p6

    add-float/2addr p0, p2

    float-to-int p0, p0

    .line 87
    iput p0, v2, Landroid/graphics/Point;->x:I

    int-to-float p0, p1

    mul-float/2addr p0, p6

    add-float/2addr p0, p3

    float-to-int p0, p0

    .line 88
    iput p0, v2, Landroid/graphics/Point;->y:I

    goto :goto_0

    .line 91
    :cond_0
    invoke-static {v1, v0}, Ljava/lang/Math;->max(FF)F

    move-result p6

    mul-float/2addr p2, p6

    sub-float/2addr p2, p4

    .line 92
    invoke-static {p2}, Ljava/lang/Math;->abs(F)F

    move-result p2

    div-float/2addr p2, v3

    mul-float/2addr p3, p6

    sub-float/2addr p3, p5

    .line 93
    invoke-static {p3}, Ljava/lang/Math;->abs(F)F

    move-result p3

    div-float/2addr p3, v3

    int-to-float p0, p0

    mul-float/2addr p0, p6

    sub-float/2addr p0, p2

    float-to-int p0, p0

    .line 94
    iput p0, v2, Landroid/graphics/Point;->x:I

    int-to-float p0, p1

    mul-float/2addr p0, p6

    sub-float/2addr p0, p3

    float-to-int p0, p0

    .line 95
    iput p0, v2, Landroid/graphics/Point;->y:I

    :goto_0
    return-object v2
.end method

.method public static transform(Landroid/graphics/Point;IIII)Landroid/graphics/Point;
    .locals 6

    const/4 v5, 0x0

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    .line 32
    invoke-static/range {v0 .. v5}, Lcom/king/camera/scan/util/PointUtils;->transform(Landroid/graphics/Point;IIIIZ)Landroid/graphics/Point;

    move-result-object p0

    return-object p0
.end method

.method public static transform(Landroid/graphics/Point;IIIIZ)Landroid/graphics/Point;
    .locals 7

    .line 47
    iget v0, p0, Landroid/graphics/Point;->x:I

    iget v1, p0, Landroid/graphics/Point;->y:I

    move v2, p1

    move v3, p2

    move v4, p3

    move v5, p4

    move v6, p5

    invoke-static/range {v0 .. v6}, Lcom/king/camera/scan/util/PointUtils;->transform(IIIIIIZ)Landroid/graphics/Point;

    move-result-object p0

    return-object p0
.end method
