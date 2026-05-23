.class public Lorg/opencv/features2d/Feature2D;
.super Lorg/opencv/core/Algorithm;
.source "Feature2D.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 19
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/features2d/Feature2D;
    .locals 1

    .line 22
    new-instance v0, Lorg/opencv/features2d/Feature2D;

    invoke-direct {v0, p0, p1}, Lorg/opencv/features2d/Feature2D;-><init>(J)V

    return-object v0
.end method

.method private static native compute_0(JJJJ)V
.end method

.method private static native compute_1(JJJJ)V
.end method

.method private static native defaultNorm_0(J)I
.end method

.method private static native delete(J)V
.end method

.method private static native descriptorSize_0(J)I
.end method

.method private static native descriptorType_0(J)I
.end method

.method private static native detectAndCompute_0(JJJJJZ)V
.end method

.method private static native detectAndCompute_1(JJJJJ)V
.end method

.method private static native detect_0(JJJJ)V
.end method

.method private static native detect_1(JJJ)V
.end method

.method private static native detect_2(JJJJ)V
.end method

.method private static native detect_3(JJJ)V
.end method

.method private static native empty_0(J)Z
.end method

.method private static native getDefaultName_0(J)Ljava/lang/String;
.end method

.method private static native read_0(JLjava/lang/String;)V
.end method

.method private static native write_0(JLjava/lang/String;)V
.end method


# virtual methods
.method public compute(Ljava/util/List;Ljava/util/List;Ljava/util/List;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfKeyPoint;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 131
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 132
    new-instance v0, Ljava/util/ArrayList;

    if-eqz p2, :cond_0

    invoke-interface {p2}, Ljava/util/List;->size()I

    move-result v1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 133
    invoke-static {p2, v0}, Lorg/opencv/utils/Converters;->vector_vector_KeyPoint_to_Mat(Ljava/util/List;Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 134
    new-instance v1, Lorg/opencv/core/Mat;

    invoke-direct {v1}, Lorg/opencv/core/Mat;-><init>()V

    .line 135
    iget-wide v2, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v4, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, v1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v2 .. v9}, Lorg/opencv/features2d/Feature2D;->compute_1(JJJJ)V

    .line 136
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_KeyPoint(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 137
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 138
    invoke-static {v1, p3}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 139
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public compute(Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfKeyPoint;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 111
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/features2d/Feature2D;->compute_0(JJJJ)V

    return-void
.end method

.method public defaultNorm()I
    .locals 2

    .line 196
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->defaultNorm_0(J)I

    move-result v0

    return v0
.end method

.method public descriptorSize()I
    .locals 2

    .line 178
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->descriptorSize_0(J)I

    move-result v0

    return v0
.end method

.method public descriptorType()I
    .locals 2

    .line 187
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->descriptorType_0(J)I

    move-result v0

    return v0
.end method

.method public detect(Ljava/util/List;Ljava/util/List;)V
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfKeyPoint;",
            ">;)V"
        }
    .end annotation

    .line 85
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 86
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 87
    iget-wide v1, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/features2d/Feature2D;->detect_3(JJJ)V

    .line 88
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_KeyPoint(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 89
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detect(Ljava/util/List;Ljava/util/List;Ljava/util/List;)V
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfKeyPoint;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 69
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 70
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 71
    invoke-static {p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p3

    .line 72
    iget-wide v1, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v8}, Lorg/opencv/features2d/Feature2D;->detect_2(JJJJ)V

    .line 73
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_KeyPoint(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 74
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detect(Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfKeyPoint;)V
    .locals 6

    .line 52
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/features2d/Feature2D;->detect_1(JJJ)V

    return-void
.end method

.method public detect(Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfKeyPoint;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 39
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/features2d/Feature2D;->detect_0(JJJJ)V

    return-void
.end method

.method public detectAndCompute(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfKeyPoint;Lorg/opencv/core/Mat;)V
    .locals 10

    .line 169
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, p4, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v9}, Lorg/opencv/features2d/Feature2D;->detectAndCompute_1(JJJJJ)V

    return-void
.end method

.method public detectAndCompute(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfKeyPoint;Lorg/opencv/core/Mat;Z)V
    .locals 12

    move-object v0, p0

    .line 157
    iget-wide v1, v0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    move-object v3, p1

    iget-wide v3, v3, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v5, p2

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v7, p3

    iget-wide v7, v7, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v9, p4

    iget-wide v9, v9, Lorg/opencv/core/Mat;->nativeObj:J

    move/from16 v11, p5

    invoke-static/range {v1 .. v11}, Lorg/opencv/features2d/Feature2D;->detectAndCompute_0(JJJJJZ)V

    return-void
.end method

.method public empty()Z
    .locals 2

    .line 230
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->empty_0(J)Z

    move-result v0

    return v0
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 252
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->delete(J)V

    return-void
.end method

.method public getDefaultName()Ljava/lang/String;
    .locals 2

    .line 239
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/Feature2D;->getDefaultName_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public read(Ljava/lang/String;)V
    .locals 2

    .line 214
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/features2d/Feature2D;->read_0(JLjava/lang/String;)V

    return-void
.end method

.method public write(Ljava/lang/String;)V
    .locals 2

    .line 205
    iget-wide v0, p0, Lorg/opencv/features2d/Feature2D;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/features2d/Feature2D;->write_0(JLjava/lang/String;)V

    return-void
.end method
