.class public Lorg/opencv/imgproc/IntelligentScissorsMB;
.super Ljava/lang/Object;
.source "IntelligentScissorsMB.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 39
    invoke-static {}, Lorg/opencv/imgproc/IntelligentScissorsMB;->IntelligentScissorsMB_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    return-void
.end method

.method private static native IntelligentScissorsMB_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 1

    .line 32
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    invoke-direct {v0, p0, p1}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method private static native applyImageFeatures_0(JJJJJ)J
.end method

.method private static native applyImageFeatures_1(JJJJ)J
.end method

.method private static native applyImage_0(JJ)J
.end method

.method private static native buildMap_0(JDD)V
.end method

.method private static native delete(J)V
.end method

.method private static native getContour_0(JDDJZ)V
.end method

.method private static native getContour_1(JDDJ)V
.end method

.method private static native setEdgeFeatureCannyParameters_0(JDDIZ)J
.end method

.method private static native setEdgeFeatureCannyParameters_1(JDDI)J
.end method

.method private static native setEdgeFeatureCannyParameters_2(JDD)J
.end method

.method private static native setEdgeFeatureZeroCrossingParameters_0(JF)J
.end method

.method private static native setEdgeFeatureZeroCrossingParameters_1(J)J
.end method

.method private static native setGradientMagnitudeMaxLimit_0(JF)J
.end method

.method private static native setGradientMagnitudeMaxLimit_1(J)J
.end method

.method private static native setWeights_0(JFFF)J
.end method


# virtual methods
.method public applyImage(Lorg/opencv/core/Mat;)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 5

    .line 200
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/imgproc/IntelligentScissorsMB;->applyImage_0(JJ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public applyImageFeatures(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 9

    .line 234
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v8}, Lorg/opencv/imgproc/IntelligentScissorsMB;->applyImageFeatures_1(JJJJ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public applyImageFeatures(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 11

    .line 220
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v9, p4, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v10}, Lorg/opencv/imgproc/IntelligentScissorsMB;->applyImageFeatures_0(JJJJJ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public buildMap(Lorg/opencv/core/Point;)V
    .locals 6

    .line 250
    iget-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Point;->x:D

    iget-wide v4, p1, Lorg/opencv/core/Point;->y:D

    invoke-static/range {v0 .. v5}, Lorg/opencv/imgproc/IntelligentScissorsMB;->buildMap_0(JDD)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 286
    iget-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/IntelligentScissorsMB;->delete(J)V

    return-void
.end method

.method public getContour(Lorg/opencv/core/Point;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 280
    iget-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Point;->x:D

    iget-wide v4, p1, Lorg/opencv/core/Point;->y:D

    iget-wide v6, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/imgproc/IntelligentScissorsMB;->getContour_1(JDDJ)V

    return-void
.end method

.method public getContour(Lorg/opencv/core/Point;Lorg/opencv/core/Mat;Z)V
    .locals 9

    .line 268
    iget-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Point;->x:D

    iget-wide v4, p1, Lorg/opencv/core/Point;->y:D

    iget-wide v6, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move v8, p3

    invoke-static/range {v0 .. v8}, Lorg/opencv/imgproc/IntelligentScissorsMB;->getContour_0(JDDJZ)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 29
    iget-wide v0, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    return-wide v0
.end method

.method public setEdgeFeatureCannyParameters(DD)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 7

    .line 185
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    move-wide v3, p1

    move-wide v5, p3

    invoke-static/range {v1 .. v6}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setEdgeFeatureCannyParameters_2(JDD)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setEdgeFeatureCannyParameters(DDI)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 8

    .line 171
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    move-wide v3, p1

    move-wide v5, p3

    move v7, p5

    invoke-static/range {v1 .. v7}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setEdgeFeatureCannyParameters_1(JDDI)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setEdgeFeatureCannyParameters(DDIZ)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 9

    .line 156
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    move-wide v3, p1

    move-wide v5, p3

    move v7, p5

    move v8, p6

    invoke-static/range {v1 .. v8}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setEdgeFeatureCannyParameters_0(JDDIZ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setEdgeFeatureZeroCrossingParameters()Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 3

    .line 135
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setEdgeFeatureZeroCrossingParameters_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setEdgeFeatureZeroCrossingParameters(F)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 3

    .line 117
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setEdgeFeatureZeroCrossingParameters_0(JF)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setGradientMagnitudeMaxLimit()Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 3

    .line 93
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setGradientMagnitudeMaxLimit_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setGradientMagnitudeMaxLimit(F)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 3

    .line 79
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setGradientMagnitudeMaxLimit_0(JF)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method

.method public setWeights(FFF)Lorg/opencv/imgproc/IntelligentScissorsMB;
    .locals 3

    .line 59
    new-instance v0, Lorg/opencv/imgproc/IntelligentScissorsMB;

    iget-wide v1, p0, Lorg/opencv/imgproc/IntelligentScissorsMB;->nativeObj:J

    invoke-static {v1, v2, p1, p2, p3}, Lorg/opencv/imgproc/IntelligentScissorsMB;->setWeights_0(JFFF)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/imgproc/IntelligentScissorsMB;-><init>(J)V

    return-object v0
.end method
