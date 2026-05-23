.class Lcom/onesignal/OSSyncService$LollipopSyncRunnable;
.super Lcom/onesignal/OSSyncService$SyncRunnable;
.source "OSSyncService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSSyncService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "LollipopSyncRunnable"
.end annotation


# instance fields
.field private jobParameters:Landroid/app/job/JobParameters;

.field private jobService:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Landroid/app/job/JobService;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroid/app/job/JobService;Landroid/app/job/JobParameters;)V
    .locals 1

    .line 201
    invoke-direct {p0}, Lcom/onesignal/OSSyncService$SyncRunnable;-><init>()V

    .line 202
    new-instance v0, Ljava/lang/ref/WeakReference;

    invoke-direct {v0, p1}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    iput-object v0, p0, Lcom/onesignal/OSSyncService$LollipopSyncRunnable;->jobService:Ljava/lang/ref/WeakReference;

    .line 203
    iput-object p2, p0, Lcom/onesignal/OSSyncService$LollipopSyncRunnable;->jobParameters:Landroid/app/job/JobParameters;

    return-void
.end method


# virtual methods
.method protected stopSync()V
    .locals 3

    .line 208
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "LollipopSyncRunnable:JobFinished needsJobReschedule: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v2

    iget-boolean v2, v2, Lcom/onesignal/OSSyncService;->needsJobReschedule:Z

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 210
    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v0

    iget-boolean v0, v0, Lcom/onesignal/OSSyncService;->needsJobReschedule:Z

    .line 211
    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v1

    const/4 v2, 0x0

    iput-boolean v2, v1, Lcom/onesignal/OSSyncService;->needsJobReschedule:Z

    .line 213
    iget-object v1, p0, Lcom/onesignal/OSSyncService$LollipopSyncRunnable;->jobService:Ljava/lang/ref/WeakReference;

    invoke-virtual {v1}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 214
    iget-object v1, p0, Lcom/onesignal/OSSyncService$LollipopSyncRunnable;->jobService:Ljava/lang/ref/WeakReference;

    invoke-virtual {v1}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/app/job/JobService;

    iget-object v2, p0, Lcom/onesignal/OSSyncService$LollipopSyncRunnable;->jobParameters:Landroid/app/job/JobParameters;

    invoke-virtual {v1, v2, v0}, Landroid/app/job/JobService;->jobFinished(Landroid/app/job/JobParameters;Z)V

    :cond_0
    return-void
.end method
