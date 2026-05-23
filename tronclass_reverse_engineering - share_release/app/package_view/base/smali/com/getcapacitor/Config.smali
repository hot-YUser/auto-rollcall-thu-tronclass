.class public Lcom/getcapacitor/Config;
.super Ljava/lang/Object;
.source "Config.java"


# static fields
.field private static instance:Lcom/getcapacitor/Config;


# instance fields
.field private config:Lorg/json/JSONObject;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 18
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/Config;->config:Lorg/json/JSONObject;

    return-void
.end method

.method public static getArray(Ljava/lang/String;)[Ljava/lang/String;
    .locals 1

    const/4 v0, 0x0

    .line 155
    invoke-static {p0, v0}, Lcom/getcapacitor/Config;->getArray(Ljava/lang/String;[Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static getArray(Ljava/lang/String;[Ljava/lang/String;)[Ljava/lang/String;
    .locals 4

    .line 162
    invoke-static {p0}, Lcom/getcapacitor/Config;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 164
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v1

    invoke-direct {v1, p0}, Lcom/getcapacitor/Config;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    .line 166
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p0

    if-nez p0, :cond_0

    return-object p1

    .line 171
    :cond_0
    invoke-virtual {p0}, Lorg/json/JSONArray;->length()I

    move-result v0

    .line 172
    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v0, :cond_1

    .line 175
    invoke-virtual {p0, v2}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

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
    return-object p1
.end method

.method public static getBoolean(Ljava/lang/String;Z)Z
    .locals 2

    .line 117
    invoke-static {p0}, Lcom/getcapacitor/Config;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 119
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v1

    invoke-direct {v1, p0}, Lcom/getcapacitor/Config;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    .line 121
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    return p1
.end method

.method private static getConfigKey(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 144
    const-string v0, "\\."

    invoke-virtual {p0, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p0

    .line 145
    array-length v0, p0

    if-lez v0, :cond_0

    .line 146
    array-length v0, p0

    add-int/lit8 v0, v0, -0x1

    aget-object p0, p0, v0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

.method private getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 78
    const-string v0, "\\."

    invoke-virtual {p1, v0}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    .line 80
    iget-object v0, p0, Lcom/getcapacitor/Config;->config:Lorg/json/JSONObject;

    const/4 v1, 0x0

    .line 82
    :goto_0
    array-length v2, p1

    add-int/lit8 v2, v2, -0x1

    if-ge v1, v2, :cond_0

    .line 83
    aget-object v2, p1, v1

    .line 84
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_0
    return-object v0
.end method

.method private static getInstance()Lcom/getcapacitor/Config;
    .locals 1

    .line 23
    sget-object v0, Lcom/getcapacitor/Config;->instance:Lcom/getcapacitor/Config;

    if-nez v0, :cond_0

    .line 24
    new-instance v0, Lcom/getcapacitor/Config;

    invoke-direct {v0}, Lcom/getcapacitor/Config;-><init>()V

    sput-object v0, Lcom/getcapacitor/Config;->instance:Lcom/getcapacitor/Config;

    .line 26
    :cond_0
    sget-object v0, Lcom/getcapacitor/Config;->instance:Lcom/getcapacitor/Config;

    return-object v0
.end method

.method public static getInt(Ljava/lang/String;I)I
    .locals 2

    .line 130
    invoke-static {p0}, Lcom/getcapacitor/Config;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 132
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v1

    invoke-direct {v1, p0}, Lcom/getcapacitor/Config;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    .line 133
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    return p1
.end method

.method public static getObject(Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 1

    .line 70
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v0

    iget-object v0, v0, Lcom/getcapacitor/Config;->config:Lorg/json/JSONObject;

    invoke-virtual {v0, p0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    const/4 p0, 0x0

    return-object p0
.end method

.method public static getString(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    const/4 v0, 0x0

    .line 93
    invoke-static {p0, v0}, Lcom/getcapacitor/Config;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    .line 100
    invoke-static {p0}, Lcom/getcapacitor/Config;->getConfigKey(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 102
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v1

    invoke-direct {v1, p0}, Lcom/getcapacitor/Config;->getConfigObjectDeepest(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    .line 104
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    if-nez p0, :cond_0

    return-object p1

    :cond_0
    return-object p0

    :catch_0
    return-object p1
.end method

.method public static load(Landroid/app/Activity;)V
    .locals 1

    .line 33
    invoke-static {}, Lcom/getcapacitor/Config;->getInstance()Lcom/getcapacitor/Config;

    move-result-object v0

    invoke-direct {v0, p0}, Lcom/getcapacitor/Config;->loadConfig(Landroid/app/Activity;)V

    return-void
.end method

.method private loadConfig(Landroid/app/Activity;)V
    .locals 4

    const/4 v0, 0x0

    .line 39
    :try_start_0
    new-instance v1, Ljava/io/BufferedReader;

    new-instance v2, Ljava/io/InputStreamReader;

    invoke-virtual {p1}, Landroid/app/Activity;->getAssets()Landroid/content/res/AssetManager;

    move-result-object p1

    const-string v3, "capacitor.config.json"

    invoke-virtual {p1, v3}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1

    invoke-direct {v2, p1}, Ljava/io/InputStreamReader;-><init>(Ljava/io/InputStream;)V

    invoke-direct {v1, v2}, Ljava/io/BufferedReader;-><init>(Ljava/io/Reader;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_3
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_2
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 42
    :try_start_1
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    .line 44
    :goto_0
    invoke-virtual {v1}, Ljava/io/BufferedReader;->readLine()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 46
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_0

    .line 49
    :cond_0
    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 50
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lcom/getcapacitor/Config;->config:Lorg/json/JSONObject;
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 58
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

    .line 54
    :goto_1
    :try_start_3
    const-string v1, "Unable to parse capacitor.config.json. Make sure it\'s valid json"

    invoke-static {v1, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_1

    if-eqz v0, :cond_1

    .line 58
    :goto_2
    :try_start_4
    invoke-virtual {v0}, Ljava/io/BufferedReader;->close()V
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_4

    goto :goto_4

    :catch_3
    move-exception p1

    .line 52
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

    .line 58
    :try_start_6
    invoke-virtual {v0}, Ljava/io/BufferedReader;->close()V
    :try_end_6
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_5

    .line 62
    :catch_5
    :cond_2
    throw p1
.end method
