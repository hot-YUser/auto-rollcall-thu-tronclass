.class public Lcom/onesignal/OSEmailSubscriptionStateChanges;
.super Ljava/lang/Object;
.source "OSEmailSubscriptionStateChanges.java"


# instance fields
.field private from:Lcom/onesignal/OSEmailSubscriptionState;

.field private to:Lcom/onesignal/OSEmailSubscriptionState;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSEmailSubscriptionState;Lcom/onesignal/OSEmailSubscriptionState;)V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    iput-object p1, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->from:Lcom/onesignal/OSEmailSubscriptionState;

    .line 38
    iput-object p2, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->to:Lcom/onesignal/OSEmailSubscriptionState;

    return-void
.end method


# virtual methods
.method public getFrom()Lcom/onesignal/OSEmailSubscriptionState;
    .locals 1

    .line 46
    iget-object v0, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->from:Lcom/onesignal/OSEmailSubscriptionState;

    return-object v0
.end method

.method public getTo()Lcom/onesignal/OSEmailSubscriptionState;
    .locals 1

    .line 42
    iget-object v0, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->to:Lcom/onesignal/OSEmailSubscriptionState;

    return-object v0
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 50
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 53
    :try_start_0
    const-string v1, "from"

    iget-object v2, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->from:Lcom/onesignal/OSEmailSubscriptionState;

    invoke-virtual {v2}, Lcom/onesignal/OSEmailSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 54
    const-string v1, "to"

    iget-object v2, p0, Lcom/onesignal/OSEmailSubscriptionStateChanges;->to:Lcom/onesignal/OSEmailSubscriptionState;

    invoke-virtual {v2}, Lcom/onesignal/OSEmailSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 56
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 64
    invoke-virtual {p0}, Lcom/onesignal/OSEmailSubscriptionStateChanges;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
