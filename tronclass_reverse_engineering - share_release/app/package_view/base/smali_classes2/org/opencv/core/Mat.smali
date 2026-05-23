.class public Lorg/opencv/core/Mat;
.super Ljava/lang/Object;
.source "Mat.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/opencv/core/Mat$AtableByte;,
        Lorg/opencv/core/Mat$AtableDouble;,
        Lorg/opencv/core/Mat$AtableFloat;,
        Lorg/opencv/core/Mat$AtableInteger;,
        Lorg/opencv/core/Mat$AtableShort;,
        Lorg/opencv/core/Mat$AtableBase;,
        Lorg/opencv/core/Mat$Atable;,
        Lorg/opencv/core/Mat$Tuple4;,
        Lorg/opencv/core/Mat$Tuple3;,
        Lorg/opencv/core/Mat$Tuple2;
    }
.end annotation


# instance fields
.field public final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 23
    invoke-static {}, Lorg/opencv/core/Mat;->n_Mat()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(III)V
    .locals 0

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 32
    invoke-static {p1, p2, p3}, Lorg/opencv/core/Mat;->n_Mat(III)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(IIILjava/nio/ByteBuffer;)V
    .locals 0

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 41
    invoke-static {p1, p2, p3, p4}, Lorg/opencv/core/Mat;->n_Mat(IIILjava/nio/ByteBuffer;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(IIILjava/nio/ByteBuffer;J)V
    .locals 0

    .line 49
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 50
    invoke-static/range {p1 .. p6}, Lorg/opencv/core/Mat;->n_Mat(IIILjava/nio/ByteBuffer;J)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(IIILorg/opencv/core/Scalar;)V
    .locals 14

    move-object/from16 v0, p4

    .line 76
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 77
    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x0

    aget-wide v6, v1, v2

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x1

    aget-wide v8, v1, v2

    iget-object v1, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x2

    aget-wide v10, v1, v2

    iget-object v0, v0, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v12, v0, v1

    move v3, p1

    move/from16 v4, p2

    move/from16 v5, p3

    invoke-static/range {v3 .. v13}, Lorg/opencv/core/Mat;->n_Mat(IIIDDDD)J

    move-result-wide v0

    move-object v2, p0

    iput-wide v0, v2, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(J)V
    .locals 2

    .line 11
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const-wide/16 v0, 0x0

    cmp-long v0, p1, v0

    if-eqz v0, :cond_0

    .line 14
    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void

    .line 13
    :cond_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    const-string p2, "Native object address is NULL"

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Range;)V
    .locals 2

    .line 108
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 109
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget p1, p2, Lorg/opencv/core/Range;->start:I

    iget p2, p2, Lorg/opencv/core/Range;->end:I

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/core/Mat;->n_Mat(JII)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Range;Lorg/opencv/core/Range;)V
    .locals 6

    .line 103
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 104
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget v2, p2, Lorg/opencv/core/Range;->start:I

    iget v3, p2, Lorg/opencv/core/Range;->end:I

    iget v4, p3, Lorg/opencv/core/Range;->start:I

    iget v5, p3, Lorg/opencv/core/Range;->end:I

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->n_Mat(JIIII)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;Lorg/opencv/core/Rect;)V
    .locals 6

    .line 126
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 127
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget v2, p2, Lorg/opencv/core/Rect;->y:I

    iget p1, p2, Lorg/opencv/core/Rect;->y:I

    iget v3, p2, Lorg/opencv/core/Rect;->height:I

    add-int/2addr v3, p1

    iget v4, p2, Lorg/opencv/core/Rect;->x:I

    iget p1, p2, Lorg/opencv/core/Rect;->x:I

    iget p2, p2, Lorg/opencv/core/Rect;->width:I

    add-int v5, p1, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->n_Mat(JIIII)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;[Lorg/opencv/core/Range;)V
    .locals 2

    .line 117
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 118
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p2}, Lorg/opencv/core/Mat;->n_Mat(J[Lorg/opencv/core/Range;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;I)V
    .locals 4

    .line 58
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 59
    iget-wide v0, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v2, p1, Lorg/opencv/core/Size;->height:D

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/core/Mat;->n_Mat(DDI)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Size;ILorg/opencv/core/Scalar;)V
    .locals 14

    move-object v0, p1

    move-object/from16 v1, p3

    .line 85
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 86
    iget-wide v2, v0, Lorg/opencv/core/Size;->width:D

    iget-wide v4, v0, Lorg/opencv/core/Size;->height:D

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v6, 0x0

    aget-wide v6, v0, v6

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v8, 0x1

    aget-wide v8, v0, v8

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v10, 0x2

    aget-wide v10, v0, v10

    iget-object v0, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v12, v0, v1

    move-wide v0, v2

    move-wide v2, v4

    move/from16 v4, p2

    move-wide v5, v6

    move-wide v7, v8

    move-wide v9, v10

    move-wide v11, v12

    invoke-static/range {v0 .. v12}, Lorg/opencv/core/Mat;->n_Mat(DDIDDDD)J

    move-result-wide v0

    move-object v2, p0

    iput-wide v0, v2, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>([II)V
    .locals 1

    .line 67
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 68
    array-length v0, p1

    invoke-static {v0, p1, p2}, Lorg/opencv/core/Mat;->n_Mat(I[II)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public constructor <init>([IILorg/opencv/core/Scalar;)V
    .locals 11

    .line 94
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 95
    array-length v0, p1

    iget-object v1, p3, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x0

    aget-wide v3, v1, v2

    iget-object v1, p3, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x1

    aget-wide v5, v1, v2

    iget-object v1, p3, Lorg/opencv/core/Scalar;->val:[D

    const/4 v2, 0x2

    aget-wide v7, v1, v2

    iget-object p3, p3, Lorg/opencv/core/Scalar;->val:[D

    const/4 v1, 0x3

    aget-wide v9, p3, v1

    move-object v1, p1

    move v2, p2

    invoke-static/range {v0 .. v10}, Lorg/opencv/core/Mat;->n_Mat(I[IIDDDD)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-void
.end method

.method public static diag(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 3

    .line 357
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/core/Mat;->n_diag(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static eye(III)Lorg/opencv/core/Mat;
    .locals 1

    .line 402
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0, p1, p2}, Lorg/opencv/core/Mat;->n_eye(III)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static eye(Lorg/opencv/core/Size;I)Lorg/opencv/core/Mat;
    .locals 5

    .line 411
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Size;->width:D

    iget-wide v3, p0, Lorg/opencv/core/Size;->height:D

    invoke-static {v1, v2, v3, v4, p1}, Lorg/opencv/core/Mat;->n_eye(DDI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native locateROI_0(J[D[D)V
.end method

.method private static native nDump(J)Ljava/lang/String;
.end method

.method private static native nGet(JII)[D
.end method

.method private static native nGetB(JIII[B)I
.end method

.method private static native nGetBIdx(J[II[B)I
.end method

.method private static native nGetD(JIII[D)I
.end method

.method private static native nGetDIdx(J[II[D)I
.end method

.method private static native nGetF(JIII[F)I
.end method

.method private static native nGetFIdx(J[II[F)I
.end method

.method private static native nGetI(JIII[I)I
.end method

.method private static native nGetIIdx(J[II[I)I
.end method

.method private static native nGetIdx(J[I)[D
.end method

.method private static native nGetS(JIII[S)I
.end method

.method private static native nGetSIdx(J[II[S)I
.end method

.method private static native nPutB(JIII[B)I
.end method

.method private static native nPutBIdx(J[II[B)I
.end method

.method private static native nPutBwIdxOffset(J[III[B)I
.end method

.method private static native nPutBwOffset(JIIII[B)I
.end method

.method private static native nPutD(JIII[D)I
.end method

.method private static native nPutDIdx(J[II[D)I
.end method

.method private static native nPutF(JIII[F)I
.end method

.method private static native nPutFIdx(J[II[F)I
.end method

.method private static native nPutI(JIII[I)I
.end method

.method private static native nPutIIdx(J[II[I)I
.end method

.method private static native nPutS(JIII[S)I
.end method

.method private static native nPutSIdx(J[II[S)I
.end method

.method private static native n_Mat()J
.end method

.method private static native n_Mat(DDI)J
.end method

.method private static native n_Mat(DDIDDDD)J
.end method

.method private static native n_Mat(III)J
.end method

.method private static native n_Mat(IIIDDDD)J
.end method

.method private static native n_Mat(IIILjava/nio/ByteBuffer;)J
.end method

.method private static native n_Mat(IIILjava/nio/ByteBuffer;J)J
.end method

.method private static native n_Mat(I[II)J
.end method

.method private static native n_Mat(I[IIDDDD)J
.end method

.method private static native n_Mat(JII)J
.end method

.method private static native n_Mat(JIIII)J
.end method

.method private static native n_Mat(J[Lorg/opencv/core/Range;)J
.end method

.method private static native n_adjustROI(JIIII)J
.end method

.method private static native n_assignTo(JJ)V
.end method

.method private static native n_assignTo(JJI)V
.end method

.method private static native n_channels(J)I
.end method

.method private static native n_checkVector(JI)I
.end method

.method private static native n_checkVector(JII)I
.end method

.method private static native n_checkVector(JIIZ)I
.end method

.method private static native n_clone(J)J
.end method

.method private static native n_col(JI)J
.end method

.method private static native n_colRange(JII)J
.end method

.method private static native n_cols(J)I
.end method

.method private static native n_convertTo(JJI)V
.end method

.method private static native n_convertTo(JJID)V
.end method

.method private static native n_convertTo(JJIDD)V
.end method

.method private static native n_copySize(JJ)V
.end method

.method private static native n_copyTo(JJ)V
.end method

.method private static native n_copyTo(JJJ)V
.end method

.method private static native n_create(JDDI)V
.end method

.method private static native n_create(JIII)V
.end method

.method private static native n_create(JI[II)V
.end method

.method private static native n_cross(JJ)J
.end method

.method private static native n_dataAddr(J)J
.end method

.method private static native n_delete(J)V
.end method

.method private static native n_depth(J)I
.end method

.method private static native n_diag(J)J
.end method

.method private static native n_diag(JI)J
.end method

.method private static native n_dims(J)I
.end method

.method private static native n_dot(JJ)D
.end method

.method private static native n_elemSize(J)J
.end method

.method private static native n_elemSize1(J)J
.end method

.method private static native n_empty(J)Z
.end method

.method private static native n_eye(DDI)J
.end method

.method private static native n_eye(III)J
.end method

.method private static native n_inv(J)J
.end method

.method private static native n_inv(JI)J
.end method

.method private static native n_isContinuous(J)Z
.end method

.method private static native n_isSubmatrix(J)Z
.end method

.method private static native n_matMul(JJ)J
.end method

.method private static native n_mul(JJ)J
.end method

.method private static native n_mul(JJD)J
.end method

.method private static native n_ones(DDI)J
.end method

.method private static native n_ones(III)J
.end method

.method private static native n_ones(I[II)J
.end method

.method private static native n_push_back(JJ)V
.end method

.method private static native n_release(J)V
.end method

.method private static native n_reshape(JI)J
.end method

.method private static native n_reshape(JII)J
.end method

.method private static native n_reshape_1(JII[I)J
.end method

.method private static native n_row(JI)J
.end method

.method private static native n_rowRange(JII)J
.end method

.method private static native n_rows(J)I
.end method

.method private static native n_setTo(JDDDD)J
.end method

.method private static native n_setTo(JDDDDJ)J
.end method

.method private static native n_setTo(JJ)J
.end method

.method private static native n_setTo(JJJ)J
.end method

.method private static native n_size(J)[D
.end method

.method private static native n_size_i(JI)I
.end method

.method private static native n_step1(J)J
.end method

.method private static native n_step1(JI)J
.end method

.method private static native n_submat(JIIII)J
.end method

.method private static native n_submat_ranges(J[Lorg/opencv/core/Range;)J
.end method

.method private static native n_submat_rr(JIIII)J
.end method

.method private static native n_t(J)J
.end method

.method private static native n_total(J)J
.end method

.method private static native n_type(J)I
.end method

.method private static native n_zeros(DDI)J
.end method

.method private static native n_zeros(III)J
.end method

.method private static native n_zeros(I[II)J
.end method

.method public static ones(III)Lorg/opencv/core/Mat;
    .locals 1

    .line 504
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0, p1, p2}, Lorg/opencv/core/Mat;->n_ones(III)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static ones(Lorg/opencv/core/Size;I)Lorg/opencv/core/Mat;
    .locals 5

    .line 513
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Size;->width:D

    iget-wide v3, p0, Lorg/opencv/core/Size;->height:D

    invoke-static {v1, v2, v3, v4, p1}, Lorg/opencv/core/Mat;->n_ones(DDI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static ones([II)Lorg/opencv/core/Mat;
    .locals 2

    .line 522
    new-instance v0, Lorg/opencv/core/Mat;

    array-length v1, p0

    invoke-static {v1, p0, p1}, Lorg/opencv/core/Mat;->n_ones(I[II)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static zeros(III)Lorg/opencv/core/Mat;
    .locals 1

    .line 736
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0, p1, p2}, Lorg/opencv/core/Mat;->n_zeros(III)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static zeros(Lorg/opencv/core/Size;I)Lorg/opencv/core/Mat;
    .locals 5

    .line 745
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Size;->width:D

    iget-wide v3, p0, Lorg/opencv/core/Size;->height:D

    invoke-static {v1, v2, v3, v4, p1}, Lorg/opencv/core/Mat;->n_zeros(DDI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static zeros([II)Lorg/opencv/core/Mat;
    .locals 2

    .line 754
    new-instance v0, Lorg/opencv/core/Mat;

    array-length v1, p0

    invoke-static {v1, p0, p1}, Lorg/opencv/core/Mat;->n_zeros(I[II)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method


# virtual methods
.method public adjustROI(IIII)Lorg/opencv/core/Mat;
    .locals 7

    .line 136
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    move v3, p1

    move v4, p2

    move v5, p3

    move v6, p4

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_adjustROI(JIIII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public assignTo(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 150
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/core/Mat;->n_assignTo(JJ)V

    return-void
.end method

.method public assignTo(Lorg/opencv/core/Mat;I)V
    .locals 4

    .line 145
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/core/Mat;->n_assignTo(JJI)V

    return-void
.end method

.method public at(Ljava/lang/Class;II)Lorg/opencv/core/Mat$Atable;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/Class<",
            "TT;>;II)",
            "Lorg/opencv/core/Mat$Atable<",
            "TT;>;"
        }
    .end annotation

    .line 1153
    const-class v0, Ljava/lang/Byte;

    if-eq p1, v0, :cond_9

    sget-object v0, Ljava/lang/Byte;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_0

    goto :goto_4

    .line 1155
    :cond_0
    const-class v0, Ljava/lang/Double;

    if-eq p1, v0, :cond_8

    sget-object v0, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_1

    goto :goto_3

    .line 1157
    :cond_1
    const-class v0, Ljava/lang/Float;

    if-eq p1, v0, :cond_7

    sget-object v0, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_2

    goto :goto_2

    .line 1159
    :cond_2
    const-class v0, Ljava/lang/Integer;

    if-eq p1, v0, :cond_6

    sget-object v0, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_3

    goto :goto_1

    .line 1161
    :cond_3
    const-class v0, Ljava/lang/Short;

    if-eq p1, v0, :cond_5

    sget-object v0, Ljava/lang/Short;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_4

    goto :goto_0

    .line 1164
    :cond_4
    new-instance p1, Ljava/lang/RuntimeException;

    const-string p2, "Unsupported class type"

    invoke-direct {p1, p2}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1162
    :cond_5
    :goto_0
    new-instance p1, Lorg/opencv/core/Mat$AtableShort;

    invoke-direct {p1, p0, p2, p3}, Lorg/opencv/core/Mat$AtableShort;-><init>(Lorg/opencv/core/Mat;II)V

    return-object p1

    .line 1160
    :cond_6
    :goto_1
    new-instance p1, Lorg/opencv/core/Mat$AtableInteger;

    invoke-direct {p1, p0, p2, p3}, Lorg/opencv/core/Mat$AtableInteger;-><init>(Lorg/opencv/core/Mat;II)V

    return-object p1

    .line 1158
    :cond_7
    :goto_2
    new-instance p1, Lorg/opencv/core/Mat$AtableFloat;

    invoke-direct {p1, p0, p2, p3}, Lorg/opencv/core/Mat$AtableFloat;-><init>(Lorg/opencv/core/Mat;II)V

    return-object p1

    .line 1156
    :cond_8
    :goto_3
    new-instance p1, Lorg/opencv/core/Mat$AtableDouble;

    invoke-direct {p1, p0, p2, p3}, Lorg/opencv/core/Mat$AtableDouble;-><init>(Lorg/opencv/core/Mat;II)V

    return-object p1

    .line 1154
    :cond_9
    :goto_4
    new-instance p1, Lorg/opencv/core/Mat$AtableByte;

    invoke-direct {p1, p0, p2, p3}, Lorg/opencv/core/Mat$AtableByte;-><init>(Lorg/opencv/core/Mat;II)V

    return-object p1
.end method

.method public at(Ljava/lang/Class;[I)Lorg/opencv/core/Mat$Atable;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/Class<",
            "TT;>;[I)",
            "Lorg/opencv/core/Mat$Atable<",
            "TT;>;"
        }
    .end annotation

    .line 1171
    const-class v0, Ljava/lang/Byte;

    if-eq p1, v0, :cond_9

    sget-object v0, Ljava/lang/Byte;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_0

    goto :goto_4

    .line 1173
    :cond_0
    const-class v0, Ljava/lang/Double;

    if-eq p1, v0, :cond_8

    sget-object v0, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_1

    goto :goto_3

    .line 1175
    :cond_1
    const-class v0, Ljava/lang/Float;

    if-eq p1, v0, :cond_7

    sget-object v0, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_2

    goto :goto_2

    .line 1177
    :cond_2
    const-class v0, Ljava/lang/Integer;

    if-eq p1, v0, :cond_6

    sget-object v0, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_3

    goto :goto_1

    .line 1179
    :cond_3
    const-class v0, Ljava/lang/Short;

    if-eq p1, v0, :cond_5

    sget-object v0, Ljava/lang/Short;->TYPE:Ljava/lang/Class;

    if-ne p1, v0, :cond_4

    goto :goto_0

    .line 1182
    :cond_4
    new-instance p1, Ljava/lang/RuntimeException;

    const-string p2, "Unsupported class parameter"

    invoke-direct {p1, p2}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1180
    :cond_5
    :goto_0
    new-instance p1, Lorg/opencv/core/Mat$AtableShort;

    invoke-direct {p1, p0, p2}, Lorg/opencv/core/Mat$AtableShort;-><init>(Lorg/opencv/core/Mat;[I)V

    return-object p1

    .line 1178
    :cond_6
    :goto_1
    new-instance p1, Lorg/opencv/core/Mat$AtableInteger;

    invoke-direct {p1, p0, p2}, Lorg/opencv/core/Mat$AtableInteger;-><init>(Lorg/opencv/core/Mat;[I)V

    return-object p1

    .line 1176
    :cond_7
    :goto_2
    new-instance p1, Lorg/opencv/core/Mat$AtableFloat;

    invoke-direct {p1, p0, p2}, Lorg/opencv/core/Mat$AtableFloat;-><init>(Lorg/opencv/core/Mat;[I)V

    return-object p1

    .line 1174
    :cond_8
    :goto_3
    new-instance p1, Lorg/opencv/core/Mat$AtableDouble;

    invoke-direct {p1, p0, p2}, Lorg/opencv/core/Mat$AtableDouble;-><init>(Lorg/opencv/core/Mat;[I)V

    return-object p1

    .line 1172
    :cond_9
    :goto_4
    new-instance p1, Lorg/opencv/core/Mat$AtableByte;

    invoke-direct {p1, p0, p2}, Lorg/opencv/core/Mat$AtableByte;-><init>(Lorg/opencv/core/Mat;[I)V

    return-object p1
.end method

.method public channels()I
    .locals 2

    .line 159
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_channels(J)I

    move-result v0

    return v0
.end method

.method public checkVector(I)I
    .locals 2

    .line 179
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/core/Mat;->n_checkVector(JI)I

    move-result p1

    return p1
.end method

.method public checkVector(II)I
    .locals 2

    .line 174
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/core/Mat;->n_checkVector(JII)I

    move-result p1

    return p1
.end method

.method public checkVector(IIZ)I
    .locals 2

    .line 169
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, p2, p3}, Lorg/opencv/core/Mat;->n_checkVector(JIIZ)I

    move-result p1

    return p1
.end method

.method public bridge synthetic clone()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/CloneNotSupportedException;
        }
    .end annotation

    .line 7
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->clone()Lorg/opencv/core/Mat;

    move-result-object v0

    return-object v0
.end method

.method public clone()Lorg/opencv/core/Mat;
    .locals 3

    .line 188
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/core/Mat;->n_clone(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public col(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 197
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_col(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public colRange(II)Lorg/opencv/core/Mat;
    .locals 3

    .line 206
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/core/Mat;->n_colRange(JII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public colRange(Lorg/opencv/core/Range;)Lorg/opencv/core/Mat;
    .locals 4

    .line 215
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget v3, p1, Lorg/opencv/core/Range;->start:I

    iget p1, p1, Lorg/opencv/core/Range;->end:I

    invoke-static {v1, v2, v3, p1}, Lorg/opencv/core/Mat;->n_colRange(JII)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public cols()I
    .locals 2

    .line 233
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_cols(J)I

    move-result v0

    return v0
.end method

.method public convertTo(Lorg/opencv/core/Mat;I)V
    .locals 4

    .line 253
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/core/Mat;->n_convertTo(JJI)V

    return-void
.end method

.method public convertTo(Lorg/opencv/core/Mat;ID)V
    .locals 7

    .line 248
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move-wide v5, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/core/Mat;->n_convertTo(JJID)V

    return-void
.end method

.method public convertTo(Lorg/opencv/core/Mat;IDD)V
    .locals 9

    .line 243
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v4, p2

    move-wide v5, p3

    move-wide v7, p5

    invoke-static/range {v0 .. v8}, Lorg/opencv/core/Mat;->n_convertTo(JJIDD)V

    return-void
.end method

.method public copySize(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 307
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/core/Mat;->n_copySize(JJ)V

    return-void
.end method

.method public copyTo(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 262
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/core/Mat;->n_copyTo(JJ)V

    return-void
.end method

.method public copyTo(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V
    .locals 6

    .line 271
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->n_copyTo(JJJ)V

    return-void
.end method

.method public create(III)V
    .locals 2

    .line 280
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, p2, p3}, Lorg/opencv/core/Mat;->n_create(JIII)V

    return-void
.end method

.method public create(Lorg/opencv/core/Size;I)V
    .locals 7

    .line 289
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Size;->width:D

    iget-wide v4, p1, Lorg/opencv/core/Size;->height:D

    move v6, p2

    invoke-static/range {v0 .. v6}, Lorg/opencv/core/Mat;->n_create(JDDI)V

    return-void
.end method

.method public create([II)V
    .locals 3

    .line 298
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p1

    invoke-static {v0, v1, v2, p1, p2}, Lorg/opencv/core/Mat;->n_create(JI[II)V

    return-void
.end method

.method public cross(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 5

    .line 316
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/core/Mat;->n_cross(JJ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public dataAddr()J
    .locals 2

    .line 325
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_dataAddr(J)J

    move-result-wide v0

    return-wide v0
.end method

.method public depth()I
    .locals 2

    .line 334
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_depth(J)I

    move-result v0

    return v0
.end method

.method public diag()Lorg/opencv/core/Mat;
    .locals 4

    .line 348
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    const/4 v3, 0x0

    invoke-static {v1, v2, v3}, Lorg/opencv/core/Mat;->n_diag(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public diag(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 343
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_diag(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public dims()I
    .locals 2

    .line 224
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_dims(J)I

    move-result v0

    return v0
.end method

.method public dot(Lorg/opencv/core/Mat;)D
    .locals 4

    .line 366
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/core/Mat;->n_dot(JJ)D

    move-result-wide v0

    return-wide v0
.end method

.method public dump()Ljava/lang/String;
    .locals 2

    .line 779
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->nDump(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public elemSize()J
    .locals 2

    .line 375
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_elemSize(J)J

    move-result-wide v0

    return-wide v0
.end method

.method public elemSize1()J
    .locals 2

    .line 384
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_elemSize1(J)J

    move-result-wide v0

    return-wide v0
.end method

.method public empty()Z
    .locals 2

    .line 393
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_empty(J)Z

    move-result v0

    return v0
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 759
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_delete(J)V

    .line 760
    invoke-super {p0}, Ljava/lang/Object;->finalize()V

    return-void
.end method

.method public get(II[B)I
    .locals 6

    .line 970
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_3

    .line 971
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 977
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 980
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 978
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v4, p3

    move v2, p1

    move v3, p2

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->nGetB(JIII[B)I

    move-result p1

    return p1

    .line 972
    :cond_3
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_4

    const/4 p3, 0x0

    goto :goto_2

    .line 974
    :cond_4
    array-length p3, p3

    :goto_2
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 976
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get(II[D)I
    .locals 9

    .line 1098
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_2

    .line 1099
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1105
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x6

    if-ne v1, v2, :cond_1

    .line 1106
    iget-wide v3, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v7, p3

    move v5, p1

    move v6, p2

    move-object v8, p3

    invoke-static/range {v3 .. v8}, Lorg/opencv/core/Mat;->nGetD(JIII[D)I

    move-result p1

    return p1

    .line 1108
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1100
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_3

    const/4 p3, 0x0

    goto :goto_1

    .line 1102
    :cond_3
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1104
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get(II[F)I
    .locals 9

    .line 1066
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_2

    .line 1067
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1073
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x5

    if-ne v1, v2, :cond_1

    .line 1074
    iget-wide v3, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v7, p3

    move v5, p1

    move v6, p2

    move-object v8, p3

    invoke-static/range {v3 .. v8}, Lorg/opencv/core/Mat;->nGetF(JIII[F)I

    move-result p1

    return p1

    .line 1076
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1068
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_3

    const/4 p3, 0x0

    goto :goto_1

    .line 1070
    :cond_3
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1072
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get(II[I)I
    .locals 9

    .line 1034
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_2

    .line 1035
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1041
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x4

    if-ne v1, v2, :cond_1

    .line 1042
    iget-wide v3, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v7, p3

    move v5, p1

    move v6, p2

    move-object v8, p3

    invoke-static/range {v3 .. v8}, Lorg/opencv/core/Mat;->nGetI(JIII[I)I

    move-result p1

    return p1

    .line 1044
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1036
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_3

    const/4 p3, 0x0

    goto :goto_1

    .line 1038
    :cond_3
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1040
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get(II[S)I
    .locals 6

    .line 1002
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_3

    .line 1003
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 1009
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x2

    if-eq v1, v2, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x3

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 1012
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1010
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v4, p3

    move v2, p1

    move v3, p2

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->nGetS(JIII[S)I

    move-result p1

    return p1

    .line 1004
    :cond_3
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_4

    const/4 p3, 0x0

    goto :goto_2

    .line 1006
    :cond_4
    array-length p3, p3

    :goto_2
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1008
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get([I[B)I
    .locals 3

    .line 985
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_4

    .line 986
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 992
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_3

    .line 994
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 997
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 995
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nGetBIdx(J[II[B)I

    move-result p1

    return p1

    .line 993
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 987
    :cond_4
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_5

    const/4 p2, 0x0

    goto :goto_2

    .line 989
    :cond_5
    array-length p2, p2

    :goto_2
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 991
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get([I[D)I
    .locals 3

    .line 1113
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_3

    .line 1114
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1120
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_2

    .line 1122
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x6

    if-ne v1, v2, :cond_1

    .line 1123
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nGetDIdx(J[II[D)I

    move-result p1

    return p1

    .line 1125
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1121
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1115
    :cond_3
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_4

    const/4 p2, 0x0

    goto :goto_1

    .line 1117
    :cond_4
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1119
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get([I[F)I
    .locals 3

    .line 1081
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_3

    .line 1082
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1088
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_2

    .line 1090
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x5

    if-ne v1, v2, :cond_1

    .line 1091
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nGetFIdx(J[II[F)I

    move-result p1

    return p1

    .line 1093
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1089
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1083
    :cond_3
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_4

    const/4 p2, 0x0

    goto :goto_1

    .line 1085
    :cond_4
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1087
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get([I[I)I
    .locals 3

    .line 1049
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_3

    .line 1050
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 1056
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_2

    .line 1058
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x4

    if-ne v1, v2, :cond_1

    .line 1059
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nGetIIdx(J[II[I)I

    move-result p1

    return p1

    .line 1061
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1057
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1051
    :cond_3
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_4

    const/4 p2, 0x0

    goto :goto_1

    .line 1053
    :cond_4
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1055
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get([I[S)I
    .locals 3

    .line 1017
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_4

    .line 1018
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 1024
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_3

    .line 1026
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x2

    if-eq v1, v2, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x3

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 1029
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1027
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nGetSIdx(J[II[S)I

    move-result p1

    return p1

    .line 1025
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 1019
    :cond_4
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_5

    const/4 p2, 0x0

    goto :goto_2

    .line 1021
    :cond_5
    array-length p2, p2

    :goto_2
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 1023
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public get(II)[D
    .locals 2

    .line 1130
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/core/Mat;->nGet(JII)[D

    move-result-object p1

    return-object p1
.end method

.method public get([I)[D
    .locals 2

    .line 1135
    array-length v0, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v1

    if-ne v0, v1, :cond_0

    .line 1137
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/core/Mat;->nGetIdx(J[I)[D

    move-result-object p1

    return-object p1

    .line 1136
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Incorrect number of indices"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 1604
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    return-wide v0
.end method

.method public height()I
    .locals 1

    .line 1142
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->rows()I

    move-result v0

    return v0
.end method

.method public inv()Lorg/opencv/core/Mat;
    .locals 3

    .line 425
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/core/Mat;->n_inv(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public inv(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 420
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_inv(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public isContinuous()Z
    .locals 2

    .line 434
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_isContinuous(J)Z

    move-result v0

    return v0
.end method

.method public isSubmatrix()Z
    .locals 2

    .line 443
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_isSubmatrix(J)Z

    move-result v0

    return v0
.end method

.method public locateROI(Lorg/opencv/core/Size;Lorg/opencv/core/Point;)V
    .locals 6

    const/4 v0, 0x2

    .line 452
    new-array v1, v0, [D

    .line 453
    new-array v0, v0, [D

    .line 454
    iget-wide v2, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v2, v3, v1, v0}, Lorg/opencv/core/Mat;->locateROI_0(J[D[D)V

    const/4 v2, 0x1

    const/4 v3, 0x0

    if-eqz p1, :cond_0

    .line 456
    aget-wide v4, v1, v3

    iput-wide v4, p1, Lorg/opencv/core/Size;->width:D

    .line 457
    aget-wide v4, v1, v2

    iput-wide v4, p1, Lorg/opencv/core/Size;->height:D

    :cond_0
    if-eqz p2, :cond_1

    .line 460
    aget-wide v3, v0, v3

    iput-wide v3, p2, Lorg/opencv/core/Point;->x:D

    .line 461
    aget-wide v1, v0, v2

    iput-wide v1, p2, Lorg/opencv/core/Point;->y:D

    :cond_1
    return-void
.end method

.method public matMul(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 5

    .line 495
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/core/Mat;->n_matMul(JJ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public mul(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 5

    .line 485
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/core/Mat;->n_mul(JJ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public mul(Lorg/opencv/core/Mat;D)Lorg/opencv/core/Mat;
    .locals 7

    .line 476
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide v5, p2

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_mul(JJD)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public push_back(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 531
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/core/Mat;->n_push_back(JJ)V

    return-void
.end method

.method public put(II[B)I
    .locals 6

    .line 906
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_3

    .line 907
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 913
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 916
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 914
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v4, p3

    move v2, p1

    move v3, p2

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->nPutB(JIII[B)I

    move-result p1

    return p1

    .line 908
    :cond_3
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_4

    const/4 p3, 0x0

    goto :goto_2

    .line 910
    :cond_4
    array-length p3, p3

    :goto_2
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 912
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put(II[BII)I
    .locals 7

    .line 938
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_3

    .line 939
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v1

    rem-int v1, p5, v1

    if-eqz v1, :cond_0

    goto :goto_1

    .line 945
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 948
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 946
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    move v4, p5

    move v5, p4

    move-object v6, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/core/Mat;->nPutBwOffset(JIIII[B)I

    move-result p1

    return p1

    .line 940
    :cond_3
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p4, "Provided data element number ("

    invoke-direct {p2, p4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_4

    const/4 p3, 0x0

    goto :goto_2

    .line 942
    :cond_4
    array-length p3, p3

    :goto_2
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 944
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public varargs put(II[D)I
    .locals 8

    .line 784
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_1

    .line 785
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 791
    :cond_0
    iget-wide v2, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v6, p3

    move v4, p1

    move v5, p2

    move-object v7, p3

    invoke-static/range {v2 .. v7}, Lorg/opencv/core/Mat;->nPutD(JIII[D)I

    move-result p1

    return p1

    .line 786
    :cond_1
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_2

    const/4 p3, 0x0

    goto :goto_1

    .line 788
    :cond_2
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 790
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put(II[F)I
    .locals 9

    .line 810
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_2

    .line 811
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 817
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x5

    if-ne v1, v2, :cond_1

    .line 818
    iget-wide v3, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v7, p3

    move v5, p1

    move v6, p2

    move-object v8, p3

    invoke-static/range {v3 .. v8}, Lorg/opencv/core/Mat;->nPutF(JIII[F)I

    move-result p1

    return p1

    .line 820
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 812
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_3

    const/4 p3, 0x0

    goto :goto_1

    .line 814
    :cond_3
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 816
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put(II[I)I
    .locals 9

    .line 842
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_2

    .line 843
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 849
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x4

    if-ne v1, v2, :cond_1

    .line 850
    iget-wide v3, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v7, p3

    move v5, p1

    move v6, p2

    move-object v8, p3

    invoke-static/range {v3 .. v8}, Lorg/opencv/core/Mat;->nPutI(JIII[I)I

    move-result p1

    return p1

    .line 852
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 844
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_3

    const/4 p3, 0x0

    goto :goto_1

    .line 846
    :cond_3
    array-length p3, p3

    :goto_1
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 848
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put(II[S)I
    .locals 6

    .line 874
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p3, :cond_3

    .line 875
    array-length v1, p3

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 881
    :cond_0
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x2

    if-eq v1, v2, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x3

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 884
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 882
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v4, p3

    move v2, p1

    move v3, p2

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->nPutS(JIII[S)I

    move-result p1

    return p1

    .line 876
    :cond_3
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Provided data element number ("

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p3, :cond_4

    const/4 p3, 0x0

    goto :goto_2

    .line 878
    :cond_4
    array-length p3, p3

    :goto_2
    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 880
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put([I[B)I
    .locals 3

    .line 921
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_4

    .line 922
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 928
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_3

    .line 930
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 933
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 931
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nPutBIdx(J[II[B)I

    move-result p1

    return p1

    .line 929
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 923
    :cond_4
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_5

    const/4 p2, 0x0

    goto :goto_2

    .line 925
    :cond_5
    array-length p2, p2

    :goto_2
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 927
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put([I[BII)I
    .locals 6

    .line 953
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_4

    .line 954
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v1

    rem-int v1, p4, v1

    if-eqz v1, :cond_0

    goto :goto_1

    .line 960
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_3

    .line 962
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    if-eqz v1, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 965
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Mat data type is not compatible: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 963
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    move v3, p4

    move v4, p3

    move-object v5, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/core/Mat;->nPutBwIdxOffset(J[III[B)I

    move-result p1

    return p1

    .line 961
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 955
    :cond_4
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p3, Ljava/lang/StringBuilder;

    const-string p4, "Provided data element number ("

    invoke-direct {p3, p4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_5

    const/4 p2, 0x0

    goto :goto_2

    .line 957
    :cond_5
    array-length p2, p2

    :goto_2
    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 959
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ")"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public varargs put([I[D)I
    .locals 3

    .line 796
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_2

    .line 797
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 803
    :cond_0
    array-length v0, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v1

    if-ne v0, v1, :cond_1

    .line 805
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nPutDIdx(J[II[D)I

    move-result p1

    return p1

    .line 804
    :cond_1
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 798
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_3

    const/4 p2, 0x0

    goto :goto_1

    .line 800
    :cond_3
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 802
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put([I[F)I
    .locals 3

    .line 825
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_3

    .line 826
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 832
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_2

    .line 834
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x5

    if-ne v1, v2, :cond_1

    .line 835
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nPutFIdx(J[II[F)I

    move-result p1

    return p1

    .line 837
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 833
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 827
    :cond_3
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_4

    const/4 p2, 0x0

    goto :goto_1

    .line 829
    :cond_4
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 831
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put([I[I)I
    .locals 3

    .line 857
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_3

    .line 858
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_0

    .line 864
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_2

    .line 866
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x4

    if-ne v1, v2, :cond_1

    .line 867
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nPutIIdx(J[II[I)I

    move-result p1

    return p1

    .line 869
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 865
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 859
    :cond_3
    :goto_0
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_4

    const/4 p2, 0x0

    goto :goto_1

    .line 861
    :cond_4
    array-length p2, p2

    :goto_1
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 863
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public put([I[S)I
    .locals 3

    .line 889
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v0

    if-eqz p2, :cond_4

    .line 890
    array-length v1, p2

    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v2

    rem-int/2addr v1, v2

    if-eqz v1, :cond_0

    goto :goto_1

    .line 896
    :cond_0
    array-length v1, p1

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ne v1, v2, :cond_3

    .line 898
    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x2

    if-eq v1, v2, :cond_2

    invoke-static {v0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v1

    const/4 v2, 0x3

    if-ne v1, v2, :cond_1

    goto :goto_0

    .line 901
    :cond_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Mat data type is not compatible: "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 899
    :cond_2
    :goto_0
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v2, p2

    invoke-static {v0, v1, p1, v2, p2}, Lorg/opencv/core/Mat;->nPutSIdx(J[II[S)I

    move-result p1

    return p1

    .line 897
    :cond_3
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "Incorrect number of indices"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 891
    :cond_4
    :goto_1
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Provided data element number ("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-nez p2, :cond_5

    const/4 p2, 0x0

    goto :goto_2

    .line 893
    :cond_5
    array-length p2, p2

    :goto_2
    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, ") should be multiple of the Mat channels count ("

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    .line 895
    invoke-static {v0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public release()V
    .locals 2

    .line 540
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_release(J)V

    return-void
.end method

.method public reshape(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 554
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_reshape(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public reshape(II)Lorg/opencv/core/Mat;
    .locals 3

    .line 549
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/core/Mat;->n_reshape(JII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public reshape(I[I)Lorg/opencv/core/Mat;
    .locals 4

    .line 563
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    array-length v3, p2

    invoke-static {v1, v2, p1, v3, p2}, Lorg/opencv/core/Mat;->n_reshape_1(JII[I)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public row(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 572
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_row(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public rowRange(II)Lorg/opencv/core/Mat;
    .locals 3

    .line 581
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/core/Mat;->n_rowRange(JII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public rowRange(Lorg/opencv/core/Range;)Lorg/opencv/core/Mat;
    .locals 4

    .line 590
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget v3, p1, Lorg/opencv/core/Range;->start:I

    iget p1, p1, Lorg/opencv/core/Range;->end:I

    invoke-static {v1, v2, v3, p1}, Lorg/opencv/core/Mat;->n_rowRange(JII)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public rows()I
    .locals 2

    .line 599
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_rows(J)I

    move-result v0

    return v0
.end method

.method public setTo(Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 5

    .line 631
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/core/Mat;->n_setTo(JJ)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public setTo(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 7

    .line 626
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_setTo(JJJ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public setTo(Lorg/opencv/core/Scalar;)Lorg/opencv/core/Mat;
    .locals 12

    .line 608
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

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

    invoke-static/range {v1 .. v10}, Lorg/opencv/core/Mat;->n_setTo(JDDDD)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public setTo(Lorg/opencv/core/Scalar;Lorg/opencv/core/Mat;)Lorg/opencv/core/Mat;
    .locals 13

    .line 617
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

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

    iget-wide p1, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move-wide v3, v4

    move-wide v5, v6

    move-wide v7, v8

    move-wide v9, v10

    move-wide v11, p1

    invoke-static/range {v1 .. v12}, Lorg/opencv/core/Mat;->n_setTo(JDDDDJ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public size(I)I
    .locals 2

    .line 649
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/core/Mat;->n_size_i(JI)I

    move-result p1

    return p1
.end method

.method public size()Lorg/opencv/core/Size;
    .locals 3

    .line 640
    new-instance v0, Lorg/opencv/core/Size;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/core/Mat;->n_size(J)[D

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/opencv/core/Size;-><init>([D)V

    return-object v0
.end method

.method public step1()J
    .locals 2

    .line 663
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_step1(J)J

    move-result-wide v0

    return-wide v0
.end method

.method public step1(I)J
    .locals 2

    .line 658
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/core/Mat;->n_step1(JI)J

    move-result-wide v0

    return-wide v0
.end method

.method public submat(IIII)Lorg/opencv/core/Mat;
    .locals 7

    .line 673
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    move v3, p1

    move v4, p2

    move v5, p3

    move v6, p4

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_submat_rr(JIIII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public submat(Lorg/opencv/core/Range;Lorg/opencv/core/Range;)Lorg/opencv/core/Mat;
    .locals 7

    .line 682
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget v3, p1, Lorg/opencv/core/Range;->start:I

    iget v4, p1, Lorg/opencv/core/Range;->end:I

    iget v5, p2, Lorg/opencv/core/Range;->start:I

    iget v6, p2, Lorg/opencv/core/Range;->end:I

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_submat_rr(JIIII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public submat(Lorg/opencv/core/Rect;)Lorg/opencv/core/Mat;
    .locals 7

    .line 700
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget v3, p1, Lorg/opencv/core/Rect;->x:I

    iget v4, p1, Lorg/opencv/core/Rect;->y:I

    iget v5, p1, Lorg/opencv/core/Rect;->width:I

    iget v6, p1, Lorg/opencv/core/Rect;->height:I

    invoke-static/range {v1 .. v6}, Lorg/opencv/core/Mat;->n_submat(JIIII)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public submat([Lorg/opencv/core/Range;)Lorg/opencv/core/Mat;
    .locals 3

    .line 691
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/core/Mat;->n_submat_ranges(J[Lorg/opencv/core/Range;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public t()Lorg/opencv/core/Mat;
    .locals 3

    .line 709
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/core/Mat;->n_t(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 766
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v0

    if-lez v0, :cond_0

    const-string v0, ""

    goto :goto_0

    :cond_0
    const-string v0, "-1*-1*"

    :goto_0
    const/4 v1, 0x0

    .line 767
    :goto_1
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dims()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 768
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p0, v1}, Lorg/opencv/core/Mat;->size(I)I

    move-result v2

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, "*"

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    add-int/lit8 v1, v1, 0x1

    goto :goto_1

    .line 770
    :cond_1
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Mat [ "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->type()I

    move-result v1

    invoke-static {v1}, Lorg/opencv/core/CvType;->typeToString(I)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isCont="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 771
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->isContinuous()Z

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isSubmat="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p0}, Lorg/opencv/core/Mat;->isSubmatrix()Z

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", nativeObj=0x"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    .line 772
    invoke-static {v1, v2}, Ljava/lang/Long;->toHexString(J)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", dataAddr=0x"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 773
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->dataAddr()J

    move-result-wide v1

    invoke-static {v1, v2}, Ljava/lang/Long;->toHexString(J)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " ]"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public total()J
    .locals 2

    .line 718
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_total(J)J

    move-result-wide v0

    return-wide v0
.end method

.method public type()I
    .locals 2

    .line 727
    iget-wide v0, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/core/Mat;->n_type(J)I

    move-result v0

    return v0
.end method

.method public width()I
    .locals 1

    .line 1147
    invoke-virtual {p0}, Lorg/opencv/core/Mat;->cols()I

    move-result v0

    return v0
.end method
