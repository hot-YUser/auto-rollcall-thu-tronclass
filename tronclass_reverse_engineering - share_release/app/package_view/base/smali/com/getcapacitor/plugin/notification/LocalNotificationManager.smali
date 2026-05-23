.class public Lcom/getcapacitor/plugin/notification/LocalNotificationManager;
.super Ljava/lang/Object;
.source "LocalNotificationManager.java"


# static fields
.field public static final ACTION_INTENT_KEY:Ljava/lang/String; = "LocalNotificationUserAction"

.field private static final CONFIG_KEY_PREFIX:Ljava/lang/String; = "plugins.LocalNotifications."

.field public static final DEFAULT_NOTIFICATION_CHANNEL_ID:Ljava/lang/String; = "default"

.field private static final DEFAULT_PRESS_ACTION:Ljava/lang/String; = "tap"

.field public static final NOTIFICATION_INTENT_KEY:Ljava/lang/String; = "LocalNotificationId"

.field public static final NOTIFICATION_IS_REMOVABLE_KEY:Ljava/lang/String; = "LocalNotificationRepeating"

.field public static final NOTIFICATION_OBJ_INTENT_KEY:Ljava/lang/String; = "LocalNotficationObject"

.field public static final REMOTE_INPUT_KEY:Ljava/lang/String; = "LocalNotificationRemoteInput"

.field private static defaultSmallIconID:I

.field private static defaultSoundID:I


# instance fields
.field private activity:Landroid/app/Activity;

.field private config:Lcom/getcapacitor/CapConfig;

.field private context:Landroid/content/Context;

.field private storage:Lcom/getcapacitor/plugin/notification/NotificationStorage;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>(Lcom/getcapacitor/plugin/notification/NotificationStorage;Landroid/app/Activity;Landroid/content/Context;Lcom/getcapacitor/CapConfig;)V
    .locals 0

    .line 63
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 64
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->storage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    .line 65
    iput-object p2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->activity:Landroid/app/Activity;

    .line 66
    iput-object p3, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    .line 67
    iput-object p4, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->config:Lcom/getcapacitor/CapConfig;

    return-void
.end method

.method private buildIntent(Lcom/getcapacitor/plugin/notification/LocalNotification;Ljava/lang/String;)Landroid/content/Intent;
    .locals 3

    .line 282
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->activity:Landroid/app/Activity;

    if-eqz v0, :cond_0

    .line 283
    new-instance v0, Landroid/content/Intent;

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->activity:Landroid/app/Activity;

    invoke-virtual {v2}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-direct {v0, v1, v2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    goto :goto_0

    .line 285
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    .line 286
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {v1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/content/pm/PackageManager;->getLaunchIntentForPackage(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v0

    .line 288
    :goto_0
    const-string v1, "android.intent.action.MAIN"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 289
    const-string v1, "android.intent.category.LAUNCHER"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    const/high16 v1, 0x24000000

    .line 290
    invoke-virtual {v0, v1}, Landroid/content/Intent;->setFlags(I)Landroid/content/Intent;

    .line 291
    const-string v1, "LocalNotificationId"

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    .line 292
    const-string v1, "LocalNotificationUserAction"

    invoke-virtual {v0, v1, p2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 293
    const-string p2, "LocalNotficationObject"

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSource()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, p2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 294
    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 295
    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->isRemovable()Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_1

    :cond_1
    const/4 p1, 0x0

    goto :goto_2

    :cond_2
    :goto_1
    const/4 p1, 0x1

    :goto_2
    const-string p2, "LocalNotificationRepeating"

    invoke-virtual {v0, p2, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    return-object v0
.end method

.method private buildNotification(Landroidx/core/app/NotificationManagerCompat;Lcom/getcapacitor/plugin/notification/LocalNotification;Lcom/getcapacitor/PluginCall;)V
    .locals 6

    .line 172
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getChannelId()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 173
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getChannelId()Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    .line 172
    :cond_0
    const-string v0, "default"

    .line 175
    :goto_0
    new-instance v1, Landroidx/core/app/NotificationCompat$Builder;

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-direct {v1, v2, v0}, Landroidx/core/app/NotificationCompat$Builder;-><init>(Landroid/content/Context;Ljava/lang/String;)V

    .line 176
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getTitle()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Landroidx/core/app/NotificationCompat$Builder;->setContentTitle(Ljava/lang/CharSequence;)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    .line 177
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getBody()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setContentText(Ljava/lang/CharSequence;)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    .line 178
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->isAutoCancel()Z

    move-result v1

    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setAutoCancel(Z)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    .line 179
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->isOngoing()Z

    move-result v1

    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setOngoing(Z)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    const/4 v1, 0x0

    .line 180
    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setPriority(I)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    .line 181
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->isGroupSummary()Z

    move-result v2

    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setGroupSummary(Z)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v0

    .line 185
    new-instance v2, Landroidx/core/app/NotificationCompat$BigTextStyle;

    invoke-direct {v2}, Landroidx/core/app/NotificationCompat$BigTextStyle;-><init>()V

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getBody()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Landroidx/core/app/NotificationCompat$BigTextStyle;->bigText(Ljava/lang/CharSequence;)Landroidx/core/app/NotificationCompat$BigTextStyle;

    move-result-object v2

    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setStyle(Landroidx/core/app/NotificationCompat$Style;)Landroidx/core/app/NotificationCompat$Builder;

    .line 187
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-direct {p0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->getDefaultSound(Landroid/content/Context;)I

    move-result v3

    invoke-virtual {p2, v2, v3}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSound(Landroid/content/Context;I)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x1

    if-eqz v2, :cond_1

    .line 189
    invoke-static {v2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v2

    .line 191
    iget-object v4, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-string v5, "com.android.systemui"

    invoke-virtual {v4, v5, v2, v3}, Landroid/content/Context;->grantUriPermission(Ljava/lang/String;Landroid/net/Uri;I)V

    .line 194
    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setSound(Landroid/net/Uri;)Landroidx/core/app/NotificationCompat$Builder;

    const/4 v2, 0x6

    .line 195
    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setDefaults(I)Landroidx/core/app/NotificationCompat$Builder;

    goto :goto_1

    :cond_1
    const/4 v2, -0x1

    .line 197
    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setDefaults(I)Landroidx/core/app/NotificationCompat$Builder;

    .line 201
    :goto_1
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getGroup()Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_2

    .line 203
    invoke-virtual {v0, v2}, Landroidx/core/app/NotificationCompat$Builder;->setGroup(Ljava/lang/String;)Landroidx/core/app/NotificationCompat$Builder;

    .line 207
    :cond_2
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->isScheduled()Z

    move-result v2

    if-eqz v2, :cond_3

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object v2

    invoke-virtual {v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getAt()Ljava/util/Date;

    move-result-object v2

    if-eqz v2, :cond_3

    .line 208
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object v2

    invoke-virtual {v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getAt()Ljava/util/Date;

    move-result-object v2

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v4

    invoke-virtual {v0, v4, v5}, Landroidx/core/app/NotificationCompat$Builder;->setWhen(J)Landroidx/core/app/NotificationCompat$Builder;

    move-result-object v2

    .line 209
    invoke-virtual {v2, v3}, Landroidx/core/app/NotificationCompat$Builder;->setShowWhen(Z)Landroidx/core/app/NotificationCompat$Builder;

    .line 212
    :cond_3
    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setVisibility(I)Landroidx/core/app/NotificationCompat$Builder;

    .line 213
    invoke-virtual {v0, v3}, Landroidx/core/app/NotificationCompat$Builder;->setOnlyAlertOnce(Z)Landroidx/core/app/NotificationCompat$Builder;

    .line 215
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->getDefaultSmallIcon(Landroid/content/Context;)I

    move-result v2

    invoke-virtual {p2, v1, v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSmallIcon(Landroid/content/Context;I)I

    move-result v1

    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setSmallIcon(I)Landroidx/core/app/NotificationCompat$Builder;

    .line 217
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->config:Lcom/getcapacitor/CapConfig;

    const-string v2, "plugins.LocalNotifications.iconColor"

    invoke-virtual {v1, v2}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p2, v1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getIconColor(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_5

    .line 220
    :try_start_0
    invoke-static {v1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v1

    invoke-virtual {v0, v1}, Landroidx/core/app/NotificationCompat$Builder;->setColor(I)Landroidx/core/app/NotificationCompat$Builder;
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_2

    :catch_0
    if-eqz p3, :cond_4

    .line 223
    const-string p1, "Invalid color provided. Must be a hex string (ex: #ff0000"

    invoke-virtual {p3, p1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_4
    return-void

    .line 229
    :cond_5
    :goto_2
    invoke-direct {p0, p2, v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->createActionIntents(Lcom/getcapacitor/plugin/notification/LocalNotification;Landroidx/core/app/NotificationCompat$Builder;)V

    .line 231
    invoke-virtual {v0}, Landroidx/core/app/NotificationCompat$Builder;->build()Landroid/app/Notification;

    move-result-object p3

    .line 232
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->isScheduled()Z

    move-result v0

    if-eqz v0, :cond_6

    .line 233
    invoke-direct {p0, p3, p2}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->triggerScheduledNotification(Landroid/app/Notification;Lcom/getcapacitor/plugin/notification/LocalNotification;)V

    goto :goto_3

    .line 235
    :cond_6
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/Integer;->intValue()I

    move-result p2

    invoke-virtual {p1, p2, p3}, Landroidx/core/app/NotificationManagerCompat;->notify(ILandroid/app/Notification;)V

    :goto_3
    return-void
.end method

.method private cancelTimerForNotification(Ljava/lang/Integer;)V
    .locals 3

    .line 364
    new-instance v0, Landroid/content/Intent;

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-class v2, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;

    invoke-direct {v0, v1, v2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 365
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    .line 366
    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    const/4 v2, 0x0

    .line 365
    invoke-static {v1, p1, v0, v2}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 368
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-string v1, "alarm"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/AlarmManager;

    .line 369
    invoke-virtual {v0, p1}, Landroid/app/AlarmManager;->cancel(Landroid/app/PendingIntent;)V

    :cond_0
    return-void
.end method

.method private createActionIntents(Lcom/getcapacitor/plugin/notification/LocalNotification;Landroidx/core/app/NotificationCompat$Builder;)V
    .locals 9

    .line 242
    const-string v0, "tap"

    invoke-direct {p0, p1, v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->buildIntent(Lcom/getcapacitor/plugin/notification/LocalNotification;Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v0

    .line 244
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    const/high16 v3, 0x10000000

    invoke-static {v1, v2, v0, v3}, Landroid/app/PendingIntent;->getActivity(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object v0

    .line 245
    invoke-virtual {p2, v0}, Landroidx/core/app/NotificationCompat$Builder;->setContentIntent(Landroid/app/PendingIntent;)Landroidx/core/app/NotificationCompat$Builder;

    .line 248
    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getActionTypeId()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_1

    .line 250
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->storage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v2, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->getActionGroup(Ljava/lang/String;)[Lcom/getcapacitor/plugin/notification/NotificationAction;

    move-result-object v0

    move v2, v1

    .line 251
    :goto_0
    array-length v4, v0

    if-ge v2, v4, :cond_1

    .line 252
    aget-object v4, v0, v2

    .line 254
    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getId()Ljava/lang/String;

    move-result-object v5

    invoke-direct {p0, p1, v5}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->buildIntent(Lcom/getcapacitor/plugin/notification/LocalNotification;Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v5

    .line 255
    iget-object v6, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v7

    invoke-virtual {v7}, Ljava/lang/Integer;->intValue()I

    move-result v7

    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getId()Ljava/lang/String;

    move-result-object v8

    invoke-virtual {v8}, Ljava/lang/String;->hashCode()I

    move-result v8

    add-int/2addr v7, v8

    invoke-static {v6, v7, v5, v3}, Landroid/app/PendingIntent;->getActivity(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object v5

    .line 256
    new-instance v6, Landroidx/core/app/NotificationCompat$Action$Builder;

    sget v7, Lcom/getcapacitor/android/R$drawable;->ic_transparent:I

    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getTitle()Ljava/lang/String;

    move-result-object v8

    invoke-direct {v6, v7, v8, v5}, Landroidx/core/app/NotificationCompat$Action$Builder;-><init>(ILjava/lang/CharSequence;Landroid/app/PendingIntent;)V

    .line 257
    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/NotificationAction;->isInput()Z

    move-result v5

    if-eqz v5, :cond_0

    .line 258
    new-instance v5, Landroidx/core/app/RemoteInput$Builder;

    const-string v7, "LocalNotificationRemoteInput"

    invoke-direct {v5, v7}, Landroidx/core/app/RemoteInput$Builder;-><init>(Ljava/lang/String;)V

    .line 259
    invoke-virtual {v4}, Lcom/getcapacitor/plugin/notification/NotificationAction;->getTitle()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v5, v4}, Landroidx/core/app/RemoteInput$Builder;->setLabel(Ljava/lang/CharSequence;)Landroidx/core/app/RemoteInput$Builder;

    move-result-object v4

    .line 260
    invoke-virtual {v4}, Landroidx/core/app/RemoteInput$Builder;->build()Landroidx/core/app/RemoteInput;

    move-result-object v4

    .line 261
    invoke-virtual {v6, v4}, Landroidx/core/app/NotificationCompat$Action$Builder;->addRemoteInput(Landroidx/core/app/RemoteInput;)Landroidx/core/app/NotificationCompat$Action$Builder;

    .line 263
    :cond_0
    invoke-virtual {v6}, Landroidx/core/app/NotificationCompat$Action$Builder;->build()Landroidx/core/app/NotificationCompat$Action;

    move-result-object v4

    invoke-virtual {p2, v4}, Landroidx/core/app/NotificationCompat$Builder;->addAction(Landroidx/core/app/NotificationCompat$Action;)Landroidx/core/app/NotificationCompat$Builder;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 268
    :cond_1
    new-instance v0, Landroid/content/Intent;

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-class v3, Lcom/getcapacitor/plugin/notification/NotificationDismissReceiver;

    invoke-direct {v0, v2, v3}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    const v2, 0x10008000

    .line 269
    invoke-virtual {v0, v2}, Landroid/content/Intent;->setFlags(I)Landroid/content/Intent;

    .line 270
    const-string v2, "LocalNotificationId"

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v3

    invoke-virtual {v0, v2, v3}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    .line 271
    const-string v2, "LocalNotificationUserAction"

    const-string v3, "dismiss"

    invoke-virtual {v0, v2, v3}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 272
    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object v2

    if-eqz v2, :cond_3

    .line 273
    invoke-virtual {v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->isRemovable()Z

    move-result v2

    if-eqz v2, :cond_2

    goto :goto_1

    :cond_2
    move v2, v1

    goto :goto_2

    :cond_3
    :goto_1
    const/4 v2, 0x1

    :goto_2
    const-string v3, "LocalNotificationRepeating"

    invoke-virtual {v0, v3, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    .line 274
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    .line 275
    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    .line 274
    invoke-static {v2, p1, v0, v1}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object p1

    .line 276
    invoke-virtual {p2, p1}, Landroidx/core/app/NotificationCompat$Builder;->setDeleteIntent(Landroid/app/PendingIntent;)Landroidx/core/app/NotificationCompat$Builder;

    return-void
.end method

.method private dismissVisibleNotification(I)V
    .locals 1

    .line 374
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-static {v0}, Landroidx/core/app/NotificationManagerCompat;->from(Landroid/content/Context;)Landroidx/core/app/NotificationManagerCompat;

    move-result-object v0

    .line 375
    invoke-virtual {v0, p1}, Landroidx/core/app/NotificationManagerCompat;->cancel(I)V

    return-void
.end method

.method private getDefaultSmallIcon(Landroid/content/Context;)I
    .locals 2

    .line 407
    sget v0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->defaultSmallIconID:I

    if-eqz v0, :cond_0

    return v0

    .line 410
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->config:Lcom/getcapacitor/CapConfig;

    const-string v1, "plugins.LocalNotifications.smallIcon"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 411
    invoke-static {v0}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceBaseName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 414
    const-string v1, "drawable"

    invoke-static {p1, v0, v1}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceID(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    :goto_0
    if-nez p1, :cond_2

    const p1, 0x108009b

    .line 421
    :cond_2
    sput p1, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->defaultSmallIconID:I

    return p1
.end method

.method private getDefaultSound(Landroid/content/Context;)I
    .locals 2

    .line 392
    sget v0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->defaultSoundID:I

    if-eqz v0, :cond_0

    return v0

    .line 395
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->config:Lcom/getcapacitor/CapConfig;

    const-string v1, "plugins.LocalNotifications.sound"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 396
    invoke-static {v0}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceBaseName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 399
    const-string v1, "raw"

    invoke-static {p1, v0, v1}, Lcom/getcapacitor/plugin/util/AssetUtil;->getResourceID(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    .line 402
    :goto_0
    sput p1, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->defaultSoundID:I

    return p1
.end method

.method private triggerScheduledNotification(Landroid/app/Notification;Lcom/getcapacitor/plugin/notification/LocalNotification;)V
    .locals 12

    .line 305
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-string v1, "alarm"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    move-object v1, v0

    check-cast v1, Landroid/app/AlarmManager;

    .line 306
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getSchedule()Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;

    move-result-object v0

    .line 307
    new-instance v2, Landroid/content/Intent;

    iget-object v3, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-class v4, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;

    invoke-direct {v2, v3, v4}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 308
    const-string v3, "LocalNotificationId"

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v4

    invoke-virtual {v2, v3, v4}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    .line 309
    sget-object v3, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;->NOTIFICATION_KEY:Ljava/lang/String;

    invoke-virtual {v2, v3, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 310
    iget-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Integer;->intValue()I

    move-result v3

    const/high16 v4, 0x10000000

    invoke-static {p1, v3, v2, v4}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object v7

    .line 313
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getAt()Ljava/util/Date;

    move-result-object p1

    .line 314
    const-string v3, "LN"

    const/4 v5, 0x0

    const/4 v6, 0x1

    if-eqz p1, :cond_2

    .line 315
    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide v8

    new-instance p2, Ljava/util/Date;

    invoke-direct {p2}, Ljava/util/Date;-><init>()V

    invoke-virtual {p2}, Ljava/util/Date;->getTime()J

    move-result-wide v10

    cmp-long p2, v8, v10

    if-gez p2, :cond_0

    .line 316
    new-array p1, v6, [Ljava/lang/String;

    aput-object v3, p1, v5

    invoke-static {p1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const-string p2, "Scheduled time must be *after* current time"

    const/4 v0, 0x0

    invoke-static {p1, p2, v0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void

    .line 319
    :cond_0
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->isRepeating()Z

    move-result p2

    if-eqz p2, :cond_1

    .line 320
    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide v2

    new-instance p2, Ljava/util/Date;

    invoke-direct {p2}, Ljava/util/Date;-><init>()V

    invoke-virtual {p2}, Ljava/util/Date;->getTime()J

    move-result-wide v4

    sub-long v5, v2, v4

    const/4 v2, 0x1

    .line 321
    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide v3

    invoke-virtual/range {v1 .. v7}, Landroid/app/AlarmManager;->setRepeating(IJJLandroid/app/PendingIntent;)V

    goto :goto_0

    .line 323
    :cond_1
    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide p1

    invoke-virtual {v1, v6, p1, p2, v7}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V

    :goto_0
    return-void

    .line 329
    :cond_2
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getEvery()Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_4

    .line 331
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getEveryInterval()Ljava/lang/Long;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 333
    new-instance p2, Ljava/util/Date;

    invoke-direct {p2}, Ljava/util/Date;-><init>()V

    invoke-virtual {p2}, Ljava/util/Date;->getTime()J

    move-result-wide v2

    invoke-virtual {p1}, Ljava/lang/Long;->longValue()J

    move-result-wide v4

    add-long v3, v2, v4

    const/4 v2, 0x1

    .line 334
    invoke-virtual {p1}, Ljava/lang/Long;->longValue()J

    move-result-wide v5

    invoke-virtual/range {v1 .. v7}, Landroid/app/AlarmManager;->setRepeating(IJJLandroid/app/PendingIntent;)V

    :cond_3
    return-void

    .line 340
    :cond_4
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/notification/LocalNotificationSchedule;->getOn()Lcom/getcapacitor/plugin/notification/DateMatch;

    move-result-object p1

    if-eqz p1, :cond_5

    .line 342
    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    invoke-virtual {p1, v0}, Lcom/getcapacitor/plugin/notification/DateMatch;->nextTrigger(Ljava/util/Date;)J

    move-result-wide v7

    .line 343
    sget-object v0, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;->CRON_KEY:Ljava/lang/String;

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/notification/DateMatch;->toMatchString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v2, v0, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 344
    iget-object p1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    invoke-static {p1, v0, v2, v4}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object p1

    .line 345
    invoke-virtual {v1, v6, v7, v8, p1}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V

    .line 346
    new-instance p1, Ljava/text/SimpleDateFormat;

    const-string v0, "yyyy/MM/dd HH:mm:ss"

    invoke-direct {p1, v0}, Ljava/text/SimpleDateFormat;-><init>(Ljava/lang/String;)V

    .line 347
    new-array v0, v6, [Ljava/lang/String;

    aput-object v3, v0, v5

    invoke-static {v0}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "notification "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object p2

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, " will next fire at "

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    new-instance v1, Ljava/util/Date;

    invoke-direct {v1, v7, v8}, Ljava/util/Date;-><init>(J)V

    invoke-virtual {p1, v1}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    :cond_5
    return-void
.end method


# virtual methods
.method public areNotificationsEnabled()Z
    .locals 1

    .line 379
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-static {v0}, Landroidx/core/app/NotificationManagerCompat;->from(Landroid/content/Context;)Landroidx/core/app/NotificationManagerCompat;

    move-result-object v0

    .line 380
    invoke-virtual {v0}, Landroidx/core/app/NotificationManagerCompat;->areNotificationsEnabled()Z

    move-result v0

    return v0
.end method

.method public cancel(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 352
    invoke-static {p1}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getLocalNotificationPendingList(Lcom/getcapacitor/PluginCall;)Ljava/util/List;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 354
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    .line 355
    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v2

    invoke-direct {p0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->dismissVisibleNotification(I)V

    .line 356
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->cancelTimerForNotification(Ljava/lang/Integer;)V

    .line 357
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->storage:Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v2, v1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->deleteNotification(Ljava/lang/String;)V

    goto :goto_0

    .line 360
    :cond_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public createNotificationChannel()V
    .locals 4

    .line 114
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_1

    .line 118
    new-instance v0, Landroid/app/NotificationChannel;

    const-string v1, "default"

    const-string v2, "Default"

    const/4 v3, 0x3

    invoke-direct {v0, v1, v2, v3}, Landroid/app/NotificationChannel;-><init>(Ljava/lang/String;Ljava/lang/CharSequence;I)V

    .line 119
    invoke-virtual {v0, v2}, Landroid/app/NotificationChannel;->setDescription(Ljava/lang/String;)V

    .line 120
    new-instance v1, Landroid/media/AudioAttributes$Builder;

    invoke-direct {v1}, Landroid/media/AudioAttributes$Builder;-><init>()V

    const/4 v2, 0x4

    .line 121
    invoke-virtual {v1, v2}, Landroid/media/AudioAttributes$Builder;->setContentType(I)Landroid/media/AudioAttributes$Builder;

    move-result-object v1

    .line 122
    invoke-virtual {v1, v2}, Landroid/media/AudioAttributes$Builder;->setUsage(I)Landroid/media/AudioAttributes$Builder;

    move-result-object v1

    invoke-virtual {v1}, Landroid/media/AudioAttributes$Builder;->build()Landroid/media/AudioAttributes;

    move-result-object v1

    .line 123
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-virtual {p0, v2}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->getDefaultSoundUrl(Landroid/content/Context;)Landroid/net/Uri;

    move-result-object v2

    if-eqz v2, :cond_0

    .line 125
    invoke-virtual {v0, v2, v1}, Landroid/app/NotificationChannel;->setSound(Landroid/net/Uri;Landroid/media/AudioAttributes;)V

    .line 129
    :cond_0
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    const-class v2, Landroid/app/NotificationManager;

    invoke-virtual {v1, v2}, Landroid/content/Context;->getSystemService(Ljava/lang/Class;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/app/NotificationManager;

    .line 130
    invoke-virtual {v1, v0}, Landroid/app/NotificationManager;->createNotificationChannel(Landroid/app/NotificationChannel;)V

    :cond_1
    return-void
.end method

.method public getDefaultSoundUrl(Landroid/content/Context;)Landroid/net/Uri;
    .locals 3

    .line 384
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->getDefaultSound(Landroid/content/Context;)I

    move-result v0

    if-eqz v0, :cond_0

    .line 386
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "android.resource://"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, "/"

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method

.method public handleNotificationActionPerformed(Landroid/content/Intent;Lcom/getcapacitor/plugin/notification/NotificationStorage;)Lcom/getcapacitor/JSObject;
    .locals 6

    const/4 v0, 0x1

    .line 74
    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    const-string v3, "LN"

    aput-object v3, v1, v2

    invoke-static {v1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "LocalNotification received: "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Landroid/content/Intent;->getDataString()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-static {v1, v4}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 75
    const-string v1, "LocalNotificationId"

    const/high16 v4, -0x80000000

    invoke-virtual {p1, v1, v4}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result v1

    const/4 v5, 0x0

    if-ne v1, v4, :cond_0

    .line 77
    new-array p1, v0, [Ljava/lang/String;

    aput-object v3, p1, v2

    invoke-static {p1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const-string p2, "Activity started without notification attached"

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    return-object v5

    .line 80
    :cond_0
    const-string v2, "LocalNotificationRepeating"

    invoke-virtual {p1, v2, v0}, Landroid/content/Intent;->getBooleanExtra(Ljava/lang/String;Z)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 82
    invoke-static {v1}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->deleteNotification(Ljava/lang/String;)V

    .line 84
    :cond_1
    new-instance p2, Lcom/getcapacitor/JSObject;

    invoke-direct {p2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 86
    invoke-static {p1}, Landroidx/core/app/RemoteInput;->getResultsFromIntent(Landroid/content/Intent;)Landroid/os/Bundle;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 88
    const-string v2, "LocalNotificationRemoteInput"

    invoke-virtual {v0, v2}, Landroid/os/Bundle;->getCharSequence(Ljava/lang/String;)Ljava/lang/CharSequence;

    move-result-object v0

    .line 89
    const-string v2, "inputValue"

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 91
    :cond_2
    const-string v0, "LocalNotificationUserAction"

    invoke-virtual {p1, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 93
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->dismissVisibleNotification(I)V

    .line 95
    const-string v1, "actionId"

    invoke-virtual {p2, v1, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 98
    :try_start_0
    const-string v0, "LocalNotficationObject"

    invoke-virtual {p1, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 100
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0, p1}, Lcom/getcapacitor/JSObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    move-object v5, v0

    .line 104
    :catch_0
    :cond_3
    const-string p1, "notification"

    invoke-virtual {p2, p1, v5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    return-object p2
.end method

.method public schedule(Lcom/getcapacitor/PluginCall;Ljava/util/List;)Lorg/json/JSONArray;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/PluginCall;",
            "Ljava/util/List<",
            "Lcom/getcapacitor/plugin/notification/LocalNotification;",
            ">;)",
            "Lorg/json/JSONArray;"
        }
    .end annotation

    .line 136
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 137
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->context:Landroid/content/Context;

    invoke-static {v1}, Landroidx/core/app/NotificationManagerCompat;->from(Landroid/content/Context;)Landroidx/core/app/NotificationManagerCompat;

    move-result-object v1

    .line 139
    invoke-virtual {v1}, Landroidx/core/app/NotificationManagerCompat;->areNotificationsEnabled()Z

    move-result v2

    const/4 v3, 0x0

    if-nez v2, :cond_1

    if-eqz p1, :cond_0

    .line 142
    const-string p2, "Notifications not enabled on this device"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_0
    return-object v3

    .line 146
    :cond_1
    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :goto_0
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_4

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/getcapacitor/plugin/notification/LocalNotification;

    .line 147
    invoke-virtual {v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v4

    .line 148
    invoke-virtual {v2}, Lcom/getcapacitor/plugin/notification/LocalNotification;->getId()Ljava/lang/Integer;

    move-result-object v5

    if-nez v5, :cond_3

    if-eqz p1, :cond_2

    .line 150
    const-string p2, "LocalNotification missing identifier"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_2
    return-object v3

    .line 154
    :cond_3
    invoke-virtual {v4}, Ljava/lang/Integer;->intValue()I

    move-result v5

    invoke-direct {p0, v5}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->dismissVisibleNotification(I)V

    .line 155
    invoke-direct {p0, v4}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->cancelTimerForNotification(Ljava/lang/Integer;)V

    .line 156
    invoke-direct {p0, v1, v2, p1}, Lcom/getcapacitor/plugin/notification/LocalNotificationManager;->buildNotification(Landroidx/core/app/NotificationManagerCompat;Lcom/getcapacitor/plugin/notification/LocalNotification;Lcom/getcapacitor/PluginCall;)V

    .line 157
    invoke-virtual {v0, v4}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_0

    :cond_4
    return-object v0
.end method
