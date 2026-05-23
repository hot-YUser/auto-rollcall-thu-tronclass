.class Lcom/onesignal/NotificationBundleProcessor$3;
.super Ljava/lang/Object;
.source "NotificationBundleProcessor.java"

# interfaces
.implements Lcom/onesignal/OSNotificationDataController$InvalidOrDuplicateNotificationCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/NotificationBundleProcessor;->startNotificationProcessing(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$bundle:Landroid/os/Bundle;

.field final synthetic val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

.field final synthetic val$context:Landroid/content/Context;

.field final synthetic val$isHighPriority:Z

.field final synthetic val$isRestoring:Z

.field final synthetic val$jsonPayload:Lorg/json/JSONObject;

.field final synthetic val$notificationProcessingCallback:Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;

.field final synthetic val$timestamp:J


# direct methods
.method constructor <init>(ZLandroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;Lorg/json/JSONObject;JZLcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 0

    .line 407
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$isRestoring:Z

    iput-object p2, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$context:Landroid/content/Context;

    iput-object p3, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundle:Landroid/os/Bundle;

    iput-object p4, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$notificationProcessingCallback:Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;

    iput-object p5, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$jsonPayload:Lorg/json/JSONObject;

    iput-wide p6, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$timestamp:J

    iput-boolean p8, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$isHighPriority:Z

    iput-object p9, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(Z)V
    .locals 10

    .line 411
    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$isRestoring:Z

    const/4 v1, 0x0

    if-nez v0, :cond_0

    if-eqz p1, :cond_0

    .line 413
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v2, "startNotificationProcessing returning, with context: "

    invoke-direct {v0, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$context:Landroid/content/Context;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, " and bundle: "

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v2, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundle:Landroid/os/Bundle;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 414
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$notificationProcessingCallback:Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;

    invoke-interface {p1, v1}, Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;->onResult(Z)V

    return-void

    .line 418
    :cond_0
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$jsonPayload:Lorg/json/JSONObject;

    invoke-static {p1}, Lcom/onesignal/OSNotificationFormatHelper;->getOSNotificationIdFromJson(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object v3

    .line 420
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundle:Landroid/os/Bundle;

    const-string v0, "android_notif_id"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->containsKey(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 421
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundle:Landroid/os/Bundle;

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v1

    :cond_1
    move v4, v1

    .line 423
    iget-object v2, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$context:Landroid/content/Context;

    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$jsonPayload:Lorg/json/JSONObject;

    .line 427
    invoke-virtual {p1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v5

    iget-wide v6, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$timestamp:J

    iget-boolean v8, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$isRestoring:Z

    iget-boolean v9, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$isHighPriority:Z

    .line 423
    invoke-static/range {v2 .. v9}, Lcom/onesignal/OSNotificationWorkManager;->beginEnqueueingWork(Landroid/content/Context;Ljava/lang/String;ILjava/lang/String;JZZ)V

    .line 432
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

    const/4 v0, 0x1

    invoke-virtual {p1, v0}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->setWorkManagerProcessing(Z)V

    .line 433
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$3;->val$notificationProcessingCallback:Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;

    invoke-interface {p1, v0}, Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;->onResult(Z)V

    return-void
.end method
