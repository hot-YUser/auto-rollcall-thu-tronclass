.class public Lorg/opencv/android/NativeCameraView;
.super Lorg/opencv/android/CameraBridgeViewBase;
.source "NativeCameraView.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/opencv/android/NativeCameraView$CameraWorker;,
        Lorg/opencv/android/NativeCameraView$NativeCameraFrame;,
        Lorg/opencv/android/NativeCameraView$OpenCvSizeAccessor;
    }
.end annotation


# static fields
.field public static final TAG:Ljava/lang/String; = "NativeCameraView"


# instance fields
.field protected mCamera:Lorg/opencv/videoio/VideoCapture;

.field protected mFrame:Lorg/opencv/android/NativeCameraView$NativeCameraFrame;

.field private mStopThread:Z

.field private mThread:Ljava/lang/Thread;


# direct methods
.method public constructor <init>(Landroid/content/Context;I)V
    .locals 0

    .line 31
    invoke-direct {p0, p1, p2}, Lorg/opencv/android/CameraBridgeViewBase;-><init>(Landroid/content/Context;I)V

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 0

    .line 35
    invoke-direct {p0, p1, p2}, Lorg/opencv/android/CameraBridgeViewBase;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;)V

    return-void
.end method

.method static synthetic access$100(Lorg/opencv/android/NativeCameraView;)Z
    .locals 0

    .line 21
    iget-boolean p0, p0, Lorg/opencv/android/NativeCameraView;->mStopThread:Z

    return p0
.end method

.method private initializeCamera(II)Z
    .locals 6

    const-string v0, "Try to open camera with index "

    .line 91
    monitor-enter p0

    .line 93
    :try_start_0
    iget v1, p0, Lorg/opencv/android/NativeCameraView;->mCameraIndex:I

    const/16 v2, 0x3e8

    const/4 v3, 0x0

    const/4 v4, -0x1

    if-ne v1, v4, :cond_0

    .line 94
    const-string v0, "NativeCameraView"

    const-string v1, "Try to open default camera"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 95
    new-instance v0, Lorg/opencv/videoio/VideoCapture;

    invoke-direct {v0, v3, v2}, Lorg/opencv/videoio/VideoCapture;-><init>(II)V

    iput-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    goto :goto_0

    .line 97
    :cond_0
    const-string v1, "NativeCameraView"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mCameraIndex:I

    invoke-virtual {v5, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 98
    new-instance v0, Lorg/opencv/videoio/VideoCapture;

    iget v1, p0, Lorg/opencv/android/NativeCameraView;->mCameraIndex:I

    invoke-direct {v0, v1, v2}, Lorg/opencv/videoio/VideoCapture;-><init>(II)V

    iput-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    .line 101
    :goto_0
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    if-nez v0, :cond_1

    .line 102
    monitor-exit p0

    return v3

    .line 104
    :cond_1
    invoke-virtual {v0}, Lorg/opencv/videoio/VideoCapture;->isOpened()Z

    move-result v0

    if-nez v0, :cond_2

    .line 105
    monitor-exit p0

    return v3

    .line 107
    :cond_2
    new-instance v0, Lorg/opencv/android/NativeCameraView$NativeCameraFrame;

    iget-object v1, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    invoke-direct {v0, v1}, Lorg/opencv/android/NativeCameraView$NativeCameraFrame;-><init>(Lorg/opencv/videoio/VideoCapture;)V

    iput-object v0, p0, Lorg/opencv/android/NativeCameraView;->mFrame:Lorg/opencv/android/NativeCameraView$NativeCameraFrame;

    .line 109
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    int-to-double v1, p1

    const/4 v3, 0x3

    invoke-virtual {v0, v3, v1, v2}, Lorg/opencv/videoio/VideoCapture;->set(ID)Z

    .line 110
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    int-to-double v1, p2

    const/4 v5, 0x4

    invoke-virtual {v0, v5, v1, v2}, Lorg/opencv/videoio/VideoCapture;->set(ID)Z

    .line 112
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    invoke-virtual {v0, v3}, Lorg/opencv/videoio/VideoCapture;->get(I)D

    move-result-wide v0

    double-to-int v0, v0

    iput v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameWidth:I

    .line 113
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    invoke-virtual {v0, v5}, Lorg/opencv/videoio/VideoCapture;->get(I)D

    move-result-wide v0

    double-to-int v0, v0

    iput v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameHeight:I

    .line 115
    invoke-virtual {p0}, Lorg/opencv/android/NativeCameraView;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object v0

    iget v0, v0, Landroid/view/ViewGroup$LayoutParams;->width:I

    if-ne v0, v4, :cond_3

    invoke-virtual {p0}, Lorg/opencv/android/NativeCameraView;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object v0

    iget v0, v0, Landroid/view/ViewGroup$LayoutParams;->height:I

    if-ne v0, v4, :cond_3

    int-to-float p2, p2

    .line 116
    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameHeight:I

    int-to-float v0, v0

    div-float/2addr p2, v0

    int-to-float p1, p1

    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameWidth:I

    int-to-float v0, v0

    div-float/2addr p1, v0

    invoke-static {p2, p1}, Ljava/lang/Math;->min(FF)F

    move-result p1

    iput p1, p0, Lorg/opencv/android/NativeCameraView;->mScale:F

    goto :goto_1

    :cond_3
    const/4 p1, 0x0

    .line 118
    iput p1, p0, Lorg/opencv/android/NativeCameraView;->mScale:F

    .line 120
    :goto_1
    iget-object p1, p0, Lorg/opencv/android/NativeCameraView;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    if-eqz p1, :cond_4

    .line 121
    iget-object p1, p0, Lorg/opencv/android/NativeCameraView;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    iget p2, p0, Lorg/opencv/android/NativeCameraView;->mFrameWidth:I

    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameHeight:I

    invoke-virtual {p1, p2, v0}, Lorg/opencv/android/FpsMeter;->setResolution(II)V

    .line 124
    :cond_4
    invoke-virtual {p0}, Lorg/opencv/android/NativeCameraView;->AllocateCache()V

    .line 125
    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 127
    const-string p1, "NativeCameraView"

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Selected camera frame size = ("

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameWidth:I

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ", "

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    iget v0, p0, Lorg/opencv/android/NativeCameraView;->mFrameHeight:I

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, ")"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    const/4 p1, 0x1

    return p1

    :catchall_0
    move-exception p1

    .line 125
    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method private releaseCamera()V
    .locals 1

    .line 133
    monitor-enter p0

    .line 134
    :try_start_0
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mFrame:Lorg/opencv/android/NativeCameraView$NativeCameraFrame;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Lorg/opencv/android/NativeCameraView$NativeCameraFrame;->release()V

    .line 135
    :cond_0
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    if-eqz v0, :cond_1

    invoke-virtual {v0}, Lorg/opencv/videoio/VideoCapture;->release()V

    .line 136
    :cond_1
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method


# virtual methods
.method protected connectCamera(II)Z
    .locals 1

    .line 45
    invoke-direct {p0, p1, p2}, Lorg/opencv/android/NativeCameraView;->initializeCamera(II)Z

    move-result p1

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return p1

    .line 49
    :cond_0
    new-instance p1, Ljava/lang/Thread;

    new-instance p2, Lorg/opencv/android/NativeCameraView$CameraWorker;

    const/4 v0, 0x0

    invoke-direct {p2, p0, v0}, Lorg/opencv/android/NativeCameraView$CameraWorker;-><init>(Lorg/opencv/android/NativeCameraView;Lorg/opencv/android/NativeCameraView$1;)V

    invoke-direct {p1, p2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    iput-object p1, p0, Lorg/opencv/android/NativeCameraView;->mThread:Ljava/lang/Thread;

    .line 50
    invoke-virtual {p1}, Ljava/lang/Thread;->start()V

    const/4 p1, 0x1

    return p1
.end method

.method protected disconnectCamera()V
    .locals 4

    .line 60
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView;->mThread:Ljava/lang/Thread;

    if-eqz v0, :cond_0

    const/4 v1, 0x1

    const/4 v2, 0x0

    const/4 v3, 0x0

    .line 62
    :try_start_0
    iput-boolean v1, p0, Lorg/opencv/android/NativeCameraView;->mStopThread:Z

    .line 63
    invoke-virtual {v0}, Ljava/lang/Thread;->join()V
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 65
    :try_start_1
    invoke-virtual {v0}, Ljava/lang/InterruptedException;->printStackTrace()V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 67
    :goto_0
    iput-object v3, p0, Lorg/opencv/android/NativeCameraView;->mThread:Ljava/lang/Thread;

    .line 68
    iput-boolean v2, p0, Lorg/opencv/android/NativeCameraView;->mStopThread:Z

    goto :goto_2

    .line 67
    :goto_1
    iput-object v3, p0, Lorg/opencv/android/NativeCameraView;->mThread:Ljava/lang/Thread;

    .line 68
    iput-boolean v2, p0, Lorg/opencv/android/NativeCameraView;->mStopThread:Z

    .line 69
    throw v0

    .line 73
    :cond_0
    :goto_2
    invoke-direct {p0}, Lorg/opencv/android/NativeCameraView;->releaseCamera()V

    return-void
.end method
