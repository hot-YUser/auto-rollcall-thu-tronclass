.class Lcom/onesignal/UserStatePush;
.super Lcom/onesignal/UserState;
.source "UserStatePush.java"


# direct methods
.method constructor <init>(Ljava/lang/String;Z)V
    .locals 0

    .line 8
    invoke-direct {p0, p1, p2}, Lcom/onesignal/UserState;-><init>(Ljava/lang/String;Z)V

    return-void
.end method

.method private getNotificationTypes()I
    .locals 4

    .line 24
    invoke-virtual {p0}, Lcom/onesignal/UserStatePush;->getDependValues()Lcom/onesignal/ImmutableJSONObject;

    move-result-object v0

    const-string v1, "subscribableStatus"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/ImmutableJSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    const/4 v1, -0x2

    if-ge v0, v1, :cond_0

    return v0

    .line 28
    :cond_0
    invoke-virtual {p0}, Lcom/onesignal/UserStatePush;->getDependValues()Lcom/onesignal/ImmutableJSONObject;

    move-result-object v0

    const-string v3, "androidPermission"

    invoke-virtual {v0, v3, v2}, Lcom/onesignal/ImmutableJSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    if-nez v0, :cond_1

    const/4 v0, 0x0

    return v0

    .line 32
    :cond_1
    invoke-virtual {p0}, Lcom/onesignal/UserStatePush;->getDependValues()Lcom/onesignal/ImmutableJSONObject;

    move-result-object v0

    const-string v3, "userSubscribePref"

    invoke-virtual {v0, v3, v2}, Lcom/onesignal/ImmutableJSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    if-nez v0, :cond_2

    return v1

    :cond_2
    return v2
.end method


# virtual methods
.method protected addDependFields()V
    .locals 2

    .line 19
    :try_start_0
    const-string v0, "notification_types"

    invoke-direct {p0}, Lcom/onesignal/UserStatePush;->getNotificationTypes()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {p0, v0, v1}, Lcom/onesignal/UserStatePush;->putOnSyncValues(Ljava/lang/String;Ljava/lang/Object;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method isSubscribed()Z
    .locals 1

    .line 40
    invoke-direct {p0}, Lcom/onesignal/UserStatePush;->getNotificationTypes()I

    move-result v0

    if-lez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method newInstance(Ljava/lang/String;)Lcom/onesignal/UserState;
    .locals 2

    .line 13
    new-instance v0, Lcom/onesignal/UserStatePush;

    const/4 v1, 0x0

    invoke-direct {v0, p1, v1}, Lcom/onesignal/UserStatePush;-><init>(Ljava/lang/String;Z)V

    return-object v0
.end method
