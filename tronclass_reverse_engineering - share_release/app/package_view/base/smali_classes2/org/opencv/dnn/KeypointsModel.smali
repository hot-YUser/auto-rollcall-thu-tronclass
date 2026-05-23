.class public Lorg/opencv/dnn/KeypointsModel;
.super Lorg/opencv/dnn/Model;
.source "KeypointsModel.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 24
    invoke-direct {p0, p1, p2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;)V
    .locals 2

    .line 49
    invoke-static {p1}, Lorg/opencv/dnn/KeypointsModel;->KeypointsModel_1(Ljava/lang/String;)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 40
    invoke-static {p1, p2}, Lorg/opencv/dnn/KeypointsModel;->KeypointsModel_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/dnn/Net;)V
    .locals 2

    .line 62
    iget-wide v0, p1, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/KeypointsModel;->KeypointsModel_2(J)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-void
.end method

.method private static native KeypointsModel_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native KeypointsModel_1(Ljava/lang/String;)J
.end method

.method private static native KeypointsModel_2(J)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/KeypointsModel;
    .locals 1

    .line 27
    new-instance v0, Lorg/opencv/dnn/KeypointsModel;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/KeypointsModel;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native estimate_0(JJF)J
.end method

.method private static native estimate_1(JJ)J
.end method


# virtual methods
.method public estimate(Lorg/opencv/core/Mat;)Lorg/opencv/core/MatOfPoint2f;
    .locals 4

    .line 88
    iget-wide v0, p0, Lorg/opencv/dnn/KeypointsModel;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/KeypointsModel;->estimate_1(JJ)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/core/MatOfPoint2f;->fromNativeAddr(J)Lorg/opencv/core/MatOfPoint2f;

    move-result-object p1

    return-object p1
.end method

.method public estimate(Lorg/opencv/core/Mat;F)Lorg/opencv/core/MatOfPoint2f;
    .locals 4

    .line 78
    iget-wide v0, p0, Lorg/opencv/dnn/KeypointsModel;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/dnn/KeypointsModel;->estimate_0(JJF)J

    move-result-wide p1

    invoke-static {p1, p2}, Lorg/opencv/core/MatOfPoint2f;->fromNativeAddr(J)Lorg/opencv/core/MatOfPoint2f;

    move-result-object p1

    return-object p1
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 94
    iget-wide v0, p0, Lorg/opencv/dnn/KeypointsModel;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/KeypointsModel;->delete(J)V

    return-void
.end method
