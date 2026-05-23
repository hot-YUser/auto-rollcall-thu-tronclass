.class public Lcom/onesignal/cordova/OneSignalOutcomeController;
.super Ljava/lang/Object;
.source "OneSignalOutcomeController.java"


# static fields
.field private static final TAG:Ljava/lang/String; = "OneSignalOutcome"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic lambda$sendOutcome$1(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;Lcom/onesignal/OSOutcomeEvent;)V
    .locals 1

    if-nez p2, :cond_0

    .line 44
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1}, Lorg/json/JSONObject;-><init>()V

    invoke-static {p0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    goto :goto_0

    .line 47
    :cond_0
    :try_start_0
    invoke-virtual {p2}, Lcom/onesignal/OSOutcomeEvent;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p2

    invoke-static {p0, p2}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 49
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "sendOutcome with name: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ", failed with message: "

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p0

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    const-string p1, "OneSignalOutcome"

    invoke-static {p1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method static synthetic lambda$sendOutcomeWithValue$2(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;FLcom/onesignal/OSOutcomeEvent;)V
    .locals 1

    if-nez p3, :cond_0

    .line 67
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1}, Lorg/json/JSONObject;-><init>()V

    invoke-static {p0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    goto :goto_0

    .line 70
    :cond_0
    :try_start_0
    invoke-virtual {p3}, Lcom/onesignal/OSOutcomeEvent;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p3

    invoke-static {p0, p3}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 72
    new-instance p3, Ljava/lang/StringBuilder;

    const-string v0, "sendOutcomeWithValue with name: "

    invoke-direct {p3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p3, " and value: "

    invoke-virtual {p1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ", failed with message: "

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p0

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    const-string p1, "OneSignalOutcome"

    invoke-static {p1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method static synthetic lambda$sendUniqueOutcome$0(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;Lcom/onesignal/OSOutcomeEvent;)V
    .locals 1

    if-nez p2, :cond_0

    .line 22
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1}, Lorg/json/JSONObject;-><init>()V

    invoke-static {p0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    goto :goto_0

    .line 25
    :cond_0
    :try_start_0
    invoke-virtual {p2}, Lcom/onesignal/OSOutcomeEvent;->toJSONObject()Lorg/json/JSONObject;

    move-result-object p2

    invoke-static {p0, p2}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 27
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "sendUniqueOutcome with name: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, ", failed with message: "

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p0

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    const-string p1, "OneSignalOutcome"

    invoke-static {p1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method public static sendOutcome(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 2

    const/4 v0, 0x0

    .line 41
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 42
    new-instance v1, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;-><init>(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;)V

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->sendOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p0, 0x1

    return p0

    :catch_0
    move-exception p0

    .line 55
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method

.method public static sendOutcomeWithValue(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 5

    const/4 v0, 0x0

    .line 63
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x1

    .line 64
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->optDouble(I)D

    move-result-wide v3

    invoke-static {v3, v4}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Double;->floatValue()F

    move-result p1

    .line 65
    new-instance v3, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda2;

    invoke-direct {v3, p0, v1, p1}, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda2;-><init>(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;F)V

    invoke-static {v1, p1, v3}, Lcom/onesignal/OneSignal;->sendOutcomeWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return v2

    :catch_0
    move-exception p0

    .line 78
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method

.method public static sendUniqueOutcome(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 2

    const/4 v0, 0x0

    .line 19
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 20
    new-instance v1, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda1;-><init>(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;)V

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->sendUniqueOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p0, 0x1

    return p0

    :catch_0
    move-exception p0

    .line 33
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method
