.class Lcom/onesignal/cordova/OneSignalObserverController$3;
.super Ljava/lang/Object;
.source "OneSignalObserverController.java"

# interfaces
.implements Lcom/onesignal/OSEmailSubscriptionObserver;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalObserverController;->addEmailSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 106
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onOSEmailSubscriptionChanged(Lcom/onesignal/OSEmailSubscriptionStateChanges;)V
    .locals 3

    .line 109
    invoke-virtual {p1}, Lcom/onesignal/OSEmailSubscriptionStateChanges;->getFrom()Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSEmailSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    .line 110
    invoke-virtual {p1}, Lcom/onesignal/OSEmailSubscriptionStateChanges;->getTo()Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/OSEmailSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    .line 113
    const-string v1, "isSubscribed"

    const-string v2, "isEmailSubscribed"

    invoke-static {v0, p1, v1, v2}, Lcom/onesignal/cordova/OneSignalObserverController;->access$300(Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 115
    invoke-static {}, Lcom/onesignal/cordova/OneSignalObserverController;->access$400()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-static {v0, p1}, Lcom/onesignal/cordova/OneSignalObserverController;->access$100(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
