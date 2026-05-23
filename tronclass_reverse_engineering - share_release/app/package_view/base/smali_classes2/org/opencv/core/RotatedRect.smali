.class public Lorg/opencv/core/RotatedRect;
.super Ljava/lang/Object;
.source "RotatedRect.java"


# instance fields
.field public angle:D

.field public center:Lorg/opencv/core/Point;

.field public size:Lorg/opencv/core/Size;


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 10
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 11
    new-instance v0, Lorg/opencv/core/Point;

    invoke-direct {v0}, Lorg/opencv/core/Point;-><init>()V

    iput-object v0, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    .line 12
    new-instance v0, Lorg/opencv/core/Size;

    invoke-direct {v0}, Lorg/opencv/core/Size;-><init>()V

    iput-object v0, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    const-wide/16 v0, 0x0

    .line 13
    iput-wide v0, p0, Lorg/opencv/core/RotatedRect;->angle:D

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Point;Lorg/opencv/core/Size;D)V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 17
    invoke-virtual {p1}, Lorg/opencv/core/Point;->clone()Lorg/opencv/core/Point;

    move-result-object p1

    iput-object p1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    .line 18
    invoke-virtual {p2}, Lorg/opencv/core/Size;->clone()Lorg/opencv/core/Size;

    move-result-object p1

    iput-object p1, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    .line 19
    iput-wide p3, p0, Lorg/opencv/core/RotatedRect;->angle:D

    return-void
.end method

.method public constructor <init>([D)V
    .locals 0

    .line 23
    invoke-direct {p0}, Lorg/opencv/core/RotatedRect;-><init>()V

    .line 24
    invoke-virtual {p0, p1}, Lorg/opencv/core/RotatedRect;->set([D)V

    return-void
.end method


# virtual methods
.method public boundingRect()Lorg/opencv/core/Rect;
    .locals 13

    const/4 v0, 0x4

    .line 68
    new-array v0, v0, [Lorg/opencv/core/Point;

    .line 69
    invoke-virtual {p0, v0}, Lorg/opencv/core/RotatedRect;->points([Lorg/opencv/core/Point;)V

    .line 70
    new-instance v1, Lorg/opencv/core/Rect;

    const/4 v2, 0x0

    aget-object v3, v0, v2

    iget-wide v3, v3, Lorg/opencv/core/Point;->x:D

    const/4 v5, 0x1

    aget-object v6, v0, v5

    iget-wide v6, v6, Lorg/opencv/core/Point;->x:D

    invoke-static {v3, v4, v6, v7}, Ljava/lang/Math;->min(DD)D

    move-result-wide v3

    const/4 v6, 0x2

    aget-object v7, v0, v6

    iget-wide v7, v7, Lorg/opencv/core/Point;->x:D

    invoke-static {v3, v4, v7, v8}, Ljava/lang/Math;->min(DD)D

    move-result-wide v3

    const/4 v7, 0x3

    aget-object v8, v0, v7

    iget-wide v8, v8, Lorg/opencv/core/Point;->x:D

    invoke-static {v3, v4, v8, v9}, Ljava/lang/Math;->min(DD)D

    move-result-wide v3

    invoke-static {v3, v4}, Ljava/lang/Math;->floor(D)D

    move-result-wide v3

    double-to-int v3, v3

    aget-object v4, v0, v2

    iget-wide v8, v4, Lorg/opencv/core/Point;->y:D

    aget-object v4, v0, v5

    iget-wide v10, v4, Lorg/opencv/core/Point;->y:D

    .line 71
    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->min(DD)D

    move-result-wide v8

    aget-object v4, v0, v6

    iget-wide v10, v4, Lorg/opencv/core/Point;->y:D

    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->min(DD)D

    move-result-wide v8

    aget-object v4, v0, v7

    iget-wide v10, v4, Lorg/opencv/core/Point;->y:D

    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->min(DD)D

    move-result-wide v8

    invoke-static {v8, v9}, Ljava/lang/Math;->floor(D)D

    move-result-wide v8

    double-to-int v4, v8

    aget-object v8, v0, v2

    iget-wide v8, v8, Lorg/opencv/core/Point;->x:D

    aget-object v10, v0, v5

    iget-wide v10, v10, Lorg/opencv/core/Point;->x:D

    .line 72
    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->max(DD)D

    move-result-wide v8

    aget-object v10, v0, v6

    iget-wide v10, v10, Lorg/opencv/core/Point;->x:D

    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->max(DD)D

    move-result-wide v8

    aget-object v10, v0, v7

    iget-wide v10, v10, Lorg/opencv/core/Point;->x:D

    invoke-static {v8, v9, v10, v11}, Ljava/lang/Math;->max(DD)D

    move-result-wide v8

    invoke-static {v8, v9}, Ljava/lang/Math;->ceil(D)D

    move-result-wide v8

    double-to-int v8, v8

    aget-object v2, v0, v2

    iget-wide v9, v2, Lorg/opencv/core/Point;->y:D

    aget-object v2, v0, v5

    iget-wide v11, v2, Lorg/opencv/core/Point;->y:D

    .line 73
    invoke-static {v9, v10, v11, v12}, Ljava/lang/Math;->max(DD)D

    move-result-wide v9

    aget-object v2, v0, v6

    iget-wide v11, v2, Lorg/opencv/core/Point;->y:D

    invoke-static {v9, v10, v11, v12}, Ljava/lang/Math;->max(DD)D

    move-result-wide v9

    aget-object v0, v0, v7

    iget-wide v6, v0, Lorg/opencv/core/Point;->y:D

    invoke-static {v9, v10, v6, v7}, Ljava/lang/Math;->max(DD)D

    move-result-wide v6

    invoke-static {v6, v7}, Ljava/lang/Math;->ceil(D)D

    move-result-wide v6

    double-to-int v0, v6

    invoke-direct {v1, v3, v4, v8, v0}, Lorg/opencv/core/Rect;-><init>(IIII)V

    .line 74
    iget v0, v1, Lorg/opencv/core/Rect;->width:I

    iget v2, v1, Lorg/opencv/core/Rect;->x:I

    sub-int/2addr v2, v5

    sub-int/2addr v0, v2

    iput v0, v1, Lorg/opencv/core/Rect;->width:I

    .line 75
    iget v0, v1, Lorg/opencv/core/Rect;->height:I

    iget v2, v1, Lorg/opencv/core/Rect;->y:I

    sub-int/2addr v2, v5

    sub-int/2addr v0, v2

    iput v0, v1, Lorg/opencv/core/Rect;->height:I

    return-object v1
.end method

.method public bridge synthetic clone()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/CloneNotSupportedException;
        }
    .end annotation

    .line 4
    invoke-virtual {p0}, Lorg/opencv/core/RotatedRect;->clone()Lorg/opencv/core/RotatedRect;

    move-result-object v0

    return-object v0
.end method

.method public clone()Lorg/opencv/core/RotatedRect;
    .locals 5

    .line 80
    new-instance v0, Lorg/opencv/core/RotatedRect;

    iget-object v1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v3, p0, Lorg/opencv/core/RotatedRect;->angle:D

    invoke-direct {v0, v1, v2, v3, v4}, Lorg/opencv/core/RotatedRect;-><init>(Lorg/opencv/core/Point;Lorg/opencv/core/Size;D)V

    return-object v0
.end method

.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    .line 104
    :cond_0
    instance-of v1, p1, Lorg/opencv/core/RotatedRect;

    const/4 v2, 0x0

    if-nez v1, :cond_1

    return v2

    .line 105
    :cond_1
    check-cast p1, Lorg/opencv/core/RotatedRect;

    .line 106
    iget-object v1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-object v3, p1, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    invoke-virtual {v1, v3}, Lorg/opencv/core/Point;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-object v1, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-object v3, p1, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    invoke-virtual {v1, v3}, Lorg/opencv/core/Size;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-wide v3, p0, Lorg/opencv/core/RotatedRect;->angle:D

    iget-wide v5, p1, Lorg/opencv/core/RotatedRect;->angle:D

    cmpl-double p1, v3, v5

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    move v0, v2

    :goto_0
    return v0
.end method

.method public hashCode()I
    .locals 7

    .line 88
    iget-object v0, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v0, v0, Lorg/opencv/core/Point;->x:D

    invoke-static {v0, v1}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v0

    const/16 v2, 0x20

    ushr-long v3, v0, v2

    xor-long/2addr v0, v3

    long-to-int v0, v0

    const/16 v1, 0x1f

    add-int/2addr v0, v1

    .line 90
    iget-object v3, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v3, v3, Lorg/opencv/core/Point;->y:D

    invoke-static {v3, v4}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v3

    mul-int/2addr v0, v1

    ushr-long v5, v3, v2

    xor-long/2addr v3, v5

    long-to-int v3, v3

    add-int/2addr v0, v3

    .line 92
    iget-object v3, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v3, v3, Lorg/opencv/core/Size;->width:D

    invoke-static {v3, v4}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v3

    mul-int/2addr v0, v1

    ushr-long v5, v3, v2

    xor-long/2addr v3, v5

    long-to-int v3, v3

    add-int/2addr v0, v3

    .line 94
    iget-object v3, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v3, v3, Lorg/opencv/core/Size;->height:D

    invoke-static {v3, v4}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v3

    mul-int/2addr v0, v1

    ushr-long v5, v3, v2

    xor-long/2addr v3, v5

    long-to-int v3, v3

    add-int/2addr v0, v3

    .line 96
    iget-wide v3, p0, Lorg/opencv/core/RotatedRect;->angle:D

    invoke-static {v3, v4}, Ljava/lang/Double;->doubleToLongBits(D)J

    move-result-wide v3

    mul-int/2addr v0, v1

    ushr-long v1, v3, v2

    xor-long/2addr v1, v3

    long-to-int v1, v1

    add-int/2addr v0, v1

    return v0
.end method

.method public points([Lorg/opencv/core/Point;)V
    .locals 12

    .line 45
    iget-wide v0, p0, Lorg/opencv/core/RotatedRect;->angle:D

    const-wide v2, 0x400921fb54442d18L    # Math.PI

    mul-double/2addr v0, v2

    const-wide v2, 0x4066800000000000L    # 180.0

    div-double/2addr v0, v2

    .line 46
    invoke-static {v0, v1}, Ljava/lang/Math;->cos(D)D

    move-result-wide v2

    const-wide/high16 v4, 0x3fe0000000000000L    # 0.5

    mul-double/2addr v2, v4

    .line 47
    invoke-static {v0, v1}, Ljava/lang/Math;->sin(D)D

    move-result-wide v0

    mul-double/2addr v0, v4

    .line 49
    new-instance v4, Lorg/opencv/core/Point;

    iget-object v5, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v5, v5, Lorg/opencv/core/Point;->x:D

    iget-object v7, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v7, v7, Lorg/opencv/core/Size;->height:D

    mul-double/2addr v7, v0

    sub-double/2addr v5, v7

    iget-object v7, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v7, v7, Lorg/opencv/core/Size;->width:D

    mul-double/2addr v7, v2

    sub-double/2addr v5, v7

    iget-object v7, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v7, v7, Lorg/opencv/core/Point;->y:D

    iget-object v9, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v9, v9, Lorg/opencv/core/Size;->height:D

    mul-double/2addr v9, v2

    add-double/2addr v7, v9

    iget-object v9, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v9, v9, Lorg/opencv/core/Size;->width:D

    mul-double/2addr v9, v0

    sub-double/2addr v7, v9

    invoke-direct {v4, v5, v6, v7, v8}, Lorg/opencv/core/Point;-><init>(DD)V

    const/4 v5, 0x0

    aput-object v4, p1, v5

    .line 53
    new-instance v4, Lorg/opencv/core/Point;

    iget-object v6, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v6, v6, Lorg/opencv/core/Point;->x:D

    iget-object v8, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v8, v8, Lorg/opencv/core/Size;->height:D

    mul-double/2addr v8, v0

    add-double/2addr v6, v8

    iget-object v8, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v8, v8, Lorg/opencv/core/Size;->width:D

    mul-double/2addr v8, v2

    sub-double/2addr v6, v8

    iget-object v8, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v8, v8, Lorg/opencv/core/Point;->y:D

    iget-object v10, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v10, v10, Lorg/opencv/core/Size;->height:D

    mul-double/2addr v2, v10

    sub-double/2addr v8, v2

    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v2, v2, Lorg/opencv/core/Size;->width:D

    mul-double/2addr v0, v2

    sub-double/2addr v8, v0

    invoke-direct {v4, v6, v7, v8, v9}, Lorg/opencv/core/Point;-><init>(DD)V

    const/4 v0, 0x1

    aput-object v4, p1, v0

    .line 57
    new-instance v1, Lorg/opencv/core/Point;

    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v2, v2, Lorg/opencv/core/Point;->x:D

    const-wide/high16 v6, 0x4000000000000000L    # 2.0

    mul-double/2addr v2, v6

    aget-object v4, p1, v5

    iget-wide v8, v4, Lorg/opencv/core/Point;->x:D

    sub-double/2addr v2, v8

    iget-object v4, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v8, v4, Lorg/opencv/core/Point;->y:D

    mul-double/2addr v8, v6

    aget-object v4, p1, v5

    iget-wide v4, v4, Lorg/opencv/core/Point;->y:D

    sub-double/2addr v8, v4

    invoke-direct {v1, v2, v3, v8, v9}, Lorg/opencv/core/Point;-><init>(DD)V

    const/4 v2, 0x2

    aput-object v1, p1, v2

    .line 61
    new-instance v1, Lorg/opencv/core/Point;

    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v2, v2, Lorg/opencv/core/Point;->x:D

    mul-double/2addr v2, v6

    aget-object v4, p1, v0

    iget-wide v4, v4, Lorg/opencv/core/Point;->x:D

    sub-double/2addr v2, v4

    iget-object v4, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v4, v4, Lorg/opencv/core/Point;->y:D

    mul-double/2addr v4, v6

    aget-object v0, p1, v0

    iget-wide v6, v0, Lorg/opencv/core/Point;->y:D

    sub-double/2addr v4, v6

    invoke-direct {v1, v2, v3, v4, v5}, Lorg/opencv/core/Point;-><init>(DD)V

    const/4 v0, 0x3

    aput-object v1, p1, v0

    return-void
.end method

.method public set([D)V
    .locals 5

    const-wide/16 v0, 0x0

    if-eqz p1, :cond_5

    .line 29
    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    array-length v3, p1

    if-lez v3, :cond_0

    const/4 v3, 0x0

    aget-wide v3, p1, v3

    goto :goto_0

    :cond_0
    move-wide v3, v0

    :goto_0
    iput-wide v3, v2, Lorg/opencv/core/Point;->x:D

    .line 30
    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    array-length v3, p1

    const/4 v4, 0x1

    if-le v3, v4, :cond_1

    aget-wide v3, p1, v4

    goto :goto_1

    :cond_1
    move-wide v3, v0

    :goto_1
    iput-wide v3, v2, Lorg/opencv/core/Point;->y:D

    .line 31
    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    array-length v3, p1

    const/4 v4, 0x2

    if-le v3, v4, :cond_2

    aget-wide v3, p1, v4

    goto :goto_2

    :cond_2
    move-wide v3, v0

    :goto_2
    iput-wide v3, v2, Lorg/opencv/core/Size;->width:D

    .line 32
    iget-object v2, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    array-length v3, p1

    const/4 v4, 0x3

    if-le v3, v4, :cond_3

    aget-wide v3, p1, v4

    goto :goto_3

    :cond_3
    move-wide v3, v0

    :goto_3
    iput-wide v3, v2, Lorg/opencv/core/Size;->height:D

    .line 33
    array-length v2, p1

    const/4 v3, 0x4

    if-le v2, v3, :cond_4

    aget-wide v0, p1, v3

    :cond_4
    iput-wide v0, p0, Lorg/opencv/core/RotatedRect;->angle:D

    goto :goto_4

    .line 35
    :cond_5
    iget-object p1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iput-wide v0, p1, Lorg/opencv/core/Point;->x:D

    .line 36
    iget-object p1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iput-wide v0, p1, Lorg/opencv/core/Point;->y:D

    .line 37
    iget-object p1, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iput-wide v0, p1, Lorg/opencv/core/Size;->width:D

    .line 38
    iget-object p1, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iput-wide v0, p1, Lorg/opencv/core/Size;->height:D

    .line 39
    iput-wide v0, p0, Lorg/opencv/core/RotatedRect;->angle:D

    :goto_4
    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 111
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "{ "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " * "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lorg/opencv/core/RotatedRect;->angle:D

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(D)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " }"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
