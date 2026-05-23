.class public Lcom/getcapacitor/plugin/PushNotifications;
.super Lcom/getcapacitor/Plugin;
.source "PushNotifications.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final EVENT_TOKEN_CHANGE:Ljava/lang/String; = "registration"

.field private static final EVENT_TOKEN_ERROR:Ljava/lang/String; = "registrationError"

.field public static lastMessage:Lcom/google/firebase/messaging/RemoteMessage;

.field public static staticBridge:Lcom/getcapacitor/Bridge;


# instance fields
.field private notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

.field public notificationManager:Landroid/app/NotificationManager;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method public static getPushNotificationsInstance()Lcom/getcapacitor/plugin/PushNotifications;
    .locals 3

    .line 242
    sget-object v0, Lcom/getcapacitor/plugin/PushNotifications;->staticBridge:Lcom/getcapacitor/Bridge;

    const/4 v1, 0x0

    if-eqz v0, :cond_1

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 243
    sget-object v0, Lcom/getcapacitor/plugin/PushNotifications;->staticBridge:Lcom/getcapacitor/Bridge;

    const-string v2, "PushNotifications"

    invoke-virtual {v0, v2}, Lcom/getcapacitor/Bridge;->getPlugin(Ljava/lang/String;)Lcom/getcapacitor/PluginHandle;

    move-result-object v0

    if-nez v0, :cond_0

    return-object v1

    .line 247
    :cond_0
    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getInstance()Lcom/getcapacitor/Plugin;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/plugin/PushNotifications;

    return-object v0

    :cond_1
    return-object v1
.end method

.method public static onNewToken(Ljava/lang/String;)V
    .locals 1

    .line 200
    invoke-static {}, Lcom/getcapacitor/plugin/PushNotifications;->getPushNotificationsInstance()Lcom/getcapacitor/plugin/PushNotifications;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 202
    invoke-virtual {v0, p0}, Lcom/getcapacitor/plugin/PushNotifications;->sendToken(Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static sendRemoteMessage(Lcom/google/firebase/messaging/RemoteMessage;)V
    .locals 1

    .line 207
    invoke-static {}, Lcom/getcapacitor/plugin/PushNotifications;->getPushNotificationsInstance()Lcom/getcapacitor/plugin/PushNotifications;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 209
    invoke-virtual {v0, p0}, Lcom/getcapacitor/plugin/PushNotifications;->fireNotification(Lcom/google/firebase/messaging/RemoteMessage;)V

    goto :goto_0

    .line 211
    :cond_0
    sput-object p0, Lcom/getcapacitor/plugin/PushNotifications;->lastMessage:Lcom/google/firebase/messaging/RemoteMessage;

    :goto_0
    return-void
.end method


# virtual methods
.method public createChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 174
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->createChannel(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public deleteChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 179
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->deleteChannel(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public fireNotification(Lcom/google/firebase/messaging/RemoteMessage;)V
    .locals 5

    .line 216
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 218
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 219
    const-string v2, "id"

    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage;->getMessageId()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 220
    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage;->getData()Ljava/util/Map;

    move-result-object v2

    invoke-interface {v2}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v2

    invoke-interface {v2}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :goto_0
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_0

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 221
    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage;->getData()Ljava/util/Map;

    move-result-object v4

    invoke-interface {v4, v3}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v4

    .line 222
    invoke-virtual {v1, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 224
    :cond_0
    const-string v2, "data"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 226
    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage;->getNotification()Lcom/google/firebase/messaging/RemoteMessage$Notification;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 228
    const-string v1, "title"

    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage$Notification;->getTitle()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 229
    const-string v1, "body"

    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage$Notification;->getBody()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 230
    const-string v1, "click_action"

    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage$Notification;->getClickAction()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 232
    invoke-virtual {p1}, Lcom/google/firebase/messaging/RemoteMessage$Notification;->getLink()Landroid/net/Uri;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 234
    const-string v1, "link"

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 238
    :cond_1
    const-string p1, "pushNotificationReceived"

    const/4 v1, 0x1

    invoke-virtual {p0, p1, v0, v1}, Lcom/getcapacitor/plugin/PushNotifications;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method

.method public getDeliveredNotifications(Lcom/getcapacitor/PluginCall;)V
    .locals 11
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 106
    new-instance v0, Lcom/getcapacitor/JSArray;

    invoke-direct {v0}, Lcom/getcapacitor/JSArray;-><init>()V

    .line 108
    iget-object v1, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {v1}, Landroid/app/NotificationManager;->getActiveNotifications()[Landroid/service/notification/StatusBarNotification;

    move-result-object v1

    .line 110
    array-length v2, v1

    const/4 v3, 0x0

    move v4, v3

    :goto_0
    if-ge v4, v2, :cond_3

    aget-object v5, v1, v4

    .line 111
    new-instance v6, Lcom/getcapacitor/JSObject;

    invoke-direct {v6}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 113
    const-string v7, "id"

    invoke-virtual {v5}, Landroid/service/notification/StatusBarNotification;->getId()I

    move-result v8

    invoke-virtual {v6, v7, v8}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 115
    invoke-virtual {v5}, Landroid/service/notification/StatusBarNotification;->getNotification()Landroid/app/Notification;

    move-result-object v5

    if-eqz v5, :cond_2

    .line 117
    iget-object v7, v5, Landroid/app/Notification;->extras:Landroid/os/Bundle;

    const-string v8, "android.title"

    invoke-virtual {v7, v8}, Landroid/os/Bundle;->getCharSequence(Ljava/lang/String;)Ljava/lang/CharSequence;

    move-result-object v7

    const-string v8, "title"

    invoke-virtual {v6, v8, v7}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 118
    iget-object v7, v5, Landroid/app/Notification;->extras:Landroid/os/Bundle;

    const-string v8, "android.text"

    invoke-virtual {v7, v8}, Landroid/os/Bundle;->getCharSequence(Ljava/lang/String;)Ljava/lang/CharSequence;

    move-result-object v7

    const-string v8, "body"

    invoke-virtual {v6, v8, v7}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 119
    const-string v7, "group"

    invoke-virtual {v5}, Landroid/app/Notification;->getGroup()Ljava/lang/String;

    move-result-object v8

    invoke-virtual {v6, v7, v8}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 120
    iget v7, v5, Landroid/app/Notification;->flags:I

    and-int/lit16 v7, v7, 0x200

    if-eqz v7, :cond_0

    const/4 v7, 0x1

    goto :goto_1

    :cond_0
    move v7, v3

    :goto_1
    const-string v8, "groupSummary"

    invoke-virtual {v6, v8, v7}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 122
    new-instance v7, Lcom/getcapacitor/JSObject;

    invoke-direct {v7}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 124
    iget-object v8, v5, Landroid/app/Notification;->extras:Landroid/os/Bundle;

    invoke-virtual {v8}, Landroid/os/Bundle;->keySet()Ljava/util/Set;

    move-result-object v8

    invoke-interface {v8}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v8

    :goto_2
    invoke-interface {v8}, Ljava/util/Iterator;->hasNext()Z

    move-result v9

    if-eqz v9, :cond_1

    invoke-interface {v8}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v9

    check-cast v9, Ljava/lang/String;

    .line 125
    iget-object v10, v5, Landroid/app/Notification;->extras:Landroid/os/Bundle;

    invoke-virtual {v10, v9}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v10

    invoke-virtual {v7, v9, v10}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    goto :goto_2

    .line 128
    :cond_1
    const-string v5, "data"

    invoke-virtual {v6, v5, v7}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 131
    :cond_2
    invoke-virtual {v0, v6}, Lcom/getcapacitor/JSArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    .line 135
    :cond_3
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 136
    const-string v2, "notifications"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 137
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method protected handleOnNewIntent(Landroid/content/Intent;)V
    .locals 6

    .line 58
    invoke-super {p0, p1}, Lcom/getcapacitor/Plugin;->handleOnNewIntent(Landroid/content/Intent;)V

    .line 59
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 60
    const-string v0, "google.message_id"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->containsKey(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 61
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 62
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 63
    invoke-virtual {p1}, Landroid/os/Bundle;->keySet()Ljava/util/Set;

    move-result-object v3

    invoke-interface {v3}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v3

    :goto_0
    invoke-interface {v3}, Ljava/util/Iterator;->hasNext()Z

    move-result v4

    if-eqz v4, :cond_2

    invoke-interface {v3}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    .line 64
    invoke-virtual {v4, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_0

    .line 65
    const-string v5, "id"

    invoke-virtual {p1, v4}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v1, v5, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 67
    :cond_0
    invoke-virtual {p1, v4}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v5

    if-eqz v5, :cond_1

    .line 68
    invoke-virtual {v5}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v5

    goto :goto_1

    :cond_1
    const/4 v5, 0x0

    .line 69
    :goto_1
    invoke-virtual {v2, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 72
    :cond_2
    const-string p1, "data"

    invoke-virtual {v1, p1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 73
    new-instance p1, Lcom/getcapacitor/JSObject;

    invoke-direct {p1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 74
    const-string v0, "actionId"

    const-string v2, "tap"

    invoke-virtual {p1, v0, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 75
    const-string v0, "notification"

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 76
    const-string v0, "pushNotificationActionPerformed"

    const/4 v1, 0x1

    invoke-virtual {p0, v0, p1, v1}, Lcom/getcapacitor/plugin/PushNotifications;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    :cond_3
    return-void
.end method

.method public listChannels(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 184
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->listChannels(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public load()V
    .locals 3

    .line 46
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/PushNotifications;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    const-string v1, "notification"

    .line 47
    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/NotificationManager;

    iput-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationManager:Landroid/app/NotificationManager;

    .line 48
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->bridge:Lcom/getcapacitor/Bridge;

    sput-object v0, Lcom/getcapacitor/plugin/PushNotifications;->staticBridge:Lcom/getcapacitor/Bridge;

    .line 49
    sget-object v0, Lcom/getcapacitor/plugin/PushNotifications;->lastMessage:Lcom/google/firebase/messaging/RemoteMessage;

    if-eqz v0, :cond_0

    .line 50
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/PushNotifications;->fireNotification(Lcom/google/firebase/messaging/RemoteMessage;)V

    const/4 v0, 0x0

    .line 51
    sput-object v0, Lcom/getcapacitor/plugin/PushNotifications;->lastMessage:Lcom/google/firebase/messaging/RemoteMessage;

    .line 53
    :cond_0
    new-instance v0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/PushNotifications;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationManager:Landroid/app/NotificationManager;

    invoke-direct {v0, v1, v2}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;-><init>(Landroid/content/Context;Landroid/app/NotificationManager;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationChannelManager:Lcom/getcapacitor/plugin/notification/NotificationChannelManager;

    return-void
.end method

.method public register(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 82
    invoke-static {}, Lcom/google/firebase/messaging/FirebaseMessaging;->getInstance()Lcom/google/firebase/messaging/FirebaseMessaging;

    move-result-object v0

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Lcom/google/firebase/messaging/FirebaseMessaging;->setAutoInitEnabled(Z)V

    .line 83
    invoke-static {}, Lcom/google/firebase/iid/FirebaseInstanceId;->getInstance()Lcom/google/firebase/iid/FirebaseInstanceId;

    move-result-object v0

    invoke-virtual {v0}, Lcom/google/firebase/iid/FirebaseInstanceId;->getInstanceId()Lcom/google/android/gms/tasks/Task;

    move-result-object v0

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/PushNotifications;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/plugin/PushNotifications$1;

    invoke-direct {v2, p0}, Lcom/getcapacitor/plugin/PushNotifications$1;-><init>(Lcom/getcapacitor/plugin/PushNotifications;)V

    invoke-virtual {v0, v1, v2}, Lcom/google/android/gms/tasks/Task;->addOnSuccessListener(Landroid/app/Activity;Lcom/google/android/gms/tasks/OnSuccessListener;)Lcom/google/android/gms/tasks/Task;

    .line 89
    invoke-static {}, Lcom/google/firebase/iid/FirebaseInstanceId;->getInstance()Lcom/google/firebase/iid/FirebaseInstanceId;

    move-result-object v0

    invoke-virtual {v0}, Lcom/google/firebase/iid/FirebaseInstanceId;->getInstanceId()Lcom/google/android/gms/tasks/Task;

    move-result-object v0

    new-instance v1, Lcom/getcapacitor/plugin/PushNotifications$2;

    invoke-direct {v1, p0}, Lcom/getcapacitor/plugin/PushNotifications$2;-><init>(Lcom/getcapacitor/plugin/PushNotifications;)V

    invoke-virtual {v0, v1}, Lcom/google/android/gms/tasks/Task;->addOnFailureListener(Lcom/google/android/gms/tasks/OnFailureListener;)Lcom/google/android/gms/tasks/Task;

    .line 94
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public removeAllDeliveredNotifications(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 168
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {v0}, Landroid/app/NotificationManager;->cancelAll()V

    .line 169
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public removeDeliveredNotifications(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 142
    const-string v0, "notifications"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v0

    .line 144
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 146
    :try_start_0
    invoke-virtual {v0}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    .line 147
    instance-of v3, v2, Lorg/json/JSONObject;

    if-eqz v3, :cond_0

    .line 148
    check-cast v2, Lorg/json/JSONObject;

    invoke-static {v2}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v2

    .line 149
    const-string v3, "id"

    invoke-virtual {v2, v3}, Lcom/getcapacitor/JSObject;->getInteger(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v2

    .line 150
    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 152
    :cond_0
    const-string v2, "Expected notifications to be a list of notification objects"

    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 156
    invoke-virtual {v0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    .line 159
    :cond_1
    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_1
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    .line 160
    iget-object v2, p0, Lcom/getcapacitor/plugin/PushNotifications;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {v2, v1}, Landroid/app/NotificationManager;->cancel(I)V

    goto :goto_1

    .line 163
    :cond_2
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public requestPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 99
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 100
    const-string v1, "granted"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 101
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public sendError(Ljava/lang/String;)V
    .locals 2

    .line 194
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 195
    const-string v1, "error"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 196
    const-string p1, "registrationError"

    const/4 v1, 0x1

    invoke-virtual {p0, p1, v0, v1}, Lcom/getcapacitor/plugin/PushNotifications;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method

.method public sendToken(Ljava/lang/String;)V
    .locals 2

    .line 188
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 189
    const-string v1, "value"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 190
    const-string p1, "registration"

    const/4 v1, 0x1

    invoke-virtual {p0, p1, v0, v1}, Lcom/getcapacitor/plugin/PushNotifications;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method
