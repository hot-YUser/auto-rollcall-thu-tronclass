.class Lcom/onesignal/OSTimeoutHandler;
.super Landroid/os/HandlerThread;
.source "OSTimeoutHandler.java"


# static fields
.field private static final SYNC_LOCK:Ljava/lang/Object;

.field private static final TAG:Ljava/lang/String; = "com.onesignal.OSTimeoutHandler"

.field private static timeoutHandler:Lcom/onesignal/OSTimeoutHandler;


# instance fields
.field private final mHandler:Landroid/os/Handler;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 38
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    sput-object v0, Lcom/onesignal/OSTimeoutHandler;->SYNC_LOCK:Ljava/lang/Object;

    return-void
.end method

.method private constructor <init>()V
    .locals 2

    .line 55
    sget-object v0, Lcom/onesignal/OSTimeoutHandler;->TAG:Ljava/lang/String;

    invoke-direct {p0, v0}, Landroid/os/HandlerThread;-><init>(Ljava/lang/String;)V

    .line 56
    invoke-virtual {p0}, Lcom/onesignal/OSTimeoutHandler;->start()V

    .line 57
    new-instance v0, Landroid/os/Handler;

    invoke-virtual {p0}, Lcom/onesignal/OSTimeoutHandler;->getLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    iput-object v0, p0, Lcom/onesignal/OSTimeoutHandler;->mHandler:Landroid/os/Handler;

    return-void
.end method

.method static getTimeoutHandler()Lcom/onesignal/OSTimeoutHandler;
    .locals 2

    .line 43
    sget-object v0, Lcom/onesignal/OSTimeoutHandler;->timeoutHandler:Lcom/onesignal/OSTimeoutHandler;

    if-nez v0, :cond_1

    .line 44
    sget-object v0, Lcom/onesignal/OSTimeoutHandler;->SYNC_LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 45
    :try_start_0
    sget-object v1, Lcom/onesignal/OSTimeoutHandler;->timeoutHandler:Lcom/onesignal/OSTimeoutHandler;

    if-nez v1, :cond_0

    .line 46
    new-instance v1, Lcom/onesignal/OSTimeoutHandler;

    invoke-direct {v1}, Lcom/onesignal/OSTimeoutHandler;-><init>()V

    sput-object v1, Lcom/onesignal/OSTimeoutHandler;->timeoutHandler:Lcom/onesignal/OSTimeoutHandler;

    .line 47
    :cond_0
    monitor-exit v0

    goto :goto_0

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1

    .line 49
    :cond_1
    :goto_0
    sget-object v0, Lcom/onesignal/OSTimeoutHandler;->timeoutHandler:Lcom/onesignal/OSTimeoutHandler;

    return-object v0
.end method


# virtual methods
.method destroyTimeout(Ljava/lang/Runnable;)V
    .locals 4

    const-string v0, "Running destroyTimeout with runnable: "

    .line 70
    sget-object v1, Lcom/onesignal/OSTimeoutHandler;->SYNC_LOCK:Ljava/lang/Object;

    monitor-enter v1

    .line 71
    :try_start_0
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 72
    iget-object v0, p0, Lcom/onesignal/OSTimeoutHandler;->mHandler:Landroid/os/Handler;

    invoke-virtual {v0, p1}, Landroid/os/Handler;->removeCallbacks(Ljava/lang/Runnable;)V

    .line 73
    monitor-exit v1

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method startTimeout(JLjava/lang/Runnable;)V
    .locals 4

    const-string v0, "Running startTimeout with timeout: "

    .line 61
    sget-object v1, Lcom/onesignal/OSTimeoutHandler;->SYNC_LOCK:Ljava/lang/Object;

    monitor-enter v1

    .line 63
    :try_start_0
    invoke-virtual {p0, p3}, Lcom/onesignal/OSTimeoutHandler;->destroyTimeout(Ljava/lang/Runnable;)V

    .line 64
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1, p2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, " and runnable: "

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p3}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 65
    iget-object v0, p0, Lcom/onesignal/OSTimeoutHandler;->mHandler:Landroid/os/Handler;

    invoke-virtual {v0, p3, p1, p2}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    .line 66
    monitor-exit v1

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
