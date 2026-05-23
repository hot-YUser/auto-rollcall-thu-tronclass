.class public Lorg/opencv/objdetect/Objdetect;
.super Ljava/lang/Object;
.source "Objdetect.java"


# static fields
.field public static final CASCADE_DO_CANNY_PRUNING:I = 0x1

.field public static final CASCADE_DO_ROUGH_SEARCH:I = 0x8

.field public static final CASCADE_FIND_BIGGEST_OBJECT:I = 0x4

.field public static final CASCADE_SCALE_IMAGE:I = 0x2

.field public static final CORNER_REFINE_APRILTAG:I = 0x3

.field public static final CORNER_REFINE_CONTOUR:I = 0x2

.field public static final CORNER_REFINE_NONE:I = 0x0

.field public static final CORNER_REFINE_SUBPIX:I = 0x1

.field public static final DICT_4X4_100:I = 0x1

.field public static final DICT_4X4_1000:I = 0x3

.field public static final DICT_4X4_250:I = 0x2

.field public static final DICT_4X4_50:I = 0x0

.field public static final DICT_5X5_100:I = 0x5

.field public static final DICT_5X5_1000:I = 0x7

.field public static final DICT_5X5_250:I = 0x6

.field public static final DICT_5X5_50:I = 0x4

.field public static final DICT_6X6_100:I = 0x9

.field public static final DICT_6X6_1000:I = 0xb

.field public static final DICT_6X6_250:I = 0xa

.field public static final DICT_6X6_50:I = 0x8

.field public static final DICT_7X7_100:I = 0xd

.field public static final DICT_7X7_1000:I = 0xf

.field public static final DICT_7X7_250:I = 0xe

.field public static final DICT_7X7_50:I = 0xc

.field public static final DICT_APRILTAG_16h5:I = 0x11

.field public static final DICT_APRILTAG_25h9:I = 0x12

.field public static final DICT_APRILTAG_36h10:I = 0x13

.field public static final DICT_APRILTAG_36h11:I = 0x14

.field public static final DICT_ARUCO_MIP_36h12:I = 0x15

.field public static final DICT_ARUCO_ORIGINAL:I = 0x10

.field public static final DetectionBasedTracker_DETECTED:I = 0x1

.field public static final DetectionBasedTracker_DETECTED_NOT_SHOWN_YET:I = 0x0

.field public static final DetectionBasedTracker_DETECTED_TEMPORARY_LOST:I = 0x2

.field public static final DetectionBasedTracker_WRONG_OBJECT:I = 0x3


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 17
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static drawDetectedCornersCharuco(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 2

    .line 199
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1}, Lorg/opencv/objdetect/Objdetect;->drawDetectedCornersCharuco_2(JJ)V

    return-void
.end method

.method public static drawDetectedCornersCharuco(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 6

    .line 186
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Objdetect;->drawDetectedCornersCharuco_1(JJJ)V

    return-void
.end method

.method public static drawDetectedCornersCharuco(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Scalar;)V
    .locals 16

    move-object/from16 v0, p0

    move-object/from16 v1, p3

    .line 172
    iget-wide v2, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v0, p1

    iget-wide v4, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v0, p2

    iget-wide v6, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x0

    aget-wide v8, v0, v8

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x1

    aget-wide v10, v0, v10

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v12, 0x2

    aget-wide v12, v0, v12

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v14, v0, v1

    move-wide v0, v2

    move-wide v2, v4

    move-wide v4, v6

    move-wide v6, v8

    move-wide v8, v10

    move-wide v10, v12

    move-wide v12, v14

    invoke-static/range {v0 .. v13}, Lorg/opencv/objdetect/Objdetect;->drawDetectedCornersCharuco_0(JJJDDDD)V

    return-void
.end method

.method private static native drawDetectedCornersCharuco_0(JJJDDDD)V
.end method

.method private static native drawDetectedCornersCharuco_1(JJJ)V
.end method

.method private static native drawDetectedCornersCharuco_2(JJ)V
.end method

.method public static drawDetectedDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 269
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 270
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1}, Lorg/opencv/objdetect/Objdetect;->drawDetectedDiamonds_2(JJ)V

    return-void
.end method

.method public static drawDetectedDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 248
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 249
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Objdetect;->drawDetectedDiamonds_1(JJJ)V

    return-void
.end method

.method public static drawDetectedDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/core/Scalar;)V
    .locals 16
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Scalar;",
            ")V"
        }
    .end annotation

    move-object/from16 v0, p3

    .line 226
    invoke-static/range {p1 .. p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object/from16 v2, p0

    .line 227
    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v1, p2

    iget-wide v6, v1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x0

    aget-wide v8, v1, v8

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x1

    aget-wide v10, v1, v10

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v12, 0x2

    aget-wide v12, v1, v12

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v14, v0, v1

    invoke-static/range {v2 .. v15}, Lorg/opencv/objdetect/Objdetect;->drawDetectedDiamonds_0(JJJDDDD)V

    return-void
.end method

.method private static native drawDetectedDiamonds_0(JJJDDDD)V
.end method

.method private static native drawDetectedDiamonds_1(JJJ)V
.end method

.method private static native drawDetectedDiamonds_2(JJ)V
.end method

.method public static drawDetectedMarkers(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 334
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 335
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1}, Lorg/opencv/objdetect/Objdetect;->drawDetectedMarkers_2(JJ)V

    return-void
.end method

.method public static drawDetectedMarkers(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 315
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 316
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Objdetect;->drawDetectedMarkers_1(JJJ)V

    return-void
.end method

.method public static drawDetectedMarkers(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/core/Scalar;)V
    .locals 16
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Scalar;",
            ")V"
        }
    .end annotation

    move-object/from16 v0, p3

    .line 295
    invoke-static/range {p1 .. p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object/from16 v2, p0

    .line 296
    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v1, p2

    iget-wide v6, v1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x0

    aget-wide v8, v1, v8

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x1

    aget-wide v10, v1, v10

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v12, 0x2

    aget-wide v12, v1, v12

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v14, v0, v1

    invoke-static/range {v2 .. v15}, Lorg/opencv/objdetect/Objdetect;->drawDetectedMarkers_0(JJJDDDD)V

    return-void
.end method

.method private static native drawDetectedMarkers_0(JJJDDDD)V
.end method

.method private static native drawDetectedMarkers_1(JJJ)V
.end method

.method private static native drawDetectedMarkers_2(JJ)V
.end method

.method public static extendDictionary(II)Lorg/opencv/objdetect/Dictionary;
    .locals 1

    .line 152
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    invoke-static {p0, p1}, Lorg/opencv/objdetect/Objdetect;->extendDictionary_2(II)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method public static extendDictionary(IILorg/opencv/objdetect/Dictionary;)Lorg/opencv/objdetect/Dictionary;
    .locals 3

    .line 136
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    iget-wide v1, p2, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {p0, p1, v1, v2}, Lorg/opencv/objdetect/Objdetect;->extendDictionary_1(IIJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method public static extendDictionary(IILorg/opencv/objdetect/Dictionary;I)Lorg/opencv/objdetect/Dictionary;
    .locals 3

    .line 119
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    iget-wide v1, p2, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {p0, p1, v1, v2, p3}, Lorg/opencv/objdetect/Objdetect;->extendDictionary_0(IIJI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method private static native extendDictionary_0(IIJI)J
.end method

.method private static native extendDictionary_1(IIJ)J
.end method

.method private static native extendDictionary_2(II)J
.end method

.method public static generateImageMarker(Lorg/opencv/objdetect/Dictionary;IILorg/opencv/core/Mat;)V
    .locals 6

    .line 369
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/Objdetect;->generateImageMarker_1(JIIJ)V

    return-void
.end method

.method public static generateImageMarker(Lorg/opencv/objdetect/Dictionary;IILorg/opencv/core/Mat;I)V
    .locals 7

    .line 355
    iget-wide v0, p0, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    move v6, p4

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/Objdetect;->generateImageMarker_0(JIIJI)V

    return-void
.end method

.method private static native generateImageMarker_0(JIIJI)V
.end method

.method private static native generateImageMarker_1(JIIJ)V
.end method

.method public static getPredefinedDictionary(I)Lorg/opencv/objdetect/Dictionary;
    .locals 3

    .line 96
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    invoke-static {p0}, Lorg/opencv/objdetect/Objdetect;->getPredefinedDictionary_0(I)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method private static native getPredefinedDictionary_0(I)J
.end method

.method public static groupRectangles(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfInt;I)V
    .locals 2

    .line 82
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1, p2}, Lorg/opencv/objdetect/Objdetect;->groupRectangles_1(JJI)V

    return-void
.end method

.method public static groupRectangles(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfInt;ID)V
    .locals 7

    .line 76
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move-wide v5, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/objdetect/Objdetect;->groupRectangles_0(JJID)V

    return-void
.end method

.method private static native groupRectangles_0(JJID)V
.end method

.method private static native groupRectangles_1(JJI)V
.end method
