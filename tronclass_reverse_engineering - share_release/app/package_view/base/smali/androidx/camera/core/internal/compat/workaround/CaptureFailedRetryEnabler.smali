.class public Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;
.super Ljava/lang/Object;
.source "CaptureFailedRetryEnabler.java"


# instance fields
.field private final mCaptureFailedRetryQuirk:Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 33
    const-class v0, Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;

    invoke-static {v0}, Landroidx/camera/core/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;

    iput-object v0, p0, Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;->mCaptureFailedRetryQuirk:Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;

    return-void
.end method


# virtual methods
.method public getRetryCount()I
    .locals 1

    .line 40
    iget-object v0, p0, Landroidx/camera/core/internal/compat/workaround/CaptureFailedRetryEnabler;->mCaptureFailedRetryQuirk:Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;

    if-nez v0, :cond_0

    const/4 v0, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {v0}, Landroidx/camera/core/internal/compat/quirk/CaptureFailedRetryQuirk;->getRetryCount()I

    move-result v0

    :goto_0
    return v0
.end method
