.class Lcom/onesignal/cordova/OneSignalObserverController$4;
.super Ljava/lang/Object;
.source "OneSignalObserverController.java"

# interfaces
.implements Lcom/onesignal/OSSMSSubscriptionObserver;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalObserverController;->addSMSSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 126
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSMSSubscriptionChanged(Lcom/onesignal/OSSMSSubscriptionStateChanges;)V
    .locals 3

    .line 129
    invoke-virtual {p1}, Lcom/onesignal/OSSMSSubscriptionStateChanges;->getFrom()Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSSMSSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    .line 130
    invoke-virtual {p1}, Lcom/onesignal/OSSMSSubscriptionStateChanges;->getTo()Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/OSSMSSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    .line 133
    const-string v1, "isSubscribed"

    const-string v2, "isSMSSubscribed"

    invoke-static {v0, p1, v1, v2}, Lcom/onesignal/cordova/OneSignalObserverController;->access$300(Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 135
    invoke-static {}, Lcom/onesignal/cordova/OneSignalObserverController;->access$500()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-static {v0, p1}, Lcom/onesignal/cordova/OneSignalObserverController;->access$100(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
