.class Landroidx/camera/video/internal/encoder/EncoderImpl$1;
.super Ljava/lang/Object;
.source "EncoderImpl.java"

# interfaces
.implements Landroidx/camera/core/impl/utils/futures/FutureCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/video/internal/encoder/EncoderImpl;->signalEndOfInputStream()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/utils/futures/FutureCallback<",
        "Landroidx/camera/video/internal/encoder/InputBuffer;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/video/internal/encoder/EncoderImpl;


# direct methods
.method constructor <init>(Landroidx/camera/video/internal/encoder/EncoderImpl;)V
    .locals 0

    .line 737
    iput-object p1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$1;->this$0:Landroidx/camera/video/internal/encoder/EncoderImpl;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Throwable;)V
    .locals 3

    .line 768
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$1;->this$0:Landroidx/camera/video/internal/encoder/EncoderImpl;

    const/4 v1, 0x0

    const-string v2, "Unable to acquire InputBuffer."

    invoke-virtual {v0, v1, v2, p1}, Landroidx/camera/video/internal/encoder/EncoderImpl;->handleEncodeError(ILjava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method

.method public onSuccess(Landroidx/camera/video/internal/encoder/InputBuffer;)V
    .locals 2

    .line 740
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$1;->this$0:Landroidx/camera/video/internal/encoder/EncoderImpl;

    invoke-virtual {v0}, Landroidx/camera/video/internal/encoder/EncoderImpl;->generatePresentationTimeUs()J

    move-result-wide v0

    invoke-interface {p1, v0, v1}, Landroidx/camera/video/internal/encoder/InputBuffer;->setPresentationTimeUs(J)V

    const/4 v0, 0x1

    .line 741
    invoke-interface {p1, v0}, Landroidx/camera/video/internal/encoder/InputBuffer;->setEndOfStream(Z)V

    .line 742
    invoke-interface {p1}, Landroidx/camera/video/internal/encoder/InputBuffer;->submit()Z

    .line 744
    invoke-interface {p1}, Landroidx/camera/video/internal/encoder/InputBuffer;->getTerminationFuture()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$1$1;

    invoke-direct {v0, p0}, Landroidx/camera/video/internal/encoder/EncoderImpl$1$1;-><init>(Landroidx/camera/video/internal/encoder/EncoderImpl$1;)V

    iget-object v1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$1;->this$0:Landroidx/camera/video/internal/encoder/EncoderImpl;

    iget-object v1, v1, Landroidx/camera/video/internal/encoder/EncoderImpl;->mEncoderExecutor:Ljava/util/concurrent/Executor;

    invoke-static {p1, v0, v1}, Landroidx/camera/core/impl/utils/futures/Futures;->addCallback(Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/impl/utils/futures/FutureCallback;Ljava/util/concurrent/Executor;)V

    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 737
    check-cast p1, Landroidx/camera/video/internal/encoder/InputBuffer;

    invoke-virtual {p0, p1}, Landroidx/camera/video/internal/encoder/EncoderImpl$1;->onSuccess(Landroidx/camera/video/internal/encoder/InputBuffer;)V

    return-void
.end method
