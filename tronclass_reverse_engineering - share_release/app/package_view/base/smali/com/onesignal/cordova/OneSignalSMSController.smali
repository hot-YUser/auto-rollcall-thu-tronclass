.class public Lcom/onesignal/cordova/OneSignalSMSController;
.super Ljava/lang/Object;
.source "OneSignalSMSController.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static logoutSMSNumber(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 69
    new-instance v0, Lcom/onesignal/cordova/OneSignalSMSController$3;

    invoke-direct {v0, p0}, Lcom/onesignal/cordova/OneSignalSMSController$3;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->logoutSMSNumber(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    const/4 p0, 0x1

    return p0
.end method

.method public static setSMSNumber(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 4

    const/4 v0, 0x0

    .line 16
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x1

    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    new-instance v3, Lcom/onesignal/cordova/OneSignalSMSController$1;

    invoke-direct {v3, p0}, Lcom/onesignal/cordova/OneSignalSMSController$1;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v1, p1, v3}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return v2

    :catchall_0
    move-exception p0

    .line 35
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static setUnauthenticatedEmail(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 2

    const/4 v0, 0x0

    .line 43
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    new-instance v1, Lcom/onesignal/cordova/OneSignalSMSController$2;

    invoke-direct {v1, p0}, Lcom/onesignal/cordova/OneSignalSMSController$2;-><init>(Lorg/apache/cordova/CallbackContext;)V

    const/4 p0, 0x0

    invoke-static {p1, p0, v1}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 62
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method
