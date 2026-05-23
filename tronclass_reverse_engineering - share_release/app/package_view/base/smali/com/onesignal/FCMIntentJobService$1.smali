.class Lcom/onesignal/FCMIntentJobService$1;
.super Ljava/lang/Object;
.source "FCMIntentJobService.java"

# interfaces
.implements Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/FCMIntentJobService;->onHandleWork(Landroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/FCMIntentJobService;


# direct methods
.method constructor <init>(Lcom/onesignal/FCMIntentJobService;)V
    .locals 0

    .line 30
    iput-object p1, p0, Lcom/onesignal/FCMIntentJobService$1;->this$0:Lcom/onesignal/FCMIntentJobService;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V
    .locals 0

    return-void
.end method
