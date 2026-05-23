.class Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;
.super Ljava/lang/Object;
.source "OneSignalPush.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/cordova/OneSignalPush;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "CordovaNotificationInForegroundHandler"
.end annotation


# instance fields
.field private jsNotificationInForegroundCallBack:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 463
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 464
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;->jsNotificationInForegroundCallBack:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method public notificationWillShowInForeground(Lcom/onesignal/OSNotificationReceivedEvent;)V
    .locals 3

    .line 470
    :try_start_0
    invoke-virtual {p1}, Lcom/onesignal/OSNotificationReceivedEvent;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v0

    .line 471
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$400()Ljava/util/HashMap;

    move-result-object v1

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getNotificationId()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2, p1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 473
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;->jsNotificationInForegroundCallBack:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 475
    invoke-virtual {p1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-void
.end method
