.class Lcom/onesignal/cordova/OneSignalController$2;
.super Ljava/lang/Object;
.source "OneSignalController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$PostNotificationResponseHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalController;->postNotification(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$jsPostNotificationCallBack:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 129
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalController$2;->val$jsPostNotificationCallBack:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Lorg/json/JSONObject;)V
    .locals 1

    .line 137
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$2;->val$jsPostNotificationCallBack:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackError(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method

.method public onSuccess(Lorg/json/JSONObject;)V
    .locals 1

    .line 132
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$2;->val$jsPostNotificationCallBack:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
