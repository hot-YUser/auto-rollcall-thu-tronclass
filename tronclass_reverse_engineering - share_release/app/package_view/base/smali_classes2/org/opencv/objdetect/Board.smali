.class public Lorg/opencv/objdetect/Board;
.super Ljava/lang/Object;
.source "Board.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/util/List;Lorg/opencv/objdetect/Dictionary;Lorg/opencv/core/Mat;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/objdetect/Dictionary;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 48
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 49
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 50
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Board;->Board_0(JJJ)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    return-void
.end method

.method private static native Board_0(JJJ)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/Board;
    .locals 1

    .line 35
    new-instance v0, Lorg/opencv/objdetect/Board;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/Board;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native generateImage_0(JDDJII)V
.end method

.method private static native generateImage_1(JDDJI)V
.end method

.method private static native generateImage_2(JDDJ)V
.end method

.method private static native getDictionary_0(J)J
.end method

.method private static native getIds_0(J)J
.end method

.method private static native getObjPoints_0(J)J
.end method

.method private static native getRightBottomCorner_0(J)[D
.end method

.method private static native matchImagePoints_0(JJJJJ)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 195
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/Board;->delete(J)V

    return-void
.end method

.method public generateImage(Lorg/opencv/core/Size;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 189
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v4, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/Board;->generateImage_2(JDDJ)V

    return-void
.end method

.method public generateImage(Lorg/opencv/core/Size;Lorg/opencv/core/Mat;I)V
    .locals 9

    .line 176
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v4, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move v8, p3

    invoke-static/range {v0 .. v8}, Lorg/opencv/objdetect/Board;->generateImage_1(JDDJI)V

    return-void
.end method

.method public generateImage(Lorg/opencv/core/Size;Lorg/opencv/core/Mat;II)V
    .locals 10

    .line 162
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v4, p1, Lorg/opencv/core/Size;->height:D

    iget-wide v6, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move v8, p3

    move v9, p4

    invoke-static/range {v0 .. v9}, Lorg/opencv/objdetect/Board;->generateImage_0(JDDJII)V

    return-void
.end method

.method public getDictionary()Lorg/opencv/objdetect/Dictionary;
    .locals 3

    .line 63
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    iget-wide v1, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/Board;->getDictionary_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method public getIds()Lorg/opencv/core/MatOfInt;
    .locals 2

    .line 100
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/Board;->getIds_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/core/MatOfInt;->fromNativeAddr(J)Lorg/opencv/core/MatOfInt;

    move-result-object v0

    return-object v0
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 32
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    return-wide v0
.end method

.method public getObjPoints()Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfPoint3f;",
            ">;"
        }
    .end annotation

    .line 84
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 85
    new-instance v1, Lorg/opencv/core/Mat;

    iget-wide v2, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    invoke-static {v2, v3}, Lorg/opencv/objdetect/Board;->getObjPoints_0(J)J

    move-result-wide v2

    invoke-direct {v1, v2, v3}, Lorg/opencv/core/Mat;-><init>(J)V

    .line 86
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_vector_Point3f(Lorg/opencv/core/Mat;Ljava/util/List;)V

    return-object v0
.end method

.method public getRightBottomCorner()Lorg/opencv/core/Point3;
    .locals 3

    .line 113
    new-instance v0, Lorg/opencv/core/Point3;

    iget-wide v1, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/Board;->getRightBottomCorner_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Point3;-><init>([D)V

    return-object v0
.end method

.method public matchImagePoints(Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 141
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 142
    iget-wide v0, p0, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, p4, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v9}, Lorg/opencv/objdetect/Board;->matchImagePoints_0(JJJJJ)V

    return-void
.end method
