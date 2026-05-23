.class Lorg/apache/cordova/filetransfer/FileTransfer$2;
.super Ljava/lang/Object;
.source "FileTransfer.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/filetransfer/FileTransfer;->download(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

.field final synthetic val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

.field final synthetic val$headers:Lorg/json/JSONObject;

.field final synthetic val$isLocalTransfer:Z

.field final synthetic val$objectId:Ljava/lang/String;

.field final synthetic val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

.field final synthetic val$source:Ljava/lang/String;

.field final synthetic val$sourceUri:Landroid/net/Uri;

.field final synthetic val$target:Ljava/lang/String;


# direct methods
.method constructor <init>(Lorg/apache/cordova/filetransfer/FileTransfer;Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;Ljava/lang/String;Lorg/apache/cordova/CordovaResourceApi;Landroid/net/Uri;ZLorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 723
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iput-object p2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object p3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    iput-object p4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    iput-object p5, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$sourceUri:Landroid/net/Uri;

    iput-boolean p6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$isLocalTransfer:Z

    iput-object p7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$headers:Lorg/json/JSONObject;

    iput-object p8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iput-object p9, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 15

    const-string v0, "Resource not modified: "

    const-string v1, "Download file:"

    .line 725
    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-boolean v2, v2, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    if-eqz v2, :cond_0

    return-void

    .line 730
    :cond_0
    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v2

    .line 731
    iget-object v3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    .line 732
    invoke-virtual {v2}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v4

    if-eqz v4, :cond_1

    goto :goto_0

    :cond_1
    new-instance v2, Ljava/io/File;

    iget-object v4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-direct {v2, v4}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-static {v2}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v2

    .line 731
    :goto_0
    invoke-virtual {v3, v2}, Lorg/apache/cordova/CordovaResourceApi;->remapUri(Landroid/net/Uri;)Landroid/net/Uri;

    move-result-object v2

    const/4 v3, 0x0

    const/4 v4, 0x0

    .line 743
    :try_start_0
    iget-object v5, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    invoke-virtual {v5, v2}, Lorg/apache/cordova/CordovaResourceApi;->mapUriToFile(Landroid/net/Uri;)Ljava/io/File;

    move-result-object v5
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_10
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_f
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_e
    .catchall {:try_start_0 .. :try_end_0} :catchall_c

    .line 744
    :try_start_1
    iget-object v6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v5, v6, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->targetFile:Ljava/io/File;

    .line 746
    const-string v6, "FileTransfer"

    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$sourceUri:Landroid/net/Uri;

    invoke-virtual {v7, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v6, v1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 748
    new-instance v1, Lorg/apache/cordova/filetransfer/FileProgressResult;

    invoke-direct {v1}, Lorg/apache/cordova/filetransfer/FileProgressResult;-><init>()V

    .line 750
    iget-boolean v6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$isLocalTransfer:Z

    const/4 v7, 0x1

    if-eqz v6, :cond_3

    .line 751
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    iget-object v6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$sourceUri:Landroid/net/Uri;

    invoke-virtual {v0, v6}, Lorg/apache/cordova/CordovaResourceApi;->openForRead(Landroid/net/Uri;)Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;

    move-result-object v0

    .line 752
    iget-wide v8, v0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->length:J

    const-wide/16 v10, -0x1

    cmp-long v6, v8, v10

    if-eqz v6, :cond_2

    .line 753
    invoke-virtual {v1, v7}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setLengthComputable(Z)V

    .line 754
    iget-wide v8, v0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->length:J

    invoke-virtual {v1, v8, v9}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setTotal(J)V

    .line 756
    :cond_2
    new-instance v6, Lorg/apache/cordova/filetransfer/FileTransfer$SimpleTrackingInputStream;

    iget-object v0, v0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-direct {v6, v0}, Lorg/apache/cordova/filetransfer/FileTransfer$SimpleTrackingInputStream;-><init>(Ljava/io/InputStream;)V

    move v9, v3

    move-object v8, v4

    move-object v0, v6

    move-object v6, v8

    goto/16 :goto_1

    .line 760
    :cond_3
    iget-object v6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    iget-object v8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$sourceUri:Landroid/net/Uri;

    invoke-virtual {v6, v8}, Lorg/apache/cordova/CordovaResourceApi;->createHttpConnection(Landroid/net/Uri;)Ljava/net/HttpURLConnection;

    move-result-object v6
    :try_end_1
    .catch Ljava/io/FileNotFoundException; {:try_start_1 .. :try_end_1} :catch_d
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_c
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_b
    .catchall {:try_start_1 .. :try_end_1} :catchall_b

    .line 761
    :try_start_2
    const-string v8, "GET"

    invoke-virtual {v6, v8}, Ljava/net/HttpURLConnection;->setRequestMethod(Ljava/lang/String;)V

    .line 764
    iget-object v8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iget-object v9, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$sourceUri:Landroid/net/Uri;

    invoke-virtual {v9}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v9

    invoke-static {v8, v9}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$000(Lorg/apache/cordova/filetransfer/FileTransfer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    if-eqz v8, :cond_4

    .line 768
    const-string v9, "cookie"

    invoke-virtual {v6, v9, v8}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    .line 772
    :cond_4
    const-string v8, "Accept-Encoding"

    const-string v9, "gzip"

    invoke-virtual {v6, v8, v9}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    .line 775
    iget-object v8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$headers:Lorg/json/JSONObject;

    if-eqz v8, :cond_5

    .line 776
    invoke-static {v6, v8}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$100(Ljava/net/URLConnection;Lorg/json/JSONObject;)V

    .line 779
    :cond_5
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->connect()V

    .line 780
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->getResponseCode()I

    move-result v8
    :try_end_2
    .catch Ljava/io/FileNotFoundException; {:try_start_2 .. :try_end_2} :catch_a
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_9
    .catch Lorg/json/JSONException; {:try_start_2 .. :try_end_2} :catch_8
    .catchall {:try_start_2 .. :try_end_2} :catchall_a

    const/16 v9, 0x130

    if-ne v8, v9, :cond_6

    .line 782
    :try_start_3
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->disconnect()V

    .line 783
    const-string v8, "FileTransfer"

    new-instance v9, Ljava/lang/StringBuilder;

    invoke-direct {v9, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    invoke-virtual {v9, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v8, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 784
    sget v0, Lorg/apache/cordova/filetransfer/FileTransfer;->NOT_MODIFIED_ERR:I

    iget-object v8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v9, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v0, v8, v9, v6, v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v0

    .line 785
    new-instance v8, Lorg/apache/cordova/PluginResult;

    sget-object v9, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v8, v9, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V
    :try_end_3
    .catch Ljava/io/FileNotFoundException; {:try_start_3 .. :try_end_3} :catch_2
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_1
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_0
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    move-object v0, v4

    move v9, v7

    goto :goto_1

    :catchall_0
    move-exception v0

    move-object v8, v4

    move v3, v7

    goto/16 :goto_8

    :catch_0
    move-exception v0

    move-object v8, v4

    move v3, v7

    goto/16 :goto_a

    :catch_1
    move-exception v0

    move-object v8, v4

    move v3, v7

    goto/16 :goto_d

    :catch_2
    move-exception v0

    move-object v8, v4

    move v3, v7

    goto/16 :goto_f

    .line 787
    :cond_6
    :try_start_4
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->getContentEncoding()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_7

    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->getContentEncoding()Ljava/lang/String;

    move-result-object v0

    const-string v8, "gzip"

    invoke-virtual {v0, v8}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_8

    .line 790
    :cond_7
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->getContentLength()I

    move-result v0

    const/4 v8, -0x1

    if-eq v0, v8, :cond_8

    .line 791
    invoke-virtual {v1, v7}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setLengthComputable(Z)V

    .line 792
    invoke-virtual {v6}, Ljava/net/HttpURLConnection;->getContentLength()I

    move-result v0

    int-to-long v8, v0

    invoke-virtual {v1, v8, v9}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setTotal(J)V

    .line 795
    :cond_8
    invoke-static {v6}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$300(Ljava/net/URLConnection;)Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;

    move-result-object v0
    :try_end_4
    .catch Ljava/io/FileNotFoundException; {:try_start_4 .. :try_end_4} :catch_a
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_9
    .catch Lorg/json/JSONException; {:try_start_4 .. :try_end_4} :catch_8
    .catchall {:try_start_4 .. :try_end_4} :catchall_a

    move v9, v3

    move-object v8, v4

    :goto_1
    if-nez v9, :cond_10

    .line 801
    :try_start_5
    iget-object v10, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v10
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_6

    .line 802
    :try_start_6
    iget-object v11, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-boolean v11, v11, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    if-eqz v11, :cond_b

    .line 803
    monitor-exit v10
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_5

    .line 821
    :try_start_7
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v1
    :try_end_7
    .catch Ljava/io/FileNotFoundException; {:try_start_7 .. :try_end_7} :catch_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_6
    .catch Lorg/json/JSONException; {:try_start_7 .. :try_end_7} :catch_5
    .catchall {:try_start_7 .. :try_end_7} :catchall_8

    .line 822
    :try_start_8
    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v4, v2, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 823
    monitor-exit v1
    :try_end_8
    .catchall {:try_start_8 .. :try_end_8} :catchall_2

    .line 824
    :try_start_9
    invoke-static {v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 825
    invoke-static {v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V
    :try_end_9
    .catch Ljava/io/FileNotFoundException; {:try_start_9 .. :try_end_9} :catch_7
    .catch Ljava/io/IOException; {:try_start_9 .. :try_end_9} :catch_6
    .catch Lorg/json/JSONException; {:try_start_9 .. :try_end_9} :catch_5
    .catchall {:try_start_9 .. :try_end_9} :catchall_8

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v0

    monitor-enter v0

    .line 883
    :try_start_a
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v0
    :try_end_a
    .catchall {:try_start_a .. :try_end_a} :catchall_1

    if-nez v8, :cond_9

    .line 887
    new-instance v8, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    sget v1, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v1, v2, v3, v6, v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    invoke-direct {v8, v0, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    :cond_9
    if-nez v9, :cond_a

    .line 890
    invoke-virtual {v8}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v0

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v1}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v1

    if-eq v0, v1, :cond_a

    if-eqz v5, :cond_a

    .line 891
    invoke-virtual {v5}, Ljava/io/File;->delete()Z

    .line 893
    :cond_a
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v0, v8}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void

    :catchall_1
    move-exception v1

    .line 884
    :try_start_b
    monitor-exit v0
    :try_end_b
    .catchall {:try_start_b .. :try_end_b} :catchall_1

    throw v1

    :catchall_2
    move-exception v0

    .line 823
    :try_start_c
    monitor-exit v1
    :try_end_c
    .catchall {:try_start_c .. :try_end_c} :catchall_2

    :try_start_d
    throw v0
    :try_end_d
    .catch Ljava/io/FileNotFoundException; {:try_start_d .. :try_end_d} :catch_7
    .catch Ljava/io/IOException; {:try_start_d .. :try_end_d} :catch_6
    .catch Lorg/json/JSONException; {:try_start_d .. :try_end_d} :catch_5
    .catchall {:try_start_d .. :try_end_d} :catchall_8

    .line 805
    :cond_b
    :try_start_e
    iget-object v11, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v6, v11, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 806
    monitor-exit v10
    :try_end_e
    .catchall {:try_start_e .. :try_end_e} :catchall_5

    const/16 v10, 0x4000

    .line 809
    :try_start_f
    new-array v10, v10, [B

    .line 811
    iget-object v11, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    invoke-virtual {v11, v2}, Lorg/apache/cordova/CordovaResourceApi;->openOutputStream(Landroid/net/Uri;)Ljava/io/OutputStream;

    move-result-object v11
    :try_end_f
    .catchall {:try_start_f .. :try_end_f} :catchall_6

    .line 812
    :goto_2
    :try_start_10
    invoke-virtual {v0, v10}, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;->read([B)I

    move-result v12

    if-lez v12, :cond_c

    .line 813
    invoke-virtual {v11, v10, v3, v12}, Ljava/io/OutputStream;->write([BII)V

    .line 815
    invoke-virtual {v0}, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;->getTotalRawBytesRead()J

    move-result-wide v12

    invoke-virtual {v1, v12, v13}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setLoaded(J)V

    .line 816
    new-instance v12, Lorg/apache/cordova/PluginResult;

    sget-object v13, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v1}, Lorg/apache/cordova/filetransfer/FileProgressResult;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v14

    invoke-direct {v12, v13, v14}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    .line 817
    invoke-virtual {v12, v7}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 818
    iget-object v13, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v13, v12}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_10
    .catchall {:try_start_10 .. :try_end_10} :catchall_4

    goto :goto_2

    .line 821
    :cond_c
    :try_start_11
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v1
    :try_end_11
    .catch Ljava/io/FileNotFoundException; {:try_start_11 .. :try_end_11} :catch_7
    .catch Ljava/io/IOException; {:try_start_11 .. :try_end_11} :catch_6
    .catch Lorg/json/JSONException; {:try_start_11 .. :try_end_11} :catch_5
    .catchall {:try_start_11 .. :try_end_11} :catchall_8

    .line 822
    :try_start_12
    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v4, v7, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 823
    monitor-exit v1
    :try_end_12
    .catchall {:try_start_12 .. :try_end_12} :catchall_3

    .line 824
    :try_start_13
    invoke-static {v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 825
    invoke-static {v11}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 828
    const-string v0, "FileTransfer"

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Saved file: "

    invoke-virtual {v1, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-virtual {v1, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 832
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iget-object v0, v0, Lorg/apache/cordova/filetransfer/FileTransfer;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0
    :try_end_13
    .catch Ljava/io/FileNotFoundException; {:try_start_13 .. :try_end_13} :catch_7
    .catch Ljava/io/IOException; {:try_start_13 .. :try_end_13} :catch_6
    .catch Lorg/json/JSONException; {:try_start_13 .. :try_end_13} :catch_5
    .catchall {:try_start_13 .. :try_end_13} :catchall_8

    .line 835
    :try_start_14
    const-string v1, "getPluginManager"

    new-array v7, v3, [Ljava/lang/Class;

    invoke-virtual {v0, v1, v7}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v1

    .line 836
    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iget-object v7, v7, Lorg/apache/cordova/filetransfer/FileTransfer;->webView:Lorg/apache/cordova/CordovaWebView;

    new-array v3, v3, [Ljava/lang/Object;

    invoke-virtual {v1, v7, v3}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/apache/cordova/PluginManager;
    :try_end_14
    .catch Ljava/lang/NoSuchMethodException; {:try_start_14 .. :try_end_14} :catch_3
    .catch Ljava/lang/IllegalAccessException; {:try_start_14 .. :try_end_14} :catch_3
    .catch Ljava/lang/reflect/InvocationTargetException; {:try_start_14 .. :try_end_14} :catch_3
    .catch Ljava/io/FileNotFoundException; {:try_start_14 .. :try_end_14} :catch_7
    .catch Ljava/io/IOException; {:try_start_14 .. :try_end_14} :catch_6
    .catch Lorg/json/JSONException; {:try_start_14 .. :try_end_14} :catch_5
    .catchall {:try_start_14 .. :try_end_14} :catchall_8

    goto :goto_3

    :catch_3
    move-object v1, v4

    :goto_3
    if-nez v1, :cond_d

    .line 843
    :try_start_15
    const-string v3, "pluginManager"

    invoke-virtual {v0, v3}, Ljava/lang/Class;->getField(Ljava/lang/String;)Ljava/lang/reflect/Field;

    move-result-object v0

    .line 844
    iget-object v3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iget-object v3, v3, Lorg/apache/cordova/filetransfer/FileTransfer;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-virtual {v0, v3}, Ljava/lang/reflect/Field;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/PluginManager;
    :try_end_15
    .catch Ljava/lang/NoSuchFieldException; {:try_start_15 .. :try_end_15} :catch_4
    .catch Ljava/lang/IllegalAccessException; {:try_start_15 .. :try_end_15} :catch_4
    .catch Ljava/io/FileNotFoundException; {:try_start_15 .. :try_end_15} :catch_7
    .catch Ljava/io/IOException; {:try_start_15 .. :try_end_15} :catch_6
    .catch Lorg/json/JSONException; {:try_start_15 .. :try_end_15} :catch_5
    .catchall {:try_start_15 .. :try_end_15} :catchall_8

    move-object v1, v0

    .line 849
    :catch_4
    :cond_d
    :try_start_16
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    invoke-virtual {v0, v2}, Lorg/apache/cordova/CordovaResourceApi;->mapUriToFile(Landroid/net/Uri;)Ljava/io/File;

    move-result-object v5

    .line 850
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v5, v0, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->targetFile:Ljava/io/File;

    .line 851
    const-string v0, "File"

    invoke-virtual {v1, v0}, Lorg/apache/cordova/PluginManager;->getPlugin(Ljava/lang/String;)Lorg/apache/cordova/CordovaPlugin;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/file/FileUtils;

    if-eqz v0, :cond_f

    .line 853
    invoke-virtual {v0, v5}, Lorg/apache/cordova/file/FileUtils;->getEntryForFile(Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object v0

    if-eqz v0, :cond_e

    .line 855
    new-instance v1, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v1, v2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    :goto_4
    move-object v8, v1

    goto :goto_6

    .line 857
    :cond_e
    sget v0, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v0, v1, v2, v6, v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v0

    .line 858
    const-string v1, "FileTransfer"

    const-string v2, "File plugin cannot represent download path"

    invoke-static {v1, v2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    .line 859
    new-instance v1, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v1, v2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    goto :goto_4

    .line 862
    :cond_f
    const-string v0, "FileTransfer"

    const-string v1, "File plugin not found; cannot save downloaded file"

    invoke-static {v0, v1}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    .line 863
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    const-string v2, "File plugin not found; cannot save downloaded file"

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Ljava/lang/String;)V
    :try_end_16
    .catch Ljava/io/FileNotFoundException; {:try_start_16 .. :try_end_16} :catch_7
    .catch Ljava/io/IOException; {:try_start_16 .. :try_end_16} :catch_6
    .catch Lorg/json/JSONException; {:try_start_16 .. :try_end_16} :catch_5
    .catchall {:try_start_16 .. :try_end_16} :catchall_8

    move-object v8, v0

    goto :goto_6

    :catchall_3
    move-exception v0

    .line 823
    :try_start_17
    monitor-exit v1
    :try_end_17
    .catchall {:try_start_17 .. :try_end_17} :catchall_3

    :try_start_18
    throw v0
    :try_end_18
    .catch Ljava/io/FileNotFoundException; {:try_start_18 .. :try_end_18} :catch_7
    .catch Ljava/io/IOException; {:try_start_18 .. :try_end_18} :catch_6
    .catch Lorg/json/JSONException; {:try_start_18 .. :try_end_18} :catch_5
    .catchall {:try_start_18 .. :try_end_18} :catchall_8

    :catchall_4
    move-exception v1

    goto :goto_5

    :catchall_5
    move-exception v1

    .line 806
    :try_start_19
    monitor-exit v10
    :try_end_19
    .catchall {:try_start_19 .. :try_end_19} :catchall_5

    :try_start_1a
    throw v1
    :try_end_1a
    .catchall {:try_start_1a .. :try_end_1a} :catchall_6

    :catchall_6
    move-exception v1

    move-object v11, v4

    .line 821
    :goto_5
    :try_start_1b
    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v2
    :try_end_1b
    .catch Ljava/io/FileNotFoundException; {:try_start_1b .. :try_end_1b} :catch_7
    .catch Ljava/io/IOException; {:try_start_1b .. :try_end_1b} :catch_6
    .catch Lorg/json/JSONException; {:try_start_1b .. :try_end_1b} :catch_5
    .catchall {:try_start_1b .. :try_end_1b} :catchall_8

    .line 822
    :try_start_1c
    iget-object v3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v4, v3, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 823
    monitor-exit v2
    :try_end_1c
    .catchall {:try_start_1c .. :try_end_1c} :catchall_7

    .line 824
    :try_start_1d
    invoke-static {v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 825
    invoke-static {v11}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 826
    throw v1
    :try_end_1d
    .catch Ljava/io/FileNotFoundException; {:try_start_1d .. :try_end_1d} :catch_7
    .catch Ljava/io/IOException; {:try_start_1d .. :try_end_1d} :catch_6
    .catch Lorg/json/JSONException; {:try_start_1d .. :try_end_1d} :catch_5
    .catchall {:try_start_1d .. :try_end_1d} :catchall_8

    :catchall_7
    move-exception v0

    .line 823
    :try_start_1e
    monitor-exit v2
    :try_end_1e
    .catchall {:try_start_1e .. :try_end_1e} :catchall_7

    :try_start_1f
    throw v0
    :try_end_1f
    .catch Ljava/io/FileNotFoundException; {:try_start_1f .. :try_end_1f} :catch_7
    .catch Ljava/io/IOException; {:try_start_1f .. :try_end_1f} :catch_6
    .catch Lorg/json/JSONException; {:try_start_1f .. :try_end_1f} :catch_5
    .catchall {:try_start_1f .. :try_end_1f} :catchall_8

    :catchall_8
    move-exception v0

    move v3, v9

    goto/16 :goto_8

    :catch_5
    move-exception v0

    move v3, v9

    goto/16 :goto_a

    :catch_6
    move-exception v0

    move v3, v9

    goto/16 :goto_d

    :catch_7
    move-exception v0

    move v3, v9

    goto/16 :goto_f

    .line 882
    :cond_10
    :goto_6
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v0

    monitor-enter v0

    .line 883
    :try_start_20
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v0
    :try_end_20
    .catchall {:try_start_20 .. :try_end_20} :catchall_9

    if-nez v8, :cond_11

    .line 887
    new-instance v8, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    sget v1, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v1, v2, v3, v6, v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    invoke-direct {v8, v0, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    :cond_11
    if-nez v9, :cond_12

    .line 890
    invoke-virtual {v8}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v0

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v1}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v1

    if-eq v0, v1, :cond_12

    if-eqz v5, :cond_12

    .line 891
    invoke-virtual {v5}, Ljava/io/File;->delete()Z

    .line 893
    :cond_12
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v0, v8}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    goto/16 :goto_10

    :catchall_9
    move-exception v1

    .line 884
    :try_start_21
    monitor-exit v0
    :try_end_21
    .catchall {:try_start_21 .. :try_end_21} :catchall_9

    throw v1

    :catchall_a
    move-exception v0

    move-object v8, v4

    goto :goto_8

    :catch_8
    move-exception v0

    move-object v8, v4

    goto/16 :goto_a

    :catch_9
    move-exception v0

    move-object v8, v4

    goto/16 :goto_d

    :catch_a
    move-exception v0

    move-object v8, v4

    goto/16 :goto_f

    :catchall_b
    move-exception v0

    move-object v6, v4

    goto :goto_7

    :catch_b
    move-exception v0

    move-object v6, v4

    goto :goto_9

    :catch_c
    move-exception v0

    move-object v6, v4

    goto/16 :goto_c

    :catch_d
    move-exception v0

    move-object v6, v4

    goto/16 :goto_e

    :catchall_c
    move-exception v0

    move-object v5, v4

    move-object v6, v5

    :goto_7
    move-object v8, v6

    .line 878
    :goto_8
    :try_start_22
    sget v1, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v1, v2, v7, v6, v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    .line 879
    const-string v2, "FileTransfer"

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v7

    invoke-static {v2, v7, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 880
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v2, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V
    :try_end_22
    .catchall {:try_start_22 .. :try_end_22} :catchall_11

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    monitor-enter v1

    .line 883
    :try_start_23
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    iget-object v4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v2, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v1
    :try_end_23
    .catchall {:try_start_23 .. :try_end_23} :catchall_d

    if-nez v3, :cond_13

    .line 890
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v1

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    if-eq v1, v2, :cond_13

    if-eqz v5, :cond_13

    goto :goto_b

    :catchall_d
    move-exception v0

    .line 884
    :try_start_24
    monitor-exit v1
    :try_end_24
    .catchall {:try_start_24 .. :try_end_24} :catchall_d

    throw v0

    :catch_e
    move-exception v0

    move-object v5, v4

    move-object v6, v5

    :goto_9
    move-object v8, v6

    .line 875
    :goto_a
    :try_start_25
    const-string v1, "FileTransfer"

    invoke-virtual {v0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 876
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->JSON_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V
    :try_end_25
    .catchall {:try_start_25 .. :try_end_25} :catchall_11

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    monitor-enter v1

    .line 883
    :try_start_26
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    iget-object v4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v2, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v1
    :try_end_26
    .catchall {:try_start_26 .. :try_end_26} :catchall_e

    if-nez v3, :cond_13

    .line 890
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v1

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    if-eq v1, v2, :cond_13

    if-eqz v5, :cond_13

    .line 891
    :goto_b
    invoke-virtual {v5}, Ljava/io/File;->delete()Z

    .line 893
    :cond_13
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    goto/16 :goto_10

    :catchall_e
    move-exception v0

    .line 884
    :try_start_27
    monitor-exit v1
    :try_end_27
    .catchall {:try_start_27 .. :try_end_27} :catchall_e

    throw v0

    :catch_f
    move-exception v0

    move-object v5, v4

    move-object v6, v5

    :goto_c
    move-object v8, v6

    .line 871
    :goto_d
    :try_start_28
    sget v1, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v1, v2, v7, v6, v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    .line 872
    const-string v2, "FileTransfer"

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v7

    invoke-static {v2, v7, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 873
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v2, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V
    :try_end_28
    .catchall {:try_start_28 .. :try_end_28} :catchall_11

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    monitor-enter v1

    .line 883
    :try_start_29
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    iget-object v4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v2, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v1
    :try_end_29
    .catchall {:try_start_29 .. :try_end_29} :catchall_f

    if-nez v3, :cond_13

    .line 890
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v1

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    if-eq v1, v2, :cond_13

    if-eqz v5, :cond_13

    goto :goto_b

    :catchall_f
    move-exception v0

    .line 884
    :try_start_2a
    monitor-exit v1
    :try_end_2a
    .catchall {:try_start_2a .. :try_end_2a} :catchall_f

    throw v0

    :catch_10
    move-exception v0

    move-object v5, v4

    move-object v6, v5

    :goto_e
    move-object v8, v6

    .line 867
    :goto_f
    :try_start_2b
    sget v1, Lorg/apache/cordova/filetransfer/FileTransfer;->FILE_NOT_FOUND_ERR:I

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v1, v2, v7, v6, v0}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v1

    .line 868
    const-string v2, "FileTransfer"

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v7

    invoke-static {v2, v7, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 869
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v2, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V
    :try_end_2b
    .catchall {:try_start_2b .. :try_end_2b} :catchall_11

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    monitor-enter v1

    .line 883
    :try_start_2c
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    iget-object v4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v2, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v1
    :try_end_2c
    .catchall {:try_start_2c .. :try_end_2c} :catchall_10

    if-nez v3, :cond_13

    .line 890
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v1

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    if-eq v1, v2, :cond_13

    if-eqz v5, :cond_13

    goto/16 :goto_b

    :goto_10
    return-void

    :catchall_10
    move-exception v0

    .line 884
    :try_start_2d
    monitor-exit v1
    :try_end_2d
    .catchall {:try_start_2d .. :try_end_2d} :catchall_10

    throw v0

    :catchall_11
    move-exception v0

    .line 882
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v1

    monitor-enter v1

    .line 883
    :try_start_2e
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$objectId:Ljava/lang/String;

    invoke-virtual {v2, v7}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 884
    monitor-exit v1
    :try_end_2e
    .catchall {:try_start_2e .. :try_end_2e} :catchall_12

    if-nez v8, :cond_14

    .line 887
    new-instance v8, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    sget v2, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$source:Ljava/lang/String;

    iget-object v9, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$target:Ljava/lang/String;

    invoke-static {v2, v7, v9, v6, v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v2

    invoke-direct {v8, v1, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    :cond_14
    if-nez v3, :cond_15

    .line 890
    invoke-virtual {v8}, Lorg/apache/cordova/PluginResult;->getStatus()I

    move-result v1

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    if-eq v1, v2, :cond_15

    if-eqz v5, :cond_15

    .line 891
    invoke-virtual {v5}, Ljava/io/File;->delete()Z

    .line 893
    :cond_15
    iget-object v1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$2;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v1, v8}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    .line 894
    throw v0

    :catchall_12
    move-exception v0

    .line 884
    :try_start_2f
    monitor-exit v1
    :try_end_2f
    .catchall {:try_start_2f .. :try_end_2f} :catchall_12

    throw v0
.end method
