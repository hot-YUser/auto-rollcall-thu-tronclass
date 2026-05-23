.class public Lorg/opencv/objdetect/QRCodeEncoder_Params;
.super Ljava/lang/Object;
.source "QRCodeEncoder_Params.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 27
    invoke-static {}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->QRCodeEncoder_Params_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 15
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    return-void
.end method

.method private static native QRCodeEncoder_Params_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/objdetect/QRCodeEncoder_Params;
    .locals 1

    .line 20
    new-instance v0, Lorg/opencv/objdetect/QRCodeEncoder_Params;

    invoke-direct {v0, p0, p1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native get_structure_number_0(J)I
.end method

.method private static native get_version_0(J)I
.end method

.method private static native set_structure_number_0(JI)V
.end method

.method private static native set_version_0(JI)V
.end method


# virtual methods
.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 97
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 17
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    return-wide v0
.end method

.method public get_structure_number()I
    .locals 2

    .line 82
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->get_structure_number_0(J)I

    move-result v0

    return v0
.end method

.method public get_version()I
    .locals 2

    .line 36
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->get_version_0(J)I

    move-result v0

    return v0
.end method

.method public set_structure_number(I)V
    .locals 2

    .line 91
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->set_structure_number_0(JI)V

    return-void
.end method

.method public set_version(I)V
    .locals 2

    .line 45
    iget-wide v0, p0, Lorg/opencv/objdetect/QRCodeEncoder_Params;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/objdetect/QRCodeEncoder_Params;->set_version_0(JI)V

    return-void
.end method
