.class public Lcom/getcapacitor/plugin/notification/NotificationChannelManager;
.super Ljava/lang/Object;
.source "NotificationChannelManager.java"


# static fields
.field private static CHANNEL_DESCRIPTION:Ljava/lang/String; = "description"

.field private static CHANNEL_ID:Ljava/lang/String; = "id"

.field private static CHANNEL_IMPORTANCE:Ljava/lang/String; = "importance"

.field private static CHANNEL_LIGHT_COLOR:Ljava/lang/String; = "lightColor"

.field private static CHANNEL_NAME:Ljava/lang/String; = "name"

.field private static CHANNEL_SOUND:Ljava/lang/String; = "sound"

.field private static CHANNEL_USE_LIGHTS:Ljava/lang/String; = "lights"

.field private static CHANNEL_VIBRATE:Ljava/lang/String; = "vibration"

.field private static CHANNEL_VISIBILITY:Ljava/lang/String; = "visibility"


# instance fields
.field private context:Landroid/content/Context;

.field private notificationManager:Landroid/app/NotificationManager;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;)V
    .locals 1

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 26
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->context:Landroid/content/Context;

    .line 27
    const-string v0, "notification"

    invoke-virtual {p1, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/app/NotificationManager;

    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->notificationManager:Landroid/app/NotificationManager;

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/app/NotificationManager;)V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 31
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->context:Landroid/content/Context;

    .line 32
    iput-object p2, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->notificationManager:Landroid/app/NotificationManager;

    return-void
.end method


# virtual methods
.method public createChannel(Lcom/getcapacitor/JSObject;)V
    .locals 5

    .line 64
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_3

    .line 65
    new-instance v0, Landroid/app/NotificationChannel;

    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_ID:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    sget-object v2, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_NAME:Ljava/lang/String;

    invoke-virtual {p1, v2}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    sget-object v3, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_IMPORTANCE:Ljava/lang/String;

    invoke-virtual {p1, v3}, Lcom/getcapacitor/JSObject;->getInteger(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Integer;->intValue()I

    move-result v3

    invoke-direct {v0, v1, v2, v3}, Landroid/app/NotificationChannel;-><init>(Ljava/lang/String;Ljava/lang/CharSequence;I)V

    .line 66
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_DESCRIPTION:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationChannel;->setDescription(Ljava/lang/String;)V

    .line 67
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VISIBILITY:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getInteger(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationChannel;->setLockscreenVisibility(I)V

    .line 68
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VIBRATE:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getBool(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationChannel;->enableVibration(Z)V

    .line 69
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_USE_LIGHTS:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getBool(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationChannel;->enableLights(Z)V

    .line 70
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_LIGHT_COLOR:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    const/4 v3, 0x0

    if-eqz v1, :cond_0

    .line 73
    :try_start_0
    invoke-static {v1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationChannel;->setLightColor(I)V
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const/4 v1, 0x1

    .line 75
    new-array v1, v1, [Ljava/lang/String;

    const-string v4, "NotificationChannel"

    aput-object v4, v1, v2

    invoke-static {v1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v4, "Invalid color provided for light color."

    invoke-static {v1, v4, v3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 78
    :cond_0
    :goto_0
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_SOUND:Ljava/lang/String;

    invoke-virtual {p1, v1, v3}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 79
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-nez v1, :cond_2

    .line 80
    const-string v1, "."

    invoke-virtual {p1, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v1

    if-eqz v1, :cond_1

    const/16 v1, 0x2e

    .line 81
    invoke-virtual {p1, v1}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v1

    invoke-virtual {p1, v2, v1}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object p1

    .line 83
    :cond_1
    new-instance v1, Landroid/media/AudioAttributes$Builder;

    invoke-direct {v1}, Landroid/media/AudioAttributes$Builder;-><init>()V

    const/4 v2, 0x4

    .line 84
    invoke-virtual {v1, v2}, Landroid/media/AudioAttributes$Builder;->setContentType(I)Landroid/media/AudioAttributes$Builder;

    move-result-object v1

    const/4 v2, 0x5

    .line 85
    invoke-virtual {v1, v2}, Landroid/media/AudioAttributes$Builder;->setUsage(I)Landroid/media/AudioAttributes$Builder;

    move-result-object v1

    invoke-virtual {v1}, Landroid/media/AudioAttributes$Builder;->build()Landroid/media/AudioAttributes;

    move-result-object v1

    .line 86
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "android.resource://"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v3, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->context:Landroid/content/Context;

    invoke-virtual {v3}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, "/raw/"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    .line 87
    invoke-virtual {v0, p1, v1}, Landroid/app/NotificationChannel;->setSound(Landroid/net/Uri;Landroid/media/AudioAttributes;)V

    .line 89
    :cond_2
    iget-object p1, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {p1, v0}, Landroid/app/NotificationManager;->createNotificationChannel(Landroid/app/NotificationChannel;)V

    :cond_3
    return-void
.end method

.method public createChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 5

    .line 46
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_0

    .line 47
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 48
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_ID:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 49
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_NAME:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 50
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_DESCRIPTION:Ljava/lang/String;

    const-string v2, ""

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 51
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VISIBILITY:Ljava/lang/String;

    const/4 v2, 0x1

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 52
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_IMPORTANCE:Ljava/lang/String;

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 53
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_SOUND:Ljava/lang/String;

    const/4 v2, 0x0

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v1, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 54
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VIBRATE:Ljava/lang/String;

    const/4 v3, 0x0

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v4

    invoke-virtual {p1, v1, v4}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v4

    invoke-virtual {v0, v1, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 55
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_USE_LIGHTS:Ljava/lang/String;

    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    invoke-virtual {p1, v1, v3}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v3

    invoke-virtual {v0, v1, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 56
    sget-object v1, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_LIGHT_COLOR:Ljava/lang/String;

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 57
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->createChannel(Lcom/getcapacitor/JSObject;)V

    .line 58
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    goto :goto_0

    .line 60
    :cond_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unavailable()V

    :goto_0
    return-void
.end method

.method public deleteChannel(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 94
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_0

    .line 95
    const-string v0, "id"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 96
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {v1, v0}, Landroid/app/NotificationManager;->deleteNotificationChannel(Ljava/lang/String;)V

    .line 97
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    goto :goto_0

    .line 99
    :cond_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unavailable()V

    :goto_0
    return-void
.end method

.method public listChannels(Lcom/getcapacitor/PluginCall;)V
    .locals 10

    .line 104
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_1

    .line 105
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->notificationManager:Landroid/app/NotificationManager;

    invoke-virtual {v0}, Landroid/app/NotificationManager;->getNotificationChannels()Ljava/util/List;

    move-result-object v0

    .line 106
    new-instance v1, Lcom/getcapacitor/JSArray;

    invoke-direct {v1}, Lcom/getcapacitor/JSArray;-><init>()V

    .line 107
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/app/NotificationChannel;

    .line 108
    new-instance v3, Lcom/getcapacitor/JSObject;

    invoke-direct {v3}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 109
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_ID:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getId()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 110
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_NAME:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getName()Ljava/lang/CharSequence;

    move-result-object v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 111
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_DESCRIPTION:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getDescription()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 112
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_IMPORTANCE:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getImportance()I

    move-result v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 113
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VISIBILITY:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getLockscreenVisibility()I

    move-result v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 114
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_SOUND:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getSound()Landroid/net/Uri;

    move-result-object v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 115
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_VIBRATE:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->shouldVibrate()Z

    move-result v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 116
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_USE_LIGHTS:Ljava/lang/String;

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->shouldShowLights()Z

    move-result v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 117
    sget-object v4, Lcom/getcapacitor/plugin/notification/NotificationChannelManager;->CHANNEL_LIGHT_COLOR:Ljava/lang/String;

    const v5, 0xffffff

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getLightColor()I

    move-result v6

    and-int/2addr v5, v6

    invoke-static {v5}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v5

    filled-new-array {v5}, [Ljava/lang/Object;

    move-result-object v5

    const-string v6, "#%06X"

    invoke-static {v6, v5}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v3, v4, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    const/4 v4, 0x1

    .line 118
    new-array v5, v4, [Ljava/lang/String;

    const/4 v6, 0x0

    const-string v7, "NotificationChannel"

    aput-object v7, v5, v6

    invoke-static {v5}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    new-instance v8, Ljava/lang/StringBuilder;

    const-string v9, "visibility "

    invoke-direct {v8, v9}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getLockscreenVisibility()I

    move-result v9

    invoke-virtual {v8, v9}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v8

    invoke-virtual {v8}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v8

    invoke-static {v5, v8}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 119
    new-array v4, v4, [Ljava/lang/String;

    aput-object v7, v4, v6

    invoke-static {v4}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "importance "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2}, Landroid/app/NotificationChannel;->getImportance()I

    move-result v2

    invoke-virtual {v5, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 120
    invoke-virtual {v1, v3}, Lcom/getcapacitor/JSArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto/16 :goto_0

    .line 122
    :cond_0
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 123
    const-string v2, "channels"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 124
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_1

    .line 126
    :cond_1
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unavailable()V

    :goto_1
    return-void
.end method
