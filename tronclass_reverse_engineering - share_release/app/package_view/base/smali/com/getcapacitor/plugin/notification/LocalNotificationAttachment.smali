.class public Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;
.super Ljava/lang/Object;
.source "LocalNotificationAttachment.java"


# instance fields
.field private id:Ljava/lang/String;

.field private options:Lorg/json/JSONObject;

.field private url:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getAttachments(Lcom/getcapacitor/JSObject;)Ljava/util/List;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/JSObject;",
            ")",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;",
            ">;"
        }
    .end annotation

    .line 42
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    const/4 v1, 0x0

    .line 45
    :try_start_0
    const-string v2, "attachments"

    invoke-virtual {p0, v2}, Lcom/getcapacitor/JSObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-object p0, v1

    :goto_0
    if-eqz p0, :cond_1

    const/4 v2, 0x0

    .line 49
    :goto_1
    invoke-virtual {p0}, Lorg/json/JSONArray;->length()I

    move-result v3

    if-ge v2, v3, :cond_1

    .line 50
    new-instance v3, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;

    invoke-direct {v3}, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;-><init>()V

    .line 53
    :try_start_1
    invoke-virtual {p0, v2}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v4
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_2

    :catch_1
    move-object v4, v1

    :goto_2
    if-eqz v4, :cond_0

    .line 59
    :try_start_2
    invoke-static {v4}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v4
    :try_end_2
    .catch Lorg/json/JSONException; {:try_start_2 .. :try_end_2} :catch_2

    goto :goto_3

    :catch_2
    move-object v4, v1

    .line 62
    :goto_3
    const-string v5, "id"

    invoke-virtual {v4, v5}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v3, v5}, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->setId(Ljava/lang/String;)V

    .line 63
    const-string v5, "url"

    invoke-virtual {v4, v5}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v3, v5}, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->setUrl(Ljava/lang/String;)V

    .line 65
    :try_start_3
    const-string v5, "options"

    invoke-virtual {v4, v5}, Lcom/getcapacitor/JSObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v4

    invoke-virtual {v3, v4}, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->setOptions(Lorg/json/JSONObject;)V
    :try_end_3
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_3

    .line 68
    :catch_3
    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_1

    :cond_1
    return-object v0
.end method


# virtual methods
.method public getId()Ljava/lang/String;
    .locals 1

    .line 18
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->id:Ljava/lang/String;

    return-object v0
.end method

.method public getOptions()Lorg/json/JSONObject;
    .locals 1

    .line 34
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->options:Lorg/json/JSONObject;

    return-object v0
.end method

.method public getUrl()Ljava/lang/String;
    .locals 1

    .line 26
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->url:Ljava/lang/String;

    return-object v0
.end method

.method public setId(Ljava/lang/String;)V
    .locals 0

    .line 22
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->id:Ljava/lang/String;

    return-void
.end method

.method public setOptions(Lorg/json/JSONObject;)V
    .locals 0

    .line 38
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->options:Lorg/json/JSONObject;

    return-void
.end method

.method public setUrl(Ljava/lang/String;)V
    .locals 0

    .line 30
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->url:Ljava/lang/String;

    return-void
.end method
