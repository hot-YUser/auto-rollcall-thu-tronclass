.class public final synthetic Landroidx/camera/camera2/internal/ZslControlImpl$$ExternalSyntheticLambda2;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;


# instance fields
.field public final synthetic f$0:Landroidx/camera/camera2/internal/ZslControlImpl;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/camera2/internal/ZslControlImpl;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/camera2/internal/ZslControlImpl$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/camera2/internal/ZslControlImpl;

    return-void
.end method


# virtual methods
.method public final onImageAvailable(Landroidx/camera/core/impl/ImageReaderProxy;)V
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/camera2/internal/ZslControlImpl$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/camera2/internal/ZslControlImpl;

    invoke-virtual {v0, p1}, Landroidx/camera/camera2/internal/ZslControlImpl;->lambda$addZslConfig$1$androidx-camera-camera2-internal-ZslControlImpl(Landroidx/camera/core/impl/ImageReaderProxy;)V

    return-void
.end method
