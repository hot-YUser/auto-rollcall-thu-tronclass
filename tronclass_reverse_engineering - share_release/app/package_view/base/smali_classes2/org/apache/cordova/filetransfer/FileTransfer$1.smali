.class Lorg/apache/cordova/filetransfer/FileTransfer$1;
.super Ljava/lang/Object;
.source "FileTransfer.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/filetransfer/FileTransfer;->upload(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

.field final synthetic val$chunkedMode:Z

.field final synthetic val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

.field final synthetic val$fileKey:Ljava/lang/String;

.field final synthetic val$fileName:Ljava/lang/String;

.field final synthetic val$headers:Lorg/json/JSONObject;

.field final synthetic val$httpMethod:Ljava/lang/String;

.field final synthetic val$mimeType:Ljava/lang/String;

.field final synthetic val$objectId:Ljava/lang/String;

.field final synthetic val$params:Lorg/json/JSONObject;

.field final synthetic val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

.field final synthetic val$source:Ljava/lang/String;

.field final synthetic val$target:Ljava/lang/String;

.field final synthetic val$targetUri:Landroid/net/Uri;

.field final synthetic val$useHttps:Z


# direct methods
.method constructor <init>(Lorg/apache/cordova/filetransfer/FileTransfer;Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;Ljava/lang/String;Lorg/apache/cordova/CordovaResourceApi;Landroid/net/Uri;Ljava/lang/String;Lorg/json/JSONObject;Ljava/lang/String;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZLjava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 310
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iput-object p2, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object p3, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    iput-object p4, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    iput-object p5, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$targetUri:Landroid/net/Uri;

    iput-object p6, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$httpMethod:Ljava/lang/String;

    iput-object p7, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$headers:Lorg/json/JSONObject;

    iput-object p8, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$target:Ljava/lang/String;

    iput-object p9, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$params:Lorg/json/JSONObject;

    iput-object p10, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$fileKey:Ljava/lang/String;

    iput-object p11, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$fileName:Ljava/lang/String;

    iput-object p12, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$mimeType:Ljava/lang/String;

    iput-boolean p13, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$chunkedMode:Z

    iput-boolean p14, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$useHttps:Z

    iput-object p15, p0, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 20

    move-object/from16 v1, p0

    .line 312
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-boolean v2, v2, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    if-eqz v2, :cond_0

    return-void

    .line 319
    :cond_0
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    invoke-static {v2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v2

    .line 320
    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    .line 321
    invoke-virtual {v2}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v4

    if-eqz v4, :cond_1

    goto :goto_0

    :cond_1
    new-instance v2, Ljava/io/File;

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    invoke-direct {v2, v4}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-static {v2}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v2

    .line 320
    :goto_0
    invoke-virtual {v3, v2}, Lorg/apache/cordova/CordovaResourceApi;->remapUri(Landroid/net/Uri;)Landroid/net/Uri;

    move-result-object v2

    const/4 v3, -0x1

    const/4 v5, 0x0

    .line 328
    :try_start_0
    new-instance v6, Lorg/apache/cordova/filetransfer/FileUploadResult;

    invoke-direct {v6}, Lorg/apache/cordova/filetransfer/FileUploadResult;-><init>()V

    .line 329
    new-instance v7, Lorg/apache/cordova/filetransfer/FileProgressResult;

    invoke-direct {v7}, Lorg/apache/cordova/filetransfer/FileProgressResult;-><init>()V

    .line 333
    iget-object v8, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    iget-object v9, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$targetUri:Landroid/net/Uri;

    invoke-virtual {v8, v9}, Lorg/apache/cordova/CordovaResourceApi;->createHttpConnection(Landroid/net/Uri;)Ljava/net/HttpURLConnection;

    move-result-object v8
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_9
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_8
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_7
    .catchall {:try_start_0 .. :try_end_0} :catchall_13

    const/4 v9, 0x1

    .line 336
    :try_start_1
    invoke-virtual {v8, v9}, Ljava/net/HttpURLConnection;->setDoInput(Z)V

    .line 339
    invoke-virtual {v8, v9}, Ljava/net/HttpURLConnection;->setDoOutput(Z)V

    .line 342
    invoke-virtual {v8, v5}, Ljava/net/HttpURLConnection;->setUseCaches(Z)V

    .line 345
    iget-object v10, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$httpMethod:Ljava/lang/String;

    invoke-virtual {v8, v10}, Ljava/net/HttpURLConnection;->setRequestMethod(Ljava/lang/String;)V

    .line 348
    iget-object v10, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$headers:Lorg/json/JSONObject;
    :try_end_1
    .catch Ljava/io/FileNotFoundException; {:try_start_1 .. :try_end_1} :catch_6
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_5
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_7
    .catchall {:try_start_1 .. :try_end_1} :catchall_12

    if-eqz v10, :cond_3

    :try_start_2
    const-string v11, "Content-Type"

    invoke-virtual {v10, v11}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v10

    if-nez v10, :cond_2

    goto :goto_1

    :cond_2
    move v10, v5

    goto :goto_2

    :catch_0
    move-exception v0

    goto/16 :goto_13

    :cond_3
    :goto_1
    move v10, v9

    :goto_2
    if-eqz v10, :cond_4

    .line 350
    const-string v11, "Content-Type"

    const-string v12, "multipart/form-data; boundary=+++++"

    invoke-virtual {v8, v11, v12}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_2
    .catch Ljava/io/FileNotFoundException; {:try_start_2 .. :try_end_2} :catch_6
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_0
    .catch Lorg/json/JSONException; {:try_start_2 .. :try_end_2} :catch_7
    .catchall {:try_start_2 .. :try_end_2} :catchall_12

    .line 354
    :cond_4
    :try_start_3
    iget-object v11, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->this$0:Lorg/apache/cordova/filetransfer/FileTransfer;

    iget-object v12, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$target:Ljava/lang/String;

    invoke-static {v11, v12}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$000(Lorg/apache/cordova/filetransfer/FileTransfer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v11
    :try_end_3
    .catch Ljava/io/FileNotFoundException; {:try_start_3 .. :try_end_3} :catch_6
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_5
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_7
    .catchall {:try_start_3 .. :try_end_3} :catchall_12

    if-eqz v11, :cond_5

    .line 357
    :try_start_4
    const-string v12, "Cookie"

    invoke-virtual {v8, v12, v11}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_4
    .catch Ljava/io/FileNotFoundException; {:try_start_4 .. :try_end_4} :catch_6
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_0
    .catch Lorg/json/JSONException; {:try_start_4 .. :try_end_4} :catch_7
    .catchall {:try_start_4 .. :try_end_4} :catchall_12

    .line 361
    :cond_5
    :try_start_5
    iget-object v11, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$headers:Lorg/json/JSONObject;
    :try_end_5
    .catch Ljava/io/FileNotFoundException; {:try_start_5 .. :try_end_5} :catch_6
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_5
    .catch Lorg/json/JSONException; {:try_start_5 .. :try_end_5} :catch_7
    .catchall {:try_start_5 .. :try_end_5} :catchall_12

    if-eqz v11, :cond_6

    .line 362
    :try_start_6
    invoke-static {v8, v11}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$100(Ljava/net/URLConnection;Lorg/json/JSONObject;)V
    :try_end_6
    .catch Ljava/io/FileNotFoundException; {:try_start_6 .. :try_end_6} :catch_6
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_0
    .catch Lorg/json/JSONException; {:try_start_6 .. :try_end_6} :catch_7
    .catchall {:try_start_6 .. :try_end_6} :catchall_12

    .line 369
    :cond_6
    :try_start_7
    new-instance v11, Ljava/lang/StringBuilder;

    invoke-direct {v11}, Ljava/lang/StringBuilder;-><init>()V
    :try_end_7
    .catch Ljava/io/FileNotFoundException; {:try_start_7 .. :try_end_7} :catch_6
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_5
    .catch Lorg/json/JSONException; {:try_start_7 .. :try_end_7} :catch_7
    .catchall {:try_start_7 .. :try_end_7} :catchall_12

    const/16 v12, 0x22

    .line 371
    :try_start_8
    iget-object v13, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$params:Lorg/json/JSONObject;

    invoke-virtual {v13}, Lorg/json/JSONObject;->keys()Ljava/util/Iterator;

    move-result-object v13

    :cond_7
    :goto_3
    invoke-interface {v13}, Ljava/util/Iterator;->hasNext()Z

    move-result v14

    if-eqz v14, :cond_8

    .line 372
    invoke-interface {v13}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v14

    .line 373
    invoke-static {v14}, Ljava/lang/String;->valueOf(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v15

    const-string v4, "headers"

    invoke-virtual {v15, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-nez v4, :cond_7

    .line 375
    const-string v4, "--"

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v15, "+++++"

    invoke-virtual {v4, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v15, "\r\n"

    invoke-virtual {v4, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 376
    const-string v4, "Content-Disposition: form-data; name=\""

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v14}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v15

    invoke-virtual {v4, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 377
    const-string v4, "\r\n"

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v15, "\r\n"

    invoke-virtual {v4, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 378
    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$params:Lorg/json/JSONObject;

    invoke-virtual {v14}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v14

    invoke-virtual {v4, v14}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 379
    const-string v4, "\r\n"

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;
    :try_end_8
    .catch Lorg/json/JSONException; {:try_start_8 .. :try_end_8} :catch_1
    .catch Ljava/io/FileNotFoundException; {:try_start_8 .. :try_end_8} :catch_6
    .catch Ljava/io/IOException; {:try_start_8 .. :try_end_8} :catch_0
    .catchall {:try_start_8 .. :try_end_8} :catchall_12

    goto :goto_3

    :catch_1
    move-exception v0

    move-object v4, v0

    .line 383
    :try_start_9
    const-string v13, "FileTransfer"

    invoke-virtual {v4}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v14

    invoke-static {v13, v14, v4}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 386
    :cond_8
    const-string v4, "--"

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v13, "+++++"

    invoke-virtual {v4, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v13, "\r\n"

    invoke-virtual {v4, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 387
    const-string v4, "Content-Disposition: form-data; name=\""

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    iget-object v13, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$fileKey:Ljava/lang/String;

    invoke-virtual {v4, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v13, "\";"

    invoke-virtual {v4, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 388
    const-string v4, " filename=\""

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    iget-object v13, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$fileName:Ljava/lang/String;

    invoke-virtual {v4, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v12, "\r\n"

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 389
    const-string v4, "Content-Type: "

    invoke-virtual {v11, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    iget-object v12, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$mimeType:Ljava/lang/String;

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v12, "\r\n"

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v12, "\r\n"

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 390
    invoke-virtual {v11}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    const-string v11, "UTF-8"

    invoke-virtual {v4, v11}, Ljava/lang/String;->getBytes(Ljava/lang/String;)[B

    move-result-object v4

    .line 391
    const-string v11, "\r\n--+++++--\r\n"

    const-string v12, "UTF-8"

    invoke-virtual {v11, v12}, Ljava/lang/String;->getBytes(Ljava/lang/String;)[B

    move-result-object v11

    .line 395
    iget-object v12, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$resourceApi:Lorg/apache/cordova/CordovaResourceApi;

    invoke-virtual {v12, v2}, Lorg/apache/cordova/CordovaResourceApi;->openForRead(Landroid/net/Uri;)Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;

    move-result-object v2

    .line 397
    array-length v12, v4

    array-length v13, v11

    add-int/2addr v12, v13

    .line 398
    iget-wide v13, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->length:J
    :try_end_9
    .catch Ljava/io/FileNotFoundException; {:try_start_9 .. :try_end_9} :catch_6
    .catch Ljava/io/IOException; {:try_start_9 .. :try_end_9} :catch_5
    .catch Lorg/json/JSONException; {:try_start_9 .. :try_end_9} :catch_7
    .catchall {:try_start_9 .. :try_end_9} :catchall_12

    const-wide/16 v16, 0x0

    cmp-long v13, v13, v16

    if-ltz v13, :cond_a

    .line 399
    :try_start_a
    iget-wide v13, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->length:J
    :try_end_a
    .catch Ljava/io/FileNotFoundException; {:try_start_a .. :try_end_a} :catch_6
    .catch Ljava/io/IOException; {:try_start_a .. :try_end_a} :catch_0
    .catch Lorg/json/JSONException; {:try_start_a .. :try_end_a} :catch_7
    .catchall {:try_start_a .. :try_end_a} :catchall_12

    long-to-int v13, v13

    if-eqz v10, :cond_9

    add-int/2addr v13, v12

    .line 402
    :cond_9
    :try_start_b
    invoke-virtual {v7, v9}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setLengthComputable(Z)V

    int-to-long v14, v13

    .line 403
    invoke-virtual {v7, v14, v15}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setTotal(J)V
    :try_end_b
    .catch Ljava/io/FileNotFoundException; {:try_start_b .. :try_end_b} :catch_6
    .catch Ljava/io/IOException; {:try_start_b .. :try_end_b} :catch_2
    .catch Lorg/json/JSONException; {:try_start_b .. :try_end_b} :catch_7
    .catchall {:try_start_b .. :try_end_b} :catchall_12

    goto :goto_4

    :catch_2
    move-exception v0

    goto/16 :goto_11

    :cond_a
    move v13, v3

    .line 405
    :goto_4
    :try_start_c
    const-string v12, "FileTransfer"

    new-instance v14, Ljava/lang/StringBuilder;

    invoke-direct {v14}, Ljava/lang/StringBuilder;-><init>()V

    const-string v15, "Content Length: "

    invoke-virtual {v14, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v14

    invoke-virtual {v14, v13}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v14

    invoke-virtual {v14}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v14

    invoke-static {v12, v14}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 409
    iget-boolean v12, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$chunkedMode:Z
    :try_end_c
    .catch Ljava/io/FileNotFoundException; {:try_start_c .. :try_end_c} :catch_6
    .catch Ljava/io/IOException; {:try_start_c .. :try_end_c} :catch_4
    .catch Lorg/json/JSONException; {:try_start_c .. :try_end_c} :catch_7
    .catchall {:try_start_c .. :try_end_c} :catchall_12

    const/16 v14, 0x4000

    if-nez v12, :cond_c

    if-ne v13, v3, :cond_b

    goto :goto_5

    .line 418
    :cond_b
    :try_start_d
    invoke-virtual {v8, v13}, Ljava/net/HttpURLConnection;->setFixedLengthStreamingMode(I)V

    .line 420
    iget-boolean v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$useHttps:Z

    if-eqz v3, :cond_d

    .line 421
    const-string v3, "FileTransfer"

    const-string v12, "setFixedLengthStreamingMode could cause OutOfMemoryException - switch to chunkedMode=true to avoid it if this is an issue."

    invoke-static {v3, v12}, Lorg/apache/cordova/LOG;->w(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_d
    .catch Ljava/io/FileNotFoundException; {:try_start_d .. :try_end_d} :catch_6
    .catch Ljava/io/IOException; {:try_start_d .. :try_end_d} :catch_2
    .catch Lorg/json/JSONException; {:try_start_d .. :try_end_d} :catch_7
    .catchall {:try_start_d .. :try_end_d} :catchall_12

    goto :goto_6

    .line 413
    :cond_c
    :goto_5
    :try_start_e
    invoke-virtual {v8, v14}, Ljava/net/HttpURLConnection;->setChunkedStreamingMode(I)V

    .line 416
    const-string v3, "Transfer-Encoding"

    const-string v12, "chunked"

    invoke-virtual {v8, v3, v12}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    .line 425
    :cond_d
    :goto_6
    invoke-virtual {v8}, Ljava/net/HttpURLConnection;->connect()V
    :try_end_e
    .catch Ljava/io/FileNotFoundException; {:try_start_e .. :try_end_e} :catch_6
    .catch Ljava/io/IOException; {:try_start_e .. :try_end_e} :catch_4
    .catch Lorg/json/JSONException; {:try_start_e .. :try_end_e} :catch_7
    .catchall {:try_start_e .. :try_end_e} :catchall_12

    .line 429
    :try_start_f
    invoke-virtual {v8}, Ljava/net/HttpURLConnection;->getOutputStream()Ljava/io/OutputStream;

    move-result-object v3
    :try_end_f
    .catchall {:try_start_f .. :try_end_f} :catchall_11

    .line 430
    :try_start_10
    iget-object v12, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v12
    :try_end_10
    .catchall {:try_start_10 .. :try_end_10} :catchall_10

    .line 431
    :try_start_11
    iget-object v15, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-boolean v15, v15, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z
    :try_end_11
    .catchall {:try_start_11 .. :try_end_11} :catchall_d

    if-eqz v15, :cond_e

    .line 432
    :try_start_12
    monitor-exit v12
    :try_end_12
    .catchall {:try_start_12 .. :try_end_12} :catchall_1

    .line 478
    :try_start_13
    iget-object v2, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-static {v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 479
    invoke-static {v3}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V
    :try_end_13
    .catch Ljava/io/FileNotFoundException; {:try_start_13 .. :try_end_13} :catch_6
    .catch Ljava/io/IOException; {:try_start_13 .. :try_end_13} :catch_2
    .catch Lorg/json/JSONException; {:try_start_13 .. :try_end_13} :catch_7
    .catchall {:try_start_13 .. :try_end_13} :catchall_12

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_14
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    return-void

    :catchall_0
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_14
    .catchall {:try_start_14 .. :try_end_14} :catchall_0

    throw v3

    :catchall_1
    move-exception v0

    move-object v4, v0

    move v7, v5

    goto/16 :goto_d

    .line 434
    :cond_e
    :try_start_15
    iget-object v15, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v8, v15, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 435
    monitor-exit v12
    :try_end_15
    .catchall {:try_start_15 .. :try_end_15} :catchall_d

    if-eqz v10, :cond_f

    .line 439
    :try_start_16
    invoke-virtual {v3, v4}, Ljava/io/OutputStream;->write([B)V

    .line 440
    array-length v4, v4
    :try_end_16
    .catchall {:try_start_16 .. :try_end_16} :catchall_2

    goto :goto_7

    :catchall_2
    move-exception v0

    goto/16 :goto_e

    :cond_f
    move v4, v5

    .line 444
    :goto_7
    :try_start_17
    iget-object v12, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-virtual {v12}, Ljava/io/InputStream;->available()I

    move-result v12

    .line 445
    invoke-static {v12, v14}, Ljava/lang/Math;->min(II)I

    move-result v12

    .line 446
    new-array v15, v12, [B

    .line 449
    iget-object v9, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-virtual {v9, v15, v5, v12}, Ljava/io/InputStream;->read([BII)I

    move-result v9

    :goto_8
    if-lez v9, :cond_11

    add-int/2addr v4, v9

    move-object v12, v15

    int-to-long v14, v4

    .line 454
    invoke-virtual {v6, v14, v15}, Lorg/apache/cordova/filetransfer/FileUploadResult;->setBytesSent(J)V

    .line 455
    invoke-virtual {v3, v12, v5, v9}, Ljava/io/OutputStream;->write([BII)V

    const-wide/32 v18, 0x19000

    add-long v18, v16, v18

    cmp-long v9, v14, v18

    if-lez v9, :cond_10

    .line 458
    const-string v9, "FileTransfer"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    move-object/from16 v19, v6

    const-string v6, "Uploaded "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v6, " of "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v13}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v6, " bytes"

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v9, v5}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    move-wide/from16 v16, v14

    goto :goto_9

    :cond_10
    move-object/from16 v19, v6

    .line 460
    :goto_9
    iget-object v5, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-virtual {v5}, Ljava/io/InputStream;->available()I

    move-result v5

    const/16 v6, 0x4000

    .line 461
    invoke-static {v5, v6}, Ljava/lang/Math;->min(II)I

    move-result v5

    .line 462
    iget-object v9, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    const/4 v6, 0x0

    invoke-virtual {v9, v12, v6, v5}, Ljava/io/InputStream;->read([BII)I

    move-result v9

    .line 465
    invoke-virtual {v7, v14, v15}, Lorg/apache/cordova/filetransfer/FileProgressResult;->setLoaded(J)V

    .line 466
    new-instance v5, Lorg/apache/cordova/PluginResult;

    sget-object v6, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v7}, Lorg/apache/cordova/filetransfer/FileProgressResult;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v14

    invoke-direct {v5, v6, v14}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    const/4 v6, 0x1

    .line 467
    invoke-virtual {v5, v6}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 468
    iget-object v14, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    invoke-virtual {v14, v5}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    move-object v15, v12

    move-object/from16 v6, v19

    const/4 v5, 0x0

    const/16 v14, 0x4000

    goto :goto_8

    :cond_11
    move-object/from16 v19, v6

    if-eqz v10, :cond_12

    .line 473
    invoke-virtual {v3, v11}, Ljava/io/OutputStream;->write([B)V

    .line 474
    array-length v5, v11

    add-int/2addr v4, v5

    .line 476
    :cond_12
    invoke-virtual {v3}, Ljava/io/OutputStream;->flush()V
    :try_end_17
    .catchall {:try_start_17 .. :try_end_17} :catchall_c

    .line 478
    :try_start_18
    iget-object v2, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-static {v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 479
    invoke-static {v3}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 481
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v2
    :try_end_18
    .catch Ljava/io/FileNotFoundException; {:try_start_18 .. :try_end_18} :catch_6
    .catch Ljava/io/IOException; {:try_start_18 .. :try_end_18} :catch_3
    .catch Lorg/json/JSONException; {:try_start_18 .. :try_end_18} :catch_7
    .catchall {:try_start_18 .. :try_end_18} :catchall_12

    .line 482
    :try_start_19
    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    const/4 v5, 0x0

    iput-object v5, v3, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 483
    monitor-exit v2
    :try_end_19
    .catchall {:try_start_19 .. :try_end_19} :catchall_b

    .line 484
    :try_start_1a
    const-string v2, "FileTransfer"

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v5, "Sent "

    invoke-virtual {v3, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v5, " of "

    invoke-virtual {v3, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v13}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 488
    invoke-virtual {v8}, Ljava/net/HttpURLConnection;->getResponseCode()I

    move-result v2

    .line 489
    const-string v3, "FileTransfer"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "response code: "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v3, v5}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 490
    const-string v3, "FileTransfer"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "response headers: "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v8}, Ljava/net/HttpURLConnection;->getHeaderFields()Ljava/util/Map;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v3, v5}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_1a
    .catch Ljava/io/FileNotFoundException; {:try_start_1a .. :try_end_1a} :catch_6
    .catch Ljava/io/IOException; {:try_start_1a .. :try_end_1a} :catch_3
    .catch Lorg/json/JSONException; {:try_start_1a .. :try_end_1a} :catch_7
    .catchall {:try_start_1a .. :try_end_1a} :catchall_12

    .line 493
    :try_start_1b
    invoke-static {v8}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$300(Ljava/net/URLConnection;)Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;

    move-result-object v5
    :try_end_1b
    .catchall {:try_start_1b .. :try_end_1b} :catchall_9

    .line 494
    :try_start_1c
    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v3
    :try_end_1c
    .catchall {:try_start_1c .. :try_end_1c} :catchall_8

    .line 495
    :try_start_1d
    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iget-boolean v6, v6, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->aborted:Z

    if-eqz v6, :cond_13

    .line 496
    monitor-exit v3
    :try_end_1d
    .catchall {:try_start_1d .. :try_end_1d} :catchall_7

    .line 510
    :try_start_1e
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v2
    :try_end_1e
    .catch Ljava/io/FileNotFoundException; {:try_start_1e .. :try_end_1e} :catch_6
    .catch Ljava/io/IOException; {:try_start_1e .. :try_end_1e} :catch_3
    .catch Lorg/json/JSONException; {:try_start_1e .. :try_end_1e} :catch_7
    .catchall {:try_start_1e .. :try_end_1e} :catchall_12

    .line 511
    :try_start_1f
    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    const/4 v6, 0x0

    iput-object v6, v3, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 512
    monitor-exit v2
    :try_end_1f
    .catchall {:try_start_1f .. :try_end_1f} :catchall_4

    .line 513
    :try_start_20
    invoke-static {v5}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V
    :try_end_20
    .catch Ljava/io/FileNotFoundException; {:try_start_20 .. :try_end_20} :catch_6
    .catch Ljava/io/IOException; {:try_start_20 .. :try_end_20} :catch_3
    .catch Lorg/json/JSONException; {:try_start_20 .. :try_end_20} :catch_7
    .catchall {:try_start_20 .. :try_end_20} :catchall_12

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_21
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    return-void

    :catchall_3
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_21
    .catchall {:try_start_21 .. :try_end_21} :catchall_3

    throw v3

    :catchall_4
    move-exception v0

    move-object v3, v0

    .line 512
    :try_start_22
    monitor-exit v2
    :try_end_22
    .catchall {:try_start_22 .. :try_end_22} :catchall_4

    :try_start_23
    throw v3
    :try_end_23
    .catch Ljava/io/FileNotFoundException; {:try_start_23 .. :try_end_23} :catch_6
    .catch Ljava/io/IOException; {:try_start_23 .. :try_end_23} :catch_3
    .catch Lorg/json/JSONException; {:try_start_23 .. :try_end_23} :catch_7
    .catchall {:try_start_23 .. :try_end_23} :catchall_12

    .line 498
    :cond_13
    :try_start_24
    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    iput-object v8, v6, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 499
    monitor-exit v3
    :try_end_24
    .catchall {:try_start_24 .. :try_end_24} :catchall_7

    .line 501
    :try_start_25
    new-instance v3, Ljava/io/ByteArrayOutputStream;

    invoke-virtual {v8}, Ljava/net/HttpURLConnection;->getContentLength()I

    move-result v6

    const/16 v7, 0x400

    invoke-static {v7, v6}, Ljava/lang/Math;->max(II)I

    move-result v6

    invoke-direct {v3, v6}, Ljava/io/ByteArrayOutputStream;-><init>(I)V

    .line 502
    new-array v6, v7, [B

    .line 505
    :goto_a
    invoke-virtual {v5, v6}, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;->read([B)I

    move-result v7

    if-lez v7, :cond_14

    const/4 v9, 0x0

    .line 506
    invoke-virtual {v3, v6, v9, v7}, Ljava/io/ByteArrayOutputStream;->write([BII)V

    goto :goto_a

    .line 508
    :cond_14
    const-string v6, "UTF-8"

    invoke-virtual {v3, v6}, Ljava/io/ByteArrayOutputStream;->toString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3
    :try_end_25
    .catchall {:try_start_25 .. :try_end_25} :catchall_8

    .line 510
    :try_start_26
    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v6
    :try_end_26
    .catch Ljava/io/FileNotFoundException; {:try_start_26 .. :try_end_26} :catch_6
    .catch Ljava/io/IOException; {:try_start_26 .. :try_end_26} :catch_3
    .catch Lorg/json/JSONException; {:try_start_26 .. :try_end_26} :catch_7
    .catchall {:try_start_26 .. :try_end_26} :catchall_12

    .line 511
    :try_start_27
    iget-object v7, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    const/4 v9, 0x0

    iput-object v9, v7, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 512
    monitor-exit v6
    :try_end_27
    .catchall {:try_start_27 .. :try_end_27} :catchall_6

    .line 513
    :try_start_28
    invoke-static {v5}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 516
    const-string v5, "FileTransfer"

    const-string v6, "got response from server"

    invoke-static {v5, v6}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 517
    const-string v5, "FileTransfer"

    invoke-virtual {v3}, Ljava/lang/String;->length()I

    move-result v6

    const/16 v7, 0x100

    invoke-static {v7, v6}, Ljava/lang/Math;->min(II)I

    move-result v6

    const/4 v7, 0x0

    invoke-virtual {v3, v7, v6}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    move-object/from16 v5, v19

    .line 520
    invoke-virtual {v5, v2}, Lorg/apache/cordova/filetransfer/FileUploadResult;->setResponseCode(I)V

    .line 521
    invoke-virtual {v5, v3}, Lorg/apache/cordova/filetransfer/FileUploadResult;->setResponse(Ljava/lang/String;)V

    .line 523
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v6, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v5}, Lorg/apache/cordova/filetransfer/FileUploadResult;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v5

    invoke-direct {v3, v6, v5}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v3}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_28
    .catch Ljava/io/FileNotFoundException; {:try_start_28 .. :try_end_28} :catch_6
    .catch Ljava/io/IOException; {:try_start_28 .. :try_end_28} :catch_3
    .catch Lorg/json/JSONException; {:try_start_28 .. :try_end_28} :catch_7
    .catchall {:try_start_28 .. :try_end_28} :catchall_12

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_29
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    goto/16 :goto_17

    :catchall_5
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_29
    .catchall {:try_start_29 .. :try_end_29} :catchall_5

    throw v3

    :catchall_6
    move-exception v0

    move-object v2, v0

    .line 512
    :try_start_2a
    monitor-exit v6
    :try_end_2a
    .catchall {:try_start_2a .. :try_end_2a} :catchall_6

    :try_start_2b
    throw v2
    :try_end_2b
    .catch Ljava/io/FileNotFoundException; {:try_start_2b .. :try_end_2b} :catch_6
    .catch Ljava/io/IOException; {:try_start_2b .. :try_end_2b} :catch_3
    .catch Lorg/json/JSONException; {:try_start_2b .. :try_end_2b} :catch_7
    .catchall {:try_start_2b .. :try_end_2b} :catchall_12

    :catchall_7
    move-exception v0

    move-object v2, v0

    .line 499
    :try_start_2c
    monitor-exit v3
    :try_end_2c
    .catchall {:try_start_2c .. :try_end_2c} :catchall_7

    :try_start_2d
    throw v2
    :try_end_2d
    .catchall {:try_start_2d .. :try_end_2d} :catchall_8

    :catchall_8
    move-exception v0

    move-object v2, v0

    goto :goto_b

    :catchall_9
    move-exception v0

    move-object v2, v0

    const/4 v5, 0x0

    .line 510
    :goto_b
    :try_start_2e
    iget-object v3, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    monitor-enter v3
    :try_end_2e
    .catch Ljava/io/FileNotFoundException; {:try_start_2e .. :try_end_2e} :catch_6
    .catch Ljava/io/IOException; {:try_start_2e .. :try_end_2e} :catch_3
    .catch Lorg/json/JSONException; {:try_start_2e .. :try_end_2e} :catch_7
    .catchall {:try_start_2e .. :try_end_2e} :catchall_12

    .line 511
    :try_start_2f
    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    const/4 v9, 0x0

    iput-object v9, v6, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->connection:Ljava/net/HttpURLConnection;

    .line 512
    monitor-exit v3
    :try_end_2f
    .catchall {:try_start_2f .. :try_end_2f} :catchall_a

    .line 513
    :try_start_30
    invoke-static {v5}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 514
    throw v2
    :try_end_30
    .catch Ljava/io/FileNotFoundException; {:try_start_30 .. :try_end_30} :catch_6
    .catch Ljava/io/IOException; {:try_start_30 .. :try_end_30} :catch_3
    .catch Lorg/json/JSONException; {:try_start_30 .. :try_end_30} :catch_7
    .catchall {:try_start_30 .. :try_end_30} :catchall_12

    :catchall_a
    move-exception v0

    move-object v2, v0

    .line 512
    :try_start_31
    monitor-exit v3
    :try_end_31
    .catchall {:try_start_31 .. :try_end_31} :catchall_a

    :try_start_32
    throw v2
    :try_end_32
    .catch Ljava/io/FileNotFoundException; {:try_start_32 .. :try_end_32} :catch_6
    .catch Ljava/io/IOException; {:try_start_32 .. :try_end_32} :catch_3
    .catch Lorg/json/JSONException; {:try_start_32 .. :try_end_32} :catch_7
    .catchall {:try_start_32 .. :try_end_32} :catchall_12

    :catchall_b
    move-exception v0

    move-object v3, v0

    .line 483
    :try_start_33
    monitor-exit v2
    :try_end_33
    .catchall {:try_start_33 .. :try_end_33} :catchall_b

    :try_start_34
    throw v3
    :try_end_34
    .catch Ljava/io/FileNotFoundException; {:try_start_34 .. :try_end_34} :catch_6
    .catch Ljava/io/IOException; {:try_start_34 .. :try_end_34} :catch_3
    .catch Lorg/json/JSONException; {:try_start_34 .. :try_end_34} :catch_7
    .catchall {:try_start_34 .. :try_end_34} :catchall_12

    :catch_3
    move-exception v0

    move-object v2, v0

    move v5, v4

    goto :goto_12

    :catchall_c
    move-exception v0

    move v5, v4

    goto :goto_e

    :catchall_d
    move-exception v0

    move v7, v5

    :goto_c
    move-object v4, v0

    .line 435
    :goto_d
    :try_start_35
    monitor-exit v12
    :try_end_35
    .catchall {:try_start_35 .. :try_end_35} :catchall_f

    :try_start_36
    throw v4
    :try_end_36
    .catchall {:try_start_36 .. :try_end_36} :catchall_e

    :catchall_e
    move-exception v0

    move-object v4, v3

    move v5, v7

    goto :goto_f

    :catchall_f
    move-exception v0

    goto :goto_c

    :catchall_10
    move-exception v0

    move v7, v5

    :goto_e
    move-object v4, v3

    :goto_f
    move-object v3, v0

    goto :goto_10

    :catchall_11
    move-exception v0

    move v7, v5

    const/4 v9, 0x0

    move-object v3, v0

    move-object v4, v9

    .line 478
    :goto_10
    :try_start_37
    iget-object v2, v2, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    invoke-static {v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 479
    invoke-static {v4}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$200(Ljava/io/Closeable;)V

    .line 480
    throw v3
    :try_end_37
    .catch Ljava/io/FileNotFoundException; {:try_start_37 .. :try_end_37} :catch_6
    .catch Ljava/io/IOException; {:try_start_37 .. :try_end_37} :catch_2
    .catch Lorg/json/JSONException; {:try_start_37 .. :try_end_37} :catch_7
    .catchall {:try_start_37 .. :try_end_37} :catchall_12

    :catch_4
    move-exception v0

    move v7, v5

    :goto_11
    move-object v2, v0

    :goto_12
    move-object v4, v8

    move v3, v13

    goto/16 :goto_15

    :catchall_12
    move-exception v0

    move-object v2, v0

    move-object v4, v8

    goto :goto_14

    :catch_5
    move-exception v0

    move v7, v5

    :goto_13
    move-object v2, v0

    move-object v4, v8

    goto/16 :goto_15

    :catch_6
    move-exception v0

    move-object v2, v0

    move-object v4, v8

    goto/16 :goto_16

    :catchall_13
    move-exception v0

    const/4 v9, 0x0

    move-object v2, v0

    move-object v4, v9

    .line 538
    :goto_14
    :try_start_38
    sget v3, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v5, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$target:Ljava/lang/String;

    invoke-static {v3, v5, v6, v4, v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v3

    .line 539
    const-string v4, "FileTransfer"

    invoke-virtual {v3}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5, v2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 540
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v4, Lorg/apache/cordova/PluginResult;

    sget-object v5, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v4, v5, v3}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v4}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_38
    .catchall {:try_start_38 .. :try_end_38} :catchall_18

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_39
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    goto/16 :goto_17

    :catchall_14
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_39
    .catchall {:try_start_39 .. :try_end_39} :catchall_14

    throw v3

    :catch_7
    move-exception v0

    move-object v2, v0

    .line 534
    :try_start_3a
    const-string v3, "FileTransfer"

    invoke-virtual {v2}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4, v2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 535
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v4, Lorg/apache/cordova/PluginResult$Status;->JSON_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v3, v4}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    invoke-virtual {v2, v3}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_3a
    .catchall {:try_start_3a .. :try_end_3a} :catchall_18

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_3b
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    goto/16 :goto_17

    :catchall_15
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_3b
    .catchall {:try_start_3b .. :try_end_3b} :catchall_15

    throw v3

    :catch_8
    move-exception v0

    move v7, v5

    const/4 v9, 0x0

    move-object v2, v0

    move-object v4, v9

    .line 529
    :goto_15
    :try_start_3c
    sget v6, Lorg/apache/cordova/filetransfer/FileTransfer;->CONNECTION_ERR:I

    iget-object v7, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    iget-object v8, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$target:Ljava/lang/String;

    invoke-static {v6, v7, v8, v4, v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v4

    .line 530
    const-string v6, "FileTransfer"

    invoke-virtual {v4}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v7

    invoke-static {v6, v7, v2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 531
    const-string v2, "FileTransfer"

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Failed after uploading "

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6, v5}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v6, " of "

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v5, " bytes."

    invoke-virtual {v3, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    .line 532
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v5, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v3, v5, v4}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v3}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_3c
    .catchall {:try_start_3c .. :try_end_3c} :catchall_18

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_3d
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    goto :goto_17

    :catchall_16
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_3d
    .catchall {:try_start_3d .. :try_end_3d} :catchall_16

    throw v3

    :catch_9
    move-exception v0

    const/4 v9, 0x0

    move-object v2, v0

    move-object v4, v9

    .line 525
    :goto_16
    :try_start_3e
    sget v3, Lorg/apache/cordova/filetransfer/FileTransfer;->FILE_NOT_FOUND_ERR:I

    iget-object v5, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$source:Ljava/lang/String;

    iget-object v6, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$target:Ljava/lang/String;

    invoke-static {v3, v5, v6, v4, v2}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$400(ILjava/lang/String;Ljava/lang/String;Ljava/net/URLConnection;Ljava/lang/Throwable;)Lorg/json/JSONObject;

    move-result-object v3

    .line 526
    const-string v4, "FileTransfer"

    invoke-virtual {v3}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5, v2}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 527
    iget-object v2, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$context:Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;

    new-instance v4, Lorg/apache/cordova/PluginResult;

    sget-object v5, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v4, v5, v3}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    invoke-virtual {v2, v4}, Lorg/apache/cordova/filetransfer/FileTransfer$RequestContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_3e
    .catchall {:try_start_3e .. :try_end_3e} :catchall_18

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v2

    monitor-enter v2

    .line 543
    :try_start_3f
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    iget-object v4, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v2

    :goto_17
    return-void

    :catchall_17
    move-exception v0

    move-object v3, v0

    monitor-exit v2
    :try_end_3f
    .catchall {:try_start_3f .. :try_end_3f} :catchall_17

    throw v3

    :catchall_18
    move-exception v0

    move-object v2, v0

    .line 542
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v3

    monitor-enter v3

    .line 543
    :try_start_40
    invoke-static {}, Lorg/apache/cordova/filetransfer/FileTransfer;->access$500()Ljava/util/HashMap;

    move-result-object v4

    iget-object v5, v1, Lorg/apache/cordova/filetransfer/FileTransfer$1;->val$objectId:Ljava/lang/String;

    invoke-virtual {v4, v5}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 544
    monitor-exit v3
    :try_end_40
    .catchall {:try_start_40 .. :try_end_40} :catchall_19

    .line 545
    throw v2

    :catchall_19
    move-exception v0

    move-object v2, v0

    .line 544
    :try_start_41
    monitor-exit v3
    :try_end_41
    .catchall {:try_start_41 .. :try_end_41} :catchall_19

    throw v2
.end method
