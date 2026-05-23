.class public Lorg/opencv/video/TrackerNano;
.super Lorg/opencv/video/Tracker;
.source "TrackerNano.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 22
    invoke-direct {p0, p1, p2}, Lorg/opencv/video/Tracker;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerNano;
    .locals 1

    .line 25
    new-instance v0, Lorg/opencv/video/TrackerNano;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerNano;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/video/TrackerNano;
    .locals 2

    .line 45
    invoke-static {}, Lorg/opencv/video/TrackerNano;->create_1()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano;->__fromPtr__(J)Lorg/opencv/video/TrackerNano;

    move-result-object v0

    return-object v0
.end method

.method public static create(Lorg/opencv/video/TrackerNano_Params;)Lorg/opencv/video/TrackerNano;
    .locals 2

    .line 37
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano;->create_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano;->__fromPtr__(J)Lorg/opencv/video/TrackerNano;

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

    .line 64
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano;->delete(J)V

    return-void
.end method

.method public getTrackingScore()F
    .locals 2

    .line 58
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano;->getTrackingScore_0(J)F

    move-result v0

    return v0
.end method
