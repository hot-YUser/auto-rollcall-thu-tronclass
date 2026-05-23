.class public Lorg/opencv/objdetect/ArucoDetector;
.super Lorg/opencv/core/Algorithm;
.source "ArucoDetector.java"


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 71
    invoke-static {}, Lorg/opencv/objdetect/ArucoDetector;->ArucoDetector_3()J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 27
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/Dictionary;)V
    .locals 2

    .line 63
    iget-wide v0, p1, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/ArucoDetector;->ArucoDetector_2(J)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/Dictionary;Lorg/opencv/objdetect/DetectorParameters;)V
    .locals 2

    .line 54
    iget-wide v0, p1, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/objdetect/ArucoDetector;->ArucoDetector_1(JJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/Dictionary;Lorg/opencv/objdetect/DetectorParameters;Lorg/opencv/objdetect/RefineParameters;)V
    .locals 6

    .line 44
    iget-wide v0, p1, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/ArucoDetector;->ArucoDetector_0(JJJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method private static native ArucoDetector_0(JJJ)J
.end method

.method private static native ArucoDetector_1(JJ)J
.end method

.method private static native ArucoDetector_2(J)J
.end method

.method private static native ArucoDetector_3()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/ArucoDetector;
    .locals 1

    .line 30
    new-instance v0, Lorg/opencv/objdetect/ArucoDetector;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/ArucoDetector;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native detectMarkers_0(JJJJJ)V
.end method

.method private static native detectMarkers_1(JJJJ)V
.end method

.method private static native getDetectorParameters_0(J)J
.end method

.method private static native getDictionary_0(J)J
.end method

.method private static native getRefineParameters_0(J)J
.end method

.method private static native refineDetectedMarkers_0(JJJJJJJJJ)V
.end method

.method private static native refineDetectedMarkers_1(JJJJJJJJ)V
.end method

.method private static native refineDetectedMarkers_2(JJJJJJJ)V
.end method

.method private static native refineDetectedMarkers_3(JJJJJJ)V
.end method

.method private static native setDetectorParameters_0(JJ)V
.end method

.method private static native setDictionary_0(JJ)V
.end method

.method private static native setRefineParameters_0(JJ)V
.end method


# virtual methods
.method public detectMarkers(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 9
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

    .line 131
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 132
    iget-wide v1, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v8}, Lorg/opencv/objdetect/ArucoDetector;->detectMarkers_1(JJJJ)V

    .line 133
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 134
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectMarkers(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 13
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 101
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 102
    new-instance v1, Lorg/opencv/core/Mat;

    invoke-direct {v1}, Lorg/opencv/core/Mat;-><init>()V

    move-object v2, p0

    .line 103
    iget-wide v3, v2, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    move-object v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v9, p3

    iget-wide v9, v9, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v11, v1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v3 .. v12}, Lorg/opencv/objdetect/ArucoDetector;->detectMarkers_0(JJJJJ)V

    move-object v3, p2

    .line 104
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 105
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p4

    .line 106
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 107
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 339
    iget-wide v0, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/ArucoDetector;->delete(J)V

    return-void
.end method

.method public getDetectorParameters()Lorg/opencv/objdetect/DetectorParameters;
    .locals 3

    .line 292
    new-instance v0, Lorg/opencv/objdetect/DetectorParameters;

    iget-wide v1, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/ArucoDetector;->getDetectorParameters_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/DetectorParameters;-><init>(J)V

    return-object v0
.end method

.method public getDictionary()Lorg/opencv/objdetect/Dictionary;
    .locals 3

    .line 274
    new-instance v0, Lorg/opencv/objdetect/Dictionary;

    iget-wide v1, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/ArucoDetector;->getDictionary_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/Dictionary;-><init>(J)V

    return-object v0
.end method

.method public getRefineParameters()Lorg/opencv/objdetect/RefineParameters;
    .locals 3

    .line 310
    new-instance v0, Lorg/opencv/objdetect/RefineParameters;

    iget-wide v1, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/ArucoDetector;->getRefineParameters_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/RefineParameters;-><init>(J)V

    return-object v0
.end method

.method public refineDetectedMarkers(Lorg/opencv/core/Mat;Lorg/opencv/objdetect/Board;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 15
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/objdetect/Board;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 259
    invoke-static/range {p3 .. p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 260
    invoke-static/range {p5 .. p5}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object v2, p0

    .line 261
    iget-wide v3, v2, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    move-object/from16 v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v7, p2

    iget-wide v7, v7, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v9, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v11, p4

    iget-wide v11, v11, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v13, v1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v3 .. v14}, Lorg/opencv/objdetect/ArucoDetector;->refineDetectedMarkers_3(JJJJJJ)V

    move-object/from16 v3, p3

    .line 262
    invoke-static {v0, v3}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 263
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p5

    .line 264
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 265
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public refineDetectedMarkers(Lorg/opencv/core/Mat;Lorg/opencv/objdetect/Board;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 18
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/objdetect/Board;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 229
    invoke-static/range {p3 .. p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 230
    invoke-static/range {p5 .. p5}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object/from16 v2, p0

    .line 231
    iget-wide v3, v2, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    move-object/from16 v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v7, p2

    iget-wide v7, v7, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v9, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v11, p4

    iget-wide v11, v11, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v13, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v15, p6

    move-object/from16 v17, v1

    iget-wide v1, v15, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide v15, v1

    invoke-static/range {v3 .. v16}, Lorg/opencv/objdetect/ArucoDetector;->refineDetectedMarkers_2(JJJJJJJ)V

    move-object/from16 v1, p3

    .line 232
    invoke-static {v0, v1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 233
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p5

    move-object/from16 v1, v17

    .line 234
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 235
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public refineDetectedMarkers(Lorg/opencv/core/Mat;Lorg/opencv/objdetect/Board;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 21
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/objdetect/Board;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 198
    invoke-static/range {p3 .. p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 199
    invoke-static/range {p5 .. p5}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object/from16 v2, p0

    .line 200
    iget-wide v3, v2, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    move-object/from16 v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v7, p2

    iget-wide v7, v7, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v9, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v11, p4

    iget-wide v11, v11, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v13, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v15, p6

    move-object/from16 v19, v1

    iget-wide v1, v15, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v15, p7

    move-object/from16 v20, v0

    move-wide/from16 v16, v1

    iget-wide v0, v15, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide/from16 v15, v16

    move-wide/from16 v17, v0

    invoke-static/range {v3 .. v18}, Lorg/opencv/objdetect/ArucoDetector;->refineDetectedMarkers_1(JJJJJJJJ)V

    move-object/from16 v0, p3

    move-object/from16 v1, v20

    .line 201
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 202
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p5

    move-object/from16 v1, v19

    .line 203
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 204
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public refineDetectedMarkers(Lorg/opencv/core/Mat;Lorg/opencv/objdetect/Board;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 22
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/objdetect/Board;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 166
    invoke-static/range {p3 .. p3}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 167
    invoke-static/range {p5 .. p5}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object/from16 v2, p0

    .line 168
    iget-wide v3, v2, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    move-object/from16 v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v7, p2

    iget-wide v7, v7, Lorg/opencv/objdetect/Board;->nativeObj:J

    iget-wide v9, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v11, p4

    iget-wide v11, v11, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v13, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v15, p6

    move-object/from16 v21, v1

    iget-wide v1, v15, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide v15, v1

    move-object/from16 v1, p7

    iget-wide v1, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide/from16 v17, v1

    move-object/from16 v1, p8

    iget-wide v1, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide/from16 v19, v1

    invoke-static/range {v3 .. v20}, Lorg/opencv/objdetect/ArucoDetector;->refineDetectedMarkers_0(JJJJJJJJJ)V

    move-object/from16 v1, p3

    .line 169
    invoke-static {v0, v1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 170
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p5

    move-object/from16 v1, v21

    .line 171
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 172
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public setDetectorParameters(Lorg/opencv/objdetect/DetectorParameters;)V
    .locals 4

    .line 301
    iget-wide v0, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/ArucoDetector;->setDetectorParameters_0(JJ)V

    return-void
.end method

.method public setDictionary(Lorg/opencv/objdetect/Dictionary;)V
    .locals 4

    .line 283
    iget-wide v0, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/Dictionary;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/ArucoDetector;->setDictionary_0(JJ)V

    return-void
.end method

.method public setRefineParameters(Lorg/opencv/objdetect/RefineParameters;)V
    .locals 4

    .line 319
    iget-wide v0, p0, Lorg/opencv/objdetect/ArucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/ArucoDetector;->setRefineParameters_0(JJ)V

    return-void
.end method
