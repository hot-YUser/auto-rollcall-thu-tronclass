.class public Lcom/getcapacitor/plugin/notification/NotificationStorage;
.super Ljava/lang/Object;
.source "NotificationStorage.java"


# static fields
.field private static final ACTION_TYPES_ID:Ljava/lang/String; = "ACTION_TYPE_STORE"

.field private static final ID_KEY:Ljava/lang/String; = "notificationIds"

.field private static final NOTIFICATION_STORE_ID:Ljava/lang/String; = "NOTIFICATION_STORE"


# instance fields
.field private context:Landroid/content/Context;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 35
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationStorage;->context:Landroid/content/Context;

    return-void
.end method

.method private getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;
    .locals 2

    .line 107
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/NotificationStorage;->context:Landroid/content/Context;

    const/4 v1, 0x0

    invoke-virtual {v0, p1, v1}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object p1

    return-object p1
.end method


# virtual methods
.method public appendNotifications(Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotification;",
            ">;)V"
        }
    .end annotation

    .line 42
    const-string v0, "NOTIFICATION_STORE"

    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v0

    .line 43
    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    .line 44
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/getcapacitor/plugin/notification/LocalNotification;

    .line 45
    invoke-virtual {v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Integer;->toString()Ljava/lang/String;

    move-result-object v2

    .line 46
    invoke-virtual {v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSource()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v2, v1}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    goto :goto_0

    .line 48
    :cond_0
    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->apply()V

    return-void
.end method

.method public deleteNotification(Ljava/lang/String;)V
    .locals 1

    .line 98
    const-string v0, "NOTIFICATION_STORE"

    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v0

    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    .line 99
    invoke-interface {v0, p1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 100
    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->apply()V

    return-void
.end method

.method public getActionGroup(Ljava/lang/String;)[Lcom/getcapacitor/plugin/notification/NotificationAction;
    .locals 8

    .line 139
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "ACTION_TYPE_STORE"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object p1

    .line 140
    const-string v0, "count"

    const/4 v1, 0x0

    invoke-interface {p1, v0, v1}, Landroid/content/SharedPreferences;->getInt(Ljava/lang/String;I)I

    move-result v0

    .line 141
    new-array v2, v0, [Lcom/getcapacitor/plugin/notification/NotificationAction;

    move v3, v1

    :goto_0
    if-ge v3, v0, :cond_0

    .line 143
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "id"

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    const-string v5, ""

    invoke-interface {p1, v4, v5}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 144
    new-instance v6, Ljava/lang/StringBuilder;

    const-string v7, "title"

    invoke-direct {v6, v7}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v6, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-interface {p1, v6, v5}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    .line 145
    new-instance v6, Ljava/lang/StringBuilder;

    const-string v7, "input"

    invoke-direct {v6, v7}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v6, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-interface {p1, v6, v1}, Landroid/content/SharedPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result v6

    invoke-static {v6}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v6

    .line 146
    new-instance v7, Lcom/getcapacitor/plugin/notification/NotificationAction;

    invoke-direct {v7, v4, v5, v6}, Lcom/getcapacitor/plugin/notification/NotificationAction;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)V

    aput-object v7, v2, v3

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_0
    return-object v2
.end method

.method public getSavedNotification(Ljava/lang/String;)Lcom/getcapacitor/plugin/notification/LocalNotification;
    .locals 1

    .line 79
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getSavedNotificationAsJSObject(Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return-object v0

    .line 86
    :cond_0
    :try_start_0
    invoke-static {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->buildNotificationFromJSObject(Lcom/getcapacitor/JSObject;)Lcom/getcapacitor/plugin/notification/LocalNotification;

    move-result-object p1
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    return-object v0
.end method

.method public getSavedNotificationAsJSObject(Ljava/lang/String;)Lcom/getcapacitor/JSObject;
    .locals 2

    .line 61
    const-string v0, "NOTIFICATION_STORE"

    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v0

    const/4 v1, 0x0

    .line 62
    invoke-interface {v0, p1, v1}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    if-nez p1, :cond_0

    return-object v1

    .line 70
    :cond_0
    :try_start_0
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0, p1}, Lcom/getcapacitor/JSObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    return-object v1
.end method

.method public getSavedNotificationIds()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 52
    const-string v0, "NOTIFICATION_STORE"

    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v0

    .line 53
    invoke-interface {v0}, Landroid/content/SharedPreferences;->getAll()Ljava/util/Map;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 55
    new-instance v1, Ljava/util/ArrayList;

    invoke-interface {v0}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v0

    invoke-direct {v1, v0}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    return-object v1

    .line 57
    :cond_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    return-object v0
.end method

.method public writeActionGroup(Ljava/util/Map;)V
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "[",
            "Lcom/getcapacitor/plugin/notification/NotificationAction;",
            ">;)V"
        }
    .end annotation

    .line 118
    invoke-interface {p1}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v0

    .line 119
    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 120
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "ACTION_TYPE_STORE"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-direct {p0, v2}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getStorage(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v2

    invoke-interface {v2}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v2

    .line 121
    invoke-interface {v2}, Landroid/content/SharedPreferences$Editor;->clear()Landroid/content/SharedPreferences$Editor;

    .line 122
    invoke-interface {p1, v1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, [Lcom/getcapacitor/plugin/notification/NotificationAction;

    .line 123
    const-string v3, "count"

    array-length v4, v1

    invoke-interface {v2, v3, v4}, Landroid/content/SharedPreferences$Editor;->putInt(Ljava/lang/String;I)Landroid/content/SharedPreferences$Editor;

    const/4 v3, 0x0

    .line 124
    :goto_1
    array-length v4, v1

    if-ge v3, v4, :cond_0

    .line 125
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "id"

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    aget-object v5, v1, v3

    invoke-virtual {v5}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getId()Ljava/lang/String;

    move-result-object v5

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 126
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "title"

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    aget-object v5, v1, v3

    invoke-virtual {v5}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getTitle()Ljava/lang/String;

    move-result-object v5

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 127
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "input"

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    aget-object v5, v1, v3

    invoke-virtual {v5}, Lcom/getcapacitor/plugin/notification/NotificationAction;->isInput()Z

    move-result v5

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putBoolean(Ljava/lang/String;Z)Landroid/content/SharedPreferences$Editor;

    add-int/lit8 v3, v3, 0x1

    goto :goto_1

    .line 129
    :cond_0
    invoke-interface {v2}, Landroid/content/SharedPreferences$Editor;->apply()V

    goto/16 :goto_0

    :cond_1
    return-void
.end method
