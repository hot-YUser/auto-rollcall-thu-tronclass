.class public Lorg/opencv/objdetect/RefineParameters;
.super Ljava/lang/Object;
.source "RefineParameters.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 39
    invoke-static {}, Lorg/opencv/objdetect/RefineParameters;->RefineParameters_3()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-void
.end method

.method public constructor <init>(F)V
    .locals 2

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 35
    invoke-static {p1}, Lorg/opencv/objdetect/RefineParameters;->RefineParameters_2(F)J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-void
.end method

.method public constructor <init>(FF)V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 31
    invoke-static {p1, p2}, Lorg/opencv/objdetect/RefineParameters;->RefineParameters_1(FF)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-void
.end method

.method public constructor <init>(FFZ)V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 27
    invoke-static {p1, p2, p3}, Lorg/opencv/objdetect/RefineParameters;->RefineParameters_0(FFZ)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 15
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-void
.end method

.method private static native RefineParameters_0(FFZ)J
.end method

.method private static native RefineParameters_1(FF)J
.end method

.method private static native RefineParameters_2(F)J
.end method

.method private static native RefineParameters_3()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/RefineParameters;
    .locals 1

    .line 20
    new-instance v0, Lorg/opencv/objdetect/RefineParameters;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/RefineParameters;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_checkAllOrders_0(J)Z
.end method

.method private static native get_errorCorrectionRate_0(J)F
.end method

.method private static native get_minRepDistance_0(J)F
.end method

.method private static native set_checkAllOrders_0(JZ)V
.end method

.method private static native set_errorCorrectionRate_0(JF)V
.end method

.method private static native set_minRepDistance_0(JF)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 113
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/RefineParameters;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 17
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    return-wide v0
.end method

.method public get_checkAllOrders()Z
    .locals 2

    .line 98
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/RefineParameters;->get_checkAllOrders_0(J)Z

    move-result v0

    return v0
.end method

.method public get_errorCorrectionRate()F
    .locals 2

    .line 80
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/RefineParameters;->get_errorCorrectionRate_0(J)F

    move-result v0

    return v0
.end method

.method public get_minRepDistance()F
    .locals 2

    .line 62
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/RefineParameters;->get_minRepDistance_0(J)F

    move-result v0

    return v0
.end method

.method public set_checkAllOrders(Z)V
    .locals 2

    .line 107
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/RefineParameters;->set_checkAllOrders_0(JZ)V

    return-void
.end method

.method public set_errorCorrectionRate(F)V
    .locals 2

    .line 89
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/RefineParameters;->set_errorCorrectionRate_0(JF)V

    return-void
.end method

.method public set_minRepDistance(F)V
    .locals 2

    .line 71
    iget-wide v0, p0, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/RefineParameters;->set_minRepDistance_0(JF)V

    return-void
.end method
