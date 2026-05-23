.class public Lorg/opencv/wechat_qrcode/WeChatQRCode;
.super Ljava/lang/Object;
.source "WeChatQRCode.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 89
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 90
    invoke-static {}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->WeChatQRCode_4()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;)V
    .locals 2

    .line 79
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 80
    invoke-static {p1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->WeChatQRCode_3(Ljava/lang/String;)J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 68
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 69
    invoke-static {p1, p2}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->WeChatQRCode_2(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 56
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 57
    invoke-static {p1, p2, p3}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->WeChatQRCode_1(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    invoke-static {p1, p2, p3, p4}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->WeChatQRCode_0(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p1

    iput-wide p1, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-void
.end method

.method private static native WeChatQRCode_0(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native WeChatQRCode_1(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native WeChatQRCode_2(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native WeChatQRCode_3(Ljava/lang/String;)J
.end method

.method private static native WeChatQRCode_4()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/wechat_qrcode/WeChatQRCode;
    .locals 1

    .line 27
    new-instance v0, Lorg/opencv/wechat_qrcode/WeChatQRCode;

    invoke-direct {v0, p0, p1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;-><init>(J)V

    return-object v0
.end method

.method private static native delete(J)V
.end method

.method private static native detectAndDecode_0(JJJ)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJJ)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method private static native detectAndDecode_1(JJ)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJ)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method private static native getScaleFactor_0(J)F
.end method

.method private static native setScaleFactor_0(JF)V
.end method


# virtual methods
.method public detectAndDecode(Lorg/opencv/core/Mat;)Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 124
    iget-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->detectAndDecode_1(JJ)Ljava/util/List;

    move-result-object p1

    return-object p1
.end method

.method public detectAndDecode(Lorg/opencv/core/Mat;Ljava/util/List;)Ljava/util/List;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 108
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 109
    iget-wide v1, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v1 .. v6}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->detectAndDecode_0(JJJ)Ljava/util/List;

    move-result-object p1

    .line 110
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 111
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-object p1
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 161
    iget-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->delete(J)V

    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 24
    iget-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    return-wide v0
.end method

.method public getScaleFactor()F
    .locals 2

    .line 155
    iget-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->getScaleFactor_0(J)F

    move-result v0

    return v0
.end method

.method public setScaleFactor(F)V
    .locals 2

    .line 146
    iget-wide v0, p0, Lorg/opencv/wechat_qrcode/WeChatQRCode;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->setScaleFactor_0(JF)V

    return-void
.end method
