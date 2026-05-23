.class public Lcom/getcapacitor/plugin/notification/LocalNotification;
.super Ljava/lang/Object;
.source "LocalNotification.java"


# instance fields
.field private actionTypeId:Ljava/lang/String;

.field private attachments:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;",
            ">;"
        }
    .end annotation
.end field

.field private autoCancel:Z

.field private body:Ljava/lang/String;

.field private channelId:Ljava/lang/String;

.field private extra:Lcom/getcapacitor/JSObject;

.field private group:Ljava/lang/String;

.field private groupSummary:Z

.field private iconColor:Ljava/lang/String;

.field private id:Ljava/lang/Integer;

.field private ongoing:Z

.field private schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

.field private smallIcon:Ljava/lang/String;

.field private sound:Ljava/lang/String;

.field private source:Ljava/lang/String;

.field private title:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static buildLocalNotificationPendingList(Ljava/util/List;)Lcom/getcapacitor/JSObject;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)",
            "Lcom/getcapacitor/JSObject;"
        }
    .end annotation

    .line 262
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 263
    new-instance v1, Lcom/getcapacitor/JSArray;

    invoke-direct {v1}, Lcom/getcapacitor/JSArray;-><init>()V

    .line 264
    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 265
    new-instance v3, Lcom/getcapacitor/JSObject;

    invoke-direct {v3}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 266
    const-string v4, "id"

    invoke-virtual {v3, v4, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 267
    invoke-virtual {v1, v3}, Lcom/getcapacitor/JSArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_0

    .line 269
    :cond_0
    const-string p0, "notifications"

    invoke-virtual {v0, p0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method public static buildNotificationFromJSObject(Lcom/getcapacitor/JSObject;)Lcom/getcapacitor/plugin/notification/LocalNotification;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/text/ParseException;
        }
    .end annotation

    .line 220
    new-instance v0, Lcom/getcapacitor/plugin/notification/LocalNotification;

    invoke-direct {v0}, Lcom/getcapacitor/plugin/notification/LocalNotification;-><init>()V

    .line 221
    invoke-virtual {p0}, Lcom/getcapacitor/JSObject;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setSource(Ljava/lang/String;)V

    .line 222
    const-string v1, "id"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getInteger(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setId(Ljava/lang/Integer;)V

    .line 223
    const-string v1, "body"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setBody(Ljava/lang/String;)V

    .line 224
    const-string v1, "actionTypeId"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setActionTypeId(Ljava/lang/String;)V

    .line 225
    const-string v1, "group"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setGroup(Ljava/lang/String;)V

    .line 226
    const-string v1, "sound"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setSound(Ljava/lang/String;)V

    .line 227
    const-string v1, "title"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setTitle(Ljava/lang/String;)V

    .line 228
    const-string v1, "smallIcon"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setSmallIcon(Ljava/lang/String;)V

    .line 229
    const-string v1, "iconColor"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setIconColor(Ljava/lang/String;)V

    .line 230
    invoke-static {p0}, Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;->getAttachments(Lcom/getcapacitor/JSObject;)Ljava/util/List;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setAttachments(Ljava/util/List;)V

    const/4 v1, 0x0

    .line 231
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    const-string v2, "groupSummary"

    invoke-virtual {p0, v2, v1}, Lcom/getcapacitor/JSObject;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setGroupSummary(Z)V

    .line 232
    const-string v2, "channelId"

    invoke-virtual {p0, v2}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setChannelId(Ljava/lang/String;)V

    .line 233
    new-instance v2, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    invoke-direct {v2, p0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;-><init>(Lcom/getcapacitor/JSObject;)V

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setSchedule(Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;)V

    .line 234
    const-string v2, "extra"

    invoke-virtual {p0, v2}, Lcom/getcapacitor/JSObject;->getJSObject(Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    move-result-object v2

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setExtra(Lcom/getcapacitor/JSObject;)V

    .line 235
    const-string v2, "ongoing"

    invoke-virtual {p0, v2, v1}, Lcom/getcapacitor/JSObject;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setOngoing(Z)V

    const/4 v1, 0x1

    .line 236
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    const-string v2, "autoCancel"

    invoke-virtual {p0, v2, v1}, Lcom/getcapacitor/JSObject;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p0

    invoke-virtual {v0, p0}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setAutoCancel(Z)V

    return-object v0
.end method

.method public static buildNotificationList(Lcom/getcapacitor/PluginCall;)Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/PluginCall;",
            ")",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotification;",
            ">;"
        }
    .end annotation

    .line 185
    const-string v0, "notifications"

    invoke-virtual {p0, v0}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    .line 187
    const-string v0, "Must provide notifications array as notifications option"

    invoke-virtual {p0, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-object v1

    .line 190
    :cond_0
    new-instance v2, Ljava/util/ArrayList;

    invoke-virtual {v0}, Lcom/getcapacitor/JSArray;->length()I

    move-result v3

    invoke-direct {v2, v3}, Ljava/util/ArrayList;-><init>(I)V

    .line 193
    :try_start_0
    invoke-virtual {v0}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object v0
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_2

    .line 199
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lorg/json/JSONObject;

    .line 202
    :try_start_1
    invoke-static {v3}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v3
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    .line 209
    :try_start_2
    invoke-static {v3}, Lcom/getcapacitor/plugin/notification/LocalNotification;->buildNotificationFromJSObject(Lcom/getcapacitor/JSObject;)Lcom/getcapacitor/plugin/notification/LocalNotification;

    move-result-object v3

    .line 210
    invoke-interface {v2, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_2
    .catch Ljava/text/ParseException; {:try_start_2 .. :try_end_2} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 212
    const-string v2, "Invalid date format sent to Notification plugin"

    invoke-virtual {p0, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-object v1

    :catch_1
    move-exception v0

    .line 204
    const-string v2, "Invalid JSON object sent to NotificationPlugin"

    invoke-virtual {p0, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-object v1

    :cond_1
    return-object v2

    .line 195
    :catch_2
    const-string v0, "Provided notification format is invalid"

    invoke-virtual {p0, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-object v1
.end method

.method public static getLocalNotificationPendingList(Lcom/getcapacitor/PluginCall;)Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/PluginCall;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x0

    .line 244
    :try_start_0
    const-string v1, "notifications"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v1

    invoke-virtual {v1}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object v1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-object v1, v0

    :goto_0
    if-eqz v1, :cond_2

    .line 247
    invoke-interface {v1}, Ljava/util/List;->size()I

    move-result v2

    if-nez v2, :cond_0

    goto :goto_2

    .line 251
    :cond_0
    new-instance p0, Ljava/util/ArrayList;

    invoke-interface {v1}, Ljava/util/List;->size()I

    move-result v0

    invoke-direct {p0, v0}, Ljava/util/ArrayList;-><init>(I)V

    .line 252
    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :catch_1
    :goto_1
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/json/JSONObject;

    .line 254
    :try_start_1
    const-string v2, "id"

    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {p0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    :cond_1
    return-object p0

    .line 248
    :cond_2
    :goto_2
    const-string v1, "Must provide notifications array as notifications option"

    invoke-virtual {p0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    :cond_0
    const/4 v1, 0x0

    if-eqz p1, :cond_1b

    .line 319
    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v3

    if-eq v2, v3, :cond_1

    goto/16 :goto_b

    .line 321
    :cond_1
    check-cast p1, Lcom/getcapacitor/plugin/notification/LocalNotification;

    .line 323
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    if-eqz v2, :cond_2

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_3

    goto :goto_0

    :cond_2
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    if-eqz v2, :cond_3

    :goto_0
    return v1

    .line 324
    :cond_3
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    if-eqz v2, :cond_4

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_5

    goto :goto_1

    :cond_4
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    if-eqz v2, :cond_5

    :goto_1
    return v1

    .line 325
    :cond_5
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    if-eqz v2, :cond_6

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    invoke-virtual {v2, v3}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_7

    goto :goto_2

    :cond_6
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    if-eqz v2, :cond_7

    :goto_2
    return v1

    .line 326
    :cond_7
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    if-eqz v2, :cond_8

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_9

    goto :goto_3

    :cond_8
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    if-eqz v2, :cond_9

    :goto_3
    return v1

    .line 327
    :cond_9
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    if-eqz v2, :cond_a

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_b

    goto :goto_4

    :cond_a
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    if-eqz v2, :cond_b

    :goto_4
    return v1

    .line 328
    :cond_b
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    if-eqz v2, :cond_c

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_d

    goto :goto_5

    :cond_c
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    if-eqz v2, :cond_d

    :goto_5
    return v1

    .line 329
    :cond_d
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    if-eqz v2, :cond_e

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_f

    goto :goto_6

    :cond_e
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    if-eqz v2, :cond_f

    :goto_6
    return v1

    .line 331
    :cond_f
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    if-eqz v2, :cond_10

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_11

    goto :goto_7

    :cond_10
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    if-eqz v2, :cond_11

    :goto_7
    return v1

    .line 332
    :cond_11
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    if-eqz v2, :cond_12

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    invoke-virtual {v2, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_13

    goto :goto_8

    :cond_12
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    if-eqz v2, :cond_13

    :goto_8
    return v1

    .line 333
    :cond_13
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    if-eqz v2, :cond_14

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    invoke-virtual {v2, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_15

    goto :goto_9

    :cond_14
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    if-eqz v2, :cond_15

    :goto_9
    return v1

    .line 335
    :cond_15
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    iget-boolean v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    if-eq v2, v3, :cond_16

    return v1

    .line 336
    :cond_16
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    iget-boolean v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    if-eq v2, v3, :cond_17

    return v1

    .line 337
    :cond_17
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    iget-boolean v3, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    if-eq v2, v3, :cond_18

    return v1

    .line 338
    :cond_18
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    iget-object p1, p1, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    if-eqz v2, :cond_19

    invoke-virtual {v2, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    goto :goto_a

    :cond_19
    if-nez p1, :cond_1a

    goto :goto_a

    :cond_1a
    move v0, v1

    :goto_a
    return v0

    :cond_1b
    :goto_b
    return v1
.end method

.method public getActionTypeId()Ljava/lang/String;
    .locals 1

    .line 118
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    return-object v0
.end method

.method public getAttachments()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;",
            ">;"
        }
    .end annotation

    .line 110
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    return-object v0
.end method

.method public getBody()Ljava/lang/String;
    .locals 1

    .line 54
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    return-object v0
.end method

.method public getChannelId()Ljava/lang/String;
    .locals 1

    .line 174
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->channelId:Ljava/lang/String;

    return-object v0
.end method

.method public getExtra()Lcom/getcapacitor/JSObject;
    .locals 1

    .line 134
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method public getGroup()Ljava/lang/String;
    .locals 1

    .line 126
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    return-object v0
.end method

.method public getIconColor(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 94
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    if-eqz v0, :cond_0

    return-object v0

    :cond_0
    if-eqz p1, :cond_1

    return-object p1

    :cond_1
    const/4 p1, 0x0

    return-object p1
.end method

.method public getId()Ljava/lang/Integer;
    .locals 1

    .line 142
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    return-object v0
.end method

.method public getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;
    .locals 1

    .line 63
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    return-object v0
.end method

.method public getSmallIcon(Landroid/content/Context;I)I
    .locals 2

    .line 276
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    if-eqz v0, :cond_0

    .line 277
    const-string v1, "drawable"

    invoke-static {p1, v0, v1}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceID(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    if-nez p1, :cond_1

    goto :goto_1

    :cond_1
    move p2, p1

    :goto_1
    return p2
.end method

.method public getSound(Landroid/content/Context;I)Ljava/lang/String;
    .locals 2

    .line 73
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    invoke-static {v0}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceBaseName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 75
    const-string v1, "raw"

    invoke-static {p1, v0, v1}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceID(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    if-nez v0, :cond_1

    goto :goto_1

    :cond_1
    move p2, v0

    :goto_1
    if-eqz p2, :cond_2

    .line 81
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "android.resource://"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "/"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    goto :goto_2

    :cond_2
    const/4 p1, 0x0

    :goto_2
    return-object p1
.end method

.method public getSource()Ljava/lang/String;
    .locals 1

    .line 371
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->source:Ljava/lang/String;

    return-object v0
.end method

.method public getTitle()Ljava/lang/String;
    .locals 1

    .line 46
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    .line 343
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    goto :goto_0

    :cond_0
    move v0, v1

    :goto_0
    mul-int/lit8 v0, v0, 0x1f

    .line 344
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    if-eqz v2, :cond_1

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_1

    :cond_1
    move v2, v1

    :goto_1
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 345
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    if-eqz v2, :cond_2

    invoke-virtual {v2}, Ljava/lang/Integer;->hashCode()I

    move-result v2

    goto :goto_2

    :cond_2
    move v2, v1

    :goto_2
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 346
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    if-eqz v2, :cond_3

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_3

    :cond_3
    move v2, v1

    :goto_3
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 347
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    if-eqz v2, :cond_4

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_4

    :cond_4
    move v2, v1

    :goto_4
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 348
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    if-eqz v2, :cond_5

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_5

    :cond_5
    move v2, v1

    :goto_5
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 349
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    if-eqz v2, :cond_6

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_6

    :cond_6
    move v2, v1

    :goto_6
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 350
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    if-eqz v2, :cond_7

    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    goto :goto_7

    :cond_7
    move v2, v1

    :goto_7
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 351
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    invoke-static {v2}, Ljava/lang/Boolean;->hashCode(Z)I

    move-result v2

    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 352
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    invoke-static {v2}, Ljava/lang/Boolean;->hashCode(Z)I

    move-result v2

    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 353
    iget-boolean v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    invoke-static {v2}, Ljava/lang/Boolean;->hashCode(Z)I

    move-result v2

    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 354
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    if-eqz v2, :cond_8

    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    goto :goto_8

    :cond_8
    move v2, v1

    :goto_8
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 355
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    if-eqz v2, :cond_9

    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    goto :goto_9

    :cond_9
    move v2, v1

    :goto_9
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 356
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    if-eqz v2, :cond_a

    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v1

    :cond_a
    add-int/2addr v0, v1

    return v0
.end method

.method public isAutoCancel()Z
    .locals 1

    .line 166
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    return v0
.end method

.method public isGroupSummary()Z
    .locals 1

    .line 150
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    return v0
.end method

.method public isOngoing()Z
    .locals 1

    .line 158
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    return v0
.end method

.method public isScheduled()Z
    .locals 1

    .line 290
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    if-eqz v0, :cond_1

    .line 291
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getOn()Lcom/getcapacitor/plugin/notification/DateMatch;

    move-result-object v0

    if-nez v0, :cond_0

    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    .line 292
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getAt()Ljava/util/Date;

    move-result-object v0

    if-nez v0, :cond_0

    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    .line 293
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getEvery()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    :cond_0
    const/4 v0, 0x1

    goto :goto_0

    :cond_1
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public setActionTypeId(Ljava/lang/String;)V
    .locals 0

    .line 122
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    return-void
.end method

.method public setAttachments(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotificationAttachment;",
            ">;)V"
        }
    .end annotation

    .line 114
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    return-void
.end method

.method public setAutoCancel(Z)V
    .locals 0

    .line 170
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    return-void
.end method

.method public setBody(Ljava/lang/String;)V
    .locals 0

    .line 58
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    return-void
.end method

.method public setChannelId(Ljava/lang/String;)V
    .locals 0

    .line 178
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->channelId:Ljava/lang/String;

    return-void
.end method

.method public setExtra(Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 138
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    return-void
.end method

.method public setExtraFromString(Ljava/lang/String;)V
    .locals 3

    .line 363
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 364
    invoke-static {v0}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    const/4 v0, 0x1

    .line 366
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "LN"

    aput-object v2, v0, v1

    invoke-static {v0}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "Cannot rebuild extra data"

    invoke-static {v0, v1, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method

.method public setGroup(Ljava/lang/String;)V
    .locals 0

    .line 130
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    return-void
.end method

.method public setGroupSummary(Z)V
    .locals 0

    .line 154
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    return-void
.end method

.method public setIconColor(Ljava/lang/String;)V
    .locals 0

    .line 106
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    return-void
.end method

.method public setId(Ljava/lang/Integer;)V
    .locals 0

    .line 146
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    return-void
.end method

.method public setOngoing(Z)V
    .locals 0

    .line 162
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    return-void
.end method

.method public setSchedule(Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;)V
    .locals 0

    .line 67
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    return-void
.end method

.method public setSmallIcon(Ljava/lang/String;)V
    .locals 0

    .line 90
    invoke-static {p1}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceBaseName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    return-void
.end method

.method public setSound(Ljava/lang/String;)V
    .locals 0

    .line 87
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    return-void
.end method

.method public setSource(Ljava/lang/String;)V
    .locals 0

    .line 375
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->source:Ljava/lang/String;

    return-void
.end method

.method public setTitle(Ljava/lang/String;)V
    .locals 0

    .line 50
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 298
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "LocalNotification{title=\'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->title:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', body=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->body:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', id="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->id:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sound=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->sound:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', smallIcon=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->smallIcon:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', iconColor=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->iconColor:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', actionTypeId=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->actionTypeId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', group=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->group:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', extra="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->extra:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", attachments="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->attachments:Ljava/util/List;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", schedule="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->schedule:Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", groupSummary="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->groupSummary:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", ongoing="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->ongoing:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", autoCancel="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotification;->autoCancel:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
