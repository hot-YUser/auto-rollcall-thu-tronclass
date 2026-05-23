.class public Landroidx/camera/camera2/internal/compat/quirk/CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;
.super Ljava/lang/Object;
.source "CrashWhenTakingPhotoWithAutoFlashAEModeQuirk.java"

# interfaces
.implements Landroidx/camera/core/impl/Quirk;


# static fields
.field static final AFFECTED_MODELS:Ljava/util/List;
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

    const/16 v0, 0xe

    .line 41
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "SM-A3000"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "SM-A3009"

    aput-object v2, v0, v1

    const/4 v1, 0x2

    const-string v2, "SM-A300F"

    aput-object v2, v0, v1

    const/4 v1, 0x3

    const-string v2, "SM-A300FU"

    aput-object v2, v0, v1

    const/4 v1, 0x4

    const-string v2, "SM-A300G"

    aput-object v2, v0, v1

    const/4 v1, 0x5

    const-string v2, "SM-A300H"

    aput-object v2, v0, v1

    const/4 v1, 0x6

    const-string v2, "SM-A300M"

    aput-object v2, v0, v1

    const/4 v1, 0x7

    const-string v2, "SM-A300X"

    aput-object v2, v0, v1

    const/16 v1, 0x8

    const-string v2, "SM-A300XU"

    aput-object v2, v0, v1

    const/16 v1, 0x9

    const-string v2, "SM-A300XZ"

    aput-object v2, v0, v1

    const/16 v1, 0xa

    const-string v2, "SM-A300Y"

    aput-object v2, v0, v1

    const/16 v1, 0xb

    const-string v2, "SM-A300YZ"

    aput-object v2, v0, v1

    const/16 v1, 0xc

    const-string v2, "SM-J510FN"

    aput-object v2, v0, v1

    const/16 v1, 0xd

    const-string v2, "5059X"

    aput-object v2, v0, v1

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;->AFFECTED_MODELS:Ljava/util/List;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static load()Z
    .locals 3

    .line 64
    sget-object v0, Landroidx/camera/camera2/internal/compat/quirk/CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;->AFFECTED_MODELS:Ljava/util/List;

    sget-object v1, Landroid/os/Build;->MODEL:Ljava/lang/String;

    sget-object v2, Ljava/util/Locale;->US:Ljava/util/Locale;

    invoke-virtual {v1, v2}, Ljava/lang/String;->toUpperCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method
