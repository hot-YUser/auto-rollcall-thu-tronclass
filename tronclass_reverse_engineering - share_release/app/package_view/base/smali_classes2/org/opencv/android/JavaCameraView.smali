.class public Lorg/opencv/android/JavaCameraView;
.super Lorg/opencv/android/CameraBridgeViewBase;
.source "JavaCameraView.java"

# interfaces
.implements Landroid/hardware/Camera$PreviewCallback;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/opencv/android/JavaCameraView$JavaCameraSizeAccessor;,
        Lorg/opencv/android/JavaCameraView$JavaCameraFrame;,
        Lorg/opencv/android/JavaCameraView$CameraWorker;
    }
.end annotation


# static fields
.field private static final MAGIC_TEXTURE_ID:I = 0xa

.field private static final TAG:Ljava/lang/String; = "JavaCameraView"


# instance fields
.field private mBuffer:[B

.field protected mCamera:Landroid/hardware/Camera;

.field protected mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

.field private mCameraFrameReady:Z

.field private mChainIdx:I

.field private mFrameChain:[Lorg/opencv/core/Mat;

.field private mPreviewFormat:I

.field private mStopThread:Z

.field private mSurfaceTexture:Landroid/graphics/SurfaceTexture;

.field private mThread:Ljava/lang/Thread;


# direct methods
.method public constructor <init>(Landroid/content/Context;I)V
    .locals 0

    .line 62
    invoke-direct {p0, p1, p2}, Lorg/opencv/android/CameraBridgeViewBase;-><init>(Landroid/content/Context;I)V

    const/4 p1, 0x0

    .line 37
    iput p1, p0, Lorg/opencv/android/JavaCameraView;->mChainIdx:I

    const/16 p2, 0x11

    .line 44
    iput p2, p0, Lorg/opencv/android/JavaCameraView;->mPreviewFormat:I

    .line 249
    iput-boolean p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 0

    .line 66
    invoke-direct {p0, p1, p2}, Lorg/opencv/android/CameraBridgeViewBase;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;)V

    const/4 p1, 0x0

    .line 37
    iput p1, p0, Lorg/opencv/android/JavaCameraView;->mChainIdx:I

    const/16 p2, 0x11

    .line 44
    iput p2, p0, Lorg/opencv/android/JavaCameraView;->mPreviewFormat:I

    .line 249
    iput-boolean p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    return-void
.end method

.method static synthetic access$100(Lorg/opencv/android/JavaCameraView;)I
    .locals 0

    .line 30
    iget p0, p0, Lorg/opencv/android/JavaCameraView;->mPreviewFormat:I

    return p0
.end method

.method static synthetic access$200(Lorg/opencv/android/JavaCameraView;)Z
    .locals 0

    .line 30
    iget-boolean p0, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    return p0
.end method

.method static synthetic access$202(Lorg/opencv/android/JavaCameraView;Z)Z
    .locals 0

    .line 30
    iput-boolean p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    return p1
.end method

.method static synthetic access$300(Lorg/opencv/android/JavaCameraView;)Z
    .locals 0

    .line 30
    iget-boolean p0, p0, Lorg/opencv/android/JavaCameraView;->mStopThread:Z

    return p0
.end method

.method static synthetic access$400(Lorg/opencv/android/JavaCameraView;)I
    .locals 0

    .line 30
    iget p0, p0, Lorg/opencv/android/JavaCameraView;->mChainIdx:I

    return p0
.end method

.method static synthetic access$402(Lorg/opencv/android/JavaCameraView;I)I
    .locals 0

    .line 30
    iput p1, p0, Lorg/opencv/android/JavaCameraView;->mChainIdx:I

    return p1
.end method

.method static synthetic access$500(Lorg/opencv/android/JavaCameraView;)[Lorg/opencv/core/Mat;
    .locals 0

    .line 30
    iget-object p0, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    return-object p0
.end method


# virtual methods
.method protected connectCamera(II)Z
    .locals 2

    .line 258
    const-string v0, "Connecting to camera"

    const-string v1, "JavaCameraView"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 259
    invoke-virtual {p0, p1, p2}, Lorg/opencv/android/JavaCameraView;->initializeCamera(II)Z

    move-result p1

    const/4 p2, 0x0

    if-nez p1, :cond_0

    return p2

    .line 262
    :cond_0
    iput-boolean p2, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    .line 265
    const-string p1, "Starting processing thread"

    invoke-static {v1, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 266
    iput-boolean p2, p0, Lorg/opencv/android/JavaCameraView;->mStopThread:Z

    .line 267
    new-instance p1, Ljava/lang/Thread;

    new-instance p2, Lorg/opencv/android/JavaCameraView$CameraWorker;

    const/4 v0, 0x0

    invoke-direct {p2, p0, v0}, Lorg/opencv/android/JavaCameraView$CameraWorker;-><init>(Lorg/opencv/android/JavaCameraView;Lorg/opencv/android/JavaCameraView$1;)V

    invoke-direct {p1, p2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    iput-object p1, p0, Lorg/opencv/android/JavaCameraView;->mThread:Ljava/lang/Thread;

    .line 268
    invoke-virtual {p1}, Ljava/lang/Thread;->start()V

    const/4 p1, 0x1

    return p1
.end method

.method protected disconnectCamera()V
    .locals 3

    .line 278
    const-string v0, "JavaCameraView"

    const-string v1, "Disconnecting from camera"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    const/4 v0, 0x1

    const/4 v1, 0x0

    .line 280
    :try_start_0
    iput-boolean v0, p0, Lorg/opencv/android/JavaCameraView;->mStopThread:Z

    .line 281
    const-string v0, "JavaCameraView"

    const-string v2, "Notify thread"

    invoke-static {v0, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 282
    monitor-enter p0
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 283
    :try_start_1
    invoke-virtual {p0}, Ljava/lang/Object;->notify()V

    .line 284
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 285
    :try_start_2
    const-string v0, "JavaCameraView"

    const-string v2, "Waiting for thread"

    invoke-static {v0, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 286
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mThread:Ljava/lang/Thread;

    if-eqz v0, :cond_0

    .line 287
    invoke-virtual {v0}, Ljava/lang/Thread;->join()V
    :try_end_2
    .catch Ljava/lang/InterruptedException; {:try_start_2 .. :try_end_2} :catch_0
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    goto :goto_0

    :catchall_0
    move-exception v0

    .line 284
    :try_start_3
    monitor-exit p0
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    :try_start_4
    throw v0
    :try_end_4
    .catch Ljava/lang/InterruptedException; {:try_start_4 .. :try_end_4} :catch_0
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    :catchall_1
    move-exception v0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 289
    :try_start_5
    invoke-virtual {v0}, Ljava/lang/InterruptedException;->printStackTrace()V
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    .line 291
    :cond_0
    :goto_0
    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mThread:Ljava/lang/Thread;

    .line 295
    invoke-virtual {p0}, Lorg/opencv/android/JavaCameraView;->releaseCamera()V

    const/4 v0, 0x0

    .line 297
    iput-boolean v0, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    return-void

    .line 291
    :goto_1
    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mThread:Ljava/lang/Thread;

    .line 292
    throw v0
.end method

.method protected initializeCamera(II)Z
    .locals 9

    const-string v0, "Camera is not available (in use or does not exist): "

    .line 70
    const-string v1, "JavaCameraView"

    const-string v2, "Initialize java camera"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 72
    monitor-enter p0

    const/4 v1, 0x0

    .line 73
    :try_start_0
    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    .line 75
    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mCameraIndex:I

    const/4 v2, -0x1

    const/4 v3, 0x0

    const/4 v4, 0x1

    if-ne v1, v2, :cond_1

    .line 76
    const-string v1, "JavaCameraView"

    const-string v5, "Trying to open camera with old open()"

    invoke-static {v1, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 78
    :try_start_1
    invoke-static {}, Landroid/hardware/Camera;->open()Landroid/hardware/Camera;

    move-result-object v1

    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 81
    :try_start_2
    const-string v5, "JavaCameraView"

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v6, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 84
    :goto_0
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    if-nez v0, :cond_8

    move v0, v3

    move v1, v0

    .line 86
    :goto_1
    invoke-static {}, Landroid/hardware/Camera;->getNumberOfCameras()I

    move-result v5

    if-ge v0, v5, :cond_8

    .line 87
    const-string v5, "JavaCameraView"

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Trying to open camera with new open("

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v7

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-string v7, ")"

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    .line 89
    :try_start_3
    invoke-static {v0}, Landroid/hardware/Camera;->open(I)Landroid/hardware/Camera;

    move-result-object v5

    iput-object v5, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;
    :try_end_3
    .catch Ljava/lang/RuntimeException; {:try_start_3 .. :try_end_3} :catch_1
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    move v1, v4

    goto :goto_2

    :catch_1
    move-exception v5

    .line 92
    :try_start_4
    const-string v6, "JavaCameraView"

    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7}, Ljava/lang/StringBuilder;-><init>()V

    const-string v8, "Camera #"

    invoke-virtual {v7, v8}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v7

    invoke-virtual {v7, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v7

    const-string v8, "failed to open: "

    invoke-virtual {v7, v8}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v7

    invoke-virtual {v5}, Ljava/lang/RuntimeException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v7, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v6, v5}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    :goto_2
    if-eqz v1, :cond_0

    goto/16 :goto_7

    :cond_0
    add-int/lit8 v0, v0, 0x1

    goto :goto_1

    .line 99
    :cond_1
    iget v0, p0, Lorg/opencv/android/JavaCameraView;->mCameraIndex:I

    .line 100
    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mCameraIndex:I

    const/16 v5, 0x62

    const/16 v6, 0x63

    if-ne v1, v6, :cond_3

    .line 101
    const-string v1, "JavaCameraView"

    const-string v7, "Trying to open back camera"

    invoke-static {v1, v7}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 102
    new-instance v1, Landroid/hardware/Camera$CameraInfo;

    invoke-direct {v1}, Landroid/hardware/Camera$CameraInfo;-><init>()V

    move v7, v3

    .line 103
    :goto_3
    invoke-static {}, Landroid/hardware/Camera;->getNumberOfCameras()I

    move-result v8

    if-ge v7, v8, :cond_5

    .line 104
    invoke-static {v7, v1}, Landroid/hardware/Camera;->getCameraInfo(ILandroid/hardware/Camera$CameraInfo;)V

    .line 105
    iget v8, v1, Landroid/hardware/Camera$CameraInfo;->facing:I

    if-nez v8, :cond_2

    goto :goto_5

    :cond_2
    add-int/lit8 v7, v7, 0x1

    goto :goto_3

    .line 110
    :cond_3
    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mCameraIndex:I

    if-ne v1, v5, :cond_5

    .line 111
    const-string v1, "JavaCameraView"

    const-string v7, "Trying to open front camera"

    invoke-static {v1, v7}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 112
    new-instance v1, Landroid/hardware/Camera$CameraInfo;

    invoke-direct {v1}, Landroid/hardware/Camera$CameraInfo;-><init>()V

    move v7, v3

    .line 113
    :goto_4
    invoke-static {}, Landroid/hardware/Camera;->getNumberOfCameras()I

    move-result v8

    if-ge v7, v8, :cond_5

    .line 114
    invoke-static {v7, v1}, Landroid/hardware/Camera;->getCameraInfo(ILandroid/hardware/Camera$CameraInfo;)V

    .line 115
    iget v8, v1, Landroid/hardware/Camera$CameraInfo;->facing:I

    if-ne v8, v4, :cond_4

    :goto_5
    move v0, v7

    goto :goto_6

    :cond_4
    add-int/lit8 v7, v7, 0x1

    goto :goto_4

    :cond_5
    :goto_6
    if-ne v0, v6, :cond_6

    .line 122
    const-string v0, "JavaCameraView"

    const-string v1, "Back camera not found!"

    invoke-static {v0, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_7

    :cond_6
    if-ne v0, v5, :cond_7

    .line 124
    const-string v0, "JavaCameraView"

    const-string v1, "Front camera not found!"

    invoke-static {v0, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_7

    .line 126
    :cond_7
    const-string v1, "JavaCameraView"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "Trying to open camera with new open("

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v6, ")"

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v1, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_0

    .line 128
    :try_start_5
    invoke-static {v0}, Landroid/hardware/Camera;->open(I)Landroid/hardware/Camera;

    move-result-object v1

    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;
    :try_end_5
    .catch Ljava/lang/RuntimeException; {:try_start_5 .. :try_end_5} :catch_2
    .catchall {:try_start_5 .. :try_end_5} :catchall_0

    goto :goto_7

    :catch_2
    move-exception v1

    .line 130
    :try_start_6
    const-string v5, "JavaCameraView"

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Camera #"

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v6, "failed to open: "

    invoke-virtual {v0, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v1}, Ljava/lang/RuntimeException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 136
    :cond_8
    :goto_7
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    if-nez v0, :cond_9

    .line 137
    monitor-exit p0
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_0

    return v3

    .line 141
    :cond_9
    :try_start_7
    invoke-virtual {v0}, Landroid/hardware/Camera;->getParameters()Landroid/hardware/Camera$Parameters;

    move-result-object v0

    .line 142
    const-string v1, "JavaCameraView"

    const-string v5, "getSupportedPreviewSizes()"

    invoke-static {v1, v5}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 143
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getSupportedPreviewSizes()Ljava/util/List;

    move-result-object v1

    if-eqz v1, :cond_11

    .line 147
    new-instance v5, Lorg/opencv/android/JavaCameraView$JavaCameraSizeAccessor;

    invoke-direct {v5}, Lorg/opencv/android/JavaCameraView$JavaCameraSizeAccessor;-><init>()V

    invoke-virtual {p0, v1, v5, p1, p2}, Lorg/opencv/android/JavaCameraView;->calculateCameraFrameSize(Ljava/util/List;Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;II)Lorg/opencv/core/Size;

    move-result-object v1

    .line 150
    sget-object v5, Landroid/os/Build;->FINGERPRINT:Ljava/lang/String;

    const-string v6, "generic"

    invoke-virtual {v5, v6}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->FINGERPRINT:Ljava/lang/String;

    const-string v6, "unknown"

    .line 151
    invoke-virtual {v5, v6}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->MODEL:Ljava/lang/String;

    const-string v6, "google_sdk"

    .line 152
    invoke-virtual {v5, v6}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->MODEL:Ljava/lang/String;

    const-string v6, "Emulator"

    .line 153
    invoke-virtual {v5, v6}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->MODEL:Ljava/lang/String;

    const-string v6, "Android SDK built for x86"

    .line 154
    invoke-virtual {v5, v6}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->MANUFACTURER:Ljava/lang/String;

    const-string v6, "Genymotion"

    .line 155
    invoke-virtual {v5, v6}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v5

    if-nez v5, :cond_c

    sget-object v5, Landroid/os/Build;->BRAND:Ljava/lang/String;

    const-string v6, "generic"

    .line 156
    invoke-virtual {v5, v6}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v5

    if-eqz v5, :cond_a

    sget-object v5, Landroid/os/Build;->DEVICE:Ljava/lang/String;

    const-string v6, "generic"

    invoke-virtual {v5, v6}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v5

    if-nez v5, :cond_c

    :cond_a
    const-string v5, "google_sdk"

    sget-object v6, Landroid/os/Build;->PRODUCT:Ljava/lang/String;

    .line 157
    invoke-virtual {v5, v6}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_b

    goto :goto_8

    :cond_b
    const/16 v5, 0x11

    .line 160
    invoke-virtual {v0, v5}, Landroid/hardware/Camera$Parameters;->setPreviewFormat(I)V

    goto :goto_9

    :cond_c
    :goto_8
    const v5, 0x32315659

    .line 158
    invoke-virtual {v0, v5}, Landroid/hardware/Camera$Parameters;->setPreviewFormat(I)V

    .line 162
    :goto_9
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getPreviewFormat()I

    move-result v5

    iput v5, p0, Lorg/opencv/android/JavaCameraView;->mPreviewFormat:I

    .line 164
    const-string v5, "JavaCameraView"

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Set preview size to "

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    iget-wide v7, v1, Lorg/opencv/core/Size;->width:D

    double-to-int v7, v7

    invoke-static {v7}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v7

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-string v7, "x"

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    iget-wide v7, v1, Lorg/opencv/core/Size;->height:D

    double-to-int v7, v7

    invoke-static {v7}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v7

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 165
    iget-wide v5, v1, Lorg/opencv/core/Size;->width:D

    double-to-int v5, v5

    iget-wide v6, v1, Lorg/opencv/core/Size;->height:D

    double-to-int v1, v6

    invoke-virtual {v0, v5, v1}, Landroid/hardware/Camera$Parameters;->setPreviewSize(II)V

    .line 167
    sget-object v1, Landroid/os/Build;->MODEL:Ljava/lang/String;

    const-string v5, "GT-I9100"

    invoke-virtual {v1, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_d

    .line 168
    invoke-virtual {v0, v4}, Landroid/hardware/Camera$Parameters;->setRecordingHint(Z)V

    .line 170
    :cond_d
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getSupportedFocusModes()Ljava/util/List;

    move-result-object v1

    if-eqz v1, :cond_e

    .line 171
    const-string v5, "continuous-video"

    invoke-interface {v1, v5}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_e

    .line 173
    const-string v1, "continuous-video"

    invoke-virtual {v0, v1}, Landroid/hardware/Camera$Parameters;->setFocusMode(Ljava/lang/String;)V

    .line 176
    :cond_e
    iget-object v1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {v1, v0}, Landroid/hardware/Camera;->setParameters(Landroid/hardware/Camera$Parameters;)V

    .line 177
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {v0}, Landroid/hardware/Camera;->getParameters()Landroid/hardware/Camera$Parameters;

    move-result-object v0

    .line 179
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getPreviewSize()Landroid/hardware/Camera$Size;

    move-result-object v1

    iget v1, v1, Landroid/hardware/Camera$Size;->width:I

    iput v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    .line 180
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getPreviewSize()Landroid/hardware/Camera$Size;

    move-result-object v1

    iget v1, v1, Landroid/hardware/Camera$Size;->height:I

    iput v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    .line 182
    invoke-virtual {p0}, Lorg/opencv/android/JavaCameraView;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object v1

    iget v1, v1, Landroid/view/ViewGroup$LayoutParams;->width:I

    if-ne v1, v2, :cond_f

    invoke-virtual {p0}, Lorg/opencv/android/JavaCameraView;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object v1

    iget v1, v1, Landroid/view/ViewGroup$LayoutParams;->height:I

    if-ne v1, v2, :cond_f

    int-to-float p2, p2

    .line 183
    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    int-to-float v1, v1

    div-float/2addr p2, v1

    int-to-float p1, p1

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    int-to-float v1, v1

    div-float/2addr p1, v1

    invoke-static {p2, p1}, Ljava/lang/Math;->min(FF)F

    move-result p1

    iput p1, p0, Lorg/opencv/android/JavaCameraView;->mScale:F

    goto :goto_a

    :cond_f
    const/4 p1, 0x0

    .line 185
    iput p1, p0, Lorg/opencv/android/JavaCameraView;->mScale:F

    .line 187
    :goto_a
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    if-eqz p1, :cond_10

    .line 188
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    iget p2, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    invoke-virtual {p1, p2, v1}, Lorg/opencv/android/FpsMeter;->setResolution(II)V

    .line 191
    :cond_10
    iget p1, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    iget p2, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    mul-int/2addr p1, p2

    .line 192
    invoke-virtual {v0}, Landroid/hardware/Camera$Parameters;->getPreviewFormat()I

    move-result p2

    invoke-static {p2}, Landroid/graphics/ImageFormat;->getBitsPerPixel(I)I

    move-result p2

    mul-int/2addr p1, p2

    div-int/lit8 p1, p1, 0x8

    .line 193
    new-array p1, p1, [B

    iput-object p1, p0, Lorg/opencv/android/JavaCameraView;->mBuffer:[B

    .line 195
    iget-object p2, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {p2, p1}, Landroid/hardware/Camera;->addCallbackBuffer([B)V

    .line 196
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {p1, p0}, Landroid/hardware/Camera;->setPreviewCallbackWithBuffer(Landroid/hardware/Camera$PreviewCallback;)V

    const/4 p1, 0x2

    .line 198
    new-array p2, p1, [Lorg/opencv/core/Mat;

    iput-object p2, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    .line 199
    new-instance v0, Lorg/opencv/core/Mat;

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    div-int/2addr v2, p1

    add-int/2addr v1, v2

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    sget v5, Lorg/opencv/core/CvType;->CV_8UC1:I

    invoke-direct {v0, v1, v2, v5}, Lorg/opencv/core/Mat;-><init>(III)V

    aput-object v0, p2, v3

    .line 200
    iget-object p2, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    new-instance v0, Lorg/opencv/core/Mat;

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    div-int/2addr v2, p1

    add-int/2addr v1, v2

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    sget v5, Lorg/opencv/core/CvType;->CV_8UC1:I

    invoke-direct {v0, v1, v2, v5}, Lorg/opencv/core/Mat;-><init>(III)V

    aput-object v0, p2, v4

    .line 202
    invoke-virtual {p0}, Lorg/opencv/android/JavaCameraView;->AllocateCache()V

    .line 204
    new-array p1, p1, [Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    iput-object p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    .line 205
    new-instance p2, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    aget-object v0, v0, v3

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    invoke-direct {p2, p0, v0, v1, v2}, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;-><init>(Lorg/opencv/android/JavaCameraView;Lorg/opencv/core/Mat;II)V

    aput-object p2, p1, v3

    .line 206
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    new-instance p2, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    aget-object v0, v0, v4

    iget v1, p0, Lorg/opencv/android/JavaCameraView;->mFrameWidth:I

    iget v2, p0, Lorg/opencv/android/JavaCameraView;->mFrameHeight:I

    invoke-direct {p2, p0, v0, v1, v2}, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;-><init>(Lorg/opencv/android/JavaCameraView;Lorg/opencv/core/Mat;II)V

    aput-object p2, p1, v4

    .line 209
    new-instance p1, Landroid/graphics/SurfaceTexture;

    const/16 p2, 0xa

    invoke-direct {p1, p2}, Landroid/graphics/SurfaceTexture;-><init>(I)V

    iput-object p1, p0, Lorg/opencv/android/JavaCameraView;->mSurfaceTexture:Landroid/graphics/SurfaceTexture;

    .line 210
    iget-object p2, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {p2, p1}, Landroid/hardware/Camera;->setPreviewTexture(Landroid/graphics/SurfaceTexture;)V

    .line 215
    const-string p1, "JavaCameraView"

    const-string p2, "startPreview"

    invoke-static {p1, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 216
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {p1}, Landroid/hardware/Camera;->startPreview()V
    :try_end_7
    .catch Ljava/lang/Exception; {:try_start_7 .. :try_end_7} :catch_3
    .catchall {:try_start_7 .. :try_end_7} :catchall_0

    move v3, v4

    goto :goto_b

    :catch_3
    move-exception p1

    .line 222
    :try_start_8
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 224
    :cond_11
    :goto_b
    monitor-exit p0

    return v3

    :catchall_0
    move-exception p1

    monitor-exit p0
    :try_end_8
    .catchall {:try_start_8 .. :try_end_8} :catchall_0

    throw p1
.end method

.method public onPreviewFrame([BLandroid/hardware/Camera;)V
    .locals 1

    .line 304
    monitor-enter p0

    .line 305
    :try_start_0
    iget-object p2, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    iget v0, p0, Lorg/opencv/android/JavaCameraView;->mChainIdx:I

    aget-object p2, p2, v0

    const/4 v0, 0x0

    invoke-virtual {p2, v0, v0, p1}, Lorg/opencv/core/Mat;->put(II[B)I

    const/4 p1, 0x1

    .line 306
    iput-boolean p1, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrameReady:Z

    .line 307
    invoke-virtual {p0}, Ljava/lang/Object;->notify()V

    .line 308
    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 309
    iget-object p1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    if-eqz p1, :cond_0

    .line 310
    iget-object p2, p0, Lorg/opencv/android/JavaCameraView;->mBuffer:[B

    invoke-virtual {p1, p2}, Landroid/hardware/Camera;->addCallbackBuffer([B)V

    :cond_0
    return-void

    :catchall_0
    move-exception p1

    .line 308
    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method protected releaseCamera()V
    .locals 3

    .line 230
    monitor-enter p0

    .line 231
    :try_start_0
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 232
    invoke-virtual {v0}, Landroid/hardware/Camera;->stopPreview()V

    .line 233
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {v0, v1}, Landroid/hardware/Camera;->setPreviewCallback(Landroid/hardware/Camera$PreviewCallback;)V

    .line 235
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    invoke-virtual {v0}, Landroid/hardware/Camera;->release()V

    .line 237
    :cond_0
    iput-object v1, p0, Lorg/opencv/android/JavaCameraView;->mCamera:Landroid/hardware/Camera;

    .line 238
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    const/4 v1, 0x1

    const/4 v2, 0x0

    if-eqz v0, :cond_1

    .line 239
    aget-object v0, v0, v2

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 240
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mFrameChain:[Lorg/opencv/core/Mat;

    aget-object v0, v0, v1

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 242
    :cond_1
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    if-eqz v0, :cond_2

    .line 243
    aget-object v0, v0, v2

    invoke-virtual {v0}, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->release()V

    .line 244
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView;->mCameraFrame:[Lorg/opencv/android/JavaCameraView$JavaCameraFrame;

    aget-object v0, v0, v1

    invoke-virtual {v0}, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->release()V

    .line 246
    :cond_2
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method
