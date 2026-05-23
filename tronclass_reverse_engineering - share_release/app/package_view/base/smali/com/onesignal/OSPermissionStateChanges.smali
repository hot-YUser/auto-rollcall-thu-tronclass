.class public Lcom/onesignal/OSPermissionStateChanges;
.super Ljava/lang/Object;
.source "OSPermissionStateChanges.java"


# instance fields
.field private from:Lcom/onesignal/OSPermissionState;

.field private to:Lcom/onesignal/OSPermissionState;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSPermissionState;Lcom/onesignal/OSPermissionState;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    iput-object p1, p0, Lcom/onesignal/OSPermissionStateChanges;->from:Lcom/onesignal/OSPermissionState;

    .line 37
    iput-object p2, p0, Lcom/onesignal/OSPermissionStateChanges;->to:Lcom/onesignal/OSPermissionState;

    return-void
.end method


# virtual methods
.method public getFrom()Lcom/onesignal/OSPermissionState;
    .locals 1

    .line 45
    iget-object v0, p0, Lcom/onesignal/OSPermissionStateChanges;->from:Lcom/onesignal/OSPermissionState;

    return-object v0
.end method

.method public getTo()Lcom/onesignal/OSPermissionState;
    .locals 1

    .line 41
    iget-object v0, p0, Lcom/onesignal/OSPermissionStateChanges;->to:Lcom/onesignal/OSPermissionState;

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

    iget-object v2, p0, Lcom/onesignal/OSPermissionStateChanges;->from:Lcom/onesignal/OSPermissionState;

    invoke-virtual {v2}, Lcom/onesignal/OSPermissionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 53
    const-string v1, "to"

    iget-object v2, p0, Lcom/onesignal/OSPermissionStateChanges;->to:Lcom/onesignal/OSPermissionState;

    invoke-virtual {v2}, Lcom/onesignal/OSPermissionState;->toJSONObject()Lorg/json/JSONObject;

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
    invoke-virtual {p0}, Lcom/onesignal/OSPermissionStateChanges;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
