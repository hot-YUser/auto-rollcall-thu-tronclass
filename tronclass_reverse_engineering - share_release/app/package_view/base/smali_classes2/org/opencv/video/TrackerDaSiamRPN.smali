.class public Lorg/opencv/video/TrackerDaSiamRPN;
.super Lorg/opencv/video/Tracker;
.source "TrackerDaSiamRPN.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 14
    invoke-direct {p0, p1, p2}, Lorg/opencv/video/Tracker;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerDaSiamRPN;
    .locals 1

    .line 17
    new-instance v0, Lorg/opencv/video/TrackerDaSiamRPN;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerDaSiamRPN;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/video/TrackerDaSiamRPN;
    .locals 2

    .line 37
    invoke-static {}, Lorg/opencv/video/TrackerDaSiamRPN;->create_1()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN;->__fromPtr__(J)Lorg/opencv/video/TrackerDaSiamRPN;

    move-result-object v0

    return-object v0
.end method

.method public static create(Lorg/opencv/video/TrackerDaSiamRPN_Params;)Lorg/opencv/video/TrackerDaSiamRPN;
    .locals 2

    .line 29
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN;->create_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN;->__fromPtr__(J)Lorg/opencv/video/TrackerDaSiamRPN;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(J)J
.end method

.method private static native create_1()J
.end method

.method private static native delete(J)V
.end method

.method private static native getTrackingScore_0(J)F
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 56
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN;->delete(J)V

    return-void
.end method

.method public getTrackingScore()F
    .locals 2

    .line 50
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN;->getTrackingScore_0(J)F

    move-result v0

    return v0
.end method
