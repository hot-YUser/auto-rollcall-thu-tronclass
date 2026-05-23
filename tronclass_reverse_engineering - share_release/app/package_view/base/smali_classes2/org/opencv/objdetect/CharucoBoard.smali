.class public Lorg/opencv/objdetect/CharucoBoard;
.super Lorg/opencv/objdetect/Board;
.source "CharucoBoard.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 24
    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;FFLorg/opencv/objdetect/Dictionary;)V
    .locals 8

    .line 57
    iget-wide v0, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v2, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p4, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/CharucoBoard;->CharucoBoard_1(DDFFJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;FFLorg/opencv/objdetect/Dictionary;Lorg/opencv/core/Mat;)V
    .locals 10

    .line 44
    iget-wide v0, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v2, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p4, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v8, p5, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v9}, Lorg/opencv/objdetect/CharucoBoard;->CharucoBoard_0(DDFFJJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method private static native CharucoBoard_0(DDFFJJ)J
.end method

.method private static native CharucoBoard_1(DDFFJ)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/CharucoBoard;
    .locals 1

    .line 27
    new-instance v0, Lorg/opencv/objdetect/CharucoBoard;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/CharucoBoard;-><init>(J)V

    return-object v0
.end method

.method private static native checkCharucoCornersCollinear_0(JJ)Z
.end method

.method private static native delete(J)V
.end method

.method private static native getChessboardCorners_0(J)J
.end method

.method private static native getChessboardSize_0(J)[D
.end method

.method private static native getLegacyPattern_0(J)Z
.end method

.method private static native getMarkerLength_0(J)F
.end method

.method private static native getSquareLength_0(J)F
.end method

.method private static native setLegacyPattern_0(JZ)V
.end method


# virtual methods
.method public checkCharucoCornersCollinear(Lorg/opencv/core/Mat;)Z
    .locals 4

    .line 147
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoBoard;->checkCharucoCornersCollinear_0(JJ)Z

    move-result p1

    return p1
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 153
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoBoard;->delete(J)V

    return-void
.end method

.method public getChessboardCorners()Lorg/opencv/core/MatOfPoint3f;
    .locals 2

    .line 126
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoBoard;->getChessboardCorners_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/core/MatOfPoint3f;->fromNativeAddr(J)Lorg/opencv/core/MatOfPoint3f;

    move-result-object v0

    return-object v0
.end method

.method public getChessboardSize()Lorg/opencv/core/Size;
    .locals 3

    .line 95
    new-instance v0, Lorg/opencv/core/Size;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoBoard;->getChessboardSize_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Size;-><init>([D)V

    return-object v0
.end method

.method public getLegacyPattern()Z
    .locals 2

    .line 86
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoBoard;->getLegacyPattern_0(J)Z

    move-result v0

    return v0
.end method

.method public getMarkerLength()F
    .locals 2

    .line 113
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoBoard;->getMarkerLength_0(J)F

    move-result v0

    return v0
.end method

.method public getSquareLength()F
    .locals 2

    .line 104
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoBoard;->getSquareLength_0(J)F

    move-result v0

    return v0
.end method

.method public setLegacyPattern(Z)V
    .locals 2

    .line 77
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/CharucoBoard;->setLegacyPattern_0(JZ)V

    return-void
.end method
