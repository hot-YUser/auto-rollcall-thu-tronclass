.class Landroidx/camera/video/Recorder$5;
.super Ljava/lang/Object;
.source "Recorder.java"

# interfaces
.implements Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/video/Recorder;->updateEncoderCallbacks(Landroidx/camera/video/Recorder$RecordingRecord;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/video/Recorder;

.field final synthetic val$audioErrorConsumer:Landroidx/core/util/Consumer;


# direct methods
.method constructor <init>(Landroidx/camera/video/Recorder;Landroidx/core/util/Consumer;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 1739
    iput-object p1, p0, Landroidx/camera/video/Recorder$5;->this$0:Landroidx/camera/video/Recorder;

    iput-object p2, p0, Landroidx/camera/video/Recorder$5;->val$audioErrorConsumer:Landroidx/core/util/Consumer;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onAmplitudeValue(D)V
    .locals 1

    .line 1762
    iget-object v0, p0, Landroidx/camera/video/Recorder$5;->this$0:Landroidx/camera/video/Recorder;

    iput-wide p1, v0, Landroidx/camera/video/Recorder;->mAudioAmplitude:D

    return-void
.end method

.method public onError(Ljava/lang/Throwable;)V
    .locals 2

    .line 1753
    const-string v0, "Recorder"

    const-string v1, "Error occurred after audio source started."

    invoke-static {v0, v1, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 1755
    instance-of v0, p1, Landroidx/camera/video/internal/audio/AudioSourceAccessException;

    if-eqz v0, :cond_0

    .line 1756
    iget-object v0, p0, Landroidx/camera/video/Recorder$5;->val$audioErrorConsumer:Landroidx/core/util/Consumer;

    invoke-interface {v0, p1}, Landroidx/core/util/Consumer;->accept(Ljava/lang/Object;)V

    :cond_0
    return-void
.end method

.method public onSilenceStateChanged(Z)V
    .locals 2

    .line 1742
    iget-object v0, p0, Landroidx/camera/video/Recorder$5;->this$0:Landroidx/camera/video/Recorder;

    iget-boolean v0, v0, Landroidx/camera/video/Recorder;->mIsAudioSourceSilenced:Z

    if-eq v0, p1, :cond_0

    .line 1743
    iget-object v0, p0, Landroidx/camera/video/Recorder$5;->this$0:Landroidx/camera/video/Recorder;

    iput-boolean p1, v0, Landroidx/camera/video/Recorder;->mIsAudioSourceSilenced:Z

    .line 1744
    iget-object p1, p0, Landroidx/camera/video/Recorder$5;->this$0:Landroidx/camera/video/Recorder;

    invoke-virtual {p1}, Landroidx/camera/video/Recorder;->updateInProgressStatusEvent()V

    goto :goto_0

    .line 1746
    :cond_0
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Audio source silenced transitions to the same state "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v0, "Recorder"

    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    :goto_0
    return-void
.end method
