.class Landroidx/camera/core/AndroidImageReaderProxy;
.super Ljava/lang/Object;
.source "AndroidImageReaderProxy.java"

# interfaces
.implements Landroidx/camera/core/impl/ImageReaderProxy;


# instance fields
.field private final mImageReader:Landroid/media/ImageReader;

.field private mIsImageAvailableListenerCleared:Z

.field private final mLock:Ljava/lang/Object;


# direct methods
.method constructor <init>(Landroid/media/ImageReader;)V
    .locals 1

    .line 53
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    const/4 v0, 0x1

    .line 44
    iput-boolean v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mIsImageAvailableListenerCleared:Z

    .line 54
    iput-object p1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    return-void
.end method

.method private isImageReaderContextNotInitializedException(Ljava/lang/RuntimeException;)Z
    .locals 1

    .line 108
    const-string v0, "ImageReaderContext is not initialized"

    invoke-virtual {p1}, Ljava/lang/RuntimeException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method


# virtual methods
.method public acquireLatestImage()Landroidx/camera/core/ImageProxy;
    .locals 4

    .line 60
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 63
    :try_start_0
    iget-object v2, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v2}, Landroid/media/ImageReader;->acquireLatestImage()Landroid/media/Image;

    move-result-object v2
    :try_end_0
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    goto :goto_1

    :catch_0
    move-exception v2

    .line 68
    :try_start_1
    invoke-direct {p0, v2}, Landroidx/camera/core/AndroidImageReaderProxy;->isImageReaderContextNotInitializedException(Ljava/lang/RuntimeException;)Z

    move-result v3

    if-eqz v3, :cond_1

    move-object v2, v1

    :goto_0
    if-nez v2, :cond_0

    .line 76
    monitor-exit v0

    return-object v1

    .line 78
    :cond_0
    new-instance v1, Landroidx/camera/core/AndroidImageProxy;

    invoke-direct {v1, v2}, Landroidx/camera/core/AndroidImageProxy;-><init>(Landroid/media/Image;)V

    monitor-exit v0

    return-object v1

    .line 71
    :cond_1
    throw v2

    .line 79
    :goto_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method public acquireNextImage()Landroidx/camera/core/ImageProxy;
    .locals 4

    .line 85
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 88
    :try_start_0
    iget-object v2, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v2}, Landroid/media/ImageReader;->acquireNextImage()Landroid/media/Image;

    move-result-object v2
    :try_end_0
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    goto :goto_1

    :catch_0
    move-exception v2

    .line 93
    :try_start_1
    invoke-direct {p0, v2}, Landroidx/camera/core/AndroidImageReaderProxy;->isImageReaderContextNotInitializedException(Ljava/lang/RuntimeException;)Z

    move-result v3

    if-eqz v3, :cond_1

    move-object v2, v1

    :goto_0
    if-nez v2, :cond_0

    .line 101
    monitor-exit v0

    return-object v1

    .line 103
    :cond_0
    new-instance v1, Landroidx/camera/core/AndroidImageProxy;

    invoke-direct {v1, v2}, Landroidx/camera/core/AndroidImageProxy;-><init>(Landroid/media/Image;)V

    monitor-exit v0

    return-object v1

    .line 96
    :cond_1
    throw v2

    .line 104
    :goto_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method public clearOnImageAvailableListener()V
    .locals 3

    .line 180
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x1

    .line 181
    :try_start_0
    iput-boolean v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mIsImageAvailableListenerCleared:Z

    .line 182
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    const/4 v2, 0x0

    invoke-virtual {v1, v2, v2}, Landroid/media/ImageReader;->setOnImageAvailableListener(Landroid/media/ImageReader$OnImageAvailableListener;Landroid/os/Handler;)V

    .line 183
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public close()V
    .locals 2

    .line 113
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 114
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->close()V

    .line 115
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getHeight()I
    .locals 2

    .line 120
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 121
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->getHeight()I

    move-result v1

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 122
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getImageFormat()I
    .locals 2

    .line 134
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 135
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->getImageFormat()I

    move-result v1

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 136
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getMaxImages()I
    .locals 2

    .line 141
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 142
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->getMaxImages()I

    move-result v1

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 143
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getSurface()Landroid/view/Surface;
    .locals 2

    .line 149
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 150
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->getSurface()Landroid/view/Surface;

    move-result-object v1

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    .line 151
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public getWidth()I
    .locals 2

    .line 127
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 128
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    invoke-virtual {v1}, Landroid/media/ImageReader;->getWidth()I

    move-result v1

    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 129
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method synthetic lambda$setOnImageAvailableListener$0$androidx-camera-core-AndroidImageReaderProxy(Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;)V
    .locals 0

    .line 169
    invoke-interface {p1, p0}, Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;->onImageAvailable(Landroidx/camera/core/impl/ImageReaderProxy;)V

    return-void
.end method

.method synthetic lambda$setOnImageAvailableListener$1$androidx-camera-core-AndroidImageReaderProxy(Ljava/util/concurrent/Executor;Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;Landroid/media/ImageReader;)V
    .locals 1

    .line 163
    iget-object p3, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter p3

    .line 167
    :try_start_0
    iget-boolean v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mIsImageAvailableListenerCleared:Z

    if-nez v0, :cond_0

    .line 168
    new-instance v0, Landroidx/camera/core/AndroidImageReaderProxy$$ExternalSyntheticLambda0;

    invoke-direct {v0, p0, p2}, Landroidx/camera/core/AndroidImageReaderProxy$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/core/AndroidImageReaderProxy;Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;)V

    invoke-interface {p1, v0}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    .line 171
    :cond_0
    monitor-exit p3

    return-void

    :catchall_0
    move-exception p1

    monitor-exit p3
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public setOnImageAvailableListener(Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;Ljava/util/concurrent/Executor;)V
    .locals 2

    .line 158
    iget-object v0, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 159
    :try_start_0
    iput-boolean v1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mIsImageAvailableListenerCleared:Z

    .line 162
    new-instance v1, Landroidx/camera/core/AndroidImageReaderProxy$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0, p2, p1}, Landroidx/camera/core/AndroidImageReaderProxy$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/core/AndroidImageReaderProxy;Ljava/util/concurrent/Executor;Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;)V

    .line 173
    iget-object p1, p0, Landroidx/camera/core/AndroidImageReaderProxy;->mImageReader:Landroid/media/ImageReader;

    .line 174
    invoke-static {}, Landroidx/camera/core/impl/utils/MainThreadAsyncHandler;->getInstance()Landroid/os/Handler;

    move-result-object p2

    .line 173
    invoke-virtual {p1, v1, p2}, Landroid/media/ImageReader;->setOnImageAvailableListener(Landroid/media/ImageReader$OnImageAvailableListener;Landroid/os/Handler;)V

    .line 175
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
