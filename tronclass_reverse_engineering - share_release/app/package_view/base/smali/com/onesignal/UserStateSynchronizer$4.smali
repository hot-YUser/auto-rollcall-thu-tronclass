.class Lcom/onesignal/UserStateSynchronizer$4;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "UserStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/UserStateSynchronizer;->doCreateOrNewSession(Ljava/lang/String;Lorg/json/JSONObject;Lorg/json/JSONObject;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/UserStateSynchronizer;

.field final synthetic val$dependDiff:Lorg/json/JSONObject;

.field final synthetic val$jsonBody:Lorg/json/JSONObject;

.field final synthetic val$userId:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/onesignal/UserStateSynchronizer;Lorg/json/JSONObject;Lorg/json/JSONObject;Ljava/lang/String;)V
    .locals 0

    .line 409
    iput-object p1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iput-object p2, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$dependDiff:Lorg/json/JSONObject;

    iput-object p3, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$jsonBody:Lorg/json/JSONObject;

    iput-object p4, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$userId:Ljava/lang/String;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 3

    const-string p3, "Failed last request. statusCode: "

    .line 412
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object v0, v0, Lcom/onesignal/UserStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 413
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const/4 v2, 0x0

    iput-boolean v2, v1, Lcom/onesignal/UserStateSynchronizer;->waitingForSessionResponse:Z

    .line 414
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string v2, "\nresponse: "

    invoke-virtual {p3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-static {v1, p3}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 416
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const-string v1, "not a valid device_type"

    invoke-static {p3, p1, p2, v1}, Lcom/onesignal/UserStateSynchronizer;->access$300(Lcom/onesignal/UserStateSynchronizer;ILjava/lang/String;Ljava/lang/String;)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 417
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$500(Lcom/onesignal/UserStateSynchronizer;)V

    goto :goto_0

    .line 419
    :cond_0
    iget-object p2, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p2, p1}, Lcom/onesignal/UserStateSynchronizer;->access$600(Lcom/onesignal/UserStateSynchronizer;I)V

    .line 420
    :goto_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 8

    const-string v0, "Device registered, UserId = "

    const-string v1, "session sent, UserId = "

    const-string v2, "doCreateOrNewSession:response: "

    .line 425
    iget-object v3, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object v3, v3, Lcom/onesignal/UserStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter v3

    .line 426
    :try_start_0
    iget-object v4, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const/4 v5, 0x0

    iput-boolean v5, v4, Lcom/onesignal/UserStateSynchronizer;->waitingForSessionResponse:Z

    .line 427
    iget-object v4, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-virtual {v4}, Lcom/onesignal/UserStateSynchronizer;->getCurrentUserState()Lcom/onesignal/UserState;

    move-result-object v4

    iget-object v6, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$dependDiff:Lorg/json/JSONObject;

    iget-object v7, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$jsonBody:Lorg/json/JSONObject;

    invoke-virtual {v4, v6, v7}, Lcom/onesignal/UserState;->persistStateAfterSync(Lorg/json/JSONObject;Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 430
    :try_start_1
    sget-object v4, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v6, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 431
    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 433
    const-string p1, "id"

    invoke-virtual {v2, p1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 434
    const-string p1, "id"

    invoke-virtual {v2, p1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 435
    iget-object v1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-virtual {v1, p1}, Lcom/onesignal/UserStateSynchronizer;->updateIdDependents(Ljava/lang/String;)V

    .line 436
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    goto :goto_0

    .line 439
    :cond_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$userId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 441
    :goto_0
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-virtual {p1}, Lcom/onesignal/UserStateSynchronizer;->getUserStateForModification()Lcom/onesignal/UserState;

    move-result-object p1

    const-string v0, "session"

    invoke-static {v5}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {p1, v0, v1}, Lcom/onesignal/UserState;->putOnDependValues(Ljava/lang/String;Ljava/lang/Object;)V

    .line 442
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-virtual {p1}, Lcom/onesignal/UserStateSynchronizer;->getUserStateForModification()Lcom/onesignal/UserState;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/UserState;->persistState()V

    .line 445
    const-string p1, "in_app_messages"

    invoke-virtual {v2, p1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 446
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object p1

    const-string v0, "in_app_messages"

    invoke-virtual {v2, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageController;->receivedInAppMessageJson(Lorg/json/JSONArray;)V

    .line 448
    :cond_1
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$4;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$4;->val$jsonBody:Lorg/json/JSONObject;

    invoke-virtual {p1, v0}, Lcom/onesignal/UserStateSynchronizer;->onSuccessfulSync(Lorg/json/JSONObject;)V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 450
    :try_start_2
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "ERROR parsing on_session or create JSON Response."

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 452
    :goto_1
    monitor-exit v3

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v3
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw p1
.end method
