.class public Lcom/onesignal/OSInAppMessageOutcome;
.super Ljava/lang/Object;
.source "OSInAppMessageOutcome.java"


# static fields
.field private static final OUTCOME_NAME:Ljava/lang/String; = "name"

.field private static final OUTCOME_UNIQUE:Ljava/lang/String; = "unique"

.field private static final OUTCOME_WEIGHT:Ljava/lang/String; = "weight"


# instance fields
.field private name:Ljava/lang/String;

.field private unique:Z

.field private weight:F


# direct methods
.method constructor <init>(Lorg/json/JSONObject;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 21
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 22
    const-string v0, "name"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageOutcome;->name:Ljava/lang/String;

    .line 23
    const-string v0, "weight"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getDouble(Ljava/lang/String;)D

    move-result-wide v0

    double-to-float v0, v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    iput v0, p0, Lcom/onesignal/OSInAppMessageOutcome;->weight:F

    .line 24
    const-string v0, "unique"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_1

    const/4 p1, 0x1

    goto :goto_1

    :cond_1
    const/4 p1, 0x0

    :goto_1
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageOutcome;->unique:Z

    return-void
.end method


# virtual methods
.method public getName()Ljava/lang/String;
    .locals 1

    .line 41
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageOutcome;->name:Ljava/lang/String;

    return-object v0
.end method

.method public getWeight()F
    .locals 1

    .line 49
    iget v0, p0, Lcom/onesignal/OSInAppMessageOutcome;->weight:F

    return v0
.end method

.method public isUnique()Z
    .locals 1

    .line 57
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageOutcome;->unique:Z

    return v0
.end method

.method public setName(Ljava/lang/String;)V
    .locals 0

    .line 45
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageOutcome;->name:Ljava/lang/String;

    return-void
.end method

.method public setUnique(Z)V
    .locals 0

    .line 61
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageOutcome;->unique:Z

    return-void
.end method

.method public setWeight(F)V
    .locals 0

    .line 53
    iput p1, p0, Lcom/onesignal/OSInAppMessageOutcome;->weight:F

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 4

    .line 28
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 30
    :try_start_0
    const-string v1, "name"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageOutcome;->name:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 31
    const-string v1, "weight"

    iget v2, p0, Lcom/onesignal/OSInAppMessageOutcome;->weight:F

    float-to-double v2, v2

    invoke-virtual {v0, v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;D)Lorg/json/JSONObject;

    .line 32
    const-string v1, "unique"

    iget-boolean v2, p0, Lcom/onesignal/OSInAppMessageOutcome;->unique:Z

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 34
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 66
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSInAppMessageOutcome{name=\'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageOutcome;->name:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', weight="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/OSInAppMessageOutcome;->weight:F

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", unique="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageOutcome;->unique:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
