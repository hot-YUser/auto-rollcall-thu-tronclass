.class public Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;
.super Ljava/lang/Object;
.source "QRCodeDetectorAruco_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->QRCodeDetectorAruco_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    return-void
.end method

.method private static native QRCodeDetectorAruco_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_maxColorsMismatch_0(J)F
.end method

.method private static native get_maxModuleSizeMismatch_0(J)F
.end method

.method private static native get_maxPenalties_0(J)F
.end method

.method private static native get_maxRotation_0(J)F
.end method

.method private static native get_maxTimingPatternMismatch_0(J)F
.end method

.method private static native get_minModuleSizeInPyramid_0(J)F
.end method

.method private static native get_scaleTimingPatternScore_0(J)F
.end method

.method private static native set_maxColorsMismatch_0(JF)V
.end method

.method private static native set_maxModuleSizeMismatch_0(JF)V
.end method

.method private static native set_maxPenalties_0(JF)V
.end method

.method private static native set_maxRotation_0(JF)V
.end method

.method private static native set_maxTimingPatternMismatch_0(JF)V
.end method

.method private static native set_minModuleSizeInPyramid_0(JF)V
.end method

.method private static native set_scaleTimingPatternScore_0(JF)V
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
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_maxColorsMismatch()F
    .locals 2

    .line 124
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_maxColorsMismatch_0(J)F

    move-result v0

    return v0
.end method

.method public get_maxModuleSizeMismatch()F
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_maxModuleSizeMismatch_0(J)F

    move-result v0

    return v0
.end method

.method public get_maxPenalties()F
    .locals 2

    .line 106
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_maxPenalties_0(J)F

    move-result v0

    return v0
.end method

.method public get_maxRotation()F
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_maxRotation_0(J)F

    move-result v0

    return v0
.end method

.method public get_maxTimingPatternMismatch()F
    .locals 2

    .line 88
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_maxTimingPatternMismatch_0(J)F

    move-result v0

    return v0
.end method

.method public get_minModuleSizeInPyramid()F
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_minModuleSizeInPyramid_0(J)F

    move-result v0

    return v0
.end method

.method public get_scaleTimingPatternScore()F
    .locals 2

    .line 142
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->get_scaleTimingPatternScore_0(J)F

    move-result v0

    return v0
.end method

.method public set_maxColorsMismatch(F)V
    .locals 2

    .line 133
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_maxColorsMismatch_0(JF)V

    return-void
.end method

.method public set_maxModuleSizeMismatch(F)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_maxModuleSizeMismatch_0(JF)V

    return-void
.end method

.method public set_maxPenalties(F)V
    .locals 2

    .line 115
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_maxPenalties_0(JF)V

    return-void
.end method

.method public set_maxRotation(F)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_maxRotation_0(JF)V

    return-void
.end method

.method public set_maxTimingPatternMismatch(F)V
    .locals 2

    .line 97
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_maxTimingPatternMismatch_0(JF)V

    return-void
.end method

.method public set_minModuleSizeInPyramid(F)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_minModuleSizeInPyramid_0(JF)V

    return-void
.end method

.method public set_scaleTimingPatternScore(F)V
    .locals 2

    .line 151
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeDetectorAruco_Params;->set_scaleTimingPatternScore_0(JF)V

    return-void
.end method
