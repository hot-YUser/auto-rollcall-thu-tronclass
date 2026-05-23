.class Lorg/opencv/android/JavaCameraView$CameraWorker;
.super Ljava/lang/Object;
.source "JavaCameraView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/android/JavaCameraView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "CameraWorker"
.end annotation


# instance fields
.field final synthetic this$0:Lorg/opencv/android/JavaCameraView;


# direct methods
.method private constructor <init>(Lorg/opencv/android/JavaCameraView;)V
    .locals 0

    .line 349
    iput-object p1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lorg/opencv/android/JavaCameraView;Lorg/opencv/android/JavaCameraView$1;)V
    .locals 0

    .line 349
    invoke-direct {p0, p1}, Lorg/opencv/android/JavaCameraView$CameraWorker;-><init>(Lorg/opencv/android/JavaCameraView;)V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 5

    .line 355
    :cond_0
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    monitor-enter v0

    .line 357
    :goto_0
    :try_start_0
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1}, Lorg/opencv/android/JavaCameraView;->access$200(Lorg/opencv/android/JavaCameraView;)Z

    move-result v1

    if-nez v1, :cond_1

    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1}, Lorg/opencv/android/JavaCameraView;->access$300(Lorg/opencv/android/JavaCameraView;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 358
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-virtual {v1}, Ljava/lang/Object;->wait()V
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    goto :goto_1

    :catch_0
    move-exception v1

    .line 361
    :try_start_1
    invoke-virtual {v1}, Ljava/lang/InterruptedException;->printStackTrace()V

    .line 363
    :cond_1
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1}, Lorg/opencv/android/JavaCameraView;->access$200(Lorg/opencv/android/JavaCameraView;)Z

    move-result v1

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-eqz v1, :cond_2

    .line 365
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1}, Lorg/opencv/android/JavaCameraView;->access$400(Lorg/opencv/android/JavaCameraView;)I

    move-result v4

    rsub-int/lit8 v4, v4, 0x1

    invoke-static {v1, v4}, Lorg/opencv/android/JavaCameraView;->access$402(Lorg/opencv/android/JavaCameraView;I)I

    .line 366
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1, v2}, Lorg/opencv/android/JavaCameraView;->access$202(Lorg/opencv/android/JavaCameraView;Z)Z

    move v2, v3

    .line 369
    :cond_2
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 371
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v0}, Lorg/opencv/android/JavaCameraView;->access$300(Lorg/opencv/android/JavaCameraView;)Z

    move-result v0

    if-nez v0, :cond_3

    if-eqz v2, :cond_3

    .line 372
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v0}, Lorg/opencv/android/JavaCameraView;->access$500(Lorg/opencv/android/JavaCameraView;)[Lorg/opencv/core/Mat;

    move-result-object v0

    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v1}, Lorg/opencv/android/JavaCameraView;->access$400(Lorg/opencv/android/JavaCameraView;)I

    move-result v1

    rsub-int/lit8 v1, v1, 0x1

    aget-object v0, v0, v1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->empty()Z

    move-result v0

    if-nez v0, :cond_3

    .line 373
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    iget-object v1, v0, Lorg/opencv/android/JavaCameraView;->mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    iget-object v2, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v2}, Lorg/opencv/android/JavaCameraView;->access$400(Lorg/opencv/android/JavaCameraView;)I

    move-result v2

    sub-int/2addr v3, v2

    aget-object v1, v1, v3

    invoke-virtual {v0, v1}, Lorg/opencv/android/JavaCameraView;->deliverAndDrawFrame(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;)V

    .line 375
    :cond_3
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$CameraWorker;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v0}, Lorg/opencv/android/JavaCameraView;->access$300(Lorg/opencv/android/JavaCameraView;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 376
    const-string v0, "JavaCameraView"

    const-string v1, "Finish processing thread"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void

    .line 369
    :goto_1
    :try_start_2
    monitor-exit v0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v1
.end method
