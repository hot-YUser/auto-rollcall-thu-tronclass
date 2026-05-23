.class public Lorg/opencv/dnn/TextDetectionModel_DB;
.super Lorg/opencv/dnn/TextDetectionModel;
.source "TextDetectionModel_DB.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 26
    invoke-direct {p0, p1, p2}, Lorg/opencv/dnn/TextDetectionModel;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;)V
    .locals 2

    .line 64
    invoke-static {p1}, Lorg/opencv/dnn/TextDetectionModel_DB;->TextDetectionModel_DB_2(Ljava/lang/String;)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/dnn/TextDetectionModel;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 55
    invoke-static {p1, p2}, Lorg/opencv/dnn/TextDetectionModel_DB;->TextDetectionModel_DB_1(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/dnn/TextDetectionModel;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/dnn/Net;)V
    .locals 2

    .line 40
    iget-wide v0, p1, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->TextDetectionModel_DB_0(J)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/dnn/TextDetectionModel;-><init>(J)V

    return-void
.end method

.method private static native TextDetectionModel_DB_0(J)J
.end method

.method private static native TextDetectionModel_DB_1(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native TextDetectionModel_DB_2(Ljava/lang/String;)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/TextDetectionModel_DB;
    .locals 1

    .line 29
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel_DB;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/TextDetectionModel_DB;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native getBinaryThreshold_0(J)F
.end method

.method private static native getMaxCandidates_0(J)I
.end method

.method private static native getPolygonThreshold_0(J)F
.end method

.method private static native getUnclipRatio_0(J)D
.end method

.method private static native setBinaryThreshold_0(JF)J
.end method

.method private static native setMaxCandidates_0(JI)J
.end method

.method private static native setPolygonThreshold_0(JF)J
.end method

.method private static native setUnclipRatio_0(JD)J
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 142
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->delete(J)V

    return-void
.end method

.method public getBinaryThreshold()F
    .locals 2

    .line 82
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->getBinaryThreshold_0(J)F

    move-result v0

    return v0
.end method

.method public getMaxCandidates()I
    .locals 2

    .line 136
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->getMaxCandidates_0(J)I

    move-result v0

    return v0
.end method

.method public getPolygonThreshold()F
    .locals 2

    .line 100
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->getPolygonThreshold_0(J)F

    move-result v0

    return v0
.end method

.method public getUnclipRatio()D
    .locals 2

    .line 118
    iget-wide v0, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/TextDetectionModel_DB;->getUnclipRatio_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public setBinaryThreshold(F)Lorg/opencv/dnn/TextDetectionModel_DB;
    .locals 3

    .line 73
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel_DB;

    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/TextDetectionModel_DB;->setBinaryThreshold_0(JF)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/TextDetectionModel_DB;-><init>(J)V

    return-object v0
.end method

.method public setMaxCandidates(I)Lorg/opencv/dnn/TextDetectionModel_DB;
    .locals 3

    .line 127
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel_DB;

    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/TextDetectionModel_DB;->setMaxCandidates_0(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/TextDetectionModel_DB;-><init>(J)V

    return-object v0
.end method

.method public setPolygonThreshold(F)Lorg/opencv/dnn/TextDetectionModel_DB;
    .locals 3

    .line 91
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel_DB;

    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/TextDetectionModel_DB;->setPolygonThreshold_0(JF)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/TextDetectionModel_DB;-><init>(J)V

    return-object v0
.end method

.method public setUnclipRatio(D)Lorg/opencv/dnn/TextDetectionModel_DB;
    .locals 3

    .line 109
    new-instance v0, Lorg/opencv/dnn/TextDetectionModel_DB;

    iget-wide v1, p0, Lorg/opencv/dnn/TextDetectionModel_DB;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/TextDetectionModel_DB;->setUnclipRatio_0(JD)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/dnn/TextDetectionModel_DB;-><init>(J)V

    return-object v0
.end method
