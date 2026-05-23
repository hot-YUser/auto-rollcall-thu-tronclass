.class public Lorg/opencv/core/MatOfRotatedRect;
.super Lorg/opencv/core/Mat;
.source "MatOfRotatedRect.java"


# static fields
.field private static final _channels:I = 0x5

.field private static final _depth:I = 0x5


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 20
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    .line 21
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRotatedRect;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x5

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfRotatedRect;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 22
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incompatible Mat"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_1
    :goto_0
    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;)V
    .locals 1

    .line 31
    invoke-static {}, Lorg/opencv/core/Range;->all()Lorg/opencv/core/Range;

    move-result-object v0

    invoke-direct {p0, p1, v0}, Lorg/opencv/core/Mat;-><init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Range;)V

    .line 32
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRotatedRect;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x5

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfRotatedRect;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 33
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Incompatible Mat"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_1
    :goto_0
    return-void
.end method

.method public varargs constructor <init>([Lorg/opencv/core/RotatedRect;)V
    .locals 0

    .line 38
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    .line 39
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRotatedRect;->fromArray([Lorg/opencv/core/RotatedRect;)V

    return-void
.end method

.method public static fromNativeAddr(J)Lorg/opencv/core/MatOfRotatedRect;
    .locals 1

    .line 27
    new-instance v0, Lorg/opencv/core/MatOfRotatedRect;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/MatOfRotatedRect;-><init>(J)V

    return-object v0
.end method


# virtual methods
.method public alloc(I)V
    .locals 2

    if-lez p1, :cond_0

    const/4 v0, 0x1

    const/4 v1, 0x5

    .line 44
    invoke-static {v1, v1}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result v1

    invoke-super {p0, p1, v0, v1}, Lorg/opencv/core/Mat;->create(III)V

    :cond_0
    return-void
.end method

.method public varargs fromArray([Lorg/opencv/core/RotatedRect;)V
    .locals 9

    if-eqz p1, :cond_2

    .line 48
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_1

    .line 50
    :cond_0
    array-length v0, p1

    .line 51
    invoke-virtual {p0, v0}, Lorg/opencv/core/MatOfRotatedRect;->alloc(I)V

    mul-int/lit8 v1, v0, 0x5

    .line 52
    new-array v1, v1, [F

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v0, :cond_1

    .line 54
    aget-object v4, p1, v3

    mul-int/lit8 v5, v3, 0x5

    .line 55
    iget-object v6, v4, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v6, v6, Lorg/opencv/core/Point;->x:D

    double-to-float v6, v6

    aput v6, v1, v5

    add-int/lit8 v6, v5, 0x1

    .line 56
    iget-object v7, v4, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v7, v7, Lorg/opencv/core/Point;->y:D

    double-to-float v7, v7

    aput v7, v1, v6

    add-int/lit8 v6, v5, 0x2

    .line 57
    iget-object v7, v4, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v7, v7, Lorg/opencv/core/Size;->width:D

    double-to-float v7, v7

    aput v7, v1, v6

    add-int/lit8 v6, v5, 0x3

    .line 58
    iget-object v7, v4, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v7, v7, Lorg/opencv/core/Size;->height:D

    double-to-float v7, v7

    aput v7, v1, v6

    add-int/lit8 v5, v5, 0x4

    .line 59
    iget-wide v6, v4, Lorg/opencv/core/RotatedRect;->angle:D

    double-to-float v4, v6

    aput v4, v1, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 61
    :cond_1
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/MatOfRotatedRect;->put(II[F)I

    :cond_2
    :goto_1
    return-void
.end method

.method public fromList(Ljava/util/List;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/RotatedRect;",
            ">;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 78
    new-array v0, v0, [Lorg/opencv/core/RotatedRect;

    invoke-interface {p1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Lorg/opencv/core/RotatedRect;

    .line 79
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRotatedRect;->fromArray([Lorg/opencv/core/RotatedRect;)V

    return-void
.end method

.method public toArray()[Lorg/opencv/core/RotatedRect;
    .locals 12

    .line 65
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRotatedRect;->total()J

    move-result-wide v0

    long-to-int v0, v0

    .line 66
    new-array v1, v0, [Lorg/opencv/core/RotatedRect;

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    const/4 v2, 0x5

    .line 69
    new-array v2, v2, [F

    const/4 v3, 0x0

    move v4, v3

    :goto_0
    if-ge v4, v0, :cond_1

    .line 71
    invoke-virtual {p0, v4, v3, v2}, Lorg/opencv/core/MatOfRotatedRect;->get(II[F)I

    .line 72
    new-instance v5, Lorg/opencv/core/RotatedRect;

    new-instance v6, Lorg/opencv/core/Point;

    aget v7, v2, v3

    float-to-double v7, v7

    const/4 v9, 0x1

    aget v9, v2, v9

    float-to-double v9, v9

    invoke-direct {v6, v7, v8, v9, v10}, Lorg/opencv/core/Point;-><init>(DD)V

    new-instance v7, Lorg/opencv/core/Size;

    const/4 v8, 0x2

    aget v8, v2, v8

    float-to-double v8, v8

    const/4 v10, 0x3

    aget v10, v2, v10

    float-to-double v10, v10

    invoke-direct {v7, v8, v9, v10, v11}, Lorg/opencv/core/Size;-><init>(DD)V

    const/4 v8, 0x4

    aget v8, v2, v8

    float-to-double v8, v8

    invoke-direct {v5, v6, v7, v8, v9}, Lorg/opencv/core/RotatedRect;-><init>(Lorg/opencv/core/Point;Lorg/opencv/core/Size;D)V

    aput-object v5, v1, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    :cond_1
    return-object v1
.end method

.method public toList()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lorg/opencv/core/RotatedRect;",
            ">;"
        }
    .end annotation

    .line 83
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRotatedRect;->toArray()[Lorg/opencv/core/RotatedRect;

    move-result-object v0

    .line 84
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method
