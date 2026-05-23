.class Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;
.super Ljava/lang/Object;
.source "Camera2CapturePipeline.java"

# interfaces
.implements Landroidx/camera/camera2/internal/Camera2CameraControlImpl$CaptureResultListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/Camera2CapturePipeline;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "ResultListener"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;
    }
.end annotation


# static fields
.field static final NO_TIMEOUT:J


# instance fields
.field private final mChecker:Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;

.field private mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Landroid/hardware/camera2/TotalCaptureResult;",
            ">;"
        }
    .end annotation
.end field

.field private final mFuture:Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroid/hardware/camera2/TotalCaptureResult;",
            ">;"
        }
    .end annotation
.end field

.field private final mTimeLimitNs:J

.field private volatile mTimestampOfFirstUpdateNs:Ljava/lang/Long;


# direct methods
.method constructor <init>(JLandroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;)V
    .locals 1

    .line 705
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 691
    new-instance v0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$$ExternalSyntheticLambda0;

    invoke-direct {v0, p0}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;)V

    .line 692
    invoke-static {v0}, Landroidx/concurrent/futures/CallbackToFutureAdapter;->getFuture(Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    const/4 v0, 0x0

    .line 698
    iput-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimestampOfFirstUpdateNs:Ljava/lang/Long;

    .line 706
    iput-wide p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimeLimitNs:J

    .line 707
    iput-object p3, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mChecker:Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;

    return-void
.end method


# virtual methods
.method public getFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroid/hardware/camera2/TotalCaptureResult;",
            ">;"
        }
    .end annotation

    .line 712
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mFuture:Lcom/google/common/util/concurrent/ListenableFuture;

    return-object v0
.end method

.method synthetic lambda$new$0$androidx-camera-camera2-internal-Camera2CapturePipeline$ResultListener(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 693
    iput-object p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 694
    const-string p1, "waitFor3AResult"

    return-object p1
.end method

.method public onCaptureResult(Landroid/hardware/camera2/TotalCaptureResult;)Z
    .locals 8

    .line 717
    sget-object v0, Landroid/hardware/camera2/CaptureResult;->SENSOR_TIMESTAMP:Landroid/hardware/camera2/CaptureResult$Key;

    invoke-virtual {p1, v0}, Landroid/hardware/camera2/TotalCaptureResult;->get(Landroid/hardware/camera2/CaptureResult$Key;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Long;

    if-eqz v0, :cond_0

    .line 718
    iget-object v1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimestampOfFirstUpdateNs:Ljava/lang/Long;

    if-nez v1, :cond_0

    .line 719
    iput-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimestampOfFirstUpdateNs:Ljava/lang/Long;

    .line 722
    :cond_0
    iget-object v1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimestampOfFirstUpdateNs:Ljava/lang/Long;

    const-wide/16 v2, 0x0

    .line 723
    iget-wide v4, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimeLimitNs:J

    cmp-long v2, v2, v4

    const/4 v3, 0x1

    if-eqz v2, :cond_1

    if-eqz v1, :cond_1

    if-eqz v0, :cond_1

    .line 725
    invoke-virtual {v0}, Ljava/lang/Long;->longValue()J

    move-result-wide v4

    invoke-virtual {v1}, Ljava/lang/Long;->longValue()J

    move-result-wide v6

    sub-long/2addr v4, v6

    iget-wide v6, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mTimeLimitNs:J

    cmp-long v2, v4, v6

    if-lez v2, :cond_1

    .line 726
    iget-object p1, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 v2, 0x0

    invoke-virtual {p1, v2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    .line 727
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v2, "Wait for capture result timeout, current:"

    invoke-direct {p1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " first: "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v0, "Camera2CapturePipeline"

    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    return v3

    .line 732
    :cond_1
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mChecker:Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;

    if-eqz v0, :cond_2

    invoke-interface {v0, p1}, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener$Checker;->check(Landroid/hardware/camera2/TotalCaptureResult;)Z

    move-result v0

    if-nez v0, :cond_2

    const/4 p1, 0x0

    return p1

    .line 736
    :cond_2
    iget-object v0, p0, Landroidx/camera/camera2/internal/Camera2CapturePipeline$ResultListener;->mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    invoke-virtual {v0, p1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    return v3
.end method
