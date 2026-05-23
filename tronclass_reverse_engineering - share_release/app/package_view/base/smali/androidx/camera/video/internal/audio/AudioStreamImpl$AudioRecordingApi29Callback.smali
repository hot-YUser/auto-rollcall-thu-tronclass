.class Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;
.super Landroid/media/AudioManager$AudioRecordingCallback;
.source "AudioStreamImpl.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/audio/AudioStreamImpl;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = "AudioRecordingApi29Callback"
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/video/internal/audio/AudioStreamImpl;


# direct methods
.method constructor <init>(Landroidx/camera/video/internal/audio/AudioStreamImpl;)V
    .locals 0

    .line 311
    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;->this$0:Landroidx/camera/video/internal/audio/AudioStreamImpl;

    invoke-direct {p0}, Landroid/media/AudioManager$AudioRecordingCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onRecordingConfigChanged(Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/media/AudioRecordingConfiguration;",
            ">;)V"
        }
    .end annotation

    .line 314
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/media/AudioRecordingConfiguration;

    .line 315
    invoke-static {v0}, Landroidx/camera/video/internal/compat/Api24Impl;->getClientAudioSessionId(Landroid/media/AudioRecordingConfiguration;)I

    move-result v1

    iget-object v2, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;->this$0:Landroidx/camera/video/internal/audio/AudioStreamImpl;

    iget-object v2, v2, Landroidx/camera/video/internal/audio/AudioStreamImpl;->mAudioRecord:Landroid/media/AudioRecord;

    invoke-virtual {v2}, Landroid/media/AudioRecord;->getAudioSessionId()I

    move-result v2

    if-ne v1, v2, :cond_0

    .line 316
    invoke-static {v0}, Landroidx/camera/video/internal/compat/Api29Impl;->isClientSilenced(Landroid/media/AudioRecordingConfiguration;)Z

    move-result p1

    .line 317
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$AudioRecordingApi29Callback;->this$0:Landroidx/camera/video/internal/audio/AudioStreamImpl;

    invoke-virtual {v0, p1}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->notifySilenced(Z)V

    :cond_1
    return-void
.end method
