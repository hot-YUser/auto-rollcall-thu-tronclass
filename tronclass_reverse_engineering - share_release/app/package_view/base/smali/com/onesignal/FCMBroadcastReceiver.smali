.class public Lcom/onesignal/FCMBroadcastReceiver;
.super Landroidx/legacy/content/WakefulBroadcastReceiver;
.source "FCMBroadcastReceiver.java"


# static fields
.field private static final FCM_RECEIVE_ACTION:Ljava/lang/String; = "com.google.android.c2dm.intent.RECEIVE"

.field private static final FCM_TYPE:Ljava/lang/String; = "gcm"

.field private static final MESSAGE_TYPE_EXTRA_KEY:Ljava/lang/String; = "message_type"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 48
    invoke-direct {p0}, Landroidx/legacy/content/WakefulBroadcastReceiver;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/FCMBroadcastReceiver;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Lcom/onesignal/FCMBroadcastReceiver;->setSuccessfulResultCode()V

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/FCMBroadcastReceiver;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Lcom/onesignal/FCMBroadcastReceiver;->setAbort()V

    return-void
.end method

.method private static isFCMMessage(Landroid/content/Intent;)Z
    .locals 2

    .line 55
    const-string v0, "com.google.android.c2dm.intent.RECEIVE"

    invoke-virtual {p0}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_1

    .line 56
    const-string v0, "message_type"

    invoke-virtual {p0, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_0

    .line 57
    const-string v0, "gcm"

    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_1

    :cond_0
    const/4 v1, 0x1

    :cond_1
    return v1
.end method

.method private static processOrderBroadcast(Landroid/content/Context;Landroid/content/Intent;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V
    .locals 0

    .line 122
    invoke-static {p1}, Lcom/onesignal/FCMBroadcastReceiver;->isFCMMessage(Landroid/content/Intent;)Z

    move-result p1

    if-nez p1, :cond_0

    const/4 p1, 0x0

    .line 123
    invoke-interface {p3, p1}, Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;->onBundleProcessed(Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;)V

    .line 125
    :cond_0
    new-instance p1, Lcom/onesignal/FCMBroadcastReceiver$2;

    invoke-direct {p1, p3, p0, p2}, Lcom/onesignal/FCMBroadcastReceiver$2;-><init>(Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;Landroid/content/Context;Landroid/os/Bundle;)V

    .line 139
    invoke-static {p0, p2, p1}, Lcom/onesignal/NotificationBundleProcessor;->processBundleFromReceiver(Landroid/content/Context;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V

    return-void
.end method

.method private setAbort()V
    .locals 1

    .line 103
    invoke-virtual {p0}, Lcom/onesignal/FCMBroadcastReceiver;->isOrderedBroadcast()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 105
    invoke-virtual {p0}, Lcom/onesignal/FCMBroadcastReceiver;->abortBroadcast()V

    const/4 v0, -0x1

    .line 116
    invoke-virtual {p0, v0}, Lcom/onesignal/FCMBroadcastReceiver;->setResultCode(I)V

    :cond_0
    return-void
.end method

.method private static setCompatBundleForServer(Landroid/os/Bundle;Lcom/onesignal/BundleCompat;)Lcom/onesignal/BundleCompat;
    .locals 4

    .line 197
    invoke-static {p0}, Lcom/onesignal/NotificationBundleProcessor;->bundleAsJSONObject(Landroid/os/Bundle;)Lorg/json/JSONObject;

    move-result-object p0

    invoke-virtual {p0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p0

    const-string v0, "json_payload"

    invoke-interface {p1, v0, p0}, Lcom/onesignal/BundleCompat;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 198
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object p0

    invoke-interface {p0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    const-wide/16 v2, 0x3e8

    div-long/2addr v0, v2

    invoke-static {v0, v1}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p0

    const-string v0, "timestamp"

    invoke-interface {p1, v0, p0}, Lcom/onesignal/BundleCompat;->putLong(Ljava/lang/String;Ljava/lang/Long;)V

    return-object p1
.end method

.method private setSuccessfulResultCode()V
    .locals 1

    .line 98
    invoke-virtual {p0}, Lcom/onesignal/FCMBroadcastReceiver;->isOrderedBroadcast()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, -0x1

    .line 99
    invoke-virtual {p0, v0}, Lcom/onesignal/FCMBroadcastReceiver;->setResultCode(I)V

    :cond_0
    return-void
.end method

.method static startFCMService(Landroid/content/Context;Landroid/os/Bundle;)V
    .locals 3

    .line 143
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "startFCMService from: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " and bundle: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 145
    invoke-static {p1}, Lcom/onesignal/NotificationBundleProcessor;->hasRemoteResource(Landroid/os/Bundle;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 146
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "startFCMService with no remote resources, no need for services"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 147
    invoke-static {}, Lcom/onesignal/BundleCompatFactory;->getInstance()Lcom/onesignal/BundleCompat;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/FCMBroadcastReceiver;->setCompatBundleForServer(Landroid/os/Bundle;Lcom/onesignal/BundleCompat;)Lcom/onesignal/BundleCompat;

    move-result-object p1

    .line 148
    invoke-static {p0, p1}, Lcom/onesignal/NotificationBundleProcessor;->processFromFCMIntentService(Landroid/content/Context;Lcom/onesignal/BundleCompat;)V

    return-void

    .line 152
    :cond_0
    const-string v0, "pri"

    const-string v1, "0"

    invoke-virtual {p1, v0, v1}, Landroid/os/Bundle;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v0

    const/16 v1, 0x9

    if-le v0, v1, :cond_1

    goto :goto_0

    .line 153
    :cond_1
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_2

    .line 154
    invoke-static {p0, p1}, Lcom/onesignal/FCMBroadcastReceiver;->startFCMServiceWithJobIntentService(Landroid/content/Context;Landroid/os/Bundle;)V

    goto :goto_1

    .line 157
    :cond_2
    :goto_0
    :try_start_0
    invoke-static {p0, p1}, Lcom/onesignal/FCMBroadcastReceiver;->startFCMServiceWithWakefulService(Landroid/content/Context;Landroid/os/Bundle;)V
    :try_end_0
    .catch Ljava/lang/IllegalStateException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    .line 162
    :catch_0
    invoke-static {p0, p1}, Lcom/onesignal/FCMBroadcastReceiver;->startFCMServiceWithJobIntentService(Landroid/content/Context;Landroid/os/Bundle;)V

    :goto_1
    return-void
.end method

.method private static startFCMServiceWithJobIntentService(Landroid/content/Context;Landroid/os/Bundle;)V
    .locals 2

    .line 176
    invoke-static {}, Lcom/onesignal/BundleCompatFactory;->getInstance()Lcom/onesignal/BundleCompat;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/FCMBroadcastReceiver;->setCompatBundleForServer(Landroid/os/Bundle;Lcom/onesignal/BundleCompat;)Lcom/onesignal/BundleCompat;

    move-result-object p1

    .line 178
    new-instance v0, Landroid/content/Intent;

    const-class v1, Lcom/onesignal/FCMIntentJobService;

    invoke-direct {v0, p0, v1}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 179
    invoke-interface {p1}, Lcom/onesignal/BundleCompat;->getBundle()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/os/Parcelable;

    const-string v1, "Bundle:Parcelable:Extras"

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 181
    invoke-static {p0, v0}, Lcom/onesignal/FCMIntentJobService;->enqueueWork(Landroid/content/Context;Landroid/content/Intent;)V

    return-void
.end method

.method private static startFCMServiceWithWakefulService(Landroid/content/Context;Landroid/os/Bundle;)V
    .locals 3

    .line 185
    new-instance v0, Landroid/content/ComponentName;

    .line 186
    invoke-virtual {p0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-class v2, Lcom/onesignal/FCMIntentService;

    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    invoke-direct {v0, v1, v2}, Landroid/content/ComponentName;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    .line 188
    new-instance v1, Lcom/onesignal/BundleCompatBundle;

    invoke-direct {v1}, Lcom/onesignal/BundleCompatBundle;-><init>()V

    invoke-static {p1, v1}, Lcom/onesignal/FCMBroadcastReceiver;->setCompatBundleForServer(Landroid/os/Bundle;Lcom/onesignal/BundleCompat;)Lcom/onesignal/BundleCompat;

    move-result-object p1

    .line 189
    new-instance v1, Landroid/content/Intent;

    invoke-direct {v1}, Landroid/content/Intent;-><init>()V

    .line 191
    invoke-interface {p1}, Lcom/onesignal/BundleCompat;->getBundle()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/os/Bundle;

    invoke-virtual {v1, p1}, Landroid/content/Intent;->replaceExtras(Landroid/os/Bundle;)Landroid/content/Intent;

    move-result-object p1

    .line 192
    invoke-virtual {p1, v0}, Landroid/content/Intent;->setComponent(Landroid/content/ComponentName;)Landroid/content/Intent;

    move-result-object p1

    .line 193
    invoke-static {p0, p1}, Lcom/onesignal/FCMBroadcastReceiver;->startWakefulService(Landroid/content/Context;Landroid/content/Intent;)Landroid/content/ComponentName;

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 3

    .line 66
    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 67
    const-string v1, "from"

    invoke-virtual {v0, v1}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v2, "google.com/iid"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_0

    .line 70
    :cond_0
    invoke-static {p1}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    .line 72
    new-instance v1, Lcom/onesignal/FCMBroadcastReceiver$1;

    invoke-direct {v1, p0}, Lcom/onesignal/FCMBroadcastReceiver$1;-><init>(Lcom/onesignal/FCMBroadcastReceiver;)V

    .line 94
    invoke-static {p1, p2, v0, v1}, Lcom/onesignal/FCMBroadcastReceiver;->processOrderBroadcast(Landroid/content/Context;Landroid/content/Intent;Landroid/os/Bundle;Lcom/onesignal/NotificationBundleProcessor$ProcessBundleReceiverCallback;)V

    :cond_1
    :goto_0
    return-void
.end method
