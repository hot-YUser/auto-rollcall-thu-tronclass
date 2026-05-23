.class public Lcom/silkimen/cordovahttp/CordovaHttpPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "CordovaHttpPlugin.java"


# static fields
.field private static final TAG:Ljava/lang/String; = "Cordova-Plugin-HTTP"


# instance fields
.field private tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 20
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private downloadFile(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 9
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 135
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    const/4 v0, 0x1

    .line 136
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    const/4 v1, 0x2

    .line 137
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v4

    const/4 v1, 0x3

    .line 138
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v1

    mul-int/lit16 v5, v1, 0x3e8

    const/4 v1, 0x4

    .line 139
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v6

    .line 141
    new-instance p1, Lcom/silkimen/cordovahttp/CordovaHttpDownload;

    iget-object v7, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    move-object v1, p1

    move-object v8, p2

    invoke-direct/range {v1 .. v8}, Lcom/silkimen/cordovahttp/CordovaHttpDownload;-><init>(Ljava/lang/String;Lorg/json/JSONObject;Ljava/lang/String;IZLcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    .line 144
    iget-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p2

    invoke-interface {p2, p1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0
.end method

.method private executeHttpRequestWithData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 12
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 101
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v3

    const/4 v0, 0x1

    .line 102
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v5

    const/4 v1, 0x2

    .line 103
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v4

    const/4 v1, 0x3

    .line 104
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v6

    const/4 v1, 0x4

    .line 105
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v1

    mul-int/lit16 v7, v1, 0x3e8

    const/4 v1, 0x5

    .line 106
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v8

    const/4 v1, 0x6

    .line 107
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v9

    .line 109
    new-instance p2, Lcom/silkimen/cordovahttp/CordovaHttpOperation;

    invoke-virtual {p1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v2

    iget-object v10, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    move-object v1, p2

    move-object v11, p3

    invoke-direct/range {v1 .. v11}, Lcom/silkimen/cordovahttp/CordovaHttpOperation;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    .line 112
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0
.end method

.method private executeHttpRequestWithoutData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 10
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 84
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v3

    const/4 v0, 0x1

    .line 85
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v4

    const/4 v1, 0x2

    .line 86
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v1

    mul-int/lit16 v5, v1, 0x3e8

    const/4 v1, 0x3

    .line 87
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v6

    const/4 v1, 0x4

    .line 88
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v7

    .line 90
    new-instance p2, Lcom/silkimen/cordovahttp/CordovaHttpOperation;

    invoke-virtual {p1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v2

    iget-object v8, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    move-object v1, p2

    move-object v9, p3

    invoke-direct/range {v1 .. v9}, Lcom/silkimen/cordovahttp/CordovaHttpOperation;-><init>(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    .line 93
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0
.end method

.method private setClientAuthMode(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 13
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x2

    .line 159
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->isNull(I)Z

    move-result v1

    const/4 v2, 0x0

    const/4 v3, 0x0

    if-eqz v1, :cond_0

    move-object v7, v2

    goto :goto_0

    :cond_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0, v3}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object v0

    move-object v7, v0

    .line 161
    :goto_0
    new-instance v0, Lcom/silkimen/cordovahttp/CordovaClientAuth;

    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v5

    const/4 v1, 0x1

    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->isNull(I)Z

    move-result v3

    if-eqz v3, :cond_1

    goto :goto_1

    :cond_1
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    :goto_1
    move-object v6, v2

    const/4 v2, 0x3

    .line 162
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v8

    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v9

    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v10

    iget-object v11, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    move-object v4, v0

    move-object v12, p2

    invoke-direct/range {v4 .. v12}, Lcom/silkimen/cordovahttp/CordovaClientAuth;-><init>(Ljava/lang/String;Ljava/lang/String;[BLjava/lang/String;Landroid/app/Activity;Landroid/content/Context;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    .line 165
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    invoke-interface {p1, v0}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v1
.end method

.method private setServerTrustMode(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 150
    new-instance v0, Lcom/silkimen/cordovahttp/CordovaServerTrust;

    const/4 v1, 0x0

    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-direct {v0, p1, v1, v2, p2}, Lcom/silkimen/cordovahttp/CordovaServerTrust;-><init>(Ljava/lang/String;Landroid/app/Activity;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V

    .line 153
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    invoke-interface {p1, v0}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    const/4 p1, 0x1

    return p1
.end method

.method private uploadFiles(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 12
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 118
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    const/4 v0, 0x1

    .line 119
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    const/4 v1, 0x2

    .line 120
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object v4

    const/4 v1, 0x3

    .line 121
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object v5

    const/4 v1, 0x4

    .line 122
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result v1

    mul-int/lit16 v6, v1, 0x3e8

    const/4 v1, 0x5

    .line 123
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v7

    const/4 v1, 0x6

    .line 124
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v8

    .line 126
    new-instance p1, Lcom/silkimen/cordovahttp/CordovaHttpUpload;

    iget-object v9, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 127
    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v10

    move-object v1, p1

    move-object v11, p2

    invoke-direct/range {v1 .. v11}, Lcom/silkimen/cordovahttp/CordovaHttpUpload;-><init>(Ljava/lang/String;Lorg/json/JSONObject;Lorg/json/JSONArray;Lorg/json/JSONArray;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Landroid/content/Context;Lorg/apache/cordova/CallbackContext;)V

    .line 129
    iget-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p2

    invoke-interface {p2, p1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    .line 54
    :cond_0
    const-string v1, "get"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 55
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithoutData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 56
    :cond_1
    const-string v1, "head"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 57
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithoutData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 58
    :cond_2
    const-string v1, "delete"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 59
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithoutData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 60
    :cond_3
    const-string v1, "options"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 61
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithoutData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 62
    :cond_4
    const-string v1, "post"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    .line 63
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 64
    :cond_5
    const-string v1, "put"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_6

    .line 65
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 66
    :cond_6
    const-string v1, "patch"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    .line 67
    invoke-direct {p0, p1, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->executeHttpRequestWithData(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 68
    :cond_7
    const-string v1, "uploadFiles"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_8

    .line 69
    invoke-direct {p0, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->uploadFiles(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 70
    :cond_8
    const-string v1, "downloadFile"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_9

    .line 71
    invoke-direct {p0, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->downloadFile(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 72
    :cond_9
    const-string v1, "setServerTrustMode"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_a

    .line 73
    invoke-direct {p0, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->setServerTrustMode(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 74
    :cond_a
    const-string v1, "setClientAuthMode"

    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_b

    .line 75
    invoke-direct {p0, p2, p3}, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->setClientAuthMode(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    :cond_b
    return v0
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 1

    .line 27
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    .line 29
    new-instance p1, Lcom/silkimen/http/TLSConfiguration;

    invoke-direct {p1}, Lcom/silkimen/http/TLSConfiguration;-><init>()V

    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 32
    :try_start_0
    const-string p1, "AndroidCAStore"

    invoke-static {p1}, Ljava/security/KeyStore;->getInstance(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object p1

    .line 33
    invoke-static {}, Ljavax/net/ssl/TrustManagerFactory;->getDefaultAlgorithm()Ljava/lang/String;

    move-result-object p2

    .line 34
    invoke-static {p2}, Ljavax/net/ssl/TrustManagerFactory;->getInstance(Ljava/lang/String;)Ljavax/net/ssl/TrustManagerFactory;

    move-result-object p2

    const/4 v0, 0x0

    .line 36
    invoke-virtual {p1, v0}, Ljava/security/KeyStore;->load(Ljava/security/KeyStore$LoadStoreParameter;)V

    .line 37
    invoke-virtual {p2, p1}, Ljavax/net/ssl/TrustManagerFactory;->init(Ljava/security/KeyStore;)V

    .line 39
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {p1, v0}, Lcom/silkimen/http/TLSConfiguration;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    .line 40
    iget-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpPlugin;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {p2}, Ljavax/net/ssl/TrustManagerFactory;->getTrustManagers()[Ljavax/net/ssl/TrustManager;

    move-result-object p2

    invoke-virtual {p1, p2}, Lcom/silkimen/http/TLSConfiguration;->setTrustManagers([Ljavax/net/ssl/TrustManager;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 42
    const-string p2, "Cordova-Plugin-HTTP"

    const-string v0, "An error occured while loading system\'s CA certificates"

    invoke-static {p2, v0, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :goto_0
    return-void
.end method
