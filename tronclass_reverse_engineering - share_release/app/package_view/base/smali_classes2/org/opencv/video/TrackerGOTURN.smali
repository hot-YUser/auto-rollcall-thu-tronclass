.class public Lorg/opencv/video/TrackerGOTURN;
.super Lorg/opencv/video/Tracker;
.source "TrackerGOTURN.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 29
    invoke-direct {p0, p1, p2}, Lorg/opencv/video/Tracker;-><init>(J)V

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerGOTURN;
    .locals 1

    .line 32
    new-instance v0, Lorg/opencv/video/TrackerGOTURN;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerGOTURN;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/video/TrackerGOTURN;
    .locals 2

    .line 52
    invoke-static {}, Lorg/opencv/video/TrackerGOTURN;->create_1()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN;->__fromPtr__(J)Lorg/opencv/video/TrackerGOTURN;

    move-result-object v0

    return-object v0
.end method

.method public static create(Lorg/opencv/video/TrackerGOTURN_Params;)Lorg/opencv/video/TrackerGOTURN;
    .locals 2

    .line 44
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN;->create_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN;->__fromPtr__(J)Lorg/opencv/video/TrackerGOTURN;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(J)J
.end method

.method private static native create_1()J
.end method

.method private static native delete(J)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 58
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN;->delete(J)V

    return-void
.end method
