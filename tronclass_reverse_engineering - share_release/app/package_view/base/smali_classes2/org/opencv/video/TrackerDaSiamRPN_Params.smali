.class public Lorg/opencv/video/TrackerDaSiamRPN_Params;
.super Ljava/lang/Object;
.source "TrackerDaSiamRPN_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->TrackerDaSiamRPN_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    return-void
.end method

.method private static native TrackerDaSiamRPN_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/video/TrackerDaSiamRPN_Params;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/video/TrackerDaSiamRPN_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_backend_0(J)I
.end method

.method private static native get_kernel_cls1_0(J)Ljava/lang/String;
.end method

.method private static native get_kernel_r1_0(J)Ljava/lang/String;
.end method

.method private static native get_model_0(J)Ljava/lang/String;
.end method

.method private static native get_target_0(J)I
.end method

.method private static native set_backend_0(JI)V
.end method

.method private static native set_kernel_cls1_0(JLjava/lang/String;)V
.end method

.method private static native set_kernel_r1_0(JLjava/lang/String;)V
.end method

.method private static native set_model_0(JLjava/lang/String;)V
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
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_backend()I
    .locals 2

    .line 88
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->get_backend_0(J)I

    move-result v0

    return v0
.end method

.method public get_kernel_cls1()Ljava/lang/String;
    .locals 2

    .line 52
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->get_kernel_cls1_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_kernel_r1()Ljava/lang/String;
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->get_kernel_r1_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_model()Ljava/lang/String;
    .locals 2

    .line 34
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->get_model_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public get_target()I
    .locals 2

    .line 106
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->get_target_0(J)I

    move-result v0

    return v0
.end method

.method public set_backend(I)V
    .locals 2

    .line 97
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->set_backend_0(JI)V

    return-void
.end method

.method public set_kernel_cls1(Ljava/lang/String;)V
    .locals 2

    .line 61
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->set_kernel_cls1_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_kernel_r1(Ljava/lang/String;)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->set_kernel_r1_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_model(Ljava/lang/String;)V
    .locals 2

    .line 43
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->set_model_0(JLjava/lang/String;)V

    return-void
.end method

.method public set_target(I)V
    .locals 2

    .line 115
    iget-wide v0, p0, Lorg/opencv/video/TrackerDaSiamRPN_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/video/TrackerDaSiamRPN_Params;->set_target_0(JI)V

    return-void
.end method
