.class Lcom/onesignal/ADMMessageHandler$1;
.super Ljava/lang/Object;
.source "ADMMessageHandler.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/ADMMessageHandler;->onMessage(Landroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/ADMMessageHandler;

.field final synthetic val$bundle:Landroid/os/Bundle;

.field final synthetic val$context:Landroid/content/Context;


# direct methods
.method constructor <init>(Lcom/onesignal/ADMMessageHandler;Landroid/os/Bundle;Landroid/content/Context;)V
    .locals 0

    .line 76
    iput-object p1, p0, Lcom/onesignal/ADMMessageHandler$1;->this$0:Lcom/onesignal/ADMMessageHandler;

    iput-object p2, p0, Lcom/onesignal/ADMMessageHandler$1;->val$bundle:Landroid/os/Bundle;

    iput-object p3, p0, Lcom/onesignal/ADMMessageHandler$1;->val$context:Landroid/content/Context;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 3

    .line 82
    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->processed()Z

    move-result p1

    if-eqz p1, :cond_0

    return-void

    .line 85
    :cond_0
    iget-object p1, p0, Lcom/onesignal/ADMMessageHandler$1;->val$bundle:Landroid/os/Bundle;

    invoke-static {p1}, Lcom/onesignal/NotificationBundleProcessor;->bundleAsJSONObject(Landroid/os/Bundle;)Lorg/json/JSONObject;

    move-result-object p1

    .line 86
    new-instance v0, Lcom/onesignal/OSNotification;

    invoke-direct {v0, p1}, Lcom/onesignal/OSNotification;-><init>(Lorg/json/JSONObject;)V

    .line 88
    new-instance v1, Lcom/onesignal/OSNotificationGenerationJob;

    iget-object v2, p0, Lcom/onesignal/ADMMessageHandler$1;->val$context:Landroid/content/Context;

    invoke-direct {v1, v2}, Lcom/onesignal/OSNotificationGenerationJob;-><init>(Landroid/content/Context;)V

    .line 89
    invoke-virtual {v1, p1}, Lcom/onesignal/OSNotificationGenerationJob;->setJsonPayload(Lorg/json/JSONObject;)V

    .line 90
    iget-object p1, p0, Lcom/onesignal/ADMMessageHandler$1;->val$context:Landroid/content/Context;

    invoke-virtual {v1, p1}, Lcom/onesignal/OSNotificationGenerationJob;->setContext(Landroid/content/Context;)V

    .line 91
    invoke-virtual {v1, v0}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    const/4 p1, 0x1

    .line 92
    invoke-static {v1, p1}, Lcom/onesignal/NotificationBundleProcessor;->processJobForDisplay(Lcom/onesignal/OSNotificationGenerationJob;Z)I

    return-void
.end method
