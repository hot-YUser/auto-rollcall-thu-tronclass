.class abstract Lcom/onesignal/UserStateSecondaryChannelSynchronizer;
.super Lcom/onesignal/UserStateSynchronizer;
.source "UserStateSecondaryChannelSynchronizer.java"


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;)V
    .locals 0

    .line 13
    invoke-direct {p0, p1}, Lcom/onesignal/UserStateSynchronizer;-><init>(Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;)V

    return-void
.end method


# virtual methods
.method protected addOnSessionOrCreateExtras(Lorg/json/JSONObject;)V
    .locals 2

    .line 95
    :try_start_0
    const-string v0, "device_type"

    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getDeviceType()I

    move-result v1

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 96
    const-string v0, "device_player_id"

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->putOpt(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 98
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method protected fireEventsForUpdateFailure(Lorg/json/JSONObject;)V
    .locals 1

    .line 104
    const-string v0, "identifier"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 105
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->fireUpdateFailure()V

    :cond_0
    return-void
.end method

.method abstract fireUpdateFailure()V
.end method

.method abstract fireUpdateSuccess(Lorg/json/JSONObject;)V
.end method

.method protected abstract getAuthHashKey()Ljava/lang/String;
.end method

.method protected abstract getChannelKey()Ljava/lang/String;
.end method

.method protected abstract getDeviceType()I
.end method

.method getExternalId(Z)Ljava/lang/String;
    .locals 0

    const/4 p1, 0x0

    return-object p1
.end method

.method protected abstract getId()Ljava/lang/String;
.end method

.method protected getLogLevel()Lcom/onesignal/OneSignal$LOG_LEVEL;
    .locals 1

    .line 39
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object v0
.end method

.method getSubscribed()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method getTags(Z)Lcom/onesignal/UserStateSynchronizer$GetTagsResult;
    .locals 0

    const/4 p1, 0x0

    return-object p1
.end method

.method public getUserSubscribePreference()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method abstract logoutChannel()V
.end method

.method protected abstract newUserState(Ljava/lang/String;Z)Lcom/onesignal/UserState;
.end method

.method protected onSuccessfulSync(Lorg/json/JSONObject;)V
    .locals 3

    .line 110
    const-string v0, "identifier"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 111
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 113
    :try_start_0
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getChannelKey()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 114
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 115
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {v1, v0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 117
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 119
    :cond_0
    :goto_0
    invoke-virtual {p0, v1}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->fireUpdateSuccess(Lorg/json/JSONObject;)V

    :cond_1
    return-void
.end method

.method refresh()V
    .locals 0

    .line 79
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->scheduleSyncToServer()V

    return-void
.end method

.method protected scheduleSyncToServer()V
    .locals 1

    .line 85
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getRegistrationId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    goto :goto_0

    .line 86
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_1

    :goto_0
    return-void

    :cond_1
    const/4 v0, 0x0

    .line 89
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getNetworkHandlerThread(Ljava/lang/Integer;)Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;->runNewJobDelayed()V

    return-void
.end method

.method setChannelId(Ljava/lang/String;Ljava/lang/String;)V
    .locals 6

    .line 124
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getUserStateForModification()Lcom/onesignal/UserState;

    move-result-object v0

    .line 125
    invoke-virtual {v0}, Lcom/onesignal/UserState;->getSyncValues()Lcom/onesignal/ImmutableJSONObject;

    move-result-object v1

    .line 127
    const-string v2, "identifier"

    invoke-virtual {v1, v2}, Lcom/onesignal/ImmutableJSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    const-string v4, ""

    if-eqz v3, :cond_1

    .line 128
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Lcom/onesignal/ImmutableJSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    if-nez p2, :cond_0

    move-object v5, v4

    goto :goto_0

    :cond_0
    move-object v5, p2

    :goto_0
    invoke-virtual {v3, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 130
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 132
    :try_start_0
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getChannelKey()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 133
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 135
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 137
    :goto_1
    invoke-virtual {p0, v0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->fireUpdateSuccess(Lorg/json/JSONObject;)V

    return-void

    :cond_1
    const/4 v3, 0x0

    .line 141
    invoke-virtual {v1, v2, v3}, Lcom/onesignal/ImmutableJSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_2

    .line 144
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->setNewSession()V

    .line 147
    :cond_2
    :try_start_1
    new-instance v5, Lorg/json/JSONObject;

    invoke-direct {v5}, Lorg/json/JSONObject;-><init>()V

    .line 148
    invoke-virtual {v5, v2, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    if-eqz p2, :cond_3

    .line 151
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->getAuthHashKey()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v5, v2, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    :cond_3
    if-nez p2, :cond_4

    if-eqz v1, :cond_4

    .line 154
    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    .line 155
    invoke-virtual {p0, v4}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->saveChannelId(Ljava/lang/String;)V

    .line 156
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->resetCurrentState()V

    .line 157
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->setNewSession()V

    .line 161
    :cond_4
    invoke-virtual {v0, v5, v3}, Lcom/onesignal/UserState;->generateJsonDiffFromIntoSyncValued(Lorg/json/JSONObject;Ljava/util/Set;)Lorg/json/JSONObject;

    .line 162
    invoke-virtual {p0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;->scheduleSyncToServer()V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_2

    :catch_1
    move-exception p1

    .line 165
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_2
    return-void
.end method

.method public setPermission(Z)V
    .locals 0

    return-void
.end method

.method setSubscription(Z)V
    .locals 0

    return-void
.end method

.method abstract updateIdDependents(Ljava/lang/String;)V
.end method

.method updateState(Lorg/json/JSONObject;)V
    .locals 0

    return-void
.end method
