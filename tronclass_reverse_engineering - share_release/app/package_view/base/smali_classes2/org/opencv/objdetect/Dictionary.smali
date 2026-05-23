.class public Lorg/opencv/objdetect/Dictionary;
.super Ljava/lang/Object;
.source "Dictionary.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    invoke-static {}, Lorg/opencv/objdetect/Dictionary;->Dictionary_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;I)V
    .locals 2

    .line 63
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 64
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p2}, Lorg/opencv/objdetect/Dictionary;->Dictionary_2(JI)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;II)V
    .locals 2

    .line 53
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 54
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p2, p3}, Lorg/opencv/objdetect/Dictionary;->Dictionary_1(JII)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    return-void
.end method

.method private static native Dictionary_0()J
.end method

.method private static native Dictionary_1(JII)J
.end method

.method private static native Dictionary_2(JI)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/Dictionary;
    .locals 1

    .line 31
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native generateImageMarker_0(JIIJI)V
.end method

.method private static native generateImageMarker_1(JIIJ)V
.end method

.method public static getBitsFromByteList(Lorg/opencv/core/Mat;I)Lorg/opencv/core/Mat;
    .locals 3

    .line 187
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/objdetect/Dictionary;->getBitsFromByteList_0(JI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native getBitsFromByteList_0(JI)J
.end method

.method public static getByteListFromBits(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 3

    .line 172
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/Dictionary;->getByteListFromBits_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native getByteListFromBits_0(J)J
.end method

.method private static native getDistanceToId_0(JJIZ)I
.end method

.method private static native getDistanceToId_1(JJI)I
.end method

.method private static native get_bytesList_0(J)J
.end method

.method private static native get_markerSize_0(J)I
.end method

.method private static native get_maxCorrectionBits_0(J)I
.end method

.method private static native identify_0(JJ[D[DD)Z
.end method

.method private static native set_bytesList_0(JJ)V
.end method

.method private static native set_markerSize_0(JI)V
.end method

.method private static native set_maxCorrectionBits_0(JI)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 247
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/Dictionary;->delete(J)V

    return-void
.end method

.method public generateImageMarker(IILorg/opencv/core/Mat;)V
    .locals 6

    .line 158
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Dictionary;->generateImageMarker_1(JIIJ)V

    return-void
.end method

.method public generateImageMarker(IILorg/opencv/core/Mat;I)V
    .locals 7

    .line 148
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    move v6, p4

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/Dictionary;->generateImageMarker_0(JIIJI)V

    return-void
.end method

.method public getDistanceToId(Lorg/opencv/core/Mat;I)I
    .locals 4

    .line 132
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/objdetect/Dictionary;->getDistanceToId_1(JJI)I

    move-result p1

    return p1
.end method

.method public getDistanceToId(Lorg/opencv/core/Mat;IZ)I
    .locals 6

    .line 120
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Dictionary;->getDistanceToId_0(JJIZ)I

    move-result p1

    return p1
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 28
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    return-wide v0
.end method

.method public get_bytesList()Lorg/opencv/core/Mat;
    .locals 3

    .line 196
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/Dictionary;->get_bytesList_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public get_markerSize()I
    .locals 2

    .line 214
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/Dictionary;->get_markerSize_0(J)I

    move-result v0

    return v0
.end method

.method public get_maxCorrectionBits()I
    .locals 2

    .line 232
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/Dictionary;->get_maxCorrectionBits_0(J)I

    move-result v0

    return v0
.end method

.method public identify(Lorg/opencv/core/Mat;[I[ID)Z
    .locals 10

    const/4 v0, 0x1

    .line 97
    new-array v9, v0, [D

    .line 98
    new-array v0, v0, [D

    .line 99
    iget-wide v1, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v5, v9

    move-object v6, v0

    move-wide v7, p4

    invoke-static/range {v1 .. v8}, Lorg/opencv/objdetect/Dictionary;->identify_0(JJ[D[DD)Z

    move-result p1

    const/4 p4, 0x0

    if-eqz p2, :cond_0

    .line 100
    aget-wide v1, v9, p4

    double-to-int p5, v1

    aput p5, p2, p4

    :cond_0
    if-eqz p3, :cond_1

    .line 101
    aget-wide v1, v0, p4

    double-to-int p2, v1

    aput p2, p3, p4

    :cond_1
    return p1
.end method

.method public set_bytesList(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 205
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/Dictionary;->set_bytesList_0(JJ)V

    return-void
.end method

.method public set_markerSize(I)V
    .locals 2

    .line 223
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/Dictionary;->set_markerSize_0(JI)V

    return-void
.end method

.method public set_maxCorrectionBits(I)V
    .locals 2

    .line 241
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/Dictionary;->set_maxCorrectionBits_0(JI)V

    return-void
.end method
