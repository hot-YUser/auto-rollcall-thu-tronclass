.class Lcom/onesignal/FCMBroadcastReceiver$1;
.super Ljava/lang/Object;
.source "FCMBroadcastReceiver.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/FCMBroadcastReceiver;->onReceive(Landroid/content/Context;Landroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/FCMBroadcastReceiver;


# direct methods
.method constructor <init>(Lcom/onesignal/FCMBroadcastReceiver;)V
    .locals 0

    .line 72
    iput-object p1, p0, Lcom/onesignal/FCMBroadcastReceiver$1;->this$0:Lcom/onesignal/FCMBroadcastReceiver;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 1

    if-nez p1, :cond_0

    .line 78
    iget-object p1, p0, Lcom/onesignal/FCMBroadcastReceiver$1;->this$0:Lcom/onesignal/FCMBroadcastReceiver;

    invoke-static {p1}, Lcom/onesignal/FCMBroadcastReceiver;->access$000(Lcom/onesignal/FCMBroadcastReceiver;)V

    return-void

    .line 85
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isDup()Z

    move-result v0

    if-nez v0, :cond_2

    invoke-virtual {p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isWorkManagerProcessing()Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_0

    .line 91
    :cond_1
    iget-object p1, p0, Lcom/onesignal/FCMBroadcastReceiver$1;->this$0:Lcom/onesignal/FCMBroadcastReceiver;

    invoke-static {p1}, Lcom/onesignal/FCMBroadcastReceiver;->access$000(Lcom/onesignal/FCMBroadcastReceiver;)V

    return-void

    .line 87
    :cond_2
    :goto_0
    iget-object p1, p0, Lcom/onesignal/FCMBroadcastReceiver$1;->this$0:Lcom/onesignal/FCMBroadcastReceiver;

    invoke-static {p1}, Lcom/onesignal/FCMBroadcastReceiver;->access$100(Lcom/onesignal/FCMBroadcastReceiver;)V

    return-void
.end method
