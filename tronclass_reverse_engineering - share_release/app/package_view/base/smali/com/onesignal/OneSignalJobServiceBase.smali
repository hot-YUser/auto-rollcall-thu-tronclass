.class abstract Lcom/onesignal/OneSignalJobServiceBase;
.super Landroid/app/job/JobService;
.source "OneSignalJobServiceBase.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 9
    invoke-direct {p0}, Landroid/app/job/JobService;-><init>()V

    return-void
.end method


# virtual methods
.method public onStartJob(Landroid/app/job/JobParameters;)Z
    .locals 2

    .line 15
    invoke-virtual {p1}, Landroid/app/job/JobParameters;->getExtras()Landroid/os/PersistableBundle;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 20
    :cond_0
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OneSignalJobServiceBase$1;

    invoke-direct {v1, p0, p0, p1}, Lcom/onesignal/OneSignalJobServiceBase$1;-><init>(Lcom/onesignal/OneSignalJobServiceBase;Landroid/app/job/JobService;Landroid/app/job/JobParameters;)V

    const-string p1, "OS_JOBSERVICE_BASE"

    invoke-direct {v0, v1, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 25
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    const/4 p1, 0x1

    return p1
.end method

.method public onStopJob(Landroid/app/job/JobParameters;)Z
    .locals 0

    const/4 p1, 0x1

    return p1
.end method

.method abstract startProcessing(Landroid/app/job/JobService;Landroid/app/job/JobParameters;)V
.end method
