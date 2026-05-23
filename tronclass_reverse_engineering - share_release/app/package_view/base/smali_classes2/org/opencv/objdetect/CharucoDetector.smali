.class public Lorg/opencv/objdetect/CharucoDetector;
.super Lorg/opencv/core/Algorithm;
.source "CharucoDetector.java"


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 20
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/CharucoBoard;)V
    .locals 2

    .line 68
    iget-wide v0, p1, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoDetector;->CharucoDetector_3(J)J

    move-result-wide v0

    invoke-direct {p0, v0, v1}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/CharucoBoard;Lorg/opencv/objdetect/CharucoParameters;)V
    .locals 2

    .line 59
    iget-wide v0, p1, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/objdetect/CharucoDetector;->CharucoDetector_2(JJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/CharucoBoard;Lorg/opencv/objdetect/CharucoParameters;Lorg/opencv/objdetect/DetectorParameters;)V
    .locals 6

    .line 49
    iget-wide v0, p1, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/objdetect/CharucoDetector;->CharucoDetector_1(JJJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/objdetect/CharucoBoard;Lorg/opencv/objdetect/CharucoParameters;Lorg/opencv/objdetect/DetectorParameters;Lorg/opencv/objdetect/RefineParameters;)V
    .locals 8

    .line 38
    iget-wide v0, p1, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    iget-wide v6, p4, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/CharucoDetector;->CharucoDetector_0(JJJJ)J

    move-result-wide p1

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Algorithm;-><init>(J)V

    return-void
.end method

.method private static native CharucoDetector_0(JJJJ)J
.end method

.method private static native CharucoDetector_1(JJJ)J
.end method

.method private static native CharucoDetector_2(JJ)J
.end method

.method private static native CharucoDetector_3(J)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/CharucoDetector;
    .locals 1

    .line 23
    new-instance v0, Lorg/opencv/objdetect/CharucoDetector;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/CharucoDetector;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native detectBoard_0(JJJJJJ)V
.end method

.method private static native detectBoard_1(JJJJJ)V
.end method

.method private static native detectBoard_2(JJJJ)V
.end method

.method private static native detectDiamonds_0(JJJJJJ)V
.end method

.method private static native detectDiamonds_1(JJJJJ)V
.end method

.method private static native detectDiamonds_2(JJJJ)V
.end method

.method private static native getBoard_0(J)J
.end method

.method private static native getCharucoParameters_0(J)J
.end method

.method private static native getDetectorParameters_0(J)J
.end method

.method private static native getRefineParameters_0(J)J
.end method

.method private static native setBoard_0(JJ)V
.end method

.method private static native setCharucoParameters_0(JJ)V
.end method

.method private static native setDetectorParameters_0(JJ)V
.end method

.method private static native setRefineParameters_0(JJ)V
.end method


# virtual methods
.method public detectBoard(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 8

    .line 226
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v7}, Lorg/opencv/objdetect/CharucoDetector;->detectBoard_2(JJJJ)V

    return-void
.end method

.method public detectBoard(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 199
    invoke-static {p4}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    .line 200
    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v9, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v10}, Lorg/opencv/objdetect/CharucoDetector;->detectBoard_1(JJJJJ)V

    .line 201
    invoke-static {v0, p4}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 202
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectBoard(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 14
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 171
    invoke-static/range {p4 .. p4}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v0

    move-object v1, p0

    .line 172
    iget-wide v2, v1, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    move-object v4, p1

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v6, p2

    iget-wide v6, v6, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v8, p3

    iget-wide v8, v8, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v10, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v12, p5

    iget-wide v12, v12, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v2 .. v13}, Lorg/opencv/objdetect/CharucoDetector;->detectBoard_0(JJJJJJ)V

    move-object/from16 v2, p4

    .line 173
    invoke-static {v0, v2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 174
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
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

    .line 312
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 313
    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, p3, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v8}, Lorg/opencv/objdetect/CharucoDetector;->detectDiamonds_2(JJJJ)V

    .line 314
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 315
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;)V
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

    .line 284
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 285
    invoke-static/range {p4 .. p4}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object v2, p0

    .line 286
    iget-wide v3, v2, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    move-object v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v9, p3

    iget-wide v9, v9, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v11, v1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v3 .. v12}, Lorg/opencv/objdetect/CharucoDetector;->detectDiamonds_1(JJJJJ)V

    move-object v3, p2

    .line 287
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 288
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p4

    .line 289
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 290
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public detectDiamonds(Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 15
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
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 255
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 256
    invoke-static/range {p4 .. p4}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v1

    move-object v2, p0

    .line 257
    iget-wide v3, v2, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    move-object/from16 v5, p1

    iget-wide v5, v5, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v9, p3

    iget-wide v9, v9, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v11, v1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v13, p5

    iget-wide v13, v13, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v3 .. v14}, Lorg/opencv/objdetect/CharucoDetector;->detectDiamonds_0(JJJJJJ)V

    move-object/from16 v3, p2

    .line 258
    invoke-static {v0, v3}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 259
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    move-object/from16 v0, p4

    .line 260
    invoke-static {v1, v0}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 261
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

    .line 321
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/CharucoDetector;->delete(J)V

    return-void
.end method

.method public getBoard()Lorg/opencv/objdetect/CharucoBoard;
    .locals 3

    .line 77
    new-instance v0, Lorg/opencv/objdetect/CharucoBoard;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoDetector;->getBoard_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/CharucoBoard;-><init>(J)V

    return-object v0
.end method

.method public getCharucoParameters()Lorg/opencv/objdetect/CharucoParameters;
    .locals 3

    .line 95
    new-instance v0, Lorg/opencv/objdetect/CharucoParameters;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoDetector;->getCharucoParameters_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/CharucoParameters;-><init>(J)V

    return-object v0
.end method

.method public getDetectorParameters()Lorg/opencv/objdetect/DetectorParameters;
    .locals 3

    .line 113
    new-instance v0, Lorg/opencv/objdetect/DetectorParameters;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoDetector;->getDetectorParameters_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/DetectorParameters;-><init>(J)V

    return-object v0
.end method

.method public getRefineParameters()Lorg/opencv/objdetect/RefineParameters;
    .locals 3

    .line 131
    new-instance v0, Lorg/opencv/objdetect/RefineParameters;

    iget-wide v1, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/objdetect/CharucoDetector;->getRefineParameters_0(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/objdetect/RefineParameters;-><init>(J)V

    return-object v0
.end method

.method public setBoard(Lorg/opencv/objdetect/CharucoBoard;)V
    .locals 4

    .line 86
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/CharucoBoard;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoDetector;->setBoard_0(JJ)V

    return-void
.end method

.method public setCharucoParameters(Lorg/opencv/objdetect/CharucoParameters;)V
    .locals 4

    .line 104
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/CharucoParameters;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoDetector;->setCharucoParameters_0(JJ)V

    return-void
.end method

.method public setDetectorParameters(Lorg/opencv/objdetect/DetectorParameters;)V
    .locals 4

    .line 122
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/DetectorParameters;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoDetector;->setDetectorParameters_0(JJ)V

    return-void
.end method

.method public setRefineParameters(Lorg/opencv/objdetect/RefineParameters;)V
    .locals 4

    .line 140
    iget-wide v0, p0, Lorg/opencv/objdetect/CharucoDetector;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/objdetect/RefineParameters;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/objdetect/CharucoDetector;->setRefineParameters_0(JJ)V

    return-void
.end method
