.class public Lorg/opencv/objdetect/FaceRecognizerSF;
.super Ljava/lang/Object;
.source "FaceRecognizerSF.java"


# static fields
.field public static final FR_COSINE:I = 0x0

.field public static final FR_NORM_L2:I = 0x1


# instance fields
.field protected final nativeObj:J


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 18
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/FaceRecognizerSF;
    .locals 1

    .line 23
    new-instance v0, Lorg/opencv/objdetect/FaceRecognizerSF;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/FaceRecognizerSF;-><init>(J)V

    return-object v0
.end method

.method private static native alignCrop_0(JJJJ)V
.end method

.method public static create(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/objdetect/FaceRecognizerSF;
    .locals 0

    .line 120
    invoke-static {p0, p1}, Lorg/opencv/objdetect/FaceRecognizerSF;->create_2(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/objdetect/FaceRecognizerSF;->__fromPtr__(J)Lorg/opencv/objdetect/FaceRecognizerSF;

    move-result-object p0

    return-object p0
.end method

.method public static create(Ljava/lang/String;Ljava/lang/String;I)Lorg/opencv/objdetect/FaceRecognizerSF;
    .locals 0

    .line 110
    invoke-static {p0, p1, p2}, Lorg/opencv/objdetect/FaceRecognizerSF;->create_1(Ljava/lang/String;Ljava/lang/String;I)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/objdetect/FaceRecognizerSF;->__fromPtr__(J)Lorg/opencv/objdetect/FaceRecognizerSF;

    move-result-object p0

    return-object p0
.end method

.method public static create(Ljava/lang/String;Ljava/lang/String;II)Lorg/opencv/objdetect/FaceRecognizerSF;
    .locals 0

    .line 99
    invoke-static {p0, p1, p2, p3}, Lorg/opencv/objdetect/FaceRecognizerSF;->create_0(Ljava/lang/String;Ljava/lang/String;II)J

    move-result-wide p0

    invoke-static {p0, p1}, Lorg/opencv/objdetect/FaceRecognizerSF;->__fromPtr__(J)Lorg/opencv/objdetect/FaceRecognizerSF;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(Ljava/lang/String;Ljava/lang/String;II)J
.end method

.method private static native create_1(Ljava/lang/String;Ljava/lang/String;I)J
.end method

.method private static native create_2(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native delete(J)V
.end method

.method private static native feature_0(JJJ)V
.end method

.method private static native match_0(JJJI)D
.end method

.method private static native match_1(JJJ)D
.end method


# virtual methods
.method public alignCrop(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 42
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/FaceRecognizerSF;->alignCrop_0(JJJJ)V

    return-void
.end method

.method public feature(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 6

    .line 56
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/FaceRecognizerSF;->feature_0(JJJ)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 126
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/FaceRecognizerSF;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 20
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    return-wide v0
.end method

.method public match(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)D
    .locals 6

    .line 82
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/FaceRecognizerSF;->match_1(JJJ)D

    move-result-wide p1

    return-wide p1
.end method

.method public match(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)D
    .locals 7

    .line 72
    iget-wide v0, p0, Lorg/opencv/objdetect/FaceRecognizerSF;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/FaceRecognizerSF;->match_0(JJJI)D

    move-result-wide p1

    return-wide p1
.end method
