.class public Lcom/tchvu3/capvoicerecorder/VoiceRecorder;
.super Lcom/getcapacitor/Plugin;
.source "VoiceRecorder.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    permissions = {
        "android.permission.RECORD_AUDIO"
    }
    requestCodes = {
        0x4e2
    }
.end annotation


# instance fields
.field private mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method private doesUserGaveAudioRecordingPermission()Z
    .locals 1

    .line 131
    const-string v0, "android.permission.RECORD_AUDIO"

    invoke-virtual {p0, v0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method private getMsDurationOfAudioFile(Ljava/lang/String;)I
    .locals 1

    .line 149
    :try_start_0
    new-instance v0, Landroid/media/MediaPlayer;

    invoke-direct {v0}, Landroid/media/MediaPlayer;-><init>()V

    .line 150
    invoke-virtual {v0, p1}, Landroid/media/MediaPlayer;->setDataSource(Ljava/lang/String;)V

    .line 151
    invoke-virtual {v0}, Landroid/media/MediaPlayer;->prepare()V

    .line 152
    invoke-virtual {v0}, Landroid/media/MediaPlayer;->getDuration()I

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    const/4 p1, -0x1

    return p1
.end method

.method private readRecordedFileAsBase64(Ljava/io/File;)Ljava/lang/String;
    .locals 3

    .line 136
    invoke-virtual {p1}, Ljava/io/File;->length()J

    move-result-wide v0

    long-to-int v0, v0

    new-array v0, v0, [B

    .line 138
    :try_start_0
    new-instance v1, Ljava/io/BufferedInputStream;

    new-instance v2, Ljava/io/FileInputStream;

    invoke-direct {v2, p1}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    invoke-direct {v1, v2}, Ljava/io/BufferedInputStream;-><init>(Ljava/io/InputStream;)V

    .line 139
    invoke-virtual {v1, v0}, Ljava/io/BufferedInputStream;->read([B)I

    .line 140
    invoke-virtual {v1}, Ljava/io/BufferedInputStream;->close()V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p1, 0x0

    .line 144
    invoke-static {v0, p1}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object p1

    return-object p1

    :catch_0
    const/4 p1, 0x0

    return-object p1
.end method


# virtual methods
.method public canDeviceVoiceRecord(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 40
    invoke-virtual {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->canPhoneCreateMediaRecorder(Landroid/content/Context;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 41
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->successResponse()Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 43
    :cond_0
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->failResponse()Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 3

    .line 116
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 117
    invoke-virtual {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object p2

    if-eqz p2, :cond_3

    const/16 v0, 0x4e2

    if-eq p1, v0, :cond_0

    goto :goto_1

    .line 121
    :cond_0
    array-length p1, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p1, :cond_2

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_1

    .line 123
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->failResponse()Lcom/getcapacitor/JSObject;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void

    :cond_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 127
    :cond_2
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->successResponse()Lcom/getcapacitor/JSObject;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    :cond_3
    :goto_1
    return-void
.end method

.method public hasAudioRecordingPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 58
    invoke-direct {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->doesUserGaveAudioRecordingPermission()Z

    move-result v0

    invoke-static {v0}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->fromBoolean(Z)Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public requestAudioRecordingPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 48
    invoke-direct {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->doesUserGaveAudioRecordingPermission()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 49
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->successResponse()Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 51
    :cond_0
    invoke-virtual {p0, p1}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 52
    const-string p1, "android.permission.RECORD_AUDIO"

    const/16 v0, 0x4e2

    invoke-virtual {p0, p1, v0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->pluginRequestPermission(Ljava/lang/String;I)V

    :goto_0
    return-void
.end method

.method public startRecording(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 63
    invoke-direct {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->doesUserGaveAudioRecordingPermission()Z

    move-result v0

    if-nez v0, :cond_0

    .line 64
    const-string v0, "MISSING_PERMISSION"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 68
    :cond_0
    invoke-virtual {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->canPhoneCreateMediaRecorder(Landroid/content/Context;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 69
    const-string v0, "CANNOT_RECORD_ON_THIS_PHONE"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 73
    :cond_1
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    if-eqz v0, :cond_2

    .line 74
    const-string v0, "ALREADY_RECORDING"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 79
    :cond_2
    :try_start_0
    new-instance v0, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    invoke-virtual {p0}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    .line 80
    invoke-virtual {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->startRecording()V

    .line 81
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->successResponse()Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 83
    const-string v1, "FAILED_TO_RECORD"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;Ljava/lang/Exception;)V

    :goto_0
    return-void
.end method

.method public stopRecording(Lcom/getcapacitor/PluginCall;)V
    .locals 6
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 89
    const-string v0, "FAILED_TO_FETCH_RECORDING"

    iget-object v1, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    if-nez v1, :cond_0

    .line 90
    const-string v0, "RECORDING_HAS_NOT_STARTED"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    :cond_0
    const/4 v2, 0x0

    .line 95
    :try_start_0
    invoke-virtual {v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->stopRecording()V

    .line 96
    iget-object v1, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    invoke-virtual {v1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->getOutputFile()Ljava/io/File;

    move-result-object v1

    .line 97
    new-instance v3, Lcom/tchvu3/capvoicerecorder/RecordData;

    .line 98
    invoke-direct {p0, v1}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->readRecordedFileAsBase64(Ljava/io/File;)Ljava/lang/String;

    move-result-object v4

    .line 99
    invoke-virtual {v1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v1

    invoke-direct {p0, v1}, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->getMsDurationOfAudioFile(Ljava/lang/String;)I

    move-result v1

    const-string v5, "audio/aac"

    invoke-direct {v3, v4, v1, v5}, Lcom/tchvu3/capvoicerecorder/RecordData;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    .line 102
    invoke-virtual {v3}, Lcom/tchvu3/capvoicerecorder/RecordData;->getRecordDataBase64()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_2

    invoke-virtual {v3}, Lcom/tchvu3/capvoicerecorder/RecordData;->getMsDuration()I

    move-result v1

    if-gez v1, :cond_1

    goto :goto_0

    .line 105
    :cond_1
    invoke-virtual {v3}, Lcom/tchvu3/capvoicerecorder/RecordData;->toJSObject()Lcom/getcapacitor/JSObject;

    move-result-object v1

    invoke-static {v1}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->dataResponse(Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    move-result-object v1

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    goto :goto_1

    .line 103
    :cond_2
    :goto_0
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception p1

    goto :goto_2

    :catch_0
    move-exception v1

    .line 107
    :try_start_1
    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;Ljava/lang/Exception;)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 109
    :goto_1
    iget-object p1, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    invoke-virtual {p1}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->deleteOutputFile()Z

    .line 110
    iput-object v2, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    return-void

    .line 109
    :goto_2
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    invoke-virtual {v0}, Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;->deleteOutputFile()Z

    .line 110
    iput-object v2, p0, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;->mediaRecorder:Lcom/tchvu3/capvoicerecorder/CustomMediaRecorder;

    .line 111
    throw p1
.end method
