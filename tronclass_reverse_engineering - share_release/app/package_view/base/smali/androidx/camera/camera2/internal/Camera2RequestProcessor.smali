.class public Landroidx/camera/camera2/internal/Camera2RequestProcessor;
.super Ljava/lang/Object;
.source "Camera2RequestProcessor.java"

# interfaces
.implements Landroidx/camera/core/impl/RequestProcessor;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/internal/Camera2RequestProcessor$Camera2CallbackWrapper;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "Camera2RequestProcessor"


# instance fields
.field private final mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

.field private volatile mIsClosed:Z

.field private final mProcessorSurfaces:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/SessionProcessorSurface;",
            ">;"
        }
    .end annotation
.end field

.field private volatile mSessionConfig:Landroidx/camera/core/impl/SessionConfig;


# direct methods
.method public constructor <init>(Landroidx/camera/camera2/internal/CaptureSession;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/camera2/internal/CaptureSession;",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/SessionProcessorSurface;",
            ">;)V"
        }
    .end annotation

    .line 74
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 69
    iput-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    .line 75
    iget-object v1, p1, Landroidx/camera/camera2/internal/CaptureSession;->mState:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v2, Landroidx/camera/camera2/internal/CaptureSession$State;->OPENED:Landroidx/camera/camera2/internal/CaptureSession$State;

    if-ne v1, v2, :cond_0

    const/4 v0, 0x1

    :cond_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "CaptureSession state must be OPENED. Current state:"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p1, Landroidx/camera/camera2/internal/CaptureSession;->mState:Landroidx/camera/camera2/internal/CaptureSession$State;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 77
    iput-object p1, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

    .line 78
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1, p2}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    invoke-static {p1}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mProcessorSurfaces:Ljava/util/List;

    return-void
.end method

.method private areRequestsValid(Ljava/util/List;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/RequestProcessor$Request;",
            ">;)Z"
        }
    .end annotation

    .line 97
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/RequestProcessor$Request;

    .line 98
    invoke-direct {p0, v0}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->isRequestValid(Landroidx/camera/core/impl/RequestProcessor$Request;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    :cond_1
    const/4 p1, 0x1

    return p1
.end method

.method private findSurface(I)Landroidx/camera/core/impl/DeferrableSurface;
    .locals 3

    .line 298
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mProcessorSurfaces:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/impl/SessionProcessorSurface;

    .line 299
    invoke-virtual {v1}, Landroidx/camera/core/impl/SessionProcessorSurface;->getOutputConfigId()I

    move-result v2

    if-ne v2, p1, :cond_0

    return-object v1

    :cond_1
    const/4 p1, 0x0

    return-object p1
.end method

.method private isRequestValid(Landroidx/camera/core/impl/RequestProcessor$Request;)Z
    .locals 4

    .line 106
    invoke-interface {p1}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTargetOutputConfigIds()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v0

    const/4 v1, 0x0

    const-string v2, "Camera2RequestProcessor"

    if-eqz v0, :cond_0

    .line 107
    const-string p1, "Unable to submit the RequestProcessor.Request: empty targetOutputConfigIds"

    invoke-static {v2, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;)V

    return v1

    .line 111
    :cond_0
    invoke-interface {p1}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTargetOutputConfigIds()Ljava/util/List;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    .line 112
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v3

    invoke-direct {p0, v3}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->findSurface(I)Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object v3

    if-nez v3, :cond_1

    .line 113
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v3, "Unable to submit the RequestProcessor.Request: targetOutputConfigId("

    invoke-direct {p1, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ") is not a valid id"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v2, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;)V

    return v1

    :cond_2
    const/4 p1, 0x1

    return p1
.end method


# virtual methods
.method public abortCaptures()V
    .locals 1

    .line 197
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    if-eqz v0, :cond_0

    return-void

    .line 200
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/CaptureSession;->abortCaptures()V

    return-void
.end method

.method public close()V
    .locals 1

    const/4 v0, 0x1

    .line 85
    iput-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    return-void
.end method

.method findOutputConfigId(Landroid/view/Surface;)I
    .locals 3

    .line 282
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mProcessorSurfaces:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :catch_0
    :cond_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/impl/SessionProcessorSurface;

    .line 284
    :try_start_0
    invoke-virtual {v1}, Landroidx/camera/core/impl/SessionProcessorSurface;->getSurface()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v2

    invoke-interface {v2}, Lcom/google/common/util/concurrent/ListenableFuture;->get()Ljava/lang/Object;

    move-result-object v2

    if-ne v2, p1, :cond_0

    .line 285
    invoke-virtual {v1}, Landroidx/camera/core/impl/SessionProcessorSurface;->getOutputConfigId()I

    move-result p1
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/util/concurrent/ExecutionException; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :cond_1
    const/4 p1, -0x1

    return p1
.end method

.method public setRepeating(Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
    .locals 4

    .line 163
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    if-nez v0, :cond_4

    invoke-direct {p0, p1}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->isRequestValid(Landroidx/camera/core/impl/RequestProcessor$Request;)Z

    move-result v0

    if-nez v0, :cond_0

    goto/16 :goto_3

    .line 167
    :cond_0
    new-instance v0, Landroidx/camera/core/impl/SessionConfig$Builder;

    invoke-direct {v0}, Landroidx/camera/core/impl/SessionConfig$Builder;-><init>()V

    .line 168
    invoke-interface {p1}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTemplateId()I

    move-result v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->setTemplateType(I)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 169
    invoke-interface {p1}, Landroidx/camera/core/impl/RequestProcessor$Request;->getParameters()Landroidx/camera/core/impl/Config;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->setImplementationOptions(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 170
    new-instance v1, Landroidx/camera/camera2/internal/Camera2RequestProcessor$Camera2CallbackWrapper;

    const/4 v2, 0x1

    invoke-direct {v1, p0, p1, p2, v2}, Landroidx/camera/camera2/internal/Camera2RequestProcessor$Camera2CallbackWrapper;-><init>(Landroidx/camera/camera2/internal/Camera2RequestProcessor;Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;Z)V

    invoke-static {v1}, Landroidx/camera/camera2/internal/CaptureCallbackContainer;->create(Landroid/hardware/camera2/CameraCaptureSession$CaptureCallback;)Landroidx/camera/camera2/internal/CaptureCallbackContainer;

    move-result-object p2

    invoke-virtual {v0, p2}, Landroidx/camera/core/impl/SessionConfig$Builder;->addCameraCaptureCallback(Landroidx/camera/core/impl/CameraCaptureCallback;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 173
    iget-object p2, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    if-eqz p2, :cond_2

    .line 177
    iget-object p2, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    invoke-virtual {p2}, Landroidx/camera/core/impl/SessionConfig;->getRepeatingCameraCaptureCallbacks()Ljava/util/List;

    move-result-object p2

    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :goto_0
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/impl/CameraCaptureCallback;

    .line 178
    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->addCameraCaptureCallback(Landroidx/camera/core/impl/CameraCaptureCallback;)Landroidx/camera/core/impl/SessionConfig$Builder;

    goto :goto_0

    .line 182
    :cond_1
    iget-object p2, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    invoke-virtual {p2}, Landroidx/camera/core/impl/SessionConfig;->getRepeatingCaptureConfig()Landroidx/camera/core/impl/CaptureConfig;

    move-result-object p2

    invoke-virtual {p2}, Landroidx/camera/core/impl/CaptureConfig;->getTagBundle()Landroidx/camera/core/impl/TagBundle;

    move-result-object p2

    .line 183
    invoke-virtual {p2}, Landroidx/camera/core/impl/TagBundle;->listKeys()Ljava/util/Set;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_1
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 184
    invoke-virtual {p2, v2}, Landroidx/camera/core/impl/TagBundle;->getTag(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v0, v2, v3}, Landroidx/camera/core/impl/SessionConfig$Builder;->addTag(Ljava/lang/String;Ljava/lang/Object;)Landroidx/camera/core/impl/SessionConfig$Builder;

    goto :goto_1

    .line 188
    :cond_2
    invoke-interface {p1}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTargetOutputConfigIds()Ljava/util/List;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_2
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result p2

    if-eqz p2, :cond_3

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Ljava/lang/Integer;

    .line 189
    invoke-virtual {p2}, Ljava/lang/Integer;->intValue()I

    move-result p2

    invoke-direct {p0, p2}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->findSurface(I)Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object p2

    invoke-virtual {v0, p2}, Landroidx/camera/core/impl/SessionConfig$Builder;->addSurface(Landroidx/camera/core/impl/DeferrableSurface;)Landroidx/camera/core/impl/SessionConfig$Builder;

    goto :goto_2

    .line 192
    :cond_3
    iget-object p1, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

    invoke-virtual {v0}, Landroidx/camera/core/impl/SessionConfig$Builder;->build()Landroidx/camera/core/impl/SessionConfig;

    move-result-object p2

    invoke-virtual {p1, p2}, Landroidx/camera/camera2/internal/CaptureSession;->issueRepeatingCaptureRequests(Landroidx/camera/core/impl/SessionConfig;)I

    move-result p1

    return p1

    :cond_4
    :goto_3
    const/4 p1, -0x1

    return p1
.end method

.method public stopRepeating()V
    .locals 1

    .line 205
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    if-eqz v0, :cond_0

    return-void

    .line 208
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

    invoke-virtual {v0}, Landroidx/camera/camera2/internal/CaptureSession;->stopRepeating()V

    return-void
.end method

.method public submit(Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
    .locals 2

    const/4 v0, 0x1

    .line 126
    new-array v0, v0, [Landroidx/camera/core/impl/RequestProcessor$Request;

    const/4 v1, 0x0

    aput-object p1, v0, v1

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    invoke-virtual {p0, p1, p2}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->submit(Ljava/util/List;Landroidx/camera/core/impl/RequestProcessor$Callback;)I

    move-result p1

    return p1
.end method

.method public submit(Ljava/util/List;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/RequestProcessor$Request;",
            ">;",
            "Landroidx/camera/core/impl/RequestProcessor$Callback;",
            ")I"
        }
    .end annotation

    .line 133
    iget-boolean v0, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mIsClosed:Z

    if-nez v0, :cond_3

    invoke-direct {p0, p1}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->areRequestsValid(Ljava/util/List;)Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_2

    .line 137
    :cond_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 139
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    const/4 v1, 0x1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroidx/camera/core/impl/RequestProcessor$Request;

    .line 140
    new-instance v3, Landroidx/camera/core/impl/CaptureConfig$Builder;

    invoke-direct {v3}, Landroidx/camera/core/impl/CaptureConfig$Builder;-><init>()V

    .line 141
    invoke-interface {v2}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTemplateId()I

    move-result v4

    invoke-virtual {v3, v4}, Landroidx/camera/core/impl/CaptureConfig$Builder;->setTemplateType(I)V

    .line 142
    invoke-interface {v2}, Landroidx/camera/core/impl/RequestProcessor$Request;->getParameters()Landroidx/camera/core/impl/Config;

    move-result-object v4

    invoke-virtual {v3, v4}, Landroidx/camera/core/impl/CaptureConfig$Builder;->setImplementationOptions(Landroidx/camera/core/impl/Config;)V

    .line 143
    new-instance v4, Landroidx/camera/camera2/internal/Camera2RequestProcessor$Camera2CallbackWrapper;

    invoke-direct {v4, p0, v2, p2, v1}, Landroidx/camera/camera2/internal/Camera2RequestProcessor$Camera2CallbackWrapper;-><init>(Landroidx/camera/camera2/internal/Camera2RequestProcessor;Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;Z)V

    .line 144
    invoke-static {v4}, Landroidx/camera/camera2/internal/CaptureCallbackContainer;->create(Landroid/hardware/camera2/CameraCaptureSession$CaptureCallback;)Landroidx/camera/camera2/internal/CaptureCallbackContainer;

    move-result-object v1

    .line 143
    invoke-virtual {v3, v1}, Landroidx/camera/core/impl/CaptureConfig$Builder;->addCameraCaptureCallback(Landroidx/camera/core/impl/CameraCaptureCallback;)V

    .line 151
    invoke-interface {v2}, Landroidx/camera/core/impl/RequestProcessor$Request;->getTargetOutputConfigIds()Ljava/util/List;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_1
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    .line 152
    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    invoke-direct {p0, v2}, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->findSurface(I)Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object v2

    invoke-virtual {v3, v2}, Landroidx/camera/core/impl/CaptureConfig$Builder;->addSurface(Landroidx/camera/core/impl/DeferrableSurface;)V

    goto :goto_1

    .line 154
    :cond_1
    invoke-virtual {v3}, Landroidx/camera/core/impl/CaptureConfig$Builder;->build()Landroidx/camera/core/impl/CaptureConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    const/4 v1, 0x0

    goto :goto_0

    .line 156
    :cond_2
    iget-object p1, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mCaptureSession:Landroidx/camera/camera2/internal/CaptureSession;

    invoke-virtual {p1, v0}, Landroidx/camera/camera2/internal/CaptureSession;->issueBurstCaptureRequest(Ljava/util/List;)I

    move-result p1

    return p1

    :cond_3
    :goto_2
    const/4 p1, -0x1

    return p1
.end method

.method public updateSessionConfig(Landroidx/camera/core/impl/SessionConfig;)V
    .locals 0

    .line 93
    iput-object p1, p0, Landroidx/camera/camera2/internal/Camera2RequestProcessor;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    return-void
.end method
