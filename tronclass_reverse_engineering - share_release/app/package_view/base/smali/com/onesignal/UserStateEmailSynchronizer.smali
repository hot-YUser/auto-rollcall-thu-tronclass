.class Lcom/onesignal/UserStateEmailSynchronizer;
.super Lcom/onesignal/UserStateSecondaryChannelSynchronizer;
.source "UserStateEmailSynchronizer.java"


# direct methods
.method constructor <init>()V
    .locals 1

    .line 13
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-direct {p0, v0}, Lcom/onesignal/UserStateSecondaryChannelSynchronizer;-><init>(Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;)V

    return-void
.end method


# virtual methods
.method fireUpdateFailure()V
    .locals 0

    .line 69
    invoke-static {}, Lcom/onesignal/OneSignal;->fireEmailUpdateFailure()V

    return-void
.end method

.method fireUpdateSuccess(Lorg/json/JSONObject;)V
    .locals 0

    .line 64
    invoke-static {}, Lcom/onesignal/OneSignal;->fireEmailUpdateSuccess()V

    return-void
.end method

.method protected getAuthHashKey()Ljava/lang/String;
    .locals 1

    .line 54
    const-string v0, "email_auth_hash"

    return-object v0
.end method

.method protected getChannelKey()Ljava/lang/String;
    .locals 1

    .line 49
    const-string v0, "email"

    return-object v0
.end method

.method protected getDeviceType()I
    .locals 1

    const/16 v0, 0xb

    return v0
.end method

.method protected getId()Ljava/lang/String;
    .locals 1

    .line 23
    invoke-static {}, Lcom/onesignal/OneSignal;->getEmailId()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method logoutChannel()V
    .locals 2

    .line 33
    const-string v0, ""

    invoke-static {v0}, Lcom/onesignal/OneSignal;->saveEmailId(Ljava/lang/String;)V

    .line 35
    invoke-virtual {p0}, Lcom/onesignal/UserStateEmailSynchronizer;->resetCurrentState()V

    .line 36
    invoke-virtual {p0}, Lcom/onesignal/UserStateEmailSynchronizer;->getToSyncUserState()Lcom/onesignal/UserState;

    move-result-object v0

    const-string v1, "identifier"

    invoke-virtual {v0, v1}, Lcom/onesignal/UserState;->removeFromSyncValues(Ljava/lang/String;)V

    .line 37
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 38
    const-string v1, "email_auth_hash"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 39
    const-string v1, "device_player_id"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 40
    const-string v1, "external_user_id"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 41
    invoke-virtual {p0}, Lcom/onesignal/UserStateEmailSynchronizer;->getToSyncUserState()Lcom/onesignal/UserState;

    move-result-object v1

    invoke-virtual {v1, v0}, Lcom/onesignal/UserState;->removeFromSyncValues(Ljava/util/List;)V

    .line 42
    invoke-virtual {p0}, Lcom/onesignal/UserStateEmailSynchronizer;->getToSyncUserState()Lcom/onesignal/UserState;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserState;->persistState()V

    .line 44
    invoke-static {}, Lcom/onesignal/OneSignal;->getEmailSubscriptionState()Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSEmailSubscriptionState;->clearEmailAndId()V

    return-void
.end method

.method protected newUserState(Ljava/lang/String;Z)Lcom/onesignal/UserState;
    .locals 1

    .line 18
    new-instance v0, Lcom/onesignal/UserStateEmail;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/UserStateEmail;-><init>(Ljava/lang/String;Z)V

    return-object v0
.end method

.method saveChannelId(Ljava/lang/String;)V
    .locals 0

    .line 28
    invoke-static {p1}, Lcom/onesignal/OneSignal;->saveEmailId(Ljava/lang/String;)V

    return-void
.end method

.method updateIdDependents(Ljava/lang/String;)V
    .locals 0

    .line 74
    invoke-static {p1}, Lcom/onesignal/OneSignal;->updateEmailIdDependents(Ljava/lang/String;)V

    return-void
.end method
