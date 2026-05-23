.class Lcom/onesignal/OSSyncService$LegacySyncRunnable;
.super Lcom/onesignal/OSSyncService$SyncRunnable;
.source "OSSyncService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSSyncService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "LegacySyncRunnable"
.end annotation


# instance fields
.field private callerService:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Landroid/app/Service;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroid/app/Service;)V
    .locals 1

    .line 225
    invoke-direct {p0}, Lcom/onesignal/OSSyncService$SyncRunnable;-><init>()V

    .line 226
    new-instance v0, Ljava/lang/ref/WeakReference;

    invoke-direct {v0, p1}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    iput-object v0, p0, Lcom/onesignal/OSSyncService$LegacySyncRunnable;->callerService:Ljava/lang/ref/WeakReference;

    return-void
.end method


# virtual methods
.method protected stopSync()V
    .locals 2

    .line 231
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "LegacySyncRunnable:Stopped"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 232
    iget-object v0, p0, Lcom/onesignal/OSSyncService$LegacySyncRunnable;->callerService:Ljava/lang/ref/WeakReference;

    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 233
    iget-object v0, p0, Lcom/onesignal/OSSyncService$LegacySyncRunnable;->callerService:Ljava/lang/ref/WeakReference;

    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/Service;

    invoke-virtual {v0}, Landroid/app/Service;->stopSelf()V

    :cond_0
    return-void
.end method
