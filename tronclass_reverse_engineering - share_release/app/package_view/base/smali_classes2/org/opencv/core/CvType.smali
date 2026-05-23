.class public final Lorg/opencv/core/CvType;
.super Ljava/lang/Object;
.source "CvType.java"


# static fields
.field public static final CV_16F:I = 0x7

.field public static final CV_16FC1:I

.field public static final CV_16FC2:I

.field public static final CV_16FC3:I

.field public static final CV_16FC4:I

.field public static final CV_16S:I = 0x3

.field public static final CV_16SC1:I

.field public static final CV_16SC2:I

.field public static final CV_16SC3:I

.field public static final CV_16SC4:I

.field public static final CV_16U:I = 0x2

.field public static final CV_16UC1:I

.field public static final CV_16UC2:I

.field public static final CV_16UC3:I

.field public static final CV_16UC4:I

.field public static final CV_32F:I = 0x5

.field public static final CV_32FC1:I

.field public static final CV_32FC2:I

.field public static final CV_32FC3:I

.field public static final CV_32FC4:I

.field public static final CV_32S:I = 0x4

.field public static final CV_32SC1:I

.field public static final CV_32SC2:I

.field public static final CV_32SC3:I

.field public static final CV_32SC4:I

.field public static final CV_64F:I = 0x6

.field public static final CV_64FC1:I

.field public static final CV_64FC2:I

.field public static final CV_64FC3:I

.field public static final CV_64FC4:I

.field public static final CV_8S:I = 0x1

.field public static final CV_8SC1:I

.field public static final CV_8SC2:I

.field public static final CV_8SC3:I

.field public static final CV_8SC4:I

.field public static final CV_8U:I = 0x0

.field public static final CV_8UC1:I

.field public static final CV_8UC2:I

.field public static final CV_8UC3:I

.field public static final CV_8UC4:I

.field private static final CV_CN_MAX:I = 0x200

.field private static final CV_CN_SHIFT:I = 0x3

.field private static final CV_DEPTH_MAX:I = 0x8

.field public static final CV_USRTYPE1:I = 0x7
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 5

    const/4 v0, 0x1

    .line 24
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_8UC(I)I

    move-result v1

    sput v1, Lorg/opencv/core/CvType;->CV_8UC1:I

    const/4 v1, 0x2

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_8UC(I)I

    move-result v2

    sput v2, Lorg/opencv/core/CvType;->CV_8UC2:I

    const/4 v2, 0x3

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_8UC(I)I

    move-result v3

    sput v3, Lorg/opencv/core/CvType;->CV_8UC3:I

    const/4 v3, 0x4

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_8UC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_8UC4:I

    .line 25
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_8SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_8SC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_8SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_8SC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_8SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_8SC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_8SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_8SC4:I

    .line 26
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_16UC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16UC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_16UC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16UC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_16UC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16UC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_16UC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16UC4:I

    .line 27
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_16SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16SC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_16SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16SC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_16SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16SC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_16SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_16SC4:I

    .line 28
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_32SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32SC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_32SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32SC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_32SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32SC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_32SC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32SC4:I

    .line 29
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32FC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32FC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32FC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_32FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_32FC4:I

    .line 30
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_64FC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_64FC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_64FC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_64FC(I)I

    move-result v4

    sput v4, Lorg/opencv/core/CvType;->CV_64FC4:I

    .line 31
    invoke-static {v0}, Lorg/opencv/core/CvType;->CV_16FC(I)I

    move-result v0

    sput v0, Lorg/opencv/core/CvType;->CV_16FC1:I

    invoke-static {v1}, Lorg/opencv/core/CvType;->CV_16FC(I)I

    move-result v0

    sput v0, Lorg/opencv/core/CvType;->CV_16FC2:I

    invoke-static {v2}, Lorg/opencv/core/CvType;->CV_16FC(I)I

    move-result v0

    sput v0, Lorg/opencv/core/CvType;->CV_16FC3:I

    invoke-static {v3}, Lorg/opencv/core/CvType;->CV_16FC(I)I

    move-result v0

    sput v0, Lorg/opencv/core/CvType;->CV_16FC4:I

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 3
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static final CV_16FC(I)I
    .locals 1

    const/4 v0, 0x7

    .line 76
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_16SC(I)I
    .locals 1

    const/4 v0, 0x3

    .line 60
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_16UC(I)I
    .locals 1

    const/4 v0, 0x2

    .line 56
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_32FC(I)I
    .locals 1

    const/4 v0, 0x5

    .line 68
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_32SC(I)I
    .locals 1

    const/4 v0, 0x4

    .line 64
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_64FC(I)I
    .locals 1

    const/4 v0, 0x6

    .line 72
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_8SC(I)I
    .locals 1

    const/4 v0, 0x1

    .line 52
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final CV_8UC(I)I
    .locals 1

    const/4 v0, 0x0

    .line 48
    invoke-static {v0, p0}, Lorg/opencv/core/CvType;->makeType(II)I

    move-result p0

    return p0
.end method

.method public static final ELEM_SIZE(I)I
    .locals 3

    .line 92
    invoke-static {p0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v0

    packed-switch v0, :pswitch_data_0

    .line 106
    new-instance v0, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unsupported CvType value: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, p0}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 104
    :pswitch_0
    invoke-static {p0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p0

    mul-int/lit8 p0, p0, 0x8

    return p0

    .line 102
    :pswitch_1
    invoke-static {p0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p0

    mul-int/lit8 p0, p0, 0x4

    return p0

    .line 99
    :pswitch_2
    invoke-static {p0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p0

    mul-int/lit8 p0, p0, 0x2

    return p0

    .line 95
    :pswitch_3
    invoke-static {p0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p0

    return p0

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_3
        :pswitch_3
        :pswitch_2
        :pswitch_2
        :pswitch_1
        :pswitch_1
        :pswitch_0
        :pswitch_2
    .end packed-switch
.end method

.method public static final channels(I)I
    .locals 0

    shr-int/lit8 p0, p0, 0x3

    add-int/lit8 p0, p0, 0x1

    return p0
.end method

.method public static final depth(I)I
    .locals 0

    and-int/lit8 p0, p0, 0x7

    return p0
.end method

.method public static final isInteger(I)Z
    .locals 1

    .line 88
    invoke-static {p0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result p0

    const/4 v0, 0x5

    if-ge p0, v0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static final makeType(II)I
    .locals 1

    if-lez p1, :cond_1

    const/16 v0, 0x200

    if-ge p1, v0, :cond_1

    if-ltz p0, :cond_0

    const/16 v0, 0x8

    if-ge p0, v0, :cond_0

    and-int/lit8 p0, p0, 0x7

    add-int/lit8 p1, p1, -0x1

    shl-int/lit8 p1, p1, 0x3

    add-int/2addr p0, p1

    return p0

    .line 41
    :cond_0
    new-instance p0, Ljava/lang/UnsupportedOperationException;

    const-string p1, "Data type depth should be 0..7"

    invoke-direct {p0, p1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 37
    :cond_1
    new-instance p0, Ljava/lang/UnsupportedOperationException;

    const-string p1, "Channels count should be 1..511"

    invoke-direct {p0, p1}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static final typeToString(I)Ljava/lang/String;
    .locals 3

    .line 113
    invoke-static {p0}, Lorg/opencv/core/CvType;->depth(I)I

    move-result v0

    packed-switch v0, :pswitch_data_0

    .line 139
    new-instance v0, Ljava/lang/UnsupportedOperationException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unsupported CvType value: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, p0}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 137
    :pswitch_0
    const-string v0, "CV_16F"

    goto :goto_0

    .line 134
    :pswitch_1
    const-string v0, "CV_64F"

    goto :goto_0

    .line 131
    :pswitch_2
    const-string v0, "CV_32F"

    goto :goto_0

    .line 128
    :pswitch_3
    const-string v0, "CV_32S"

    goto :goto_0

    .line 125
    :pswitch_4
    const-string v0, "CV_16S"

    goto :goto_0

    .line 122
    :pswitch_5
    const-string v0, "CV_16U"

    goto :goto_0

    .line 119
    :pswitch_6
    const-string v0, "CV_8S"

    goto :goto_0

    .line 116
    :pswitch_7
    const-string v0, "CV_8U"

    .line 143
    :goto_0
    invoke-static {p0}, Lorg/opencv/core/CvType;->channels(I)I

    move-result p0

    const/4 v1, 0x4

    if-gt p0, v1, :cond_0

    .line 145
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "C"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 147
    :cond_0
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "C("

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, ")"

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_7
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method
