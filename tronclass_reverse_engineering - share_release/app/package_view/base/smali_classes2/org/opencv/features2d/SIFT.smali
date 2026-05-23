.class public Lorg/opencv/features2d/SIFT;
.super Lorg/opencv/features2d/Feature2D;
.source "SIFT.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 16
    invoke-direct {p0, p1, p2}, Lorg/opencv/features2d/Feature2D;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/features2d/SIFT;
    .locals 1

    .line 19
    new-instance v0, Lorg/opencv/features2d/SIFT;

    invoke-direct {v0, p0, p1}, Lorg/opencv/features2d/SIFT;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/features2d/SIFT;
    .locals 2

    .line 211
    invoke-static {}, Lorg/opencv/features2d/SIFT;->create_6()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object v0

    return-object v0
.end method

.method public static create(I)Lorg/opencv/features2d/SIFT;
    .locals 2

    .line 187
    invoke-static {p0}, Lorg/opencv/features2d/SIFT;->create_5(I)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(II)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 162
    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->create_4(II)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IID)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 136
    invoke-static {p0, p1, p2, p3}, Lorg/opencv/features2d/SIFT;->create_3(IID)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IIDD)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 109
    invoke-static/range {p0 .. p5}, Lorg/opencv/features2d/SIFT;->create_2(IIDD)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IIDDD)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 81
    invoke-static/range {p0 .. p7}, Lorg/opencv/features2d/SIFT;->create_1(IIDDD)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IIDDDI)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 281
    invoke-static/range {p0 .. p8}, Lorg/opencv/features2d/SIFT;->create_8(IIDDDI)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IIDDDIZ)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 249
    invoke-static/range {p0 .. p9}, Lorg/opencv/features2d/SIFT;->create_7(IIDDDIZ)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method public static create(IIDDDZ)Lorg/opencv/features2d/SIFT;
    .locals 0

    .line 52
    invoke-static/range {p0 .. p8}, Lorg/opencv/features2d/SIFT;->create_0(IIDDDZ)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/features2d/SIFT;->__fromPtr__(J)Lorg/opencv/features2d/SIFT;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(IIDDDZ)J
.end method

.method private static native create_1(IIDDD)J
.end method

.method private static native create_2(IIDD)J
.end method

.method private static native create_3(IID)J
.end method

.method private static native create_4(II)J
.end method

.method private static native create_5(I)J
.end method

.method private static native create_6()J
.end method

.method private static native create_7(IIDDDIZ)J
.end method

.method private static native create_8(IIDDDI)J
.end method

.method private static native delete(J)V
.end method

.method private static native getContrastThreshold_0(J)D
.end method

.method private static native getDefaultName_0(J)Ljava/lang/String;
.end method

.method private static native getEdgeThreshold_0(J)D
.end method

.method private static native getNFeatures_0(J)I
.end method

.method private static native getNOctaveLayers_0(J)I
.end method

.method private static native getSigma_0(J)D
.end method

.method private static native setContrastThreshold_0(JD)V
.end method

.method private static native setEdgeThreshold_0(JD)V
.end method

.method private static native setNFeatures_0(JI)V
.end method

.method private static native setNOctaveLayers_0(JI)V
.end method

.method private static native setSigma_0(JD)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 386
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->delete(J)V

    return-void
.end method

.method public getContrastThreshold()D
    .locals 2

    .line 344
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getContrastThreshold_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getDefaultName()Ljava/lang/String;
    .locals 2

    .line 290
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getDefaultName_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getEdgeThreshold()D
    .locals 2

    .line 362
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getEdgeThreshold_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public getNFeatures()I
    .locals 2

    .line 308
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getNFeatures_0(J)I

    move-result v0

    return v0
.end method

.method public getNOctaveLayers()I
    .locals 2

    .line 326
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getNOctaveLayers_0(J)I

    move-result v0

    return v0
.end method

.method public getSigma()D
    .locals 2

    .line 380
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/features2d/SIFT;->getSigma_0(J)D

    move-result-wide v0

    return-wide v0
.end method

.method public setContrastThreshold(D)V
    .locals 2

    .line 335
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/features2d/SIFT;->setContrastThreshold_0(JD)V

    return-void
.end method

.method public setEdgeThreshold(D)V
    .locals 2

    .line 353
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/features2d/SIFT;->setEdgeThreshold_0(JD)V

    return-void
.end method

.method public setNFeatures(I)V
    .locals 2

    .line 299
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/features2d/SIFT;->setNFeatures_0(JI)V

    return-void
.end method

.method public setNOctaveLayers(I)V
    .locals 2

    .line 317
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/features2d/SIFT;->setNOctaveLayers_0(JI)V

    return-void
.end method

.method public setSigma(D)V
    .locals 2

    .line 371
    iget-wide v0, p0, Lorg/opencv/features2d/SIFT;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/features2d/SIFT;->setSigma_0(JD)V

    return-void
.end method
