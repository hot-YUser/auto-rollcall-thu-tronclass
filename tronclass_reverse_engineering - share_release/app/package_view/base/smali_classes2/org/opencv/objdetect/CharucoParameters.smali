.class public Lorg/opencv/objdetect/CharucoParameters;
.super Ljava/lang/Object;
.source "CharucoParameters.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 25
    invoke-static {}, Lorg/opencv/objdetect/CharucoParameters;->CharucoParameters_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    return-void
.end method

.method private static native CharucoParameters_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/CharucoParameters;
    .locals 1

    .line 18
    new-instance v0, Lorg/opencv/objdetect/CharucoParameters;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/CharucoParameters;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_cameraMatrix_0(J)J
.end method

.method private static native get_distCoeffs_0(J)J
.end method

.method private static native get_minMarkers_0(J)I
.end method

.method private static native get_tryRefineMarkers_0(J)Z
.end method

.method private static native set_cameraMatrix_0(JJ)V
.end method

.method private static native set_distCoeffs_0(JJ)V
.end method

.method private static native set_minMarkers_0(JI)V
.end method

.method private static native set_tryRefineMarkers_0(JZ)V
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
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoParameters;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 15
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    return-wide v0
.end method

.method public get_cameraMatrix()Lorg/opencv/core/Mat;
    .locals 3

    .line 34
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoParameters;->get_cameraMatrix_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public get_distCoeffs()Lorg/opencv/core/Mat;
    .locals 3

    .line 52
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoParameters;->get_distCoeffs_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public get_minMarkers()I
    .locals 2

    .line 70
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoParameters;->get_minMarkers_0(J)I

    move-result v0

    return v0
.end method

.method public get_tryRefineMarkers()Z
    .locals 2

    .line 88
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoParameters;->get_tryRefineMarkers_0(J)Z

    move-result v0

    return v0
.end method

.method public set_cameraMatrix(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 43
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoParameters;->set_cameraMatrix_0(JJ)V

    return-void
.end method

.method public set_distCoeffs(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 61
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoParameters;->set_distCoeffs_0(JJ)V

    return-void
.end method

.method public set_minMarkers(I)V
    .locals 2

    .line 79
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/CharucoParameters;->set_minMarkers_0(JI)V

    return-void
.end method

.method public set_tryRefineMarkers(Z)V
    .locals 2

    .line 97
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/CharucoParameters;->set_tryRefineMarkers_0(JZ)V

    return-void
.end method
