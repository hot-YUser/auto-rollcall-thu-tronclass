.class public Lorg/opencv/objdetect/GraphicalCodeDetector;
.super Ljava/lang/Object;
.source "GraphicalCodeDetector.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/GraphicalCodeDetector;
    .locals 1

    .line 21
    new-instance v0, Lorg/opencv/objdetect/GraphicalCodeDetector;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/GraphicalCodeDetector;-><init>(J)V

    return-object v0
.end method

.method private static native decodeMulti_0(JJJLjava/util/List;J)Z
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;J)Z"
        }
    .end annotation
.end method

.method private static native decodeMulti_1(JJJLjava/util/List;)Z
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation
.end method

.method private static native decode_0(JJJJ)Ljava/lang/String;
.end method

.method private static native decode_1(JJJ)Ljava/lang/String;
.end method

.method private static native delete(J)V
.end method

.method private static native detectAndDecodeMulti_0(JJLjava/util/List;JJ)Z
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;JJ)Z"
        }
    .end annotation
.end method

.method private static native detectAndDecodeMulti_1(JJLjava/util/List;J)Z
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;J)Z"
        }
    .end annotation
.end method

.method private static native detectAndDecodeMulti_2(JJLjava/util/List;)Z
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation
.end method

.method private static native detectAndDecode_0(JJJJ)Ljava/lang/String;
.end method

.method private static native detectAndDecode_1(JJJ)Ljava/lang/String;
.end method

.method private static native detectAndDecode_2(JJ)Ljava/lang/String;
.end method

.method private static native detectMulti_0(JJJ)Z
.end method

.method private static native detect_0(JJJ)Z
.end method


# virtual methods
.method public decode(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 6

    .line 64
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/GraphicalCodeDetector;->decode_1(JJJ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public decode(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 8

    .line 52
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/GraphicalCodeDetector;->decode_0(JJJJ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public decodeMulti(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Ljava/util/List;)Z
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation

    .line 149
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v6, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/GraphicalCodeDetector;->decodeMulti_1(JJJLjava/util/List;)Z

    move-result p1

    return p1
.end method

.method public decodeMulti(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Ljava/util/List;Ljava/util/List;)Z
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)Z"
        }
    .end annotation

    .line 134
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 135
    iget-wide v1, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v7, p3

    invoke-static/range {v1 .. v9}, Lorg/opencv/objdetect/GraphicalCodeDetector;->decodeMulti_0(JJJLjava/util/List;J)Z

    move-result p1

    .line 136
    invoke-static {v0, p4}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 137
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p1
.end method

.method public detect(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Z
    .locals 6

    .line 34
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detect_0(JJJ)Z

    move-result p1

    return p1
.end method

.method public detectAndDecode(Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 4

    .line 102
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecode_2(JJ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public detectAndDecode(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 6

    .line 92
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecode_1(JJJ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public detectAndDecode(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Ljava/lang/String;
    .locals 8

    .line 81
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecode_0(JJJJ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public detectAndDecodeMulti(Lorg/opencv/core/Mat;Ljava/util/List;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation

    .line 191
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecodeMulti_2(JJLjava/util/List;)Z

    move-result p1

    return p1
.end method

.method public detectAndDecodeMulti(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)Z
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")Z"
        }
    .end annotation

    .line 181
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecodeMulti_1(JJLjava/util/List;J)Z

    move-result p1

    return p1
.end method

.method public detectAndDecodeMulti(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;)Z
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)Z"
        }
    .end annotation

    .line 166
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 167
    iget-wide v1, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v5, p2

    invoke-static/range {v1 .. v9}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectAndDecodeMulti_0(JJLjava/util/List;JJ)Z

    move-result p1

    .line 168
    invoke-static {v0, p4}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 169
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p1
.end method

.method public detectMulti(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Z
    .locals 6

    .line 117
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/GraphicalCodeDetector;->detectMulti_0(JJJ)Z

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

    .line 197
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/GraphicalCodeDetector;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 18
    iget-wide v0, p0, Lorg/opencv/objdetect/GraphicalCodeDetector;->nativeObj:J

    return-wide v0
.end method
