.class public final Landroidx/camera/core/internal/compat/quirk/LargeJpegImageQuirk;
.super Ljava/lang/Object;
.source "LargeJpegImageQuirk.java"

# interfaces
.implements Landroidx/camera/core/impl/Quirk;


# static fields
.field private static final DEVICE_MODELS:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .line 40
    new-instance v0, Ljava/util/HashSet;

    const/16 v1, 0x17

    new-array v1, v1, [Ljava/lang/String;

    const/4 v2, 0x0

    const-string v3, "SM-A520F"

    aput-object v3, v1, v2

    const/4 v2, 0x1

    const-string v3, "SM-A520L"

    aput-object v3, v1, v2

    const/4 v2, 0x2

    const-string v3, "SM-A520K"

    aput-object v3, v1, v2

    const/4 v2, 0x3

    const-string v3, "SM-A520S"

    aput-object v3, v1, v2

    const/4 v2, 0x4

    const-string v3, "SM-A520X"

    aput-object v3, v1, v2

    const/4 v2, 0x5

    const-string v3, "SM-A520W"

    aput-object v3, v1, v2

    const/4 v2, 0x6

    const-string v3, "SM-A525F"

    aput-object v3, v1, v2

    const/4 v2, 0x7

    const-string v3, "SM-A525M"

    aput-object v3, v1, v2

    const/16 v2, 0x8

    const-string v3, "SM-A705F"

    aput-object v3, v1, v2

    const/16 v2, 0x9

    const-string v3, "SM-A705FN"

    aput-object v3, v1, v2

    const/16 v2, 0xa

    const-string v3, "SM-A705GM"

    aput-object v3, v1, v2

    const/16 v2, 0xb

    const-string v3, "SM-A705MN"

    aput-object v3, v1, v2

    const/16 v2, 0xc

    const-string v3, "SM-A7050"

    aput-object v3, v1, v2

    const/16 v2, 0xd

    const-string v3, "SM-A705W"

    aput-object v3, v1, v2

    const/16 v2, 0xe

    const-string v3, "SM-A705YN"

    aput-object v3, v1, v2

    const/16 v2, 0xf

    const-string v3, "SM-A705U"

    aput-object v3, v1, v2

    const/16 v2, 0x10

    const-string v3, "SM-A725F"

    aput-object v3, v1, v2

    const/16 v2, 0x11

    const-string v3, "SM-A725M"

    aput-object v3, v1, v2

    const/16 v2, 0x12

    const-string v3, "SM-G930T"

    aput-object v3, v1, v2

    const/16 v2, 0x13

    const-string v3, "SM-G930V"

    aput-object v3, v1, v2

    const/16 v2, 0x14

    const-string v3, "SM-S901B"

    aput-object v3, v1, v2

    const/16 v2, 0x15

    const-string v3, "SM-S901B/DS"

    aput-object v3, v1, v2

    const/16 v2, 0x16

    const-string v3, "SM-S906B"

    aput-object v3, v1, v2

    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/HashSet;-><init>(Ljava/util/Collection;)V

    sput-object v0, Landroidx/camera/core/internal/compat/quirk/LargeJpegImageQuirk;->DEVICE_MODELS:Ljava/util/Set;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static load()Z
    .locals 3

    .line 74
    sget-object v0, Landroidx/camera/core/internal/compat/quirk/LargeJpegImageQuirk;->DEVICE_MODELS:Ljava/util/Set;

    sget-object v1, Landroid/os/Build;->MODEL:Ljava/lang/String;

    sget-object v2, Ljava/util/Locale;->US:Ljava/util/Locale;

    invoke-virtual {v1, v2}, Ljava/lang/String;->toUpperCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method
