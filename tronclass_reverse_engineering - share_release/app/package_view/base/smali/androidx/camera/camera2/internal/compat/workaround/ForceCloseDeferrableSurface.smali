.class public Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;
.super Ljava/lang/Object;
.source "ForceCloseDeferrableSurface.java"


# instance fields
.field private final mHasConfigureSurfaceToSecondarySessionFailQuirk:Z

.field private final mHasPreviewOrientationIncorrectQuirk:Z

.field private final mHasTextureViewIsClosedQuirk:Z


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/Quirks;Landroidx/camera/core/impl/Quirks;)V
    .locals 1

    .line 50
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 51
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/TextureViewIsClosedQuirk;

    invoke-virtual {p2, v0}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p2

    iput-boolean p2, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasTextureViewIsClosedQuirk:Z

    .line 52
    const-class p2, Landroidx/camera/camera2/internal/compat/quirk/PreviewOrientationIncorrectQuirk;

    invoke-virtual {p1, p2}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p2

    iput-boolean p2, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasPreviewOrientationIncorrectQuirk:Z

    .line 54
    const-class p2, Landroidx/camera/camera2/internal/compat/quirk/ConfigureSurfaceToSecondarySessionFailQuirk;

    .line 55
    invoke-virtual {p1, p2}, Landroidx/camera/core/impl/Quirks;->contains(Ljava/lang/Class;)Z

    move-result p1

    iput-boolean p1, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasConfigureSurfaceToSecondarySessionFailQuirk:Z

    return-void
.end method


# virtual methods
.method public onSessionEnd(Ljava/util/List;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;)V"
        }
    .end annotation

    .line 72
    invoke-virtual {p0}, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->shouldForceClose()Z

    move-result v0

    if-eqz v0, :cond_1

    if-eqz p1, :cond_1

    .line 73
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/DeferrableSurface;

    .line 74
    invoke-virtual {v0}, Landroidx/camera/core/impl/DeferrableSurface;->close()V

    goto :goto_0

    .line 76
    :cond_0
    const-string p1, "ForceCloseDeferrableSurface"

    const-string v0, "deferrableSurface closed"

    invoke-static {p1, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public shouldForceClose()Z
    .locals 1

    .line 63
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasTextureViewIsClosedQuirk:Z

    if-nez v0, :cond_1

    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasPreviewOrientationIncorrectQuirk:Z

    if-nez v0, :cond_1

    iget-boolean v0, p0, Landroidx/camera/camera2/internal/compat/workaround/ForceCloseDeferrableSurface;->mHasConfigureSurfaceToSecondarySessionFailQuirk:Z

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method
