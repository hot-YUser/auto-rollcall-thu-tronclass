.class Lcom/onesignal/UserStateSynchronizer$3;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "UserStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/UserStateSynchronizer;->doPutSync(Ljava/lang/String;Lorg/json/JSONObject;Lorg/json/JSONObject;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/UserStateSynchronizer;

.field final synthetic val$dependDiff:Lorg/json/JSONObject;

.field final synthetic val$jsonBody:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Lcom/onesignal/UserStateSynchronizer;Lorg/json/JSONObject;Lorg/json/JSONObject;)V
    .locals 0

    .line 357
    iput-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iput-object p2, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    iput-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$dependDiff:Lorg/json/JSONObject;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 360
    sget-object p3, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Failed PUT sync request with status code: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " and response: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p3, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 362
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object p3, p3, Lcom/onesignal/UserStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter p3

    .line 363
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const-string v1, "No user with this id found"

    invoke-static {v0, p1, p2, v1}, Lcom/onesignal/UserStateSynchronizer;->access$300(Lcom/onesignal/UserStateSynchronizer;ILjava/lang/String;Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 364
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {v0}, Lcom/onesignal/UserStateSynchronizer;->access$500(Lcom/onesignal/UserStateSynchronizer;)V

    goto :goto_0

    .line 366
    :cond_0
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {v0, p1}, Lcom/onesignal/UserStateSynchronizer;->access$600(Lcom/onesignal/UserStateSynchronizer;I)V

    .line 367
    :goto_0
    monitor-exit p3
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 369
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "tags"

    invoke-virtual {p3, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p3

    if-eqz p3, :cond_1

    .line 370
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    new-instance v0, Lcom/onesignal/OneSignal$SendTagsError;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/OneSignal$SendTagsError;-><init>(ILjava/lang/String;)V

    invoke-static {p3, v0}, Lcom/onesignal/UserStateSynchronizer;->access$700(Lcom/onesignal/UserStateSynchronizer;Lcom/onesignal/OneSignal$SendTagsError;)V

    .line 372
    :cond_1
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "external_user_id"

    invoke-virtual {p3, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p3

    if-eqz p3, :cond_2

    .line 373
    sget-object p3, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Error setting external user id for push with status code: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " and message: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p3, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 374
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p3}, Lcom/onesignal/UserStateSynchronizer;->access$800(Lcom/onesignal/UserStateSynchronizer;)V

    .line 377
    :cond_2
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "language"

    invoke-virtual {p3, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p3

    if-eqz p3, :cond_3

    .line 378
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    new-instance v0, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;-><init>(ILjava/lang/String;)V

    invoke-static {p3, v0}, Lcom/onesignal/UserStateSynchronizer;->access$900(Lcom/onesignal/UserStateSynchronizer;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;)V

    :cond_3
    return-void

    :catchall_0
    move-exception p1

    .line 367
    :try_start_1
    monitor-exit p3
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 3

    .line 383
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object p1, p1, Lcom/onesignal/UserStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter p1

    .line 384
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-virtual {v0}, Lcom/onesignal/UserStateSynchronizer;->getCurrentUserState()Lcom/onesignal/UserState;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$dependDiff:Lorg/json/JSONObject;

    iget-object v2, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/UserState;->persistStateAfterSync(Lorg/json/JSONObject;Lorg/json/JSONObject;)V

    .line 385
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    iget-object v1, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lcom/onesignal/UserStateSynchronizer;->onSuccessfulSync(Lorg/json/JSONObject;)V

    .line 386
    monitor-exit p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 388
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "tags"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 389
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$1000(Lcom/onesignal/UserStateSynchronizer;)V

    .line 391
    :cond_0
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "external_user_id"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 392
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$1100(Lcom/onesignal/UserStateSynchronizer;)V

    .line 394
    :cond_1
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->val$jsonBody:Lorg/json/JSONObject;

    const-string v0, "language"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 395
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$3;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$1200(Lcom/onesignal/UserStateSynchronizer;)V

    :cond_2
    return-void

    :catchall_0
    move-exception v0

    .line 386
    :try_start_1
    monitor-exit p1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method
