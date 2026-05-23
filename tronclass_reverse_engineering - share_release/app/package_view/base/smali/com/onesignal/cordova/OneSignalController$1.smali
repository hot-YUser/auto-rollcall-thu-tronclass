.class Lcom/onesignal/cordova/OneSignalController$1;
.super Ljava/lang/Object;
.source "OneSignalController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalController;->setLanguage(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$jsSetLanguageCallback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 56
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalController$1;->val$jsSetLanguageCallback:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Lcom/onesignal/OneSignal$OSLanguageError;)V
    .locals 3

    const-string v0, "{\'error\' : \'"

    .line 74
    :try_start_0
    new-instance v1, Lorg/json/JSONObject;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OneSignal$OSLanguageError;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\'}"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v1, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 75
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalController$1;->val$jsSetLanguageCallback:Lorg/apache/cordova/CallbackContext;

    invoke-static {p1, v1}, Lcom/onesignal/cordova/CallbackHelper;->callbackError(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 77
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 60
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    const-string v1, "{\'success\' : \'true\'}"

    invoke-direct {v0, v1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    if-eqz p1, :cond_0

    .line 62
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 64
    :cond_0
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalController$1;->val$jsSetLanguageCallback:Lorg/apache/cordova/CallbackContext;

    invoke-static {p1, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 67
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
