.class public Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;
.super Ljava/lang/Object;
.source "CustomMediaRecorder.java"


# instance fields
.field private context:Landroid/content/Context;

.field private mediaRecorder:Landroid/media/MediaRecorder;

.field private outputFile:Ljava/io/File;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 17
    iput-object p1, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->context:Landroid/content/Context;

    .line 18
    invoke-direct {p0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->generateMediaRecorder()V

    return-void
.end method

.method public static canPhoneCreateMediaRecorder(Landroid/content/Context;)Z
    .locals 2

    const/4 v0, 0x0

    .line 57
    :try_start_0
    new-instance v1, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    invoke-direct {v1, p0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;-><init>(Landroid/content/Context;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 58
    :try_start_1
    invoke-virtual {v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->startRecording()V

    .line 59
    invoke-virtual {v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->stopRecording()V
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 65
    invoke-virtual {v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->deleteOutputFile()Z

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    move-object v0, v1

    goto :goto_1

    :catch_0
    move-exception p0

    move-object v0, v1

    goto :goto_0

    :catchall_1
    move-exception p0

    goto :goto_1

    :catch_1
    move-exception p0

    .line 62
    :goto_0
    :try_start_2
    invoke-virtual {p0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p0

    const-string v1, "stop failed"

    invoke-virtual {p0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result p0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    if-eqz v0, :cond_0

    .line 65
    invoke-virtual {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->deleteOutputFile()Z

    :cond_0
    return p0

    :goto_1
    if-eqz v0, :cond_1

    invoke-virtual {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->deleteOutputFile()Z

    .line 66
    :cond_1
    throw p0
.end method

.method private generateMediaRecorder()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 22
    new-instance v0, Landroid/media/MediaRecorder;

    invoke-direct {v0}, Landroid/media/MediaRecorder;-><init>()V

    iput-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    const/4 v1, 0x1

    .line 23
    invoke-virtual {v0, v1}, Landroid/media/MediaRecorder;->setAudioSource(I)V

    .line 24
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    const/4 v1, 0x6

    invoke-virtual {v0, v1}, Landroid/media/MediaRecorder;->setOutputFormat(I)V

    .line 25
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    const/4 v1, 0x3

    invoke-virtual {v0, v1}, Landroid/media/MediaRecorder;->setAudioEncoder(I)V

    .line 26
    invoke-direct {p0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->setRecorderOutputFile()V

    .line 27
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    invoke-virtual {v0}, Landroid/media/MediaRecorder;->prepare()V

    return-void
.end method

.method private setRecorderOutputFile()V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 31
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->context:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getCacheDir()Ljava/io/File;

    move-result-object v0

    .line 32
    const-string v1, "voice_record_temp"

    const-string v2, ".aac"

    invoke-static {v1, v2, v0}, Ljava/io/File;->createTempFile(Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Ljava/io/File;

    move-result-object v0

    iput-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->outputFile:Ljava/io/File;

    .line 33
    invoke-virtual {v0}, Ljava/io/File;->deleteOnExit()V

    .line 34
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    iget-object v1, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->outputFile:Ljava/io/File;

    invoke-virtual {v1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/media/MediaRecorder;->setOutputFile(Ljava/lang/String;)V

    return-void
.end method


# virtual methods
.method public deleteOutputFile()Z
    .locals 1

    .line 51
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->outputFile:Ljava/io/File;

    invoke-virtual {v0}, Ljava/io/File;->delete()Z

    move-result v0

    return v0
.end method

.method public getOutputFile()Ljava/io/File;
    .locals 1

    .line 47
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->outputFile:Ljava/io/File;

    return-object v0
.end method

.method public startRecording()V
    .locals 1

    .line 38
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    invoke-virtual {v0}, Landroid/media/MediaRecorder;->start()V

    return-void
.end method

.method public stopRecording()V
    .locals 1

    .line 42
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    invoke-virtual {v0}, Landroid/media/MediaRecorder;->stop()V

    .line 43
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->mediaRecorder:Landroid/media/MediaRecorder;

    invoke-virtual {v0}, Landroid/media/MediaRecorder;->release()V

    return-void
.end method
