.class public Landroidx/camera/camera2/internal/compat/workaround/AutoFlashAEModeDisabler;
.super Ljava/lang/Object;
.source "AutoFlashAEModeDisabler.java"


# instance fields
.field private final mIsCrashWhenTakingPhotoWithAutoFlashAEModeQuirkEnabled:Z

.field private final mIsImageCaptureFailWithAutoFlashQuirkEnabled:Z


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/Quirks;)V
    .locals 1

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 41
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/ImageCaptureFailWithAutoFlashQuirk;

    .line 42
    invoke-virtual {p1, v0}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p1

    iput-boolean p1, p0, Landroidx/camera/camera2/internal/compat/workaround/AutoFlashAEModeDisabler;->mIsImageCaptureFailWithAutoFlashQuirkEnabled:Z

    .line 43
    const-class p1, Landroidx/camera/camera2/internal/compat/quirk/CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;

    invoke-static {p1}, Landroidx/camera/camera2/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    iput-boolean p1, p0, Landroidx/camera/camera2/internal/compat/workaround/AutoFlashAEModeDisabler;->mIsCrashWhenTakingPhotoWithAutoFlashAEModeQuirkEnabled:Z

    return-void
.end method


# virtual methods
.method public getCorrectedAeMode(I)I
    .locals 1

    .line 52
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/AutoFlashAEModeDisabler;->mIsImageCaptureFailWithAutoFlashQuirkEnabled:Z

    if-nez v0, :cond_0

    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/AutoFlashAEModeDisabler;->mIsCrashWhenTakingPhotoWithAutoFlashAEModeQuirkEnabled:Z

    if-eqz v0, :cond_1

    :cond_0
    const/4 v0, 0x2

    if-ne p1, v0, :cond_1

    const/4 p1, 0x1

    :cond_1
    return p1
.end method
