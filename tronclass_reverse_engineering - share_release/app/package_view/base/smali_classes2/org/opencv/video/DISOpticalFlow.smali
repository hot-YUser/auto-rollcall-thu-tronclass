.class public Lorg/opencv/video/DISOpticalFlow;
.super Lorg/opencv/video/DenseOpticalFlow;
.source "DISOpticalFlow.java"


# static fields
.field public static final PRESET_FAST:I = 0x1

.field public static final PRESET_MEDIUM:I = 0x2

.field public static final PRESET_ULTRAFAST:I


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 25
    invoke-direct {p0, p1, p2}, Lorg/opencv/video/DenseOpticalFlow;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/DISOpticalFlow;
    .locals 1

    .line 28
    new-instance v0, Lorg/opencv/video/DISOpticalFlow;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/DISOpticalFlow;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/video/DISOpticalFlow;
    .locals 2

    .line 339
    invoke-static {}, Lorg/opencv/video/DISOpticalFlow;->create_1()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->__fromPtr__(J)Lorg/opencv/video/DISOpticalFlow;

    move-result-object v0

    return-object v0
.end method

.method public static create(I)Lorg/opencv/video/DISOpticalFlow;
    .locals 2

    .line 330
    invoke-static {p0}, Lorg/opencv/video/DISOpticalFlow;->create_0(I)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->__fromPtr__(J)Lorg/opencv/video/DISOpticalFlow;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(I)J
.end method

.method private static native create_1()J
.end method

.method private static native delete(J)V
.end method

.method private static native getFinestScale_0(J)I
.end method

.method private static native getGradientDescentIterations_0(J)I
.end method

.method private static native getPatchSize_0(J)I
.end method

.method private static native getPatchStride_0(J)I
.end method

.method private static native getUseMeanNormalization_0(J)Z
.end method

.method private static native getUseSpatialPropagation_0(J)Z
.end method

.method private static native getVariationalRefinementAlpha_0(J)F
.end method

.method private static native getVariationalRefinementDelta_0(J)F
.end method

.method private static native getVariationalRefinementGamma_0(J)F
.end method

.method private static native getVariationalRefinementIterations_0(J)I
.end method

.method private static native setFinestScale_0(JI)V
.end method

.method private static native setGradientDescentIterations_0(JI)V
.end method

.method private static native setPatchSize_0(JI)V
.end method

.method private static native setPatchStride_0(JI)V
.end method

.method private static native setUseMeanNormalization_0(JZ)V
.end method

.method private static native setUseSpatialPropagation_0(JZ)V
.end method

.method private static native setVariationalRefinementAlpha_0(JF)V
.end method

.method private static native setVariationalRefinementDelta_0(JF)V
.end method

.method private static native setVariationalRefinementGamma_0(JF)V
.end method

.method private static native setVariationalRefinementIterations_0(JI)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 345
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->delete(J)V

    return-void
.end method

.method public getFinestScale()I
    .locals 2

    .line 48
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getFinestScale_0(J)I

    move-result v0

    return v0
.end method

.method public getGradientDescentIterations()I
    .locals 2

    .line 132
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getGradientDescentIterations_0(J)I

    move-result v0

    return v0
.end method

.method public getPatchSize()I
    .locals 2

    .line 76
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getPatchSize_0(J)I

    move-result v0

    return v0
.end method

.method public getPatchStride()I
    .locals 2

    .line 104
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getPatchStride_0(J)I

    move-result v0

    return v0
.end method

.method public getUseMeanNormalization()Z
    .locals 2

    .line 272
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getUseMeanNormalization_0(J)Z

    move-result v0

    return v0
.end method

.method public getUseSpatialPropagation()Z
    .locals 2

    .line 302
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getUseSpatialPropagation_0(J)Z

    move-result v0

    return v0
.end method

.method public getVariationalRefinementAlpha()F
    .locals 2

    .line 188
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getVariationalRefinementAlpha_0(J)F

    move-result v0

    return v0
.end method

.method public getVariationalRefinementDelta()F
    .locals 2

    .line 215
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getVariationalRefinementDelta_0(J)F

    move-result v0

    return v0
.end method

.method public getVariationalRefinementGamma()F
    .locals 2

    .line 242
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getVariationalRefinementGamma_0(J)F

    move-result v0

    return v0
.end method

.method public getVariationalRefinementIterations()I
    .locals 2

    .line 161
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/DISOpticalFlow;->getVariationalRefinementIterations_0(J)I

    move-result v0

    return v0
.end method

.method public setFinestScale(I)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setFinestScale_0(JI)V

    return-void
.end method

.method public setGradientDescentIterations(I)V
    .locals 2

    .line 145
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setGradientDescentIterations_0(JI)V

    return-void
.end method

.method public setPatchSize(I)V
    .locals 2

    .line 89
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setPatchSize_0(JI)V

    return-void
.end method

.method public setPatchStride(I)V
    .locals 2

    .line 117
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setPatchStride_0(JI)V

    return-void
.end method

.method public setUseMeanNormalization(Z)V
    .locals 2

    .line 285
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setUseMeanNormalization_0(JZ)V

    return-void
.end method

.method public setUseSpatialPropagation(Z)V
    .locals 2

    .line 315
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setUseSpatialPropagation_0(JZ)V

    return-void
.end method

.method public setVariationalRefinementAlpha(F)V
    .locals 2

    .line 201
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setVariationalRefinementAlpha_0(JF)V

    return-void
.end method

.method public setVariationalRefinementDelta(F)V
    .locals 2

    .line 228
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setVariationalRefinementDelta_0(JF)V

    return-void
.end method

.method public setVariationalRefinementGamma(F)V
    .locals 2

    .line 255
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setVariationalRefinementGamma_0(JF)V

    return-void
.end method

.method public setVariationalRefinementIterations(I)V
    .locals 2

    .line 174
    iget-wide v0, p0, Lorg/opencv/video/DISOpticalFlow;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/DISOpticalFlow;->setVariationalRefinementIterations_0(JI)V

    return-void
.end method
