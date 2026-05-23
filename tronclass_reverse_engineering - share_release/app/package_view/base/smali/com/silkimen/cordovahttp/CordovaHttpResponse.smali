.class Lcom/silkimen/cordovahttp/CordovaHttpResponse;
.super Ljava/lang/Object;
.source "CordovaHttpResponse.java"


# instance fields
.field private body:Ljava/lang/String;

.field private error:Ljava/lang/String;

.field private fileEntry:Lorg/json/JSONObject;

.field private hasFailed:Z

.field private headers:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation
.end field

.field private isFileOperation:Z

.field private isRawResponse:Z

.field private rawData:[B

.field private status:I

.field private url:Ljava/lang/String;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private getFilteredHeaders()Ljava/util/Map;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 87
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    .line 89
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->headers:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :cond_0
    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/util/Map$Entry;

    .line 90
    invoke-interface {v2}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 91
    invoke-interface {v2}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/util/List;

    if-eqz v3, :cond_0

    .line 93
    invoke-interface {v2}, Ljava/util/List;->isEmpty()Z

    move-result v4

    if-nez v4, :cond_0

    .line 94
    invoke-virtual {v3}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v3

    const-string v4, ", "

    invoke-static {v4, v2}, Landroid/text/TextUtils;->join(Ljava/lang/CharSequence;Ljava/lang/Iterable;)Ljava/lang/String;

    move-result-object v2

    invoke-interface {v0, v3, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    :cond_1
    return-object v0
.end method


# virtual methods
.method public hasFailed()Z
    .locals 1

    .line 60
    iget-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->hasFailed:Z

    return v0
.end method

.method public setBody(Ljava/lang/String;)V
    .locals 0

    .line 41
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->body:Ljava/lang/String;

    return-void
.end method

.method public setData([B)V
    .locals 1

    const/4 v0, 0x1

    .line 45
    iput-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->isRawResponse:Z

    .line 46
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->rawData:[B

    return-void
.end method

.method public setErrorMessage(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x1

    .line 55
    iput-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->hasFailed:Z

    .line 56
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->error:Ljava/lang/String;

    return-void
.end method

.method public setFileEntry(Lorg/json/JSONObject;)V
    .locals 1

    const/4 v0, 0x1

    .line 50
    iput-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->isFileOperation:Z

    .line 51
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->fileEntry:Lorg/json/JSONObject;

    return-void
.end method

.method public setHeaders(Ljava/util/Map;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;)V"
        }
    .end annotation

    .line 37
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->headers:Ljava/util/Map;

    return-void
.end method

.method public setStatus(I)V
    .locals 0

    .line 29
    iput p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->status:I

    return-void
.end method

.method public setUrl(Ljava/lang/String;)V
    .locals 0

    .line 33
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->url:Ljava/lang/String;

    return-void
.end method

.method public toJSON()Lorg/json/JSONObject;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 64
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 66
    const-string v1, "status"

    iget v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->status:I

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 67
    const-string v1, "url"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->url:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 69
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->headers:Ljava/util/Map;

    if-eqz v1, :cond_0

    invoke-interface {v1}, Ljava/util/Map;->isEmpty()Z

    move-result v1

    if-nez v1, :cond_0

    .line 70
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {p0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->getFilteredHeaders()Ljava/util/Map;

    move-result-object v2

    invoke-direct {v1, v2}, Lorg/json/JSONObject;-><init>(Ljava/util/Map;)V

    const-string v2, "headers"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 73
    :cond_0
    iget-boolean v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->hasFailed:Z

    if-eqz v1, :cond_1

    .line 74
    const-string v1, "error"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->error:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 75
    :cond_1
    iget-boolean v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->isFileOperation:Z

    if-eqz v1, :cond_2

    .line 76
    const-string v1, "file"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->fileEntry:Lorg/json/JSONObject;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 77
    :cond_2
    iget-boolean v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->isRawResponse:Z

    const-string v2, "data"

    if-eqz v1, :cond_3

    .line 78
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->rawData:[B

    const/4 v3, 0x0

    invoke-static {v1, v3}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 80
    :cond_3
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->body:Ljava/lang/String;

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    :goto_0
    return-object v0
.end method
