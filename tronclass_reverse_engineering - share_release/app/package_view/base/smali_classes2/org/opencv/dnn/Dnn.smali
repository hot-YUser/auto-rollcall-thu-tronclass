.class public Lorg/opencv/dnn/Dnn;
.super Ljava/lang/Object;
.source "Dnn.java"


# static fields
.field public static final DNN_BACKEND_CANN:I = 0x8

.field public static final DNN_BACKEND_CUDA:I = 0x5

.field public static final DNN_BACKEND_DEFAULT:I = 0x0

.field public static final DNN_BACKEND_HALIDE:I = 0x1

.field public static final DNN_BACKEND_INFERENCE_ENGINE:I = 0x2

.field public static final DNN_BACKEND_OPENCV:I = 0x3

.field public static final DNN_BACKEND_TIMVX:I = 0x7

.field public static final DNN_BACKEND_VKCOM:I = 0x4

.field public static final DNN_BACKEND_WEBNN:I = 0x6

.field public static final DNN_LAYOUT_NCDHW:I = 0x3

.field public static final DNN_LAYOUT_NCHW:I = 0x2

.field public static final DNN_LAYOUT_ND:I = 0x1

.field public static final DNN_LAYOUT_NDHWC:I = 0x5

.field public static final DNN_LAYOUT_NHWC:I = 0x4

.field public static final DNN_LAYOUT_PLANAR:I = 0x6

.field public static final DNN_LAYOUT_UNKNOWN:I = 0x0

.field public static final DNN_PMODE_CROP_CENTER:I = 0x1

.field public static final DNN_PMODE_LETTERBOX:I = 0x2

.field public static final DNN_PMODE_NULL:I = 0x0

.field public static final DNN_TARGET_CPU:I = 0x0

.field public static final DNN_TARGET_CPU_FP16:I = 0xa

.field public static final DNN_TARGET_CUDA:I = 0x6

.field public static final DNN_TARGET_CUDA_FP16:I = 0x7

.field public static final DNN_TARGET_FPGA:I = 0x5

.field public static final DNN_TARGET_HDDL:I = 0x8

.field public static final DNN_TARGET_MYRIAD:I = 0x3

.field public static final DNN_TARGET_NPU:I = 0x9

.field public static final DNN_TARGET_OPENCL:I = 0x1

.field public static final DNN_TARGET_OPENCL_FP16:I = 0x2

.field public static final DNN_TARGET_VULKAN:I = 0x4

.field public static final SoftNMSMethod_SOFTNMS_GAUSSIAN:I = 0x2

.field public static final SoftNMSMethod_SOFTNMS_LINEAR:I = 0x1


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 23
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static NMSBoxes(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;)V
    .locals 8

    .line 1142
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v7}, Lorg/opencv/dnn/Dnn;->NMSBoxes_2(JJFFJ)V

    return-void
.end method

.method public static NMSBoxes(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;F)V
    .locals 9

    .line 1126
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    move v8, p5

    invoke-static/range {v0 .. v8}, Lorg/opencv/dnn/Dnn;->NMSBoxes_1(JJFFJF)V

    return-void
.end method

.method public static NMSBoxes(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;FI)V
    .locals 10

    move-object v0, p0

    .line 1109
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p4

    iget-wide v6, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    move v8, p5

    move/from16 v9, p6

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Dnn;->NMSBoxes_0(JJFFJFI)V

    return-void
.end method

.method public static NMSBoxesBatched(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfInt;FFLorg/opencv/core/MatOfInt;)V
    .locals 10

    .line 1230
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, p5, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    move v7, p4

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Dnn;->NMSBoxesBatched_2(JJJFFJ)V

    return-void
.end method

.method public static NMSBoxesBatched(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfInt;FFLorg/opencv/core/MatOfInt;F)V
    .locals 11

    move-object v0, p0

    .line 1212
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v6, p5

    iget-wide v8, v6, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    move v7, p4

    move/from16 v10, p6

    invoke-static/range {v0 .. v10}, Lorg/opencv/dnn/Dnn;->NMSBoxesBatched_1(JJJFFJF)V

    return-void
.end method

.method public static NMSBoxesBatched(Lorg/opencv/core/MatOfRect2d;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfInt;FFLorg/opencv/core/MatOfInt;FI)V
    .locals 12

    move-object v0, p0

    .line 1193
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v6, p5

    iget-wide v8, v6, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    move/from16 v7, p4

    move/from16 v10, p6

    move/from16 v11, p7

    invoke-static/range {v0 .. v11}, Lorg/opencv/dnn/Dnn;->NMSBoxesBatched_0(JJJFFJFI)V

    return-void
.end method

.method private static native NMSBoxesBatched_0(JJJFFJFI)V
.end method

.method private static native NMSBoxesBatched_1(JJJFFJF)V
.end method

.method private static native NMSBoxesBatched_2(JJJFFJ)V
.end method

.method public static NMSBoxesRotated(Lorg/opencv/core/MatOfRotatedRect;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;)V
    .locals 8

    .line 1168
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    invoke-static/range {v0 .. v7}, Lorg/opencv/dnn/Dnn;->NMSBoxesRotated_2(JJFFJ)V

    return-void
.end method

.method public static NMSBoxesRotated(Lorg/opencv/core/MatOfRotatedRect;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;F)V
    .locals 9

    .line 1161
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    move v8, p5

    invoke-static/range {v0 .. v8}, Lorg/opencv/dnn/Dnn;->NMSBoxesRotated_1(JJFFJF)V

    return-void
.end method

.method public static NMSBoxesRotated(Lorg/opencv/core/MatOfRotatedRect;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;FI)V
    .locals 10

    move-object v0, p0

    .line 1154
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p4

    iget-wide v6, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move v5, p3

    move v8, p5

    move/from16 v9, p6

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Dnn;->NMSBoxesRotated_0(JJFFJFI)V

    return-void
.end method

.method private static native NMSBoxesRotated_0(JJFFJFI)V
.end method

.method private static native NMSBoxesRotated_1(JJFFJF)V
.end method

.method private static native NMSBoxesRotated_2(JJFFJ)V
.end method

.method private static native NMSBoxes_0(JJFFJFI)V
.end method

.method private static native NMSBoxes_1(JJFFJF)V
.end method

.method private static native NMSBoxes_2(JJFFJ)V
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 3

    .line 749
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->blobFromImage_6(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;D)Lorg/opencv/core/Mat;
    .locals 3

    .line 731
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/Dnn;->blobFromImage_5(JD)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;DLorg/opencv/core/Size;)Lorg/opencv/core/Mat;
    .locals 9

    .line 712
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p3, Lorg/opencv/core/Size;->width:D

    iget-wide v7, p3, Lorg/opencv/core/Size;->height:D

    move-wide v3, p1

    invoke-static/range {v1 .. v8}, Lorg/opencv/dnn/Dnn;->blobFromImage_4(JDDD)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;)Lorg/opencv/core/Mat;
    .locals 19

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    .line 692
    new-instance v2, Lorg/opencv/core/Mat;

    move-object/from16 v3, p0

    iget-wide v3, v3, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v7, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v9, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x0

    aget-wide v11, v0, v5

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v13, v0, v5

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x2

    aget-wide v15, v0, v5

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v17, v0, v1

    move-wide/from16 v5, p1

    invoke-static/range {v3 .. v18}, Lorg/opencv/dnn/Dnn;->blobFromImage_3(JDDDDDDD)J

    move-result-wide v0

    invoke-direct {v2, v0, v1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v2
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;Z)Lorg/opencv/core/Mat;
    .locals 19

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    .line 671
    new-instance v14, Lorg/opencv/core/Mat;

    move-object/from16 v2, p0

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v18}, Lorg/opencv/dnn/Dnn;->blobFromImage_2(JDDDDDDDZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZZ)Lorg/opencv/core/Mat;
    .locals 20

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move/from16 v19, p6

    .line 649
    new-instance v14, Lorg/opencv/core/Mat;

    move-object/from16 v2, p0

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v19}, Lorg/opencv/dnn/Dnn;->blobFromImage_1(JDDDDDDDZZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImage(Lorg/opencv/core/Mat;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZZI)Lorg/opencv/core/Mat;
    .locals 21

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move/from16 v19, p6

    move/from16 v20, p7

    .line 626
    new-instance v14, Lorg/opencv/core/Mat;

    move-object/from16 v2, p0

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v20}, Lorg/opencv/dnn/Dnn;->blobFromImage_0(JDDDDDDDZZI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImageWithParams(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 3

    .line 947
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->blobFromImageWithParams_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImageWithParams(Lorg/opencv/core/Mat;Lorg/opencv/dnn/Image2BlobParams;)Lorg/opencv/core/Mat;
    .locals 3

    .line 934
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->blobFromImageWithParams_0(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImageWithParams(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 2

    .line 960
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1}, Lorg/opencv/dnn/Dnn;->blobFromImageWithParams_3(JJ)V

    return-void
.end method

.method public static blobFromImageWithParams(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;Lorg/opencv/dnn/Image2BlobParams;)V
    .locals 6

    .line 956
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Dnn;->blobFromImageWithParams_2(JJJ)V

    return-void
.end method

.method private static native blobFromImageWithParams_0(JJ)J
.end method

.method private static native blobFromImageWithParams_1(J)J
.end method

.method private static native blobFromImageWithParams_2(JJJ)V
.end method

.method private static native blobFromImageWithParams_3(JJ)V
.end method

.method private static native blobFromImage_0(JDDDDDDDZZI)J
.end method

.method private static native blobFromImage_1(JDDDDDDDZZ)J
.end method

.method private static native blobFromImage_2(JDDDDDDDZ)J
.end method

.method private static native blobFromImage_3(JDDDDDDD)J
.end method

.method private static native blobFromImage_4(JDDD)J
.end method

.method private static native blobFromImage_5(JD)J
.end method

.method private static native blobFromImage_6(J)J
.end method

.method public static blobFromImages(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    .line 914
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 915
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->blobFromImages_6(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImages(Ljava/util/List;D)Lorg/opencv/core/Mat;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    .line 894
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 895
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/Dnn;->blobFromImages_5(JD)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImages(Ljava/util/List;DLorg/opencv/core/Size;)Lorg/opencv/core/Mat;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D",
            "Lorg/opencv/core/Size;",
            ")",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    .line 873
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 874
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p3, Lorg/opencv/core/Size;->width:D

    iget-wide v7, p3, Lorg/opencv/core/Size;->height:D

    move-wide v3, p1

    invoke-static/range {v1 .. v8}, Lorg/opencv/dnn/Dnn;->blobFromImages_4(JDDD)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImages(Ljava/util/List;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;)Lorg/opencv/core/Mat;
    .locals 20
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D",
            "Lorg/opencv/core/Size;",
            "Lorg/opencv/core/Scalar;",
            ")",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    .line 851
    invoke-static/range {p0 .. p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v2

    .line 852
    new-instance v3, Lorg/opencv/core/Mat;

    iget-wide v4, v2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v10, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x0

    aget-wide v12, v0, v2

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x1

    aget-wide v14, v0, v2

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x2

    aget-wide v16, v0, v2

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v18, v0, v1

    move-wide/from16 v6, p1

    invoke-static/range {v4 .. v19}, Lorg/opencv/dnn/Dnn;->blobFromImages_3(JDDDDDDD)J

    move-result-wide v0

    invoke-direct {v3, v0, v1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v3
.end method

.method public static blobFromImages(Ljava/util/List;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;Z)Lorg/opencv/core/Mat;
    .locals 19
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D",
            "Lorg/opencv/core/Size;",
            "Lorg/opencv/core/Scalar;",
            "Z)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    .line 828
    invoke-static/range {p0 .. p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v2

    .line 829
    new-instance v14, Lorg/opencv/core/Mat;

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v18}, Lorg/opencv/dnn/Dnn;->blobFromImages_2(JDDDDDDDZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImages(Ljava/util/List;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZZ)Lorg/opencv/core/Mat;
    .locals 20
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D",
            "Lorg/opencv/core/Size;",
            "Lorg/opencv/core/Scalar;",
            "ZZ)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move/from16 v19, p6

    .line 804
    invoke-static/range {p0 .. p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v2

    .line 805
    new-instance v14, Lorg/opencv/core/Mat;

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v19}, Lorg/opencv/dnn/Dnn;->blobFromImages_1(JDDDDDDDZZ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImages(Ljava/util/List;DLorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZZI)Lorg/opencv/core/Mat;
    .locals 21
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;D",
            "Lorg/opencv/core/Size;",
            "Lorg/opencv/core/Scalar;",
            "ZZI)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    move-wide/from16 v4, p1

    move/from16 v18, p5

    move/from16 v19, p6

    move/from16 v20, p7

    .line 779
    invoke-static/range {p0 .. p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object v2

    .line 780
    new-instance v14, Lorg/opencv/core/Mat;

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

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

    move-object v0, v14

    move-wide v14, v15

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/16 v16, 0x3

    aget-wide v16, v1, v16

    invoke-static/range {v2 .. v20}, Lorg/opencv/dnn/Dnn;->blobFromImages_0(JDDDDDDDZZI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImagesWithParams(Ljava/util/List;)Lorg/opencv/core/Mat;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    .line 993
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 994
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->blobFromImagesWithParams_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImagesWithParams(Ljava/util/List;Lorg/opencv/dnn/Image2BlobParams;)Lorg/opencv/core/Mat;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/dnn/Image2BlobParams;",
            ")",
            "Lorg/opencv/core/Mat;"
        }
    .end annotation

    .line 979
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 980
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->blobFromImagesWithParams_0(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static blobFromImagesWithParams(Ljava/util/List;Lorg/opencv/core/Mat;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            ")V"
        }
    .end annotation

    .line 1008
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 1009
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p0, p1}, Lorg/opencv/dnn/Dnn;->blobFromImagesWithParams_3(JJ)V

    return-void
.end method

.method public static blobFromImagesWithParams(Ljava/util/List;Lorg/opencv/core/Mat;Lorg/opencv/dnn/Image2BlobParams;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Mat;",
            "Lorg/opencv/dnn/Image2BlobParams;",
            ")V"
        }
    .end annotation

    .line 1003
    invoke-static {p0}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p0

    .line 1004
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Dnn;->blobFromImagesWithParams_2(JJJ)V

    return-void
.end method

.method private static native blobFromImagesWithParams_0(JJ)J
.end method

.method private static native blobFromImagesWithParams_1(J)J
.end method

.method private static native blobFromImagesWithParams_2(JJJ)V
.end method

.method private static native blobFromImagesWithParams_3(JJ)V
.end method

.method private static native blobFromImages_0(JDDDDDDDZZI)J
.end method

.method private static native blobFromImages_1(JDDDDDDDZZ)J
.end method

.method private static native blobFromImages_2(JDDDDDDDZ)J
.end method

.method private static native blobFromImages_3(JDDDDDDD)J
.end method

.method private static native blobFromImages_4(JDDD)J
.end method

.method private static native blobFromImages_5(JD)J
.end method

.method private static native blobFromImages_6(J)J
.end method

.method public static getAvailableTargets(I)Ljava/util/List;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 82
    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->getAvailableTargets_0(I)Ljava/util/List;

    move-result-object p0

    return-object p0
.end method

.method private static native getAvailableTargets_0(I)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end method

.method public static getInferenceEngineBackendType()Ljava/lang/String;
    .locals 1
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 1315
    invoke-static {}, Lorg/opencv/dnn/Dnn;->getInferenceEngineBackendType_0()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private static native getInferenceEngineBackendType_0()Ljava/lang/String;
.end method

.method public static getInferenceEngineCPUType()Ljava/lang/String;
    .locals 1

    .line 1380
    invoke-static {}, Lorg/opencv/dnn/Dnn;->getInferenceEngineCPUType_0()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private static native getInferenceEngineCPUType_0()Ljava/lang/String;
.end method

.method public static getInferenceEngineVPUType()Ljava/lang/String;
    .locals 1

    .line 1365
    invoke-static {}, Lorg/opencv/dnn/Dnn;->getInferenceEngineVPUType_0()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private static native getInferenceEngineVPUType_0()Ljava/lang/String;
.end method

.method public static imagesFromBlob(Lorg/opencv/core/Mat;Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 1027
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 1028
    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/dnn/Dnn;->imagesFromBlob_0(JJ)V

    .line 1029
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 1030
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method private static native imagesFromBlob_0(JJ)V
.end method

.method public static readNet(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 446
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNet_2(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNet(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 420
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNet_1(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNet(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 393
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1, p2}, Lorg/opencv/dnn/Dnn;->readNet_0(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNet(Ljava/lang/String;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 479
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v1, v2}, Lorg/opencv/dnn/Dnn;->readNet_4(Ljava/lang/String;J)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNet(Ljava/lang/String;Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 466
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v1, v2, p1, p2}, Lorg/opencv/dnn/Dnn;->readNet_3(Ljava/lang/String;JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromCaffe(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 157
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromCaffe_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromCaffe(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 148
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromCaffe_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromCaffe(Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 184
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->readNetFromCaffe_3(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromCaffe(Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 174
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromCaffe_2(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromCaffe_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNetFromCaffe_1(Ljava/lang/String;)J
.end method

.method private static native readNetFromCaffe_2(JJ)J
.end method

.method private static native readNetFromCaffe_3(J)J
.end method

.method public static readNetFromDarknet(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 106
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromDarknet_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromDarknet(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 97
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromDarknet_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromDarknet(Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 133
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->readNetFromDarknet_3(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromDarknet(Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 123
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromDarknet_2(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromDarknet_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNetFromDarknet_1(Ljava/lang/String;)J
.end method

.method private static native readNetFromDarknet_2(JJ)J
.end method

.method private static native readNetFromDarknet_3(J)J
.end method

.method public static readNetFromModelOptimizer(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 533
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromModelOptimizer_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromModelOptimizer(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 522
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromModelOptimizer_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromModelOptimizer(Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 552
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromModelOptimizer_2(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromModelOptimizer_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNetFromModelOptimizer_1(Ljava/lang/String;)J
.end method

.method private static native readNetFromModelOptimizer_2(JJ)J
.end method

.method public static readNetFromONNX(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 566
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromONNX_0(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromONNX(Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 583
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->readNetFromONNX_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromONNX_0(Ljava/lang/String;)J
.end method

.method private static native readNetFromONNX_1(J)J
.end method

.method public static readNetFromTFLite(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 253
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromTFLite_0(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTFLite(Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 268
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->readNetFromTFLite_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromTFLite_0(Ljava/lang/String;)J
.end method

.method private static native readNetFromTFLite_1(J)J
.end method

.method public static readNetFromTensorflow(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 212
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromTensorflow_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTensorflow(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 201
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromTensorflow_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTensorflow(Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 239
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Dnn;->readNetFromTensorflow_3(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTensorflow(Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 229
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromTensorflow_2(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromTensorflow_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNetFromTensorflow_1(Ljava/lang/String;)J
.end method

.method private static native readNetFromTensorflow_2(JJ)J
.end method

.method private static native readNetFromTensorflow_3(J)J
.end method

.method public static readNetFromTorch(Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 360
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readNetFromTorch_2(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTorch(Ljava/lang/String;Z)Lorg/opencv/dnn/Net;
    .locals 1

    .line 332
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readNetFromTorch_1(Ljava/lang/String;Z)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readNetFromTorch(Ljava/lang/String;ZZ)Lorg/opencv/dnn/Net;
    .locals 1

    .line 303
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1, p2}, Lorg/opencv/dnn/Dnn;->readNetFromTorch_0(Ljava/lang/String;ZZ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readNetFromTorch_0(Ljava/lang/String;ZZ)J
.end method

.method private static native readNetFromTorch_1(Ljava/lang/String;Z)J
.end method

.method private static native readNetFromTorch_2(Ljava/lang/String;)J
.end method

.method private static native readNet_0(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNet_1(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readNet_2(Ljava/lang/String;)J
.end method

.method private static native readNet_3(Ljava/lang/String;JJ)J
.end method

.method private static native readNet_4(Ljava/lang/String;J)J
.end method

.method public static readTensorFromONNX(Ljava/lang/String;)Lorg/opencv/core/Mat;
    .locals 3

    .line 597
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readTensorFromONNX_0(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native readTensorFromONNX_0(Ljava/lang/String;)J
.end method

.method public static readTorchBlob(Ljava/lang/String;)Lorg/opencv/core/Mat;
    .locals 3

    .line 505
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->readTorchBlob_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static readTorchBlob(Ljava/lang/String;Z)Lorg/opencv/core/Mat;
    .locals 1

    .line 495
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->readTorchBlob_0(Ljava/lang/String;Z)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native readTorchBlob_0(Ljava/lang/String;Z)J
.end method

.method private static native readTorchBlob_1(Ljava/lang/String;)J
.end method

.method public static releaseHDDLPlugin()V
    .locals 0

    .line 1392
    invoke-static {}, Lorg/opencv/dnn/Dnn;->releaseHDDLPlugin_0()V

    return-void
.end method

.method private static native releaseHDDLPlugin_0()V
.end method

.method public static resetMyriadDevice()V
    .locals 0

    .line 1350
    invoke-static {}, Lorg/opencv/dnn/Dnn;->resetMyriadDevice_0()V

    return-void
.end method

.method private static native resetMyriadDevice_0()V
.end method

.method public static setInferenceEngineBackendType(Ljava/lang/String;)Ljava/lang/String;
    .locals 0
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 1335
    invoke-static {p0}, Lorg/opencv/dnn/Dnn;->setInferenceEngineBackendType_0(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static native setInferenceEngineBackendType_0(Ljava/lang/String;)Ljava/lang/String;
.end method

.method public static shrinkCaffeModel(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 1070
    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->shrinkCaffeModel_1(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static shrinkCaffeModel(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 1053
    invoke-static {p0, p1, p2}, Lorg/opencv/dnn/Dnn;->shrinkCaffeModel_0(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V

    return-void
.end method

.method private static native shrinkCaffeModel_0(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method private static native shrinkCaffeModel_1(Ljava/lang/String;Ljava/lang/String;)V
.end method

.method public static softNMSBoxes(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;)V
    .locals 10

    .line 1295
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v8, p5, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    move v7, p4

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Dnn;->softNMSBoxes_3(JJJFFJ)V

    return-void
.end method

.method public static softNMSBoxes(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;J)V
    .locals 12

    move-object v0, p0

    .line 1276
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v6, p5

    iget-wide v8, v6, Lorg/opencv/core/Mat;->nativeObj:J

    move v6, p3

    move/from16 v7, p4

    move-wide/from16 v10, p6

    invoke-static/range {v0 .. v11}, Lorg/opencv/dnn/Dnn;->softNMSBoxes_2(JJJFFJJ)V

    return-void
.end method

.method public static softNMSBoxes(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfFloat;FFLorg/opencv/core/MatOfInt;JF)V
    .locals 13

    move-object v0, p0

    .line 1256
    iget-wide v0, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    iget-wide v2, v2, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    move-object/from16 v6, p5

    iget-wide v8, v6, Lorg/opencv/core/Mat;->nativeObj:J

    move/from16 v6, p3

    move/from16 v7, p4

    move-wide/from16 v10, p6

    move/from16 v12, p8

    invoke-static/range {v0 .. v12}, Lorg/opencv/dnn/Dnn;->softNMSBoxes_0(JJJFFJJF)V

    return-void
.end method

.method private static native softNMSBoxes_0(JJJFFJJF)V
.end method

.method private static native softNMSBoxes_2(JJJFFJJ)V
.end method

.method private static native softNMSBoxes_3(JJJFFJ)V
.end method

.method public static writeTextGraph(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 1086
    invoke-static {p0, p1}, Lorg/opencv/dnn/Dnn;->writeTextGraph_0(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method private static native writeTextGraph_0(Ljava/lang/String;Ljava/lang/String;)V
.end method
