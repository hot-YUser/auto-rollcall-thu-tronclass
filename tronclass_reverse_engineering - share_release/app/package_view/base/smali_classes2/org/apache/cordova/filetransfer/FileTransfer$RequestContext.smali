.class final Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;
.super Ljava/lang/Object;
.source "FileTransfer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/filetransfer/FileTransfer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "RequestContext"
.end annotation


# instance fields
.field aborted:Z

.field callbackContext:Lorg/apache/cordova/CallbackContext;

.field connection:Ljava/net/HttpURLConnection;

.field source:Ljava/lang/String;

.field target:Ljava/lang/String;

.field targetFile:Ljava/io/File;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 81
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 82
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->source:Ljava/lang/String;

    .line 83
    iput-object p2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->target:Ljava/lang/String;

    .line 84
    iput-object p3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    .locals 1

    .line 87
    monitor-enter p0

    .line 88
    :try_start_0
    iget-boolean v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    if-nez v0, :cond_0

    .line 89
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    .line 91
    :cond_0
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
