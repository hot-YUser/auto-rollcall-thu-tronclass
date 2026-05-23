.class public Lcom/onesignal/OSOutcomeEvent;
.super Ljava/lang/Object;
.source "OSOutcomeEvent.java"


# static fields
.field private static final NOTIFICATION_IDS:Ljava/lang/String; = "notification_ids"

.field private static final OUTCOME_ID:Ljava/lang/String; = "id"

.field private static final SESSION:Ljava/lang/String; = "session"

.field private static final TIMESTAMP:Ljava/lang/String; = "timestamp"

.field private static final WEIGHT:Ljava/lang/String; = "weight"


# instance fields
.field private name:Ljava/lang/String;

.field private notificationIds:Lorg/json/JSONArray;

.field private session:Lcom/onesignal/influence/domain/OSInfluenceType;

.field private timestamp:J

.field private weight:Ljava/lang/Float;


# direct methods
.method public constructor <init>(Lcom/onesignal/influence/domain/OSInfluenceType;Lorg/json/JSONArray;Ljava/lang/String;JF)V
    .locals 0

    .line 28
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 29
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 30
    iput-object p2, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    .line 31
    iput-object p3, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    .line 32
    iput-wide p4, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    .line 33
    invoke-static {p6}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    return-void
.end method

.method public static fromOutcomeEventParamsV2toOutcomeEventV1(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)Lcom/onesignal/OSOutcomeEvent;
    .locals 9

    .line 40
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 42
    invoke-virtual {p0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 43
    invoke-virtual {p0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v1

    .line 44
    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    if-eqz v2, :cond_0

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v2

    if-eqz v2, :cond_0

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v2

    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-lez v2, :cond_0

    .line 45
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 46
    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v1

    goto :goto_0

    .line 47
    :cond_0
    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    if-eqz v2, :cond_1

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v2

    if-eqz v2, :cond_1

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v2

    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-lez v2, :cond_1

    .line 48
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 49
    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    move-object v3, v0

    move-object v4, v1

    .line 53
    new-instance v0, Lcom/onesignal/OSOutcomeEvent;

    invoke-virtual {p0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeId()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {p0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getTimestamp()J

    move-result-wide v6

    invoke-virtual {p0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getWeight()F

    move-result v8

    move-object v2, v0

    invoke-direct/range {v2 .. v8}, Lcom/onesignal/OSOutcomeEvent;-><init>(Lcom/onesignal/influence/domain/OSInfluenceType;Lorg/json/JSONArray;Ljava/lang/String;JF)V

    return-object v0
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 6

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    :cond_0
    const/4 v1, 0x0

    if-eqz p1, :cond_3

    .line 103
    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v3

    if-eq v2, v3, :cond_1

    goto :goto_1

    .line 106
    :cond_1
    check-cast p1, Lcom/onesignal/OSOutcomeEvent;

    .line 107
    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    iget-object v3, p1, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v2, v3}, Lcom/onesignal/influence/domain/OSInfluenceType;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_2

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    iget-object v3, p1, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    .line 108
    invoke-virtual {v2, v3}, Lorg/json/JSONArray;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_2

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    iget-object v3, p1, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    .line 109
    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_2

    iget-wide v2, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    iget-wide v4, p1, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    cmp-long v2, v2, v4

    if-nez v2, :cond_2

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    iget-object p1, p1, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    .line 111
    invoke-virtual {v2, p1}, Ljava/lang/Float;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_0

    :cond_2
    move v0, v1

    :goto_0
    return v0

    :cond_3
    :goto_1
    return v1
.end method

.method public getName()Ljava/lang/String;
    .locals 1

    .line 65
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    return-object v0
.end method

.method public getNotificationIds()Lorg/json/JSONArray;
    .locals 1

    .line 61
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    return-object v0
.end method

.method public getSession()Lcom/onesignal/influence/domain/OSInfluenceType;
    .locals 1

    .line 57
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    return-object v0
.end method

.method public getTimestamp()J
    .locals 2

    .line 69
    iget-wide v0, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    return-wide v0
.end method

.method public getWeight()F
    .locals 1

    .line 73
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    invoke-virtual {v0}, Ljava/lang/Float;->floatValue()F

    move-result v0

    return v0
.end method

.method public hashCode()I
    .locals 5

    .line 116
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    iget-wide v3, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    invoke-static {v3, v4}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v3

    iget-object v4, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    filled-new-array {v0, v1, v2, v3, v4}, [Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x1

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    const/4 v4, 0x5

    if-ge v3, v4, :cond_1

    .line 120
    aget-object v4, v0, v3

    mul-int/lit8 v1, v1, 0x1f

    if-nez v4, :cond_0

    move v4, v2

    goto :goto_1

    .line 121
    :cond_0
    invoke-virtual {v4}, Ljava/lang/Object;->hashCode()I

    move-result v4

    :goto_1
    add-int/2addr v1, v4

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_1
    return v1
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 77
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 78
    const-string v1, "session"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 79
    const-string v1, "notification_ids"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 80
    const-string v1, "id"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 81
    const-string v1, "timestamp"

    iget-wide v2, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    invoke-virtual {v0, v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;J)Lorg/json/JSONObject;

    .line 82
    const-string v1, "weight"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-object v0
.end method

.method public toJSONObjectForMeasure()Lorg/json/JSONObject;
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 87
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 88
    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    if-eqz v1, :cond_0

    invoke-virtual {v1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-lez v1, :cond_0

    .line 89
    const-string v1, "notification_ids"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 90
    :cond_0
    const-string v1, "id"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 91
    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    invoke-virtual {v1}, Ljava/lang/Float;->floatValue()F

    move-result v1

    const/4 v2, 0x0

    cmpl-float v1, v1, v2

    if-lez v1, :cond_1

    .line 92
    const-string v1, "weight"

    iget-object v2, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 93
    :cond_1
    iget-wide v1, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    const-wide/16 v3, 0x0

    cmp-long v3, v1, v3

    if-lez v3, :cond_2

    .line 94
    const-string v3, "timestamp"

    invoke-virtual {v0, v3, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;J)Lorg/json/JSONObject;

    :cond_2
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 128
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OutcomeEvent{session="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->session:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", notificationIds="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->notificationIds:Lorg/json/JSONArray;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", name=\'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->name:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', timestamp="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/onesignal/OSOutcomeEvent;->timestamp:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", weight="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEvent;->weight:Ljava/lang/Float;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
