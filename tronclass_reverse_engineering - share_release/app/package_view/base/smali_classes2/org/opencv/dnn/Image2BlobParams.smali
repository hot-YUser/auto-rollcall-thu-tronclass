.class public Lorg/opencv/dnn/Image2BlobParams;
.super Ljava/lang/Object;
.source "Image2BlobParams.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 42
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 43
    invoke-static {}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;)V
    .locals 10

    .line 71
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 72
    iget-object v0, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x0

    aget-wide v2, v0, v1

    iget-object v0, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x1

    aget-wide v4, v0, v1

    iget-object v0, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x2

    aget-wide v6, v0, v1

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v0, 0x3

    aget-wide v8, p1, v0

    invoke-static/range {v2 .. v9}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_8(DDDD)J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;Lorg/opencv/core/Size;)V
    .locals 16

    move-object/from16 v0, p1

    move-object/from16 v1, p2

    .line 67
    invoke-direct/range {p0 .. p0}, Ljava/lang/Object;-><init>()V

    .line 68
    iget-object v2, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v4, v2, v3

    iget-object v2, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x1

    aget-wide v6, v2, v3

    iget-object v2, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x2

    aget-wide v8, v2, v3

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v10, v0, v2

    iget-wide v12, v1, Lorg/opencv/core/Size;->width:D

    iget-wide v14, v1, Lorg/opencv/core/Size;->height:D

    invoke-static/range {v4 .. v15}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_7(DDDDDD)J

    move-result-wide v0

    move-object/from16 v2, p0

    iput-wide v0, v2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;Lorg/opencv/core/Size;Lorg/opencv/core/Scalar;)V
    .locals 25

    move-object/from16 v0, p1

    move-object/from16 v1, p2

    move-object/from16 v2, p3

    .line 63
    invoke-direct/range {p0 .. p0}, Ljava/lang/Object;-><init>()V

    .line 64
    iget-object v3, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v4, 0x0

    aget-wide v5, v3, v4

    iget-object v3, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v19, 0x1

    aget-wide v7, v3, v19

    iget-object v3, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v21, 0x2

    aget-wide v9, v3, v21

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x3

    aget-wide v11, v0, v3

    iget-wide v13, v1, Lorg/opencv/core/Size;->width:D

    iget-wide v0, v1, Lorg/opencv/core/Size;->height:D

    move-wide v15, v0

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v17, v0, v4

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v19, v0, v19

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v21, v0, v21

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v23, v0, v3

    invoke-static/range {v5 .. v24}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_6(DDDDDDDDDD)J

    move-result-wide v0

    move-object/from16 v2, p0

    iput-wide v0, v2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;Lorg/opencv/core/Size;Lorg/opencv/core/Scalar;Z)V
    .locals 24

    move-object/from16 v0, p1

    move-object/from16 v1, p2

    move-object/from16 v2, p3

    move/from16 v23, p4

    .line 59
    invoke-direct/range {p0 .. p0}, Ljava/lang/Object;-><init>()V

    .line 60
    iget-object v3, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v15, 0x0

    aget-wide v4, v3, v15

    move-wide v3, v4

    iget-object v5, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v17, 0x1

    aget-wide v6, v5, v17

    move-wide v5, v6

    iget-object v7, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v19, 0x2

    aget-wide v8, v7, v19

    move-wide v7, v8

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v21, 0x3

    aget-wide v9, v0, v21

    iget-wide v11, v1, Lorg/opencv/core/Size;->width:D

    iget-wide v13, v1, Lorg/opencv/core/Size;->height:D

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v15, v0, v15

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v17, v0, v17

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v19, v0, v19

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v21, v0, v21

    invoke-static/range {v3 .. v23}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_5(DDDDDDDDDDZ)J

    move-result-wide v0

    move-object/from16 v2, p0

    iput-wide v0, v2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;Lorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZI)V
    .locals 25

    move-object/from16 v0, p1

    move-object/from16 v1, p2

    move-object/from16 v2, p3

    move/from16 v23, p4

    move/from16 v24, p5

    .line 55
    invoke-direct/range {p0 .. p0}, Ljava/lang/Object;-><init>()V

    .line 56
    iget-object v3, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v15, 0x0

    aget-wide v4, v3, v15

    move-wide v3, v4

    iget-object v5, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v17, 0x1

    aget-wide v6, v5, v17

    move-wide v5, v6

    iget-object v7, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v19, 0x2

    aget-wide v8, v7, v19

    move-wide v7, v8

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v21, 0x3

    aget-wide v9, v0, v21

    iget-wide v11, v1, Lorg/opencv/core/Size;->width:D

    iget-wide v13, v1, Lorg/opencv/core/Size;->height:D

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v15, v0, v15

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v17, v0, v17

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v19, v0, v19

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v21, v0, v21

    invoke-static/range {v3 .. v24}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_2(DDDDDDDDDDZI)J

    move-result-wide v0

    move-object/from16 v2, p0

    iput-wide v0, v2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Scalar;Lorg/opencv/core/Size;Lorg/opencv/core/Scalar;ZILorg/opencv/core/Scalar;)V
    .locals 34

    move-object/from16 v0, p1

    move-object/from16 v1, p2

    move-object/from16 v2, p3

    move-object/from16 v3, p6

    move/from16 v24, p4

    move/from16 v25, p5

    .line 51
    invoke-direct/range {p0 .. p0}, Ljava/lang/Object;-><init>()V

    .line 52
    iget-object v4, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v26, 0x0

    aget-wide v5, v4, v26

    move-wide v4, v5

    iget-object v6, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v28, 0x1

    aget-wide v7, v6, v28

    move-wide v6, v7

    iget-object v8, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v30, 0x2

    aget-wide v9, v8, v30

    move-wide v8, v9

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/16 v32, 0x3

    aget-wide v10, v0, v32

    iget-wide v12, v1, Lorg/opencv/core/Size;->width:D

    iget-wide v14, v1, Lorg/opencv/core/Size;->height:D

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v16, v0, v26

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v18, v0, v28

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v20, v0, v30

    iget-object v0, v2, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v22, v0, v32

    iget-object v0, v3, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v26, v0, v26

    iget-object v0, v3, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v28, v0, v28

    iget-object v0, v3, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v30, v0, v30

    iget-object v0, v3, Lorg/opencv/core/Scalar;->val:[D

    aget-wide v32, v0, v32

    invoke-static/range {v4 .. v33}, Lorg/opencv/dnn/Image2BlobParams;->Image2BlobParams_1(DDDDDDDDDDZIDDDD)J

    move-result-wide v0

    move-object/from16 v2, p0

    iput-wide v0, v2, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-void
.end method

.method private static native Image2BlobParams_0()J
.end method

.method private static native Image2BlobParams_1(DDDDDDDDDDZIDDDD)J
.end method

.method private static native Image2BlobParams_2(DDDDDDDDDDZI)J
.end method

.method private static native Image2BlobParams_5(DDDDDDDDDDZ)J
.end method

.method private static native Image2BlobParams_6(DDDDDDDDDD)J
.end method

.method private static native Image2BlobParams_7(DDDDDD)J
.end method

.method private static native Image2BlobParams_8(DDDD)J
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/Image2BlobParams;
    .locals 1

    .line 36
    new-instance v0, Lorg/opencv/dnn/Image2BlobParams;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Image2BlobParams;-><init>(J)V

    return-object v0
.end method

.method private static native blobRectToImageRect_0(JIIIIDD)[D
.end method

.method private static native blobRectsToImageRects_0(JJJDD)V
.end method

.method private static native delete(J)V
.end method

.method private static native get_borderValue_0(J)[D
.end method

.method private static native get_ddepth_0(J)I
.end method

.method private static native get_mean_0(J)[D
.end method

.method private static native get_scalefactor_0(J)[D
.end method

.method private static native get_size_0(J)[D
.end method

.method private static native get_swapRB_0(J)Z
.end method

.method private static native set_borderValue_0(JDDDD)V
.end method

.method private static native set_ddepth_0(JI)V
.end method

.method private static native set_mean_0(JDDDD)V
.end method

.method private static native set_scalefactor_0(JDDDD)V
.end method

.method private static native set_size_0(JDD)V
.end method

.method private static native set_swapRB_0(JZ)V
.end method


# virtual methods
.method public blobRectToImageRect(Lorg/opencv/core/Rect;Lorg/opencv/core/Size;)Lorg/opencv/core/Rect;
    .locals 11

    .line 87
    new-instance v0, Lorg/opencv/core/Rect;

    iget-wide v1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget v3, p1, Lorg/opencv/core/Rect;->x:I

    iget v4, p1, Lorg/opencv/core/Rect;->y:I

    iget v5, p1, Lorg/opencv/core/Rect;->width:I

    iget v6, p1, Lorg/opencv/core/Rect;->height:I

    iget-wide v7, p2, Lorg/opencv/core/Size;->width:D

    iget-wide v9, p2, Lorg/opencv/core/Size;->height:D

    invoke-static/range {v1 .. v10}, Lorg/opencv/dnn/Image2BlobParams;->blobRectToImageRect_0(JIIIIDD)[D

    move-result-object p1

    invoke-direct {v0, p1}, Lorg/opencv/core/Rect;-><init>([D)V

    return-object v0
.end method

.method public blobRectsToImageRects(Lorg/opencv/core/MatOfRect;Lorg/opencv/core/MatOfRect;Lorg/opencv/core/Size;)V
    .locals 10

    .line 104
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v6, p3, Lorg/opencv/core/Size;->width:D

    iget-wide v8, p3, Lorg/opencv/core/Size;->height:D

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Image2BlobParams;->blobRectsToImageRects_0(JJJDD)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 246
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Image2BlobParams;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 33
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    return-wide v0
.end method

.method public get_borderValue()Lorg/opencv/core/Scalar;
    .locals 3

    .line 231
    new-instance v0, Lorg/opencv/core/Scalar;

    iget-wide v1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Image2BlobParams;->get_borderValue_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Scalar;-><init>([D)V

    return-object v0
.end method

.method public get_ddepth()I
    .locals 2

    .line 185
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Image2BlobParams;->get_ddepth_0(J)I

    move-result v0

    return v0
.end method

.method public get_mean()Lorg/opencv/core/Scalar;
    .locals 3

    .line 149
    new-instance v0, Lorg/opencv/core/Scalar;

    iget-wide v1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Image2BlobParams;->get_mean_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Scalar;-><init>([D)V

    return-object v0
.end method

.method public get_scalefactor()Lorg/opencv/core/Scalar;
    .locals 3

    .line 113
    new-instance v0, Lorg/opencv/core/Scalar;

    iget-wide v1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Image2BlobParams;->get_scalefactor_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Scalar;-><init>([D)V

    return-object v0
.end method

.method public get_size()Lorg/opencv/core/Size;
    .locals 3

    .line 131
    new-instance v0, Lorg/opencv/core/Size;

    iget-wide v1, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Image2BlobParams;->get_size_0(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Size;-><init>([D)V

    return-object v0
.end method

.method public get_swapRB()Z
    .locals 2

    .line 167
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Image2BlobParams;->get_swapRB_0(J)Z

    move-result v0

    return v0
.end method

.method public set_borderValue(Lorg/opencv/core/Scalar;)V
    .locals 11

    .line 240
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v3, v2, v3

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v5, v2, v5

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v7, v2, v7

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v9, p1, v2

    move-wide v2, v3

    move-wide v4, v5

    move-wide v6, v7

    move-wide v8, v9

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Image2BlobParams;->set_borderValue_0(JDDDD)V

    return-void
.end method

.method public set_ddepth(I)V
    .locals 2

    .line 194
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Image2BlobParams;->set_ddepth_0(JI)V

    return-void
.end method

.method public set_mean(Lorg/opencv/core/Scalar;)V
    .locals 11

    .line 158
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v3, v2, v3

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v5, v2, v5

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v7, v2, v7

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v9, p1, v2

    move-wide v2, v3

    move-wide v4, v5

    move-wide v6, v7

    move-wide v8, v9

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Image2BlobParams;->set_mean_0(JDDDD)V

    return-void
.end method

.method public set_scalefactor(Lorg/opencv/core/Scalar;)V
    .locals 11

    .line 122
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v3, 0x0

    aget-wide v3, v2, v3

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v5, 0x1

    aget-wide v5, v2, v5

    iget-object v2, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v7, v2, v7

    iget-object p1, p1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x3

    aget-wide v9, p1, v2

    move-wide v2, v3

    move-wide v4, v5

    move-wide v6, v7

    move-wide v8, v9

    invoke-static/range {v0 .. v9}, Lorg/opencv/dnn/Image2BlobParams;->set_scalefactor_0(JDDDD)V

    return-void
.end method

.method public set_size(Lorg/opencv/core/Size;)V
    .locals 6

    .line 140
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v4, p1, Lorg/opencv/core/Size;->height:D

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Image2BlobParams;->set_size_0(JDD)V

    return-void
.end method

.method public set_swapRB(Z)V
    .locals 2

    .line 176
    iget-wide v0, p0, Lorg/opencv/dnn/Image2BlobParams;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Image2BlobParams;->set_swapRB_0(JZ)V

    return-void
.end method
