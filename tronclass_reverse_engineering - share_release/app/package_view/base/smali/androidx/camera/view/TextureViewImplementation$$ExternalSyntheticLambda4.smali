.class public final synthetic Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/view/TextureViewImplementation;

.field public final synthetic f$1:Landroid/view/Surface;

.field public final synthetic f$2:Lcom/google/common/util/concurrent/ListenableFuture;

.field public final synthetic f$3:Landroidx/camera/core/SurfaceRequest;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/view/TextureViewImplementation;Landroid/view/Surface;Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/SurfaceRequest;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$0:Landroidx/camera/view/TextureViewImplementation;

    iput-object p2, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$1:Landroid/view/Surface;

    iput-object p3, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$2:Lcom/google/common/util/concurrent/ListenableFuture;

    iput-object p4, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$3:Landroidx/camera/core/SurfaceRequest;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 4

    .line 0
    iget-object v0, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$0:Landroidx/camera/view/TextureViewImplementation;

    iget-object v1, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$1:Landroid/view/Surface;

    iget-object v2, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$2:Lcom/google/common/util/concurrent/ListenableFuture;

    iget-object v3, p0, Landroidx/camera/view/TextureViewImplementation$$ExternalSyntheticLambda4;->f$3:Landroidx/camera/core/SurfaceRequest;

    invoke-virtual {v0, v1, v2, v3}, Landroidx/camera/view/TextureViewImplementation;->lambda$tryToProvidePreviewSurface$2$androidx-camera-view-TextureViewImplementation(Landroid/view/Surface;Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/SurfaceRequest;)V

    return-void
.end method
