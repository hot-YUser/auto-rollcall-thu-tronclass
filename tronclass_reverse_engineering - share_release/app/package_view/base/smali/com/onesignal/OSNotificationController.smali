.class public Lcom/onesignal/OSNotificationController;
.super Ljava/lang/Object;
.source "OSNotificationController.java"


# static fields
.field private static final EXTENSION_SERVICE_META_DATA_TAG_NAME:Ljava/lang/String; = "com.onesignal.NotificationServiceExtension"

.field static final GOOGLE_SENT_TIME_KEY:Ljava/lang/String; = "google.sent_time"

.field static final GOOGLE_TTL_KEY:Ljava/lang/String; = "google.ttl"


# instance fields
.field private fromBackgroundLogic:Z

.field private final notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

.field private restoring:Z


# direct methods
.method constructor <init>(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;ZZLjava/lang/Long;)V
    .locals 0

    .line 57
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 58
    iput-boolean p4, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    .line 59
    iput-boolean p5, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    .line 61
    invoke-direct {p0, p1, p2, p3, p6}, Lcom/onesignal/OSNotificationController;->createNotificationJobFromCurrent(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;Ljava/lang/Long;)Lcom/onesignal/OSNotificationGenerationJob;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    return-void
.end method

.method constructor <init>(Lcom/onesignal/OSNotificationGenerationJob;ZZ)V
    .locals 0

    .line 51
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 52
    iput-boolean p2, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    .line 53
    iput-boolean p3, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    .line 54
    iput-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    return-void
.end method

.method private createNotificationJobFromCurrent(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;Ljava/lang/Long;)Lcom/onesignal/OSNotificationGenerationJob;
    .locals 1

    .line 71
    new-instance v0, Lcom/onesignal/OSNotificationGenerationJob;

    invoke-direct {v0, p1}, Lcom/onesignal/OSNotificationGenerationJob;-><init>(Landroid/content/Context;)V

    .line 72
    invoke-virtual {v0, p3}, Lcom/onesignal/OSNotificationGenerationJob;->setJsonPayload(Lorg/json/JSONObject;)V

    .line 73
    invoke-virtual {v0, p4}, Lcom/onesignal/OSNotificationGenerationJob;->setShownTimeStamp(Ljava/lang/Long;)V

    .line 74
    iget-boolean p1, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    invoke-virtual {v0, p1}, Lcom/onesignal/OSNotificationGenerationJob;->setRestoring(Z)V

    .line 75
    invoke-virtual {v0, p2}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    return-object v0
.end method

.method private notDisplayNotificationLogic(Lcom/onesignal/OSNotification;)V
    .locals 2

    .line 109
    iget-object v0, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    .line 111
    iget-boolean p1, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    if-eqz p1, :cond_0

    .line 114
    iget-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-static {p1}, Lcom/onesignal/NotificationBundleProcessor;->markNotificationAsDismissed(Lcom/onesignal/OSNotificationGenerationJob;)V

    goto :goto_0

    .line 117
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    const/4 v0, 0x0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSNotificationGenerationJob;->setIsNotificationToDisplay(Z)V

    .line 118
    iget-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    const/4 v1, 0x1

    invoke-static {p1, v1, v0}, Lcom/onesignal/NotificationBundleProcessor;->processNotification(Lcom/onesignal/OSNotificationGenerationJob;ZZ)V

    .line 119
    iget-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-static {p1}, Lcom/onesignal/OneSignal;->handleNotificationReceived(Lcom/onesignal/OSNotificationGenerationJob;)V

    :goto_0
    return-void
.end method

.method static setupNotificationServiceExtension(Landroid/content/Context;)V
    .locals 3

    .line 179
    const-string v0, "com.onesignal.NotificationServiceExtension"

    invoke-static {p0, v0}, Lcom/onesignal/OSUtils;->getManifestMeta(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    if-nez p0, :cond_0

    .line 183
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "No class found, not setting up OSRemoteNotificationReceivedHandler"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void

    .line 187
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Found class: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ", attempting to call constructor"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 190
    :try_start_0
    invoke-static {p0}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object p0

    .line 191
    invoke-virtual {p0}, Ljava/lang/Class;->newInstance()Ljava/lang/Object;

    move-result-object p0

    .line 193
    instance-of v0, p0, Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    if-eqz v0, :cond_1

    sget-object v0, Lcom/onesignal/OneSignal;->remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    if-nez v0, :cond_1

    .line 194
    check-cast p0, Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->setRemoteNotificationReceivedHandler(Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;)V
    :try_end_0
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/lang/InstantiationException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/ClassNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 201
    invoke-virtual {p0}, Ljava/lang/ClassNotFoundException;->printStackTrace()V

    goto :goto_0

    :catch_1
    move-exception p0

    .line 199
    invoke-virtual {p0}, Ljava/lang/InstantiationException;->printStackTrace()V

    goto :goto_0

    :catch_2
    move-exception p0

    .line 197
    invoke-virtual {p0}, Ljava/lang/IllegalAccessException;->printStackTrace()V

    :cond_1
    :goto_0
    return-void
.end method


# virtual methods
.method public getNotificationJob()Lcom/onesignal/OSNotificationGenerationJob;
    .locals 1

    .line 137
    iget-object v0, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    return-object v0
.end method

.method public getNotificationReceivedEvent()Lcom/onesignal/OSNotificationReceivedEvent;
    .locals 2

    .line 141
    new-instance v0, Lcom/onesignal/OSNotificationReceivedEvent;

    iget-object v1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {v1}, Lcom/onesignal/OSNotificationGenerationJob;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v1

    invoke-direct {v0, p0, v1}, Lcom/onesignal/OSNotificationReceivedEvent;-><init>(Lcom/onesignal/OSNotificationController;Lcom/onesignal/OSNotification;)V

    return-object v0
.end method

.method public isFromBackgroundLogic()Z
    .locals 1

    .line 153
    iget-boolean v0, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    return v0
.end method

.method public isNotificationWithinTTL()Z
    .locals 8

    .line 124
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isRestoreTTLFilterActive()Z

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_0

    return v1

    .line 128
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v2

    const-wide/16 v4, 0x3e8

    div-long/2addr v2, v4

    .line 129
    iget-object v0, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {v0}, Lcom/onesignal/OSNotificationGenerationJob;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getSentTime()J

    move-result-wide v4

    .line 131
    iget-object v0, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {v0}, Lcom/onesignal/OSNotificationGenerationJob;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getTtl()I

    move-result v0

    int-to-long v6, v0

    add-long/2addr v4, v6

    cmp-long v0, v4, v2

    if-lez v0, :cond_1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method public isRestoring()Z
    .locals 1

    .line 145
    iget-boolean v0, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    return v0
.end method

.method processNotification(Lcom/onesignal/OSNotification;Lcom/onesignal/OSNotification;)V
    .locals 2

    if-eqz p2, :cond_1

    .line 89
    invoke-virtual {p2}, Lcom/onesignal/OSNotification;->getBody()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/OSUtils;->isStringNotEmpty(Ljava/lang/String;)Z

    move-result v0

    .line 90
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationController;->isNotificationWithinTTL()Z

    move-result v1

    if-eqz v0, :cond_0

    if-eqz v1, :cond_0

    .line 93
    iget-object p1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {p1, p2}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    .line 94
    iget-boolean p1, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    invoke-static {p0, p1}, Lcom/onesignal/NotificationBundleProcessor;->processJobForDisplay(Lcom/onesignal/OSNotificationController;Z)I

    goto :goto_0

    .line 97
    :cond_0
    invoke-direct {p0, p1}, Lcom/onesignal/OSNotificationController;->notDisplayNotificationLogic(Lcom/onesignal/OSNotification;)V

    .line 101
    :goto_0
    iget-boolean p1, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    if-eqz p1, :cond_2

    const/16 p1, 0x64

    .line 102
    invoke-static {p1}, Lcom/onesignal/OSUtils;->sleep(I)V

    goto :goto_1

    .line 104
    :cond_1
    invoke-direct {p0, p1}, Lcom/onesignal/OSNotificationController;->notDisplayNotificationLogic(Lcom/onesignal/OSNotification;)V

    :cond_2
    :goto_1
    return-void
.end method

.method public setFromBackgroundLogic(Z)V
    .locals 0

    .line 157
    iput-boolean p1, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    return-void
.end method

.method public setRestoring(Z)V
    .locals 0

    .line 149
    iput-boolean p1, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 207
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSNotificationController{notificationJob="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSNotificationController;->notificationJob:Lcom/onesignal/OSNotificationGenerationJob;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isRestoring="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSNotificationController;->restoring:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isBackgroundLogic="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSNotificationController;->fromBackgroundLogic:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
