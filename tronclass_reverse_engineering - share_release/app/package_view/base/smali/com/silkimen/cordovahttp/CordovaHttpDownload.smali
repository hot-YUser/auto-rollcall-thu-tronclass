.class Lcom/silkimen/cordovahttp/CordovaHttpDownload;
.super Lcom/silkimen/cordovahttp/CordovaHttpBase;
.source "CordovaHttpDownload.java"


# instance fields
.field private filePath:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Lorg/json/JSONObject;Ljava/lang/String;IZLcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 9

    .line 22
    const-string v1, "GET"

    const-string v6, "text"

    move-object v0, p0

    move-object v2, p1

    move-object v3, p2

    move v4, p4

    move v5, p5

    move-object v7, p6

    move-object/from16 v8, p7

    invoke-direct/range {v0 .. v8}, Lcom/silkimen/cordovahttp/CordovaHttpBase;-><init>(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    move-object v1, p3

    .line 23
    iput-object v1, v0, Lcom/silkimen/cordovahttp/CordovaHttpDownload;->filePath:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method protected processResponse(Lcom/silkimen/http/HttpRequest;Lcom/silkimen/cordovahttp/CordovaHttpResponse;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 28
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v0

    invoke-virtual {p2, v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 29
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->url()Ljava/net/URL;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/URL;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setUrl(Ljava/lang/String;)V

    .line 30
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->headers()Ljava/util/Map;

    move-result-object v0

    invoke-virtual {p2, v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setHeaders(Ljava/util/Map;)V

    .line 32
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v0

    const/16 v1, 0xc8

    if-lt v0, v1, :cond_0

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v0

    const/16 v1, 0x12c

    if-ge v0, v1, :cond_0

    .line 33
    new-instance v0, Ljava/io/File;

    new-instance v1, Ljava/net/URI;

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpDownload;->filePath:Ljava/lang/String;

    invoke-direct {v1, v2}, Ljava/net/URI;-><init>(Ljava/lang/String;)V

    invoke-direct {v0, v1}, Ljava/io/File;-><init>(Ljava/net/URI;)V

    .line 34
    invoke-static {}, Lorg/apache/cordova/file/FileUtils;->getFilePlugin()Lorg/apache/cordova/file/FileUtils;

    move-result-object v1

    invoke-virtual {v1, v0}, Lorg/apache/cordova/file/FileUtils;->getEntryForFile(Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object v1

    .line 36
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/File;)Lcom/silkimen/http/HttpRequest;

    .line 37
    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setFileEntry(Lorg/json/JSONObject;)V

    goto :goto_0

    .line 39
    :cond_0
    const-string p1, "There was an error downloading the file"

    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
