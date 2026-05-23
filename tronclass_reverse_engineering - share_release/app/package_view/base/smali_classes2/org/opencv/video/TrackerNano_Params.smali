.class public Lorg/opencv/video/TrackerNano_Params;
.super Ljava/lang/Object;
.source "TrackerNano_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/video/TrackerNano_Params;->TrackerNano_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    return-void
.end method

.method private static native TrackerNano_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerNano_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/video/TrackerNano_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerNano_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_backbone_0(J)Ljava/lang/String;
.end method

.method private static native get_backend_0(J)I
.end method

.method private static native get_neckhead_0(J)Ljava/lang/String;
.end method

.method private static native get_target_0(J)I
.end method

.method private static native set_backbone_0(JLjava/lang/String;)V
.end method

.method private static native set_backend_0(JI)V
.end method

.method private static native set_neckhead_0(JLjava/lang/String;)V
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

    .line 103
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_backbone()Ljava/lang/String;
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano_Params;->get_backbone_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_backend()I
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano_Params;->get_backend_0(J)I

    move-result v0

    return v0
.end method

.method public get_neckhead()Ljava/lang/String;
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano_Params;->get_neckhead_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_target()I
    .locals 2

    .line 88
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerNano_Params;->get_target_0(J)I

    move-result v0

    return v0
.end method

.method public set_backbone(Ljava/lang/String;)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerNano_Params;->set_backbone_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_backend(I)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerNano_Params;->set_backend_0(JI)V

    return-void
.end method

.method public set_neckhead(Ljava/lang/String;)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerNano_Params;->set_neckhead_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_target(I)V
    .locals 2

    .line 97
    iget-wide v0, p0, Lorg/opencv/video/TrackerNano_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerNano_Params;->set_target_0(JI)V

    return-void
.end method
