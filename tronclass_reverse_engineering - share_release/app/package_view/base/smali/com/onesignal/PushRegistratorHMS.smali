.class Lcom/onesignal/PushRegistratorHMS;
.super Ljava/lang/Object;
.source "PushRegistratorHMS.java"

# interfaces
.implements Lcom/onesignal/PushRegistrator;


# static fields
.field static final HMS_CLIENT_APP_ID:Ljava/lang/String; = "client/app_id"

.field private static final NEW_TOKEN_TIMEOUT_MS:I = 0x7530

.field private static callbackSuccessful:Z

.field private static registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/PushRegistratorHMS;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/huawei/hms/common/ApiException;
        }
    .end annotation

    .line 16
    invoke-direct {p0, p1, p2}, Lcom/onesignal/PushRegistratorHMS;->getHMSTokenTask(Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V

    return-void
.end method

.method private static doTimeOutWait()V
    .locals 2

    const-wide/16 v0, 0x7530

    .line 78
    :try_start_0
    invoke-static {v0, v1}, Ljava/lang/Thread;->sleep(J)V
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method static fireCallback(Ljava/lang/String;)V
    .locals 2

    .line 26
    sget-object v0, Lcom/onesignal/PushRegistratorHMS;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    if-nez v0, :cond_0

    return-void

    :cond_0
    const/4 v1, 0x1

    .line 28
    sput-boolean v1, Lcom/onesignal/PushRegistratorHMS;->callbackSuccessful:Z

    .line 29
    invoke-interface {v0, p0, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    return-void
.end method

.method private declared-synchronized getHMSTokenTask(Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/huawei/hms/common/ApiException;
        }
    .end annotation

    const-string v0, "Device registered for HMS, push token = "

    monitor-enter p0

    .line 58
    :try_start_0
    invoke-static {}, Lcom/onesignal/OSUtils;->hasAllHMSLibrariesForPushKit()Z

    move-result v1

    if-nez v1, :cond_0

    const/4 p1, 0x0

    const/16 v0, -0x1c

    .line 59
    invoke-interface {p2, p1, v0}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 60
    monitor-exit p0

    return-void

    .line 63
    :cond_0
    :try_start_1
    invoke-static {p1}, Lcom/huawei/agconnect/config/AGConnectServicesConfig;->fromContext(Landroid/content/Context;)Lcom/huawei/agconnect/config/AGConnectServicesConfig;

    move-result-object v1

    const-string v2, "client/app_id"

    invoke-virtual {v1, v2}, Lcom/huawei/agconnect/config/AGConnectServicesConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 64
    invoke-static {p1}, Lcom/huawei/hms/aaid/HmsInstanceId;->getInstance(Landroid/content/Context;)Lcom/huawei/hms/aaid/HmsInstanceId;

    move-result-object p1

    .line 66
    const-string v2, "HCM"

    invoke-virtual {p1, v1, v2}, Lcom/huawei/hms/aaid/HmsInstanceId;->getToken(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 68
    invoke-static {p1}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 69
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 70
    invoke-interface {p2, p1, v0}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    goto :goto_0

    .line 72
    :cond_1
    invoke-direct {p0, p2}, Lcom/onesignal/PushRegistratorHMS;->waitForOnNewPushTokenEvent(Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 74
    :goto_0
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    :try_start_2
    monitor-exit p0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw p1
.end method

.method private waitForOnNewPushTokenEvent(Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 2

    .line 86
    invoke-static {}, Lcom/onesignal/PushRegistratorHMS;->doTimeOutWait()V

    .line 87
    sget-boolean v0, Lcom/onesignal/PushRegistratorHMS;->callbackSuccessful:Z

    if-nez v0, :cond_0

    .line 88
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "HmsMessageServiceOneSignal.onNewToken timed out."

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x0

    const/16 v1, -0x19

    .line 89
    invoke-interface {p1, v0, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    :cond_0
    return-void
.end method


# virtual methods
.method public registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 1

    .line 34
    sput-object p3, Lcom/onesignal/PushRegistratorHMS;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    .line 35
    new-instance p2, Ljava/lang/Thread;

    new-instance v0, Lcom/onesignal/PushRegistratorHMS$1;

    invoke-direct {v0, p0, p1, p3}, Lcom/onesignal/PushRegistratorHMS$1;-><init>(Lcom/onesignal/PushRegistratorHMS;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V

    const-string p1, "OS_HMS_GET_TOKEN"

    invoke-direct {p2, v0, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 52
    invoke-virtual {p2}, Ljava/lang/Thread;->start()V

    return-void
.end method
