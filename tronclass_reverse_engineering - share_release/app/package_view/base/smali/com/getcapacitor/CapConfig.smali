.class public Lcom/getcapacitor/CapConfig;
.super Ljava/lang/Object;
.source "CapConfig.java"


# instance fields
.field private config:Lorg/json/JSONObject;


# direct methods
.method public constructor <init>(Landroid/content/res/AssetManager;Lorg/json/JSONObject;)V
    .locals 1

    .line 20
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 18
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/CapConfig;->config:Lorg/json/JSONObject;

    if-eqz p2, :cond_0

    .line 22
    iput-object p2, p0, Lcom/getcapacitor/CapConfig;->config:Lorg/json/JSONObject;

    goto :goto_0

    .line 25
    :cond_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->loadConfig(Landroid/content/res/AssetManager;)V

    :goto_0
    return-void
.end method

.method private getConfigKey(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 119
    const-string v0, "\\."

    invoke-virtual {p1, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    .line 120
    array-length v0, p1

    if-lez v0, :cond_0

    .line 121
    array-length v0, p1

    add-int/lit8 v0, v0, -0x1

    aget-object p1, p1, v0

    return-object p1

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method

.method private getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 68
    const-string v0, "\\."

    invoke-virtual {p1, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    .line 70
    iget-object v0, p0, Lcom/getcapacitor/CapConfig;->config:Lorg/json/JSONObject;

    const/4 v1, 0x0

    .line 72
    :goto_0
    array-length v2, p1

    add-int/lit8 v2, v2, -0x1

    if-ge v1, v2, :cond_0

    .line 73
    aget-object v2, p1, v1

    .line 74
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_0
    return-object v0
.end method

.method private loadConfig(Landroid/content/res/AssetManager;)V
    .locals 4

    const/4 v0, 0x0

    .line 32
    :try_start_0
    new-instance v1, Ljava/io/BufferedReader;

    new-instance v2, Ljava/io/InputStreamReader;

    const-string v3, "capacitor.config.json"

    invoke-virtual {p1, v3}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1

    invoke-direct {v2, p1}, Ljava/io/InputStreamReader;-><init>(Ljava/io/InputStream;)V

    invoke-direct {v1, v2}, Ljava/io/BufferedReader;-><init>(Ljava/io/Reader;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_3
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_2
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 35
    :try_start_1
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    .line 37
    :goto_0
    invoke-virtual {v1}, Ljava/io/BufferedReader;->readLine()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 39
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_0

    .line 42
    :cond_0
    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 43
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lcom/getcapacitor/CapConfig;->config:Lorg/json/JSONObject;
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 51
    :try_start_2
    invoke-virtual {v1}, Ljava/io/BufferedReader;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_4

    goto :goto_4

    :catchall_0
    move-exception p1

    move-object v0, v1

    goto :goto_5

    :catch_0
    move-exception p1

    move-object v0, v1

    goto :goto_1

    :catch_1
    move-exception p1

    move-object v0, v1

    goto :goto_3

    :catchall_1
    move-exception p1

    goto :goto_5

    :catch_2
    move-exception p1

    .line 47
    :goto_1
    :try_start_3
    const-string v1, "Unable to parse capacitor.config.json. Make sure it\'s valid json"

    invoke-static {v1, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_1

    if-eqz v0, :cond_1

    .line 51
    :goto_2
    :try_start_4
    invoke-virtual {v0}, Ljava/io/BufferedReader;->close()V
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_4

    goto :goto_4

    :catch_3
    move-exception p1

    .line 45
    :goto_3
    :try_start_5
    const-string v1, "Unable to load capacitor.config.json. Run npx cap copy first"

    invoke-static {v1, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    if-eqz v0, :cond_1

    goto :goto_2

    :catch_4
    :cond_1
    :goto_4
    return-void

    :goto_5
    if-eqz v0, :cond_2

    .line 51
    :try_start_6
    invoke-virtual {v0}, Ljava/io/BufferedReader;->close()V
    :try_end_6
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_5

    .line 55
    :catch_5
    :cond_2
    throw p1
.end method


# virtual methods
.method public getArray(Ljava/lang/String;)[Ljava/lang/String;
    .locals 1

    const/4 v0, 0x0

    .line 127
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/CapConfig;->getArray(Ljava/lang/String;[Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public getArray(Ljava/lang/String;[Ljava/lang/String;)[Ljava/lang/String;
    .locals 4

    .line 131
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 133
    :try_start_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 135
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 140
    :cond_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v0

    .line 141
    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v0, :cond_1

    .line 144
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    aput-object v3, v1, v2
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    return-object v1

    :catch_0
    return-object p2
.end method

.method public getBoolean(Ljava/lang/String;Z)Z
    .locals 1

    .line 98
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 100
    :try_start_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 102
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    return p2
.end method

.method public getInt(Ljava/lang/String;I)I
    .locals 1

    .line 108
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 110
    :try_start_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 111
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    return p2
.end method

.method public getObject(Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 1

    .line 60
    :try_start_0
    iget-object v0, p0, Lcom/getcapacitor/CapConfig;->config:Lorg/json/JSONObject;

    invoke-virtual {v0, p1}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    const/4 p1, 0x0

    return-object p1
.end method

.method public getString(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    const/4 v0, 0x0

    .line 80
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 84
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 86
    :try_start_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/CapConfig;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 88
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    if-nez p1, :cond_0

    return-object p2

    :cond_0
    return-object p1

    :catch_0
    return-object p2
.end method
