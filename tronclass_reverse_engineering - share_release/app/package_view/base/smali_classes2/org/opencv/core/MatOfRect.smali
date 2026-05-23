.class public Lorg/opencv/core/MatOfRect;
.super Lorg/opencv/core/Mat;
.source "MatOfRect.java"


# static fields
.field private static final _channels:I = 0x4

.field private static final _depth:I = 0x4


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 13
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 17
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    .line 18
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfRect;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 19
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

    .line 28
    invoke-static {}, Lorg/opencv/core/Range;->all()Lorg/opencv/core/Range;

    move-result-object v0

    invoke-direct {p0, p1, v0}, Lorg/opencv/core/Mat;-><init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Range;)V

    .line 29
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfRect;->checkVector(II)I

    move-result p1

    if-ltz p1, :cond_0

    goto :goto_0

    .line 30
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Incompatible Mat"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_1
    :goto_0
    return-void
.end method

.method public varargs constructor <init>([Lorg/opencv/core/Rect;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    .line 36
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRect;->fromArray([Lorg/opencv/core/Rect;)V

    return-void
.end method

.method public static fromNativeAddr(J)Lorg/opencv/core/MatOfRect;
    .locals 1

    .line 24
    new-instance v0, Lorg/opencv/core/MatOfRect;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/MatOfRect;-><init>(J)V

    return-object v0
.end method


# virtual methods
.method public alloc(I)V
    .locals 2

    if-lez p1, :cond_0

    const/4 v0, 0x1

    const/4 v1, 0x4

    .line 41
    invoke-static {v1, v1}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result v1

    invoke-super {p0, p1, v0, v1}, Lorg/opencv/core/Mat;->create(III)V

    :cond_0
    return-void
.end method

.method public varargs fromArray([Lorg/opencv/core/Rect;)V
    .locals 8

    if-eqz p1, :cond_2

    .line 45
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_1

    .line 47
    :cond_0
    array-length v0, p1

    .line 48
    invoke-virtual {p0, v0}, Lorg/opencv/core/MatOfRect;->alloc(I)V

    mul-int/lit8 v1, v0, 0x4

    .line 49
    new-array v1, v1, [I

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v0, :cond_1

    .line 51
    aget-object v4, p1, v3

    mul-int/lit8 v5, v3, 0x4

    .line 52
    iget v6, v4, Lorg/opencv/core/Rect;->x:I

    aput v6, v1, v5

    add-int/lit8 v6, v5, 0x1

    .line 53
    iget v7, v4, Lorg/opencv/core/Rect;->y:I

    aput v7, v1, v6

    add-int/lit8 v6, v5, 0x2

    .line 54
    iget v7, v4, Lorg/opencv/core/Rect;->width:I

    aput v7, v1, v6

    add-int/lit8 v5, v5, 0x3

    .line 55
    iget v4, v4, Lorg/opencv/core/Rect;->height:I

    aput v4, v1, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 57
    :cond_1
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/MatOfRect;->put(II[I)I

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
            "Lorg/opencv/core/Rect;",
            ">;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 73
    new-array v0, v0, [Lorg/opencv/core/Rect;

    invoke-interface {p1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Lorg/opencv/core/Rect;

    .line 74
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRect;->fromArray([Lorg/opencv/core/Rect;)V

    return-void
.end method

.method public toArray()[Lorg/opencv/core/Rect;
    .locals 9

    .line 62
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect;->total()J

    move-result-wide v0

    long-to-int v0, v0

    .line 63
    new-array v1, v0, [Lorg/opencv/core/Rect;

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    mul-int/lit8 v2, v0, 0x4

    .line 66
    new-array v2, v2, [I

    const/4 v3, 0x0

    .line 67
    invoke-virtual {p0, v3, v3, v2}, Lorg/opencv/core/MatOfRect;->get(II[I)I

    :goto_0
    if-ge v3, v0, :cond_1

    .line 69
    new-instance v4, Lorg/opencv/core/Rect;

    mul-int/lit8 v5, v3, 0x4

    aget v6, v2, v5

    add-int/lit8 v7, v5, 0x1

    aget v7, v2, v7

    add-int/lit8 v8, v5, 0x2

    aget v8, v2, v8

    add-int/lit8 v5, v5, 0x3

    aget v5, v2, v5

    invoke-direct {v4, v6, v7, v8, v5}, Lorg/opencv/core/Rect;-><init>(IIII)V

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
            "Lorg/opencv/core/Rect;",
            ">;"
        }
    .end annotation

    .line 78
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect;->toArray()[Lorg/opencv/core/Rect;

    move-result-object v0

    .line 79
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method
