.class public abstract Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;
.super Ljava/lang/Object;
.source "OSOutcomeEventsClient.kt"

# interfaces
.implements Lcom/onesignal/outcomes/data/OutcomeEventsService;


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0008 \u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0018\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u000cH&R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u0005\u0010\u0006\u00a8\u0006\r"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;",
        "Lcom/onesignal/outcomes/data/OutcomeEventsService;",
        "client",
        "Lcom/onesignal/OneSignalAPIClient;",
        "(Lcom/onesignal/OneSignalAPIClient;)V",
        "getClient",
        "()Lcom/onesignal/OneSignalAPIClient;",
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


# instance fields
.field private final client:Lcom/onesignal/OneSignalAPIClient;


# direct methods
.method public constructor <init>(Lcom/onesignal/OneSignalAPIClient;)V
    .locals 1

    const-string v0, "client"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;->client:Lcom/onesignal/OneSignalAPIClient;

    return-void
.end method


# virtual methods
.method public final getClient()Lcom/onesignal/OneSignalAPIClient;
    .locals 1

    .line 7
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;->client:Lcom/onesignal/OneSignalAPIClient;

    return-object v0
.end method

.method public abstract sendOutcomeEvent(Lorg/json/JSONObject;Lcom/onesignal/OneSignalApiResponseHandler;)V
.end method
