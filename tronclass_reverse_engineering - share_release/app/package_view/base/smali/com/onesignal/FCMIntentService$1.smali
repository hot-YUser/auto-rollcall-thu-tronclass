.class Lcom/onesignal/FCMIntentService$1;
.super Ljava/lang/Object;
.source "FCMIntentService.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/FCMIntentService;->onHandleIntent(Landroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/FCMIntentService;

.field final synthetic val$intent:Landroid/content/Intent;


# direct methods
.method constructor <init>(Lcom/onesignal/FCMIntentService;Landroid/content/Intent;)V
    .locals 0

    .line 67
    iput-object p1, p0, Lcom/onesignal/FCMIntentService$1;->this$0:Lcom/onesignal/FCMIntentService;

    iput-object p2, p0, Lcom/onesignal/FCMIntentService$1;->val$intent:Landroid/content/Intent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 0

    .line 71
    iget-object p1, p0, Lcom/onesignal/FCMIntentService$1;->val$intent:Landroid/content/Intent;

    invoke-static {p1}, Lcom/onesignal/FCMBroadcastReceiver;->completeWakefulIntent(Landroid/content/Intent;)Z

    return-void
.end method
