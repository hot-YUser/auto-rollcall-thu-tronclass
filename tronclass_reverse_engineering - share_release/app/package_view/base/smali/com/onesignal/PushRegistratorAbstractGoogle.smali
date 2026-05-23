.class abstract Lcom/onesignal/PushRegistratorAbstractGoogle;
.super Ljava/lang/Object;
.source "PushRegistratorAbstractGoogle.java"

# interfaces
.implements Lcom/onesignal/PushRegistrator;


# static fields
.field private static REGISTRATION_RETRY_BACKOFF_MS:I = 0x2710

.field private static REGISTRATION_RETRY_COUNT:I = 0x5


# instance fields
.field private firedCallback:Z

.field private registerThread:Ljava/lang/Thread;

.field private registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()I
    .locals 1

    .line 37
    sget v0, Lcom/onesignal/PushRegistratorAbstractGoogle;->REGISTRATION_RETRY_COUNT:I

    return v0
.end method

.method static synthetic access$100(Lcom/onesignal/PushRegistratorAbstractGoogle;Ljava/lang/String;I)Z
    .locals 0

    .line 37
    invoke-direct {p0, p1, p2}, Lcom/onesignal/PushRegistratorAbstractGoogle;->attemptRegistration(Ljava/lang/String;I)Z

    move-result p0

    return p0
.end method

.method static synthetic access$200()I
    .locals 1

    .line 37
    sget v0, Lcom/onesignal/PushRegistratorAbstractGoogle;->REGISTRATION_RETRY_BACKOFF_MS:I

    return v0
.end method

.method private attemptRegistration(Ljava/lang/String;I)Z
    .locals 7

    .line 97
    const-string v0, " Token"

    .line 0
    const-string v1, "Device registered, push token = "

    const/4 v2, 0x0

    const/4 v3, 0x1

    .line 97
    :try_start_0
    invoke-virtual {p0, p1}, Lcom/onesignal/PushRegistratorAbstractGoogle;->getToken(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 98
    sget-object v4, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v4, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 99
    iget-object v1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-interface {v1, p1, v3}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return v3

    :catchall_0
    move-exception p1

    .line 133
    new-instance p2, Ljava/lang/Exception;

    invoke-direct {p2, p1}, Ljava/lang/Exception;-><init>(Ljava/lang/Throwable;)V

    .line 134
    invoke-static {p1}, Lcom/onesignal/PushRegistratorAbstractGoogle;->pushStatusFromThrowable(Ljava/lang/Throwable;)I

    move-result p1

    .line 135
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "Unknown error getting "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lcom/onesignal/PushRegistratorAbstractGoogle;->getProviderName()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 136
    iget-object p2, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-interface {p2, v2, p1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    return v3

    :catch_0
    move-exception p1

    .line 102
    invoke-static {p1}, Lcom/onesignal/PushRegistratorAbstractGoogle;->pushStatusFromThrowable(Ljava/lang/Throwable;)I

    move-result v1

    .line 103
    invoke-static {p1}, Lcom/onesignal/OSUtils;->getRootCauseMessage(Ljava/lang/Throwable;)Ljava/lang/String;

    move-result-object v4

    .line 104
    const-string v5, "SERVICE_NOT_AVAILABLE"

    .line 105
    invoke-virtual {v5, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_2

    const-string v5, "AUTHENTICATION_FAILED"

    .line 106
    invoke-virtual {v5, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_0

    goto :goto_0

    .line 125
    :cond_0
    new-instance p2, Ljava/lang/Exception;

    invoke-direct {p2, p1}, Ljava/lang/Exception;-><init>(Ljava/lang/Throwable;)V

    .line 126
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "Error Getting "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lcom/onesignal/PushRegistratorAbstractGoogle;->getProviderName()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p1, v0, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 127
    iget-boolean p1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->firedCallback:Z

    if-nez p1, :cond_1

    .line 128
    iget-object p1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-interface {p1, v2, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    :cond_1
    return v3

    .line 110
    :cond_2
    :goto_0
    new-instance v0, Ljava/lang/Exception;

    invoke-direct {v0, p1}, Ljava/lang/Exception;-><init>(Ljava/lang/Throwable;)V

    .line 111
    sget p1, Lcom/onesignal/PushRegistratorAbstractGoogle;->REGISTRATION_RETRY_COUNT:I

    sub-int/2addr p1, v3

    if-lt p2, p1, :cond_3

    .line 112
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "Retry count of "

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget v1, Lcom/onesignal/PushRegistratorAbstractGoogle;->REGISTRATION_RETRY_COUNT:I

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, " exceed! Could not get a "

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p0}, Lcom/onesignal/PushRegistratorAbstractGoogle;->getProviderName()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, " Token."

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    goto :goto_1

    .line 114
    :cond_3
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "\'Google Play services\' returned "

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const-string v5, " error. Current retry count: "

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-static {p1, v4, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    const/4 p1, 0x2

    if-ne p2, p1, :cond_4

    .line 117
    iget-object p1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-interface {p1, v2, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    .line 118
    iput-boolean v3, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->firedCallback:Z

    return v3

    :cond_4
    :goto_1
    const/4 p1, 0x0

    return p1
.end method

.method private internalRegisterForPush(Ljava/lang/String;)V
    .locals 4

    const/4 v0, 0x0

    .line 56
    :try_start_0
    invoke-static {}, Lcom/onesignal/OSUtils;->isGMSInstalledAndEnabled()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 57
    invoke-direct {p0, p1}, Lcom/onesignal/PushRegistratorAbstractGoogle;->registerInBackground(Ljava/lang/String;)V

    goto :goto_0

    .line 59
    :cond_0
    invoke-static {}, Lcom/onesignal/GooglePlayServicesUpgradePrompt;->showUpdateGPSDialog()V

    .line 60
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "\'Google Play services\' app not installed or disabled on the device."

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 61
    iget-object p1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    const/4 v1, -0x7

    invoke-interface {p1, v0, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 64
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Could not register with "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 67
    invoke-virtual {p0}, Lcom/onesignal/PushRegistratorAbstractGoogle;->getProviderName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, " due to an issue with your AndroidManifest.xml or with \'Google Play services\'."

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    .line 64
    invoke-static {v1, v2, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 71
    iget-object p1, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    const/4 v1, -0x8

    invoke-interface {p1, v0, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    :goto_0
    return-void
.end method

.method private isValidProjectNumber(Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)Z
    .locals 1

    .line 159
    :try_start_0
    invoke-static {p1}, Ljava/lang/Float;->parseFloat(Ljava/lang/String;)F
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p1, 0x1

    return p1

    .line 166
    :catchall_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Missing Google Project number!\nPlease enter a Google Project number / Sender ID on under App Settings > Android > Configuration on the OneSignal dashboard."

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 p1, 0x0

    const/4 v0, -0x6

    .line 167
    invoke-interface {p2, p1, v0}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    const/4 p1, 0x0

    return p1
.end method

.method private static pushStatusFromThrowable(Ljava/lang/Throwable;)I
    .locals 1

    .line 144
    invoke-static {p0}, Lcom/onesignal/OSUtils;->getRootCauseMessage(Ljava/lang/Throwable;)Ljava/lang/String;

    move-result-object v0

    .line 145
    instance-of p0, p0, Ljava/io/IOException;

    if-eqz p0, :cond_2

    .line 146
    const-string p0, "SERVICE_NOT_AVAILABLE"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_0

    const/16 p0, -0x9

    return p0

    .line 148
    :cond_0
    const-string p0, "AUTHENTICATION_FAILED"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_1

    const/16 p0, -0x1d

    return p0

    :cond_1
    const/16 p0, -0xb

    return p0

    :cond_2
    const/16 p0, -0xc

    return p0
.end method

.method private declared-synchronized registerInBackground(Ljava/lang/String;)V
    .locals 2

    monitor-enter p0

    .line 78
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registerThread:Ljava/lang/Thread;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Ljava/lang/Thread;->isAlive()Z

    move-result v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v0, :cond_0

    .line 79
    monitor-exit p0

    return-void

    .line 81
    :cond_0
    :try_start_1
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/PushRegistratorAbstractGoogle$1;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/PushRegistratorAbstractGoogle$1;-><init>(Lcom/onesignal/PushRegistratorAbstractGoogle;Ljava/lang/String;)V

    invoke-direct {v0, v1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    iput-object v0, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registerThread:Ljava/lang/Thread;

    .line 91
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 92
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


# virtual methods
.method abstract getProviderName()Ljava/lang/String;
.end method

.method abstract getToken(Ljava/lang/String;)Ljava/lang/String;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation
.end method

.method public registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 0

    .line 48
    iput-object p3, p0, Lcom/onesignal/PushRegistratorAbstractGoogle;->registeredHandler:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    .line 50
    invoke-direct {p0, p2, p3}, Lcom/onesignal/PushRegistratorAbstractGoogle;->isValidProjectNumber(Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 51
    invoke-direct {p0, p2}, Lcom/onesignal/PushRegistratorAbstractGoogle;->internalRegisterForPush(Ljava/lang/String;)V

    :cond_0
    return-void
.end method
