.class public Lorg/opencv/objdetect/GridBoard;
.super Lorg/opencv/objdetect/Board;
.source "GridBoard.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 20
    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;FFLorg/opencv/objdetect/Dictionary;)V
    .locals 8

    .line 51
    iget-wide v0, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v2, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p4, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/GridBoard;->GridBoard_1(DDFFJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;FFLorg/opencv/objdetect/Dictionary;Lorg/opencv/core/Mat;)V
    .locals 10

    .line 39
    iget-wide v0, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v2, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p4, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v8, p5, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v9}, Lorg/opencv/objdetect/GridBoard;->GridBoard_0(DDFFJJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-void
.end method

.method private static native GridBoard_0(DDFFJJ)J
.end method

.method private static native GridBoard_1(DDFFJ)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/GridBoard;
    .locals 1

    .line 23
    new-instance v0, Lorg/opencv/objdetect/GridBoard;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/GridBoard;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native getGridSize_0(J)[D
.end method

.method private static native getMarkerLength_0(J)F
.end method

.method private static native getMarkerSeparation_0(J)F
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 84
    iget-wide v0, p0, Lorg/opencv/objdetect/GridBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/GridBoard;->delete(J)V

    return-void
.end method

.method public getGridSize()Lorg/opencv/core/Size;
    .locals 3

    .line 60
    new-instance v0, Lorg/opencv/core/Size;

    iget-wide v1, p0, Lorg/opencv/objdetect/GridBoard;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/GridBoard;->getGridSize_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Size;-><init>([D)V

    return-object v0
.end method

.method public getMarkerLength()F
    .locals 2

    .line 69
    iget-wide v0, p0, Lorg/opencv/objdetect/GridBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/GridBoard;->getMarkerLength_0(J)F

    move-result v0

    return v0
.end method

.method public getMarkerSeparation()F
    .locals 2

    .line 78
    iget-wide v0, p0, Lorg/opencv/objdetect/GridBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/GridBoard;->getMarkerSeparation_0(J)F

    move-result v0

    return v0
.end method
