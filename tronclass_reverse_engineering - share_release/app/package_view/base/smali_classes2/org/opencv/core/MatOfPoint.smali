.class public Lorg/opencv/core/MatOfPoint;
.super Lorg/opencv/core/Mat;
.source "MatOfPoint.java"


# static fields
.field private static final _channels:I = 0x2

.field private static final _depth:I = 0x4


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 16
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    .line 17
    invoke-virtual {p0}, Lorg/opencv/core/MatOfPoint;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x2

    const/4 p2, 0x4

    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/MatOfPoint;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 18
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

    .line 27
    invoke-static {}, Lorg/opencv/core/Range;->all()Lorg/opencv/core/Range;

    move-result-object v0

    invoke-direct {p0, p1, v0}, Lorg/opencv/core/Mat;-><init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Range;)V

    .line 28
    invoke-virtual {p0}, Lorg/opencv/core/MatOfPoint;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x2

    const/4 v0, 0x4

    invoke-virtual {p0, p1, v0}, Lorg/opencv/core/MatOfPoint;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 29
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Incompatible Mat"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_1
    :goto_0
    return-void
.end method

.method public varargs constructor <init>([Lorg/opencv/core/Point;)V
    .locals 0

    .line 34
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    .line 35
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfPoint;->fromArray([Lorg/opencv/core/Point;)V

    return-void
.end method

.method public static fromNativeAddr(J)Lorg/opencv/core/MatOfPoint;
    .locals 1

    .line 23
    new-instance v0, Lorg/opencv/core/MatOfPoint;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/MatOfPoint;-><init>(J)V

    return-object v0
.end method


# virtual methods
.method public alloc(I)V
    .locals 2

    if-lez p1, :cond_0

    const/4 v0, 0x4

    const/4 v1, 0x2

    .line 40
    invoke-static {v0, v1}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result v0

    const/4 v1, 0x1

    invoke-super {p0, p1, v1, v0}, Lorg/opencv/core/Mat;->create(III)V

    :cond_0
    return-void
.end method

.method public varargs fromArray([Lorg/opencv/core/Point;)V
    .locals 8

    if-eqz p1, :cond_2

    .line 44
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_1

    .line 46
    :cond_0
    array-length v0, p1

    .line 47
    invoke-virtual {p0, v0}, Lorg/opencv/core/MatOfPoint;->alloc(I)V

    mul-int/lit8 v1, v0, 0x2

    .line 48
    new-array v1, v1, [I

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v0, :cond_1

    .line 50
    aget-object v4, p1, v3

    mul-int/lit8 v5, v3, 0x2

    .line 51
    iget-wide v6, v4, Lorg/opencv/core/Point;->x:D

    double-to-int v6, v6

    aput v6, v1, v5

    add-int/lit8 v5, v5, 0x1

    .line 52
    iget-wide v6, v4, Lorg/opencv/core/Point;->y:D

    double-to-int v4, v6

    aput v4, v1, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 54
    :cond_1
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/MatOfPoint;->put(II[I)I

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
            "Lorg/opencv/core/Point;",
            ">;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 70
    new-array v0, v0, [Lorg/opencv/core/Point;

    invoke-interface {p1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Lorg/opencv/core/Point;

    .line 71
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfPoint;->fromArray([Lorg/opencv/core/Point;)V

    return-void
.end method

.method public toArray()[Lorg/opencv/core/Point;
    .locals 10

    .line 58
    invoke-virtual {p0}, Lorg/opencv/core/MatOfPoint;->total()J

    move-result-wide v0

    long-to-int v0, v0

    .line 59
    new-array v1, v0, [Lorg/opencv/core/Point;

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    mul-int/lit8 v2, v0, 0x2

    .line 62
    new-array v2, v2, [I

    const/4 v3, 0x0

    .line 63
    invoke-virtual {p0, v3, v3, v2}, Lorg/opencv/core/MatOfPoint;->get(II[I)I

    :goto_0
    if-ge v3, v0, :cond_1

    .line 65
    new-instance v4, Lorg/opencv/core/Point;

    mul-int/lit8 v5, v3, 0x2

    aget v6, v2, v5

    int-to-double v6, v6

    add-int/lit8 v5, v5, 0x1

    aget v5, v2, v5

    int-to-double v8, v5

    invoke-direct {v4, v6, v7, v8, v9}, Lorg/opencv/core/Point;-><init>(DD)V

    aput-object v4, v1, v3

    add-int/lit8 v3, v3, 0x1

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
            "Lorg/opencv/core/Point;",
            ">;"
        }
    .end annotation

    .line 75
    invoke-virtual {p0}, Lorg/opencv/core/MatOfPoint;->toArray()[Lorg/opencv/core/Point;

    move-result-object v0

    .line 76
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method
