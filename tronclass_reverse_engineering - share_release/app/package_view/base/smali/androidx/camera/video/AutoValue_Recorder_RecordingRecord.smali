.class final Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;
.super Landroidx/camera/video/Recorder$RecordingRecord;
.source "AutoValue_Recorder_RecordingRecord.java"


# instance fields
.field private final getCallbackExecutor:Ljava/util/concurrent/Executor;

.field private final getEventListener:Landroidx/core/util/Consumer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoRecordEvent;",
            ">;"
        }
    .end annotation
.end field

.field private final getOutputOptions:Landroidx/camera/video/OutputOptions;

.field private final getRecordingId:J

.field private final hasAudioEnabled:Z

.field private final isPersistent:Z


# direct methods
.method constructor <init>(Landroidx/camera/video/OutputOptions;Ljava/util/concurrent/Executor;Landroidx/core/util/Consumer;ZZJ)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/video/OutputOptions;",
            "Ljava/util/concurrent/Executor;",
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoRecordEvent;",
            ">;ZZJ)V"
        }
    .end annotation

    .line 31
    invoke-direct {p0}, Landroidx/camera/video/Recorder$RecordingRecord;-><init>()V

    if-eqz p1, :cond_0

    .line 35
    iput-object p1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getOutputOptions:Landroidx/camera/video/OutputOptions;

    .line 36
    iput-object p2, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getCallbackExecutor:Ljava/util/concurrent/Executor;

    .line 37
    iput-object p3, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getEventListener:Landroidx/core/util/Consumer;

    .line 38
    iput-boolean p4, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->hasAudioEnabled:Z

    .line 39
    iput-boolean p5, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->isPersistent:Z

    .line 40
    iput-wide p6, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getRecordingId:J

    return-void

    .line 33
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null getOutputOptions"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 93
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/Recorder$RecordingRecord;

    const/4 v2, 0x0

    if-eqz v1, :cond_4

    .line 94
    check-cast p1, Landroidx/camera/video/Recorder$RecordingRecord;

    .line 95
    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getOutputOptions:Landroidx/camera/video/OutputOptions;

    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getOutputOptions()Landroidx/camera/video/OutputOptions;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getCallbackExecutor:Ljava/util/concurrent/Executor;

    if-nez v1, :cond_1

    .line 96
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getCallbackExecutor()Ljava/util/concurrent/Executor;

    move-result-object v1

    if-nez v1, :cond_3

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getCallbackExecutor()Ljava/util/concurrent/Executor;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    :goto_0
    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getEventListener:Landroidx/core/util/Consumer;

    if-nez v1, :cond_2

    .line 97
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getEventListener()Landroidx/core/util/Consumer;

    move-result-object v1

    if-nez v1, :cond_3

    goto :goto_1

    :cond_2
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getEventListener()Landroidx/core/util/Consumer;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    :goto_1
    iget-boolean v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->hasAudioEnabled:Z

    .line 98
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->hasAudioEnabled()Z

    move-result v3

    if-ne v1, v3, :cond_3

    iget-boolean v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->isPersistent:Z

    .line 99
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->isPersistent()Z

    move-result v3

    if-ne v1, v3, :cond_3

    iget-wide v3, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getRecordingId:J

    .line 100
    invoke-virtual {p1}, Landroidx/camera/video/Recorder$RecordingRecord;->getRecordingId()J

    move-result-wide v5

    cmp-long p1, v3, v5

    if-nez p1, :cond_3

    goto :goto_2

    :cond_3
    move v0, v2

    :goto_2
    return v0

    :cond_4
    return v2
.end method

.method getCallbackExecutor()Ljava/util/concurrent/Executor;
    .locals 1

    .line 52
    iget-object v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getCallbackExecutor:Ljava/util/concurrent/Executor;

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

    .line 58
    iget-object v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getEventListener:Landroidx/core/util/Consumer;

    return-object v0
.end method

.method getOutputOptions()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 46
    iget-object v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getOutputOptions:Landroidx/camera/video/OutputOptions;

    return-object v0
.end method

.method getRecordingId()J
    .locals 2

    .line 73
    iget-wide v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getRecordingId:J

    return-wide v0
.end method

.method hasAudioEnabled()Z
    .locals 1

    .line 63
    iget-boolean v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->hasAudioEnabled:Z

    return v0
.end method

.method public hashCode()I
    .locals 5

    .line 109
    iget-object v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getOutputOptions:Landroidx/camera/video/OutputOptions;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 111
    iget-object v2, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getCallbackExecutor:Ljava/util/concurrent/Executor;

    const/4 v3, 0x0

    if-nez v2, :cond_0

    move v2, v3

    goto :goto_0

    :cond_0
    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    :goto_0
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 113
    iget-object v2, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getEventListener:Landroidx/core/util/Consumer;

    if-nez v2, :cond_1

    goto :goto_1

    :cond_1
    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v3

    :goto_1
    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 115
    iget-boolean v2, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->hasAudioEnabled:Z

    const/16 v3, 0x4cf

    const/16 v4, 0x4d5

    if-eqz v2, :cond_2

    move v2, v3

    goto :goto_2

    :cond_2
    move v2, v4

    :goto_2
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 117
    iget-boolean v2, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->isPersistent:Z

    if-eqz v2, :cond_3

    goto :goto_3

    :cond_3
    move v3, v4

    :goto_3
    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 119
    iget-wide v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getRecordingId:J

    const/16 v3, 0x20

    ushr-long v3, v1, v3

    xor-long/2addr v1, v3

    long-to-int v1, v1

    xor-int/2addr v0, v1

    return v0
.end method

.method isPersistent()Z
    .locals 1

    .line 68
    iget-boolean v0, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->isPersistent:Z

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 78
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "RecordingRecord{getOutputOptions="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getOutputOptions:Landroidx/camera/video/OutputOptions;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", getCallbackExecutor="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getCallbackExecutor:Ljava/util/concurrent/Executor;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", getEventListener="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getEventListener:Landroidx/core/util/Consumer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", hasAudioEnabled="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->hasAudioEnabled:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isPersistent="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->isPersistent:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", getRecordingId="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Landroidx/camera/video/AutoValue_Recorder_RecordingRecord;->getRecordingId:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
