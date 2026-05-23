.class public Landroidx/camera/camera2/internal/compat/workaround/DisplaySizeCorrector;
.super Ljava/lang/Object;
.source "DisplaySizeCorrector.java"


# instance fields
.field private final mSmallDisplaySizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;

    invoke-static {v0}, Landroidx/camera/camera2/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object v0

    check-cast v0, Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/DisplaySizeCorrector;->mSmallDisplaySizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;

    return-void
.end method


# virtual methods
.method public getDisplaySize()Landroid/util/Size;
    .locals 1

    .line 48
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/DisplaySizeCorrector;->mSmallDisplaySizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/compat/quirk/SmallDisplaySizeQuirk;->getDisplaySize()Landroid/util/Size;

    move-result-object v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return-object v0
.end method
