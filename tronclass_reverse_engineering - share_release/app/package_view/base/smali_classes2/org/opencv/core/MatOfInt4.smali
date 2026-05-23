.class public Lorg/opencv/core/MatOfInt4;
.super Lorg/opencv/core/Mat;
.source "MatOfInt4.java"


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
    invoke-virtual {p0}, Lorg/opencv/core/MatOfInt4;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfInt4;->checkVector(II)I

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
    invoke-virtual {p0}, Lorg/opencv/core/MatOfInt4;->empty()Z

    move-result p1

    if-nez p1, :cond_1

    const/4 p1, 0x4

    invoke-virtual {p0, p1, p1}, Lorg/opencv/core/MatOfInt4;->checkVector(II)I

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

.method public varargs constructor <init>([I)V
    .locals 0

    .line 35
    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    .line 36
    invoke-virtual {p0, p1}, Lorg/opencv/core/MatOfInt4;->fromArray([I)V

    return-void
.end method

.method public static fromNativeAddr(J)Lorg/opencv/core/MatOfInt4;
    .locals 1

    .line 24
    new-instance v0, Lorg/opencv/core/MatOfInt4;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/MatOfInt4;-><init>(J)V

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

.method public varargs fromArray([I)V
    .locals 1

    if-eqz p1, :cond_1

    .line 45
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_0

    .line 47
    :cond_0
    array-length v0, p1

    div-int/lit8 v0, v0, 0x4

    .line 48
    invoke-virtual {p0, v0}, Lorg/opencv/core/MatOfInt4;->alloc(I)V

    const/4 v0, 0x0

    .line 49
    invoke-virtual {p0, v0, v0, p1}, Lorg/opencv/core/MatOfInt4;->put(II[I)I

    :cond_1
    :goto_0
    return-void
.end method

.method public fromList(Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 64
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v0

    if-nez v0, :cond_0

    goto :goto_1

    :cond_0
    const/4 v0, 0x0

    .line 66
    new-array v1, v0, [Ljava/lang/Integer;

    invoke-interface {p1, v1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Ljava/lang/Integer;

    .line 67
    array-length v1, p1

    new-array v1, v1, [I

    .line 68
    :goto_0
    array-length v2, p1

    if-ge v0, v2, :cond_1

    .line 69
    aget-object v2, p1, v0

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    aput v2, v1, v0

    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 70
    :cond_1
    invoke-virtual {p0, v1}, Lorg/opencv/core/MatOfInt4;->fromArray([I)V

    :cond_2
    :goto_1
    return-void
.end method

.method public toArray()[I
    .locals 3

    const/4 v0, 0x4

    .line 53
    invoke-virtual {p0, v0, v0}, Lorg/opencv/core/MatOfInt4;->checkVector(II)I

    move-result v0

    if-ltz v0, :cond_1

    mul-int/lit8 v1, v0, 0x4

    .line 56
    new-array v1, v1, [I

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    const/4 v0, 0x0

    .line 59
    invoke-virtual {p0, v0, v0, v1}, Lorg/opencv/core/MatOfInt4;->get(II[I)I

    return-object v1

    .line 55
    :cond_1
    new-instance v0, Ljava/lang/RuntimeException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Native Mat has unexpected type or size: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lorg/opencv/core/MatOfInt4;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public toList()Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 74
    invoke-virtual {p0}, Lorg/opencv/core/MatOfInt4;->toArray()[I

    move-result-object v0

    .line 75
    array-length v1, v0

    new-array v1, v1, [Ljava/lang/Integer;

    const/4 v2, 0x0

    .line 76
    :goto_0
    array-length v3, v0

    if-ge v2, v3, :cond_0

    .line 77
    aget v3, v0, v2

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    aput-object v3, v1, v2

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 78
    :cond_0
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method
