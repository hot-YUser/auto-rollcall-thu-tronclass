.class public Landroidx/camera/camera2/internal/TemplateTypeUtil;
.super Ljava/lang/Object;
.source "TemplateTypeUtil.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getCaptureConfigTemplateType(Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;I)I
    .locals 2

    .line 69
    sget-object v0, Landroidx/camera/camera2/internal/TemplateTypeUtil$1;->$SwitchMap$androidx$camera$core$impl$UseCaseConfigFactory$CaptureType:[I

    invoke-virtual {p0}, Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;->ordinal()I

    move-result p0

    aget p0, v0, p0

    const/4 v0, 0x1

    const/4 v1, 0x2

    if-eq p0, v0, :cond_1

    const/4 p1, 0x3

    if-eq p0, v1, :cond_0

    if-eq p0, p1, :cond_0

    return v0

    :cond_0
    return p1

    :cond_1
    if-ne p1, v1, :cond_2

    const/4 v1, 0x5

    :cond_2
    return v1
.end method

.method public static getSessionConfigTemplateType(Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;I)I
    .locals 2

    .line 46
    sget-object v0, Landroidx/camera/camera2/internal/TemplateTypeUtil$1;->$SwitchMap$androidx$camera$core$impl$UseCaseConfigFactory$CaptureType:[I

    invoke-virtual {p0}, Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;->ordinal()I

    move-result p0

    aget p0, v0, p0

    const/4 v0, 0x2

    const/4 v1, 0x1

    if-eq p0, v1, :cond_1

    const/4 p1, 0x3

    if-eq p0, v0, :cond_0

    if-eq p0, p1, :cond_0

    return v1

    :cond_0
    return p1

    :cond_1
    if-ne p1, v0, :cond_2

    const/4 v1, 0x5

    :cond_2
    return v1
.end method
