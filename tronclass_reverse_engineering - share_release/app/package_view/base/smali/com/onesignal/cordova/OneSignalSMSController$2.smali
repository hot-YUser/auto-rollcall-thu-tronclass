.class Lcom/onesignal/cordova/OneSignalSMSController$2;
.super Ljava/lang/Object;
.source "OneSignalSMSController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSSMSUpdateHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalSMSController;->setUnauthenticatedEmail(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$jsSetSMSNumberContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 43
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalSMSController$2;->val$jsSetSMSNumberContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V
    .locals 3

    const-string v0, "{\'error\' : \'"

    .line 52
    :try_start_0
    new-instance v1, Lorg/json/JSONObject;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OneSignal$OSSMSUpdateError;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\'}"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v1, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 53
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalSMSController$2;->val$jsSetSMSNumberContext:Lorg/apache/cordova/CallbackContext;

    invoke-static {p1, v1}, Lcom/onesignal/cordova/CallbackHelper;->callbackError(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 55
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public onSuccess(Lorg/json/JSONObject;)V
    .locals 1

    .line 46
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalSMSController$2;->val$jsSetSMSNumberContext:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
