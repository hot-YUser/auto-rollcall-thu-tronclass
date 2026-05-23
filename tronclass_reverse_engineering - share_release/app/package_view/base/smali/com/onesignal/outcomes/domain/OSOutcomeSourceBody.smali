.class public final Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;
.super Ljava/lang/Object;
.source "OSOutcomeSourceBody.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u001f\u0008\u0007\u0012\n\u0008\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\u0008\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u00a2\u0006\u0002\u0010\u0005J\u0006\u0010\u000c\u001a\u00020\rJ\u0008\u0010\u000e\u001a\u00020\u000fH\u0016R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0006\u0010\u0007\"\u0004\u0008\u0008\u0010\tR\u001c\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\n\u0010\u0007\"\u0004\u0008\u000b\u0010\t\u00a8\u0006\u0010"
    }
    d2 = {
        "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;",
        "",
        "notificationIds",
        "Lorg/json/JSONArray;",
        "inAppMessagesIds",
        "(Lorg/json/JSONArray;Lorg/json/JSONArray;)V",
        "getInAppMessagesIds",
        "()Lorg/json/JSONArray;",
        "setInAppMessagesIds",
        "(Lorg/json/JSONArray;)V",
        "getNotificationIds",
        "setNotificationIds",
        "toJSONObject",
        "Lorg/json/JSONObject;",
        "toString",
        "",
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
.field private inAppMessagesIds:Lorg/json/JSONArray;

.field private notificationIds:Lorg/json/JSONArray;


# direct methods
.method public constructor <init>()V
    .locals 2

    const/4 v0, 0x0

    const/4 v1, 0x3

    invoke-direct {p0, v0, v0, v1, v0}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>(Lorg/json/JSONArray;Lorg/json/JSONArray;ILkotlin/jvm/internal/DefaultConstructorMarker;)V

    return-void
.end method

.method public constructor <init>(Lorg/json/JSONArray;)V
    .locals 2

    const/4 v0, 0x0

    const/4 v1, 0x2

    invoke-direct {p0, p1, v0, v1, v0}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>(Lorg/json/JSONArray;Lorg/json/JSONArray;ILkotlin/jvm/internal/DefaultConstructorMarker;)V

    return-void
.end method

.method public constructor <init>(Lorg/json/JSONArray;Lorg/json/JSONArray;)V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->notificationIds:Lorg/json/JSONArray;

    iput-object p2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->inAppMessagesIds:Lorg/json/JSONArray;

    return-void
.end method

.method public synthetic constructor <init>(Lorg/json/JSONArray;Lorg/json/JSONArray;ILkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    and-int/lit8 p4, p3, 0x1

    if-eqz p4, :cond_0

    .line 8
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1}, Lorg/json/JSONArray;-><init>()V

    :cond_0
    and-int/lit8 p3, p3, 0x2

    if-eqz p3, :cond_1

    new-instance p2, Lorg/json/JSONArray;

    invoke-direct {p2}, Lorg/json/JSONArray;-><init>()V

    :cond_1
    invoke-direct {p0, p1, p2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>(Lorg/json/JSONArray;Lorg/json/JSONArray;)V

    return-void
.end method


# virtual methods
.method public final getInAppMessagesIds()Lorg/json/JSONArray;
    .locals 1

    .line 8
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->inAppMessagesIds:Lorg/json/JSONArray;

    return-object v0
.end method

.method public final getNotificationIds()Lorg/json/JSONArray;
    .locals 1

    .line 8
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->notificationIds:Lorg/json/JSONArray;

    return-object v0
.end method

.method public final setInAppMessagesIds(Lorg/json/JSONArray;)V
    .locals 0

    .line 8
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->inAppMessagesIds:Lorg/json/JSONArray;

    return-void
.end method

.method public final setNotificationIds(Lorg/json/JSONArray;)V
    .locals 0

    .line 8
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->notificationIds:Lorg/json/JSONArray;

    return-void
.end method

.method public final toJSONObject()Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 11
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 12
    const-string v1, "notification_ids"

    iget-object v2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->notificationIds:Lorg/json/JSONArray;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object v0

    .line 13
    const-string v1, "in_app_message_ids"

    iget-object v2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->inAppMessagesIds:Lorg/json/JSONArray;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "JSONObject()\n        .pu\u2026AM_IDS, inAppMessagesIds)"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 16
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSOutcomeSourceBody{notificationIds="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 17
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->notificationIds:Lorg/json/JSONArray;

    .line 16
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 18
    const-string v1, ", inAppMessagesIds="

    .line 16
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 18
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->inAppMessagesIds:Lorg/json/JSONArray;

    .line 16
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
