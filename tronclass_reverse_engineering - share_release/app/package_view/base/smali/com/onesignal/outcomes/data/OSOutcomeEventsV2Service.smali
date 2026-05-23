.class public final Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Service;
.super Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;
.source "OSOutcomeEventsV2Service.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0008\u0000\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0018\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\nH\u0016\u00a8\u0006\u000b"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Service;",
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;",
        "client",
        "Lcom/onesignal/OneSignalAPIClient;",
        "(Lcom/onesignal/OneSignalAPIClient;)V",
        "sendOutcomeEvent",
        "",
        "jsonObject",
        "Lorg/json/JSONObject;",
        "responseHandler",
        "Lcom/onesignal/OneSignalApiResponseHandler;",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# direct methods
.method public constructor <init>(Lcom/onesignal/OneSignalAPIClient;)V
    .locals 1

    const-string v0, "client"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 7
    invoke-direct {p0, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;-><init>(Lcom/onesignal/OneSignalAPIClient;)V

    return-void
.end method


# virtual methods
.method public sendOutcomeEvent(Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
    .locals 2

    const-string v0, "jsonObject"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "responseHandler"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 12
    invoke-virtual {p0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Service;->getClient()Lcom/onesignal/OneSignalAPIClient;

    move-result-object v0

    const-string v1, "outcomes/measure_sources"

    invoke-interface {v0, v1, p1, p2}, Lcom/onesignal/OneSignalAPIClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V

    return-void
.end method
