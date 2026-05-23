.class public Landroidx/camera/camera2/internal/compat/quirk/CameraNoResponseWhenEnablingFlashQuirk;
.super Ljava/lang/Object;
.source "CameraNoResponseWhenEnablingFlashQuirk.java"

# interfaces
.implements Landroidx/camera/camera2/internal/compat/quirk/UseTorchAsFlashQuirk;


# static fields
.field public static final AFFECTED_MODELS:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/16 v0, 0x13

    .line 46
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "SM-N9200"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "SM-N9208"

    aput-object v2, v0, v1

    const/4 v1, 0x2

    const-string v2, "SAMSUNG-SM-N920A"

    aput-object v2, v0, v1

    const/4 v1, 0x3

    const-string v2, "SM-N920C"

    aput-object v2, v0, v1

    const/4 v1, 0x4

    const-string v2, "SM-N920F"

    aput-object v2, v0, v1

    const/4 v1, 0x5

    const-string v2, "SM-N920G"

    aput-object v2, v0, v1

    const/4 v1, 0x6

    const-string v2, "SM-N920I"

    aput-object v2, v0, v1

    const/4 v1, 0x7

    const-string v2, "SM-N920K"

    aput-object v2, v0, v1

    const/16 v1, 0x8

    const-string v2, "SM-N920L"

    aput-object v2, v0, v1

    const/16 v1, 0x9

    const-string v2, "SM-N920P"

    aput-object v2, v0, v1

    const/16 v1, 0xa

    const-string v2, "SM-N920R4"

    aput-object v2, v0, v1

    const/16 v1, 0xb

    const-string v2, "SM-N920R6"

    aput-object v2, v0, v1

    const/16 v1, 0xc

    const-string v2, "SM-N920R7"

    aput-object v2, v0, v1

    const/16 v1, 0xd

    const-string v2, "SM-N920S"

    aput-object v2, v0, v1

    const/16 v1, 0xe

    const-string v2, "SM-N920T"

    aput-object v2, v0, v1

    const/16 v1, 0xf

    const-string v2, "SM-N920V"

    aput-object v2, v0, v1

    const/16 v1, 0x10

    const-string v2, "SM-N920W8"

    aput-object v2, v0, v1

    const/16 v1, 0x11

    const-string v2, "SM-N920X"

    aput-object v2, v0, v1

    const/16 v1, 0x12

    const-string v2, "SM-J510FN"

    aput-object v2, v0, v1

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/CameraNoResponseWhenEnablingFlashQuirk;->AFFECTED_MODELS:Ljava/util/List;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static load(Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;)Z
    .locals 3

    .line 72
    sget-object v0, Landroidx/camera/camera2/internal/compat/quirk/CameraNoResponseWhenEnablingFlashQuirk;->AFFECTED_MODELS:Ljava/util/List;

    sget-object v1, Landroid/os/Build;->MODEL:Ljava/lang/String;

    sget-object v2, Ljava/util/Locale;->US:Ljava/util/Locale;

    invoke-virtual {v1, v2}, Ljava/lang/String;->toUpperCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    sget-object v0, Landroid/hardware/camera2/CameraCharacteristics;->LENS_FACING:Landroid/hardware/camera2/CameraCharacteristics$Key;

    .line 73
    invoke-virtual {p0, v0}, Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;->get(Landroid/hardware/camera2/CameraCharacteristics$Key;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/Integer;

    invoke-virtual {p0}, Ljava/lang/Integer;->intValue()I

    move-result p0

    const/4 v0, 0x1

    if-ne p0, v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method
