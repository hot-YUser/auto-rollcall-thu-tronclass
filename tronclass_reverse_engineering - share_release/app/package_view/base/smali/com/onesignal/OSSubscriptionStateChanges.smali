.class public Lcom/onesignal/OSSubscriptionStateChanges;
.super Ljava/lang/Object;
.source "OSSubscriptionStateChanges.java"


# instance fields
.field private from:Lcom/onesignal/OSSubscriptionState;

.field private to:Lcom/onesignal/OSSubscriptionState;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSSubscriptionState;Lcom/onesignal/OSSubscriptionState;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    iput-object p1, p0, Lcom/onesignal/OSSubscriptionStateChanges;->from:Lcom/onesignal/OSSubscriptionState;

    .line 37
    iput-object p2, p0, Lcom/onesignal/OSSubscriptionStateChanges;->to:Lcom/onesignal/OSSubscriptionState;

    return-void
.end method


# virtual methods
.method public getFrom()Lcom/onesignal/OSSubscriptionState;
    .locals 1

    .line 45
    iget-object v0, p0, Lcom/onesignal/OSSubscriptionStateChanges;->from:Lcom/onesignal/OSSubscriptionState;

    return-object v0
.end method

.method public getTo()Lcom/onesignal/OSSubscriptionState;
    .locals 1

    .line 41
    iget-object v0, p0, Lcom/onesignal/OSSubscriptionStateChanges;->to:Lcom/onesignal/OSSubscriptionState;

    return-object v0
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 49
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 52
    :try_start_0
    const-string v1, "from"

    iget-object v2, p0, Lcom/onesignal/OSSubscriptionStateChanges;->from:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {v2}, Lcom/onesignal/OSSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 53
    const-string v1, "to"

    iget-object v2, p0, Lcom/onesignal/OSSubscriptionStateChanges;->to:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {v2}, Lcom/onesignal/OSSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    .line 56
    invoke-virtual {v1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 64
    invoke-virtual {p0}, Lcom/onesignal/OSSubscriptionStateChanges;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
