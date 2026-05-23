.class final Landroidx/camera/view/PreviewStreamStateObserver;
.super Ljava/lang/Object;
.source "PreviewStreamStateObserver.java"

# interfaces
.implements Landroidx/camera/core/impl/Observable$Observer;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/Observable$Observer<",
        "Landroidx/camera/core/impl/CameraInternal$State;",
        ">;"
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "StreamStateObserver"


# instance fields
.field private final mCameraInfoInternal:Landroidx/camera/core/impl/CameraInfoInternal;

.field mFlowFuture:Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end field

.field private mHasStartedPreviewStreamFlow:Z

.field private mPreviewStreamState:Landroidx/camera/view/PreviewView$StreamState;

.field private final mPreviewStreamStateLiveData:Landroidx/lifecycle/MutableLiveData;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/lifecycle/MutableLiveData<",
            "Landroidx/camera/view/PreviewView$StreamState;",
            ">;"
        }
    .end annotation
.end field

.field private final mPreviewViewImplementation:Landroidx/camera/view/PreviewViewImplementation;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/lifecycle/MutableLiveData;Landroidx/camera/view/PreviewViewImplementation;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CameraInfoInternal;",
            "Landroidx/lifecycle/MutableLiveData<",
            "Landroidx/camera/view/PreviewView$StreamState;",
            ">;",
            "Landroidx/camera/view/PreviewViewImplementation;",
            ")V"
        }
    .end annotation

    .line 73
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 69
    iput-boolean v0, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mHasStartedPreviewStreamFlow:Z

    .line 74
    iput-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mCameraInfoInternal:Landroidx/camera/core/impl/CameraInfoInternal;

    .line 75
    iput-object p2, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewStreamStateLiveData:Landroidx/lifecycle/MutableLiveData;

    .line 76
    iput-object p3, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewViewImplementation:Landroidx/camera/view/PreviewViewImplementation;

    .line 78
    monitor-enter p0

    .line 79
    :try_start_0
    invoke-virtual {p2}, Landroidx/lifecycle/MutableLiveData;->getValue()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/view/PreviewView$StreamState;

    iput-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewStreamState:Landroidx/camera/view/PreviewView$StreamState;

    .line 80
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method private cancelFlow()V
    .locals 2

    .line 117
    iget-object v0, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mFlowFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    if-eqz v0, :cond_0

    const/4 v1, 0x0

    .line 118
    invoke-interface {v0, v1}, Lcom/google/common/util/concurrent/ListenableFuture;->cancel(Z)Z

    const/4 v0, 0x0

    .line 119
    iput-object v0, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mFlowFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    :cond_0
    return-void
.end method

.method private startPreviewStreamStateFlow(Landroidx/camera/core/CameraInfo;)V
    .locals 4

    .line 125
    sget-object v0, Landroidx/camera/view/PreviewView$StreamState;->IDLE:Landroidx/camera/view/PreviewView$StreamState;

    invoke-virtual {p0, v0}, Landroidx/camera/view/PreviewStreamStateObserver;->updatePreviewStreamState(Landroidx/camera/view/PreviewView$StreamState;)V

    .line 127
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 129
    invoke-direct {p0, p1, v0}, Landroidx/camera/view/PreviewStreamStateObserver;->waitForCaptureResult(Landroidx/camera/core/CameraInfo;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v1

    invoke-static {v1}, Landroidx/camera/core/impl/utils/futures/FutureChain;->from(Lcom/google/common/util/concurrent/ListenableFuture;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object v1

    new-instance v2, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda1;

    invoke-direct {v2, p0}, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/view/PreviewStreamStateObserver;)V

    .line 131
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object v3

    .line 130
    invoke-virtual {v1, v2, v3}, Landroidx/camera/core/impl/utils/futures/FutureChain;->transformAsync(Landroidx/camera/core/impl/utils/futures/AsyncFunction;Ljava/util/concurrent/Executor;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object v1

    new-instance v2, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda2;

    invoke-direct {v2, p0}, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/view/PreviewStreamStateObserver;)V

    .line 135
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object v3

    .line 132
    invoke-virtual {v1, v2, v3}, Landroidx/camera/core/impl/utils/futures/FutureChain;->transform(Landroidx/arch/core/util/Function;Ljava/util/concurrent/Executor;)Landroidx/camera/core/impl/utils/futures/FutureChain;

    move-result-object v1

    iput-object v1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mFlowFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    .line 137
    new-instance v2, Landroidx/camera/view/PreviewStreamStateObserver$1;

    invoke-direct {v2, p0, v0, p1}, Landroidx/camera/view/PreviewStreamStateObserver$1;-><init>(Landroidx/camera/view/PreviewStreamStateObserver;Ljava/util/List;Landroidx/camera/core/CameraInfo;)V

    .line 155
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object p1

    .line 137
    invoke-static {v1, v2, p1}, Landroidx/camera/core/impl/utils/futures/Futures;->addCallback(Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/impl/utils/futures/FutureCallback;Ljava/util/concurrent/Executor;)V

    return-void
.end method

.method private waitForCaptureResult(Landroidx/camera/core/CameraInfo;Ljava/util/List;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/CameraInfo;",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CameraCaptureCallback;",
            ">;)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 177
    new-instance v0, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda0;

    invoke-direct {v0, p0, p1, p2}, Landroidx/camera/view/PreviewStreamStateObserver$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/view/PreviewStreamStateObserver;Landroidx/camera/core/CameraInfo;Ljava/util/List;)V

    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method


# virtual methods
.method clear()V
    .locals 0

    .line 113
    invoke-direct {p0}, Landroidx/camera/view/PreviewStreamStateObserver;->cancelFlow()V

    return-void
.end method

.method synthetic lambda$startPreviewStreamStateFlow$0$androidx-camera-view-PreviewStreamStateObserver(Ljava/lang/Void;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 130
    iget-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewViewImplementation:Landroidx/camera/view/PreviewViewImplementation;

    invoke-virtual {p1}, Landroidx/camera/view/PreviewViewImplementation;->waitForNextFrame()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method synthetic lambda$startPreviewStreamStateFlow$1$androidx-camera-view-PreviewStreamStateObserver(Ljava/lang/Void;)Ljava/lang/Void;
    .locals 0

    .line 133
    sget-object p1, Landroidx/camera/view/PreviewView$StreamState;->STREAMING:Landroidx/camera/view/PreviewView$StreamState;

    invoke-virtual {p0, p1}, Landroidx/camera/view/PreviewStreamStateObserver;->updatePreviewStreamState(Landroidx/camera/view/PreviewView$StreamState;)V

    const/4 p1, 0x0

    return-object p1
.end method

.method synthetic lambda$waitForCaptureResult$2$androidx-camera-view-PreviewStreamStateObserver(Landroidx/camera/core/CameraInfo;Ljava/util/List;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 180
    new-instance v0, Landroidx/camera/view/PreviewStreamStateObserver$2;

    invoke-direct {v0, p0, p3, p1}, Landroidx/camera/view/PreviewStreamStateObserver$2;-><init>(Landroidx/camera/view/PreviewStreamStateObserver;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;Landroidx/camera/core/CameraInfo;)V

    .line 189
    invoke-interface {p2, v0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 190
    check-cast p1, Landroidx/camera/core/impl/CameraInfoInternal;

    .line 191
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object p2

    .line 190
    invoke-interface {p1, p2, v0}, Landroidx/camera/core/impl/CameraInfoInternal;->addSessionCaptureCallback(Ljava/util/concurrent/Executor;Landroidx/camera/core/impl/CameraCaptureCallback;)V

    .line 192
    const-string p1, "waitForCaptureResult"

    return-object p1
.end method

.method public onError(Ljava/lang/Throwable;)V
    .locals 0

    .line 108
    invoke-virtual {p0}, Landroidx/camera/view/PreviewStreamStateObserver;->clear()V

    .line 109
    sget-object p1, Landroidx/camera/view/PreviewView$StreamState;->IDLE:Landroidx/camera/view/PreviewView$StreamState;

    invoke-virtual {p0, p1}, Landroidx/camera/view/PreviewStreamStateObserver;->updatePreviewStreamState(Landroidx/camera/view/PreviewView$StreamState;)V

    return-void
.end method

.method public onNewData(Landroidx/camera/core/impl/CameraInternal$State;)V
    .locals 1

    .line 86
    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->CLOSING:Landroidx/camera/core/impl/CameraInternal$State;

    if-eq p1, v0, :cond_2

    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->CLOSED:Landroidx/camera/core/impl/CameraInternal$State;

    if-eq p1, v0, :cond_2

    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->RELEASING:Landroidx/camera/core/impl/CameraInternal$State;

    if-eq p1, v0, :cond_2

    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->RELEASED:Landroidx/camera/core/impl/CameraInternal$State;

    if-ne p1, v0, :cond_0

    goto :goto_0

    .line 95
    :cond_0
    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->OPENING:Landroidx/camera/core/impl/CameraInternal$State;

    if-eq p1, v0, :cond_1

    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    if-eq p1, v0, :cond_1

    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->PENDING_OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    if-ne p1, v0, :cond_3

    .line 98
    :cond_1
    iget-boolean p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mHasStartedPreviewStreamFlow:Z

    if-nez p1, :cond_3

    .line 99
    iget-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mCameraInfoInternal:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-direct {p0, p1}, Landroidx/camera/view/PreviewStreamStateObserver;->startPreviewStreamStateFlow(Landroidx/camera/core/CameraInfo;)V

    const/4 p1, 0x1

    .line 100
    iput-boolean p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mHasStartedPreviewStreamFlow:Z

    goto :goto_1

    .line 90
    :cond_2
    :goto_0
    sget-object p1, Landroidx/camera/view/PreviewView$StreamState;->IDLE:Landroidx/camera/view/PreviewView$StreamState;

    invoke-virtual {p0, p1}, Landroidx/camera/view/PreviewStreamStateObserver;->updatePreviewStreamState(Landroidx/camera/view/PreviewView$StreamState;)V

    .line 91
    iget-boolean p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mHasStartedPreviewStreamFlow:Z

    if-eqz p1, :cond_3

    const/4 p1, 0x0

    .line 92
    iput-boolean p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mHasStartedPreviewStreamFlow:Z

    .line 93
    invoke-direct {p0}, Landroidx/camera/view/PreviewStreamStateObserver;->cancelFlow()V

    :cond_3
    :goto_1
    return-void
.end method

.method public bridge synthetic onNewData(Ljava/lang/Object;)V
    .locals 0

    .line 57
    check-cast p1, Landroidx/camera/core/impl/CameraInternal$State;

    invoke-virtual {p0, p1}, Landroidx/camera/view/PreviewStreamStateObserver;->onNewData(Landroidx/camera/core/impl/CameraInternal$State;)V

    return-void
.end method

.method updatePreviewStreamState(Landroidx/camera/view/PreviewView$StreamState;)V
    .locals 3

    .line 160
    monitor-enter p0

    .line 161
    :try_start_0
    iget-object v0, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewStreamState:Landroidx/camera/view/PreviewView$StreamState;

    invoke-virtual {v0, p1}, Landroidx/camera/view/PreviewView$StreamState;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 162
    monitor-exit p0

    return-void

    .line 164
    :cond_0
    iput-object p1, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewStreamState:Landroidx/camera/view/PreviewView$StreamState;

    .line 165
    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 167
    const-string v0, "StreamStateObserver"

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Update Preview stream state to "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 168
    iget-object v0, p0, Landroidx/camera/view/PreviewStreamStateObserver;->mPreviewStreamStateLiveData:Landroidx/lifecycle/MutableLiveData;

    invoke-virtual {v0, p1}, Landroidx/lifecycle/MutableLiveData;->postValue(Ljava/lang/Object;)V

    return-void

    :catchall_0
    move-exception p1

    .line 165
    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method
