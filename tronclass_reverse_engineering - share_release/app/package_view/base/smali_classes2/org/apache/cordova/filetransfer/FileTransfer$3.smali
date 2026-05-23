.class Lorg/apache/cordova/filetransfer/FileTransfer$3;
.super Ljava/lang/Object;
.source "FileTransfer.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/filetransfer/FileTransfer;->abort(Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

.field final synthetic val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/filetransfer/FileTransfer;Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 909
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iput-object p2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 8

    .line 911
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v0

    .line 912
    :try_start_0
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-object v1, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->targetFile:Ljava/io/File;

    if-eqz v1, :cond_0

    .line 914
    invoke-virtual {v1}, Ljava/io/File;->delete()Z

    .line 917
    :cond_0
    sget v2, Lorg/apache/cordova/filetransfer/FileTransfer;->ABORTED_ERR:I

    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->source:Ljava/lang/String;

    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->target:Ljava/lang/String;

    const/4 v1, -0x1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v6

    const/4 v7, 0x0

    const/4 v5, 0x0

    invoke-static/range {v2 .. v7}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$600(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    .line 918
    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v4, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v3, v4, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v3}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    .line 919
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    const/4 v2, 0x1

    iput-boolean v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    .line 920
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-object v1, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v1, :cond_1

    .line 922
    :try_start_1
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$3;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-object v1, v1, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    invoke-virtual {v1}, Ljava/net/HttpURLConnection;->disconnect()V
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 924
    :try_start_2
    const-string v2, "FileTransfer"

    const-string v3, "CB-8431 Catch workaround for fatal exception"

    invoke-static {v2, v3, v1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 927
    :cond_1
    :goto_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v1
.end method
