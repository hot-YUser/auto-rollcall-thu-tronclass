.class public Lorg/opencv/dnn/Model;
.super Ljava/lang/Object;
.source "Model.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;)V
    .locals 2

    .line 52
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 53
    invoke-static {p1}, Lorg/opencv/dnn/Model;->Model_1(Ljava/lang/String;)J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    invoke-static {p1, p2}, Lorg/opencv/dnn/Model;->Model_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/dnn/Net;)V
    .locals 2

    .line 65
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 66
    iget-wide v0, p1, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Model;->Model_2(J)J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    return-void
.end method

.method private static native Model_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native Model_1(Ljava/lang/String;)J
.end method

.method private static native Model_2(J)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/Model;
    .locals 1

    .line 31
    new-instance v0, Lorg/opencv/dnn/Model;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native enableWinograd_0(JZ)J
.end method

.method private static native predict_0(JJJ)V
.end method

.method private static native setInputCrop_0(JZ)J
.end method

.method private static native setInputMean_0(JDDDD)J
.end method

.method private static native setInputParams_0(JDDDDDDDZZ)V
.end method

.method private static native setInputParams_1(JDDDDDDDZ)V
.end method

.method private static native setInputParams_2(JDDDDDDD)V
.end method

.method private static native setInputParams_3(JDDD)V
.end method

.method private static native setInputParams_4(JD)V
.end method

.method private static native setInputParams_5(J)V
.end method

.method private static native setInputScale_0(JDDDD)J
.end method

.method private static native setInputSize_0(JDD)J
.end method

.method private static native setInputSize_1(JII)J
.end method

.method private static native setInputSwapRB_0(JZ)J
.end method

.method private static native setPreferableBackend_0(JI)J
.end method

.method private static native setPreferableTarget_0(JI)J
.end method


# virtual methods
.method public enableWinograd(Z)Lorg/opencv/dnn/Model;
    .locals 3

    .line 264
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Model;->enableWinograd_0(JZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 270
    iget-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Model;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 28
    iget-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    return-wide v0
.end method

.method public predict(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 234
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 235
    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Model;->predict_0(JJJ)V

    .line 236
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 237
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public setInputCrop(Z)Lorg/opencv/dnn/Model;
    .locals 3

    .line 138
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Model;->setInputCrop_0(JZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setInputMean(Lorg/opencv/core/Scalar;)Lorg/opencv/dnn/Model;
    .locals 12

    .line 110
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v4, 0x0

    aget-wide v4, v3, v4

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v6, 0x1

    aget-wide v6, v3, v6

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x2

    aget-wide v8, v3, v8

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x3

    aget-wide v10, p1, v3

    move-wide v3, v4

    move-wide v5, v6

    move-wide v7, v8

    move-wide v9, v10

    invoke-static/range {v1 .. v10}, Lorg/opencv/dnn/Model;->setInputMean_0(JDDDD)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setInputParams()V
    .locals 2

    .line 220
    iget-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Model;->setInputParams_5(J)V

    return-void
.end method

.method public setInputParams(D)V
    .locals 2

    .line 212
    iget-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/dnn/Model;->setInputParams_4(JD)V

    return-void
.end method

.method public setInputParams(DLorg/opencv/core/Size;)V
    .locals 8

    .line 203
    iget-wide v0, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Size;->width:D

    iget-wide v6, p3, Lorg/opencv/core/Size;->height:D

    move-wide v2, p1

    invoke-static/range {v0 .. v7}, Lorg/opencv/dnn/Model;->setInputParams_3(JDDD)V

    return-void
.end method

.method public setInputParams(DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;)V
    .locals 18

    move-object/from16 v0, p3

    move-object/from16 v1, p0

    move-object/from16 v2, p4

    .line 193
    iget-wide v3, v1, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v6, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v8, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x0

    aget-wide v10, v0, v5

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v12, v0, v5

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x2

    aget-wide v14, v0, v5

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v16, v0, v2

    move-wide v2, v3

    move-wide/from16 v4, p1

    invoke-static/range {v2 .. v17}, Lorg/opencv/dnn/Model;->setInputParams_2(JDDDDDDD)V

    return-void
.end method

.method public setInputParams(DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;Z)V
    .locals 19

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move-object/from16 v14, p0

    .line 182
    iget-wide v2, v14, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v6, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v8, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x0

    aget-wide v10, v0, v10

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v12, 0x1

    aget-wide v12, v0, v12

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v15, 0x2

    aget-wide v15, v0, v15

    move-wide v14, v15

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v16, v0, v1

    invoke-static/range {v2 .. v18}, Lorg/opencv/dnn/Model;->setInputParams_1(JDDDDDDDZ)V

    return-void
.end method

.method public setInputParams(DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZZ)V
    .locals 20

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move/from16 v19, p6

    move-object/from16 v14, p0

    .line 170
    iget-wide v2, v14, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v6, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v8, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x0

    aget-wide v10, v0, v10

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v12, 0x1

    aget-wide v12, v0, v12

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v15, 0x2

    aget-wide v15, v0, v15

    move-wide v14, v15

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v16, v0, v1

    invoke-static/range {v2 .. v19}, Lorg/opencv/dnn/Model;->setInputParams_0(JDDDDDDDZZ)V

    return-void
.end method

.method public setInputScale(Lorg/opencv/core/Scalar;)Lorg/opencv/dnn/Model;
    .locals 12

    .line 124
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v4, 0x0

    aget-wide v4, v3, v4

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v6, 0x1

    aget-wide v6, v3, v6

    iget-object v3, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x2

    aget-wide v8, v3, v8

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x3

    aget-wide v10, p1, v3

    move-wide v3, v4

    move-wide v5, v6

    move-wide v7, v8

    move-wide v9, v10

    invoke-static/range {v1 .. v10}, Lorg/opencv/dnn/Model;->setInputScale_0(JDDDD)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setInputSize(II)Lorg/opencv/dnn/Model;
    .locals 3

    .line 96
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/Model;->setInputSize_1(JII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setInputSize(Lorg/opencv/core/Size;)Lorg/opencv/dnn/Model;
    .locals 7

    .line 81
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v5, p1, Lorg/opencv/core/Size;->height:D

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Model;->setInputSize_0(JDD)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setInputSwapRB(Z)Lorg/opencv/dnn/Model;
    .locals 3

    .line 152
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Model;->setInputSwapRB_0(JZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setPreferableBackend(I)Lorg/opencv/dnn/Model;
    .locals 3

    .line 246
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Model;->setPreferableBackend_0(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method

.method public setPreferableTarget(I)Lorg/opencv/dnn/Model;
    .locals 3

    .line 255
    new-instance v0, Lorg/opencv/dnn/Model;

    iget-wide v1, p0, Lorg/opencv/dnn/Model;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Model;->setPreferableTarget_0(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Model;-><init>(J)V

    return-object v0
.end method
