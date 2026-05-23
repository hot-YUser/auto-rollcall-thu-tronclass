.class public Lcom/onesignal/FCMIntentService;
.super Landroid/app/IntentService;
.source "FCMIntentService.java"


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 51
    const-string v0, "FCMIntentService"

    invoke-direct {p0, v0}, Landroid/app/IntentService;-><init>(Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 52
    invoke-virtual {p0, v0}, Lcom/onesignal/FCMIntentService;->setIntentRedelivery(Z)V

    return-void
.end method


# virtual methods
.method protected onHandleIntent(Landroid/content/Intent;)V
    .locals 2

    .line 62
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 66
    :cond_0
    invoke-static {p0}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    .line 67
    new-instance v1, Lcom/onesignal/FCMIntentService$1;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/FCMIntentService$1;-><init>(Lcom/onesignal/FCMIntentService;Landroid/content/Intent;)V

    .line 74
    invoke-static {p0, v0, v1}, Lcom/onesignal/NotificationBundleProcessor;->processBundleFromReceiver(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V

    return-void
.end method
