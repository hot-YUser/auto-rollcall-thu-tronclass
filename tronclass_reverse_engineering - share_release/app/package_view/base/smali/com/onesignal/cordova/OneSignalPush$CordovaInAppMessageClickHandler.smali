.class Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;
.super Ljava/lang/Object;
.source "OneSignalPush.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/cordova/OneSignalPush;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "CordovaInAppMessageClickHandler"
.end annotation


# instance fields
.field private jsInAppMessageClickedCallback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 503
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 504
    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;->jsInAppMessageClickedCallback:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method public inAppMessageClicked(Lcom/onesignal/OSInAppMessageAction;)V
    .locals 6

    .line 510
    const-string v0, "tags"

    const-string v1, "outcomes"

    const-string v2, "closes_message"

    const-string v3, "first_click"

    :try_start_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p1

    .line 511
    new-instance v4, Lorg/json/JSONObject;

    invoke-direct {v4}, Lorg/json/JSONObject;-><init>()V

    .line 514
    invoke-virtual {p1, v3}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v5

    if-eqz v5, :cond_0

    .line 515
    const-string v5, "firstClick"

    invoke-virtual {p1, v3}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v3

    invoke-virtual {v4, v5, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 517
    :cond_0
    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 518
    const-string v3, "closesMessage"

    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v2

    invoke-virtual {v4, v3, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 520
    :cond_1
    const-string v2, "clickName"

    const-string v3, "click_name"

    const/4 v5, 0x0

    invoke-virtual {p1, v3, v5}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v4, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 521
    const-string v2, "clickUrl"

    const-string v3, "click_url"

    invoke-virtual {p1, v3, v5}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v4, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 522
    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v2

    invoke-virtual {v4, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 523
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    invoke-virtual {v4, v0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 525
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;->jsInAppMessageClickedCallback:Lorg/apache/cordova/CallbackContext;

    invoke-static {p1, v4}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 528
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
