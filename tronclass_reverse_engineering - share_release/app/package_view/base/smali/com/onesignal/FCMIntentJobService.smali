.class public Lcom/onesignal/FCMIntentJobService;
.super Lcom/onesignal/JobIntentService;
.source "FCMIntentJobService.java"


# static fields
.field public static final BUNDLE_EXTRA:Ljava/lang/String; = "Bundle:Parcelable:Extras"

.field private static final JOB_ID:I = 0x1e3f2


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Lcom/onesignal/JobIntentService;-><init>()V

    return-void
.end method

.method public static enqueueWork(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 3

    const v0, 0x1e3f2

    const/4 v1, 0x0

    .line 39
    const-class v2, Lcom/onesignal/FCMIntentJobService;

    invoke-static {p0, v2, v0, p1, v1}, Lcom/onesignal/FCMIntentJobService;->enqueueWork(Landroid/content/Context;Ljava/lang/Class;ILandroid/content/Intent;Z)V

    return-void
.end method


# virtual methods
.method public bridge synthetic isStopped()Z
    .locals 1

    .line 17
    invoke-super {p0}, Lcom/onesignal/JobIntentService;->isStopped()Z

    move-result v0

    return v0
.end method

.method public bridge synthetic onBind(Landroid/content/Intent;)Landroid/os/IBinder;
    .locals 0

    .line 17
    invoke-super {p0, p1}, Lcom/onesignal/JobIntentService;->onBind(Landroid/content/Intent;)Landroid/os/IBinder;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic onCreate()V
    .locals 0

    .line 17
    invoke-super {p0}, Lcom/onesignal/JobIntentService;->onCreate()V

    return-void
.end method

.method public bridge synthetic onDestroy()V
    .locals 0

    .line 17
    invoke-super {p0}, Lcom/onesignal/JobIntentService;->onDestroy()V

    return-void
.end method

.method protected onHandleWork(Landroid/content/Intent;)V
    .locals 1

    .line 25
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    if-nez p1, :cond_0

    return-void

    .line 29
    :cond_0
    invoke-static {p0}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    .line 30
    new-instance v0, Lcom/onesignal/FCMIntentJobService$1;

    invoke-direct {v0, p0}, Lcom/onesignal/FCMIntentJobService$1;-><init>(Lcom/onesignal/FCMIntentJobService;)V

    invoke-static {p0, p1, v0}, Lcom/onesignal/NotificationBundleProcessor;->processBundleFromReceiver(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V

    return-void
.end method

.method public bridge synthetic onStartCommand(Landroid/content/Intent;II)I
    .locals 0

    .line 17
    invoke-super {p0, p1, p2, p3}, Lcom/onesignal/JobIntentService;->onStartCommand(Landroid/content/Intent;II)I

    move-result p1

    return p1
.end method

.method public bridge synthetic onStopCurrentWork()Z
    .locals 1

    .line 17
    invoke-super {p0}, Lcom/onesignal/JobIntentService;->onStopCurrentWork()Z

    move-result v0

    return v0
.end method

.method public bridge synthetic setInterruptIfStopped(Z)V
    .locals 0

    .line 17
    invoke-super {p0, p1}, Lcom/onesignal/JobIntentService;->setInterruptIfStopped(Z)V

    return-void
.end method
