.class public Lcom/wisdomgarden/mobile/AndroidVersionUtils;
.super Ljava/lang/Object;
.source "AndroidVersionUtils.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 3
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getCurrentVersion()I
    .locals 1

    .line 102
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    return v0
.end method

.method public static isBetween(II)Z
    .locals 1

    const/4 v0, 0x0

    .line 34
    invoke-static {p0, p1, v0, v0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isBetween(IIZZ)Z

    move-result p0

    return p0
.end method

.method public static isBetween(IIZ)Z
    .locals 1

    const/4 v0, 0x0

    .line 47
    invoke-static {p0, p1, p2, v0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isBetween(IIZZ)Z

    move-result p0

    return p0
.end method

.method public static isBetween(IIZZ)Z
    .locals 0

    if-eqz p2, :cond_0

    .line 60
    invoke-static {p0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isGreaterThanOrEqualTo(I)Z

    move-result p0

    goto :goto_0

    :cond_0
    invoke-static {p0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isGreaterThan(I)Z

    move-result p0

    :goto_0
    if-eqz p3, :cond_1

    .line 61
    invoke-static {p1}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isLessThanOrEqualTo(I)Z

    move-result p1

    goto :goto_1

    :cond_1
    invoke-static {p1}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isLessThan(I)Z

    move-result p1

    :goto_1
    if-eqz p0, :cond_2

    if-eqz p1, :cond_2

    const/4 p0, 0x1

    goto :goto_2

    :cond_2
    const/4 p0, 0x0

    :goto_2
    return p0
.end method

.method public static isExactly(I)Z
    .locals 1

    .line 93
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    if-ne v0, p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static isGreaterThan(I)Z
    .locals 1

    .line 12
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    if-le v0, p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static isGreaterThanOrEqualTo(I)Z
    .locals 1

    .line 22
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    if-lt v0, p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static isLessThan(I)Z
    .locals 1

    .line 73
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    if-ge v0, p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static isLessThanOrEqualTo(I)Z
    .locals 1

    .line 83
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    if-gt v0, p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method
