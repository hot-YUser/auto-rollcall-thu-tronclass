.class public Lorg/opencv/objdetect/QRCodeEncoder;
.super Ljava/lang/Object;
.source "QRCodeEncoder.java"


# static fields
.field public static final CORRECT_LEVEL_H:I = 0x3

.field public static final CORRECT_LEVEL_L:I = 0x0

.field public static final CORRECT_LEVEL_M:I = 0x1

.field public static final CORRECT_LEVEL_Q:I = 0x2

.field public static final ECI_UTF8:I = 0x1a

.field public static final MODE_ALPHANUMERIC:I = 0x2

.field public static final MODE_AUTO:I = -0x1

.field public static final MODE_BYTE:I = 0x4

.field public static final MODE_ECI:I = 0x7

.field public static final MODE_KANJI:I = 0x8

.field public static final MODE_NUMERIC:I = 0x1

.field public static final MODE_STRUCTURED_APPEND:I = 0x3


# instance fields
.field protected final nativeObj:J


# direct methods
.method protected constructor <init>(J)V
    .locals 0

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/QRCodeEncoder;->nativeObj:J

    return-void
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/QRCodeEncoder;
    .locals 1

    .line 29
    new-instance v0, Lorg/opencv/objdetect/QRCodeEncoder;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/QRCodeEncoder;-><init>(J)V

    return-object v0
.end method

.method public static create()Lorg/opencv/objdetect/QRCodeEncoder;
    .locals 2

    .line 73
    invoke-static {}, Lorg/opencv/objdetect/QRCodeEncoder;->create_1()J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder;->__fromPtr__(J)Lorg/opencv/objdetect/QRCodeEncoder;

    move-result-object v0

    return-object v0
.end method

.method public static create(Lorg/opencv/objdetect/QRCodeEncoder_Params;)Lorg/opencv/objdetect/QRCodeEncoder;
    .locals 2

    .line 65
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder;->create_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder;->__fromPtr__(J)Lorg/opencv/objdetect/QRCodeEncoder;

    move-result-object p0

    return-object p0
.end method

.method private static native create_0(J)J
.end method

.method private static native create_1()J
.end method

.method private static native delete(J)V
.end method

.method private static native encodeStructuredAppend_0(JLjava/lang/String;J)V
.end method

.method private static native encode_0(JLjava/lang/String;J)V
.end method


# virtual methods
.method public encode(Ljava/lang/String;Lorg/opencv/core/Mat;)V
    .locals 4

    .line 87
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, v2, v3}, Lorg/opencv/objdetect/QRCodeEncoder;->encode_0(JLjava/lang/String;J)V

    return-void
.end method

.method public encodeStructuredAppend(Ljava/lang/String;Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 101
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 102
    iget-wide v1, p0, Lorg/opencv/objdetect/QRCodeEncoder;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, v3, v4}, Lorg/opencv/objdetect/QRCodeEncoder;->encodeStructuredAppend_0(JLjava/lang/String;J)V

    .line 103
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 104
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 110
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 26
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder;->nativeObj:J

    return-wide v0
.end method
