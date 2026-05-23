.class Lcom/silkimen/cordovahttp/CordovaHttpUpload;
.super Lcom/silkimen/cordovahttp/CordovaHttpBase;
.source "CordovaHttpUpload.java"


# instance fields
.field private applicationContext:Landroid/content/Context;

.field private filePaths:Lorg/json/JSONArray;

.field private uploadNames:Lorg/json/JSONArray;


# direct methods
.method public constructor <init>(Ljava/lang/String;Lorg/json/JSONObject;Lorg/json/JSONArray;Lorg/json/JSONArray;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Landroid/content/Context;Lorg/apache/cordova/CallbackContext;)V
    .locals 10

    move-object v9, p0

    .line 33
    const-string v1, "POST"

    move-object v0, p0

    move-object v2, p1

    move-object v3, p2

    move v4, p5

    move/from16 v5, p6

    move-object/from16 v6, p7

    move-object/from16 v7, p8

    move-object/from16 v8, p10

    invoke-direct/range {v0 .. v8}, Lcom/silkimen/cordovahttp/CordovaHttpBase;-><init>(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    move-object v0, p3

    .line 34
    iput-object v0, v9, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->filePaths:Lorg/json/JSONArray;

    move-object v0, p4

    .line 35
    iput-object v0, v9, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->uploadNames:Lorg/json/JSONArray;

    move-object/from16 v0, p9

    .line 36
    iput-object v0, v9, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->applicationContext:Landroid/content/Context;

    return-void
.end method

.method private getFileNameFromContentScheme(Landroid/net/Uri;Landroid/content/Context;)Ljava/lang/String;
    .locals 6

    .line 68
    invoke-virtual {p2}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    const/4 v4, 0x0

    const/4 v5, 0x0

    const/4 v2, 0x0

    const/4 v3, 0x0

    move-object v1, p1

    invoke-virtual/range {v0 .. v5}, Landroid/content/ContentResolver;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 70
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result p2

    if-nez p2, :cond_0

    goto :goto_0

    .line 74
    :cond_0
    const-string p2, "_display_name"

    invoke-interface {p1, p2}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result p2

    .line 75
    invoke-interface {p1, p2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object p2

    .line 76
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    return-object p2

    :cond_1
    :goto_0
    const/4 p1, 0x0

    return-object p1
.end method

.method private getMimeTypeFromFileName(Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    if-eqz p1, :cond_1

    .line 82
    const-string v0, "."

    invoke-virtual {p1, v0}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_0

    .line 86
    :cond_0
    invoke-static {}, Landroid/webkit/MimeTypeMap;->getSingleton()Landroid/webkit/MimeTypeMap;

    move-result-object v0

    const/16 v1, 0x2e

    .line 87
    invoke-virtual {p1, v1}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v1

    add-int/lit8 v1, v1, 0x1

    .line 88
    invoke-virtual {p1, v1}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p1

    .line 90
    invoke-virtual {v0, p1}, Landroid/webkit/MimeTypeMap;->getMimeTypeFromExtension(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1

    :cond_1
    :goto_0
    const/4 p1, 0x0

    return-object p1
.end method


# virtual methods
.method protected sendBody(Lcom/silkimen/http/HttpRequest;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 41
    :goto_0
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->filePaths:Lorg/json/JSONArray;

    invoke-virtual {v1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-ge v0, v1, :cond_2

    .line 42
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->uploadNames:Lorg/json/JSONArray;

    invoke-virtual {v1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 43
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->filePaths:Lorg/json/JSONArray;

    invoke-virtual {v2, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    .line 45
    invoke-static {v2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v3

    .line 48
    const-string v4, "file"

    invoke-virtual {v3}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_0

    .line 49
    new-instance v4, Ljava/io/File;

    new-instance v5, Ljava/net/URI;

    invoke-direct {v5, v2}, Ljava/net/URI;-><init>(Ljava/lang/String;)V

    invoke-direct {v4, v5}, Ljava/io/File;-><init>(Ljava/net/URI;)V

    .line 50
    invoke-virtual {v4}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v2

    .line 51
    invoke-direct {p0, v2}, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->getMimeTypeFromFileName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    .line 53
    invoke-virtual {p1, v1, v2, v5, v4}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;

    .line 57
    :cond_0
    const-string v2, "content"

    invoke-virtual {v3}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_1

    .line 58
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->applicationContext:Landroid/content/Context;

    invoke-virtual {v2}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v2

    invoke-virtual {v2, v3}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v2

    .line 59
    iget-object v4, p0, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->applicationContext:Landroid/content/Context;

    invoke-direct {p0, v3, v4}, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->getFileNameFromContentScheme(Landroid/net/Uri;Landroid/content/Context;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v3

    .line 60
    invoke-direct {p0, v3}, Lcom/silkimen/cordovahttp/CordovaHttpUpload;->getMimeTypeFromFileName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 62
    invoke-virtual {p1, v1, v3, v4, v2}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    :cond_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_2
    return-void
.end method
