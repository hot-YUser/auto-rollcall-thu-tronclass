.class Lcom/onesignal/NotificationLimitManager;
.super Ljava/lang/Object;
.source "NotificationLimitManager.java"


# static fields
.field private static final MAX_NUMBER_OF_NOTIFICATIONS_INT:I = 0x31

.field static final MAX_NUMBER_OF_NOTIFICATIONS_STR:Ljava/lang/String;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/16 v0, 0x31

    .line 27
    invoke-static {v0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v0

    sput-object v0, Lcom/onesignal/NotificationLimitManager;->MAX_NUMBER_OF_NOTIFICATIONS_STR:Ljava/lang/String;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 17
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static clearOldestOverLimit(Landroid/content/Context;I)V
    .locals 0

    .line 42
    :try_start_0
    invoke-static {p0, p1}, Lcom/onesignal/NotificationLimitManager;->clearOldestOverLimitStandard(Landroid/content/Context;I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    .line 47
    :catchall_0
    invoke-static {p0, p1}, Lcom/onesignal/NotificationLimitManager;->clearOldestOverLimitFallback(Landroid/content/Context;I)V

    :goto_0
    return-void
.end method

.method static clearOldestOverLimitFallback(Landroid/content/Context;I)V
    .locals 11

    .line 80
    const-string v0, "android_notification_id"

    invoke-static {p0}, Lcom/onesignal/OneSignalDbHelper;->getInstance(Landroid/content/Context;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    const/4 p0, 0x0

    .line 84
    :try_start_0
    const-string v2, "notification"

    const/4 v10, 0x1

    new-array v3, v10, [Ljava/lang/String;

    const/4 v4, 0x0

    aput-object v0, v3, v4

    .line 87
    invoke-static {}, Lcom/onesignal/OneSignalDbHelper;->recentUninteractedWithNotificationsWhere()Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    const-string v8, "_id"

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    .line 92
    invoke-static {}, Lcom/onesignal/NotificationLimitManager;->getMaxNumberOfNotificationsString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v9

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/4 v7, 0x0

    .line 84
    invoke-virtual/range {v1 .. v9}, Lcom/onesignal/OneSignalDbHelper;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p0

    .line 95
    invoke-interface {p0}, Landroid/database/Cursor;->getCount()I

    move-result v1

    invoke-static {}, Lcom/onesignal/NotificationLimitManager;->getMaxNumberOfNotificationsInt()I

    move-result v2
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    sub-int/2addr v1, v2

    add-int/2addr v1, p1

    if-ge v1, v10, :cond_1

    if-eqz p0, :cond_0

    .line 110
    invoke-interface {p0}, Landroid/database/Cursor;->isClosed()Z

    move-result p1

    if-nez p1, :cond_0

    .line 111
    invoke-interface {p0}, Landroid/database/Cursor;->close()V

    :cond_0
    return-void

    .line 100
    :cond_1
    :try_start_1
    invoke-interface {p0}, Landroid/database/Cursor;->moveToNext()Z

    move-result p1

    if-eqz p1, :cond_2

    .line 101
    invoke-interface {p0, v0}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result p1

    invoke-interface {p0, p1}, Landroid/database/Cursor;->getInt(I)I

    move-result p1

    .line 102
    invoke-static {p1}, Lcom/onesignal/OneSignal;->removeNotification(I)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    add-int/lit8 v1, v1, -0x1

    if-gtz v1, :cond_1

    :cond_2
    if-eqz p0, :cond_3

    .line 110
    invoke-interface {p0}, Landroid/database/Cursor;->isClosed()Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 108
    :try_start_2
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Error clearing oldest notifications over limit! "

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    if-eqz p0, :cond_3

    .line 110
    invoke-interface {p0}, Landroid/database/Cursor;->isClosed()Z

    move-result p1

    if-nez p1, :cond_3

    .line 111
    :goto_0
    invoke-interface {p0}, Landroid/database/Cursor;->close()V

    :cond_3
    return-void

    :catchall_1
    move-exception p1

    if-eqz p0, :cond_4

    .line 110
    invoke-interface {p0}, Landroid/database/Cursor;->isClosed()Z

    move-result v0

    if-nez v0, :cond_4

    .line 111
    invoke-interface {p0}, Landroid/database/Cursor;->close()V

    .line 112
    :cond_4
    throw p1
.end method

.method static clearOldestOverLimitStandard(Landroid/content/Context;I)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 55
    invoke-static {p0}, Lcom/onesignal/OneSignalNotificationManager;->getActiveNotifications(Landroid/content/Context;)[Landroid/service/notification/StatusBarNotification;

    move-result-object p0

    .line 57
    array-length v0, p0

    invoke-static {}, Lcom/onesignal/NotificationLimitManager;->getMaxNumberOfNotificationsInt()I

    move-result v1

    sub-int/2addr v0, v1

    add-int/2addr v0, p1

    const/4 p1, 0x1

    if-ge v0, p1, :cond_0

    return-void

    .line 63
    :cond_0
    new-instance p1, Ljava/util/TreeMap;

    invoke-direct {p1}, Ljava/util/TreeMap;-><init>()V

    .line 64
    array-length v1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_2

    aget-object v3, p0, v2

    .line 65
    invoke-static {v3}, Lcom/onesignal/NotificationLimitManager;->isGroupSummary(Landroid/service/notification/StatusBarNotification;)Z

    move-result v4

    if-eqz v4, :cond_1

    goto :goto_1

    .line 67
    :cond_1
    invoke-virtual {v3}, Landroid/service/notification/StatusBarNotification;->getNotification()Landroid/app/Notification;

    move-result-object v4

    iget-wide v4, v4, Landroid/app/Notification;->when:J

    invoke-static {v4, v5}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v4

    invoke-virtual {v3}, Landroid/service/notification/StatusBarNotification;->getId()I

    move-result v3

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-interface {p1, v4, v3}, Ljava/util/SortedMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :goto_1
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 71
    :cond_2
    invoke-interface {p1}, Ljava/util/SortedMap;->entrySet()Ljava/util/Set;

    move-result-object p0

    invoke-interface {p0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :cond_3
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result p1

    if-eqz p1, :cond_4

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/Map$Entry;

    .line 72
    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Integer;

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    invoke-static {p1}, Lcom/onesignal/OneSignal;->removeNotification(I)V

    add-int/lit8 v0, v0, -0x1

    if-gtz v0, :cond_3

    :cond_4
    return-void
.end method

.method private static getMaxNumberOfNotificationsInt()I
    .locals 1

    const/16 v0, 0x31

    return v0
.end method

.method private static getMaxNumberOfNotificationsString()Ljava/lang/String;
    .locals 1

    .line 34
    sget-object v0, Lcom/onesignal/NotificationLimitManager;->MAX_NUMBER_OF_NOTIFICATIONS_STR:Ljava/lang/String;

    return-object v0
.end method

.method static isGroupSummary(Landroid/service/notification/StatusBarNotification;)Z
    .locals 0

    .line 117
    invoke-virtual {p0}, Landroid/service/notification/StatusBarNotification;->getNotification()Landroid/app/Notification;

    move-result-object p0

    iget p0, p0, Landroid/app/Notification;->flags:I

    and-int/lit16 p0, p0, 0x200

    if-eqz p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method
