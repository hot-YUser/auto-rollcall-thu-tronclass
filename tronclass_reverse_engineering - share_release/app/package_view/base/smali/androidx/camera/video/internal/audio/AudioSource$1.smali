.class Landroidx/camera/video/internal/audio/AudioSource$1;
.super Ljava/lang/Object;
.source "AudioSource.java"

# interfaces
.implements Landroidx/camera/core/impl/Observable$Observer;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/video/internal/audio/AudioSource;->resetBufferProvider(Landroidx/camera/video/internal/BufferProvider;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/Observable$Observer<",
        "Landroidx/camera/video/internal/BufferProvider$State;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/video/internal/audio/AudioSource;

.field final synthetic val$bufferProvider:Landroidx/camera/video/internal/BufferProvider;


# direct methods
.method constructor <init>(Landroidx/camera/video/internal/audio/AudioSource;Landroidx/camera/video/internal/BufferProvider;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 414
    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iput-object p2, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->val$bufferProvider:Landroidx/camera/video/internal/BufferProvider;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onError(Ljava/lang/Throwable;)V
    .locals 2

    .line 432
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iget-object v0, v0, Landroidx/camera/video/internal/audio/AudioSource;->mBufferProvider:Landroidx/camera/video/internal/BufferProvider;

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->val$bufferProvider:Landroidx/camera/video/internal/BufferProvider;

    if-ne v0, v1, :cond_0

    .line 433
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    invoke-virtual {v0, p1}, Landroidx/camera/video/internal/audio/AudioSource;->notifyError(Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public onNewData(Landroidx/camera/video/internal/BufferProvider$State;)V
    .locals 2

    .line 418
    invoke-static {p1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    .line 419
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iget-object v0, v0, Landroidx/camera/video/internal/audio/AudioSource;->mBufferProvider:Landroidx/camera/video/internal/BufferProvider;

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->val$bufferProvider:Landroidx/camera/video/internal/BufferProvider;

    if-ne v0, v1, :cond_0

    .line 420
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Receive BufferProvider state change: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iget-object v1, v1, Landroidx/camera/video/internal/audio/AudioSource;->mBufferProviderState:Landroidx/camera/video/internal/BufferProvider$State;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " to "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "AudioSource"

    invoke-static {v1, v0}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 422
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iget-object v0, v0, Landroidx/camera/video/internal/audio/AudioSource;->mBufferProviderState:Landroidx/camera/video/internal/BufferProvider$State;

    if-eq v0, p1, :cond_0

    .line 423
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    iput-object p1, v0, Landroidx/camera/video/internal/audio/AudioSource;->mBufferProviderState:Landroidx/camera/video/internal/BufferProvider$State;

    .line 424
    iget-object p1, p0, Landroidx/camera/video/internal/audio/AudioSource$1;->this$0:Landroidx/camera/video/internal/audio/AudioSource;

    invoke-virtual {p1}, Landroidx/camera/video/internal/audio/AudioSource;->updateSendingAudio()V

    :cond_0
    return-void
.end method

.method public bridge synthetic onNewData(Ljava/lang/Object;)V
    .locals 0

    .line 414
    check-cast p1, Landroidx/camera/video/internal/BufferProvider$State;

    invoke-virtual {p0, p1}, Landroidx/camera/video/internal/audio/AudioSource$1;->onNewData(Landroidx/camera/video/internal/BufferProvider$State;)V

    return-void
.end method
