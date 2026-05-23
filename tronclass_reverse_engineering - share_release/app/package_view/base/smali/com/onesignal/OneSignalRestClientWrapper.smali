.class Lcom/onesignal/OneSignalRestClientWrapper;
.super Ljava/lang/Object;
.source "OneSignalRestClientWrapper.java"

# interfaces
.implements Lcom/onesignal/OneSignalAPIClient;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public get(Ljava/lang/String;Lcom/onesignal/OneSignalApiResponseHandler;Ljava/lang/String;)V
    .locals 1

    .line 41
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$3;

    invoke-direct {v0, p0, p2}, Lcom/onesignal/OneSignalRestClientWrapper$3;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, v0, p3}, Lcom/onesignal/OneSignalRestClient;->get(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V

    return-void
.end method

.method public getSync(Ljava/lang/String;Lcom/onesignal/OneSignalApiResponseHandler;Ljava/lang/String;)V
    .locals 1

    .line 56
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$4;

    invoke-direct {v0, p0, p2}, Lcom/onesignal/OneSignalRestClientWrapper$4;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, v0, p3}, Lcom/onesignal/OneSignalRestClient;->getSync(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V

    return-void
.end method

.method public post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
    .locals 1

    .line 26
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$2;

    invoke-direct {v0, p0, p3}, Lcom/onesignal/OneSignalRestClientWrapper$2;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignalRestClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    return-void
.end method

.method public postSync(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
    .locals 1

    .line 86
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$6;

    invoke-direct {v0, p0, p3}, Lcom/onesignal/OneSignalRestClientWrapper$6;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignalRestClient;->postSync(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    return-void
.end method

.method public put(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
    .locals 1

    .line 11
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$1;

    invoke-direct {v0, p0, p3}, Lcom/onesignal/OneSignalRestClientWrapper$1;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignalRestClient;->put(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    return-void
.end method

.method public putSync(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
    .locals 1

    .line 71
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper$5;

    invoke-direct {v0, p0, p3}, Lcom/onesignal/OneSignalRestClientWrapper$5;-><init>(Lcom/onesignal/OneSignalRestClientWrapper;Lcom/onesignal/OneSignalApiResponseHandler;)V

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignalRestClient;->putSync(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    return-void
.end method
