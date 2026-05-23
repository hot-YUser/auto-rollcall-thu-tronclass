.class public Lcom/getcapacitor/plugin/notification/NotificationDismissReceiver;
.super Landroid/content/BroadcastReceiver;
.source "NotificationDismissReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 3

    .line 17
    const-string v0, "LocalNotificationId"

    const/high16 v1, -0x80000000

    invoke-virtual {p2, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result v0

    const/4 v2, 0x1

    if-ne v0, v1, :cond_0

    .line 19
    new-array p1, v2, [Ljava/lang/String;

    const/4 p2, 0x0

    const-string v0, "LN"

    aput-object v0, p1, p2

    invoke-static {p1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const-string p2, "Invalid notification dismiss operation"

    const/4 v0, 0x0

    invoke-static {p1, p2, v0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void

    .line 22
    :cond_0
    const-string v1, "LocalNotificationRepeating"

    invoke-virtual {p2, v1, v2}, Landroid/content/Intent;->getBooleanExtra(Ljava/lang/String;Z)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 24
    new-instance p2, Lcom/getcapacitor/plugin/notification/NotificationStorage;

    invoke-direct {p2, p1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;-><init>(Landroid/content/Context;)V

    .line 25
    invoke-static {v0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/getcapacitor/plugin/notification/NotificationStorage;->deleteNotification(Ljava/lang/String;)V

    :cond_1
    return-void
.end method
