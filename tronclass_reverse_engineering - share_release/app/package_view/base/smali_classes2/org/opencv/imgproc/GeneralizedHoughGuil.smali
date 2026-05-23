.class public Lorg/opencv/imgproc/GeneralizedHoughGuil;
.super Lorg/opencv/imgproc/GeneralizedHough;
.source "GeneralizedHoughGuil.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 16
    invoke-direct {p0, p1, p2}, Lorg/opencv/imgproc/GeneralizedHough;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/imgproc/GeneralizedHoughGuil;
    .locals 1

    .line 19
    new-instance v0, Lorg/opencv/imgproc/GeneralizedHoughGuil;

    invoke-direct {v0, p0, p1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native getAngleEpsilon_0(J)D
.end method

.method private static native getAngleStep_0(J)D
.end method

.method private static native getAngleThresh_0(J)I
.end method

.method private static native getLevels_0(J)I
.end method

.method private static native getMaxAngle_0(J)D
.end method

.method private static native getMaxScale_0(J)D
.end method

.method private static native getMinAngle_0(J)D
.end method

.method private static native getMinScale_0(J)D
.end method

.method private static native getPosThresh_0(J)I
.end method

.method private static native getScaleStep_0(J)D
.end method

.method private static native getScaleThresh_0(J)I
.end method

.method private static native getXi_0(J)D
.end method

.method private static native setAngleEpsilon_0(JD)V
.end method

.method private static native setAngleStep_0(JD)V
.end method

.method private static native setAngleThresh_0(JI)V
.end method

.method private static native setLevels_0(JI)V
.end method

.method private static native setMaxAngle_0(JD)V
.end method

.method private static native setMaxScale_0(JD)V
.end method

.method private static native setMinAngle_0(JD)V
.end method

.method private static native setMinScale_0(JD)V
.end method

.method private static native setPosThresh_0(JI)V
.end method

.method private static native setScaleStep_0(JD)V
.end method

.method private static native setScaleThresh_0(JI)V
.end method

.method private static native setXi_0(JD)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 239
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->delete(J)V

    return-void
.end method

.method public getAngleEpsilon()D
    .locals 2

    .line 71
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getAngleEpsilon_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getAngleStep()D
    .locals 2

    .line 125
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getAngleStep_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getAngleThresh()I
    .locals 2

    .line 143
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getAngleThresh_0(J)I

    move-result v0

    return v0
.end method

.method public getLevels()I
    .locals 2

    .line 53
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getLevels_0(J)I

    move-result v0

    return v0
.end method

.method public getMaxAngle()D
    .locals 2

    .line 107
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getMaxAngle_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getMaxScale()D
    .locals 2

    .line 179
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getMaxScale_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getMinAngle()D
    .locals 2

    .line 89
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getMinAngle_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getMinScale()D
    .locals 2

    .line 161
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getMinScale_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getPosThresh()I
    .locals 2

    .line 233
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getPosThresh_0(J)I

    move-result v0

    return v0
.end method

.method public getScaleStep()D
    .locals 2

    .line 197
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getScaleStep_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getScaleThresh()I
    .locals 2

    .line 215
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getScaleThresh_0(J)I

    move-result v0

    return v0
.end method

.method public getXi()D
    .locals 2

    .line 35
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->getXi_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public setAngleEpsilon(D)V
    .locals 2

    .line 62
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setAngleEpsilon_0(JD)V

    return-void
.end method

.method public setAngleStep(D)V
    .locals 2

    .line 116
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setAngleStep_0(JD)V

    return-void
.end method

.method public setAngleThresh(I)V
    .locals 2

    .line 134
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setAngleThresh_0(JI)V

    return-void
.end method

.method public setLevels(I)V
    .locals 2

    .line 44
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setLevels_0(JI)V

    return-void
.end method

.method public setMaxAngle(D)V
    .locals 2

    .line 98
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setMaxAngle_0(JD)V

    return-void
.end method

.method public setMaxScale(D)V
    .locals 2

    .line 170
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setMaxScale_0(JD)V

    return-void
.end method

.method public setMinAngle(D)V
    .locals 2

    .line 80
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setMinAngle_0(JD)V

    return-void
.end method

.method public setMinScale(D)V
    .locals 2

    .line 152
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setMinScale_0(JD)V

    return-void
.end method

.method public setPosThresh(I)V
    .locals 2

    .line 224
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setPosThresh_0(JI)V

    return-void
.end method

.method public setScaleStep(D)V
    .locals 2

    .line 188
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setScaleStep_0(JD)V

    return-void
.end method

.method public setScaleThresh(I)V
    .locals 2

    .line 206
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setScaleThresh_0(JI)V

    return-void
.end method

.method public setXi(D)V
    .locals 2

    .line 26
    iget-wide v0, p0, Lorg/opencv/imgproc/GeneralizedHoughGuil;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/imgproc/GeneralizedHoughGuil;->setXi_0(JD)V

    return-void
.end method
