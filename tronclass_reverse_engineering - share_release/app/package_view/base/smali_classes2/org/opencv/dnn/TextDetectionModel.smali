.class public Lorg/opencv/dnn/TextDetectionModel;
.super Lorg/opencv/dnn/Model;
.source "TextDetectionModel.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 21
    invoke-direct {p0, p1, p2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/TextDetectionModel;
    .locals 1

    .line 24
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/TextDetectionModel;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native detectTextRectangles_0(JJJJ)V
.end method

.method private static native detectTextRectangles_1(JJJ)V
.end method

.method private static native detect_0(JJJJ)V
.end method

.method private static native detect_1(JJJ)V
.end method


# virtual methods
.method public detect(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint;",
            ">;)V"
        }
    .end annotation

    .line 63
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 64
    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/TextDetectionModel;->detect_1(JJJ)V

    .line 65
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 66
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detect(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/MatOfFloat;)V
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint;",
            ">;",
            "Lorg/opencv/core/MatOfFloat;",
            ")V"
        }
    .end annotation

    .line 50
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 52
    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v8}, Lorg/opencv/dnn/TextDetectionModel;->detect_0(JJJJ)V

    .line 53
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_Point(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 54
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectTextRectangles(Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfRotatedRect;)V
    .locals 6

    .line 100
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/TextDetectionModel;->detectTextRectangles_1(JJJ)V

    return-void
.end method

.method public detectTextRectangles(Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfRotatedRect;Lorg/opencv/core/MatOfFloat;)V
    .locals 8

    .line 90
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/dnn/TextDetectionModel;->detectTextRectangles_0(JJJJ)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 106
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel;->delete(J)V

    return-void
.end method
