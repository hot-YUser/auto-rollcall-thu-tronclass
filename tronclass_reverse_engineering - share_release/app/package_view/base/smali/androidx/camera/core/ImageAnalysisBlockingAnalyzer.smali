.class final Landroidx/camera/core/ImageAnalysisBlockingAnalyzer;
.super Landroidx/camera/core/ImageAnalysisAbstractAnalyzer;
.source "ImageAnalysisBlockingAnalyzer.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Landroidx/camera/core/ImageAnalysisAbstractAnalyzer;-><init>()V

    return-void
.end method


# virtual methods
.method acquireImage(Landroidx/camera/core/impl/ImageReaderProxy;)Landroidx/camera/core/ImageProxy;
    .locals 0

    .line 41
    invoke-interface {p1}, Landroidx/camera/core/impl/ImageReaderProxy;->acquireNextImage()Landroidx/camera/core/ImageProxy;

    move-result-object p1

    return-object p1
.end method

.method clearCache()V
    .locals 0

    return-void
.end method

.method onValidImageAvailable(Landroidx/camera/core/ImageProxy;)V
    .locals 2

    .line 46
    invoke-virtual {p0, p1}, Landroidx/camera/core/ImageAnalysisBlockingAnalyzer;->analyzeImage(Landroidx/camera/core/ImageProxy;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    .line 49
    new-instance v1, Landroidx/camera/core/ImageAnalysisBlockingAnalyzer$1;

    invoke-direct {v1, p0, p1}, Landroidx/camera/core/ImageAnalysisBlockingAnalyzer$1;-><init>(Landroidx/camera/core/ImageAnalysisBlockingAnalyzer;Landroidx/camera/core/ImageProxy;)V

    .line 59
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->directExecutor()Ljava/util/concurrent/Executor;

    move-result-object p1

    .line 49
    invoke-static {v0, v1, p1}, Landroidx/camera/core/impl/utils/futures/Futures;->addCallback(Lcom/google/common/util/concurrent/ListenableFuture;Landroidx/camera/core/impl/utils/futures/FutureCallback;Ljava/util/concurrent/Executor;)V

    return-void
.end method
