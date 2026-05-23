.class public Lcom/onesignal/OSMutableNotification;
.super Lcom/onesignal/OSNotification;
.source "OSMutableNotification.java"


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotification;)V
    .locals 0

    .line 35
    invoke-direct {p0, p1}, Lcom/onesignal/OSNotification;-><init>(Lcom/onesignal/OSNotification;)V

    return-void
.end method


# virtual methods
.method public setAndroidNotificationId(I)V
    .locals 0

    .line 50
    invoke-super {p0, p1}, Lcom/onesignal/OSNotification;->setAndroidNotificationId(I)V

    return-void
.end method

.method public setExtender(Landroidx/core/app/NotificationCompat$Extender;)V
    .locals 0

    .line 46
    invoke-virtual {p0, p1}, Lcom/onesignal/OSMutableNotification;->setNotificationExtender(Landroidx/core/app/NotificationCompat$Extender;)V

    return-void
.end method
