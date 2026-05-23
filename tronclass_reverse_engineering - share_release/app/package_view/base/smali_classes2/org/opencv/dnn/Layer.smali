.class public Lorg/opencv/dnn/Layer;
.super Lorg/opencv/core/Algorithm;
.source "Layer.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 21
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/Layer;
    .locals 1

    .line 24
    new-instance v0, Lorg/opencv/dnn/Layer;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Layer;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native finalize_0(JJJ)V
.end method

.method private static native get_blobs_0(J)J
.end method

.method private static native get_name_0(J)Ljava/lang/String;
.end method

.method private static native get_preferableTarget_0(J)I
.end method

.method private static native get_type_0(J)Ljava/lang/String;
.end method

.method private static native outputNameToIndex_0(JLjava/lang/String;)I
.end method

.method private static native run_0(JJJJ)V
.end method

.method private static native set_blobs_0(JJ)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 137
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->delete(J)V

    return-void
.end method

.method public finalize(Ljava/util/List;Ljava/util/List;)V
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 39
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 40
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 41
    iget-wide v1, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Layer;->finalize_0(JJJ)V

    .line 42
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 43
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public get_blobs()Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;"
        }
    .end annotation

    .line 91
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 92
    new-instance v1, Lorg/opencv/core/Mat;

    iget-wide v2, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v2, v3}, Lorg/opencv/dnn/Layer;->get_blobs_0(J)J

    move-result-wide v2

    invoke-direct {v1, v2, v3}, Lorg/opencv/core/Mat;-><init>(J)V

    .line 93
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-object v0
.end method

.method public get_name()Ljava/lang/String;
    .locals 2

    .line 113
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->get_name_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_preferableTarget()I
    .locals 2

    .line 131
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->get_preferableTarget_0(J)I

    move-result v0

    return v0
.end method

.method public get_type()Ljava/lang/String;
    .locals 2

    .line 122
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->get_type_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public outputNameToIndex(Ljava/lang/String;)I
    .locals 2

    .line 82
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Layer;->outputNameToIndex_0(JLjava/lang/String;)I

    move-result p1

    return p1
.end method

.method public run(Ljava/util/List;Ljava/util/List;Ljava/util/List;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 60
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 61
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 62
    invoke-static {p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    .line 63
    iget-wide v2, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    iget-wide v4, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, v1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v2 .. v9}, Lorg/opencv/dnn/Layer;->run_0(JJJJ)V

    .line 64
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 65
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 66
    invoke-static {v1, p3}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 67
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public set_blobs(Ljava/util/List;)V
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 103
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 104
    iget-wide v0, p0, Lorg/opencv/dnn/Layer;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/Layer;->set_blobs_0(JJ)V

    return-void
.end method
