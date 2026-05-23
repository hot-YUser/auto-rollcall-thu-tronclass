.class Lcom/onesignal/NotificationBundleProcessor$2;
.super Ljava/lang/Object;
.source "NotificationBundleProcessor.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$NotificationProcessingCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/NotificationBundleProcessor;->processBundleFromReceiver(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$bundleReceiverCallback:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

.field final synthetic val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;


# direct methods
.method constructor <init>(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V
    .locals 0

    .line 382
    iput-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$2;->val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

    iput-object p2, p0, Lcom/onesignal/NotificationBundleProcessor$2;->val$bundleReceiverCallback:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(Z)V
    .locals 1

    if-nez p1, :cond_0

    .line 389
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$2;->val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

    const/4 v0, 0x1

    invoke-virtual {p1, v0}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->setDup(Z)V

    .line 391
    :cond_0
    iget-object p1, p0, Lcom/onesignal/NotificationBundleProcessor$2;->val$bundleReceiverCallback:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

    iget-object v0, p0, Lcom/onesignal/NotificationBundleProcessor$2;->val$bundleResult:Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;

    invoke-interface {p1, v0}, Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;->onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V

    return-void
.end method
