.class Lcom/onesignal/NotificationBundleProcessor$1;
.super Ljava/lang/Object;
.source "NotificationBundleProcessor.java"

# interfaces
.implements Lcom/onesignal/OSNotificationDataController$InvalidOrDuplicateNotificationCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/NotificationBundleProcessor;->processFromFCMIntentService(Landroid/content/Context;Lcom/onesignal/BundleCompat;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$context:Landroid/content/Context;

.field final synthetic val$finalAndroidNotificationId:I

.field final synthetic val$isRestoring:Z

.field final synthetic val$jsonPayload:Lorg/json/JSONObject;

.field final synthetic val$jsonStrPayload:Ljava/lang/String;

.field final synthetic val$shownTimeStamp:J


# direct methods
.method constructor <init>(ZLorg/json/JSONObject;Landroid/content/Context;ILjava/lang/String;J)V
    .locals 0

    .line 86
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$isRestoring:Z

    iput-object p2, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$jsonPayload:Lorg/json/JSONObject;

    iput-object p3, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$context:Landroid/content/Context;

    iput p4, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$finalAndroidNotificationId:I

    iput-object p5, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$jsonStrPayload:Ljava/lang/String;

    iput-wide p6, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$shownTimeStamp:J

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(Z)V
    .locals 8

    .line 89
    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$isRestoring:Z

    if-nez v0, :cond_0

    if-eqz p1, :cond_0

    return-void

    .line 93
    :cond_0
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$jsonPayload:Lorg/json/JSONObject;

    invoke-static {p1}, Lcom/onesignal/OSNotificationFormatHelper;->getOSNotificationIdFromJson(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object v1

    .line 94
    iget-object v0, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$context:Landroid/content/Context;

    iget v2, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$finalAndroidNotificationId:I

    iget-object v3, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$jsonStrPayload:Ljava/lang/String;

    iget-wide v4, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$shownTimeStamp:J

    iget-boolean v6, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$isRestoring:Z

    const/4 v7, 0x0

    invoke-static/range {v0 .. v7}, Lcom/onesignal/OSNotificationWorkManager;->beginEnqueueingWork(Landroid/content/Context;Ljava/lang/String;ILjava/lang/String;JZZ)V

    .line 105
    iget-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$1;->val$isRestoring:Z

    if-eqz p1, :cond_1

    const/16 p1, 0x64

    .line 106
    invoke-static {p1}, Lcom/onesignal/OSUtils;->sleep(I)V

    :cond_1
    return-void
.end method
