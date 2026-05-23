.class public Lorg/opencv/video/TrackerGOTURN_Params;
.super Ljava/lang/Object;
.source "TrackerGOTURN_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/video/TrackerGOTURN_Params;->TrackerGOTURN_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    return-void
.end method

.method private static native TrackerGOTURN_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerGOTURN_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/video/TrackerGOTURN_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerGOTURN_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_modelBin_0(J)Ljava/lang/String;
.end method

.method private static native get_modelTxt_0(J)Ljava/lang/String;
.end method

.method private static native set_modelBin_0(JLjava/lang/String;)V
.end method

.method private static native set_modelTxt_0(JLjava/lang/String;)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 67
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_modelBin()Ljava/lang/String;
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN_Params;->get_modelBin_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_modelTxt()Ljava/lang/String;
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerGOTURN_Params;->get_modelTxt_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public set_modelBin(Ljava/lang/String;)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerGOTURN_Params;->set_modelBin_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_modelTxt(Ljava/lang/String;)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/video/TrackerGOTURN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerGOTURN_Params;->set_modelTxt_0(JLjava/lang/String;)V

    return-void
.end method
