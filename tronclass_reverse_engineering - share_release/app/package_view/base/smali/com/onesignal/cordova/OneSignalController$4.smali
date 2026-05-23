.class Lcom/onesignal/cordova/OneSignalController$4;
.super Ljava/lang/Object;
.source "OneSignalController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalController;->setExternalUserId(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 262
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalController$4;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Lcom/onesignal/OneSignal$ExternalIdError;)V
    .locals 1

    .line 270
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$4;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Lcom/onesignal/OneSignal$ExternalIdError;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackError(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;)V

    return-void
.end method

.method public onSuccess(Lorg/json/JSONObject;)V
    .locals 1

    .line 265
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$4;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
