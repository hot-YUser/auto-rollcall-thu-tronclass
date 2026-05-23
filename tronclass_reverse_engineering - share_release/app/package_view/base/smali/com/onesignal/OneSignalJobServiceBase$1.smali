.class Lcom/onesignal/OneSignalJobServiceBase$1;
.super Ljava/lang/Object;
.source "OneSignalJobServiceBase.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignalJobServiceBase;->onStartJob(Landroid/app/job/JobParameters;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OneSignalJobServiceBase;

.field final synthetic val$finalJobParameters:Landroid/app/job/JobParameters;

.field final synthetic val$jobService:Landroid/app/job/JobService;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalJobServiceBase;Landroid/app/job/JobService;Landroid/app/job/JobParameters;)V
    .locals 0

    .line 20
    iput-object p1, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->this$0:Lcom/onesignal/OneSignalJobServiceBase;

    iput-object p2, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->val$jobService:Landroid/app/job/JobService;

    iput-object p3, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->val$finalJobParameters:Landroid/app/job/JobParameters;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 22
    iget-object v0, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->this$0:Lcom/onesignal/OneSignalJobServiceBase;

    iget-object v1, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->val$jobService:Landroid/app/job/JobService;

    iget-object v2, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->val$finalJobParameters:Landroid/app/job/JobParameters;

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/OneSignalJobServiceBase;->startProcessing(Landroid/app/job/JobService;Landroid/app/job/JobParameters;)V

    .line 23
    iget-object v0, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->this$0:Lcom/onesignal/OneSignalJobServiceBase;

    iget-object v1, p0, Lcom/onesignal/OneSignalJobServiceBase$1;->val$finalJobParameters:Landroid/app/job/JobParameters;

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/OneSignalJobServiceBase;->jobFinished(Landroid/app/job/JobParameters;Z)V

    return-void
.end method
