.class public Lorg/opencv/video/TrackerVit_Params;
.super Ljava/lang/Object;
.source "TrackerVit_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/video/TrackerVit_Params;->TrackerVit_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    return-void
.end method

.method private static native TrackerVit_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerVit_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/video/TrackerVit_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerVit_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_backend_0(J)I
.end method

.method private static native get_meanvalue_0(J)[D
.end method

.method private static native get_net_0(J)Ljava/lang/String;
.end method

.method private static native get_stdvalue_0(J)[D
.end method

.method private static native get_target_0(J)I
.end method

.method private static native set_backend_0(JI)V
.end method

.method private static native set_meanvalue_0(JDDDD)V
.end method

.method private static native set_net_0(JLjava/lang/String;)V
.end method

.method private static native set_stdvalue_0(JDDDD)V
.end method

.method private static native set_target_0(JI)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 121
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerVit_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_backend()I
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerVit_Params;->get_backend_0(J)I

    move-result v0

    return v0
.end method

.method public get_meanvalue()Lorg/opencv/core/Scalar;
    .locals 3

    .line 88
    new-instance v0, Lorg/opencv/core/Scalar;

    iget-wide v1, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/video/TrackerVit_Params;->get_meanvalue_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Scalar;-><init>([D)V

    return-object v0
.end method

.method public get_net()Ljava/lang/String;
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerVit_Params;->get_net_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_stdvalue()Lorg/opencv/core/Scalar;
    .locals 3

    .line 106
    new-instance v0, Lorg/opencv/core/Scalar;

    iget-wide v1, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/video/TrackerVit_Params;->get_stdvalue_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Scalar;-><init>([D)V

    return-object v0
.end method

.method public get_target()I
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerVit_Params;->get_target_0(J)I

    move-result v0

    return v0
.end method

.method public set_backend(I)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerVit_Params;->set_backend_0(JI)V

    return-void
.end method

.method public set_meanvalue(Lorg/opencv/core/Scalar;)V
    .locals 11

    .line 97
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v3, v2, v3

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v5, v2, v5

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v7, v2, v7

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v9, p1, v2

    move-wide v2, v3

    move-wide v4, v5

    move-wide v6, v7

    move-wide v8, v9

    invoke-static/range {v0 .. v9}, Lorg/opencv/video/TrackerVit_Params;->set_meanvalue_0(JDDDD)V

    return-void
.end method

.method public set_net(Ljava/lang/String;)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerVit_Params;->set_net_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_stdvalue(Lorg/opencv/core/Scalar;)V
    .locals 11

    .line 115
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v3, v2, v3

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v5, v2, v5

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v7, v2, v7

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v9, p1, v2

    move-wide v2, v3

    move-wide v4, v5

    move-wide v6, v7

    move-wide v8, v9

    invoke-static/range {v0 .. v9}, Lorg/opencv/video/TrackerVit_Params;->set_stdvalue_0(JDDDD)V

    return-void
.end method

.method public set_target(I)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/video/TrackerVit_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerVit_Params;->set_target_0(JI)V

    return-void
.end method
