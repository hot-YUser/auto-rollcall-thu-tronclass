.class Landroidx/camera/core/imagecapture/SingleBundlingNode$1;
.super Ljava/lang/Object;
.source "SingleBundlingNode.java"

# interfaces
.implements Landroidx/camera/core/impl/utils/futures/FutureCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/imagecapture/SingleBundlingNode;->trackIncomingRequest(Landroidx/camera/core/imagecapture/ProcessingRequest;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/utils/futures/FutureCallback<",
        "Ljava/lang/Void;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/imagecapture/SingleBundlingNode;

.field final synthetic val$request:Landroidx/camera/core/imagecapture/ProcessingRequest;


# direct methods
.method constructor <init>(Landroidx/camera/core/imagecapture/SingleBundlingNode;Landroidx/camera/core/imagecapture/ProcessingRequest;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 73
    iput-object p1, p0, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->this$0:Landroidx/camera/core/imagecapture/SingleBundlingNode;

    iput-object p2, p0, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->val$request:Landroidx/camera/core/imagecapture/ProcessingRequest;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Throwable;)V
    .locals 1

    .line 81
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 82
    iget-object p1, p0, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->val$request:Landroidx/camera/core/imagecapture/ProcessingRequest;

    iget-object v0, p0, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->this$0:Landroidx/camera/core/imagecapture/SingleBundlingNode;

    iget-object v0, v0, Landroidx/camera/core/imagecapture/SingleBundlingNode;->mPendingRequest:Landroidx/camera/core/imagecapture/ProcessingRequest;

    if-ne p1, v0, :cond_0

    .line 83
    iget-object p1, p0, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->this$0:Landroidx/camera/core/imagecapture/SingleBundlingNode;

    const/4 v0, 0x0

    iput-object v0, p1, Landroidx/camera/core/imagecapture/SingleBundlingNode;->mPendingRequest:Landroidx/camera/core/imagecapture/ProcessingRequest;

    :cond_0
    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 73
    check-cast p1, Ljava/lang/Void;

    invoke-virtual {p0, p1}, Landroidx/camera/core/imagecapture/SingleBundlingNode$1;->onSuccess(Ljava/lang/Void;)V

    return-void
.end method

.method public onSuccess(Ljava/lang/Void;)V
    .locals 0

    return-void
.end method
