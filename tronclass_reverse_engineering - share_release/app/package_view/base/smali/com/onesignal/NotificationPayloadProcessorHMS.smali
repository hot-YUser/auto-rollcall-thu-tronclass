.class Lcom/onesignal/NotificationPayloadProcessorHMS;
.super Ljava/lang/Object;
.source "NotificationPayloadProcessorHMS.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static covertHMSOpenIntentToJson(Landroid/content/Intent;)Lorg/json/JSONObject;
    .locals 1

    .line 35
    invoke-static {p0}, Lcom/onesignal/OSNotificationFormatHelper;->isOneSignalIntent(Landroid/content/Intent;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 38
    :cond_0
    invoke-virtual {p0}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p0

    .line 39
    invoke-static {p0}, Lcom/onesignal/NotificationBundleProcessor;->bundleAsJSONObject(Landroid/os/Bundle;)Lorg/json/JSONObject;

    move-result-object p0

    .line 40
    invoke-static {p0}, Lcom/onesignal/NotificationPayloadProcessorHMS;->reformatButtonClickAction(Lorg/json/JSONObject;)V

    return-object p0
.end method

.method static handleHMSNotificationOpenIntent(Landroid/app/Activity;Landroid/content/Intent;)V
    .locals 1

    .line 19
    invoke-virtual {p0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    if-nez p1, :cond_0

    return-void

    .line 23
    :cond_0
    invoke-static {p1}, Lcom/onesignal/NotificationPayloadProcessorHMS;->covertHMSOpenIntentToJson(Landroid/content/Intent;)Lorg/json/JSONObject;

    move-result-object p1

    if-nez p1, :cond_1

    return-void

    .line 27
    :cond_1
    invoke-static {p0, p1}, Lcom/onesignal/NotificationPayloadProcessorHMS;->handleProcessJsonOpenData(Landroid/app/Activity;Lorg/json/JSONObject;)V

    return-void
.end method

.method private static handleProcessJsonOpenData(Landroid/app/Activity;Lorg/json/JSONObject;)V
    .locals 1

    .line 65
    invoke-static {p0, p1}, Lcom/onesignal/OSInAppMessagePreviewHandler;->notificationOpened(Landroid/app/Activity;Lorg/json/JSONObject;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 68
    :cond_0
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 70
    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    move-result-object v0

    .line 71
    invoke-static {p1}, Lcom/onesignal/OSNotificationFormatHelper;->getOSNotificationIdFromJson(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object p1

    .line 68
    invoke-static {p0, v0, p1}, Lcom/onesignal/OneSignal;->handleNotificationOpen(Landroid/app/Activity;Lorg/json/JSONArray;Ljava/lang/String;)V

    return-void
.end method

.method public static processDataMessageReceived(Landroid/content/Context;Ljava/lang/String;)V
    .locals 1

    .line 80
    invoke-static {p0}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    if-nez p1, :cond_0

    return-void

    .line 84
    :cond_0
    invoke-static {p1}, Lcom/onesignal/OSUtils;->jsonStringToBundle(Ljava/lang/String;)Landroid/os/Bundle;

    move-result-object p1

    if-nez p1, :cond_1

    return-void

    .line 88
    :cond_1
    new-instance v0, Lcom/onesignal/NotificationPayloadProcessorHMS$1;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/NotificationPayloadProcessorHMS$1;-><init>(Landroid/content/Context;Landroid/os/Bundle;)V

    .line 103
    invoke-static {p0, p1, v0}, Lcom/onesignal/NotificationBundleProcessor;->processBundleFromReceiver(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V

    return-void
.end method

.method private static reformatButtonClickAction(Lorg/json/JSONObject;)V
    .locals 2

    .line 53
    const-string v0, "actionId"

    :try_start_0
    invoke-static {p0}, Lcom/onesignal/NotificationBundleProcessor;->getCustomJSONObject(Lorg/json/JSONObject;)Lorg/json/JSONObject;

    move-result-object v1

    .line 54
    invoke-virtual {v1, v0}, Lorg/json/JSONObject;->remove(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    if-nez v1, :cond_0

    return-void

    .line 58
    :cond_0
    invoke-virtual {p0, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 60
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
