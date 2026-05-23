.class Lcom/onesignal/cordova/OneSignalPush$1;
.super Lcom/onesignal/OSInAppMessageLifecycleHandler;
.source "OneSignalPush.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalPush;->setInAppMessageLifecycleHandler()Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/cordova/OneSignalPush;


# direct methods
.method constructor <init>(Lcom/onesignal/cordova/OneSignalPush;)V
    .locals 0

    .line 145
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$1;->this$0:Lcom/onesignal/cordova/OneSignalPush;

    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageLifecycleHandler;-><init>()V

    return-void
.end method


# virtual methods
.method public onDidDismissInAppMessage(Lcom/onesignal/OSInAppMessage;)V
    .locals 1

    .line 166
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$300()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 167
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$300()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessage;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    :cond_0
    return-void
.end method

.method public onDidDisplayInAppMessage(Lcom/onesignal/OSInAppMessage;)V
    .locals 1

    .line 154
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$100()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 155
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$100()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessage;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    :cond_0
    return-void
.end method

.method public onWillDismissInAppMessage(Lcom/onesignal/OSInAppMessage;)V
    .locals 1

    .line 160
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$200()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 161
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$200()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessage;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    :cond_0
    return-void
.end method

.method public onWillDisplayInAppMessage(Lcom/onesignal/OSInAppMessage;)V
    .locals 1

    .line 148
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$000()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 149
    invoke-static {}, Lcom/onesignal/cordova/OneSignalPush;->access$000()Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessage;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    :cond_0
    return-void
.end method
