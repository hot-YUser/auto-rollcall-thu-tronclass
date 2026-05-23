.class public Lcom/onesignal/OSNotificationWorkManager$NotificationWorker;
.super Landroidx/work/Worker;
.source "OSNotificationWorkManager.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSNotificationWorkManager;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "NotificationWorker"
.end annotation


# direct methods
.method public constructor <init>(Landroid/content/Context;Landroidx/work/WorkerParameters;)V
    .locals 0

    .line 73
    invoke-direct {p0, p1, p2}, Landroidx/work/Worker;-><init>(Landroid/content/Context;Landroidx/work/WorkerParameters;)V

    return-void
.end method

.method private processNotificationData(Landroid/content/Context;ILorg/json/JSONObject;ZLjava/lang/Long;)V
    .locals 8

    .line 104
    new-instance v7, Lcom/onesignal/OSNotification;

    const/4 v0, 0x0

    invoke-direct {v7, v0, p3, p2}, Lcom/onesignal/OSNotification;-><init>(Ljava/util/List;Lorg/json/JSONObject;I)V

    .line 105
    new-instance p2, Lcom/onesignal/OSNotificationController;

    const/4 v5, 0x1

    move-object v0, p2

    move-object v1, p1

    move-object v2, v7

    move-object v3, p3

    move v4, p4

    move-object v6, p5

    invoke-direct/range {v0 .. v6}, Lcom/onesignal/OSNotificationController;-><init>(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;ZZLjava/lang/Long;)V

    .line 106
    new-instance p3, Lcom/onesignal/OSNotificationReceivedEvent;

    invoke-direct {p3, p2, v7}, Lcom/onesignal/OSNotificationReceivedEvent;-><init>(Lcom/onesignal/OSNotificationController;Lcom/onesignal/OSNotification;)V

    .line 108
    sget-object p2, Lcom/onesignal/OneSignal;->remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    if-eqz p2, :cond_0

    .line 110
    :try_start_0
    sget-object p2, Lcom/onesignal/OneSignal;->remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    invoke-interface {p2, p1, p3}, Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;->remoteNotificationReceived(Landroid/content/Context;Lcom/onesignal/OSNotificationReceivedEvent;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 112
    sget-object p2, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p4, "remoteNotificationReceived throw an exception. Displaying normal OneSignal notification."

    invoke-static {p2, p4, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 113
    invoke-virtual {p3, v7}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V

    .line 115
    throw p1

    .line 118
    :cond_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "remoteNotificationReceivedHandler not setup, displaying normal OneSignal notification"

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 119
    invoke-virtual {p3, v7}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V

    :goto_0
    return-void
.end method


# virtual methods
.method public doWork()Landroidx/work/ListenableWorker$Result;
    .locals 9

    const-string v0, "NotificationWorker running doWork with data: "

    .line 79
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationWorkManager$NotificationWorker;->getInputData()Landroidx/work/Data;

    move-result-object v1

    .line 81
    :try_start_0
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 83
    const-string v0, "android_notif_id"

    const/4 v2, 0x0

    invoke-virtual {v1, v0, v2}, Landroidx/work/Data;->getInt(Ljava/lang/String;I)I

    move-result v5

    .line 84
    new-instance v6, Lorg/json/JSONObject;

    const-string v0, "json_payload"

    invoke-virtual {v1, v0}, Landroidx/work/Data;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {v6, v0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 85
    const-string v0, "timestamp"

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v3

    const-wide/16 v7, 0x3e8

    div-long/2addr v3, v7

    invoke-virtual {v1, v0, v3, v4}, Landroidx/work/Data;->getLong(Ljava/lang/String;J)J

    move-result-wide v3

    .line 86
    const-string v0, "is_restoring"

    invoke-virtual {v1, v0, v2}, Landroidx/work/Data;->getBoolean(Ljava/lang/String;Z)Z

    move-result v7

    .line 89
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationWorkManager$NotificationWorker;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 93
    invoke-static {v3, v4}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v8

    move-object v3, p0

    move-object v4, v0

    .line 88
    invoke-direct/range {v3 .. v8}, Lcom/onesignal/OSNotificationWorkManager$NotificationWorker;->processNotificationData(Landroid/content/Context;ILorg/json/JSONObject;ZLjava/lang/Long;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 99
    invoke-static {}, Landroidx/work/ListenableWorker$Result;->success()Landroidx/work/ListenableWorker$Result;

    move-result-object v0

    return-object v0

    :catch_0
    move-exception v0

    .line 95
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Error occurred doing work for job with id: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lcom/onesignal/OSNotificationWorkManager$NotificationWorker;->getId()Ljava/util/UUID;

    move-result-object v3

    invoke-virtual {v3}, Ljava/util/UUID;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 96
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    .line 97
    invoke-static {}, Landroidx/work/ListenableWorker$Result;->failure()Landroidx/work/ListenableWorker$Result;

    move-result-object v0

    return-object v0
.end method
