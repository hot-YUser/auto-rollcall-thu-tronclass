.class Lcom/onesignal/NotificationPayloadProcessorHMS$1;
.super Ljava/lang/Object;
.source "NotificationPayloadProcessorHMS.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/NotificationPayloadProcessorHMS;->processDataMessageReceived(Landroid/content/Context;Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$bundle:Landroid/os/Bundle;

.field final synthetic val$context:Landroid/content/Context;


# direct methods
.method constructor <init>(Landroid/content/Context;Landroid/os/Bundle;)V
    .locals 0

    .line 88
    iput-object p1, p0, Lcom/onesignal/NotificationPayloadProcessorHMS$1;->val$context:Landroid/content/Context;

    iput-object p2, p0, Lcom/onesignal/NotificationPayloadProcessorHMS$1;->val$bundle:Landroid/os/Bundle;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 1

    if-eqz p1, :cond_0

    .line 96
    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->processed()Z

    move-result p1

    if-eqz p1, :cond_0

    return-void

    .line 100
    :cond_0
    iget-object p1, p0, Lcom/onesignal/NotificationPayloadProcessorHMS$1;->val$context:Landroid/content/Context;

    iget-object v0, p0, Lcom/onesignal/NotificationPayloadProcessorHMS$1;->val$bundle:Landroid/os/Bundle;

    invoke-static {p1, v0}, Lcom/onesignal/FCMBroadcastReceiver;->startFCMService(Landroid/content/Context;Landroid/os/Bundle;)V

    return-void
.end method
