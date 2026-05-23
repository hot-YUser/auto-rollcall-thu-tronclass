.class abstract Lcom/onesignal/OSSyncService$SyncRunnable;
.super Ljava/lang/Object;
.source "OSSyncService.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSSyncService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "SyncRunnable"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 138
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 5

    .line 141
    sget-object v0, Lcom/onesignal/OSBackgroundSync;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 142
    :try_start_0
    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v1

    const-wide/16 v2, 0x0

    invoke-static {v2, v3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v2

    invoke-static {v1, v2}, Lcom/onesignal/OSSyncService;->access$002(Lcom/onesignal/OSSyncService;Ljava/lang/Long;)Ljava/lang/Long;

    .line 143
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 144
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 145
    invoke-virtual {p0}, Lcom/onesignal/OSSyncService$SyncRunnable;->stopSync()V

    return-void

    .line 149
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    .line 150
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->initUserState()V

    const/4 v0, 0x1

    .line 157
    :try_start_1
    new-instance v1, Ljava/util/concurrent/ArrayBlockingQueue;

    invoke-direct {v1, v0}, Ljava/util/concurrent/ArrayBlockingQueue;-><init>(I)V

    .line 158
    new-instance v2, Lcom/onesignal/OSSyncService$SyncRunnable$1;

    invoke-direct {v2, p0, v1}, Lcom/onesignal/OSSyncService$SyncRunnable$1;-><init>(Lcom/onesignal/OSSyncService$SyncRunnable;Ljava/util/concurrent/BlockingQueue;)V

    .line 170
    sget-object v3, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v4, 0x0

    invoke-static {v3, v4, v4, v2}, Lcom/onesignal/LocationController;->getLocation(Landroid/content/Context;ZZLcom/onesignal/LocationController$LocationHandler;)V

    .line 173
    invoke-interface {v1}, Ljava/util/concurrent/BlockingQueue;->take()Ljava/lang/Object;

    move-result-object v1

    .line 174
    instance-of v2, v1, Lcom/onesignal/LocationController$LocationPoint;

    if-eqz v2, :cond_1

    .line 175
    check-cast v1, Lcom/onesignal/LocationController$LocationPoint;

    invoke-static {v1}, Lcom/onesignal/OneSignalStateSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V
    :try_end_1
    .catch Ljava/lang/InterruptedException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 178
    invoke-virtual {v1}, Ljava/lang/InterruptedException;->printStackTrace()V

    .line 183
    :cond_1
    :goto_0
    invoke-static {v0}, Lcom/onesignal/OneSignalStateSynchronizer;->syncUserState(Z)V

    .line 184
    invoke-static {}, Lcom/onesignal/OneSignal;->getFocusTimeController()Lcom/onesignal/FocusTimeController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/FocusTimeController;->doBlockingBackgroundSyncOfUnsentTime()V

    .line 185
    invoke-virtual {p0}, Lcom/onesignal/OSSyncService$SyncRunnable;->stopSync()V

    return-void

    :catchall_0
    move-exception v1

    .line 143
    :try_start_2
    monitor-exit v0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v1
.end method

.method protected abstract stopSync()V
.end method
