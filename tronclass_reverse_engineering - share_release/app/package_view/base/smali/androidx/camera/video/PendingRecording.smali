.class public final Landroidx/camera/video/PendingRecording;
.super Ljava/lang/Object;
.source "PendingRecording.java"


# instance fields
.field private mAudioEnabled:Z

.field private final mContext:Landroid/content/Context;

.field private mEventListener:Landroidx/core/util/Consumer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoRecordEvent;",
            ">;"
        }
    .end annotation
.end field

.field private mIsPersistent:Z

.field private mListenerExecutor:Ljava/util/concurrent/Executor;

.field private final mOutputOptions:Landroidx/camera/video/OutputOptions;

.field private final mRecorder:Landroidx/camera/video/Recorder;


# direct methods
.method constructor <init>(Landroid/content/Context;Landroidx/camera/video/Recorder;Landroidx/camera/video/OutputOptions;)V
    .locals 1

    .line 63
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 59
    iput-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mAudioEnabled:Z

    .line 60
    iput-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mIsPersistent:Z

    .line 67
    invoke-static {p1}, Landroidx/camera/core/impl/utils/ContextUtil;->getApplicationContext(Landroid/content/Context;)Landroid/content/Context;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/video/PendingRecording;->mContext:Landroid/content/Context;

    .line 68
    iput-object p2, p0, Landroidx/camera/video/PendingRecording;->mRecorder:Landroidx/camera/video/Recorder;

    .line 69
    iput-object p3, p0, Landroidx/camera/video/PendingRecording;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    return-void
.end method


# virtual methods
.method public asPersistentRecording()Landroidx/camera/video/PendingRecording;
    .locals 1

    const/4 v0, 0x1

    .line 203
    iput-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mIsPersistent:Z

    return-object p0
.end method

.method getApplicationContext()Landroid/content/Context;
    .locals 1

    .line 78
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mContext:Landroid/content/Context;

    return-object v0
.end method

.method getEventListener()Landroidx/core/util/Consumer;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoRecordEvent;",
            ">;"
        }
    .end annotation

    .line 98
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mEventListener:Landroidx/core/util/Consumer;

    return-object v0
.end method

.method getListenerExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 93
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mListenerExecutor:Ljava/util/concurrent/Executor;

    return-object v0
.end method

.method getOutputOptions()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 88
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    return-object v0
.end method

.method getRecorder()Landroidx/camera/video/Recorder;
    .locals 1

    .line 83
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mRecorder:Landroidx/camera/video/Recorder;

    return-object v0
.end method

.method isAudioEnabled()Z
    .locals 1

    .line 102
    iget-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mAudioEnabled:Z

    return v0
.end method

.method isPersistent()Z
    .locals 1

    .line 106
    iget-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mIsPersistent:Z

    return v0
.end method

.method public start(Ljava/util/concurrent/Executor;Landroidx/core/util/Consumer;)Landroidx/camera/video/Recording;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/concurrent/Executor;",
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoRecordEvent;",
            ">;)",
            "Landroidx/camera/video/Recording;"
        }
    .end annotation

    .line 245
    const-string v0, "Listener Executor can\'t be null."

    invoke-static {p1, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 246
    const-string v0, "Event listener can\'t be null"

    invoke-static {p2, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 247
    iput-object p1, p0, Landroidx/camera/video/PendingRecording;->mListenerExecutor:Ljava/util/concurrent/Executor;

    .line 248
    iput-object p2, p0, Landroidx/camera/video/PendingRecording;->mEventListener:Landroidx/core/util/Consumer;

    .line 249
    iget-object p1, p0, Landroidx/camera/video/PendingRecording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {p1, p0}, Landroidx/camera/video/Recorder;->start(Landroidx/camera/video/PendingRecording;)Landroidx/camera/video/Recording;

    move-result-object p1

    return-object p1
.end method

.method public withAudioEnabled()Landroidx/camera/video/PendingRecording;
    .locals 2

    .line 133
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mContext:Landroid/content/Context;

    const-string v1, "android.permission.RECORD_AUDIO"

    invoke-static {v0, v1}, Landroidx/core/content/PermissionChecker;->checkSelfPermission(Landroid/content/Context;Ljava/lang/String;)I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    .line 138
    iget-object v0, p0, Landroidx/camera/video/PendingRecording;->mRecorder:Landroidx/camera/video/Recorder;

    invoke-virtual {v0}, Landroidx/camera/video/Recorder;->isAudioSupported()Z

    move-result v0

    const-string v1, "The Recorder this recording is associated to doesn\'t support audio."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    const/4 v0, 0x1

    .line 140
    iput-boolean v0, p0, Landroidx/camera/video/PendingRecording;->mAudioEnabled:Z

    return-object p0

    .line 135
    :cond_0
    new-instance v0, Ljava/lang/SecurityException;

    const-string v1, "Attempted to enable audio for recording but application does not have RECORD_AUDIO permission granted."

    invoke-direct {v0, v1}, Ljava/lang/SecurityException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
