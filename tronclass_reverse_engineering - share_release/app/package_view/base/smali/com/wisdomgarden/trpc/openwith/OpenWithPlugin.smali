.class public Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "OpenWithPlugin.java"


# static fields
.field public static final DEFAULT_ATTACHMENTS_WITH_MAX_COUNT:I = 0x5


# instance fields
.field private final DEBUG:I

.field private final ERROR:I

.field private final INFO:I

.field private final PLUGIN_NAME:Ljava/lang/String;

.field private final SAVED_KEY:Ljava/lang/String;

.field private final WARN:I

.field private maxAttachmentCount:I

.field private pendingIntents:Ljava/util/ArrayList;

.field private prefs:Landroid/content/SharedPreferences;

.field private verbosity:I


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 29
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    .line 34
    const-string v0, "OpenWithPlugin"

    iput-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->PLUGIN_NAME:Ljava/lang/String;

    .line 35
    const-string v0, "sharedData"

    iput-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->SAVED_KEY:Ljava/lang/String;

    const/4 v0, 0x0

    .line 40
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->DEBUG:I

    const/16 v0, 0xa

    .line 44
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->INFO:I

    const/16 v1, 0x14

    .line 48
    iput v1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->WARN:I

    const/16 v1, 0x1e

    .line 52
    iput v1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->ERROR:I

    .line 57
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->verbosity:I

    .line 84
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    const/4 v0, 0x5

    .line 88
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I

    return-void
.end method

.method private getSharedData()Lorg/json/JSONObject;
    .locals 3

    .line 322
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->prefs:Landroid/content/SharedPreferences;

    const-string v1, "sharedData"

    const/4 v2, 0x0

    invoke-interface {v0, v1, v2}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    return-object v2

    .line 329
    :cond_0
    :try_start_0
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1, v0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    move-object v2, v1

    :catch_0
    return-object v2
.end method

.method private log(ILjava/lang/String;)V
    .locals 2

    .line 65
    const-string v0, "OpenWithPlugin"

    if-eqz p1, :cond_3

    const/16 v1, 0xa

    if-eq p1, v1, :cond_2

    const/16 v1, 0x14

    if-eq p1, v1, :cond_1

    const/16 v1, 0x1e

    if-eq p1, v1, :cond_0

    goto :goto_0

    .line 76
    :cond_0
    invoke-static {v0, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 73
    :cond_1
    invoke-static {v0, p2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 70
    :cond_2
    invoke-static {v0, p2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 67
    :cond_3
    invoke-static {v0, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method private mergeIntends(Lorg/json/JSONObject;Lorg/json/JSONObject;)Lorg/json/JSONObject;
    .locals 11

    .line 241
    const-string v0, "maxAttachmentCount"

    const-string v1, "send"

    const-string v2, "receivedCounts"

    const/4 v3, 0x0

    const-string v4, "items"

    const-string v5, "exit"

    const-string v6, "action"

    if-nez p2, :cond_2

    .line 243
    :try_start_0
    new-instance p2, Lorg/json/JSONObject;

    invoke-direct {p2}, Lorg/json/JSONObject;-><init>()V

    .line 244
    invoke-virtual {p1, v6}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v7

    if-eqz v7, :cond_0

    invoke-virtual {p1, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    :cond_0
    invoke-virtual {p2, v6, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 245
    invoke-virtual {p1, v5}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-virtual {p1, v5}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v3

    :cond_1
    invoke-virtual {p2, v5, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 246
    invoke-virtual {p1, v4}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v1

    invoke-virtual {p2, v4, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 247
    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result p1

    invoke-virtual {p2, v2, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 248
    iget p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I

    invoke-virtual {p2, v0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    const/4 p2, 0x0

    goto :goto_1

    .line 255
    :cond_2
    :try_start_1
    invoke-virtual {p2, v4}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v7

    .line 256
    invoke-virtual {p1, v4}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v4

    if-eq v7, v4, :cond_6

    .line 259
    invoke-virtual {v4}, Lorg/json/JSONArray;->length()I

    move-result v8

    move v9, v3

    :goto_0
    if-ge v9, v8, :cond_3

    .line 261
    invoke-virtual {v4, v9}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v10

    invoke-virtual {v7, v10}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    add-int/lit8 v9, v9, 0x1

    goto :goto_0

    .line 264
    :cond_3
    invoke-virtual {p1, v6}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_4

    invoke-virtual {p1, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    :cond_4
    invoke-virtual {p2, v6, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 265
    invoke-virtual {p1, v5}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_5

    invoke-virtual {p1, v5}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v3

    :cond_5
    invoke-virtual {p2, v5, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 266
    invoke-virtual {v7}, Lorg/json/JSONArray;->length()I

    move-result p1

    invoke-virtual {p2, v2, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 267
    iget p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I

    invoke-virtual {p2, v0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1

    :catch_1
    :cond_6
    :goto_1
    return-object p2
.end method

.method private processPendingIntents()V
    .locals 3

    .line 225
    const-string v0, "processPendingIntents()"

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 226
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->getSharedData()Lorg/json/JSONObject;

    move-result-object v0

    .line 227
    :goto_0
    iget-object v2, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    invoke-virtual {v2}, Ljava/util/ArrayList;->size()I

    move-result v2

    if-ge v1, v2, :cond_0

    .line 228
    iget-object v2, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    invoke-virtual {v2, v1}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lorg/json/JSONObject;

    invoke-direct {p0, v2, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->mergeIntends(Lorg/json/JSONObject;Lorg/json/JSONObject;)Lorg/json/JSONObject;

    move-result-object v0

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    .line 230
    :cond_0
    iget-object v1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->clear()V

    if-eqz v0, :cond_1

    .line 233
    invoke-direct {p0, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->saveSharedData(Lorg/json/JSONObject;)V

    :cond_1
    return-void
.end method

.method private removeSharedData()Z
    .locals 2

    .line 308
    :try_start_0
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->prefs:Landroid/content/SharedPreferences;

    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    .line 310
    const-string v1, "sharedData"

    invoke-interface {v0, v1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 312
    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->commit()Z
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    const/4 v0, 0x1

    return v0

    :catch_0
    const/4 v0, 0x0

    return v0
.end method

.method private saveSharedData(Lorg/json/JSONObject;)V
    .locals 2

    .line 295
    :try_start_0
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->prefs:Landroid/content/SharedPreferences;

    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    .line 297
    const-string v1, "sharedData"

    invoke-virtual {p1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, v1, p1}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 299
    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->commit()Z
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method private toJSONObject(Landroid/content/Intent;)Lorg/json/JSONObject;
    .locals 2

    .line 282
    :try_start_0
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 283
    iget-object v1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v1}, Landroid/content/Context;->getCacheDir()Ljava/io/File;

    move-result-object v1

    .line 285
    invoke-static {v0, p1, v1}, Lcom/wisdomgarden/trpc/openwith/Serializer;->toJSONObject(Landroid/content/Context;Landroid/content/Intent;Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 287
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Error converting intent to JSON: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/16 v1, 0x1e

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 288
    invoke-virtual {p1}, Lorg/json/JSONException;->getStackTrace()[Ljava/lang/StackTraceElement;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Arrays;->toString([Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, v1, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    const/4 p1, 0x0

    return-object p1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 128
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "execute() called with action:"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " and options: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 129
    const-string v0, "setVerbosity"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 130
    invoke-virtual {p0, p2, p3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->setVerbosity(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 131
    :cond_0
    const-string v0, "init"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 132
    invoke-virtual {p0, p2, p3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->init(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 133
    :cond_1
    const-string v0, "fetchSharedData"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 134
    invoke-virtual {p0, p2, p3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->fetchSharedData(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 135
    :cond_2
    const-string v0, "exit"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 136
    invoke-virtual {p0, p2, p3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->exit(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    .line 138
    :cond_3
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "execute() did not recognize this action: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, v1, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1
.end method

.method public exit(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 173
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "exit() "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 174
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-eqz p1, :cond_0

    const/16 p1, 0x14

    .line 175
    const-string p2, "exit() -> invalidAction"

    invoke-direct {p0, p1, p2}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1

    .line 178
    :cond_0
    iget-object p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/4 v0, 0x1

    invoke-virtual {p1, v0}, Landroid/app/Activity;->moveTaskToBack(Z)Z

    .line 179
    const-string p1, "exit() -> ok"

    invoke-direct {p0, v1, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 180
    invoke-static {p2}, Lcom/wisdomgarden/trpc/openwith/PluginResultSender;->ok(Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1
.end method

.method public fetchSharedData(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 184
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "fetchSharedData() "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 185
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-eqz p1, :cond_0

    const/16 p1, 0x14

    .line 186
    const-string p2, "fetchSharedData() -> invalidAction"

    invoke-direct {p0, p1, p2}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1

    .line 190
    :cond_0
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->getSharedData()Lorg/json/JSONObject;

    move-result-object p1

    .line 191
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->removeSharedData()Z

    if-eqz p1, :cond_1

    .line 194
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v1, p1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    .line 196
    invoke-virtual {p2, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    const/4 p1, 0x1

    return p1

    .line 199
    :cond_1
    invoke-static {p2}, Lcom/wisdomgarden/trpc/openwith/PluginResultSender;->ok(Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1
.end method

.method public init(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 160
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "init() "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 161
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-eqz p1, :cond_0

    const/16 p1, 0x14

    .line 162
    const-string p2, "init() -> invalidAction"

    invoke-direct {p0, p1, p2}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1

    :cond_0
    const/16 p1, 0xa

    .line 165
    iput p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->verbosity:I

    .line 166
    iget-object p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/Activity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->onNewIntent(Landroid/content/Intent;)V

    .line 167
    const-string p1, "init() -> ok"

    invoke-direct {p0, v1, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 168
    invoke-static {p2}, Lcom/wisdomgarden/trpc/openwith/PluginResultSender;->ok(Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 5

    .line 91
    const-string v0, "initialize()"

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    const/4 v0, 0x5

    .line 93
    :try_start_0
    iget-object v2, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v2

    .line 94
    invoke-virtual {v2}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v3

    invoke-virtual {v2}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v2

    const/16 v4, 0x80

    invoke-virtual {v3, v2, v4}, Landroid/content/pm/PackageManager;->getApplicationInfo(Ljava/lang/String;I)Landroid/content/pm/ApplicationInfo;

    move-result-object v2

    .line 95
    iget-object v2, v2, Landroid/content/pm/ApplicationInfo;->metaData:Landroid/os/Bundle;

    const-string v3, "OPEN_WITH_ATTACHMENTS_WITH_MAX_COUNT"

    invoke-virtual {v2, v3, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;I)I

    move-result v2

    iput v2, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 97
    :catch_0
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I

    .line 99
    :goto_0
    iget v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->maxAttachmentCount:I

    invoke-static {v0}, Lcom/wisdomgarden/trpc/openwith/Serializer;->setMaxAttachmentCount(I)V

    .line 101
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v2, "OpenWithSharedData"

    invoke-virtual {v0, v2, v1}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->prefs:Landroid/content/SharedPreferences;

    .line 102
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method

.method public onNewIntent(Landroid/content/Intent;)V
    .locals 2

    .line 213
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "onNewIntent() "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 214
    invoke-direct {p0, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->toJSONObject(Landroid/content/Intent;)Lorg/json/JSONObject;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 216
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    invoke-virtual {v0, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 218
    :cond_0
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->processPendingIntents()V

    return-void
.end method

.method public onReset()V
    .locals 1

    const/16 v0, 0xa

    .line 114
    iput v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->verbosity:I

    .line 115
    iget-object v0, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->pendingIntents:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->clear()V

    return-void
.end method

.method public setVerbosity(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 5

    .line 143
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "setVerbosity() "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 144
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v0

    const/4 v2, 0x1

    const-string v3, "setVerbosity() -> invalidAction"

    const/16 v4, 0x14

    if-eq v0, v2, :cond_0

    .line 145
    invoke-direct {p0, v4, v3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1

    .line 149
    :cond_0
    :try_start_0
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result p1

    iput p1, p0, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->verbosity:I

    .line 150
    const-string p1, "setVerbosity() -> ok"

    invoke-direct {p0, v1, p1}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    .line 151
    invoke-static {p2}, Lcom/wisdomgarden/trpc/openwith/PluginResultSender;->ok(Lorg/apache/cordova/CallbackContext;)Z

    move-result p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    .line 153
    :catch_0
    invoke-direct {p0, v4, v3}, Lcom/wisdomgarden/trpc/openwith/OpenWithPlugin;->log(ILjava/lang/String;)V

    return v1
.end method
