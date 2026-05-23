.class public Lcom/getcapacitor/plugin/notification/NotificationAction;
.super Ljava/lang/Object;
.source "NotificationAction.java"


# instance fields
.field private id:Ljava/lang/String;

.field private input:Ljava/lang/Boolean;

.field private title:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)V
    .locals 0

    .line 29
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 30
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->id:Ljava/lang/String;

    .line 31
    iput-object p2, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->title:Ljava/lang/String;

    .line 32
    iput-object p3, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->input:Ljava/lang/Boolean;

    return-void
.end method

.method public static buildTypes(Lcom/getcapacitor/JSArray;)Ljava/util/Map;
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/JSArray;",
            ")",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "[",
            "Lcom/getcapacitor/plugin/notification/NotificationAction;",
            ">;"
        }
    .end annotation

    .line 36
    const-string v0, "id"

    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    const/4 v2, 0x0

    .line 38
    :try_start_0
    invoke-virtual {p0}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object p0

    .line 39
    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :cond_0
    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_3

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lorg/json/JSONObject;

    .line 40
    invoke-static {v3}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v3

    .line 41
    invoke-virtual {v3, v0}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    if-nez v4, :cond_1

    const/4 p0, 0x0

    return-object p0

    .line 45
    :cond_1
    const-string v5, "actions"

    invoke-virtual {v3, v5}, Lcom/getcapacitor/JSObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v3

    if-eqz v3, :cond_0

    .line 47
    invoke-virtual {v3}, Lorg/json/JSONArray;->length()I

    move-result v5

    new-array v6, v5, [Lcom/getcapacitor/plugin/notification/NotificationAction;

    move v7, v2

    :goto_1
    if-ge v7, v5, :cond_2

    .line 49
    new-instance v8, Lcom/getcapacitor/plugin/notification/NotificationAction;

    invoke-direct {v8}, Lcom/getcapacitor/plugin/notification/NotificationAction;-><init>()V

    .line 50
    invoke-virtual {v3, v7}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v9

    invoke-static {v9}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v9

    .line 51
    invoke-virtual {v9, v0}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v10

    invoke-virtual {v8, v10}, Lcom/getcapacitor/plugin/notification/NotificationAction;->setId(Ljava/lang/String;)V

    .line 52
    const-string v10, "title"

    invoke-virtual {v9, v10}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v10

    invoke-virtual {v8, v10}, Lcom/getcapacitor/plugin/notification/NotificationAction;->setTitle(Ljava/lang/String;)V

    .line 53
    const-string v10, "input"

    invoke-virtual {v9, v10}, Lcom/getcapacitor/JSObject;->getBool(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v9

    invoke-virtual {v8, v9}, Lcom/getcapacitor/plugin/notification/NotificationAction;->setInput(Ljava/lang/Boolean;)V

    .line 54
    aput-object v8, v6, v7

    add-int/lit8 v7, v7, 0x1

    goto :goto_1

    .line 56
    :cond_2
    invoke-interface {v1, v4, v6}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    const/4 v0, 0x1

    .line 60
    new-array v0, v0, [Ljava/lang/String;

    const-string v3, "LN"

    aput-object v3, v0, v2

    invoke-static {v0}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v2, "Error when building action types"

    invoke-static {v0, v2, p0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_3
    return-object v1
.end method


# virtual methods
.method public getId()Ljava/lang/String;
    .locals 1

    .line 66
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->id:Ljava/lang/String;

    return-object v0
.end method

.method public getTitle()Ljava/lang/String;
    .locals 1

    .line 74
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->title:Ljava/lang/String;

    return-object v0
.end method

.method public isInput()Z
    .locals 2

    .line 82
    sget-object v0, Ljava/lang/Boolean;->TRUE:Ljava/lang/Boolean;

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->input:Ljava/lang/Boolean;

    invoke-virtual {v0, v1}, Ljava/lang/Boolean;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method public setId(Ljava/lang/String;)V
    .locals 0

    .line 70
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->id:Ljava/lang/String;

    return-void
.end method

.method public setInput(Ljava/lang/Boolean;)V
    .locals 0

    .line 86
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->input:Ljava/lang/Boolean;

    return-void
.end method

.method public setTitle(Ljava/lang/String;)V
    .locals 0

    .line 78
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationAction;->title:Ljava/lang/String;

    return-void
.end method
