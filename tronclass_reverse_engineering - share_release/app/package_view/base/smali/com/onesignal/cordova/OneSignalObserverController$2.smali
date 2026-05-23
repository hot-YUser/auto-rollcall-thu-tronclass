.class Lcom/onesignal/cordova/OneSignalObserverController$2;
.super Ljava/lang/Object;
.source "OneSignalObserverController.java"

# interfaces
.implements Lcom/onesignal/OSSubscriptionObserver;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalObserverController;->addSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 92
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onOSSubscriptionChanged(Lcom/onesignal/OSSubscriptionStateChanges;)V
    .locals 1

    .line 95
    invoke-static {}, Lcom/onesignal/cordova/OneSignalObserverController;->access$200()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {p1}, Lcom/onesignal/OSSubscriptionStateChanges;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/OneSignalObserverController;->access$100(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
