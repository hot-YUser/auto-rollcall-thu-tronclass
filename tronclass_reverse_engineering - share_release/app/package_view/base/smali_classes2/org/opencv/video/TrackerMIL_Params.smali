.class public Lorg/opencv/video/TrackerMIL_Params;
.super Ljava/lang/Object;
.source "TrackerMIL_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/video/TrackerMIL_Params;->TrackerMIL_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    return-void
.end method

.method private static native TrackerMIL_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerMIL_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/video/TrackerMIL_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerMIL_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_featureSetNumFeatures_0(J)I
.end method

.method private static native get_samplerInitInRadius_0(J)F
.end method

.method private static native get_samplerInitMaxNegNum_0(J)I
.end method

.method private static native get_samplerSearchWinSize_0(J)F
.end method

.method private static native get_samplerTrackInRadius_0(J)F
.end method

.method private static native get_samplerTrackMaxNegNum_0(J)I
.end method

.method private static native get_samplerTrackMaxPosNum_0(J)I
.end method

.method private static native set_featureSetNumFeatures_0(JI)V
.end method

.method private static native set_samplerInitInRadius_0(JF)V
.end method

.method private static native set_samplerInitMaxNegNum_0(JI)V
.end method

.method private static native set_samplerSearchWinSize_0(JF)V
.end method

.method private static native set_samplerTrackInRadius_0(JF)V
.end method

.method private static native set_samplerTrackMaxNegNum_0(JI)V
.end method

.method private static native set_samplerTrackMaxPosNum_0(JI)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 157
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_featureSetNumFeatures()I
    .locals 2

    .line 142
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_featureSetNumFeatures_0(J)I

    move-result v0

    return v0
.end method

.method public get_samplerInitInRadius()F
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerInitInRadius_0(J)F

    move-result v0

    return v0
.end method

.method public get_samplerInitMaxNegNum()I
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerInitMaxNegNum_0(J)I

    move-result v0

    return v0
.end method

.method public get_samplerSearchWinSize()F
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerSearchWinSize_0(J)F

    move-result v0

    return v0
.end method

.method public get_samplerTrackInRadius()F
    .locals 2

    .line 88
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerTrackInRadius_0(J)F

    move-result v0

    return v0
.end method

.method public get_samplerTrackMaxNegNum()I
    .locals 2

    .line 124
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerTrackMaxNegNum_0(J)I

    move-result v0

    return v0
.end method

.method public get_samplerTrackMaxPosNum()I
    .locals 2

    .line 106
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerMIL_Params;->get_samplerTrackMaxPosNum_0(J)I

    move-result v0

    return v0
.end method

.method public set_featureSetNumFeatures(I)V
    .locals 2

    .line 151
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_featureSetNumFeatures_0(JI)V

    return-void
.end method

.method public set_samplerInitInRadius(F)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerInitInRadius_0(JF)V

    return-void
.end method

.method public set_samplerInitMaxNegNum(I)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerInitMaxNegNum_0(JI)V

    return-void
.end method

.method public set_samplerSearchWinSize(F)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerSearchWinSize_0(JF)V

    return-void
.end method

.method public set_samplerTrackInRadius(F)V
    .locals 2

    .line 97
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerTrackInRadius_0(JF)V

    return-void
.end method

.method public set_samplerTrackMaxNegNum(I)V
    .locals 2

    .line 133
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerTrackMaxNegNum_0(JI)V

    return-void
.end method

.method public set_samplerTrackMaxPosNum(I)V
    .locals 2

    .line 115
    iget-wide v0, p0, Lorg/opencv/video/TrackerMIL_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerMIL_Params;->set_samplerTrackMaxPosNum_0(JI)V

    return-void
.end method
