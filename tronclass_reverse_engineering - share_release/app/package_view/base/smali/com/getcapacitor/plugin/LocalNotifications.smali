.class public Lcom/getcapacitor/plugin/LocalNotifications;
.super Lcom/getcapacitor/Plugin;
.source "LocalNotifications.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    requestCodes = {
        0x232e
    }
.end annotation


# instance fields
.field private manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

.field private notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

.field private notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public areEnabled(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 121
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 122
    iget-object v1, p0, Lcom/getcapacitor/plugin/LocalNotifications;->manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->areNotificationsEnabled()Z

    move-result v1

    const-string v2, "value"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 123
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public cancel(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 101
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->cancel(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public createChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 128
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->createChannel(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public deleteChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 133
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->deleteChannel(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public getPending(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 106
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getSavedNotificationIds()Ljava/util/List;

    move-result-object v0

    .line 107
    invoke-static {v0}, Lcom/getcapacitor/plugin/notification/LocalNotification;->buildLocalNotificationPendingList(Ljava/util/List;)Lcom/getcapacitor/JSObject;

    move-result-object v0

    .line 108
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method protected handleOnActivityResult(IILandroid/content/Intent;)V
    .locals 0

    .line 61
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleOnActivityResult(IILandroid/content/Intent;)V

    .line 62
    invoke-virtual {p0, p3}, Lcom/getcapacitor/plugin/LocalNotifications;->handleOnNewIntent(Landroid/content/Intent;)V

    return-void
.end method

.method protected handleOnNewIntent(Landroid/content/Intent;)V
    .locals 2

    .line 49
    invoke-super {p0, p1}, Lcom/getcapacitor/Plugin;->handleOnNewIntent(Landroid/content/Intent;)V

    .line 50
    const-string v0, "android.intent.action.MAIN"

    invoke-virtual {p1}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 53
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    iget-object v1, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v0, p1, v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->handleNotificationActionPerformed(Landroid/content/Intent;Lcom/getcapacitor/plugin/notification/NotificationStorage;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 55
    const-string v0, "localNotificationActionPerformed"

    const/4 v1, 0x1

    invoke-virtual {p0, v0, p1, v1}, Lcom/getcapacitor/plugin/LocalNotifications;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    :cond_1
    return-void
.end method

.method public listChannels(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 138
    iget-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->listChannels(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public load()V
    .locals 5

    .line 40
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->load()V

    .line 41
    new-instance v0, Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/LocalNotifications;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, v1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    .line 42
    new-instance v0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    iget-object v1, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/LocalNotifications;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v2

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/LocalNotifications;->getContext()Landroid/content/Context;

    move-result-object v3

    iget-object v4, p0, Lcom/getcapacitor/plugin/LocalNotifications;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v4}, Lcom/getcapacitor/Bridge;->getConfig()Lcom/getcapacitor/CapConfig;

    move-result-object v4

    invoke-direct {v0, v1, v2, v3, v4}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;-><init>(Lcom/getcapacitor/plugin/notification/NotificationStorage;Landroid/app/Activity;Landroid/content/Context;Lcom/getcapacitor/CapConfig;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    .line 43
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->createNotificationChannel()V

    .line 44
    new-instance v0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/LocalNotifications;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-direct {v0, v1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    return-void
.end method

.method public registerActionTypes(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 113
    const-string v0, "types"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v0

    .line 114
    invoke-static {v0}, Lcom/getcapacitor/plugin/notification/NotificationAction;->buildTypes(Lcom/getcapacitor/JSArray;)Ljava/util/Map;

    move-result-object v0

    .line 115
    iget-object v1, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v1, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->writeActionGroup(Ljava/util/Map;)V

    .line 116
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public requestPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 94
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 95
    const-string v1, "granted"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 96
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public schedule(Lcom/getcapacitor/PluginCall;)V
    .locals 7
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 71
    invoke-static {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->buildNotificationList(Lcom/getcapacitor/PluginCall;)Ljava/util/List;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 75
    :cond_0
    iget-object v1, p0, Lcom/getcapacitor/plugin/LocalNotifications;->manager:Lcom/getcapacitor/plugin/notification/LocalNotificationManager;

    invoke-virtual {v1, p1, v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->schedule(Lcom/getcapacitor/PluginCall;Ljava/util/List;)Lorg/json/JSONArray;

    move-result-object v1

    if-eqz v1, :cond_2

    .line 77
    iget-object v2, p0, Lcom/getcapacitor/plugin/LocalNotifications;->notificationStorage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v2, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->appendNotifications(Ljava/util/List;)V

    .line 78
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 79
    new-instance v2, Lcom/getcapacitor/JSArray;

    invoke-direct {v2}, Lcom/getcapacitor/JSArray;-><init>()V

    const/4 v3, 0x0

    .line 80
    :goto_0
    invoke-virtual {v1}, Lorg/json/JSONArray;->length()I

    move-result v4

    if-ge v3, v4, :cond_1

    .line 82
    :try_start_0
    new-instance v4, Lcom/getcapacitor/JSObject;

    invoke-direct {v4}, Lcom/getcapacitor/JSObject;-><init>()V

    const-string v5, "id"

    invoke-virtual {v1, v3}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v4, v5, v6}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    move-result-object v4

    .line 83
    invoke-virtual {v2, v4}, Lcom/getcapacitor/JSArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 87
    :cond_1
    const-string v1, "notifications"

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 88
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :cond_2
    return-void
.end method
