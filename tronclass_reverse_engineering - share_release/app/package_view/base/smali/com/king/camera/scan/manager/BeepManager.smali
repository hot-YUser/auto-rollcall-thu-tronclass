.class public final Lcom/king/camera/scan/manager/BeepManager;
.super Ljava/lang/Object;
.source "BeepManager.java"

# interfaces
.implements Landroid/media/MediaPlayer$OnErrorListener;
.implements Ljava/io/Closeable;


# static fields
.field private static final VIBRATE_DURATION:J = 0x64L


# instance fields
.field private final context:Landroid/content/Context;

.field private mediaPlayer:Landroid/media/MediaPlayer;

.field private playBeep:Z

.field private vibrate:Z

.field private vibrator:Landroid/os/Vibrator;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 49
    iput-object p1, p0, Lcom/king/camera/scan/manager/BeepManager;->context:Landroid/content/Context;

    const/4 p1, 0x0

    .line 50
    iput-object p1, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;

    .line 51
    invoke-direct {p0}, Lcom/king/camera/scan/manager/BeepManager;->updatePrefs()V

    return-void
.end method

.method private buildMediaPlayer(Landroid/content/Context;)Landroid/media/MediaPlayer;
    .locals 7

    .line 89
    new-instance v6, Landroid/media/MediaPlayer;

    invoke-direct {v6}, Landroid/media/MediaPlayer;-><init>()V

    .line 91
    :try_start_0
    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    sget v0, Lcom/king/camera/scan/R$raw;->camera_scan_beep:I

    invoke-virtual {p1, v0}, Landroid/content/res/Resources;->openRawResourceFd(I)Landroid/content/res/AssetFileDescriptor;

    move-result-object p1

    .line 92
    invoke-virtual {p1}, Landroid/content/res/AssetFileDescriptor;->getFileDescriptor()Ljava/io/FileDescriptor;

    move-result-object v1

    invoke-virtual {p1}, Landroid/content/res/AssetFileDescriptor;->getStartOffset()J

    move-result-wide v2

    invoke-virtual {p1}, Landroid/content/res/AssetFileDescriptor;->getLength()J

    move-result-wide v4

    move-object v0, v6

    invoke-virtual/range {v0 .. v5}, Landroid/media/MediaPlayer;->setDataSource(Ljava/io/FileDescriptor;JJ)V

    .line 93
    invoke-virtual {v6, p0}, Landroid/media/MediaPlayer;->setOnErrorListener(Landroid/media/MediaPlayer$OnErrorListener;)V

    const/4 p1, 0x0

    .line 94
    invoke-virtual {v6, p1}, Landroid/media/MediaPlayer;->setLooping(Z)V

    .line 95
    invoke-virtual {v6}, Landroid/media/MediaPlayer;->prepare()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object v6

    :catch_0
    move-exception p1

    .line 98
    invoke-static {p1}, Lcom/king/logx/LogX;->w(Ljava/lang/Throwable;)V

    .line 99
    invoke-virtual {v6}, Landroid/media/MediaPlayer;->release()V

    const/4 p1, 0x0

    return-object p1
.end method

.method private declared-synchronized updatePrefs()V
    .locals 2

    monitor-enter p0

    .line 63
    :try_start_0
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;

    if-nez v0, :cond_0

    .line 64
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->context:Landroid/content/Context;

    invoke-direct {p0, v0}, Lcom/king/camera/scan/manager/BeepManager;->buildMediaPlayer(Landroid/content/Context;)Landroid/media/MediaPlayer;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;

    .line 66
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;

    if-nez v0, :cond_2

    .line 67
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1f

    if-lt v0, v1, :cond_1

    .line 68
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->context:Landroid/content/Context;

    const-string v1, "vibrator_manager"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/VibratorManager;

    invoke-virtual {v0}, Landroid/os/VibratorManager;->getDefaultVibrator()Landroid/os/Vibrator;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;

    goto :goto_0

    .line 70
    :cond_1
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->context:Landroid/content/Context;

    const-string v1, "vibrator"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/Vibrator;

    iput-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 73
    :cond_2
    :goto_0
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method


# virtual methods
.method public declared-synchronized close()V
    .locals 1

    monitor-enter p0

    .line 114
    :try_start_0
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;

    if-eqz v0, :cond_0

    .line 115
    invoke-virtual {v0}, Landroid/media/MediaPlayer;->release()V

    const/4 v0, 0x0

    .line 116
    iput-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 119
    :try_start_1
    invoke-static {v0}, Lcom/king/logx/LogX;->w(Ljava/lang/Throwable;)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 121
    :cond_0
    :goto_0
    monitor-exit p0

    return-void

    :goto_1
    :try_start_2
    monitor-exit p0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v0
.end method

.method public declared-synchronized onError(Landroid/media/MediaPlayer;II)Z
    .locals 0

    monitor-enter p0

    .line 106
    :try_start_0
    invoke-virtual {p0}, Lcom/king/camera/scan/manager/BeepManager;->close()V

    .line 107
    invoke-direct {p0}, Lcom/king/camera/scan/manager/BeepManager;->updatePrefs()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 108
    monitor-exit p0

    const/4 p1, 0x1

    return p1

    :catchall_0
    move-exception p1

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public declared-synchronized playBeepSoundAndVibrate()V
    .locals 4

    monitor-enter p0

    .line 76
    :try_start_0
    iget-boolean v0, p0, Lcom/king/camera/scan/manager/BeepManager;->playBeep:Z

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->mediaPlayer:Landroid/media/MediaPlayer;

    if-eqz v0, :cond_0

    .line 77
    invoke-virtual {v0}, Landroid/media/MediaPlayer;->start()V

    .line 79
    :cond_0
    iget-boolean v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrate:Z

    if-eqz v0, :cond_2

    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;

    if-eqz v0, :cond_2

    invoke-virtual {v0}, Landroid/os/Vibrator;->hasVibrator()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 80
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    const-wide/16 v2, 0x64

    if-lt v0, v1, :cond_1

    .line 81
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;

    const/4 v1, -0x1

    invoke-static {v2, v3, v1}, Landroid/os/VibrationEffect;->createOneShot(JI)Landroid/os/VibrationEffect;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/os/Vibrator;->vibrate(Landroid/os/VibrationEffect;)V

    goto :goto_0

    .line 83
    :cond_1
    iget-object v0, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrator:Landroid/os/Vibrator;

    invoke-virtual {v0, v2, v3}, Landroid/os/Vibrator;->vibrate(J)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 86
    :cond_2
    :goto_0
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method

.method public setPlayBeep(Z)V
    .locals 0

    .line 59
    iput-boolean p1, p0, Lcom/king/camera/scan/manager/BeepManager;->playBeep:Z

    return-void
.end method

.method public setVibrate(Z)V
    .locals 0

    .line 55
    iput-boolean p1, p0, Lcom/king/camera/scan/manager/BeepManager;->vibrate:Z

    return-void
.end method
