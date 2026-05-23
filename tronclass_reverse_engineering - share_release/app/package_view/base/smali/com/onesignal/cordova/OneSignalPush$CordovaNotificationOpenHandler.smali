.class Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;
.super Ljava/lang/Object;
.source "OneSignalPush.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/cordova/OneSignalPush;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "CordovaNotificationOpenHandler"
.end annotation


# instance fields
.field private jsNotificationOpenedCallBack:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 484
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 485
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;->jsNotificationOpenedCallBack:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method public notificationOpened(Lcom/onesignal/OSNotificationOpenedResult;)V
    .locals 1

    .line 491
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;->jsNotificationOpenedCallBack:Lorg/apache/cordova/CallbackContext;

    if-eqz v0, :cond_0

    .line 492
    invoke-virtual {p1}, Lcom/onesignal/OSNotificationOpenedResult;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 494
    invoke-virtual {p1}, Ljava/lang/Throwable;->printStackTrace()V

    :cond_0
    :goto_0
    return-void
.end method
