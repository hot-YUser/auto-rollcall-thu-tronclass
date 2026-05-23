.class Lcom/onesignal/OSInAppMessageRepository$8;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "OSInAppMessageRepository.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageRepository;->getIAMData(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageRepository;

.field final synthetic val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageRepository;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 0

    .line 149
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository$8;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 152
    iget-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const-string v0, "html"

    invoke-static {p3, v0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository;->access$200(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;ILjava/lang/String;)V

    .line 153
    new-instance p2, Lorg/json/JSONObject;

    invoke-direct {p2}, Lorg/json/JSONObject;-><init>()V

    .line 155
    invoke-static {p1}, Lcom/onesignal/OSUtils;->shouldRetryNetworkRequest(I)Z

    move-result p1

    const-string p3, "retry"

    if-eqz p1, :cond_1

    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageRepository;->access$400(Lcom/onesignal/OSInAppMessageRepository;)I

    move-result p1

    sget v0, Lcom/onesignal/OSUtils;->MAX_NETWORK_REQUEST_ATTEMPT_COUNT:I

    if-lt p1, v0, :cond_0

    goto :goto_0

    .line 165
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageRepository;->access$408(Lcom/onesignal/OSInAppMessageRepository;)I

    const/4 p1, 0x1

    .line 167
    :try_start_0
    invoke-virtual {p2, p3, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 169
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    goto :goto_1

    .line 157
    :cond_1
    :goto_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageRepository;->access$402(Lcom/onesignal/OSInAppMessageRepository;I)I

    .line 159
    :try_start_1
    invoke-virtual {p2, p3, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    :catch_1
    move-exception p1

    .line 161
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 172
    :goto_1
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$8;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-virtual {p2}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-interface {p1, p2}, Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;->onFailure(Ljava/lang/String;)V

    return-void
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 178
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$8;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageRepository;->access$402(Lcom/onesignal/OSInAppMessageRepository;I)I

    .line 180
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$8;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-interface {v0, p1}, Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;->onSuccess(Ljava/lang/String;)V

    return-void
.end method
