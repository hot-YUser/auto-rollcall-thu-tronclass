.class public final Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;
.super Ljava/lang/Object;
.source "OSOutcomeEventParams.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\t\n\u0002\u0008\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\u0018\u00002\u00020\u0001B)\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0008\u0008\u0002\u0010\u0008\u001a\u00020\t\u00a2\u0006\u0002\u0010\nJ\u0006\u0010\u0017\u001a\u00020\u0018J\u0006\u0010\u0019\u001a\u00020\u001aJ\u0008\u0010\u001b\u001a\u00020\u0003H\u0016R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000b\u0010\u000cR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\r\u0010\u000eR\u001a\u0010\u0008\u001a\u00020\tX\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u000f\u0010\u0010\"\u0004\u0008\u0011\u0010\u0012R\u001a\u0010\u0006\u001a\u00020\u0007X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0013\u0010\u0014\"\u0004\u0008\u0015\u0010\u0016\u00a8\u0006\u001c"
    }
    d2 = {
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
        "",
        "outcomeId",
        "",
        "outcomeSource",
        "Lcom/onesignal/outcomes/domain/OSOutcomeSource;",
        "weight",
        "",
        "timestamp",
        "",
        "(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJ)V",
        "getOutcomeId",
        "()Ljava/lang/String;",
        "getOutcomeSource",
        "()Lcom/onesignal/outcomes/domain/OSOutcomeSource;",
        "getTimestamp",
        "()J",
        "setTimestamp",
        "(J)V",
        "getWeight",
        "()F",
        "setWeight",
        "(F)V",
        "isUnattributed",
        "",
        "toJSONObject",
        "Lorg/json/JSONObject;",
        "toString",
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
.field private final outcomeId:Ljava/lang/String;

.field private final outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

.field private timestamp:J

.field private weight:F


# direct methods
.method public constructor <init>(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJ)V
    .locals 1

    const-string v0, "outcomeId"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 8
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeId:Ljava/lang/String;

    .line 9
    iput-object p2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    .line 10
    iput p3, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->weight:F

    .line 11
    iput-wide p4, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->timestamp:J

    return-void
.end method

.method public synthetic constructor <init>(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJILkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 6

    and-int/lit8 p6, p6, 0x8

    if-eqz p6, :cond_0

    const-wide/16 p4, 0x0

    :cond_0
    move-wide v4, p4

    move-object v0, p0

    move-object v1, p1

    move-object v2, p2

    move v3, p3

    .line 7
    invoke-direct/range {v0 .. v5}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;-><init>(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJ)V

    return-void
.end method


# virtual methods
.method public final getOutcomeId()Ljava/lang/String;
    .locals 1

    .line 8
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeId:Ljava/lang/String;

    return-object v0
.end method

.method public final getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;
    .locals 1

    .line 9
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    return-object v0
.end method

.method public final getTimestamp()J
    .locals 2

    .line 11
    iget-wide v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->timestamp:J

    return-wide v0
.end method

.method public final getWeight()F
    .locals 1

    .line 10
    iget v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->weight:F

    return v0
.end method

.method public final isUnattributed()Z
    .locals 1

    .line 25
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    if-eqz v0, :cond_1

    invoke-virtual {v0}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v0

    if-nez v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v0

    if-nez v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method public final setTimestamp(J)V
    .locals 0

    .line 11
    iput-wide p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->timestamp:J

    return-void
.end method

.method public final setWeight(F)V
    .locals 0

    .line 10
    iput p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->weight:F

    return-void
.end method

.method public final toJSONObject()Lorg/json/JSONObject;
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 15
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 16
    const-string v1, "id"

    iget-object v2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object v0

    .line 17
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    if-nez v1, :cond_0

    goto :goto_0

    .line 18
    :cond_0
    const-string v2, "sources"

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 20
    :goto_0
    iget v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->weight:F

    const/4 v2, 0x0

    cmpl-float v2, v1, v2

    if-lez v2, :cond_1

    const-string v2, "weight"

    invoke-static {v1}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 21
    :cond_1
    iget-wide v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->timestamp:J

    const-wide/16 v3, 0x0

    cmp-long v3, v1, v3

    if-lez v3, :cond_2

    const-string v3, "timestamp"

    invoke-virtual {v0, v3, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;J)Lorg/json/JSONObject;

    .line 22
    :cond_2
    const-string v1, "json"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 28
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSOutcomeEventParams{outcomeId=\'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 29
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeId:Ljava/lang/String;

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 29
    const-string v1, "\', outcomeSource="

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 30
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->outcomeSource:Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 31
    const-string v1, ", weight="

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 31
    iget v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->weight:F

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 32
    const-string v1, ", timestamp="

    .line 28
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 32
    iget-wide v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->timestamp:J

    .line 28
    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
