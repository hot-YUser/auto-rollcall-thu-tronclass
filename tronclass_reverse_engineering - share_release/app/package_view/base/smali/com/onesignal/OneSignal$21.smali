.class Lcom/onesignal/OneSignal$21;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->postNotification(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
    .locals 0

    .line 2071
    iput-object p1, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 2090
    const-string v0, "create notification failed"

    invoke-static {v0, p1, p3, p2}, Lcom/onesignal/OneSignal;->logHttpError(Ljava/lang/String;ILjava/lang/Throwable;Ljava/lang/String;)V

    .line 2091
    iget-object p3, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    if-eqz p3, :cond_1

    if-nez p1, :cond_0

    .line 2094
    :try_start_0
    const-string p2, "{\"error\": \"HTTP no response error\"}"

    .line 2096
    :cond_0
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1, p2}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-interface {p3, p1}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onFailure(Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    .line 2099
    :catchall_0
    :try_start_1
    iget-object p1, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    new-instance p2, Lorg/json/JSONObject;

    const-string p3, "{\"error\": \"Unknown response!\"}"

    invoke-direct {p2, p3}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-interface {p1, p2}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onFailure(Lorg/json/JSONObject;)V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 2101
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_1
    :goto_0
    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 3

    .line 2074
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "HTTP create notification success: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    if-eqz p1, :cond_0

    move-object v2, p1

    goto :goto_0

    :cond_0
    const-string v2, "null"

    :goto_0
    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2075
    iget-object v0, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    if-eqz v0, :cond_2

    .line 2077
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 2078
    const-string v1, "errors"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 2079
    iget-object p1, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    invoke-interface {p1, v0}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onFailure(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 2081
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OneSignal$21;->val$handler:Lcom/onesignal/OneSignal$PostNotificationResponseHandler;

    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onSuccess(Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception p1

    .line 2083
    invoke-virtual {p1}, Ljava/lang/Throwable;->printStackTrace()V

    :cond_2
    :goto_1
    return-void
.end method
