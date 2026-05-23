.class public Lcom/getcapacitor/plugin/notification/LocalNotificationRestoreReceiver;
.super Landroid/content/BroadcastReceiver;
.source "LocalNotificationRestoreReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 9

    .line 21
    const-class p2, Landroid/os/UserManager;

    invoke-virtual {p1, p2}, Landroid/content/Context;->getSystemService(Ljava/lang/Class;)Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Landroid/os/UserManager;

    if-eqz p2, :cond_5

    .line 22
    invoke-virtual {p2}, Landroid/os/UserManager;->isUserUnlocked()Z

    move-result p2

    if-nez p2, :cond_0

    goto/16 :goto_1

    .line 25
    :cond_0
    new-instance p2, Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-direct {p2, p1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;-><init>(Landroid/content/Context;)V

    .line 26
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getSavedNotificationIds()Ljava/util/List;

    move-result-object v0

    .line 28
    new-instance v1, Ljava/util/ArrayList;

    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v2

    invoke-direct {v1, v2}, Ljava/util/ArrayList;-><init>(I)V

    .line 29
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    .line 30
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_3

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 31
    invoke-virtual {p2, v3}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getSavedNotification(Ljava/lang/String;)Lcom/getcapacitor/plugin/notification/LocalNotification;

    move-result-object v3

    if-nez v3, :cond_1

    goto :goto_0

    .line 36
    :cond_1
    invoke-virtual {v3}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object v4

    if-eqz v4, :cond_2

    .line 38
    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getAt()Ljava/util/Date;

    move-result-object v5

    if-eqz v5, :cond_2

    .line 39
    new-instance v6, Ljava/util/Date;

    invoke-direct {v6}, Ljava/util/Date;-><init>()V

    invoke-virtual {v5, v6}, Ljava/util/Date;->before(Ljava/util/Date;)Z

    move-result v5

    if-eqz v5, :cond_2

    .line 41
    new-instance v5, Ljava/util/Date;

    invoke-direct {v5}, Ljava/util/Date;-><init>()V

    invoke-virtual {v5}, Ljava/util/Date;->getTime()J

    move-result-wide v5

    const-wide/16 v7, 0x3a98

    add-long/2addr v5, v7

    .line 42
    new-instance v7, Ljava/util/Date;

    invoke-direct {v7, v5, v6}, Ljava/util/Date;-><init>(J)V

    invoke-virtual {v4, v7}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->setAt(Ljava/util/Date;)V

    .line 43
    invoke-virtual {v3, v4}, Lcom/getcapacitor/plugin/notification/LocalNotification;->setSchedule(Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;)V

    .line 44
    invoke-virtual {v2, v3}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 48
    :cond_2
    invoke-virtual {v1, v3}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 51
    :cond_3
    invoke-virtual {v2}, Ljava/util/ArrayList;->size()I

    move-result v0

    if-lez v0, :cond_4

    .line 52
    invoke-virtual {p2, v2}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->appendNotifications(Ljava/util/List;)V

    .line 55
    :cond_4
    new-instance v0, Lcom/getcapacitor/CapConfig;

    invoke-virtual {p1}, Landroid/content/Context;->getAssets()Landroid/content/res/AssetManager;

    move-result-object v2

    const/4 v3, 0x0

    invoke-direct {v0, v2, v3}, Lcom/getcapacitor/CapConfig;-><init>(Landroid/content/res/AssetManager;Lorg/json/JSONObject;)V

    .line 56
    new-instance v2, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    invoke-direct {v2, p2, v3, p1, v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;-><init>(Lcom/getcapacitor/plugin/notification/NotificationStorage;Landroid/app/Activity;Landroid/content/Context;Lcom/getcapacitor/CapConfig;)V

    .line 58
    invoke-virtual {v2, v3, v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->schedule(Lcom/getcapacitor/PluginCall;Ljava/util/List;)Lorg/json/JSONArray;

    :cond_5
    :goto_1
    return-void
.end method
