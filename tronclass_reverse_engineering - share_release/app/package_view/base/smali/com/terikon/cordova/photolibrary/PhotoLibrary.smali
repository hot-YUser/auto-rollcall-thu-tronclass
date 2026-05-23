.class public Lcom/terikon/cordova/photolibrary/PhotoLibrary;
.super Lorg/apache/cordova/CordovaPlugin;
.source "PhotoLibrary.java"


# static fields
.field public static final ACTION_GET_ALBUMS:Ljava/lang/String; = "getAlbums"

.field public static final ACTION_GET_LIBRARY:Ljava/lang/String; = "getLibrary"

.field public static final ACTION_GET_PHOTO:Ljava/lang/String; = "getPhoto"

.field public static final ACTION_GET_THUMBNAIL:Ljava/lang/String; = "getThumbnail"

.field public static final ACTION_REQUEST_AUTHORIZATION:Ljava/lang/String; = "requestAuthorization"

.field public static final ACTION_SAVE_IMAGE:Ljava/lang/String; = "saveImage"

.field public static final ACTION_SAVE_VIDEO:Ljava/lang/String; = "saveVideo"

.field public static final ACTION_STOP_CACHING:Ljava/lang/String; = "stopCaching"

.field public static final DEFAULT_HEIGHT:I = 0x180

.field public static final DEFAULT_QUALITY:D = 0.5

.field public static final DEFAULT_WIDTH:I = 0x200

.field public static final PHOTO_LIBRARY_PROTOCOL:Ljava/lang/String; = "cdvphotolibrary"

.field private static final READ_EXTERNAL_STORAGE:Ljava/lang/String; = "android.permission.READ_EXTERNAL_STORAGE"

.field private static final REQUEST_AUTHORIZATION_REQ_CODE:I = 0x0

.field private static final WRITE_EXTERNAL_STORAGE:Ljava/lang/String; = "android.permission.WRITE_EXTERNAL_STORAGE"


# instance fields
.field public callbackContext:Lorg/apache/cordova/CallbackContext;

.field private service:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 22
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;
    .locals 0

    .line 22
    iget-object p0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->service:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    return-object p0
.end method

.method static synthetic access$100(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Landroid/content/Context;
    .locals 0

    .line 22
    invoke-direct {p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->getContext()Landroid/content/Context;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$200(Ljava/util/ArrayList;IZ)Lorg/json/JSONObject;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 22
    invoke-static {p0, p1, p2}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->createGetLibraryResult(Ljava/util/ArrayList;IZ)Lorg/json/JSONObject;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$300(Ljava/util/ArrayList;)Lorg/json/JSONArray;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 22
    invoke-static {p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->createGetAlbumsResult(Ljava/util/ArrayList;)Lorg/json/JSONArray;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$400(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/apache/cordova/PluginResult$Status;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;)Lorg/apache/cordova/PluginResult;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 22
    invoke-direct {p0, p1, p2}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->createMultipartPluginResult(Lorg/apache/cordova/PluginResult$Status;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;)Lorg/apache/cordova/PluginResult;

    move-result-object p0

    return-object p0
.end method

.method private static createGetAlbumsResult(Ljava/util/ArrayList;)Lorg/json/JSONArray;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Lorg/json/JSONObject;",
            ">;)",
            "Lorg/json/JSONArray;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 395
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0, p0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    return-object v0
.end method

.method private static createGetLibraryResult(Ljava/util/ArrayList;IZ)Lorg/json/JSONObject;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Lorg/json/JSONObject;",
            ">;IZ)",
            "Lorg/json/JSONObject;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 399
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 400
    const-string v1, "chunkNum"

    invoke-virtual {v0, v1, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 401
    const-string p1, "isLastChunk"

    invoke-virtual {v0, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 402
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1, p0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    const-string p0, "library"

    invoke-virtual {v0, p0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-object v0
.end method

.method private createMultipartPluginResult(Lorg/apache/cordova/PluginResult$Status;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;)Lorg/apache/cordova/PluginResult;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 365
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 366
    iget-object v1, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->bytes:[B

    const/4 v2, 0x2

    invoke-static {v1, v2}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object v1

    const-string v2, "data"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 367
    const-string v1, "mimeType"

    iget-object p2, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->mimeType:Ljava/lang/String;

    invoke-virtual {v0, v1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 369
    new-instance p2, Lorg/apache/cordova/PluginResult;

    invoke-direct {p2, p1, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    return-object p2
.end method

.method private getContext()Landroid/content/Context;
    .locals 1

    .line 356
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    return-object v0
.end method

.method private requestAuthorization(ZZ)V
    .locals 2

    .line 381
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    if-eqz p1, :cond_0

    .line 384
    const-string p1, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    if-eqz p2, :cond_1

    .line 388
    const-string p1, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 391
    :cond_1
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const/4 p2, 0x0

    new-array v1, p2, [Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Ljava/lang/String;

    invoke-interface {p1, p0, p2, v0}, Lorg/apache/cordova/CordovaInterface;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 52
    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const/4 v0, 0x0

    .line 56
    :try_start_0
    const-string v1, "getLibrary"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x1

    if-eqz v1, :cond_0

    .line 57
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;

    invoke-direct {v1, p0, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v2

    .line 98
    :cond_0
    const-string v1, "getAlbums"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 99
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance p2, Lcom/terikon/cordova/photolibrary/PhotoLibrary$2;

    invoke-direct {p2, p0, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$2;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v2

    .line 120
    :cond_1
    const-string v1, "getThumbnail"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 121
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;

    invoke-direct {v1, p0, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v2

    .line 147
    :cond_2
    const-string v1, "getPhoto"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 149
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$4;

    invoke-direct {v1, p0, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$4;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v2

    .line 171
    :cond_3
    const-string v1, "stopCaching"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 174
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    return v2

    .line 177
    :cond_4
    const-string v1, "requestAuthorization"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1

    if-eqz v1, :cond_8

    .line 180
    :try_start_1
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    .line 181
    const-string p2, "read"

    invoke-virtual {p1, p2}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p2

    .line 182
    const-string v1, "write"

    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p1

    if-eqz p2, :cond_5

    .line 184
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v3, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-interface {v1, v3}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_6

    :cond_5
    if-eqz p1, :cond_7

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v3, "android.permission.WRITE_EXTERNAL_STORAGE"

    .line 185
    invoke-interface {v1, v3}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_7

    .line 186
    :cond_6
    invoke-direct {p0, p2, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->requestAuthorization(ZZ)V

    goto :goto_0

    .line 188
    :cond_7
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 191
    :try_start_2
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 192
    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return v2

    .line 196
    :cond_8
    const-string v1, "saveImage"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_9

    .line 197
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;

    invoke-direct {v1, p0, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v2

    .line 224
    :cond_9
    const-string v1, "saveVideo"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_a

    .line 225
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance v1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;

    invoke-direct {v1, p0, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_1

    return v2

    :cond_a
    return v0

    :catch_1
    move-exception p1

    .line 254
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 255
    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return v0
.end method

.method public handleOpenForRead(Landroid/net/Uri;)Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;
    .locals 10
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 273
    invoke-virtual {p0, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->fromPluginUri(Landroid/net/Uri;)Landroid/net/Uri;

    move-result-object v0

    .line 275
    invoke-virtual {v0}, Landroid/net/Uri;->getHost()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v1

    const-string v2, "thumbnail"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x1

    const/4 v3, 0x0

    if-eqz v1, :cond_0

    invoke-virtual {v0}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    move v1, v2

    goto :goto_0

    :cond_0
    move v1, v3

    .line 276
    :goto_0
    invoke-virtual {v0}, Landroid/net/Uri;->getHost()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v4

    const-string v5, "photo"

    invoke-virtual {v4, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_1

    invoke-virtual {v0}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/String;->isEmpty()Z

    move-result v4

    if-eqz v4, :cond_1

    goto :goto_1

    :cond_1
    move v2, v3

    :goto_1
    if-nez v1, :cond_3

    if-eqz v2, :cond_2

    goto :goto_2

    .line 279
    :cond_2
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "URI not supported by PhotoLibrary"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 282
    :cond_3
    :goto_2
    const-string v2, "photoId"

    invoke-virtual {v0, v2}, Landroid/net/Uri;->getQueryParameter(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    if-eqz v5, :cond_c

    .line 283
    invoke-virtual {v5}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-nez v2, :cond_c

    if-eqz v1, :cond_b

    .line 289
    const-string v1, "width"

    invoke-virtual {v0, v1}, Landroid/net/Uri;->getQueryParameter(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_5

    .line 292
    :try_start_0
    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_4

    goto :goto_3

    :cond_4
    invoke-static {v1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v1
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_4

    .line 294
    :catch_0
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "Incorrect \'width\' query parameter"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_5
    :goto_3
    const/16 v1, 0x200

    :goto_4
    move v6, v1

    .line 297
    const-string v1, "height"

    invoke-virtual {v0, v1}, Landroid/net/Uri;->getQueryParameter(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_7

    .line 300
    :try_start_1
    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_6

    goto :goto_5

    :cond_6
    invoke-static {v1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v1
    :try_end_1
    .catch Ljava/lang/NumberFormatException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_6

    .line 302
    :catch_1
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "Incorrect \'height\' query parameter"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_7
    :goto_5
    const/16 v1, 0x180

    :goto_6
    move v7, v1

    .line 305
    const-string v1, "quality"

    invoke-virtual {v0, v1}, Landroid/net/Uri;->getQueryParameter(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_9

    .line 308
    :try_start_2
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_8

    goto :goto_7

    :cond_8
    invoke-static {v0}, Ljava/lang/Double;->parseDouble(Ljava/lang/String;)D

    move-result-wide v0
    :try_end_2
    .catch Ljava/lang/NumberFormatException; {:try_start_2 .. :try_end_2} :catch_2

    goto :goto_8

    .line 310
    :catch_2
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "Incorrect \'quality\' query parameter"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_9
    :goto_7
    const-wide/high16 v0, 0x3fe0000000000000L    # 0.5

    :goto_8
    move-wide v8, v0

    .line 313
    iget-object v3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->service:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->getContext()Landroid/content/Context;

    move-result-object v4

    invoke-virtual/range {v3 .. v9}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getThumbnail(Landroid/content/Context;Ljava/lang/String;IID)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;

    move-result-object v0

    if-eqz v0, :cond_a

    .line 319
    new-instance v3, Ljava/io/ByteArrayInputStream;

    iget-object v1, v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->bytes:[B

    invoke-direct {v3, v1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    .line 321
    new-instance v8, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;

    iget-object v4, v0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->mimeType:Ljava/lang/String;

    invoke-virtual {v3}, Ljava/io/InputStream;->available()I

    move-result v0

    int-to-long v5, v0

    const/4 v7, 0x0

    move-object v1, v8

    move-object v2, p1

    invoke-direct/range {v1 .. v7}, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;-><init>(Landroid/net/Uri;Ljava/io/InputStream;Ljava/lang/String;JLandroid/content/res/AssetFileDescriptor;)V

    return-object v8

    .line 316
    :cond_a
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "Could not create thumbnail"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 325
    :cond_b
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->service:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v0, v1, v5}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getPhotoAsStream(Landroid/content/Context;Ljava/lang/String;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;

    move-result-object v0

    .line 326
    invoke-virtual {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;->getStream()Ljava/io/InputStream;

    move-result-object v3

    .line 328
    new-instance v8, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;

    invoke-virtual {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureAsStream;->getMimeType()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3}, Ljava/io/InputStream;->available()I

    move-result v0

    int-to-long v5, v0

    const/4 v7, 0x0

    move-object v1, v8

    move-object v2, p1

    invoke-direct/range {v1 .. v7}, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;-><init>(Landroid/net/Uri;Ljava/io/InputStream;Ljava/lang/String;JLandroid/content/res/AssetFileDescriptor;)V

    return-object v8

    .line 284
    :cond_c
    new-instance p1, Ljava/io/FileNotFoundException;

    const-string v0, "Missing \'photoId\' query parameter"

    invoke-direct {p1, v0}, Ljava/io/FileNotFoundException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 336
    invoke-super {p0, p1, p2, p3}, Lorg/apache/cordova/CordovaPlugin;->onRequestPermissionResult(I[Ljava/lang/String;[I)V

    .line 338
    array-length p1, p3

    const/4 p2, 0x0

    :goto_0
    if-ge p2, p1, :cond_1

    aget v0, p3, p2

    const/4 v1, -0x1

    if-ne v0, v1, :cond_0

    .line 340
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const-string p2, "Permission Denial: This application is not allowed to access Photo data."

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    :cond_0
    add-int/lit8 p2, p2, 0x1

    goto :goto_0

    .line 345
    :cond_1
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void
.end method

.method protected pluginInitialize()V
    .locals 1

    .line 43
    invoke-super {p0}, Lorg/apache/cordova/CordovaPlugin;->pluginInitialize()V

    .line 45
    invoke-static {}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getInstance()Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    move-result-object v0

    iput-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->service:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    return-void
.end method

.method public remapUri(Landroid/net/Uri;)Landroid/net/Uri;
    .locals 2

    .line 263
    const-string v0, "cdvphotolibrary"

    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 266
    :cond_0
    invoke-virtual {p0, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->toPluginUri(Landroid/net/Uri;)Landroid/net/Uri;

    move-result-object p1

    return-object p1
.end method
