.class public Landroidx/camera/camera2/internal/compat/workaround/UseTorchAsFlash;
.super Ljava/lang/Object;
.source "UseTorchAsFlash.java"


# instance fields
.field private final mHasUseTorchAsFlashQuirk:Z


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/Quirks;)V
    .locals 1

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 35
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/UseTorchAsFlashQuirk;

    invoke-virtual {p1, v0}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p1

    iput-boolean p1, p0, Landroidx/camera/camera2/internal/compat/workaround/UseTorchAsFlash;->mHasUseTorchAsFlashQuirk:Z

    return-void
.end method


# virtual methods
.method public shouldUseTorchAsFlash()Z
    .locals 1

    .line 40
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/UseTorchAsFlash;->mHasUseTorchAsFlashQuirk:Z

    return v0
.end method
