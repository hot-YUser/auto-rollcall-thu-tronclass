.class public Lcom/onesignal/cordova/OneSignalObserverController;
.super Ljava/lang/Object;
.source "OneSignalObserverController.java"


# static fields
.field private static emailSubscriptionObserver:Lcom/onesignal/OSEmailSubscriptionObserver;

.field private static jsEmailSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

.field private static jsPermissionObserverCallBack:Lorg/apache/cordova/CallbackContext;

.field private static jsSMSSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

.field private static jsSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

.field private static permissionObserver:Lcom/onesignal/OSPermissionObserver;

.field private static smsSubscriptionObserver:Lcom/onesignal/OSSMSSubscriptionObserver;

.field private static subscriptionObserver:Lcom/onesignal/OSSubscriptionObserver;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 21
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 21
    sget-object v0, Lcom/onesignal/cordova/OneSignalObserverController;->jsPermissionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$100(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    .locals 0

    .line 21
    invoke-static {p0, p1}, Lcom/onesignal/cordova/OneSignalObserverController;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method

.method static synthetic access$200()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 21
    sget-object v0, Lcom/onesignal/cordova/OneSignalObserverController;->jsSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$300(Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 0

    .line 21
    invoke-static {p0, p1, p2, p3}, Lcom/onesignal/cordova/OneSignalObserverController;->renameStateChangesKey(Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$400()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 21
    sget-object v0, Lcom/onesignal/cordova/OneSignalObserverController;->jsEmailSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$500()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 21
    sget-object v0, Lcom/onesignal/cordova/OneSignalObserverController;->jsSMSSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method public static addEmailSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 104
    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->jsEmailSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    .line 105
    sget-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->emailSubscriptionObserver:Lcom/onesignal/OSEmailSubscriptionObserver;

    if-nez p0, :cond_0

    .line 106
    new-instance p0, Lcom/onesignal/cordova/OneSignalObserverController$3;

    invoke-direct {p0}, Lcom/onesignal/cordova/OneSignalObserverController$3;-><init>()V

    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->emailSubscriptionObserver:Lcom/onesignal/OSEmailSubscriptionObserver;

    .line 118
    invoke-static {p0}, Lcom/onesignal/OneSignal;->addEmailSubscriptionObserver(Lcom/onesignal/OSEmailSubscriptionObserver;)V

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method public static addPermissionObserver(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 60
    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->jsPermissionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    .line 61
    sget-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->permissionObserver:Lcom/onesignal/OSPermissionObserver;

    if-nez p0, :cond_0

    .line 62
    new-instance p0, Lcom/onesignal/cordova/OneSignalObserverController$1;

    invoke-direct {p0}, Lcom/onesignal/cordova/OneSignalObserverController$1;-><init>()V

    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->permissionObserver:Lcom/onesignal/OSPermissionObserver;

    .line 84
    invoke-static {p0}, Lcom/onesignal/OneSignal;->addPermissionObserver(Lcom/onesignal/OSPermissionObserver;)V

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method public static addSMSSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 124
    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->jsSMSSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    .line 125
    sget-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->smsSubscriptionObserver:Lcom/onesignal/OSSMSSubscriptionObserver;

    if-nez p0, :cond_0

    .line 126
    new-instance p0, Lcom/onesignal/cordova/OneSignalObserverController$4;

    invoke-direct {p0}, Lcom/onesignal/cordova/OneSignalObserverController$4;-><init>()V

    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->smsSubscriptionObserver:Lcom/onesignal/OSSMSSubscriptionObserver;

    .line 138
    invoke-static {p0}, Lcom/onesignal/OneSignal;->addSMSSubscriptionObserver(Lcom/onesignal/OSSMSSubscriptionObserver;)V

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method public static addSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 90
    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->jsSubscriptionObserverCallBack:Lorg/apache/cordova/CallbackContext;

    .line 91
    sget-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->subscriptionObserver:Lcom/onesignal/OSSubscriptionObserver;

    if-nez p0, :cond_0

    .line 92
    new-instance p0, Lcom/onesignal/cordova/OneSignalObserverController$2;

    invoke-direct {p0}, Lcom/onesignal/cordova/OneSignalObserverController$2;-><init>()V

    sput-object p0, Lcom/onesignal/cordova/OneSignalObserverController;->subscriptionObserver:Lcom/onesignal/OSSubscriptionObserver;

    .line 98
    invoke-static {p0}, Lcom/onesignal/OneSignal;->addSubscriptionObserver(Lcom/onesignal/OSSubscriptionObserver;)V

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method private static callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    .locals 2

    if-nez p1, :cond_0

    .line 35
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1}, Lorg/json/JSONObject;-><init>()V

    .line 37
    :cond_0
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v1, p1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    const/4 p1, 0x1

    .line 38
    invoke-virtual {v0, p1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 39
    invoke-virtual {p0, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method

.method private static renameStateChangesKey(Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 2

    .line 45
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 47
    :try_start_0
    invoke-virtual {p0, p2}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v1

    invoke-virtual {p0, p3, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 48
    invoke-virtual {p0, p2}, Lorg/json/JSONObject;->remove(Ljava/lang/String;)Ljava/lang/Object;

    .line 49
    invoke-virtual {p1, p2}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v1

    invoke-virtual {p1, p3, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 50
    invoke-virtual {p1, p2}, Lorg/json/JSONObject;->remove(Ljava/lang/String;)Ljava/lang/Object;

    .line 51
    const-string p2, "from"

    invoke-virtual {v0, p2, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 52
    const-string p0, "to"

    invoke-virtual {v0, p0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 54
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-object v0
.end method
