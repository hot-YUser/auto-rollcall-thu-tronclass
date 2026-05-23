.class Lcom/onesignal/cordova/OneSignalController$3;
.super Ljava/lang/Object;
.source "OneSignalController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/cordova/OneSignalController;->promptForPushNotificationsWithUserResponse(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 194
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalController$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public response(Z)V
    .locals 1

    .line 197
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccessBoolean(Lorg/apache/cordova/CallbackContext;Z)V

    return-void
.end method
