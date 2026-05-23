.class abstract Lcom/silkimen/cordovahttp/CordovaHttpBase;
.super Ljava/lang/Object;
.source "CordovaHttpBase.java"

# interfaces
.implements Ljava/lang/Runnable;


# static fields
.field protected static final TAG:Ljava/lang/String; = "Cordova-Plugin-HTTP"


# instance fields
.field protected callbackContext:Lorg/apache/cordova/CallbackContext;

.field protected data:Ljava/lang/Object;

.field protected followRedirects:Z

.field protected headers:Lorg/json/JSONObject;

.field protected method:Ljava/lang/String;

.field protected responseType:Ljava/lang/String;

.field protected serializer:Ljava/lang/String;

.field protected timeout:I

.field protected tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

.field protected url:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 47
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 49
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    .line 50
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    .line 51
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    .line 52
    iput-object p4, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    .line 53
    iput-object p5, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    .line 54
    iput p6, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    .line 55
    iput-boolean p7, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    .line 56
    iput-object p8, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    .line 57
    iput-object p9, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 58
    iput-object p10, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 62
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    const-string v0, "none"

    iput-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    .line 64
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    .line 65
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    .line 66
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    .line 67
    iput p4, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    .line 68
    iput-boolean p5, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    .line 69
    iput-object p6, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    .line 70
    iput-object p7, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 71
    iput-object p8, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method protected createRequest()Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 119
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    invoke-direct {v0, v1, v2}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method protected prepareRequest(Lcom/silkimen/http/HttpRequest;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 123
    iget-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->followRedirects(Z)Lcom/silkimen/http/HttpRequest;

    .line 124
    iget v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->readTimeout(I)Lcom/silkimen/http/HttpRequest;

    .line 125
    const-string v0, "UTF-8"

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->acceptCharset(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    const/4 v0, 0x1

    .line 126
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->uncompress(Z)Lcom/silkimen/http/HttpRequest;

    .line 127
    new-instance v0, Lcom/silkimen/http/OkConnectionFactory;

    invoke-direct {v0}, Lcom/silkimen/http/OkConnectionFactory;-><init>()V

    invoke-static {v0}, Lcom/silkimen/http/HttpRequest;->setConnectionFactory(Lcom/silkimen/http/HttpRequest$ConnectionFactory;)V

    .line 129
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getHostnameVerifier()Ljavax/net/ssl/HostnameVerifier;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 130
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getHostnameVerifier()Ljavax/net/ssl/HostnameVerifier;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)Lcom/silkimen/http/HttpRequest;

    .line 133
    :cond_0
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getTLSSocketFactory()Ljavax/net/ssl/SSLSocketFactory;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->setSSLSocketFactory(Ljavax/net/ssl/SSLSocketFactory;)Lcom/silkimen/http/HttpRequest;

    .line 136
    invoke-virtual {p0, p1}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->setContentType(Lcom/silkimen/http/HttpRequest;)V

    .line 138
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    invoke-static {v0}, Lcom/silkimen/http/JsonUtils;->getStringMap(Lorg/json/JSONObject;)Ljava/util/HashMap;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->headers(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;

    return-void
.end method

.method protected processResponse(Lcom/silkimen/http/HttpRequest;Lcom/silkimen/cordovahttp/CordovaHttpResponse;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 188
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 189
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

    .line 191
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 192
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->url()Ljava/net/URL;

    move-result-object v1

    invoke-virtual {v1}, Ljava/net/URL;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setUrl(Ljava/lang/String;)V

    .line 193
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->headers()Ljava/util/Map;

    move-result-object v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setHeaders(Ljava/util/Map;)V

    .line 195
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    const/16 v2, 0xc8

    if-lt v1, v2, :cond_2

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    const/16 v2, 0x12c

    if-ge v1, v2, :cond_2

    .line 196
    const-string v1, "text"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_1

    const-string v1, "json"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_0

    .line 200
    :cond_0
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setData([B)V

    goto :goto_1

    .line 197
    :cond_1
    :goto_0
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody([BLjava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 198
    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setBody(Ljava/lang/String;)V

    goto :goto_1

    .line 203
    :cond_2
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody([BLjava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method public run()V
    .locals 5

    .line 76
    const-string v0, "Cordova-Plugin-HTTP"

    new-instance v1, Lcom/silkimen/cordovahttp/CordovaHttpResponse;

    invoke-direct {v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;-><init>()V

    const/4 v2, -0x1

    .line 79
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->createRequest()Lcom/silkimen/http/HttpRequest;

    move-result-object v3

    .line 80
    invoke-virtual {p0, v3}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->prepareRequest(Lcom/silkimen/http/HttpRequest;)V

    .line 81
    invoke-virtual {p0, v3}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->sendBody(Lcom/silkimen/http/HttpRequest;)V

    .line 82
    invoke-virtual {p0, v3, v1}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->processResponse(Lcom/silkimen/http/HttpRequest;Lcom/silkimen/cordovahttp/CordovaHttpResponse;)V
    :try_end_0
    .catch Lcom/silkimen/http/HttpRequest$HttpRequestException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto/16 :goto_0

    :catch_0
    move-exception v3

    .line 102
    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 103
    invoke-virtual {v3}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    .line 104
    const-string v2, "An unexpected error occured"

    invoke-static {v0, v2, v3}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto/16 :goto_0

    :catch_1
    move-exception v3

    .line 84
    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v4

    instance-of v4, v4, Ljavax/net/ssl/SSLException;

    if-eqz v4, :cond_0

    const/4 v2, -0x2

    .line 85
    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 86
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "TLS connection could not be established: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    .line 87
    const-string v2, "TLS connection could not be established"

    invoke-static {v0, v2, v3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 88
    :cond_0
    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v4

    instance-of v4, v4, Ljava/net/UnknownHostException;

    if-eqz v4, :cond_1

    const/4 v2, -0x3

    .line 89
    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 90
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "Host could not be resolved: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    .line 91
    const-string v2, "Host could not be resolved"

    invoke-static {v0, v2, v3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 92
    :cond_1
    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v4

    instance-of v4, v4, Ljava/net/SocketTimeoutException;

    if-eqz v4, :cond_2

    const/4 v2, -0x4

    .line 93
    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 94
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "Request timed out: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    .line 95
    const-string v2, "Request timed out"

    invoke-static {v0, v2, v3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 97
    :cond_2
    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 98
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "There was an error with the request: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v4

    invoke-virtual {v4}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    .line 99
    const-string v2, "Generic request error"

    invoke-static {v0, v2, v3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 108
    :goto_0
    :try_start_1
    invoke-virtual {v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->hasFailed()Z

    move-result v2

    if-eqz v2, :cond_3

    .line 109
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->toJSON()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v2, v1}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 111
    :cond_3
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->toJSON()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v2, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_2

    goto :goto_1

    :catch_2
    move-exception v1

    .line 114
    const-string v2, "An unexpected error occured while creating HTTP response object"

    invoke-static {v0, v2, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :goto_1
    return-void
.end method

.method protected sendBody(Lcom/silkimen/http/HttpRequest;)V
    .locals 11
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 156
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    if-nez v0, :cond_0

    return-void

    .line 160
    :cond_0
    const-string v0, "json"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 161
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    goto/16 :goto_2

    .line 162
    :cond_1
    const-string v0, "utf8"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 163
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Lorg/json/JSONObject;

    const-string v1, "text"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    goto/16 :goto_2

    .line 164
    :cond_2
    const-string v0, "raw"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_3

    .line 165
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Ljava/lang/String;

    invoke-static {v0, v1}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send([B)Lcom/silkimen/http/HttpRequest;

    goto/16 :goto_2

    .line 166
    :cond_3
    const-string v0, "urlencoded"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_4

    .line 167
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Lorg/json/JSONObject;

    invoke-static {v0}, Lcom/silkimen/http/JsonUtils;->getObjectMap(Lorg/json/JSONObject;)Ljava/util/HashMap;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->form(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;

    goto :goto_2

    .line 168
    :cond_4
    const-string v0, "multipart"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 169
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Lorg/json/JSONObject;

    const-string v2, "buffers"

    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    .line 170
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v2, Lorg/json/JSONObject;

    const-string v3, "names"

    invoke-virtual {v2, v3}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v2

    .line 171
    iget-object v3, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v3, Lorg/json/JSONObject;

    const-string v4, "fileNames"

    invoke-virtual {v3, v4}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v3

    .line 172
    iget-object v4, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v4, Lorg/json/JSONObject;

    const-string v5, "types"

    invoke-virtual {v4, v5}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v4

    move v5, v1

    .line 174
    :goto_0
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result v6

    if-ge v5, v6, :cond_6

    .line 175
    invoke-virtual {v0, v5}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v6

    invoke-static {v6, v1}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object v6

    .line 176
    invoke-virtual {v2, v5}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v7

    .line 178
    invoke-virtual {v3, v5}, Lorg/json/JSONArray;->isNull(I)Z

    move-result v8

    if-eqz v8, :cond_5

    .line 179
    new-instance v8, Ljava/lang/String;

    const-string v9, "UTF-8"

    invoke-direct {v8, v6, v9}, Ljava/lang/String;-><init>([BLjava/lang/String;)V

    invoke-virtual {p1, v7, v8}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_1

    .line 181
    :cond_5
    invoke-virtual {v3, v5}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v8

    invoke-virtual {v4, v5}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v9

    new-instance v10, Ljava/io/ByteArrayInputStream;

    invoke-direct {v10, v6}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-virtual {p1, v7, v8, v9, v10}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    :goto_1
    add-int/lit8 v5, v5, 0x1

    goto :goto_0

    :cond_6
    :goto_2
    return-void
.end method

.method protected setContentType(Lcom/silkimen/http/HttpRequest;)V
    .locals 3

    .line 142
    const-string v0, "json"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const-string v1, "UTF-8"

    if-eqz v0, :cond_0

    .line 143
    const-string v0, "application/json"

    invoke-virtual {p1, v0, v1}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    .line 144
    :cond_0
    const-string v0, "utf8"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 145
    const-string v0, "text/plain"

    invoke-virtual {p1, v0, v1}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    .line 146
    :cond_1
    const-string v0, "raw"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 147
    const-string v0, "application/octet-stream"

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    .line 148
    :cond_2
    const-string v0, "urlencoded"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_3

    goto :goto_0

    .line 150
    :cond_3
    const-string v0, "multipart"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_4

    .line 151
    const-string v0, "multipart/form-data"

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    :cond_4
    :goto_0
    return-void
.end method
