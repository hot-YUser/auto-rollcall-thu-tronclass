.class public Lorg/opencv/utils/Converters;
.super Ljava/lang/Object;
.source "Converters.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 23
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static Mat_to_vector_DMatch(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/DMatch;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 695
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 696
    sget v1, Lorg/opencv/core/CvType;->CV_64FC4:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 700
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x4

    .line 701
    new-array v1, v1, [D

    const/4 v2, 0x0

    .line 702
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 704
    new-instance p0, Lorg/opencv/core/DMatch;

    mul-int/lit8 v3, v2, 0x4

    aget-wide v4, v1, v3

    double-to-int v4, v4

    add-int/lit8 v5, v3, 0x1

    aget-wide v5, v1, v5

    double-to-int v5, v5

    add-int/lit8 v6, v3, 0x2

    aget-wide v6, v1, v6

    double-to-int v6, v6

    add-int/lit8 v3, v3, 0x3

    aget-wide v7, v1, v3

    double-to-float v3, v7

    invoke-direct {p0, v4, v5, v6, v3}, Lorg/opencv/core/DMatch;-><init>(IIIF)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 697
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_64FC4 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 694
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_KeyPoint(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 12
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/KeyPoint;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 503
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    const/4 v1, 0x7

    .line 504
    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 508
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x7

    .line 509
    new-array v1, v1, [D

    const/4 v2, 0x0

    .line 510
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 512
    new-instance p0, Lorg/opencv/core/KeyPoint;

    mul-int/lit8 v3, v2, 0x7

    aget-wide v4, v1, v3

    double-to-float v4, v4

    add-int/lit8 v5, v3, 0x1

    aget-wide v5, v1, v5

    double-to-float v5, v5

    add-int/lit8 v6, v3, 0x2

    aget-wide v6, v1, v6

    double-to-float v6, v6

    add-int/lit8 v7, v3, 0x3

    aget-wide v7, v1, v7

    double-to-float v7, v7

    add-int/lit8 v8, v3, 0x4

    aget-wide v8, v1, v8

    double-to-float v8, v8

    add-int/lit8 v9, v3, 0x5

    aget-wide v9, v1, v9

    double-to-int v9, v9

    add-int/lit8 v3, v3, 0x6

    aget-wide v10, v1, v3

    double-to-int v10, v10

    move-object v3, p0

    invoke-direct/range {v3 .. v10}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 505
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_64FC(7) != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 502
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 259
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 260
    sget v1, Lorg/opencv/core/CvType;->CV_32SC2:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 264
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x2

    .line 265
    new-array v1, v1, [I

    const/4 v3, 0x0

    .line 266
    invoke-virtual {p0, v3, v3, v1}, Lorg/opencv/core/Mat;->get(II[I)I

    :goto_0
    if-ge v3, v0, :cond_0

    mul-int/lit8 p0, v3, 0x2

    .line 268
    aget v4, v1, p0

    int-to-long v4, v4

    const/16 v6, 0x20

    shl-long/2addr v4, v6

    add-int/2addr p0, v2

    aget p0, v1, p0

    int-to-long v6, p0

    const-wide v8, 0xffffffffL

    and-long/2addr v6, v8

    or-long/2addr v4, v6

    .line 269
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0, v4, v5}, Lorg/opencv/core/Mat;-><init>(J)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 261
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_32SC2 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 258
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "mats == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_5

    .line 163
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 164
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v1

    .line 165
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v2

    const/4 v3, 0x1

    if-ne v2, v3, :cond_4

    .line 168
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 169
    sget v2, Lorg/opencv/core/CvType;->CV_32SC2:I

    const/4 v4, 0x0

    if-ne v1, v2, :cond_0

    mul-int/lit8 v1, v0, 0x2

    .line 170
    new-array v1, v1, [I

    .line 171
    invoke-virtual {p0, v4, v4, v1}, Lorg/opencv/core/Mat;->get(II[I)I

    :goto_0
    if-ge v4, v0, :cond_2

    .line 173
    new-instance p0, Lorg/opencv/core/Point;

    mul-int/lit8 v2, v4, 0x2

    aget v5, v1, v2

    int-to-double v5, v5

    add-int/2addr v2, v3

    aget v2, v1, v2

    int-to-double v7, v2

    invoke-direct {p0, v5, v6, v7, v8}, Lorg/opencv/core/Point;-><init>(DD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    .line 175
    :cond_0
    sget v2, Lorg/opencv/core/CvType;->CV_32FC2:I

    if-ne v1, v2, :cond_1

    mul-int/lit8 v1, v0, 0x2

    .line 176
    new-array v1, v1, [F

    .line 177
    invoke-virtual {p0, v4, v4, v1}, Lorg/opencv/core/Mat;->get(II[F)I

    :goto_1
    if-ge v4, v0, :cond_2

    .line 179
    new-instance p0, Lorg/opencv/core/Point;

    mul-int/lit8 v2, v4, 0x2

    aget v5, v1, v2

    float-to-double v5, v5

    add-int/2addr v2, v3

    aget v2, v1, v2

    float-to-double v7, v2

    invoke-direct {p0, v5, v6, v7, v8}, Lorg/opencv/core/Point;-><init>(DD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 181
    :cond_1
    sget v2, Lorg/opencv/core/CvType;->CV_64FC2:I

    if-ne v1, v2, :cond_3

    mul-int/lit8 v1, v0, 0x2

    .line 182
    new-array v1, v1, [D

    .line 183
    invoke-virtual {p0, v4, v4, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_2
    if-ge v4, v0, :cond_2

    .line 185
    new-instance p0, Lorg/opencv/core/Point;

    mul-int/lit8 v2, v4, 0x2

    aget-wide v5, v1, v2

    add-int/2addr v2, v3

    aget-wide v7, v1, v2

    invoke-direct {p0, v5, v6, v7, v8}, Lorg/opencv/core/Point;-><init>(DD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v4, v4, 0x1

    goto :goto_2

    :cond_2
    return-void

    .line 188
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Input Mat should be of CV_32SC2, CV_32FC2 or CV_64FC2 type\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 166
    :cond_4
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Input Mat should have one column\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 162
    :cond_5
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_Point2d(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)V"
        }
    .end annotation

    .line 157
    invoke-static {p0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-void
.end method

.method public static Mat_to_vector_Point2f(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)V"
        }
    .end annotation

    .line 153
    invoke-static {p0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-void
.end method

.method public static Mat_to_vector_Point3(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_5

    .line 208
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 209
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v1

    .line 210
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v2

    const/4 v3, 0x1

    if-ne v2, v3, :cond_4

    .line 213
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 214
    sget v2, Lorg/opencv/core/CvType;->CV_32SC3:I

    const/4 v3, 0x0

    if-ne v1, v2, :cond_0

    mul-int/lit8 v1, v0, 0x3

    .line 215
    new-array v1, v1, [I

    .line 216
    invoke-virtual {p0, v3, v3, v1}, Lorg/opencv/core/Mat;->get(II[I)I

    :goto_0
    if-ge v3, v0, :cond_2

    .line 218
    new-instance p0, Lorg/opencv/core/Point3;

    mul-int/lit8 v2, v3, 0x3

    aget v4, v1, v2

    int-to-double v5, v4

    add-int/lit8 v4, v2, 0x1

    aget v4, v1, v4

    int-to-double v7, v4

    add-int/lit8 v2, v2, 0x2

    aget v2, v1, v2

    int-to-double v9, v2

    move-object v4, p0

    invoke-direct/range {v4 .. v10}, Lorg/opencv/core/Point3;-><init>(DDD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 220
    :cond_0
    sget v2, Lorg/opencv/core/CvType;->CV_32FC3:I

    if-ne v1, v2, :cond_1

    mul-int/lit8 v1, v0, 0x3

    .line 221
    new-array v1, v1, [F

    .line 222
    invoke-virtual {p0, v3, v3, v1}, Lorg/opencv/core/Mat;->get(II[F)I

    :goto_1
    if-ge v3, v0, :cond_2

    .line 224
    new-instance p0, Lorg/opencv/core/Point3;

    mul-int/lit8 v2, v3, 0x3

    aget v4, v1, v2

    float-to-double v5, v4

    add-int/lit8 v4, v2, 0x1

    aget v4, v1, v4

    float-to-double v7, v4

    add-int/lit8 v2, v2, 0x2

    aget v2, v1, v2

    float-to-double v9, v2

    move-object v4, p0

    invoke-direct/range {v4 .. v10}, Lorg/opencv/core/Point3;-><init>(DDD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v3, v3, 0x1

    goto :goto_1

    .line 226
    :cond_1
    sget v2, Lorg/opencv/core/CvType;->CV_64FC3:I

    if-ne v1, v2, :cond_3

    mul-int/lit8 v1, v0, 0x3

    .line 227
    new-array v1, v1, [D

    .line 228
    invoke-virtual {p0, v3, v3, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_2
    if-ge v3, v0, :cond_2

    .line 230
    new-instance p0, Lorg/opencv/core/Point3;

    mul-int/lit8 v2, v3, 0x3

    aget-wide v5, v1, v2

    add-int/lit8 v4, v2, 0x1

    aget-wide v7, v1, v4

    add-int/lit8 v2, v2, 0x2

    aget-wide v9, v1, v2

    move-object v4, p0

    invoke-direct/range {v4 .. v10}, Lorg/opencv/core/Point3;-><init>(DDD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v3, v3, 0x1

    goto :goto_2

    :cond_2
    return-void

    .line 233
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Input Mat should be of CV_32SC3, CV_32FC3 or CV_64FC3 type\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 211
    :cond_4
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Input Mat should have one column\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 207
    :cond_5
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_Point3d(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)V"
        }
    .end annotation

    .line 202
    invoke-static {p0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Point3(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-void
.end method

.method public static Mat_to_vector_Point3f(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)V"
        }
    .end annotation

    .line 198
    invoke-static {p0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Point3(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-void
.end method

.method public static Mat_to_vector_Point3i(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)V"
        }
    .end annotation

    .line 194
    invoke-static {p0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Point3(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-void
.end method

.method public static Mat_to_vector_Rect(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Rect;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 428
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 429
    sget v1, Lorg/opencv/core/CvType;->CV_32SC4:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 433
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x4

    .line 434
    new-array v1, v1, [I

    const/4 v2, 0x0

    .line 435
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[I)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 437
    new-instance p0, Lorg/opencv/core/Rect;

    mul-int/lit8 v3, v2, 0x4

    aget v4, v1, v3

    add-int/lit8 v5, v3, 0x1

    aget v5, v1, v5

    add-int/lit8 v6, v3, 0x2

    aget v6, v1, v6

    add-int/lit8 v3, v3, 0x3

    aget v3, v1, v3

    invoke-direct {p0, v4, v5, v6, v3}, Lorg/opencv/core/Rect;-><init>(IIII)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 430
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_32SC4 != m.type() ||  m.rows()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 427
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "rs == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_Rect2d(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 12
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Rect2d;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 464
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 465
    sget v1, Lorg/opencv/core/CvType;->CV_64FC4:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 469
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x4

    .line 470
    new-array v1, v1, [D

    const/4 v2, 0x0

    .line 471
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 473
    new-instance p0, Lorg/opencv/core/Rect2d;

    mul-int/lit8 v3, v2, 0x4

    aget-wide v4, v1, v3

    add-int/lit8 v6, v3, 0x1

    aget-wide v6, v1, v6

    add-int/lit8 v8, v3, 0x2

    aget-wide v8, v1, v8

    add-int/lit8 v3, v3, 0x3

    aget-wide v10, v1, v3

    move-object v3, p0

    invoke-direct/range {v3 .. v11}, Lorg/opencv/core/Rect2d;-><init>(DDDD)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 466
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_64FC4 != m.type() ||  m.rows()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 463
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "rs == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_RotatedRect(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/RotatedRect;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 794
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    const/4 v1, 0x5

    .line 795
    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 799
    invoke-interface {p1}, Ljava/util/List;->clear()V

    mul-int/lit8 v1, v0, 0x5

    .line 800
    new-array v1, v1, [F

    const/4 v2, 0x0

    .line 801
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[F)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 803
    new-instance p0, Lorg/opencv/core/RotatedRect;

    new-instance v3, Lorg/opencv/core/Point;

    mul-int/lit8 v4, v2, 0x5

    aget v5, v1, v4

    float-to-double v5, v5

    add-int/lit8 v7, v4, 0x1

    aget v7, v1, v7

    float-to-double v7, v7

    invoke-direct {v3, v5, v6, v7, v8}, Lorg/opencv/core/Point;-><init>(DD)V

    new-instance v5, Lorg/opencv/core/Size;

    add-int/lit8 v6, v4, 0x2

    aget v6, v1, v6

    float-to-double v6, v6

    add-int/lit8 v8, v4, 0x3

    aget v8, v1, v8

    float-to-double v8, v8

    invoke-direct {v5, v6, v7, v8, v9}, Lorg/opencv/core/Size;-><init>(DD)V

    add-int/lit8 v4, v4, 0x4

    aget v4, v1, v4

    float-to-double v6, v4

    invoke-direct {p0, v3, v5, v6, v7}, Lorg/opencv/core/RotatedRect;-><init>(Lorg/opencv/core/Point;Lorg/opencv/core/Size;D)V

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 796
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_32FC5 != m.type() ||  m.rows()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 793
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "rs == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_char(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/Byte;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 392
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 393
    sget v1, Lorg/opencv/core/CvType;->CV_8SC1:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 397
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 398
    new-array v1, v0, [B

    const/4 v2, 0x0

    .line 399
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[B)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 401
    aget-byte p0, v1, v2

    invoke-static {p0}, Ljava/lang/Byte;->valueOf(B)Ljava/lang/Byte;

    move-result-object p0

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 394
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_8SC1 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 391
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_double(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/Double;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 659
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 660
    sget v1, Lorg/opencv/core/CvType;->CV_64FC1:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 664
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 665
    new-array v1, v0, [D

    const/4 v2, 0x0

    .line 666
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[D)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 668
    aget-wide v3, v1, v2

    invoke-static {v3, v4}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p0

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 661
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_64FC1 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 658
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "ds == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_float(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/Float;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 293
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 294
    sget v1, Lorg/opencv/core/CvType;->CV_32FC1:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 298
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 299
    new-array v1, v0, [F

    const/4 v2, 0x0

    .line 300
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[F)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 302
    aget p0, v1, v2

    invoke-static {p0}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object p0

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 295
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_32FC1 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 292
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "fs == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_int(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 376
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 377
    sget v1, Lorg/opencv/core/CvType;->CV_32SC1:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 381
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 382
    new-array v1, v0, [I

    const/4 v2, 0x0

    .line 383
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[I)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 385
    aget p0, v1, v2

    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 378
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_32SC1 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 375
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "is == null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_uchar(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/Byte;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    .line 326
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    .line 327
    sget v1, Lorg/opencv/core/CvType;->CV_8UC1:I

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v2

    if-ne v1, v2, :cond_1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    .line 331
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 332
    new-array v1, v0, [B

    const/4 v2, 0x0

    .line 333
    invoke-virtual {p0, v2, v2, v1}, Lorg/opencv/core/Mat;->get(II[B)I

    :goto_0
    if-ge v2, v0, :cond_0

    .line 335
    aget-byte p0, v1, v2

    invoke-static {p0}, Ljava/lang/Byte;->valueOf(B)Ljava/lang/Byte;

    move-result-object p0

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 328
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "CvType.CV_8UC1 != m.type() ||  m.cols()!=1\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {p1, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 325
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_DMatch(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfDMatch;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 728
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 729
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 730
    invoke-interface {p1}, Ljava/util/List;->clear()V

    .line 731
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 732
    new-instance v2, Lorg/opencv/core/MatOfDMatch;

    invoke-direct {v2, v1}, Lorg/opencv/core/MatOfDMatch;-><init>(Lorg/opencv/core/Mat;)V

    .line 733
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 734
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 736
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 726
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 723
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_KeyPoint(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfKeyPoint;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 629
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 630
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 631
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 632
    new-instance v2, Lorg/opencv/core/MatOfKeyPoint;

    invoke-direct {v2, v1}, Lorg/opencv/core/MatOfKeyPoint;-><init>(Lorg/opencv/core/Mat;)V

    .line 633
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 634
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 636
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 627
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 624
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 537
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 538
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 539
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 540
    new-instance v2, Lorg/opencv/core/MatOfPoint;

    invoke-direct {v2, v1}, Lorg/opencv/core/MatOfPoint;-><init>(Lorg/opencv/core/Mat;)V

    .line 541
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 542
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 544
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 535
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 532
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_Point2f(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint2f;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 555
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 556
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 557
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 558
    new-instance v2, Lorg/opencv/core/MatOfPoint2f;

    invoke-direct {v2, v1}, Lorg/opencv/core/MatOfPoint2f;-><init>(Lorg/opencv/core/Mat;)V

    .line 559
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 560
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 562
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 553
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 550
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_Point3f(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint3f;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 586
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 587
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 588
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 589
    new-instance v2, Lorg/opencv/core/MatOfPoint3f;

    invoke-direct {v2, v1}, Lorg/opencv/core/MatOfPoint3f;-><init>(Lorg/opencv/core/Mat;)V

    .line 590
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 591
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 593
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 584
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 581
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static Mat_to_vector_vector_char(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/util/List<",
            "Ljava/lang/Byte;",
            ">;>;)V"
        }
    .end annotation

    if-eqz p1, :cond_2

    if-eqz p0, :cond_1

    .line 759
    new-instance v0, Ljava/util/ArrayList;

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 760
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 761
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/opencv/core/Mat;

    .line 762
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    .line 763
    invoke-static {v1, v2}, Lorg/opencv/utils/Converters;->Mat_to_vector_char(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 764
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 765
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    goto :goto_0

    .line 767
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->clear()V

    return-void

    .line 757
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Input Mat can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 754
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Output List can\'t be null"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static vector_DMatch_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/DMatch;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 674
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 676
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_64FC4:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x4

    .line 677
    new-array v3, v3, [D

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 679
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/DMatch;

    mul-int/lit8 v6, v4, 0x4

    .line 680
    iget v7, v5, Lorg/opencv/core/DMatch;->queryIdx:I

    int-to-double v7, v7

    aput-wide v7, v3, v6

    add-int/lit8 v7, v6, 0x1

    .line 681
    iget v8, v5, Lorg/opencv/core/DMatch;->trainIdx:I

    int-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x2

    .line 682
    iget v8, v5, Lorg/opencv/core/DMatch;->imgIdx:I

    int-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v6, v6, 0x3

    .line 683
    iget v5, v5, Lorg/opencv/core/DMatch;->distance:F

    float-to-double v7, v5

    aput-wide v7, v3, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 685
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_2

    .line 687
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_KeyPoint_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/KeyPoint;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 479
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 481
    new-instance v2, Lorg/opencv/core/Mat;

    const/4 v3, 0x7

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v3

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x7

    .line 482
    new-array v3, v3, [D

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 484
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/KeyPoint;

    mul-int/lit8 v6, v4, 0x7

    .line 485
    iget-object v7, v5, Lorg/opencv/core/KeyPoint;->pt:Lorg/opencv/core/Point;

    iget-wide v7, v7, Lorg/opencv/core/Point;->x:D

    aput-wide v7, v3, v6

    add-int/lit8 v7, v6, 0x1

    .line 486
    iget-object v8, v5, Lorg/opencv/core/KeyPoint;->pt:Lorg/opencv/core/Point;

    iget-wide v8, v8, Lorg/opencv/core/Point;->y:D

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x2

    .line 487
    iget v8, v5, Lorg/opencv/core/KeyPoint;->size:F

    float-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x3

    .line 488
    iget v8, v5, Lorg/opencv/core/KeyPoint;->angle:F

    float-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x4

    .line 489
    iget v8, v5, Lorg/opencv/core/KeyPoint;->response:F

    float-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x5

    .line 490
    iget v8, v5, Lorg/opencv/core/KeyPoint;->octave:I

    int-to-double v8, v8

    aput-wide v8, v3, v7

    add-int/lit8 v6, v6, 0x6

    .line 491
    iget v5, v5, Lorg/opencv/core/KeyPoint;->class_id:I

    int-to-double v7, v5

    aput-wide v7, v3, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 493
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_2

    .line 495
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 240
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 242
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_32SC2:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x2

    .line 243
    new-array v3, v3, [I

    move v5, v0

    :goto_1
    if-ge v5, v1, :cond_1

    .line 245
    invoke-interface {p0, v5}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v6

    check-cast v6, Lorg/opencv/core/Mat;

    iget-wide v6, v6, Lorg/opencv/core/Mat;->nativeObj:J

    mul-int/lit8 v8, v5, 0x2

    const/16 v9, 0x20

    shr-long v9, v6, v9

    long-to-int v9, v9

    .line 246
    aput v9, v3, v8

    add-int/2addr v8, v4

    long-to-int v6, v6

    .line 247
    aput v6, v3, v8

    add-int/lit8 v5, v5, 0x1

    goto :goto_1

    .line 249
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[I)I

    goto :goto_2

    .line 251
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_Point2d_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x6

    .line 34
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point2f_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x5

    .line 30
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point3_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;I)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 101
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_7

    const/4 v2, 0x4

    const/4 v3, 0x1

    if-eq p1, v2, :cond_5

    const/4 v2, 0x5

    if-eq p1, v2, :cond_3

    const/4 v2, 0x6

    if-ne p1, v2, :cond_2

    .line 131
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_64FC3:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x3

    .line 132
    new-array v2, v2, [D

    move v3, v0

    :goto_1
    if-ge v3, v1, :cond_1

    .line 134
    invoke-interface {p0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lorg/opencv/core/Point3;

    mul-int/lit8 v5, v3, 0x3

    .line 135
    iget-wide v6, v4, Lorg/opencv/core/Point3;->x:D

    aput-wide v6, v2, v5

    add-int/lit8 v6, v5, 0x1

    .line 136
    iget-wide v7, v4, Lorg/opencv/core/Point3;->y:D

    aput-wide v7, v2, v6

    add-int/lit8 v5, v5, 0x2

    .line 137
    iget-wide v6, v4, Lorg/opencv/core/Point3;->z:D

    aput-wide v6, v2, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_1

    .line 139
    :cond_1
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_4

    .line 144
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "\'typeDepth\' can be CV_32S, CV_32F or CV_64F"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 118
    :cond_3
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_32FC3:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x3

    .line 119
    new-array v2, v2, [F

    move v3, v0

    :goto_2
    if-ge v3, v1, :cond_4

    .line 121
    invoke-interface {p0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lorg/opencv/core/Point3;

    mul-int/lit8 v5, v3, 0x3

    .line 122
    iget-wide v6, v4, Lorg/opencv/core/Point3;->x:D

    double-to-float v6, v6

    aput v6, v2, v5

    add-int/lit8 v6, v5, 0x1

    .line 123
    iget-wide v7, v4, Lorg/opencv/core/Point3;->y:D

    double-to-float v7, v7

    aput v7, v2, v6

    add-int/lit8 v5, v5, 0x2

    .line 124
    iget-wide v6, v4, Lorg/opencv/core/Point3;->z:D

    double-to-float v4, v6

    aput v4, v2, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_2

    .line 126
    :cond_4
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[F)I

    goto :goto_4

    .line 105
    :cond_5
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_32SC3:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x3

    .line 106
    new-array v2, v2, [I

    move v3, v0

    :goto_3
    if-ge v3, v1, :cond_6

    .line 108
    invoke-interface {p0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lorg/opencv/core/Point3;

    mul-int/lit8 v5, v3, 0x3

    .line 109
    iget-wide v6, v4, Lorg/opencv/core/Point3;->x:D

    double-to-int v6, v6

    aput v6, v2, v5

    add-int/lit8 v6, v5, 0x1

    .line 110
    iget-wide v7, v4, Lorg/opencv/core/Point3;->y:D

    double-to-int v7, v7

    aput v7, v2, v6

    add-int/lit8 v5, v5, 0x2

    .line 111
    iget-wide v6, v4, Lorg/opencv/core/Point3;->z:D

    double-to-int v4, v6

    aput v4, v2, v5

    add-int/lit8 v3, v3, 0x1

    goto :goto_3

    .line 113
    :cond_6
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[I)I

    goto :goto_4

    .line 147
    :cond_7
    new-instance p1, Lorg/opencv/core/Mat;

    invoke-direct {p1}, Lorg/opencv/core/Mat;-><init>()V

    :goto_4
    return-object p1
.end method

.method public static vector_Point3d_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x6

    .line 96
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point3_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point3f_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x5

    .line 92
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point3_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point3i_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point3;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x4

    .line 88
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point3_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x4

    .line 26
    invoke-static {p0, v0}, Lorg/opencv/utils/Converters;->vector_Point_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;

    move-result-object p0

    return-object p0
.end method

.method public static vector_Point_to_Mat(Ljava/util/List;I)Lorg/opencv/core/Mat;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Point;",
            ">;I)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 39
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_7

    const/4 v2, 0x4

    const/4 v3, 0x1

    if-eq p1, v2, :cond_5

    const/4 v2, 0x5

    if-eq p1, v2, :cond_3

    const/4 v2, 0x6

    if-ne p1, v2, :cond_2

    .line 67
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_64FC2:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x2

    .line 68
    new-array v2, v2, [D

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 70
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/Point;

    mul-int/lit8 v6, v4, 0x2

    .line 71
    iget-wide v7, v5, Lorg/opencv/core/Point;->x:D

    aput-wide v7, v2, v6

    add-int/2addr v6, v3

    .line 72
    iget-wide v7, v5, Lorg/opencv/core/Point;->y:D

    aput-wide v7, v2, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 74
    :cond_1
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_4

    .line 79
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "\'typeDepth\' can be CV_32S, CV_32F or CV_64F"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 55
    :cond_3
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_32FC2:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x2

    .line 56
    new-array v2, v2, [F

    move v4, v0

    :goto_2
    if-ge v4, v1, :cond_4

    .line 58
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/Point;

    mul-int/lit8 v6, v4, 0x2

    .line 59
    iget-wide v7, v5, Lorg/opencv/core/Point;->x:D

    double-to-float v7, v7

    aput v7, v2, v6

    add-int/2addr v6, v3

    .line 60
    iget-wide v7, v5, Lorg/opencv/core/Point;->y:D

    double-to-float v5, v7

    aput v5, v2, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_2

    .line 62
    :cond_4
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[F)I

    goto :goto_4

    .line 43
    :cond_5
    new-instance p1, Lorg/opencv/core/Mat;

    sget v2, Lorg/opencv/core/CvType;->CV_32SC2:I

    invoke-direct {p1, v1, v3, v2}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v2, v1, 0x2

    .line 44
    new-array v2, v2, [I

    move v4, v0

    :goto_3
    if-ge v4, v1, :cond_6

    .line 46
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/Point;

    mul-int/lit8 v6, v4, 0x2

    .line 47
    iget-wide v7, v5, Lorg/opencv/core/Point;->x:D

    double-to-int v7, v7

    aput v7, v2, v6

    add-int/2addr v6, v3

    .line 48
    iget-wide v7, v5, Lorg/opencv/core/Point;->y:D

    double-to-int v5, v7

    aput v5, v2, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_3

    .line 50
    :cond_6
    invoke-virtual {p1, v0, v0, v2}, Lorg/opencv/core/Mat;->put(II[I)I

    goto :goto_4

    .line 82
    :cond_7
    new-instance p1, Lorg/opencv/core/Mat;

    invoke-direct {p1}, Lorg/opencv/core/Mat;-><init>()V

    :goto_4
    return-object p1
.end method

.method public static vector_Rect2d_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Rect2d;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 443
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 445
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_64FC4:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x4

    .line 446
    new-array v3, v3, [D

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 448
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/Rect2d;

    mul-int/lit8 v6, v4, 0x4

    .line 449
    iget-wide v7, v5, Lorg/opencv/core/Rect2d;->x:D

    aput-wide v7, v3, v6

    add-int/lit8 v7, v6, 0x1

    .line 450
    iget-wide v8, v5, Lorg/opencv/core/Rect2d;->y:D

    aput-wide v8, v3, v7

    add-int/lit8 v7, v6, 0x2

    .line 451
    iget-wide v8, v5, Lorg/opencv/core/Rect2d;->width:D

    aput-wide v8, v3, v7

    add-int/lit8 v6, v6, 0x3

    .line 452
    iget-wide v7, v5, Lorg/opencv/core/Rect2d;->height:D

    aput-wide v7, v3, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 454
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_2

    .line 456
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_Rect_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Rect;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 407
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 409
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_32SC4:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x4

    .line 410
    new-array v3, v3, [I

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 412
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/Rect;

    mul-int/lit8 v6, v4, 0x4

    .line 413
    iget v7, v5, Lorg/opencv/core/Rect;->x:I

    aput v7, v3, v6

    add-int/lit8 v7, v6, 0x1

    .line 414
    iget v8, v5, Lorg/opencv/core/Rect;->y:I

    aput v8, v3, v7

    add-int/lit8 v7, v6, 0x2

    .line 415
    iget v8, v5, Lorg/opencv/core/Rect;->width:I

    aput v8, v3, v7

    add-int/lit8 v6, v6, 0x3

    .line 416
    iget v5, v5, Lorg/opencv/core/Rect;->height:I

    aput v5, v3, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 418
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[I)I

    goto :goto_2

    .line 420
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_RotatedRect_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/RotatedRect;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 772
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 774
    new-instance v2, Lorg/opencv/core/Mat;

    const/4 v3, 0x5

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v3

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    mul-int/lit8 v3, v1, 0x5

    .line 775
    new-array v3, v3, [F

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 777
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lorg/opencv/core/RotatedRect;

    mul-int/lit8 v6, v4, 0x5

    .line 778
    iget-object v7, v5, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v7, v7, Lorg/opencv/core/Point;->x:D

    double-to-float v7, v7

    aput v7, v3, v6

    add-int/lit8 v7, v6, 0x1

    .line 779
    iget-object v8, v5, Lorg/opencv/core/RotatedRect;->center:Lorg/opencv/core/Point;

    iget-wide v8, v8, Lorg/opencv/core/Point;->y:D

    double-to-float v8, v8

    aput v8, v3, v7

    add-int/lit8 v7, v6, 0x2

    .line 780
    iget-object v8, v5, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v8, v8, Lorg/opencv/core/Size;->width:D

    double-to-float v8, v8

    aput v8, v3, v7

    add-int/lit8 v7, v6, 0x3

    .line 781
    iget-object v8, v5, Lorg/opencv/core/RotatedRect;->size:Lorg/opencv/core/Size;

    iget-wide v8, v8, Lorg/opencv/core/Size;->height:D

    double-to-float v8, v8

    aput v8, v3, v7

    add-int/lit8 v6, v6, 0x4

    .line 782
    iget-wide v7, v5, Lorg/opencv/core/RotatedRect;->angle:D

    double-to-float v5, v7

    aput v5, v3, v6

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 784
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[F)I

    goto :goto_2

    .line 786
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_char_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Byte;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 341
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 343
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_8SC1:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 344
    new-array v3, v1, [B

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 346
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Byte;

    invoke-virtual {v5}, Ljava/lang/Byte;->byteValue()B

    move-result v5

    .line 347
    aput-byte v5, v3, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 349
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[B)I

    goto :goto_2

    .line 351
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_double_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Double;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 641
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 643
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_64FC1:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 644
    new-array v3, v1, [D

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 646
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Double;

    invoke-virtual {v5}, Ljava/lang/Double;->doubleValue()D

    move-result-wide v5

    .line 647
    aput-wide v5, v3, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 649
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[D)I

    goto :goto_2

    .line 651
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_float_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Float;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 275
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 277
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_32FC1:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 278
    new-array v3, v1, [F

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 280
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Float;

    invoke-virtual {v5}, Ljava/lang/Float;->floatValue()F

    move-result v5

    .line 281
    aput v5, v3, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 283
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[F)I

    goto :goto_2

    .line 285
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_int_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 358
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 360
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_32SC1:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 361
    new-array v3, v1, [I

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 363
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Integer;

    invoke-virtual {v5}, Ljava/lang/Integer;->intValue()I

    move-result v5

    .line 364
    aput v5, v3, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 366
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[I)I

    goto :goto_2

    .line 368
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_uchar_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Byte;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    const/4 v0, 0x0

    if-eqz p0, :cond_0

    .line 308
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    move v1, v0

    :goto_0
    if-lez v1, :cond_2

    .line 310
    new-instance v2, Lorg/opencv/core/Mat;

    sget v3, Lorg/opencv/core/CvType;->CV_8UC1:I

    const/4 v4, 0x1

    invoke-direct {v2, v1, v4, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    .line 311
    new-array v3, v1, [B

    move v4, v0

    :goto_1
    if-ge v4, v1, :cond_1

    .line 313
    invoke-interface {p0, v4}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Byte;

    invoke-virtual {v5}, Ljava/lang/Byte;->byteValue()B

    move-result v5

    .line 314
    aput-byte v5, v3, v4

    add-int/lit8 v4, v4, 0x1

    goto :goto_1

    .line 316
    :cond_1
    invoke-virtual {v2, v0, v0, v3}, Lorg/opencv/core/Mat;->put(II[B)I

    goto :goto_2

    .line 318
    :cond_2
    new-instance v2, Lorg/opencv/core/Mat;

    invoke-direct {v2}, Lorg/opencv/core/Mat;-><init>()V

    :goto_2
    return-object v2
.end method

.method public static vector_vector_DMatch_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfDMatch;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 711
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 713
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 714
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 716
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method

.method public static vector_vector_KeyPoint_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfKeyPoint;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 612
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 614
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 615
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 617
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method

.method public static vector_vector_Point2f_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint2f;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 568
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 570
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 571
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 573
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method

.method public static vector_vector_Point3f_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint3f;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 599
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 601
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 602
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 604
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method

.method public static vector_vector_Point_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 520
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 522
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 523
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 525
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method

.method public static vector_vector_char_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfByte;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    if-eqz p0, :cond_0

    .line 742
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-lez v0, :cond_1

    .line 744
    invoke-interface {p1, p0}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    .line 745
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    goto :goto_1

    .line 747
    :cond_1
    new-instance p0, Lorg/opencv/core/Mat;

    invoke-direct {p0}, Lorg/opencv/core/Mat;-><init>()V

    :goto_1
    return-object p0
.end method
