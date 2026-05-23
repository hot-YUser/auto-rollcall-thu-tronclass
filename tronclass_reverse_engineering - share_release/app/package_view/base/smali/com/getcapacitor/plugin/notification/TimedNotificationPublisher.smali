.class public Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;
.super Landroid/content/BroadcastReceiver;
.source "TimedNotificationPublisher.java"


# static fields
.field public static CRON_KEY:Ljava/lang/String; = "NotificationPublisher.cron"

.field public static NOTIFICATION_KEY:Ljava/lang/String; = "NotificationPublisher.notification"


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 19
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method

.method private rescheduleNotificationIfNeeded(Landroid/content/Context;Landroid/content/Intent;I)V
    .locals 4

    .line 39
    sget-object v0, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;->CRON_KEY:Ljava/lang/String;

    invoke-virtual {p2, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 41
    invoke-static {v0}, Lcom/getcapacitor/plugin/notification/DateMatch;->fromMatchString(Ljava/lang/String;)Lcom/getcapacitor/plugin/notification/DateMatch;

    move-result-object v0

    .line 42
    const-string v1, "alarm"

    invoke-virtual {p1, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/app/AlarmManager;

    .line 43
    new-instance v2, Ljava/util/Date;

    invoke-direct {v2}, Ljava/util/Date;-><init>()V

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/notification/DateMatch;->nextTrigger(Ljava/util/Date;)J

    move-result-wide v2

    .line 44
    invoke-virtual {p2}, Landroid/content/Intent;->clone()Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Landroid/content/Intent;

    const/high16 v0, 0x10000000

    .line 45
    invoke-static {p1, p3, p2, v0}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object p1

    const/4 p2, 0x1

    .line 46
    invoke-virtual {v1, p2, v2, v3, p1}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V

    .line 47
    new-instance p1, Ljava/text/SimpleDateFormat;

    const-string v0, "yyyy/MM/dd HH:mm:ss"

    invoke-direct {p1, v0}, Ljava/text/SimpleDateFormat;-><init>(Ljava/lang/String;)V

    .line 48
    new-array p2, p2, [Ljava/lang/String;

    const/4 v0, 0x0

    const-string v1, "LN"

    aput-object v1, p2, v0

    invoke-static {p2}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "notification "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string v0, " will next fire at "

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    new-instance v0, Ljava/util/Date;

    invoke-direct {v0, v2, v3}, Ljava/util/Date;-><init>(J)V

    invoke-virtual {p1, v0}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p2, p1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    :cond_0
    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 6

    .line 28
    const-string v0, "notification"

    invoke-virtual {p1, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/NotificationManager;

    .line 29
    sget-object v1, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;->NOTIFICATION_KEY:Ljava/lang/String;

    invoke-virtual {p2, v1}, Landroid/content/Intent;->getParcelableExtra(Ljava/lang/String;)Landroid/os/Parcelable;

    move-result-object v1

    check-cast v1, Landroid/app/Notification;

    .line 30
    const-string v2, "LocalNotificationId"

    const/high16 v3, -0x80000000

    invoke-virtual {p2, v2, v3}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result v2

    if-ne v2, v3, :cond_0

    const/4 v3, 0x1

    .line 32
    new-array v3, v3, [Ljava/lang/String;

    const/4 v4, 0x0

    const-string v5, "LN"

    aput-object v5, v3, v4

    invoke-static {v3}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    const-string v4, "No valid id supplied"

    const/4 v5, 0x0

    invoke-static {v3, v4, v5}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 34
    :cond_0
    invoke-virtual {v0, v2, v1}, Landroid/app/NotificationManager;->notify(ILandroid/app/Notification;)V

    .line 35
    invoke-direct {p0, p1, p2, v2}, Lcom/getcapacitor/plugin/notification/TimedNotificationPublisher;->rescheduleNotificationIfNeeded(Landroid/content/Context;Landroid/content/Intent;I)V

    return-void
.end method
