.class Landroidx/camera/view/TextureViewImplementation$1$1;
.super Ljava/lang/Object;
.source "TextureViewImplementation.java"

# interfaces
.implements Landroidx/camera/core/impl/utils/futures/FutureCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/view/TextureViewImplementation$1;->onSurfaceTextureDestroyed(Landroid/graphics/SurfaceTexture;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/utils/futures/FutureCallback<",
        "Landroidx/camera/core/SurfaceRequest$Result;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$1:Landroidx/camera/view/TextureViewImplementation$1;

.field final synthetic val$surfaceTexture:Landroid/graphics/SurfaceTexture;


# direct methods
.method constructor <init>(Landroidx/camera/view/TextureViewImplementation$1;Landroid/graphics/SurfaceTexture;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 163
    iput-object p1, p0, Landroidx/camera/view/TextureViewImplementation$1$1;->this$1:Landroidx/camera/view/TextureViewImplementation$1;

    iput-object p2, p0, Landroidx/camera/view/TextureViewImplementation$1$1;->val$surfaceTexture:Landroid/graphics/SurfaceTexture;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Throwable;)V
    .locals 2

    .line 181
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "SurfaceReleaseFuture did not complete nicely."

    invoke-direct {v0, v1, p1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    throw v0
.end method

.method public onSuccess(Landroidx/camera/core/SurfaceRequest$Result;)V
    .locals 1

    .line 166
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest$Result;->getResultCode()I

    move-result p1

    const/4 v0, 0x3

    if-eq p1, v0, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    const-string v0, "Unexpected result from SurfaceRequest. Surface was provided twice."

    invoke-static {p1, v0}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 171
    const-string p1, "TextureViewImpl"

    const-string v0, "SurfaceTexture about to manually be destroyed"

    invoke-static {p1, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 172
    iget-object p1, p0, Landroidx/camera/view/TextureViewImplementation$1$1;->val$surfaceTexture:Landroid/graphics/SurfaceTexture;

    invoke-virtual {p1}, Landroid/graphics/SurfaceTexture;->release()V

    .line 174
    iget-object p1, p0, Landroidx/camera/view/TextureViewImplementation$1$1;->this$1:Landroidx/camera/view/TextureViewImplementation$1;

    iget-object p1, p1, Landroidx/camera/view/TextureViewImplementation$1;->this$0:Landroidx/camera/view/TextureViewImplementation;

    iget-object p1, p1, Landroidx/camera/view/TextureViewImplementation;->mDetachedSurfaceTexture:Landroid/graphics/SurfaceTexture;

    if-eqz p1, :cond_1

    .line 175
    iget-object p1, p0, Landroidx/camera/view/TextureViewImplementation$1$1;->this$1:Landroidx/camera/view/TextureViewImplementation$1;

    iget-object p1, p1, Landroidx/camera/view/TextureViewImplementation$1;->this$0:Landroidx/camera/view/TextureViewImplementation;

    const/4 v0, 0x0

    iput-object v0, p1, Landroidx/camera/view/TextureViewImplementation;->mDetachedSurfaceTexture:Landroid/graphics/SurfaceTexture;

    :cond_1
    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 163
    check-cast p1, Landroidx/camera/core/SurfaceRequest$Result;

    invoke-virtual {p0, p1}, Landroidx/camera/view/TextureViewImplementation$1$1;->onSuccess(Landroidx/camera/core/SurfaceRequest$Result;)V

    return-void
.end method
