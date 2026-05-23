.class Lcom/onesignal/FCMBroadcastReceiver$2;
.super Ljava/lang/Object;
.source "FCMBroadcastReceiver.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/FCMBroadcastReceiver;->processOrderBroadcast(Landroid/content/Context;Landroid/content/Intent;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$bundle:Landroid/os/Bundle;

.field final synthetic val$context:Landroid/content/Context;

.field final synthetic val$fcmBundleReceiver:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# direct methods
.method constructor <init>(Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;Landroid/content/Context;Landroid/os/Bundle;)V
    .locals 0

    .line 125
    iput-object p1, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$fcmBundleReceiver:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

    iput-object p2, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$context:Landroid/content/Context;

    iput-object p3, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$bundle:Landroid/os/Bundle;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 2

    if-eqz p1, :cond_0

    .line 129
    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->processed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 130
    iget-object v0, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$fcmBundleReceiver:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

    invoke-interface {v0, p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;->onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V

    return-void

    .line 134
    :cond_0
    iget-object v0, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$context:Landroid/content/Context;

    iget-object v1, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$bundle:Landroid/os/Bundle;

    invoke-static {v0, v1}, Lcom/onesignal/FCMBroadcastReceiver;->startFCMService(Landroid/content/Context;Landroid/os/Bundle;)V

    .line 136
    iget-object v0, p0, Lcom/onesignal/FCMBroadcastReceiver$2;->val$fcmBundleReceiver:Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;

    invoke-interface {v0, p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;->onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V

    return-void
.end method
