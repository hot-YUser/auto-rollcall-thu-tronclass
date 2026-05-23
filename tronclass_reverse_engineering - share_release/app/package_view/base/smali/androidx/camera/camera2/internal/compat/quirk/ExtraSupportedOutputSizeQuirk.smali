.class public Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;
.super Ljava/lang/Object;
.source "ExtraSupportedOutputSizeQuirk.java"

# interfaces
.implements Landroidx/camera/core/impl/Quirk;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private getMotoE5PlayExtraSupportedResolutions()[Landroid/util/Size;
    .locals 5

    const/4 v0, 0x6

    .line 76
    new-array v0, v0, [Landroid/util/Size;

    new-instance v1, Landroid/util/Size;

    const/16 v2, 0x780

    const/16 v3, 0x438

    invoke-direct {v1, v2, v3}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x0

    aput-object v1, v0, v2

    new-instance v1, Landroid/util/Size;

    const/16 v2, 0x5a0

    invoke-direct {v1, v2, v3}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x1

    aput-object v1, v0, v2

    new-instance v1, Landroid/util/Size;

    const/16 v2, 0x500

    const/16 v3, 0x2d0

    invoke-direct {v1, v2, v3}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x2

    aput-object v1, v0, v2

    new-instance v1, Landroid/util/Size;

    const/16 v2, 0x3c0

    invoke-direct {v1, v2, v3}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x3

    aput-object v1, v0, v2

    new-instance v1, Landroid/util/Size;

    const/16 v2, 0x360

    const/16 v4, 0x1e0

    invoke-direct {v1, v2, v4}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x4

    aput-object v1, v0, v2

    new-instance v1, Landroid/util/Size;

    invoke-direct {v1, v3, v4}, Landroid/util/Size;-><init>(II)V

    const/4 v2, 0x5

    aput-object v1, v0, v2

    return-object v0
.end method

.method private static isMotoE5Play()Z
    .locals 2

    .line 44
    const-string v0, "motorola"

    sget-object v1, Landroid/os/Build;->BRAND:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    const-string v0, "moto e5 play"

    sget-object v1, Landroid/os/Build;->MODEL:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method static load()Z
    .locals 1

    .line 40
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->isMotoE5Play()Z

    move-result v0

    return v0
.end method


# virtual methods
.method public getExtraSupportedResolutions(I)[Landroid/util/Size;
    .locals 1

    const/16 v0, 0x22

    if-ne p1, v0, :cond_0

    .line 54
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->isMotoE5Play()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 55
    invoke-direct {p0}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->getMotoE5PlayExtraSupportedResolutions()[Landroid/util/Size;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    .line 57
    new-array p1, p1, [Landroid/util/Size;

    return-object p1
.end method

.method public getExtraSupportedResolutions(Ljava/lang/Class;)[Landroid/util/Size;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/Class<",
            "TT;>;)[",
            "Landroid/util/Size;"
        }
    .end annotation

    .line 66
    invoke-static {p1}, Landroid/hardware/camera2/params/StreamConfigurationMap;->isOutputSupportedFor(Ljava/lang/Class;)Z

    move-result p1

    if-eqz p1, :cond_0

    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->isMotoE5Play()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 67
    invoke-direct {p0}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->getMotoE5PlayExtraSupportedResolutions()[Landroid/util/Size;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    .line 69
    new-array p1, p1, [Landroid/util/Size;

    return-object p1
.end method
