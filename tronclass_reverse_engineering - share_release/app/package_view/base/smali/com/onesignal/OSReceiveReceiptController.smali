.class Lcom/onesignal/OSReceiveReceiptController;
.super Ljava/lang/Object;
.source "OSReceiveReceiptController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSReceiveReceiptController$ReceiveReceiptWorker;
    }
.end annotation


# static fields
.field private static final OS_NOTIFICATION_ID:Ljava/lang/String; = "os_notification_id"

.field private static sInstance:Lcom/onesignal/OSReceiveReceiptController;


# instance fields
.field private maxDelay:I

.field private minDelay:I

.field private final remoteParamController:Lcom/onesignal/OSRemoteParamController;


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 52
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 46
    iput v0, p0, Lcom/onesignal/OSReceiveReceiptController;->minDelay:I

    const/16 v0, 0x19

    .line 47
    iput v0, p0, Lcom/onesignal/OSReceiveReceiptController;->maxDelay:I

    .line 53
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSReceiveReceiptController;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    return-void
.end method

.method public static declared-synchronized getInstance()Lcom/onesignal/OSReceiveReceiptController;
    .locals 2

    const-class v0, Lcom/onesignal/OSReceiveReceiptController;

    monitor-enter v0

    .line 57
    :try_start_0
    sget-object v1, Lcom/onesignal/OSReceiveReceiptController;->sInstance:Lcom/onesignal/OSReceiveReceiptController;

    if-nez v1, :cond_0

    .line 58
    new-instance v1, Lcom/onesignal/OSReceiveReceiptController;

    invoke-direct {v1}, Lcom/onesignal/OSReceiveReceiptController;-><init>()V

    sput-object v1, Lcom/onesignal/OSReceiveReceiptController;->sInstance:Lcom/onesignal/OSReceiveReceiptController;

    .line 59
    :cond_0
    sget-object v1, Lcom/onesignal/OSReceiveReceiptController;->sInstance:Lcom/onesignal/OSReceiveReceiptController;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method


# virtual methods
.method beginEnqueueingWork(Landroid/content/Context;Ljava/lang/String;)V
    .locals 6

    .line 63
    iget-object v0, p0, Lcom/onesignal/OSReceiveReceiptController;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isReceiveReceiptEnabled()Z

    move-result v0

    if-nez v0, :cond_0

    .line 64
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "sendReceiveReceipt disabled"

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void

    .line 68
    :cond_0
    iget v0, p0, Lcom/onesignal/OSReceiveReceiptController;->minDelay:I

    iget v1, p0, Lcom/onesignal/OSReceiveReceiptController;->maxDelay:I

    invoke-static {v0, v1}, Lcom/onesignal/OSUtils;->getRandomDelay(II)I

    move-result v0

    .line 70
    new-instance v1, Landroidx/work/Data$Builder;

    invoke-direct {v1}, Landroidx/work/Data$Builder;-><init>()V

    const-string v2, "os_notification_id"

    .line 71
    invoke-virtual {v1, v2, p2}, Landroidx/work/Data$Builder;->putString(Ljava/lang/String;Ljava/lang/String;)Landroidx/work/Data$Builder;

    move-result-object v1

    .line 72
    invoke-virtual {v1}, Landroidx/work/Data$Builder;->build()Landroidx/work/Data;

    move-result-object v1

    .line 74
    invoke-virtual {p0}, Lcom/onesignal/OSReceiveReceiptController;->buildConstraints()Landroidx/work/Constraints;

    move-result-object v2

    .line 76
    new-instance v3, Landroidx/work/OneTimeWorkRequest$Builder;

    const-class v4, Lcom/onesignal/OSReceiveReceiptController$ReceiveReceiptWorker;

    invoke-direct {v3, v4}, Landroidx/work/OneTimeWorkRequest$Builder;-><init>(Ljava/lang/Class;)V

    .line 77
    invoke-virtual {v3, v2}, Landroidx/work/OneTimeWorkRequest$Builder;->setConstraints(Landroidx/work/Constraints;)Landroidx/work/WorkRequest$Builder;

    move-result-object v2

    check-cast v2, Landroidx/work/OneTimeWorkRequest$Builder;

    int-to-long v3, v0

    sget-object v5, Ljava/util/concurrent/TimeUnit;->SECONDS:Ljava/util/concurrent/TimeUnit;

    .line 78
    invoke-virtual {v2, v3, v4, v5}, Landroidx/work/OneTimeWorkRequest$Builder;->setInitialDelay(JLjava/util/concurrent/TimeUnit;)Landroidx/work/WorkRequest$Builder;

    move-result-object v2

    check-cast v2, Landroidx/work/OneTimeWorkRequest$Builder;

    .line 79
    invoke-virtual {v2, v1}, Landroidx/work/OneTimeWorkRequest$Builder;->setInputData(Landroidx/work/Data;)Landroidx/work/WorkRequest$Builder;

    move-result-object v1

    check-cast v1, Landroidx/work/OneTimeWorkRequest$Builder;

    .line 80
    invoke-virtual {v1}, Landroidx/work/OneTimeWorkRequest$Builder;->build()Landroidx/work/WorkRequest;

    move-result-object v1

    check-cast v1, Landroidx/work/OneTimeWorkRequest;

    .line 82
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "OSReceiveReceiptController enqueueing send receive receipt work with notificationId: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v4, " and delay: "

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, " seconds"

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 84
    invoke-static {p1}, Lcom/onesignal/OSWorkManagerHelper;->getInstance(Landroid/content/Context;)Landroidx/work/WorkManager;

    move-result-object p1

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, "_receive_receipt"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    sget-object v0, Landroidx/work/ExistingWorkPolicy;->KEEP:Landroidx/work/ExistingWorkPolicy;

    .line 85
    invoke-virtual {p1, p2, v0, v1}, Landroidx/work/WorkManager;->enqueueUniqueWork(Ljava/lang/String;Landroidx/work/ExistingWorkPolicy;Landroidx/work/OneTimeWorkRequest;)Landroidx/work/Operation;

    return-void
.end method

.method buildConstraints()Landroidx/work/Constraints;
    .locals 2

    .line 89
    new-instance v0, Landroidx/work/Constraints$Builder;

    invoke-direct {v0}, Landroidx/work/Constraints$Builder;-><init>()V

    sget-object v1, Landroidx/work/NetworkType;->CONNECTED:Landroidx/work/NetworkType;

    .line 90
    invoke-virtual {v0, v1}, Landroidx/work/Constraints$Builder;->setRequiredNetworkType(Landroidx/work/NetworkType;)Landroidx/work/Constraints$Builder;

    move-result-object v0

    .line 91
    invoke-virtual {v0}, Landroidx/work/Constraints$Builder;->build()Landroidx/work/Constraints;

    move-result-object v0

    return-object v0
.end method
