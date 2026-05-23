.class Lcom/onesignal/BadgeCountUpdater;
.super Ljava/lang/Object;
.source "BadgeCountUpdater.java"


# static fields
.field private static badgesEnabled:I = -0x1


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 44
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static areBadgeSettingsEnabled(Landroid/content/Context;)Z
    .locals 4

    .line 50
    sget v0, Lcom/onesignal/BadgeCountUpdater;->badgesEnabled:I

    const/4 v1, -0x1

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-eq v0, v1, :cond_1

    if-ne v0, v3, :cond_0

    move v2, v3

    :cond_0
    return v2

    .line 53
    :cond_1
    sget-object v0, Lcom/onesignal/ApplicationInfoHelper;->Companion:Lcom/onesignal/ApplicationInfoHelper$Companion;

    invoke-virtual {v0, p0}, Lcom/onesignal/ApplicationInfoHelper$Companion;->getInfo(Landroid/content/Context;)Landroid/content/pm/ApplicationInfo;

    move-result-object p0

    if-nez p0, :cond_2

    .line 55
    sput v2, Lcom/onesignal/BadgeCountUpdater;->badgesEnabled:I

    .line 56
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Error reading meta-data tag \'com.onesignal.BadgeCount\'. Disabling badge setting."

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v2

    .line 60
    :cond_2
    iget-object p0, p0, Landroid/content/pm/ApplicationInfo;->metaData:Landroid/os/Bundle;

    if-eqz p0, :cond_3

    .line 62
    const-string v0, "com.onesignal.BadgeCount"

    invoke-virtual {p0, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    .line 63
    const-string v0, "DISABLE"

    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    xor-int/2addr p0, v3

    sput p0, Lcom/onesignal/BadgeCountUpdater;->badgesEnabled:I

    goto :goto_0

    .line 66
    :cond_3
    sput v3, Lcom/onesignal/BadgeCountUpdater;->badgesEnabled:I

    .line 68
    :goto_0
    sget p0, Lcom/onesignal/BadgeCountUpdater;->badgesEnabled:I

    if-ne p0, v3, :cond_4

    move v2, v3

    :cond_4
    return v2
.end method

.method private static areBadgesEnabled(Landroid/content/Context;)Z
    .locals 1

    .line 72
    invoke-static {p0}, Lcom/onesignal/BadgeCountUpdater;->areBadgeSettingsEnabled(Landroid/content/Context;)Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-static {p0}, Lcom/onesignal/OSUtils;->areNotificationsEnabled(Landroid/content/Context;)Z

    move-result p0

    if-eqz p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method static update(Lcom/onesignal/OneSignalDb;Landroid/content/Context;)V
    .locals 0

    .line 76
    invoke-static {p1}, Lcom/onesignal/BadgeCountUpdater;->areBadgesEnabled(Landroid/content/Context;)Z

    move-result p0

    if-nez p0, :cond_0

    return-void

    .line 80
    :cond_0
    invoke-static {p1}, Lcom/onesignal/BadgeCountUpdater;->updateStandard(Landroid/content/Context;)V

    return-void
.end method

.method static updateCount(ILandroid/content/Context;)V
    .locals 1

    .line 118
    invoke-static {p1}, Lcom/onesignal/BadgeCountUpdater;->areBadgeSettingsEnabled(Landroid/content/Context;)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 122
    :cond_0
    :try_start_0
    invoke-static {p1, p0}, Lcom/onesignal/shortcutbadger/ShortcutBadger;->applyCountOrThrow(Landroid/content/Context;I)V
    :try_end_0
    .catch Lcom/onesignal/shortcutbadger/ShortcutBadgeException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method private static updateFallback(Lcom/onesignal/OneSignalDb;Landroid/content/Context;)V
    .locals 10

    .line 103
    invoke-static {}, Lcom/onesignal/OneSignalDbHelper;->recentUninteractedWithNotificationsWhere()Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    const/4 v8, 0x0

    sget-object v9, Lcom/onesignal/NotificationLimitManager;->MAX_NUMBER_OF_NOTIFICATIONS_STR:Ljava/lang/String;

    .line 100
    const-string v2, "notification"

    const/4 v3, 0x0

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/4 v7, 0x0

    move-object v1, p0

    invoke-interface/range {v1 .. v9}, Lcom/onesignal/OneSignalDb;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p0

    .line 111
    invoke-interface {p0}, Landroid/database/Cursor;->getCount()I

    move-result v0

    .line 112
    invoke-interface {p0}, Landroid/database/Cursor;->close()V

    .line 114
    invoke-static {v0, p1}, Lcom/onesignal/BadgeCountUpdater;->updateCount(ILandroid/content/Context;)V

    return-void
.end method

.method private static updateStandard(Landroid/content/Context;)V
    .locals 5

    .line 87
    invoke-static {p0}, Lcom/onesignal/OneSignalNotificationManager;->getActiveNotifications(Landroid/content/Context;)[Landroid/service/notification/StatusBarNotification;

    move-result-object v0

    .line 90
    array-length v1, v0

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v4, v0, v2

    .line 91
    invoke-static {v4}, Lcom/onesignal/NotificationLimitManager;->isGroupSummary(Landroid/service/notification/StatusBarNotification;)Z

    move-result v4

    if-eqz v4, :cond_0

    goto :goto_1

    :cond_0
    add-int/lit8 v3, v3, 0x1

    :goto_1
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 96
    :cond_1
    invoke-static {v3, p0}, Lcom/onesignal/BadgeCountUpdater;->updateCount(ILandroid/content/Context;)V

    return-void
.end method
