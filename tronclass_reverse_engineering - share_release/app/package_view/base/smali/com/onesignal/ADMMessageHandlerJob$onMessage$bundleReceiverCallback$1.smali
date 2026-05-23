.class public final Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;
.super Ljava/lang/Object;
.source "ADMMessageHandlerJob.kt"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/ADMMessageHandlerJob;->onMessage(Landroid/content/Context;Landroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0017\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\u0008\n\u0018\u00002\u00020\u0001J\u0012\u0010\u0002\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005H\u0016\u00a8\u0006\u0006"
    }
    d2 = {
        "com/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1",
        "Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;",
        "onBundleProcessed",
        "",
        "processedResult",
        "Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic $bundle:Landroid/os/Bundle;

.field final synthetic $context:Landroid/content/Context;


# direct methods
.method constructor <init>(Landroid/os/Bundle;Landroid/content/Context;)V
    .locals 0

    iput-object p1, p0, Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;->$bundle:Landroid/os/Bundle;

    iput-object p2, p0, Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;->$context:Landroid/content/Context;

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 3

    if-nez p1, :cond_0

    goto :goto_0

    .line 18
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->processed()Z

    move-result p1

    if-eqz p1, :cond_1

    return-void

    .line 21
    :cond_1
    :goto_0
    iget-object p1, p0, Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;->$bundle:Landroid/os/Bundle;

    invoke-static {p1}, Lcom/onesignal/NotificationBundleProcessor;->bundleAsJSONObject(Landroid/os/Bundle;)Lorg/json/JSONObject;

    move-result-object p1

    const-string v0, "bundleAsJSONObject(bundle)"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 22
    new-instance v0, Lcom/onesignal/OSNotification;

    invoke-direct {v0, p1}, Lcom/onesignal/OSNotification;-><init>(Lorg/json/JSONObject;)V

    .line 24
    new-instance v1, Lcom/onesignal/OSNotificationGenerationJob;

    iget-object v2, p0, Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;->$context:Landroid/content/Context;

    invoke-direct {v1, v2}, Lcom/onesignal/OSNotificationGenerationJob;-><init>(Landroid/content/Context;)V

    iget-object v2, p0, Lcom/onesignal/ADMMessageHandlerJob$onMessage$bundleReceiverCallback$1;->$context:Landroid/content/Context;

    .line 25
    invoke-virtual {v1, p1}, Lcom/onesignal/OSNotificationGenerationJob;->setJsonPayload(Lorg/json/JSONObject;)V

    .line 26
    invoke-virtual {v1, v2}, Lcom/onesignal/OSNotificationGenerationJob;->setContext(Landroid/content/Context;)V

    .line 27
    invoke-virtual {v1, v0}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    const/4 p1, 0x1

    .line 30
    invoke-static {v1, p1}, Lcom/onesignal/NotificationBundleProcessor;->processJobForDisplay(Lcom/onesignal/OSNotificationGenerationJob;Z)I

    return-void
.end method
