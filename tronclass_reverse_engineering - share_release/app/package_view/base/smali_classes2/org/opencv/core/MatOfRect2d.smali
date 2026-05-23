.class public Lorg/opencv/core/MatOfRect2d;
.super Lorg/opencv/core/Mat;
.source "MatOfRect2d.java"


# static fields
.field private static final _channels:I = 0x4

.field private static final _depth:I = 0x6


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
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect2d;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    const/4 p2, 0x6

    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/MatOfRect2d;->checkVector(II)I

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
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect2d;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    const/4 v0, 0x6

    invoke-virtual {p0, p1, v0}, Lorg/opencv/core/MatOfRect2d;->checkVector(II)I

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

.method public varargs constructor <init>([Lorg/opencv/core/Rect2d;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    .line 36
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRect2d;->fromArray([Lorg/opencv/core/Rect2d;)V

    return-void
.end method

.method public static fromNativeAddr(J)Lorg/opencv/core/MatOfRect2d;
    .locals 1

    .line 24
    new-instance v0, Lorg/opencv/core/MatOfRect2d;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/MatOfRect2d;-><init>(J)V

    return-object v0
.end method


# virtual methods
.method public alloc(I)V
    .locals 2

    if-lez p1, :cond_0

    const/4 v0, 0x6

    const/4 v1, 0x4

    .line 41
    invoke-static {v0, v1}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result v0

    const/4 v1, 0x1

    invoke-super {p0, p1, v1, v0}, Lorg/opencv/core/Mat;->create(III)V

    :cond_0
    return-void
.end method

.method public varargs fromArray([Lorg/opencv/core/Rect2d;)V
    .locals 9

    if-eqz p1, :cond_2

    .line 45
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_1

    .line 47
    :cond_0
    array-length v0, p1

    .line 48
    invoke-virtual {p0, v0}, Lorg/opencv/core/MatOfRect2d;->alloc(I)V

    mul-int/lit8 v1, v0, 0x4

    .line 49
    new-array v1, v1, [D

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v0, :cond_1

    .line 51
    aget-object v4, p1, v3

    mul-int/lit8 v5, v3, 0x4

    .line 52
    iget-wide v6, v4, Lorg/opencv/core/Rect2d;->x:D

    aput-wide v6, v1, v5

    add-int/lit8 v6, v5, 0x1

    .line 53
    iget-wide v7, v4, Lorg/opencv/core/Rect2d;->y:D

    aput-wide v7, v1, v6

    add-int/lit8 v6, v5, 0x2

    .line 54
    iget-wide v7, v4, Lorg/opencv/core/Rect2d;->width:D

    aput-wide v7, v1, v6

    add-int/lit8 v5, v5, 0x3

    .line 55
    iget-wide v6, v4, Lorg/opencv/core/Rect2d;->height:D

    aput-wide v6, v1, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 57
    :cond_1
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/MatOfRect2d;->put(II[D)I

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
            "Lorg/opencv/core/Rect2d;",
            ">;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 73
    new-array v0, v0, [Lorg/opencv/core/Rect2d;

    invoke-interface {p1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Lorg/opencv/core/Rect2d;

    .line 74
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfRect2d;->fromArray([Lorg/opencv/core/Rect2d;)V

    return-void
.end method

.method public toArray()[Lorg/opencv/core/Rect2d;
    .locals 14

    .line 62
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect2d;->total()J

    move-result-wide v0

    long-to-int v0, v0

    .line 63
    new-array v1, v0, [Lorg/opencv/core/Rect2d;

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    mul-int/lit8 v2, v0, 0x4

    .line 66
    new-array v2, v2, [D

    const/4 v3, 0x0

    .line 67
    invoke-virtual {p0, v3, v3, v2}, Lorg/opencv/core/MatOfRect2d;->get(II[D)I

    :goto_0
    if-ge v3, v0, :cond_1

    .line 69
    new-instance v13, Lorg/opencv/core/Rect2d;

    mul-int/lit8 v4, v3, 0x4

    aget-wide v5, v2, v4

    add-int/lit8 v7, v4, 0x1

    aget-wide v7, v2, v7

    add-int/lit8 v9, v4, 0x2

    aget-wide v9, v2, v9

    add-int/lit8 v4, v4, 0x3

    aget-wide v11, v2, v4

    move-object v4, v13

    invoke-direct/range {v4 .. v12}, Lorg/opencv/core/Rect2d;-><init>(DDDD)V

    aput-object v13, v1, v3

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
            "Lorg/opencv/core/Rect2d;",
            ">;"
        }
    .end annotation

    .line 78
    invoke-virtual {p0}, Lorg/opencv/core/MatOfRect2d;->toArray()[Lorg/opencv/core/Rect2d;

    move-result-object v0

    .line 79
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method
